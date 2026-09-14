__d(
  "AdsUEditorAdgroupRemoveFlexibleFormatReducerPlugin",
  [
    "AdsAPIAdgroupRecordUtils",
    "AdsAdgroupLinkPostFormatMutators",
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupRemoveFlexibleFormatActionFlux",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              return o("AdsAPIAdgroupRecordUtils").isFlexibleFormatAd(e)
                ? o(
                    "AdsAdgroupLinkPostFormatMutators",
                  ).removeCreativeAssetGroupsSpecField(e)
                : e;
            });
          },
          r("AdsUEditorAdgroupRemoveFlexibleFormatActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
