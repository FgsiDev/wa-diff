__d(
  "AdsUEditorCampaignGroupAndCampaignGetTargetingTypeUtil",
  [
    "adsGetProductAudienceSpecsFromCampaignRecord",
    "adsProductAudienceSpecsGetAllMatchingTargetingTypes",
    "firstx",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      var o,
        a,
        i = e.get(t.id),
        l = r("adsGetProductAudienceSpecsFromCampaignRecord")(t),
        s =
          (o = t.targeting) == null
            ? void 0
            : o.excluded_product_audience_specs,
        u = l == null ? null : l.toJS(),
        c = s == null ? null : s.toJS(),
        d = (a = t.promoted_object) == null ? void 0 : a.product_set_id,
        m = null;
      if (d != null) {
        var p,
          _ = n.get(d);
        m =
          (p = _.getValue()) == null ? void 0 : p.cpas_category_product_set_id;
      }
      var f = r("adsProductAudienceSpecsGetAllMatchingTargetingTypes")(
        u,
        c,
        d,
        m,
      );
      return f.length === 0
        ? null
        : i != null && f.includes(i)
          ? i
          : r("firstx")(f);
    }
    l.default = e;
  },
  98,
);
