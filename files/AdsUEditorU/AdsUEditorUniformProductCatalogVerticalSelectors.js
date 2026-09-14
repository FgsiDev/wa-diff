__d(
  "AdsUEditorUniformProductCatalogVerticalSelectors",
  [
    "AdsUEditorProductCatalogVerticalsSelectors",
    "CatalogVertical",
    "adsCreateSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t) {
        return t.match({
          loaded: function (t) {
            var e = t[0];
            return t.every(function (t) {
              return t === e;
            })
              ? e
              : r("CatalogVertical").NONE;
          },
          error: function () {
            return r("CatalogVertical").NONE;
          },
          loading: function () {
            return r("CatalogVertical").NONE;
          },
        });
      },
      s = r("adsCreateSelector")(
        [
          o("AdsUEditorProductCatalogVerticalsSelectors")
            .adsUEditorCampaignProductCatalogVerticalsSelector,
        ],
        e,
        {
          name:
            i.id + ".adsUEditorCampaignUniformProductCatalogVerticalSelector",
        },
      );
    l.adsUEditorCampaignUniformProductCatalogVerticalSelector = s;
  },
  98,
);
