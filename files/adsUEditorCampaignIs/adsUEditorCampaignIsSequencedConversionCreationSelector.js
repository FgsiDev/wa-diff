__d(
  "adsUEditorCampaignIsSequencedConversionCreationSelector",
  [
    "AdsBulkValueUtils",
    "AdsStrings",
    "AdsUEditorSelectors",
    "adsCreateSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [
          o("AdsUEditorSelectors").campaign.bulkByAccessorToJS(function (e) {
            return e.is_sequenced_conversion_creation;
          }),
        ],
        function (t) {
          var e;
          return (e = o("AdsBulkValueUtils").getUniformValue(
            t,
            o("AdsStrings").MixedValuePlaceholder.toString(),
          )) != null
            ? e
            : null;
        },
        {
          name:
            i.id + ".adsUEditorCampaignIsSequencedConversionCreationSelector",
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
