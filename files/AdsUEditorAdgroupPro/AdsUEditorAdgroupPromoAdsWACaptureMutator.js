__d(
  "AdsUEditorAdgroupPromoAdsWACaptureMutator",
  ["AdsAdgroupRecordAccessors", "AdsMutators", "immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, a) {
      var i,
        l =
          (i = r(
            "AdsAdgroupRecordAccessors",
          ).creative.asset_feed_spec.promotional_metadata.get(e)) == null
            ? void 0
            : i.toObject(),
        s = ["WA_CAPTURE_GENERIC_CODE"],
        u = l == null ? void 0 : l.allowed_coupon_code_sources,
        c = s;
      u && (c = s.concat(u.toArray()));
      var d = [
          r("immutable").Map({
            promotional_type: "PERCENTAGE",
            promotional_value: t,
            disclaimer_url: n,
            detection_source: "wa_capture_generic_code",
            coupon_code: a,
          }),
        ],
        m = l == null ? void 0 : l.offer_details,
        p = d;
      if (m) {
        var _ = m.toJS();
        p = d.concat(_);
      }
      return o("AdsMutators").chain(
        r(
          "AdsAdgroupRecordAccessors",
        ).creative.asset_feed_spec.promotional_metadata.allowed_coupon_code_sources.set(
          r("immutable").List(c),
        ),
        r(
          "AdsAdgroupRecordAccessors",
        ).creative.asset_feed_spec.promotional_metadata.offer_details.set(
          r("immutable").List(p),
        ),
      )(e);
    }
    function s(e, t, n, o) {
      var a,
        i =
          (a = r(
            "AdsAdgroupRecordAccessors",
          ).creative.asset_feed_spec.promotional_metadata.get(e)) == null
            ? void 0
            : a.toObject(),
        l = i == null ? void 0 : i.allowed_coupon_code_sources;
      if (l == null || l.toArray().includes("WA_CAPTURE_GENERIC_CODE") === !1)
        return e;
      var s = i == null ? void 0 : i.offer_details,
        u =
          s == null
            ? void 0
            : s.filter(function (e) {
                return e.get("detection_source") !== "wa_capture_generic_code";
              }),
        c = [
          r("immutable").Map({
            promotional_type: "PERCENTAGE",
            promotional_value: t,
            disclaimer_url: n,
            detection_source: "wa_capture_generic_code",
            coupon_code: o,
          }),
        ],
        d = c;
      if (u) {
        var m = u.toJS();
        d = c.concat(m);
      }
      return r(
        "AdsAdgroupRecordAccessors",
      ).creative.asset_feed_spec.promotional_metadata.offer_details.set(
        r("immutable").List(d),
        e,
      );
    }
    ((l.addWACaptureOfferDetails = e), (l.updateWACaptureOfferDetails = s));
  },
  98,
);
