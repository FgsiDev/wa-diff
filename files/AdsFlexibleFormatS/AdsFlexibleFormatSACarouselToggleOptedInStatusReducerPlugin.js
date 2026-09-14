__d(
  "AdsFlexibleFormatSACarouselToggleOptedInStatusReducerPlugin",
  [
    "AdsFlexibleFormatSACarouselToggleOptedInStatusActionFlux",
    "AdsMutators",
    "AdsSACarouselFlexibleFormatMutator",
    "AdsUEditorAdgroupReducerUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              var n = t.targetFormat,
                r = "manual_uploads";
              return t.hasOptedIn === !0
                ? o(
                    "AdsSACarouselFlexibleFormatMutator",
                  ).optOutFormatTransformation(e, n, r)
                : o(
                    "AdsSACarouselFlexibleFormatMutator",
                  ).optInFormatTransformationWithBackfill(e, n, r, t.context);
            });
          },
          [
            r("AdsFlexibleFormatSACarouselToggleOptedInStatusActionFlux")
              .actionType,
          ],
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
