__d(
  "WAWebBizAiCoachAgentEditAction",
  [
    "JSResourceForInteraction",
    "WALogger",
    "WAWebLazyLoadedRetriable",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = r("WAWebLazyLoadedRetriable")(function () {
        return r("JSResourceForInteraction")(
          "WAWebBizAiCoachMessageEditMutation",
        )
          .__setRef("WAWebBizAiCoachAgentEditAction")
          .load();
      }, "BizAiCoachMessageEdit");
    function u(t, n, a) {
      s()
        .then(function (e) {
          return e.coachAgentMessageEdit(t, n, a);
        })
        .catch(function (t) {
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "BizAI message edit coaching module failed to load",
                ])),
            )
            .catching(r("getErrorSafe")(t))
            .sendLogs("biz-ai-message-edit-coaching-load-fail");
        });
    }
    l.startAgentEditCoaching = u;
  },
  98,
);
