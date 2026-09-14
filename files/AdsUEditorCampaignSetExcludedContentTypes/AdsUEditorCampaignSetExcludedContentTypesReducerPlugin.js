__d(
  "AdsUEditorCampaignSetExcludedContentTypesReducerPlugin",
  [
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsPlacementReducerUtils",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignSetExcludedContentTypesActionFlux",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {},
          function (e, t) {
            var n = t.campaignIDs,
              a = t.contentType,
              i = t.value;
            return o("AdsMutators").mutateEach(e, n, function (e) {
              var t,
                n = (
                  (t = e.targeting.excluded_brand_safety_content_types) != null
                    ? t
                    : r("immutable").List()
                ).toSet(),
                l = i ? n.add(a) : n.remove(a);
              return o("AdsPlacementReducerUtils").updatePlacementSpec(
                r(
                  "AdsCampaignRecordAccessors",
                ).targeting.excluded_brand_safety_content_types.set(
                  r("immutable").List(l),
                  e,
                ),
              );
            });
          },
          o("AdsUEditorCampaignSetExcludedContentTypesActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
