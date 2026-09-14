__d(
  "adsUEditorInjectEditingCampaignContext",
  ["AdsEditingCampaignEditorContext", "adsCreateStoreSelector"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return r("adsCreateStoreSelector")(
        e.getStores(n("AdsEditingCampaignEditorContext")),
        function () {
          return e(n("AdsEditingCampaignEditorContext"));
        },
        { name: i.id },
      );
    }
    l.default = e;
  },
  98,
);
