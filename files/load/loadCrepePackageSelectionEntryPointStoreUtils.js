__d(
  "loadCrepePackageSelectionEntryPointStoreUtils",
  [
    "AdsAccountStore",
    "AdsCrepePackageSelectionEntrypointDialog.entrypoint",
    "AdsManagerRelayEnvironment",
    "RelayHooks",
    "SYDGuidanceHubConstants",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      var e = r("AdsAccountStore").getSelectedAccountID(),
        t = { group_by: ["RECOMMENDATION_TYPE"] };
      return o("RelayHooks").loadEntryPoint(
        {
          getEnvironment: function () {
            return r("AdsManagerRelayEnvironment");
          },
        },
        r("AdsCrepePackageSelectionEntrypointDialog.entrypoint"),
        {
          accountID: e != null ? e : "",
          requestId: o("SYDGuidanceHubConstants")
            .UGP_RECOMMENDATIONS_REQUEST_ID,
          contentRequest: t,
        },
      );
    }
    l.default = e;
  },
  98,
);
