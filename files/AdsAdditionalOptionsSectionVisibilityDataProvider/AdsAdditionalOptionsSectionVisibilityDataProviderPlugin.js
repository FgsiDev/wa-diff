__d(
  "AdsAdditionalOptionsSectionVisibilityDataProviderPlugin",
  [
    "AdsAdditionalOptionsConsts",
    "AdsAdditionalOptionsDefaultConsts",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        initialState: r("immutable").Map(
          o("AdsAdditionalOptionsConsts")
            .AdditionalOptionsSection.members()
            .map(function (e) {
              return [
                e,
                o("AdsAdditionalOptionsDefaultConsts")
                  .DEFAULT_AO_SECTION_CONFIG,
              ];
            }),
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
