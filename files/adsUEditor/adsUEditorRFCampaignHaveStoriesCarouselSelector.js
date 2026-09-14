__d(
  "adsUEditorRFCampaignHaveStoriesCarouselSelector",
  [
    "AdsPortraitCustomizationsUtils",
    "AdsPredictionObjectStore",
    "adsCreateSelector",
    "adsUEditorSelectedCampaignPlainObjectsSelector",
    "isFalsey",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [
          r("adsUEditorSelectedCampaignPlainObjectsSelector"),
          r("AdsPredictionObjectStore").getSelector,
        ],
        function (t, n) {
          return t.every(function (e) {
            var t = e.rf_prediction_id;
            if (r("isFalsey")(t)) return !1;
            var a = n(t);
            return (
              a.hasValueWithoutError() &&
              o(
                "AdsPortraitCustomizationsUtils",
              ).isRFStoriesCarouselFormatSelected(a.getValue())
            );
          });
        },
        { name: i.id + ".AdsRFCampaignHaveStoriesCarouselFormatSelector" },
      ),
      s = e;
    l.default = s;
  },
  98,
);
