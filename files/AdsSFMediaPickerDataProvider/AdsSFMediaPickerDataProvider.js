__d(
  "AdsSFMediaPickerDataProvider",
  [
    "AdsSFLiveClipsIndicatorBaseAssetTriggerReducerPlugin",
    "AdsSFLiveClipsIndicatorDataProvider",
    "AdsSFMediaPickerDataProviderPlugin",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    a.exports = n("Laminar").__createProvider(
      n("AdsSFMediaPickerDataProviderPlugin"),
      "AdsSFMediaPickerDataProviderPlugin",
      function () {
        return [
          n("Laminar").__createTriggerReducer(
            n("AdsSFLiveClipsIndicatorBaseAssetTriggerReducerPlugin"),
            "AdsSFLiveClipsIndicatorBaseAssetTriggerReducerPlugin",
            n("AdsSFLiveClipsIndicatorDataProvider"),
          ),
        ];
      },
    );
  },
  null,
);
