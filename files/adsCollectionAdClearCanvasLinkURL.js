__d(
  "adsCollectionAdClearCanvasLinkURL",
  [
    "AdsAPIChildAttachmentPaths",
    "AdsAPIObjectives",
    "AdsAdgroupSemanticFields",
    "AdsAssetFeedFieldUtils",
    "AdsChildAttachmentsUtils",
    "AdsUEditorAdgroupMultiProductMutators",
    "isAdsCanvasLink",
    "mixedToString",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n, a) {
      if (n === r("AdsAPIObjectives").LEAD_GENERATION) return e;
      var i = o("AdsAssetFeedFieldUtils").firstAsset_TALK_WITH_ACE_BEFORE_USE(
          r("AdsAdgroupSemanticFields").linkURL.get(t, e),
          "website_url",
        ),
        l = e;
      if (r("isAdsCanvasLink")(i)) {
        var s;
        l = r("AdsAdgroupSemanticFields").linkURL.set(t, e, a);
        var u =
          (s = r("AdsAdgroupSemanticFields").callToActionValue.get(t, l)) ==
          null
            ? void 0
            : s.delete("lead_gen_form_id");
        ((l = r("AdsAdgroupSemanticFields").callToActionValue.set(t, l, u)),
          o("AdsChildAttachmentsUtils").isCarouselAd(l) &&
            ((l = o("AdsUEditorAdgroupMultiProductMutators").setInEachChild(
              r("AdsAPIChildAttachmentPaths").LINK,
              a,
              l,
            )),
            (l = o("AdsUEditorAdgroupMultiProductMutators").deleteInEachChild(
              r("AdsAPIChildAttachmentPaths").CALL_TO_ACTION.VALUE
                .LEAD_GEN_FORM_ID,
              e,
            ))));
      }
      var c = r("AdsAdgroupSemanticFields").callToActionValue.get(t, l);
      if (c) {
        var d = c.get("link");
        r("isAdsCanvasLink")(r("mixedToString")(d)) &&
          (l = r("AdsAdgroupSemanticFields").callToActionValue.isSupported(t, e)
            ? r("AdsAdgroupSemanticFields").callToActionValue.set(
                t,
                l,
                c.set("link", a),
              )
            : l);
      }
      return l;
    }
    l.default = e;
  },
  98,
);
