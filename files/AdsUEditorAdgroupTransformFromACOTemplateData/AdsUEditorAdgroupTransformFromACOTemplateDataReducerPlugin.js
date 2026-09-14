__d(
  "AdsUEditorAdgroupTransformFromACOTemplateDataReducerPlugin",
  [
    "AdsMutators",
    "AdsUEditorAdgroupACOMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupTransformFromACOTemplateDataActionFlux",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              return o(
                "AdsUEditorAdgroupACOMutators",
              ).transformFromACOTemplateData(
                e,
                t.isShopAdsBundleAvailable,
                t.autotaggingDefaultValue,
              );
            });
          },
          o("AdsUEditorAdgroupTransformFromACOTemplateDataActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
