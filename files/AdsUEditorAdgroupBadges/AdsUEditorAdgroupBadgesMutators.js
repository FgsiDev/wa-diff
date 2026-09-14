__d(
  "AdsUEditorAdgroupBadgesMutators",
  [
    "AdsAdgroupRecordAccessors",
    "AdsUEditorAdgroupBadges",
    "Currency",
    "adsConvertAdObjectRecordToPlainJS",
    "gkx",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = r("gkx")("3459"),
        a = e,
        i = t;
      if (a != null) {
        var l = a.get("shipping_policy");
        if (
          l != null &&
          l.shipping_min_amount_value !== void 0 &&
          l.shipping_min_amount_unit !== void 0 &&
          l.shipping_time_frame_unit !== void 0 &&
          l.shipping_time_frame_value !== void 0 &&
          (!n || l.is_shipping_free !== void 0)
        ) {
          var u = s(
            n ? l.is_shipping_free : !0,
            l.shipping_min_amount_value,
            l.shipping_min_amount_unit,
            l.shipping_time_frame_value,
            l.shipping_time_frame_unit,
          );
          a = a.set("shipping_policy", u);
        }
        if (a.isEmpty())
          o("AdsUEditorAdgroupBadges").isAdgroupUsingOnlyBadgesAssetFeed(
            r("adsConvertAdObjectRecordToPlainJS")(t),
          )
            ? (i = r(
                "AdsAdgroupRecordAccessors",
              ).creative.asset_feed_spec.delete(i))
            : (i = r(
                "AdsAdgroupRecordAccessors",
              ).creative.asset_feed_spec.badge_sets.delete(t));
        else {
          var c = o("immutable").fromJS([a]);
          i = r(
            "AdsAdgroupRecordAccessors",
          ).creative.asset_feed_spec.badge_sets.set(c, i);
        }
      } else
        o("AdsUEditorAdgroupBadges").isAdgroupUsingOnlyBadgesAssetFeed(
          r("adsConvertAdObjectRecordToPlainJS")(t),
        )
          ? (i = r("AdsAdgroupRecordAccessors").creative.asset_feed_spec.delete(
              i,
            ))
          : (i = r(
              "AdsAdgroupRecordAccessors",
            ).creative.asset_feed_spec.badge_sets.delete(t));
      return i;
    }
    function s(e, t, n, r, a) {
      var i = null;
      return (
        t != null &&
          n != null &&
          (i = parseFloat(t.toFixed(2)) * o("Currency").getOffset(n)),
        {
          is_shipping_free: e,
          shipping_min_amount_value: i,
          shipping_min_amount_unit: n,
          shipping_time_frame_value: r,
          shipping_time_frame_unit: a,
        }
      );
    }
    l.sanitizeBadgeItemSpecMap = e;
  },
  98,
);
