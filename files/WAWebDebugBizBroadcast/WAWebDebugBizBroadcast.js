__d(
  "WAWebDebugBizBroadcast",
  [
    "WATimeUtils",
    "WAWebBizBroadcastCampaignAPI",
    "WAWebBizBroadcastDeviceCapabilityCommon",
    "WAWebBizBroadcastProOnboardingStatus",
    "WAWebBizBroadcastProUpdateCampaignAction",
    "WAWebBizBroadcastRecipientLimitCommon",
    "WAWebBizBroadcastSystemMessageManager",
    "WAWebBizBroadcastTos",
    "WAWebBroadcastListAction",
    "WAWebChatCollection",
    "WAWebGraphQLConstants",
    "WAWebPonyfillsCryptoRandomUUID",
    "WAWebSchemaBusinessBroadcastCampaign",
    "WAWebTos",
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
    "WAWebWidToJid",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      o(
        "WAWebBizBroadcastDeviceCapabilityCommon",
      ).saveBizBroadcastCapabilityToStorage(e);
    }
    e.doc =
      "Override primary device Business Broadcast capability (true/false)";
    function s() {
      o("WAWebTos").TosManager.setState(
        o("WAWebBizBroadcastTos").getBizBroadcastTosId(),
        "ACCEPTED",
        o("WATimeUtils").unixTime(),
      );
    }
    ((s.doc = "Accept BB TOS locally (skips server RPC, bypasses TOS modal)"),
      (s.paramsToExecute = []));
    function u() {
      (o(
        "WAWebBizBroadcastDeviceCapabilityCommon",
      ).saveBizBroadcastProCapabilityToStorage(!0),
        o(
          "WAWebBizBroadcastProOnboardingStatus",
        ).debugSetBizBroadcastProOnboardingStatus(
          o("WAWebBizBroadcastProOnboardingStatus").BBProOnboardingStatus
            .ELIGIBLE_TO_ONBOARD,
        ));
    }
    ((u.doc =
      "Force BB Pro capability and onboarding status to eligible_to_onboard (E2E)"),
      (u.paramsToExecute = []));
    function c() {
      (o(
        "WAWebBizBroadcastDeviceCapabilityCommon",
      ).saveBizBroadcastProCapabilityToStorage(!0),
        o(
          "WAWebBizBroadcastProOnboardingStatus",
        ).debugSetBizBroadcastProOnboardingStatus(
          o("WAWebBizBroadcastProOnboardingStatus").BBProOnboardingStatus
            .ONBOARDED,
        ));
    }
    ((c.doc =
      "Force BB Pro capability and onboarding status to onboarded (E2E)"),
      (c.paramsToExecute = []));
    function d() {
      (c(), v("empty"));
    }
    ((d.doc =
      "Set up an onboarded BB Pro account with no campaigns or audiences (E2E)"),
      (d.paramsToExecute = []));
    function m() {
      (c(), v("audience_only"));
    }
    ((m.doc =
      "Set up an onboarded BB Pro account with an audience and no campaigns (E2E)"),
      (m.paramsToExecute = []));
    var p = "1234567890123456",
      _ = "1234567890123457",
      f = "1234567890123458",
      g = "1234567890123459",
      h = 25,
      y = null,
      C = "empty";
    function b() {
      v("empty");
    }
    function v(e) {
      if (((C = e), y == null)) {
        var t = self.fetch.bind(self),
          n = o("WAWebGraphQLConstants").generateFacebookGraphqlEndpoint();
        y = function () {
          Reflect.set(self, "fetch", t);
        };
        var r = 0;
        Reflect.set(self, "fetch", function (e, o) {
          var a = e instanceof Request ? e.url : String(e);
          if (a !== n) return t(e, o);
          var i = "234567890123456" + String(r);
          return (
            (r += 1),
            Promise.resolve(
              new Response(
                JSON.stringify({
                  data: {
                    create_wa_marketing_messages_custom_audience: {
                      custom_audience_id: i,
                    },
                    viewer: {
                      backing_waba: {
                        id: p,
                        is_custom_param_restricted_for_first_party_paid_messaging:
                          !1,
                        name: "BB Pro test business",
                        owner_business: {
                          id: _,
                          marketing_message_whatsapp_event_sharing_consent:
                            null,
                        },
                        wa_bb_pro_campaigns: {
                          edges: [],
                          page_info: { end_cursor: null, has_next_page: !1 },
                        },
                        wa_bb_pro_custom_audiences: {
                          edges:
                            C === "audience_only"
                              ? [
                                  {
                                    node: {
                                      id: g,
                                      name: "Recording audience",
                                      operation_status: {
                                        status_code: "NO_STATUS",
                                      },
                                      subscriber_size: h,
                                    },
                                  },
                                ]
                              : [],
                        },
                      },
                    },
                    xfb_whatsapp_bb_pro: { default_subscriber_pool: { id: f } },
                  },
                }),
                {
                  headers: { "Content-Type": "application/json" },
                  status: 200,
                },
              ),
            )
          );
        });
      }
    }
    ((b.doc = "Mock BB Pro audience GraphQL responses (E2E)"),
      (b.paramsToExecute = []));
    function S() {
      (y == null || y(), (y = null));
    }
    ((S.doc = "Restore GraphQL responses after a BB Pro audience E2E mock"),
      (S.paramsToExecute = []));
    var R = 1e4;
    function L(e) {
      var t = o("WAWebWidFactory").createWid(e);
      return o("WAWebChatCollection").ChatCollection.get(t) != null
        ? Promise.resolve()
        : new Promise(function (n, a) {
            var i = function () {
              o("WAWebChatCollection").ChatCollection.get(t) != null &&
                (o("WAWebChatCollection").ChatCollection.off("add", i), n());
            };
            (window.setTimeout(function () {
              (o("WAWebChatCollection").ChatCollection.off("add", i),
                a(
                  r("err")(
                    "Broadcast chat " +
                      e +
                      " never reached ChatCollection within " +
                      R +
                      "ms",
                  ),
                ));
            }, R),
              o("WAWebChatCollection").ChatCollection.on("add", i));
          });
    }
    async function E(e, t) {
      if (t.length < o("WAWebBizBroadcastRecipientLimitCommon").MIN_RECIPIENTS)
        throw r("err")(
          'createBizBroadcastAudience("' +
            e +
            '") needs at least ' +
            o("WAWebBizBroadcastRecipientLimitCommon").MIN_RECIPIENTS +
            " recipients, got " +
            t.length,
        );
      var n = await o("WAWebBroadcastListAction").createBroadcastListAction({
        broadcastListName: e,
        contacts: t.map(function (e) {
          return { lid: e + "@lid", phone: e };
        }),
      });
      return (await L(n), n);
    }
    E.doc = "Create a BB audience from a name and phone numbers, no UI (E2E)";
    function k() {
      var e = o("WAWebChatCollection").ChatCollection.getActive();
      if (e == null) throw r("err")("No active chat");
      return o("WAWebWidToJid").widToBroadcastJid(e.id);
    }
    async function I() {
      var e = k(),
        t = r("WAWebPonyfillsCryptoRandomUUID")(),
        n = o("WAWebUserPrefsMeUser")
          .getMeDevicePnOrThrow_DO_NOT_USE()
          .getDeviceId();
      (await o("WAWebBizBroadcastCampaignAPI").createBizBroadcastCampaign({
        adGroupId: "test_adgroup_" + t,
        adId: null,
        broadcastJid: e,
        campaignId: t,
        campaignName: "Test Campaign " + t,
        createdTimestamp: Date.now(),
        deviceId: n,
        msgId: null,
        pendingBroadcastMessageId: null,
        reservedQuota: null,
        scheduledTimestamp: null,
        status: o("WAWebSchemaBusinessBroadcastCampaign")
          .BusinessBroadcastCampaignStatus.PROCESSING,
      }),
        await o(
          "WAWebBizBroadcastSystemMessageManager",
        ).updateBizBroadcastSystemMessage(e));
    }
    ((I.doc =
      "Create a test PROCESSING campaign for the active broadcast chat (E2E)"),
      (I.paramsToExecute = []));
    async function T() {
      var e = k(),
        t = await o(
          "WAWebBizBroadcastCampaignAPI",
        ).getBizBroadcastCampaignsByBroadcastJid(e);
      (await Promise.all(
        t
          .filter(function (e) {
            return (
              e.status ===
              o("WAWebSchemaBusinessBroadcastCampaign")
                .BusinessBroadcastCampaignStatus.PROCESSING
            );
          })
          .map(function (e) {
            return o("WAWebBizBroadcastCampaignAPI").updateBizBroadcastCampaign(
              e.campaignId,
              {
                status: o("WAWebSchemaBusinessBroadcastCampaign")
                  .BusinessBroadcastCampaignStatus.SENT,
              },
            );
          }),
      ),
        await o(
          "WAWebBizBroadcastSystemMessageManager",
        ).updateBizBroadcastSystemMessage(e));
    }
    ((T.doc =
      "Complete all PROCESSING campaigns for the active broadcast chat (E2E)"),
      (T.paramsToExecute = []));
    function D(e, t) {
      return o(
        "WAWebBizBroadcastProUpdateCampaignAction",
      ).rescheduleBizBroadcastProCampaign(e, t);
    }
    D.doc =
      "Reschedule a BB Pro campaign: new start (epoch s); stop auto-set to +5d";
    var x = {
      acceptBizBroadcastTos: s,
      completeTestCampaignsForActiveChat: T,
      createBizBroadcastAudience: E,
      createTestProcessingCampaignForActiveChat: I,
      mockBizBroadcastProAudienceGraphQLResponses: b,
      rescheduleBizBroadcastProCampaign: D,
      restoreBizBroadcastProAudienceGraphQLResponses: S,
      setBizBroadcastDeviceCapability: e,
      setBizBroadcastProNuxEligible: u,
      setBizBroadcastProOnboarded: c,
      setupBizBroadcastProAudienceOnlyHome: m,
      setupBizBroadcastProEmptyHome: d,
    };
    l.default = x;
  },
  98,
);
