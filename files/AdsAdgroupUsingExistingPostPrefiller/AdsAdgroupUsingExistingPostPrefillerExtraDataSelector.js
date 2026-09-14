__d(
  "AdsAdgroupUsingExistingPostPrefillerExtraDataSelector",
  [
    "AdsFBStorySelectionProvider",
    "AdsLoadStateUtils_LEGACY",
    "AdsPagePostProvider",
    "adsCreateSelector",
    "adsCreateStoreSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateStoreSelector")(
        [],
        function (t) {
          var e,
            n = t.adgroup;
          return (e = n.creative) == null ? void 0 : e.object_story_id;
        },
        { name: i.id + ".objectStoryIDSelector" },
      ),
      s = r("adsCreateSelector")(
        [
          e,
          r("AdsPagePostProvider").toFluxSelector(),
          r("AdsFBStorySelectionProvider").toFluxSelector(),
        ],
        function (t, n, r) {
          var e =
              t != null
                ? o(
                    "AdsLoadStateUtils_LEGACY",
                  ).fromLoadObjectTreatEmptyAsLoading(n.get(t))
                : null,
            a =
              e != null ? o("AdsLoadStateUtils_LEGACY").toLoadObject(e) : null;
          return { originalPagePostLoadObject: a, storySelections: r };
        },
        {
          name: i.id + ".AdsAdgroupUsingExistingPostPrefillerExtraDataSelector",
        },
      ),
      u = s;
    l.default = u;
  },
  98,
);
