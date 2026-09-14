__d(
  "AdsICCPublishLoggingStoreUtils",
  [
    "AdsDraftFragmentStore",
    "AdsICCPublishLoggingStoreUtilsQuery.graphql",
    "AdsManagerRelayEnvironment",
    "FBLogger",
    "RelayHooks",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s =
        e !== void 0
          ? e
          : (e = n("AdsICCPublishLoggingStoreUtilsQuery.graphql"));
    function u(e) {
      if (r("justknobx")._("3364") && !(e == null || e.size === 0)) {
        var t = e.toArray(),
          n = null,
          a = null;
        for (var i of t) {
          var l = r("AdsDraftFragmentStore").getCached(i);
          if (l != null && l.action === "add") {
            var u = l.ad_object_type;
            if (u === "campaign") {
              ((n = i), (a = "CAMPAIGN_GROUP"));
              break;
            }
            u === "ad_set" && n == null && ((n = i), (a = "CAMPAIGN"));
          }
        }
        if (!(n == null || a == null)) {
          var c = String(n).replace(/^-/, "");
          o("RelayHooks")
            .fetchQuery(r("AdsManagerRelayEnvironment"), s, {
              input: {
                draft_fragment_id: c,
                ad_object_level: a,
                is_publish: !0,
              },
            })
            .toPromise()
            .catch(function (e) {
              r("FBLogger")("ads_icc").warn(
                "ICC publish-time logging call failed: %s",
                String(e),
              );
            });
        }
      }
    }
    l.logICCPredictionOnPublish = u;
  },
  98,
);
