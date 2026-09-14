__d(
  "AdsUEditorCampaignPromotedObjectSetInstagramActorIdAction",
  [
    "AdsCFCampaignProvider",
    "AdsInstagramMediaQueryProvider",
    "AdsInstagramMediaSourceSetAccountOnUPVInstagramActorIdChangeReducerPlugin",
    "AdsUEditorCampaignPromotedObjectSetInstagramActorIdReducerPlugin",
    "Laminar",
    "ifRequired_FOR_LAMINAR_CODEGEN",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n(
              "AdsInstagramMediaSourceSetAccountOnUPVInstagramActorIdChangeReducerPlugin",
            ),
            n("AdsInstagramMediaQueryProvider"),
            {},
            "",
          ),
          n("ifRequired_FOR_LAMINAR_CODEGEN")(
            "AdsUEditorAdgroupPromotedObjectSetInstagramActorIdReducerPlugin",
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
            n(
              "AdsUEditorCampaignPromotedObjectSetInstagramActorIdReducerPlugin",
            ),
            n("AdsCFCampaignProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "ADS_CAMPAIGN_EDITOR_PROMOTED_OBJECT.SET_INSTAGRAM_ACTOR_ID",
    );
    a.exports = e;
  },
  null,
);
