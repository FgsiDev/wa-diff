__d(
  "fetchDestinationScreenshot",
  [
    "AdsInterfacesLogger",
    "AdsManagerRelayEnvironment",
    "RelayHooks",
    "fetchDestinationScreenshotQuery.graphql",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t, a, i) {
      var l = o("RelayHooks")
        .fetchQuery(
          r("AdsManagerRelayEnvironment"),
          e !== void 0 ? e : (e = n("fetchDestinationScreenshotQuery.graphql")),
          { url: a, ad_account_id: t },
        )
        .toPromise();
      r("promiseDone")(
        l.then(
          function (e) {
            var t,
              n =
                e == null
                  ? void 0
                  : e.xfb_creative_metadata_destination_screenshot;
            i(
              (n == null ? void 0 : n.is_eligible) === !0 &&
                (t = n.screenshot_image_hash) != null
                ? t
                : null,
            );
          },
          function (e) {
            r("AdsInterfacesLogger").log({
              data: { message: e.errorDescription },
              eventName:
                "ads_creative_metadata_destination_screenshot_data_fetch_with_website_url_reducer_error",
            });
          },
        ),
      );
    }
    l.fetchDestinationScreenshot = s;
  },
  98,
);
