__d(
  "AdsMetadataBrandKitUtils",
  [
    "AdsCreativeEndStateV2Utils",
    "AdsInterfacesLogger",
    "AdsMetadataBrandKitUtilsDefaultOnEligbilityQuery.graphql",
    "gkx",
    "react-compiler-runtime",
    "react-relay",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e, t, n) {
      return (
        o(
          "AdsCreativeEndStateV2Utils",
        ).isCESV2TargetedAdsFormatFromAdgroupAndCampaign(t, e, n) && u()
      );
    }
    function u(e) {
      return e ? r("gkx")("5424") : r("gkx")("10333");
    }
    function c(e, t, n) {
      var o;
      r("AdsInterfacesLogger").logOnce({
        data:
          ((o = {}),
          (o.adgroup_id = e),
          (o.error_name = t),
          (o.stack_trace = n.stack),
          o),
        eventName: "ads_metadata_brand_graphql_error",
      });
    }
    function d(e, t, n) {
      var o;
      r("AdsInterfacesLogger").logOnce({
        data:
          ((o = {}),
          (o.adgroup_id = e),
          (o.error_name = t),
          (o.stack_trace = n == null ? void 0 : n.stack),
          o),
        eventName: "ads_metadata_brand_font_upload_error",
      });
    }
    function m(e, t, n, o, a) {
      var i;
      r("AdsInterfacesLogger").logOnce({
        data:
          ((i = {}),
          (i.adgroup_id = e.join(",")),
          (i.source = t),
          (i.change_type = n),
          (i.action_type = o),
          (i.subsequent_data = a),
          i),
        eventName: "ads_metadata_brand_source_element_change",
      });
    }
    function p(e, t, n, o, a) {
      var i;
      r("AdsInterfacesLogger").logOnce({
        data:
          ((i = {}),
          (i.adgroup_id = e.join(",")),
          (i.source = t),
          (i.action_type = n),
          (i.change_type = o),
          (i.subsequent_data = a),
          i),
        eventName: "ads_metadata_brand_adoption_change",
      });
    }
    function _() {
      return r("gkx")("13347");
    }
    function f() {
      return r("gkx")("13897");
    }
    var g = function (t, n, r, o) {
        var e = t.getRootField(n);
        if (e) {
          var a = t.getRoot().getLinkedRecord(r, o);
          a || t.getRoot().setLinkedRecord(e, r, o);
        }
      },
      h =
        e !== void 0
          ? e
          : (e = n("AdsMetadataBrandKitUtilsDefaultOnEligbilityQuery.graphql"));
    function y(e) {
      var t = o("react-compiler-runtime").c(3),
        n = r("gkx")("25285") ? "store-or-network" : "network-only",
        a;
      t[0] !== e
        ? ((a = { adAccountId: e }), (t[0] = e), (t[1] = a))
        : (a = t[1]);
      var i;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = { fetchPolicy: n }), (t[2] = i))
        : (i = t[2]);
      var l = o("react-relay").useLazyLoadQuery(h, a, i);
      return l == null || l.xfb_ads_brand_kit_is_eligible_for_default_on == null
        ? !1
        : l.xfb_ads_brand_kit_is_eligible_for_default_on;
    }
    ((l.isEligibleForBrandKit = s),
      (l.isEligibleForBrandKitByExperiment = u),
      (l.logGraphQLError = c),
      (l.logFontUploadError = d),
      (l.logBrandKitElementChange = m),
      (l.logBrandKitAdoptionChange = p),
      (l.isEligibleForBrandKitStickyOptIn = _),
      (l.isEligibleForBrandKitStickyOptInAdCreate = f),
      (l.presetUpdater = g),
      (l.useBrandKitDefaultOnEligibility = y));
  },
  98,
);
