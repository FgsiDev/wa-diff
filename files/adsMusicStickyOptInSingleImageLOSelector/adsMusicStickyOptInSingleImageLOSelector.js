__d(
  "adsMusicStickyOptInSingleImageLOSelector",
  [
    "AdsUEditorAdgroupTransformationsGKSelector",
    "adsCreateSelector",
    "adsMusicStickyOptInSingleImageLOSelectorUtils",
    "userSettingsSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [r("userSettingsSelector")],
        function (t) {
          return o(
            "adsMusicStickyOptInSingleImageLOSelectorUtils",
          ).adsMusicStickyOptInSingleImageLO(
            t,
            o(
              "AdsUEditorAdgroupTransformationsGKSelector",
            ).isMusicDefaultStickyOptOut(),
          );
        },
        { name: i.id + ".adsMusicStickyOptInSingleImageLOSelector" },
      ),
      s = e;
    l.default = s;
  },
  98,
);
