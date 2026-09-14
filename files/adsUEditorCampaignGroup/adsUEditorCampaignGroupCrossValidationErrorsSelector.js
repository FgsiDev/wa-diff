__d(
  "adsUEditorCampaignGroupCrossValidationErrorsSelector",
  ["adsCreateStoreSelector"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateStoreSelector")(
        function (e) {
          var t = e.campaignGroupCrossValidationErrorsSelector;
          return t.getStores();
        },
        function (t) {
          var e = t.campaignGroupCrossValidationErrorsSelector;
          return e();
        },
        {
          name: i.id + ".adsUEditorCampaignGroupCrossValidationErrorsSelector",
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
