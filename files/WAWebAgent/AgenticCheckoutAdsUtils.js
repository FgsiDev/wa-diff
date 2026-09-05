__d(
  "AgenticCheckoutAdsUtils",
  ["AdsAdgroupRecordAccessors", "AdsMutators", "gkx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e === "OPT_IN";
    }
    function s(t) {
      var n =
        r(
          "AdsAdgroupRecordAccessors",
        ).creative.destination_spec.destination_type.get(t) ===
        "WEBSITE_AND_SHOP";
      if (n) return !0;
      var o =
        e(
          r(
            "AdsAdgroupRecordAccessors",
          ).creative.destination_spec.native_commerce_experience.product_browsing.enroll_status.get(
            t,
          ),
        ) ||
        e(
          r(
            "AdsAdgroupRecordAccessors",
          ).creative.degrees_of_freedom_spec.creative_features_spec.product_browsing.enroll_status.get(
            t,
          ),
        );
      return o && r("gkx")("14943");
    }
    function u(e) {
      return r(
        "AdsAdgroupRecordAccessors",
      ).creative.destination_spec.native_commerce_experience.agentic_checkout.get(
        e,
      ) == null || s(e)
        ? e
        : r(
            "AdsAdgroupRecordAccessors",
          ).creative.destination_spec.native_commerce_experience.agentic_checkout.delete(
            e,
          );
    }
    function c(e, t) {
      var n = t ? "OPT_IN" : "OPT_OUT";
      return o("AdsMutators").chain(
        function (e) {
          return r(
            "AdsAdgroupRecordAccessors",
          ).creative.destination_spec.native_commerce_experience.agentic_checkout.enroll_status.set(
            n,
            e,
          );
        },
        function (e) {
          return r(
            "AdsAdgroupRecordAccessors",
          ).creative.destination_spec.native_commerce_experience.agentic_checkout.action_metadata.type.set(
            "MANUAL",
            e,
          );
        },
      )(e);
    }
    ((l.clearAgenticCheckoutIfIneligible = u),
      (l.applyManualAgenticCheckoutUpdate = c));
  },
  98,
);
