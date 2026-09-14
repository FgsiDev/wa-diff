__d(
  "AdsDAAplusCImageBackgroundGenerationDefaultOnMutator",
  [
    "AdsAPlusCStickyOptOutUtils",
    "AdsAdgroupRecordAccessors",
    "AdsImageBackgroundGenProductSetExplicitOptOutRelayStore",
    "AdsImageBackgroundGenProductSetOptInProvider",
    "AdsInterfacesLogger",
    "AdsMutators",
    "AdsPCACreativeUtils",
    "CatalogVertical",
    "ProductSetDataProvider",
    "adsIsDAACOEligibleForAdObjects",
    "adsUEditorGetShouldEnableImageBackgroundGenByDefaultSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t,
        n,
        o = e.adgroup,
        a = e.campaign,
        i = e.campaignGroup,
        l = (t = o.creative) == null ? void 0 : t.product_set_id;
      if (
        (r("AdsInterfacesLogger").log({
          eventName: "ai_background_gen_default_on_eligibility_check",
          eventCategory: "user_action",
          data:
            ((n = {}),
            (n.ad_account_id = o.account_id),
            (n.adgroup_id = o.id),
            (n.product_set_id = l),
            n),
        }),
        l == null)
      )
        return !1;
      var s = r("adsIsDAACOEligibleForAdObjects")(i, a);
      if (s !== !0) return !1;
      var u = r("ProductSetDataProvider")().get(l).getValue();
      return (
        (u == null ? void 0 : u.vertical) === r("CatalogVertical").COMMERCE
      );
    }
    function s(e) {
      var t,
        n = (t = e.creative) == null ? void 0 : t.product_set_id,
        a = !1,
        i = !1;
      if (n != null) {
        var l;
        a = !!r("AdsImageBackgroundGenProductSetOptInProvider")()
          .get(n)
          .getValue();
        var s = r(
          "AdsImageBackgroundGenProductSetExplicitOptOutRelayStore",
        ).get({ product_set_id: n });
        i =
          ((l = s.getValue()) == null
            ? void 0
            : l.xfb_ads_image_background_gen_product_set_explicit_opt_out) ===
          !0;
      }
      var u = r(
          "adsUEditorGetShouldEnableImageBackgroundGenByDefaultSelector",
        )().getValue(),
        c = o("AdsAPlusCStickyOptOutUtils").isAPlusCFeatureStickyOptedOut(
          "image_background_gen",
        ),
        d = !c && (a || (u === !0 && !i)) ? "OPT_IN" : "OPT_OUT";
      if (d === "OPT_IN") {
        var m;
        (r("AdsInterfacesLogger").log({
          eventName: "ai_background_gen_default_on",
          eventCategory: "user_action",
          data: ((m = {}), (m.adgroup_id = e.id), m),
        }),
          o("AdsPCACreativeUtils").logPCACreativeFeatureDefaultOn(
            "image_background_gen",
            { adgroupId: e.id, productSetId: n },
          ));
      }
      var p = a || i;
      return o("AdsMutators").chain(
        r(
          "AdsAdgroupRecordAccessors",
        ).creative.degrees_of_freedom_spec.creative_features_spec.image_background_gen.enroll_status.set(
          d,
        ),
        r(
          "AdsAdgroupRecordAccessors",
        ).creative.degrees_of_freedom_spec.creative_features_spec.image_background_gen.action_metadata.type.set(
          p ? "DEFAULT_FOR_PRODUCT_SET" : "DEFAULT",
        ),
      )(e);
    }
    ((l.isAdFormatEligibleForDAImageBackgroundGenDefaultOn = e),
      (l.adsDAAplusCImageBackgroundGenerationDefaultOnMutator = s));
  },
  98,
);
