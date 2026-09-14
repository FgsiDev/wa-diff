__d(
  "submitSavedConsistencySamples",
  [
    "AdsAdPreviewClientSideConsistencyUtils",
    "AsyncRequest",
    "CurrentLocale",
    "WebApiApplication",
    "XAdPreviewConsistencySampleControllerRouteBuilder",
    "adPreviewConsistencySamples",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      if (r("adPreviewConsistencySamples").has(e)) {
        var n = r("adPreviewConsistencySamples").get(e);
        if (n == null) return;
        (n.forEach(function (n, a) {
          var i,
            l = r("XAdPreviewConsistencySampleControllerRouteBuilder").buildUri(
              {
                account_id: n.adAccountId,
                ad_id: e,
                app_id:
                  (i = o("WebApiApplication").getClientID()) != null ? i : "",
                creative_spec: JSON.stringify(n.creativeSpec),
                dof_preview_spec: JSON.stringify(
                  o("AdsAdPreviewClientSideConsistencyUtils").getDOFPreviewSpec(
                    n.creativeSpec,
                  ),
                ),
                render_spec: JSON.stringify(n.renderSpec),
                locale: r("CurrentLocale").get(),
                format: a,
                sample_source: n.sampleSource,
                sample_action: t,
              },
            );
          new (r("AsyncRequest"))()
            .setURI(l)
            .setMethod("POST")
            .setReadOnly(!0)
            .exec();
        }),
          r("adPreviewConsistencySamples").remove(e));
      }
    }
    l.default = e;
  },
  98,
);
