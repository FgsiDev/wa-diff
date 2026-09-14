__d(
  "AdsInstagramFeedClientSideAdPreviewsUtils",
  ["AdsInstagramPreviewUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "/images/ads/common/place_holder_image_600x600.png";
    function s(t) {
      var n,
        r = t.media;
      return {
        imageMediaData:
          (r == null ? void 0 : r.videoURL) == null
            ? {
                imageURL: (n = r == null ? void 0 : r.imageURL) != null ? n : e,
                height: void 0,
                width: void 0,
              }
            : null,
        videoMediaData:
          (r == null ? void 0 : r.videoURL) != null
            ? {
                hasAudio: void 0,
                hasSubtitle: void 0,
                videoID: void 0,
                videoURL: r == null ? void 0 : r.videoURL,
                videoSubtitleURL: void 0,
                videoSubtitleOffset: void 0,
                isLongVideo: null,
                isLoopVideo: !1,
                height: void 0,
                width: void 0,
                aspectRatio: void 0,
                thumbnailURL: void 0,
                videoLength: void 0,
              }
            : null,
      };
    }
    function u(e, t) {
      var n,
        r,
        o,
        a,
        i,
        l,
        u = e.mediaFormat === "CAROUSEL" ? "carousel" : "single_media";
      return {
        version: "v2",
        commonData: {
          adType: u,
          apiAdFormat: t,
          isCommentsDisabledL2: e.commentsDisabledL2,
        },
        identityData: {
          profileName: (n = e.profiles.instagram) == null ? void 0 : n.name,
          profilePictureUrl:
            (r = e.profiles.instagram) == null ? void 0 : r.imageURL,
          brandedContentSponsorName: void 0,
          isPageBacked:
            (o = e.profiles.instagram) == null ? void 0 : o.isPageBacked,
          hideSponsoredLabel:
            (a = e.profiles.instagram) == null ? void 0 : a.hideSponsoredLabel,
          taggedLocation:
            (i = e.profiles.instagram) == null ? void 0 : i.taggedLocation,
        },
        mediaData: { mediaDataCells: e.cards.map(s) },
        callToActionData: {
          callToActionDataCells: e.cards.map(function (e) {
            var t;
            return {
              cta: e.callToActionType === "NO_BUTTON" ? null : e.callToAction,
              callToActionType:
                e.callToActionType === "NO_BUTTON" ? null : e.callToActionType,
              callToActionAppDestination:
                (t = e.callToActionAppDestination) != null ? t : void 0,
            };
          }),
        },
        textData: {
          primaryText: (l = e.message) != null ? l : "",
          headlines:
            e.cards.length > 1
              ? e.cards.map(function (e) {
                  var t = e.headline;
                  return t != null ? t : "";
                })
              : void 0,
          authorizationDisclaimer: void 0,
          hideHeadline: void 0,
        },
        perceptualHashResult: void 0,
        shoppingProductTagsCollectionsData: e.shoppingProductTagsData,
        productListData: void 0,
        adAccountGatingData: {
          igFeed: {
            isFeedCollectionAdPreviewEnabled: !1,
            isFeedProductExtensionsAdPreviewEnabled: !1,
            passPreviewFollowButtonGK: !1,
          },
        },
      };
    }
    function c(e, t, n) {
      return (
        t.callToActionData.hasLeadGenFormID === !1 &&
        e.destinationLink == null &&
        n.callToActionAppDestination == null &&
        o("AdsInstagramPreviewUtils").isDestinationLinkRequiredForCTAType(
          n.callToActionType,
        )
      );
    }
    ((l.mapRenderSpecToPreviewProps = u), (l.shouldHideCTA = c));
  },
  98,
);
