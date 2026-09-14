__d(
  "AdsFlexibleFormatSetFTSCustomizationsReducerPlugin",
  [
    "AdsAdgroupFormatTransformationMutators",
    "AdsFlexibleFormatSetFTSCustomizationsActionFlux",
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            return r("justknobx")._("4416")
              ? o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
                  var n;
                  return o(
                    "AdsAdgroupFormatTransformationMutators",
                  ).adsAdgroupFTSSetUseIntroCardMutator(
                    e,
                    t.useIntroCard,
                    (n = t.dataSource) != null ? n : "catalog",
                  );
                })
              : e;
          },
          [r("AdsFlexibleFormatSetFTSCustomizationsActionFlux").actionType],
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
