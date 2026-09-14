__d(
  "AdsUEditorAdgroupSetTextTransformationTypesReducerPlugin",
  [
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSetTextTransformationTypesDataActionFlux",
    "AdsUEditorAdgroupTextTransformationMutators",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            var n = t.textTransformationType;
            return o("AdsMutators").mutateEach(
              e,
              t.adgroupIDs,
              function (e, t) {
                return n != null
                  ? o(
                      "AdsUEditorAdgroupTextTransformationMutators",
                    ).addTextTransformations(
                      e,
                      r("immutable").List(["TEXT_LIQUIDITY"]),
                    )
                  : o(
                      "AdsUEditorAdgroupTextTransformationMutators",
                    ).removeTextTransformations(
                      e,
                      r("immutable").List(["TEXT_LIQUIDITY"]),
                    );
              },
            );
          },
          r("AdsUEditorAdgroupSetTextTransformationTypesDataActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
