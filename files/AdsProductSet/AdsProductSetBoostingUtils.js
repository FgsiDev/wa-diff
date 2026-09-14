__d(
  "AdsProductSetBoostingUtils",
  [
    "AdsAdgroupRecordAccessors",
    "AdsAdgroupSemanticFields",
    "AdsInterfacesLogger",
    "AdsProductSetBoostingDefaultStateProvider",
    "AdsProductSetExpansionActionType",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("AdsProductSetBoostingDefaultStateProvider").toFluxStore();
    function s(e, t, n, o) {
      var a = e;
      return (
        t == null ||
          o == null ||
          (a = n
            ? r(
                "AdsAdgroupRecordAccessors",
              ).creative.object_story_spec.template_data.is_local_expansion.set(
                n,
                a,
              )
            : r(
                "AdsAdgroupRecordAccessors",
              ).creative.object_story_spec.template_data.is_local_expansion.delete(
                a,
              )),
        a
      );
    }
    function u(e, t, n, o, a) {
      var i = e;
      return (
        t == null ||
          o == null ||
          ((i = n
            ? r(
                "AdsAdgroupRecordAccessors",
              ).creative.object_story_spec.template_data.boosted_product_set_id.set(
                o,
                i,
              )
            : r(
                "AdsAdgroupRecordAccessors",
              ).creative.object_story_spec.template_data.boosted_product_set_id.delete(
                i,
              )),
          (i = r("AdsAdgroupSemanticFields").productSetID.set(
            a,
            i,
            n ? t : o,
          ))),
        i
      );
    }
    function c(t, n, o, a) {
      var i,
        l = e.getState().isPSEDefaultOptInEligible;
      r("AdsInterfacesLogger").log({
        eventName: "product_set_expansion_update",
        data:
          ((i = {}),
          (i.custom_event_type = t),
          (i.adgroup_id = JSON.stringify(o)),
          (i.campaign_id = JSON.stringify(a)),
          (i.dashboard_extra_data = l
            ? "pse_default_enabled"
            : "pse_default_disabled"),
          (i.subsequent_data = n ? "opted_in" : "opted_out"),
          i),
      });
    }
    function d(t, n, o, a) {
      var i,
        l = e.getState().isPSEDefaultOptInEligible;
      r("AdsInterfacesLogger").log({
        eventName: "product_set_expansion_opt_in",
        data:
          ((i = {}),
          (i.custom_event_type = t),
          (i.adgroup_id = JSON.stringify(o)),
          (i.campaign_id = JSON.stringify(a)),
          (i.dashboard_extra_data = l
            ? "pse_default_enabled"
            : "pse_default_disabled"),
          (i.subsequent_data = n ? "opted_in" : "opted_out"),
          i),
      });
    }
    function m(t, n, o, a) {
      var i,
        l = e.getState().isPSEDefaultOptInEligible;
      r("AdsInterfacesLogger").log({
        eventName: "smart_pse_update",
        data:
          ((i = {}),
          (i.custom_event_type = t),
          (i.adgroup_id = JSON.stringify(o)),
          (i.campaign_id = JSON.stringify(a)),
          (i.dashboard_extra_data = l
            ? "pse_default_enabled"
            : "pse_default_disabled"),
          (i.subsequent_data = n),
          i),
      });
    }
    function p(e, t, n, o, a) {
      var i;
      r("AdsInterfacesLogger").log({
        eventName: "product_set_expansion_default",
        data:
          ((i = {}),
          (i.custom_event_type = e),
          (i.adgroup_id = JSON.stringify(o)),
          (i.campaign_id = JSON.stringify(a)),
          (i.dashboard_extra_data = n
            ? "pse_default_enabled"
            : "pse_default_disabled"),
          (i.subsequent_data = t),
          i),
      });
    }
    var _ = function () {
      return !!r("gkx")("12036");
    };
    function f(e) {
      var t = e.hasBoostedProductSet,
        n = e.hasWebsiteAndShopDestination,
        o = e.isEligibleForBoosting,
        a = e.wasPreviousProductSetAllProducts;
      return n === !0 && o && a === !0
        ? r("AdsProductSetExpansionActionType").PSE_DEFAULTING_SHOP
        : o && t
          ? r("AdsProductSetExpansionActionType").APPLY_PSE
          : t
            ? r("AdsProductSetExpansionActionType").REMOVE_PSE
            : r("AdsProductSetExpansionActionType").NO_ACTION;
    }
    ((l.setNationwideProductSetIDForAdgroup = s),
      (l.setBoostedProductSetIDForAdgroup = u),
      (l.logProductSetBoostingLaminarAction = c),
      (l.logProductSetBoostingOptIn = d),
      (l.logSmartPSELaminarAction = m),
      (l.logProductSetBoostingDefault = p),
      (l.shouldShowNationwideBoostingRecommendation = _),
      (l.determineProductSetExpansionAction = f));
  },
  98,
);
