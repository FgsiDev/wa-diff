__d(
  "adsUEditorIsSTOCampaignSelector",
  ["AdsCampaignRecordAccessors", "AdsUEditorSelectors", "adsCreateSelector"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [
          o("AdsUEditorSelectors").campaign.bulkByAccessor(
            r("AdsCampaignRecordAccessors").promoted_object.get,
          ),
        ],
        function (t) {
          return t.getValues().every(function (e) {
            return (e == null ? void 0 : e.place_page_set_id) != null;
          });
        },
        { name: i.id + ".adsUEditorIsSTOCampaignSelector" },
      ),
      s = e;
    l.default = s;
  },
  98,
);
