__d(
  "AdsUEditorAdgroupOmnichannelSetDecisionHandlingReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "AdsOmnichannelDecisionHandlingEnum",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupOmnichannelSetDecisionHandlingActionFlux",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupWebsiteExtensionTypesMutator",
    "ProductBrowsingAdsUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {
            parentData: o(
              "AdsUEditorAdgroupSelectors",
            ).adObjectsList.mapTransform(
              o("AdsUEditorAdgroupAdObjectsUtils").getParentAdObjectsExtraData,
            ),
          },
          function (e, t, n) {
            var a = n.parentData;
            return o("AdsMutators").mutateEach(
              e,
              t.adgroupIDs,
              function (e, n) {
                var i =
                    t.decisionHandling ===
                    r("AdsOmnichannelDecisionHandlingEnum").DYNAMIC
                      ? "automatic"
                      : "deeplink_with_web_fallback",
                  l = e;
                ((l = o(
                  "AdsUEditorAdgroupWebsiteExtensionTypesMutator",
                ).cleanWebsiteExtensionFields(l)),
                  (l = o("AdsMutators").chain(
                    r(
                      "AdsAdgroupRecordAccessors",
                    ).creative.applink_treatment.set(i),
                  )(l)));
                var s = a.get(n);
                return (
                  (l = o(
                    "ProductBrowsingAdsUtils",
                  ).maybeUpdateProductBrowsingSpec(
                    l,
                    !1,
                    null,
                    s == null ? void 0 : s.campaignGroup,
                    s == null ? void 0 : s.campaign,
                    "omnichannel_decision_handling_change",
                    null,
                  )),
                  l
                );
              },
            );
          },
          o("AdsUEditorAdgroupOmnichannelSetDecisionHandlingActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
