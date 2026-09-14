__d(
  "adsUEditorIsEligibleForCTMCatalogProductSelectorUtils",
  ["immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      return r("immutable").Map(
        e.map(function (e) {
          var r,
            o,
            a,
            i,
            l,
            s = e.adgroup,
            u = e.campaign,
            c =
              (r =
                u == null || (o = u.promoted_object) == null
                  ? void 0
                  : o.page_id) != null
                ? r
                : n == null || (a = n.getValue()) == null
                  ? void 0
                  : a.id;
          if (c == null) return [s.id, !1];
          var d =
            (i = (l = t(c).getValue()) == null ? void 0 : l.is_eligible) != null
              ? i
              : !1;
          return [s.id, d];
        }),
      );
    }
    function s(e, t, n) {
      var r,
        o,
        a,
        i,
        l = e[0],
        s =
          (r =
            l == null || (o = l.promoted_object) == null
              ? void 0
              : o.page_id) != null
            ? r
            : t == null || (a = t.getValue()) == null
              ? void 0
              : a.id;
      return s == null
        ? null
        : (i = n(s).getValue()) == null
          ? void 0
          : i.ad_catalog_id;
    }
    ((l.adsUEditorAdgroupIsSMCEligibleSelectorInMapLogic = e),
      (l.adsUEditorAdsCatalogIdForPage = s));
  },
  98,
);
