__d(
  "AdsUEditorCampaignSetSavedAudienceReducerUtils",
  [
    "AdsAPICampaignRecord",
    "AdsAPIObjectives",
    "AdsAPITargetFields",
    "AdsBulkValueUtils",
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsPlacementTargetingFields",
    "AdsTargetingFilterGoalBasedAudiencesUtils",
    "adsDeleteProductAudienceSpecsFromCampaignRecord",
    "immutable",
    "justknobx",
    "whitelistObjectKeys",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("AdsAPICampaignRecord").getSpec().targeting;
    function s(e) {
      var t = e.campaign,
        n = e.newTargetingSpec,
        a = e.objective,
        i = e.oldTargetingSpec,
        l = e.savedAudienceID;
      if (l == null && n == null) return t;
      var s = [].concat(
          r("AdsPlacementTargetingFields"),
          a !== r("AdsAPIObjectives").PRODUCT_CATALOG_SALES
            ? [
                r("AdsAPITargetFields").PRODUCT_AUDIENCE_SPECS,
                r("AdsAPITargetFields").EXCLUDED_PRODUCT_AUDIENCE_SPECS,
              ]
            : [],
          [
            r("AdsAPITargetFields").IS_WHATSAPP_DESTINATION_AD,
            r("AdsAPITargetFields").SUBSCRIBER_UNIVERSE,
          ],
        ),
        c = {};
      if (n != null) {
        var d = new Set(s);
        if (
          (Object.keys(n).forEach(function (e) {
            d.has(e) || (c[e] = n[e]);
          }),
          n.geo_locations != null)
        ) {
          var m,
            p = n.geo_locations,
            _ = (m = p.location_types) != null ? m : ["home", "recent"];
          _.includes("frequently_in") ||
            (c.geo_locations = babelHelpers.extends({}, p, {
              location_types: [].concat(_, ["frequently_in"]),
            }));
        }
      }
      var f = r("whitelistObjectKeys")(i, s),
        g = babelHelpers.extends({}, c, f),
        h = o(
          "AdsTargetingFilterGoalBasedAudiencesUtils",
        ).getGoalAudienceIDsFromCampaigns([t]),
        y =
          h.goalExclusionIDs.size > 0 ||
          h.goalInclusionIDs.size > 0 ||
          h.goalLookalikeInclusionSeedIDs.size > 0,
        C = g;
      if (y) {
        var b = typeof i.toJS == "function" ? i.toJS() : i;
        C = o(
          "AdsTargetingFilterGoalBasedAudiencesUtils",
        ).mergeGoalCardAudiencesIntoSpec(b, g, h);
      }
      return o("AdsMutators").chain(
        function (e) {
          return u(e, C);
        },
        function (e) {
          return a !== r("AdsAPIObjectives").PRODUCT_CATALOG_SALES
            ? e
            : r("adsDeleteProductAudienceSpecsFromCampaignRecord")(e);
        },
      )(t);
    }
    function u(t, n) {
      var o = r(
          "AdsCampaignRecordAccessors",
        ).targeting.targeting_automation.individual_setting.device.get(t),
        a = r("AdsCampaignRecordAccessors").targeting.set(
          new e(r("immutable").fromJS(n).toJS()),
          t,
        );
      return r("justknobx")._("365")
        ? a
        : o == null
          ? r(
              "AdsCampaignRecordAccessors",
            ).targeting.targeting_automation.individual_setting.device.delete(a)
          : r(
              "AdsCampaignRecordAccessors",
            ).targeting.targeting_automation.individual_setting.device.set(
              o,
              a,
            );
    }
    function c(e, t, n, a) {
      if (!a) return e;
      var i = o("AdsBulkValueUtils").getUniformValue(t);
      if (i == null) return e;
      var l = n.getValue();
      if (l == null) return e;
      var s = l.get(i);
      if (s == null) return e;
      var u = s.getValue();
      return u == null
        ? e
        : r("AdsCampaignRecordAccessors").promoted_object.place_page_set_id.set(
            u,
            e,
          );
    }
    ((l.campaignSetTargeting = s),
      (l.replaceTargetingSpecPreservingDeviceState = u),
      (l.setFlatPageSetIfRequired = c));
  },
  98,
);
