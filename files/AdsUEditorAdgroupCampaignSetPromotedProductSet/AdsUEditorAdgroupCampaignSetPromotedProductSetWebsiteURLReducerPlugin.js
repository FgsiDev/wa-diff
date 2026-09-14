__d(
  "AdsUEditorAdgroupCampaignSetPromotedProductSetWebsiteURLReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorCampaignSetPromotedProductSetWebsiteURLActionFlux",
    "adsDAShouldPrefillWebsiteURL",
    "isTruthy",
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
          function (e, t) {
            var n = t.adgroupIDs;
            return n == null
              ? e
              : o("AdsMutators").mutateEach(e, n, function (e) {
                  return r("isTruthy")(t.productSetID)
                    ? r("adsDAShouldPrefillWebsiteURL")(e)
                      ? r("isTruthy")(t.websiteURL)
                        ? r(
                            "AdsAdgroupRecordAccessors",
                          ).creative.object_story_spec.template_data.link.set(
                            t.websiteURL,
                            e,
                          )
                        : r(
                            "AdsAdgroupRecordAccessors",
                          ).creative.object_story_spec.template_data.link.set(
                            "",
                            e,
                          )
                      : e
                    : r(
                        "AdsAdgroupRecordAccessors",
                      ).creative.object_story_spec.template_data.link.delete(e);
                });
          },
          r("AdsUEditorCampaignSetPromotedProductSetWebsiteURLActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
