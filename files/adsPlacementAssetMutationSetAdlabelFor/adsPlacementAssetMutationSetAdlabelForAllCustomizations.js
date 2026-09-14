__d(
  "adsPlacementAssetMutationSetAdlabelForAllCustomizations",
  [
    "AdsAPIAdgroupPaths",
    "AdsAPIAdgroupRecordUtils",
    "AdsAssetFeedUtils",
    "AdsBrandAwarenessUtils",
    "AdsUEditorUnifiedCreationAdgroupMutators",
    "AdsUnifiedCreativeAPIFields",
    "adsPlacementAssetMutationSetAdlabelForDefaultPlacement",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = e,
        a = r("immutable").Map(),
        i = o("AdsAssetFeedUtils").hasPostFormat(n);
      if (!i) {
        var l = r("adsPlacementAssetMutationSetAdlabelForDefaultPlacement")(
          n,
          t,
          r("AdsUnifiedCreativeAPIFields").message,
          r("AdsAPIAdgroupPaths").CREATIVE.ASSET_FEED_SPEC.BODIES,
          ["text"],
        );
        ((a = a.set("body_label", l.newAdlabel)), (n = l.updatedAdgroup));
      }
      if (!i) {
        var s = r("adsPlacementAssetMutationSetAdlabelForDefaultPlacement")(
          n,
          t,
          r("AdsUnifiedCreativeAPIFields").headline,
          r("AdsAPIAdgroupPaths").CREATIVE.ASSET_FEED_SPEC.TITLES,
          ["text"],
        );
        ((a = a.set("title_label", s.newAdlabel)), (n = s.updatedAdgroup));
      }
      if (o("AdsBrandAwarenessUtils").isWebsiteLinkEnabled(e)) {
        var u = ["website_url", "display_url", "deeplink_url"],
          c = r("adsPlacementAssetMutationSetAdlabelForDefaultPlacement")(
            n,
            t,
            r("AdsUnifiedCreativeAPIFields").linkURL,
            r("AdsAPIAdgroupPaths").CREATIVE.ASSET_FEED_SPEC.LINK_URLS,
            u,
          );
        ((a = a.set("link_url_label", c.newAdlabel)),
          (n = c.updatedAdgroup),
          o("AdsAssetFeedUtils").isClickToMultiDestAds(n) &&
            o("AdsAPIAdgroupRecordUtils").isExistingPostAd(n) &&
            (n = o(
              "AdsUEditorUnifiedCreationAdgroupMutators",
            ).initializeAFSLinkURLFromMultiDestCTAs(n)));
      }
      return { newAdlabels: a, updatedAdgroup: n };
    }
    l.default = e;
  },
  98,
);
