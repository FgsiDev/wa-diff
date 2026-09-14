__d(
  "AdsUEditorCampaignGroupInstantPublishNameFieldAction",
  [
    "AdsDraftPublishDataProvider",
    "AdsDraftPublishReducerPlugins",
    "Laminar",
    "ifRequired_FOR_LAMINAR_CODEGEN",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsDraftPublishReducerPlugins")
              .CampaignGroupInstantPublishReducerPlugin,
            n("AdsDraftPublishDataProvider"),
            {},
            "",
          ),
          n("ifRequired_FOR_LAMINAR_CODEGEN")(
            "AdsUEditorCampaignGroupSetNameReducerPlugin",
            function (e) {
              return n("ifRequired_FOR_LAMINAR_CODEGEN")(
                "AdsCFCampaignGroupRecordProvider",
                function (t) {
                  return n("Laminar").__createReducer(e, t, {}, "");
                },
              );
            },
          ),
        ];
      },
      function () {
        return [];
      },
      "ADS_CAMPAIGN_GROUP_EDITOR_INSTANT_PUBLISH_NAME_FIELD",
    );
    a.exports = e;
  },
  null,
);
