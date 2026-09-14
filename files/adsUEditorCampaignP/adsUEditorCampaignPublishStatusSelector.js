__d(
  "adsUEditorCampaignPublishStatusSelector",
  ["adsCreateStoreSelector"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateStoreSelector")(
        function (e) {
          var t = e.campaignPublishStatusSelector;
          return t.getStores();
        },
        function (t) {
          var e = t.campaignPublishStatusSelector;
          return e();
        },
        {
          isGetStoresPure: !0,
          name: i.id + ".adsUEditorCampaignPublishStatusSelector",
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
