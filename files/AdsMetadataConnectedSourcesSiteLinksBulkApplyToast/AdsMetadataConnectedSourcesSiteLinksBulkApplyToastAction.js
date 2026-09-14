__d(
  "AdsMetadataConnectedSourcesSiteLinksBulkApplyToastAction",
  [
    "AdsMetadataConnectedSourcesSiteLinksBulkApplyToastReducerPlugin",
    "AdsToastCardDataProvider",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n(
              "AdsMetadataConnectedSourcesSiteLinksBulkApplyToastReducerPlugin",
            ),
            n("AdsToastCardDataProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "AdsMetadataConnectedSourcesSiteLinksBulkApplyToastActionPlugin",
    );
    a.exports = e;
  },
  null,
);
