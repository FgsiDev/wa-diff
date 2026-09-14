__d(
  "AdsFlexibleFormatDACollectionToggleOptedInStatusReducerPlugin",
  [
    "AdsFlexibleFormatDACollectionToggleOptedInStatusActionFlux",
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "adsACOConvertToACOAd",
    "adsACORemoveACOSpec",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              return t.hasOptedIn
                ? r("adsACORemoveACOSpec")(e, "reactive_control")
                : o("adsACOConvertToACOAd").adsACOConvertToACOAd(
                    e,
                    "reactive_control",
                  );
            });
          },
          [
            r("AdsFlexibleFormatDACollectionToggleOptedInStatusActionFlux")
              .actionType,
          ],
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
