__d(
  "AdsUEditorAdgroupShopAdsUtils",
  [
    "$InternalEnum",
    "AdsAdgroupRecordAccessors",
    "AdsAssetFeedUtils",
    "AdsUniformValue",
    "filterNulls",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = n("$InternalEnum").Mirrored([
        "COLLECTION",
        "SINGLE_MEDIA_CATALOG",
        "EXISTING_POST",
      ]),
      s = n("$InternalEnum").Mirrored([
        "NONE",
        "EXPLAIN_CREATION_DEFAULTING",
        "UPGRADE_TO_DA",
        "EXPLAIN_DUPLICATION_UPGRADE",
        "DUPLICATION_UPGRADE_OPT_OUT",
      ]);
    function u(e) {
      var t,
        n,
        o = r("filterNulls")([
          (t = e.facebookStorefront) == null ? void 0 : t.id,
          (n = e.instagramStorefront) == null ? void 0 : n.id,
        ]);
      return (e.storefrontIDs != null && (o = o.concat(e.storefrontIDs)), o);
    }
    function c(e) {
      var t = r("AdsAdgroupRecordAccessors").creative.shop_spec.delete(e);
      return d(t);
    }
    function d(e) {
      return o("AdsAssetFeedUtils").removeFieldFromAssetFeedSpec(
        e,
        "onsite_destinations",
      );
    }
    function m(e) {
      if (!(e instanceof r("AdsUniformValue"))) return null;
      var t = e.getValue();
      if (t == null) return null;
      var n =
          t instanceof Array
            ? t
            : t.toArray().map(function (e) {
                return e.toObject();
              }),
        o = n[0].commerce_merchant_settings_id;
      return typeof o != "string" ? null : o;
    }
    ((l.AdgroupShopsAdsIncompatibleFormatTypeEnum = e),
      (l.AdgroupShopsAdsBlendedAdsGuidanceTypeEnum = s),
      (l.toStorefrontIDs = u),
      (l.deleteAssetFeedSpecOnsiteDestinationAndShopSpec = c),
      (l.deleteAssetFeedSpecOnsiteDestination = d),
      (l.getCmsIDFromOnsiteObject = m));
  },
  98,
);
