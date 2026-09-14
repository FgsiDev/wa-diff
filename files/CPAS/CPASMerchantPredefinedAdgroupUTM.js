__d(
  "CPASMerchantPredefinedAdgroupUTM",
  [
    "AdsCPASCatalogProvider",
    "AdsGraphAPI",
    "AdsPEAdgroupSelectors",
    "AdsUEditorAdgroupSetURLTagsDataAction",
    "CPASURLTagsLoggingClient",
    "catalogSegmentGetCombinedUTMs",
    "catalogSegmentGetMerchantPredefinedUTMs",
    "getErrorSafe",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = [];
      return (
        e.forEach(function (e) {
          var o,
            a,
            i = e == null ? void 0 : e.id;
          if (i != null) {
            var l =
                (o =
                  e == null || (a = e.creative) == null
                    ? void 0
                    : a.url_tags) != null
                  ? o
                  : "",
              s = r("catalogSegmentGetCombinedUTMs")(l, t);
            s !== l && n.push({ id: i, urlTags: s });
          }
        }),
        n
      );
    }
    function s(e, t) {
      return o("AdsGraphAPI")
        .get(i.id)
        .object("campaign_group", e)
        .get({ fields: ["promoted_object"] })
        .then(function (e) {
          var t;
          return (t = e.promoted_object) == null
            ? void 0
            : t.product_catalog_id;
        })
        .catch(function (n) {
          return (
            o("CPASURLTagsLoggingClient").CPASURLTagsLoggingClient.log({
              advertiserAccountID: t,
              debugMessage:
                "fetch catalog from campaign_group " +
                e +
                " failed: " +
                r("getErrorSafe")(n).message,
              component: "CPASMerchantPredefinedAdgroupUTM",
            }),
            null
          );
        });
    }
    function u(t, n) {
      if (!(n == null || n.length === 0 || t == null)) {
        var a = t.account_id,
          l = n
            .map(function (e) {
              return o("AdsPEAdgroupSelectors")
                .getSelector_LEGACY()(e)
                .getValue();
            })
            .filter(function (e) {
              return e != null;
            });
        if (!(a == null || l.length === 0 || l[0] == null)) {
          var u = l[0];
          r("promiseDone")(s(u.campaign_id, a), function (t) {
            if (t != null) {
              var n = r("AdsCPASCatalogProvider")
                  .toFluxSelector()()
                  .get({ catalogID: t, adAccountID: a })
                  .map(function (e) {
                    return e.ad_account_to_collaborative_ads_share_settings;
                  }),
                s = n.getError();
              if (s != null) throw s;
              var u = n.getValue();
              if (!n.isLoadingOrEmpty() && u != null) {
                var c = r("catalogSegmentGetMerchantPredefinedUTMs")(u);
                if (c == null) return;
                var d = e(l, c);
                (d.forEach(function (e) {
                  var t = e.id,
                    n = e.urlTags;
                  r("AdsUEditorAdgroupSetURLTagsDataAction").dispatch(
                    { adgroupIDs: [t], hostID: "EDITING", urlTags: n },
                    {
                      line: "136",
                      module: "CPASMerchantPredefinedAdgroupUTM.js",
                      moduleID: i.id,
                    },
                  );
                }),
                  o("CPASURLTagsLoggingClient").CPASURLTagsLoggingClient.log({
                    advertiserAccountID: a,
                    catalogSegmentID: t,
                    debugMessage:
                      d.length +
                      " adgroup(s)' UTM is updated with merchant predefined utm: " +
                      c,
                    component: "CPASMerchantPredefinedAdgroupUTM",
                  }));
              }
            }
          });
        }
      }
    }
    l.updateAdgroupsWithMerchantPredefinedURL = u;
  },
  98,
);
