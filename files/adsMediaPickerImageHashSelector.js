__d(
  "adsMediaPickerImageHashSelector",
  [
    "AdsMetadataConnectedSourcesUtils",
    "AdsSFMediaPickerDataProvider",
    "adsCreateSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [r("AdsSFMediaPickerDataProvider").toFluxSelector()],
        function (t) {
          return o("AdsMetadataConnectedSourcesUtils").getMediaPickerImageHash(
            t,
          );
        },
        { name: i.id + ".adsMediaPickerImageHashSelector" },
      ),
      s = e;
    l.default = s;
  },
  98,
);
