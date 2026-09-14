__d(
  "XAdsProductPlatformAdAccountFeatureEligibilityMapController",
  ["XController"],
  function (t, n, r, o, a, i) {
    a.exports = n("XController").create(
      "/ads/platform/adaccount/feature_eligibility_info/",
      {
        adaccountid: { type: "Int", required: !0 },
        campaigngroupid: { type: "Int" },
      },
    );
  },
  null,
);
