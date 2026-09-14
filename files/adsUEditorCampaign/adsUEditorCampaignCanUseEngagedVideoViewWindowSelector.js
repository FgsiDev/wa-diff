__d(
  "adsUEditorCampaignCanUseEngagedVideoViewWindowSelector",
  [
    "AdCampaignConversionMultiEventProducts",
    "AdCampaignLJORollout",
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsEventsManagerSequencedConversionsCreationEligibilityUtils",
    "AdsPromotedObjectTypes",
    "AdsUEditorSelectors",
    "adsCreateSelector",
    "adsEVCDefaultingExperimentUtils",
    "adsGetUniformValueSelector",
    "adsUEditorCampaignDerivedPromotedObjectTypeSelector",
    "adsUEditorCampaignIsSequencedConversionCreationSelector",
    "adsUEditorCampaignPromotedObjectSelector",
    "gkx",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = r("immutable").Set([
        (s = r("AdsAPIObjectives")).OUTCOME_LEADS,
        s.OUTCOME_SALES,
        s.OUTCOME_ENGAGEMENT,
        s.CONVERSIONS,
      ]),
      d = r("adsCreateSelector")(
        [
          (u = r("adsGetUniformValueSelector"))(
            (e = o("AdsUEditorSelectors")).campaignGroup.bulkByAccessorToJS(
              function (e) {
                return e.objective;
              },
            ),
            s.NONE,
          ),
        ],
        function (t) {
          return c.contains(t);
        },
        { name: i.id + ".AdsUEditorl3ObjectiveEligibleForEngagedVideoView" },
      ),
      m = r("adsCreateSelector")(
        [
          u(
            e.campaignGroup.bulkByAccessorToJS(function (e) {
              return e.objective;
            }),
            null,
          ),
          u(
            e.campaign.bulkByAccessorToJS(function (e) {
              var t;
              return (t = e.promoted_object) == null ? void 0 : t.pixel_id;
            }),
            null,
          ),
          u(
            e.campaign.bulkByAccessorToJS(function (e) {
              var t;
              return (t = e.promoted_object) == null
                ? void 0
                : t.application_id;
            }),
            null,
          ),
          u(
            e.campaign.bulkByAccessorToJS(function (e) {
              return e.optimization_goal;
            }),
            r("AdsAPIOptimizationGoals").NONE,
          ),
          u(r("adsUEditorCampaignDerivedPromotedObjectTypeSelector"), null),
          u(
            e.campaign.bulkByAccessorToJS(function (e) {
              var t;
              return (t = e.promoted_object) == null ? void 0 : t.variation;
            }),
            null,
          ),
          r("adsUEditorCampaignPromotedObjectSelector"),
          r("adsUEditorCampaignIsSequencedConversionCreationSelector"),
        ],
        function (t, n, r, o, a, i, l, s) {
          return y(
            t,
            n,
            r,
            o,
            l == null ? void 0 : l.multi_event_product,
            a,
            i,
            s,
          );
        },
        { name: i.id + ".AdsUEditorL2ConfigEligibleForEngagedVideoView" },
      ),
      p = r("adsCreateSelector")(
        [d, m],
        function (t, n) {
          return t && n;
        },
        {
          name:
            i.id + ".AdsUEditorCampaignCanUseEngagedVideoViewWindowSelector",
        },
      );
    function _(e, t, n) {
      return e !== r("AdsPromotedObjectTypes").PRODUCT_SET || !h(t)
        ? !1
        : n == null ||
            n === "PRODUCT_SET_AND_OMNICHANNEL" ||
            n === "PRODUCT_SET_AND_WEBSITE";
    }
    function f(e, t) {
      return (
        (r("gkx")("12555") &&
          e === r("AdsPromotedObjectTypes").WEBSITE_AND_IN_STORE) ||
        t === "PRODUCT_SET_AND_IN_STORE"
      );
    }
    function g(e) {
      return e === r("AdsPromotedObjectTypes").WEB_AND_APP;
    }
    function h(e) {
      return (
        e === r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS ||
        e === r("AdsAPIOptimizationGoals").APP_INSTALLS ||
        e === r("AdsAPIOptimizationGoals").VALUE
      );
    }
    function y(e, t, n, a, i, l, s, u) {
      if (!h(a)) return !1;
      var c = o(
        "AdsEventsManagerSequencedConversionsCreationEligibilityUtils",
      ).isSetupEligibleForSequencedEventCreation(e, l, a);
      return (i ===
        r("AdCampaignConversionMultiEventProducts").BANKING_AND_CREDIT_CARDS ||
        u === !0) &&
        c !== r("AdCampaignLJORollout").NO_ACCESS
        ? !1
        : f(l, s) ||
            _(l, a, s) ||
            g(l) ||
            a === r("AdsAPIOptimizationGoals").APP_INSTALLS
          ? !0
          : o("adsEVCDefaultingExperimentUtils").isEVCDefaultingEnabled()
            ? l === r("AdsPromotedObjectTypes").PIXEL
            : t !== null && n == null;
    }
    ((l.supportedEngagedVideoViewObjective = c),
      (l.AdsUEditorl3ObjectiveEligibleForEngagedVideoView = d),
      (l.AdsUEditorL2ConfigEligibleForEngagedVideoView = m),
      (l.AdsUEditorCampaignCanUseEngagedVideoViewWindowSelector = p),
      (l.isEVCSupportedForL3CatalogOnFlow = _),
      (l.isCampaignEligibleForEngagedVideoView = y));
  },
  98,
);
