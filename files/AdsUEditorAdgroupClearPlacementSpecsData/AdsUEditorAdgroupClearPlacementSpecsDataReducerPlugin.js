__d(
  "AdsUEditorAdgroupClearPlacementSpecsDataReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "AdsPlacementsCreativeQualityUtils",
    "AdsUEditorAdgroupClearPlacementSpecsDataActionFlux",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorCampaignSelectors",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {
            eligibilityInformation: o("AdsUEditorCampaignSelectors")
              .eligibilityInformationSelector,
          },
          function (e, t, n) {
            var a = n.eligibilityInformation;
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              var t = o(
                  "AdsPlacementsCreativeQualityUtils",
                ).getAdgroupPlacementSpecForL1Reset(a),
                n = r("AdsAdgroupRecordAccessors").placement.set(
                  r("immutable").fromJS(t),
                  e,
                );
              return n;
            });
          },
          r("AdsUEditorAdgroupClearPlacementSpecsDataActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
