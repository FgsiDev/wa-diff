__d(
  "WAWebBizAiCoachMessageEditMutation",
  [
    "Promise",
    "WALogger",
    "WAWebBizAiCoachMessageEditMutation.graphql",
    "WAWebFetchAdAccountToken",
    "WAWebLidMigrationUtils",
    "WAWebNetworkStatus",
    "WAWebPonyfillsCryptoRandomUUID",
    "WAWebRelayClient",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p =
        e !== void 0
          ? e
          : (e = n("WAWebBizAiCoachMessageEditMutation.graphql"));
    function _(e, t, a) {
      var i, l, _, f;
      if (e == null)
        return (
          o("WALogger")
            .ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "BizAI message edit coaching abandoned: consumer identity could not be resolved",
                ])),
            )
            .sendLogs("biz-ai-message-edit-coaching-missing-consumer"),
          (m || (m = n("Promise"))).resolve()
        );
      var g =
          (i =
            (l = o("WAWebLidMigrationUtils").toLid(e)) == null
              ? void 0
              : l.user) != null
            ? i
            : "",
        h =
          (_ =
            (f = o("WAWebLidMigrationUtils").toPn(e)) == null
              ? void 0
              : f.user) != null
            ? _
            : "";
      return o("WAWebFetchAdAccountToken")
        .fetchToken()
        .then(function (e) {
          if (e.type !== "success") {
            o("WALogger")
              .ERROR(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "BizAI message edit coaching token fetch failed",
                  ])),
              )
              .sendLogs("biz-ai-message-edit-coaching-token-fetch-fail");
            return;
          }
          return r("WAWebNetworkStatus")
            .waitIfOffline()
            .then(function () {
              return o("WAWebRelayClient")
                .commitMutation(
                  p,
                  {
                    input: {
                      coached_response: { text: a },
                      context: {
                        consumer_logical_id: g,
                        consumer_phone_number: h,
                      },
                      message_id: t,
                      request_id: r("WAWebPonyfillsCryptoRandomUUID")(),
                    },
                  },
                  { environmentType: "facebook", accessToken: e.token },
                )
                .then(function (e) {
                  var t;
                  (e == null ||
                  (t = e.xfb_meta_ai_biz_agent_wa_coach_ai_response) == null
                    ? void 0
                    : t.success) !== !0 &&
                    o("WALogger")
                      .ERROR(
                        c ||
                          (c = babelHelpers.taggedTemplateLiteralLoose([
                            "BizAI message edit coaching returned non-success",
                          ])),
                      )
                      .sendLogs("biz-ai-message-edit-coaching-rejected");
                });
            });
        })
        .catch(function (e) {
          var t = r("getErrorSafe")(e);
          (o("WAWebFetchAdAccountToken").hasGraphQLAuthError(t) &&
            o("WAWebFetchAdAccountToken").markTokenAsInvalid(),
            o("WALogger")
              .ERROR(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "BizAI message edit coaching failed",
                  ])),
              )
              .catching(t)
              .sendLogs("biz-ai-message-edit-coaching-failed"));
        });
    }
    l.coachAgentMessageEdit = _;
  },
  98,
);
