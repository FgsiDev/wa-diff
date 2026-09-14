__d(
  "adsUEditorCampaignIsUniformPixelSelector",
  [
    "AdsPECampaignSelectors",
    "AdsUEditorCampaignWebsitePromotedObjectSelectors",
    "AdsUEditorHostIDs",
    "SignalsConversionBulkTypeaheadStateDataProvider",
    "adsCreateSelector",
    "adsSignalSourceContainersSelector",
    "adsUEditorHostIDSelector_ASK_AFEI_BEFORE_USING",
    "adsUEditorSelectedCampaignIDsSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [
          o("AdsUEditorCampaignWebsitePromotedObjectSelectors")
            .isUniformSelector,
          r("adsUEditorHostIDSelector_ASK_AFEI_BEFORE_USING"),
          r("adsUEditorSelectedCampaignIDsSelector"),
          r("SignalsConversionBulkTypeaheadStateDataProvider").toFluxSelector(),
          o("adsSignalSourceContainersSelector").createSignalContainersSelector(
            "website",
          ),
        ],
        function (t, n, a, l, s) {
          var e;
          if (n !== r("AdsUEditorHostIDs").BULK_EDIT_DIALOG) {
            if (n === r("AdsUEditorHostIDs").EDITING && a.length > 1) {
              var u = a.map(function (e) {
                  return o("AdsPECampaignSelectors")
                    .getByFieldsSelector()(e, { promoted_object: null }, i.id)
                    .getValue();
                }),
                c =
                  u != null
                    ? u.map(function (e) {
                        var t;
                        return e == null || (t = e.promoted_object) == null
                          ? void 0
                          : t.pixel_id;
                      })
                    : [];
              return (
                c.length > 0 &&
                c.every(function (e) {
                  return e === c[0];
                })
              );
            }
            return t;
          }
          if (((e = s.getValue()) == null ? void 0 : e.size) === 1) return !0;
          var d = a.map(function (e) {
            var t;
            return (t = l.get(e)) == null ? void 0 : t.selectedPixelID;
          });
          return (
            d.length > 0 &&
            d.every(function (e) {
              return e === d[0];
            })
          );
        },
        { name: i.id + ".adsUEditorCampaignIsUniformPixelSelector" },
      ),
      s = e;
    l.default = s;
  },
  98,
);
