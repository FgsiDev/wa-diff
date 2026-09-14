__d(
  "adsUEditorFeaturedOfferingEligibilityWithDataSelector",
  [
    "AdsUEditorFeaturedOfferingEligibilityQueryProvider",
    "adsCreateSelector",
    "adsUEditorAccountIDSelector",
    "adsUEditorAdPlainObjectsForSelectedAdgroupsSelector",
    "adsUEditorFeaturedOfferingEligibilitySelector",
    "adsUeditorAdgroupDestinationUrlSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
      [
        o("adsUEditorFeaturedOfferingEligibilitySelector")
          .adsUEditorFeaturedOfferingEligibilitySelector,
        r("adsUEditorAdPlainObjectsForSelectedAdgroupsSelector"),
        r(
          "AdsUEditorFeaturedOfferingEligibilityQueryProvider",
        ).toFluxSelector(),
        o("adsUeditorAdgroupDestinationUrlSelector").adDestinationUrlSelector,
        r("adsUEditorAccountIDSelector"),
      ],
      function (t, n, r, o, a) {
        var e;
        if (!t) return !1;
        var i = n[0].adgroup,
          l =
            (e = i.creative) == null || (e = e.creative_sourcing_spec) == null
              ? void 0
              : e.featured_offering_spec;
        if ((l == null ? void 0 : l.enroll_status) != null) return !0;
        if (o != null && o !== "") {
          var s = r.get({ url: o, ad_account_id: a }).mapValue(function (e) {
            var t, n;
            return (
              ((t =
                (n = e.xfb_fanout_links_by_url) == null ? void 0 : n.length) !=
              null
                ? t
                : 0) > 0
            );
          });
          if (s.isDone() && s.hasValue()) {
            var u;
            return (u = s.getValue()) != null ? u : !1;
          }
        }
        return !1;
      },
      { name: i.id + ".adsUEditorFeaturedOfferingEligibilityWithDataSelector" },
    );
    l.adsUEditorFeaturedOfferingEligibilityWithDataSelector = e;
  },
  98,
);
