__d(
  "adsUEditorAMCatalogAdEligibleSMCFeaturesSelectorUtils",
  [
    "AMCatalogAdEligibleSMCFeaturesParamsRecord",
    "AdsUEditorMessagingDestinationUtils",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, a) {
      return r("immutable").Map(
        e.map(function (e) {
          var i,
            l,
            s,
            u,
            c,
            d,
            m = e.adgroup,
            p = e.campaign,
            _ =
              (i =
                p == null || (l = p.promoted_object) == null
                  ? void 0
                  : l.page_id) != null
                ? i
                : (s = a.getValue()) == null
                  ? void 0
                  : s.id,
            f =
              m == null ||
              (u = m.creative) == null ||
              (u = u.object_story_spec) == null ||
              (u = u.video_data) == null
                ? void 0
                : u.call_to_action,
            g =
              o("AdsUEditorMessagingDestinationUtils").isCTM(n) ||
              ((f == null || (c = f.value) == null
                ? void 0
                : c.app_destination) === "MESSENGER" &&
                (f == null ? void 0 : f.type) === "MESSAGE_PAGE"),
            h = m.account_id;
          if (_ == null || h == null || !g) return [m.id, null];
          var y = r("AMCatalogAdEligibleSMCFeaturesParamsRecord")({
              pageID: _,
              adAccountID: h,
              featureName: "L1_CATALOG_PRODUCT_SELECTOR_QUICK_CREATE",
              isCTM: g,
            }),
            C = (d = t(y).getValue()) != null ? d : null;
          return [m.id, C];
        }),
      );
    }
    l.adsUEditorAMCatalogAdEligibleQuickCreateVersionInMap = e;
  },
  98,
);
