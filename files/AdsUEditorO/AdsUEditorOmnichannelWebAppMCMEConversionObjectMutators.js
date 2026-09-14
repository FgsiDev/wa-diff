__d(
  "AdsUEditorOmnichannelWebAppMCMEConversionObjectMutators",
  [
    "AdsAPIOptimizationGoals",
    "AdsAdgroupRecordAccessors",
    "AdsAppUrlUtils",
    "AdsDynamicAdsUtils",
    "AdsOmnichannelTrackingSpecsUtils",
    "AdsUEditorCallToActionMutators",
    "AdsUEditorWebsiteAndAppMutators",
    "immutable",
    "isAccountEligibleForThreeCOL2AdEx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n,
        a = t.pixel_id,
        i = o(
          "AdsOmnichannelTrackingSpecsUtils",
        ).addOffsiteConversionPixelTrackingSpec(
          (n = e.tracking_specs) == null ? void 0 : n.toJS(),
          a,
        );
      return r("AdsAdgroupRecordAccessors").tracking_specs.set(
        r("immutable").fromJS(i),
        e,
      );
    }
    function s(e, t, n, a) {
      var i,
        l,
        s = e,
        u = a.application_id,
        c = a.object_store_urls,
        d = o("AdsOmnichannelTrackingSpecsUtils").addAppTrackingSpecs(
          (i = e.tracking_specs) == null ? void 0 : i.toJS(),
          u,
        );
      return (
        (s = r("AdsAdgroupRecordAccessors").tracking_specs.set(
          r("immutable").fromJS(d),
          s,
        )),
        t.optimization_goal === r("AdsAPIOptimizationGoals").VALUE &&
          ((l = e.creative) == null ? void 0 : l.applink_treatment) ===
            "automatic" &&
          (s = r("AdsAdgroupRecordAccessors").creative.applink_treatment.set(
            "deeplink_with_web_fallback",
            s,
          )),
        o("AdsDynamicAdsUtils").isDynamicAd(e)
          ? ((s = r(
              "AdsAdgroupRecordAccessors",
            ).creative.template_url_spec.delete(s)),
            (s = r(
              "AdsAdgroupRecordAccessors",
            ).creative.template_url_spec.config.app_id.set(u, s)),
            s)
          : ((s = o(
              "AdsUEditorCallToActionMutators",
            ).setCallToActionValueObjectStoreURLs(s, n, [].concat(c))),
            (s = r(
              "AdsAdgroupRecordAccessors",
            ).creative.omnichannel_link_spec.app.platform_specs.delete(s)),
            c.some(r("AdsAppUrlUtils").isItunesURL) &&
              (s = r(
                "AdsAdgroupRecordAccessors",
              ).creative.omnichannel_link_spec.app.platform_specs.ios.url.set(
                null,
                s,
              )),
            c.some(r("AdsAppUrlUtils").isGooglePlayURL) &&
              (s = r(
                "AdsAdgroupRecordAccessors",
              ).creative.omnichannel_link_spec.app.platform_specs.android.url.set(
                null,
                s,
              )),
            (s = o(
              "AdsUEditorCallToActionMutators",
            ).setCallToActionValueApplication(s, n, u)),
            (s = o(
              "AdsUEditorWebsiteAndAppMutators",
            ).setOmnichannelLinkSpecApplicationID(s, u)),
            o(
              "isAccountEligibleForThreeCOL2AdEx",
            ).isAccountEligibleForThreeCOGuidanceV2WithoutObjective(!1) &&
              (s = o(
                "AdsUEditorWebsiteAndAppMutators",
              ).setOmnichannelLinkSpecWebsiteURLFromCreative(s)),
            o(
              "isAccountEligibleForThreeCOL2AdEx",
            ).is3coXPacDuplicationUpsellFix() &&
              ((s = o(
                "AdsUEditorWebsiteAndAppMutators",
              ).setOmnichannelLinkSpecInLinkUrls(s, n)),
              (s = o(
                "AdsUEditorWebsiteAndAppMutators",
              ).setCreativeOmnichannelLinkSpecWebUrlFromFirstLinkUrl(s))),
            s)
      );
    }
    function u(t, n, r, o, a) {
      var i = e(t, a);
      return ((i = s(i, n, r, o)), i);
    }
    ((l.applyOmnichannelPixelData = e),
      (l.applyOmnichannelAppData = s),
      (l.applyOmnichannelWebAppMCMEConversionObject = u));
  },
  98,
);
