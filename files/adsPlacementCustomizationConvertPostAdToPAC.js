__d(
  "adsPlacementCustomizationConvertPostAdToPAC",
  [
    "AdsAPIObjectives",
    "AdsAdgroupRecordAccessors",
    "AdsAssetFeedUtils",
    "AdsMessengerConstants",
    "AdsMutators",
    "AdsUEditorUnifiedCreationAdgroupMutators",
    "ApiDynamicCreativeOptimizationTypes",
    "adsPlacementCustomizationAssetFeedSpecFieldsToCopyToAdWithPost",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, o) {
      return t[n] != null ? e.setIn(o, r("immutable").fromJS(t[n])) : e;
    }
    function s(t, n, a) {
      var i,
        l,
        s = n,
        u = t;
      ((u = r(
        "AdsAdgroupRecordAccessors",
      ).creative.asset_feed_spec.optimization_type.set(
        r("ApiDynamicCreativeOptimizationTypes").PLACEMENT,
        u,
      )),
        (u = r(
          "AdsAdgroupRecordAccessors",
        ).creative.asset_feed_spec.asset_customization_rules.set(
          r("immutable").fromJS([((i = {}), (i.customization_spec = []), i)]),
          u,
        )));
      var c = (l = u.creative) == null ? void 0 : l.page_welcome_message;
      return (
        c != null &&
          (u = o("AdsMutators").chain(
            r(
              "AdsAdgroupRecordAccessors",
            ).creative.asset_feed_spec.additional_data.page_welcome_message.set(
              c,
            ),
            r("AdsAdgroupRecordAccessors").creative.page_welcome_message.delete,
          )(u)),
        a === r("AdsAPIObjectives").MESSAGES &&
          s.call_to_action_types &&
          s.call_to_action_types.length === 1 &&
          (!s.link_urls ||
            (s.link_urls &&
              s.link_urls.length === 1 &&
              s.link_urls[0].website_url === "")) &&
          (s = babelHelpers.extends({}, s, {
            link_urls: [
              { website_url: o("AdsMessengerConstants").EMPTY_MESSENGER_LINK },
            ],
            call_to_actions: [
              {
                type: s.call_to_action_types[0],
                value: { app_destination: "MESSENGER" },
              },
            ],
          })),
        o("AdsAssetFeedUtils").isPACAndIGAdsFromRecord(u) &&
          s.call_to_action_types &&
          s.link_urls &&
          (s = babelHelpers.extends({}, s, {
            call_to_actions: [
              {
                type: s.call_to_action_types[0],
                value: { link: s.link_urls[0].website_url },
              },
            ],
          })),
        o("AdsAssetFeedUtils").isClickToMultiDestAds(u) &&
          (s = o(
            "AdsUEditorUnifiedCreationAdgroupMutators",
          ).initializeAFSCTATypeFromMultiDestCTAs(t, s)),
        r(
          "adsPlacementCustomizationAssetFeedSpecFieldsToCopyToAdWithPost",
        ).forEach(function (t, n) {
          u = e(u, s, n, t);
        }),
        u
      );
    }
    l.default = s;
  },
  98,
);
