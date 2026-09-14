__d(
  "PromoAdsAdSpecUtils",
  ["AdsAdgroupRecordAccessors", "AdsCampaignRecordAccessors"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n,
        o = null,
        a = null;
      if (e != null) {
        if (
          ((o = r("AdsCampaignRecordAccessors").promoted_object.pixel_id.get(
            e,
          )),
          o == null)
        ) {
          var i,
            l =
              (i = r(
                "AdsCampaignRecordAccessors",
              ).promoted_object.omnichannel_object.pixel.get(e)) == null ||
              (i = i.first()) == null
                ? void 0
                : i.get("pixel_id");
          l != null && typeof l == "string" && (o = l);
        }
        a = r("AdsCampaignRecordAccessors").promoted_object.product_set_id.get(
          e,
        );
      }
      return (
        (a =
          (n =
            a != null
              ? a
              : r("AdsAdgroupRecordAccessors").creative.product_set_id.get(
                  t,
                )) != null
            ? n
            : null),
        { pixelID: o, productSetID: a }
      );
    }
    l.getPixelProductSetFromAdObjects = e;
  },
  98,
);
