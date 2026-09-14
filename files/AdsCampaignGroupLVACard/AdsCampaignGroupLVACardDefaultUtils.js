__d(
  "AdsCampaignGroupLVACardDefaultUtils",
  [
    "AdsAPICampaignGroupRecordUtils",
    "AdsAdgroupStoreUtils",
    "AdsCampaignGroupLVACardUtils",
    "AdsCampaignGroupRecordAccessors",
    "AdsCampaignLiveVideoAdsUtils",
    "AdsCampaignStoreUtils",
    "AdsDataAtom",
    "AdsLiveVideoAdUtils",
    "AdsMutators",
    "AdsUEditorCampaignSelectLiveVideoPromotedObjectTypeDataAction",
    "AdsUEditorHostIDs",
    "AdsUEditorLiveVideoAdUpdateCampaignConfigAction",
    "asyncToGeneratorRuntime",
    "qex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e, t) {
      var n;
      return (
        t === void 0 && (t = !1),
        o(
          "AdsCampaignGroupLVACardUtils",
        ).isFBDestinationEligibleForCampaignGroupLVACard() &&
          ((n = e.live_video_advertiser_details) == null
            ? void 0
            : n.should_default_toggle_on_from_model) === !0 &&
          (t ? r("qex")._("1362") : r("qex")._("1702")) === !0
      );
    }
    function u(e, t) {
      return o("AdsMutators").chain(
        r(
          "AdsCampaignGroupRecordAccessors",
        ).promoted_object.live_video_destination.set("FACEBOOK"),
        function (e) {
          if (o("AdsAPICampaignGroupRecordUtils").hasBudget(e)) {
            var n = e.daily_budget != null;
            if (n) {
              var a,
                i = o("AdsCampaignLiveVideoAdsUtils").getLVADefaultBudget(t);
              return o("AdsMutators").chain(
                (a = r("AdsCampaignGroupRecordAccessors")).lifetime_budget.set(
                  Math.round(i) + "",
                ),
                a.daily_budget.delete,
                a.spend_cap.delete,
                a.time_suggestion.delete,
                a.budget_strategy.delete,
              )(e);
            }
          }
          return e;
        },
      )(e);
    }
    function c(e, t) {
      return t === "FACEBOOK" && s(e, !0);
    }
    function d(e, t, n) {
      var r =
        o(
          "AdsCampaignGroupLVACardUtils",
        ).isEligibleObjectiveForCampaignGroupLVACard(e) && s(n);
      return r ? u(t, n) : t;
    }
    function m(t, a, l, s, u, c) {
      c === o("AdsLiveVideoAdUtils").LiveVideoAdConfigUpdateAction.OPT_IN &&
        r("qex")._("1702");
      var d = t;
      return (
        a != null
          ? (d = o("AdsMutators").chain(
              r(
                "AdsCampaignGroupRecordAccessors",
              ).promoted_object.live_video_destination.set(a),
              function (e) {
                if (l) {
                  var t =
                    e.daily_budget != null &&
                    u !== r("AdsUEditorHostIDs").CREATION;
                  if (t) {
                    var n,
                      a = o("AdsCampaignLiveVideoAdsUtils").getLVADefaultBudget(
                        s,
                      );
                    return o("AdsMutators").chain(
                      (n = r(
                        "AdsCampaignGroupRecordAccessors",
                      )).lifetime_budget.set(Math.round(a) + ""),
                      n.daily_budget.delete,
                      n.spend_cap.delete,
                      n.time_suggestion.delete,
                      n.budget_strategy.delete,
                    )(e);
                  }
                }
                return e;
              },
            )(d))
          : (d = r(
              "AdsCampaignGroupRecordAccessors",
            ).promoted_object.live_video_destination.delete(d)),
        (e || (e = r("AdsDataAtom"))).addPostDispatchCallback(
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var l,
              d,
              m = yield o(
                "AdsCampaignStoreUtils",
              ).loadCampaignIDsInCampaignGroups([t.id]),
              p =
                (((l = t.promoted_object) == null
                  ? void 0
                  : l.live_video_destination) === "INSTAGRAM" ||
                  ((d = t.promoted_object) == null
                    ? void 0
                    : d.live_video_destination) == null) &&
                a === "FACEBOOK";
            (r("AdsUEditorLiveVideoAdUpdateCampaignConfigAction").dispatch(
              {
                accountID: s.account_id,
                campaignIDs: m,
                hostID: u,
                isTransitionToFB: p,
                liveVideoAdType:
                  c ===
                  o("AdsLiveVideoAdUtils").LiveVideoAdConfigUpdateAction.OPT_OUT
                    ? "NONE"
                    : "CURRENT_LIVE",
                updateAction: c,
              },
              {
                line: "177",
                module: "AdsCampaignGroupLVACardDefaultUtils.js",
                moduleID: i.id,
              },
            ),
              a === "INSTAGRAM" &&
                c ===
                  o("AdsLiveVideoAdUtils").LiveVideoAdConfigUpdateAction
                    .OPT_IN &&
                (e || (e = r("AdsDataAtom"))).addPostDispatchCallback(
                  n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                    var e = yield o(
                      "AdsAdgroupStoreUtils",
                    ).loadAdgroupIDsInCampaigns([].concat(m));
                    r(
                      "AdsUEditorCampaignSelectLiveVideoPromotedObjectTypeDataAction",
                    ).dispatch(
                      {
                        adgroupIDs: [].concat(e),
                        adgroups: null,
                        campaignIDs: [].concat(m),
                        hostID: u,
                        logData: {
                          accountID: s.account_id,
                          objective: t.objective,
                        },
                      },
                      {
                        line: "200",
                        module: "AdsCampaignGroupLVACardDefaultUtils.js",
                        moduleID: i.id,
                      },
                    );
                  }),
                ));
          }),
        ),
        d
      );
    }
    ((l.isEligibleForCampaignGroupLVACardDefault = s),
      (l.isCampaignGroupLVADefaultedToFacebook = c),
      (l.defaultCampaignGroupWithLVACardDefaultWhenEligible = d),
      (l.setCampaignGroupLiveVideoDestionationWithCampaignDefault = m));
  },
  98,
);
