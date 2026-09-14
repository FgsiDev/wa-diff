__d(
  "AdsUEditorCampaignSetMessengerPromotedObjectTypeDataAction",
  [
    "AdsCFCampaignProvider",
    "AdsUEditorCampaignSetMessengerPromotedObjectTypeReducerPlugin",
    "Laminar",
    "ifRequired_FOR_LAMINAR_CODEGEN",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("ifRequired_FOR_LAMINAR_CODEGEN")(
            "AdsUEditorAdgroupSetMessengerPromotedObjectTypeReducerPlugin",
            function (e) {
              return n("ifRequired_FOR_LAMINAR_CODEGEN")(
                "AdsCFAdgroupDataProvider",
                function (t) {
                  return n("Laminar").__createReducer(e, t, {}, "");
                },
              );
            },
          ),
          n("Laminar").__createReducer(
            n("AdsUEditorCampaignSetMessengerPromotedObjectTypeReducerPlugin"),
            n("AdsCFCampaignProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "CAMPAIGN.SET_MESSENGER_PROMOTED_OBJECT_TYPE",
    );
    a.exports = e;
  },
  null,
);
