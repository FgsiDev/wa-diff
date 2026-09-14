__d(
  "AdsBulkEditCampaignContext",
  [
    "AdsCampaignBulkEditStore",
    "AdsEditingCampaignContext",
    "AdsUEditorHostIDs",
    "adsCampaignValidationBootloadedErrorsSelectors",
    "adsConvertAdObjectRecordToPlainJS",
    "adsCreateSelector",
    "adsCreateStoreSelector",
    "adsStoreToSelector",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
        function t(t) {
          var n;
          return (
            (n = e.call(this, t) || this),
            (n.hostID = r("AdsUEditorHostIDs").BULK_EDIT_DIALOG),
            (n.campaignSelector = c),
            (n.campaignErrorsSelector = o(
              "adsCampaignValidationBootloadedErrorsSelectors",
            ).adsCampaignValidationBootloadedErrorsSelectors.clientValidationErrorsSelector),
            (n.selectedCampaignIDsSelector = t),
            (n.selectedCampaignsSelector = r("adsCreateSelector")(
              [t, s],
              function (t, n) {
                return t
                  .map(function (e) {
                    var t;
                    return (t = n.get(e)) == null ? void 0 : t.current;
                  })
                  .filter(Boolean);
              },
              { name: i.id + ".selectedCampaignsSelector" },
            )),
            (n.selectedCampaignPlainObjectsSelector = r("adsCreateSelector")(
              [t, s],
              function (t, n) {
                return t
                  .map(function (e) {
                    var t;
                    return r("adsConvertAdObjectRecordToPlainJS")(
                      (t = n.get(e)) == null ? void 0 : t.current,
                    );
                  })
                  .filter(Boolean);
              },
              { name: i.id + ".selectedCampaignPlainObjectsSelector" },
            )),
            n
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(r("AdsEditingCampaignContext")),
      s = r("adsCreateSelector")(
        [r("adsStoreToSelector")(r("AdsCampaignBulkEditStore"))],
        function (t) {
          return t.rows;
        },
        { name: i.id + ".rows" },
      ),
      u = r("adsCreateStoreSelector")(
        [],
        function (t) {
          return r("nullthrows")(t);
        },
        { name: i.id + ".campaignIDSelector" },
      ),
      c = r("adsCreateSelector")(
        [u, s],
        function (t, n) {
          var e;
          return (e = n.get(t)) == null ? void 0 : e.current;
        },
        { name: i.id + ".campaignSelector" },
      );
    l.default = e;
  },
  98,
);
