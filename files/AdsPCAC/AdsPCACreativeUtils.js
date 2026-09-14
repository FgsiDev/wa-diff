__d(
  "AdsPCACreativeUtils",
  ["AdsInterfacesLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n;
      r("AdsInterfacesLogger").log({
        eventName: "pca_creative_feature_opt_in_exposure",
        eventCategory: "user_action",
        data:
          ((n = {}),
          (n.caller = e),
          (n.adgroup_id = t == null ? void 0 : t.adgroupId),
          (n.product_set_id = t == null ? void 0 : t.productSetId),
          n),
      });
    }
    function s(e, t) {
      var n;
      r("AdsInterfacesLogger").log({
        eventName: "pca_creative_feature_default_on",
        eventCategory: "user_action",
        data:
          ((n = {}),
          (n.caller = e),
          (n.adgroup_id = t == null ? void 0 : t.adgroupId),
          (n.product_set_id = t == null ? void 0 : t.productSetId),
          n),
      });
    }
    function u(e, t) {
      var n;
      r("AdsInterfacesLogger").log({
        eventName: "pca_creative_feature_opt_in_toggle",
        eventCategory: "user_action",
        data: ((n = {}), (n.caller = e), (n.is_enabled = t), n),
      });
    }
    ((l.logPCACreativeFeatureOptInExposure = e),
      (l.logPCACreativeFeatureDefaultOn = s),
      (l.logPCACreativeFeatureOptInToggle = u));
  },
  98,
);
