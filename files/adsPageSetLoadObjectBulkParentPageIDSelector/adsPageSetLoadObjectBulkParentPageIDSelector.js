__d(
  "adsPageSetLoadObjectBulkParentPageIDSelector",
  [
    "AdsBulkValueUtils",
    "AdsNewLocationTargetingSelectorUtils",
    "AdsPlacePageSetInfoStoreSelectors",
    "AdsUEditorSelectors",
    "adsAdgroupBulkPlacePageSetIDSelector",
    "adsCreateSelector",
    "adsPageSetLoadObjectBulkParentPageIDSelectorUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [
          o("AdsUEditorSelectors").campaign.bulkByAccessorToJS(function (e) {
            var t;
            return (t = e.promoted_object) == null
              ? void 0
              : t.place_page_set_id;
          }),
        ],
        function (t) {
          return o("AdsBulkValueUtils").mapBulkValue(t, function (e) {
            return e != null ? e : void 0;
          });
        },
        { name: i.id + ".adsCampaignBulkPromotedPlacePageSetIDSelector" },
      ),
      s = o("AdsNewLocationTargetingSelectorUtils").createL2L1UniformSelector(
        r("adsAdgroupBulkPlacePageSetIDSelector"),
        e,
      ),
      u = r("adsCreateSelector")(
        [s, o("AdsPlacePageSetInfoStoreSelectors").getAllSelector],
        function (t, n) {
          return o(
            "adsPageSetLoadObjectBulkParentPageIDSelectorUtils",
          ).adsPageSetLoadObjectBulkParentPageID(t, n);
        },
        { name: i.id + ".adsPageSetLoadObjectBulkParentPageIDSelector" },
      );
    ((l.adsUniformBulkPlacePageSetIDSelector = s),
      (l.adsPageSetLoadObjectBulkParentPageIDSelector = u));
  },
  98,
);
