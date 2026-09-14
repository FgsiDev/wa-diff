__d(
  "AdsUEditorAdgroupCTXExistingPostSetRemovePromotedPageIdReducerPlugin",
  [
    "AdsInstagramBrandedContentUtils",
    "AdsMutators",
    "AdsUEditorAdgroupCTXExistingPostSetRemovePromotedPageIdActionFlux",
    "AdsUEditorAdgroupReducerUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              var n,
                r,
                a = e;
              return t.shouldSetPromotedPageId &&
                ((n = a.creative) == null ? void 0 : n.branded_content) != null
                ? o(
                    "AdsInstagramBrandedContentUtils",
                  ).updatePromotedPageIDForPartnershipAd(a)
                : ((r = a.creative) == null || (r = r.branded_content) == null
                      ? void 0
                      : r.promoted_page_id) != null
                  ? o(
                      "AdsInstagramBrandedContentUtils",
                    ).updatePromotedPageIDForPartnershipAd(a, null)
                  : a;
            });
          },
          o("AdsUEditorAdgroupCTXExistingPostSetRemovePromotedPageIdActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
