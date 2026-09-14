__d(
  "prefetchFanoutLinksData",
  [
    "AdsConnectedSourcesModalSaveStateAction",
    "AdsFlexibleFormatAdexUtils",
    "RelayHooks",
    "prefetchFanoutLinksDataQuery.graphql",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e !== void 0 ? e : (e = n("prefetchFanoutLinksDataQuery.graphql")),
      u = 16;
    function c(e) {
      var t, n, r, o, a, i, l;
      return {
        image_url:
          (t = (n = e.image) == null ? void 0 : n.image_url) != null ? t : null,
        image_hash: null,
        description: (r = e.description) != null ? r : null,
        title: (o = e.verbatim_title) != null ? o : null,
        url: (a = e.fanout_link) != null ? a : null,
        featured_offering_asset_id:
          (i = e.featured_offering_asset_id) != null ? i : null,
        mgenai_website_entity_id:
          (l = e.mgenai_website_entity_id) != null ? l : null,
      };
    }
    function d(e, t, n) {
      o("AdsFlexibleFormatAdexUtils").passGKForCombinedFeaturedOfferings(!0) &&
        o("RelayHooks")
          .fetchQuery(e, s, { url: t, skip: !1, ad_account_id: n })
          .toPromise()
          .then(function (e) {
            var t,
              n = (
                (t = e == null ? void 0 : e.xfb_fanout_links_by_url) != null
                  ? t
                  : []
              )
                .slice(0, u)
                .map(function (e) {
                  return c(e);
                });
            r("AdsConnectedSourcesModalSaveStateAction").dispatch(
              { state: { preloadedFanoutLinks: n } },
              {
                line: "96",
                module: "prefetchFanoutLinksData.js",
                moduleID: i.id,
              },
            );
          });
    }
    l.prefetchFanoutLinksData = d;
  },
  98,
);
