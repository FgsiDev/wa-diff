__d(
  "AdsUEditorAdgroupRemoveMMTFlagReducerPlugin",
  [
    "AdsAdgroupMMTMutators",
    "AdsCreativeEditorTemplateRenderFailedActionFlux",
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            return t.adgroupIDs == null
              ? e
              : o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
                  return o(
                    "AdsAdgroupMMTMutators",
                  ).adsMMTImageToVideoMutationSetDoFSpec(e, !1);
                });
          },
          r("AdsCreativeEditorTemplateRenderFailedActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
