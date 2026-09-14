__d(
  "MobileFeedClientSideAdPreviewUtils",
  [
    "fbt",
    "AdPreviewClientSideFBT",
    "AdPreviewUtilsConstants",
    "AdsAdPreviewCachedRenderPropsImageUtils",
    "AdsAdPreviewCachedScrapedTextUtils",
    "AdsAdPreviewDomainNameUtils",
    "AdsCallToActionTypes",
    "ClickToMessageCTDAdPreviewGating",
    "ClickToMessageCTDHeadlineGating",
    "ContentBlock",
    "ContentState",
    "FBLogger",
    "LRUCapacityCache",
    "getHashtagMatches",
    "getImplicitURLRangesForContentState",
    "gkx",
    "isEmpty",
    "react",
    "react-compiler-runtime",
    "useAdsImagesData",
    "useLastNonEmpty",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = u || (u = o("react")),
      d = u.useMemo,
      m = "/images/mobile/privacy/wordmark/everyone.png",
      p = 3,
      _ = "share",
      f = "flexible",
      g = 2,
      h = null,
      y = "MOCK_ENTITY_URL",
      C = { height: 320, width: 320 },
      b = 16 / 9,
      v = 320,
      S = 4 / 5,
      R = 20,
      L = new (r("LRUCapacityCache"))(R),
      E = new (r("LRUCapacityCache"))(R),
      k = new (r("LRUCapacityCache"))(R),
      I = new (r("LRUCapacityCache"))(R),
      T = function () {
        return { actions: ["LIKE", "COMMENT", "SHARE"], feedbackData: null };
      },
      D = function (t, n) {
        var e,
          r = o("AdsAdPreviewCachedRenderPropsImageUtils").getCachedImage(k, t);
        if (r != null) return r;
        var a = (e = t.media) == null ? void 0 : e.imageURL,
          i = a != null ? (n == null ? void 0 : n[a]) : null,
          l = i != null ? { width: i.width, height: i.height } : null,
          s = i != null && i.height > i.width;
        return {
          imageURI: a,
          imageType: f,
          imageSize: s ? C : null,
          shouldShowSphericalOverlay: !1,
          resizeMode: s ? "p" : null,
          originalImageSize: l,
        };
      },
      x = function (t, n, r, o) {
        var e,
          a,
          i,
          l = (e = t.media) == null ? void 0 : e.imageURL,
          s = l != null ? (n == null ? void 0 : n[l]) : null,
          u = s != null ? Math.max(s.width / s.height, S) : b,
          c = 230,
          d = r ? { height: c, width: c } : { width: v, height: v / u },
          m = s != null ? { width: s.width, height: s.height } : d;
        return {
          videoID: null,
          videoURISD: (a = t.media) == null ? void 0 : a.videoURL,
          videoPDASHManifestURL: null,
          videoDASHManifestXML: null,
          videoURIHD: (i = t.media) == null ? void 0 : i.videoURL,
          thumbnailURI: o != null ? o : l,
          thumbnailDimensions: d,
          originalDimensions: m,
          dimensions: d,
          aspectRatio: u,
          originalAspectRatio: u,
          captionsSource: null,
          isPlayable: !0,
          isSpherical: !1,
          playbackDuration: 1e4,
          shouldHidePlayButton: !1,
          shouldShowEndScreen: !1,
          shouldHideEmbeddedControl: !1,
        };
      },
      $ = function (t, n, r) {
        return t !== "CAROUSEL"
          ? t
          : (r == null ? void 0 : r.videoURIHD) !== null ||
              (r == null ? void 0 : r.videoURISD) !== null
            ? "VIDEO"
            : (n == null ? void 0 : n.imageURI) !== null
              ? "IMAGE"
              : "CAROUSEL";
      },
      P = function (t) {
        var e, n, r;
        return (e = (n = t.profiles.page) == null ? void 0 : n.brandName) !=
          null
          ? e
          : (r = t.profiles.page) == null
            ? void 0
            : r.name;
      },
      N = function (n, a) {
        var t;
        if (n.hasDynamicLeadGenCallToAction)
          return {
            text: r("AdPreviewClientSideFBT").LEAD_ADS_LINK_DISPLAY.toString(),
          };
        if (n.callToActionAppDestination === "MESSENGER")
          return { text: s._(/*BTDS*/ "Messenger").toString() };
        if (
          n.callToActionAppDestination === "INSTAGRAM_DIRECT" &&
          o("ClickToMessageCTDHeadlineGating").shouldShowCTDCustomHeadline()
        )
          return { text: s._(/*BTDS*/ "Instagram").toString() };
        switch (n.callToActionType) {
          case "LIKE_PAGE":
            return { text: null };
          case "WHATSAPP_MESSAGE":
            return { text: s._(/*BTDS*/ "WhatsApp").toString() };
          case "DONATE":
            return { text: s._(/*BTDS*/ "Donate on Facebook").toString() };
          default:
            return {
              color: a == null ? void 0 : a.color,
              text:
                (t = (e || (e = r("isEmpty")))(n.displayURL)
                  ? o("AdsAdPreviewDomainNameUtils").getDomainName(
                      n.destinationLink,
                    )
                  : n.displayURL) != null
                  ? t
                  : r("AdPreviewUtilsConstants").PLACEHOLDER_DISPLAY_URL,
            };
        }
      },
      M = function (t, n) {
        var e;
        if (t.hasDynamicLeadGenCallToAction && t.headline == null) return null;
        switch (t.callToActionType) {
          case "LIKE_PAGE":
            return n;
          default:
            return (e = t.headline) != null
              ? e
              : r("AdPreviewUtilsConstants").PLACEHOLDER_HEADLINE;
        }
      },
      w = function (n, o, a) {
        var t = n.destinationLink;
        if (t != null && (e || (e = r("isEmpty")))(n.headline)) {
          var i = L.get(t);
          if (i != null) return { text: i, maxLine: a };
        }
        return { text: M(n, o), maxLine: a };
      },
      A = function (t, n) {
        var e = n || {},
          a = e.iconName,
          i = a === void 0 ? null : a,
          l = e.iconOnlyName,
          s = l === void 0 ? null : l,
          u = e.linkType,
          c = u === void 0 ? null : u,
          d = t.callToAction;
        if (t.callToActionAppDestination === "MESSENGER")
          return {
            title: d,
            iconName: "app-messenger",
            iconOnlyName: null,
            linkType: c,
          };
        if (
          t.callToActionAppDestination === "INSTAGRAM_DIRECT" &&
          o("ClickToMessageCTDAdPreviewGating").shouldApplyCTDAdPreviewFixes()
        )
          return {
            title: d,
            iconName: "app-instagram",
            iconOnlyName: null,
            linkType: c,
          };
        switch (t.callToActionType) {
          case "LIKE_PAGE":
            return {
              title: d,
              iconName: null,
              iconOnlyName: "like",
              linkType: c,
            };
          case "WHATSAPP_MESSAGE":
            return {
              title: r("AdsCallToActionTypes").TYPES.WHATSAPP_MESSAGE
                .short_text,
              iconName: "app-whatsapp",
              iconOnlyName: null,
              linkType: c,
            };
          default:
            return d != null || i != null || s != null || c != null
              ? { title: d, iconName: i, iconOnlyName: s, linkType: c }
              : null;
        }
      },
      F = function (n) {
        var t,
          a = n.destinationLink;
        if (a != null && (e || (e = r("isEmpty")))(n.description)) {
          var i = E.get(a);
          if (i != null) return i;
        }
        return n.callToActionAppDestination === "MESSENGER" ||
          (n.hasDynamicLeadGenCallToAction && n.description == null) ||
          (n.description == null &&
            n.callToActionAppDestination === "INSTAGRAM_DIRECT" &&
            o(
              "ClickToMessageCTDAdPreviewGating",
            ).shouldApplyCTDAdPreviewFixes())
          ? null
          : (t = n.description) != null
            ? t
            : r("AdPreviewUtilsConstants").PLACEHOLDER_LINK_DESCRIPTION;
      },
      O = function (t, n, r) {
        var e = t || {},
          o = e.profileIconURI,
          a = o === void 0 ? null : o,
          i = e.linkDisplay,
          l = e.linkTitleWithMaxLine,
          s = l === void 0 ? { maxLine: g, text: null } : l,
          u = e.callToAction,
          c = e.adContext,
          d = c === void 0 ? null : c,
          m = s || {},
          p = m.maxLine,
          _ = p === void 0 ? g : p;
        return {
          profileIconURI: a,
          linkDisplay: N(n, i),
          linkTitleWithMaxLine: w(n, r, _),
          linkDescription: F(n),
          callToAction: A(n, u),
          adContext: d,
        };
      };
    function B(e, t) {
      var n,
        a,
        i = o("react-compiler-runtime").c(17),
        l;
      i[0] !== e.cards
        ? ((l = e.cards.map(W)), (i[0] = e.cards), (i[1] = l))
        : (l = i[1]);
      var s = r("useAdsImagesData")(l),
        u;
      i[2] !== e ? ((u = P(e)), (i[2] = e), (i[3] = u)) : (u = i[3]);
      var c = u;
      (n = e.placementSpecificSpec) == null || n.maybeNativeVideoFormat;
      var d;
      if (
        i[4] !== t ||
        i[5] !== s ||
        i[6] !== c ||
        i[7] !== e.cards ||
        i[8] !== e.mediaFormat ||
        i[9] !==
          ((a = e.placementSpecificSpec) == null
            ? void 0
            : a.maybeNativeVideoFormat)
      ) {
        var m, p, f;
        if (
          i[11] !== t ||
          i[12] !== s ||
          i[13] !== c ||
          i[14] !== e.mediaFormat ||
          i[15] !==
            ((m = e.placementSpecificSpec) == null
              ? void 0
              : m.maybeNativeVideoFormat)
        ) {
          var g;
          ((f = function (r, o) {
            var n,
              a,
              i = (t == null ? void 0 : t[o]) || {},
              l = i.styleRenderer,
              u = i.footer,
              d = l === void 0 ? _ : l,
              m = e.mediaFormat === "CAROUSEL",
              p = e.mediaFormat === "IMAGE" || m ? D(r, s) : null,
              f =
                e.mediaFormat === "VIDEO" || m
                  ? x(
                      r,
                      s,
                      m,
                      (n = i.media) == null || (n = n.videoMediaData) == null
                        ? void 0
                        : n.thumbnailURI,
                    )
                  : null,
              g =
                ((a = e.placementSpecificSpec) != null &&
                  a.maybeNativeVideoFormat &&
                  e.mediaFormat === "VIDEO") ||
                r.callToActionType === "NO_BUTTON"
                  ? null
                  : O(u, r, c);
            return {
              styleRenderer: d,
              media: {
                mediaFormat: $(e.mediaFormat, p, f),
                imageMediaData: p,
                videoMediaData: f,
              },
              footer: g,
            };
          }),
            (i[11] = t),
            (i[12] = s),
            (i[13] = c),
            (i[14] = e.mediaFormat),
            (i[15] =
              (g = e.placementSpecificSpec) == null
                ? void 0
                : g.maybeNativeVideoFormat),
            (i[16] = f));
        } else f = i[16];
        ((d = e.cards.map(f)),
          (i[4] = t),
          (i[5] = s),
          (i[6] = c),
          (i[7] = e.cards),
          (i[8] = e.mediaFormat),
          (i[9] =
            (p = e.placementSpecificSpec) == null
              ? void 0
              : p.maybeNativeVideoFormat),
          (i[10] = d));
      } else d = i[10];
      return d;
    }
    function W(e) {
      var t;
      return (t = e.media) == null ? void 0 : t.imageURL;
    }
    var q = function (t, n) {
        return (
          n === void 0 && (n = !1),
          [{ offset: 0, length: t.length, show_verified_badge: n }]
        );
      },
      U = function (n, o) {
        var t,
          a,
          i,
          l = (t = P(n)) != null ? t : "";
        (e || (e = r("isEmpty")))(l) &&
          r("FBLogger")("mobile_feed_client_side_preview").warn(
            "Empty title in headerData",
          );
        var s = ((a = n.profiles.page) == null ? void 0 : a.imageURL) || "";
        (e || (e = r("isEmpty")))(s) &&
          r("FBLogger")("mobile_feed_client_side_preview").warn(
            "Empty imageURI in headerData",
          );
        var u = o || {},
          c = u.fundingSourceInfo,
          d = u.locationTransparencyLabel,
          p = u.profileFeedDisclaimer,
          _ = u.directTarget,
          f = u.shouldHideMenu,
          g = f === void 0 ? !1 : f,
          y = u.autoTranslationTag,
          C = y === void 0 ? h : y,
          b = u.showXOut,
          v = b === void 0 ? !1 : b,
          S = u.ranges,
          R =
            S === void 0
              ? q(l, (i = n.profiles.page) == null ? void 0 : i.verified)
              : S,
          L = u.actorName,
          E = u.partnershipLabel,
          k = u.disclaimerText,
          I = u.rating,
          T = u.ratingCount,
          D = u.enableFollowLink;
        return {
          title: l,
          ranges: R,
          imageURI: s,
          locationTransparencyLabel: d,
          fundingSourceInfo: c,
          privacyIconURI: m,
          profileFeedDisclaimer: p,
          directTarget: _,
          shouldHideMenu: g,
          autoTranslationTag: C,
          showXOut: v,
          actorName: L == null ? "" : L,
          partnershipLabel: E == null ? "" : E,
          disclaimerText: k,
          rating: I,
          ratingCount: T,
          enableFollowLink: D,
        };
      },
      V = function (t, n, r) {
        t.push({ offset: n, length: r - n, entity: { url: y } });
      },
      H = function (t, n) {
        if (t == null) return [];
        var e = (n || []).map(function (e) {
            return babelHelpers.extends({}, e, { entity: { url: y } });
          }),
          o = new (r("ContentBlock"))({ text: t });
        r("getHashtagMatches")(o, function (t, n) {
          V(e, t, n);
        });
        var a = r("getImplicitURLRangesForContentState")(
          r("ContentState").createFromBlockArray([o]),
        )[0];
        return (
          a.forEach(function (t) {
            var n = t.end,
              r = t.start;
            V(e, r, n);
          }),
          e
        );
      },
      G = function (t) {
        var e,
          n =
            (e = t.renderProps) == null ||
            (e = e.mobileFeedData) == null ||
            (e = e.attachmentsData) == null ||
            (e = e[0]) == null ||
            (e = e.attachmentDataList) == null
              ? void 0
              : e.map(function (e) {
                  var t = e.footer;
                  return t;
                }),
          r =
            n == null
              ? void 0
              : n.map(function (e) {
                  var t;
                  return e == null || (t = e.linkTitleWithMaxLine) == null
                    ? void 0
                    : t.text;
                });
        r != null &&
          o("AdsAdPreviewCachedScrapedTextUtils").storeScrapedHeadlines(
            L,
            t,
            r,
          );
        var a =
          n == null
            ? void 0
            : n.map(function (e) {
                return e == null ? void 0 : e.linkDescription;
              });
        a != null &&
          o("AdsAdPreviewCachedScrapedTextUtils").storeScrapedDescriptions(
            E,
            t,
            a,
          );
      },
      z = function (t) {
        var e,
          n =
            (e = t.renderProps) == null ||
            (e = e.mobileFeedData) == null ||
            (e = e.attachmentsData) == null ||
            (e = e[0]) == null ||
            (e = e.attachmentDataList) == null
              ? void 0
              : e.map(function (e) {
                  var t = e.media;
                  return t == null ? void 0 : t.imageMediaData;
                });
        n != null &&
          o(
            "AdsAdPreviewCachedRenderPropsImageUtils",
          ).storeImagesFromRenderProps(k, t, n);
      },
      j = function (t) {
        var e,
          n =
            (e = t.renderProps) == null || (e = e.mobileFeedData) == null
              ? void 0
              : e.bloksData;
        if (n != null) {
          var r;
          I.set(
            (r = n == null ? void 0 : n.serializedPayload) != null ? r : "",
            n,
          );
        }
      };
    function K(e, t, n) {
      var r,
        o = t || {},
        a = o.shouldHideMessage,
        i = a === void 0 ? !1 : a,
        l = o.maxLines,
        s = l === void 0 ? p : l;
      return {
        shouldHideMessage: i,
        entitiesRanges: n,
        message: (r = e.cards[0].message) != null ? r : e.message,
        maxLines: s,
      };
    }
    function Q(e) {
      var t,
        n,
        a,
        i = o("react-compiler-runtime").c(25),
        l = (t = e.renderProps) == null ? void 0 : t.mobileFeedData,
        s = r("useLastNonEmpty")(l) || {},
        u = B(
          e,
          (n = s.attachmentsData) == null || (n = n[0]) == null
            ? void 0
            : n.attachmentDataList,
        ),
        c;
      i[0] !== e.message || i[1] !== e.messageEntityRanges
        ? ((c = H(e.message, e.messageEntityRanges)),
          (i[0] = e.message),
          (i[1] = e.messageEntityRanges),
          (i[2] = c))
        : (c = i[2]);
      var d = c,
        m = s.headerData,
        p = s.messageData,
        _ = s.creativeBadgeData,
        f = s.footerData,
        g = s.miscellaneousData,
        h = s.ufiData,
        y;
      i[3] !== h
        ? ((y = h === void 0 ? T() : h), (i[3] = h), (i[4] = y))
        : (y = i[4]);
      var C = y;
      if (l != null) return (G(e), z(e), j(e), l);
      var b =
          (a = e.renderProps) == null || (a = a.mobileFeedData) == null
            ? void 0
            : a.bloksData,
        v;
      i[5] !== m || i[6] !== e
        ? ((v = U(e, m)), (i[5] = m), (i[6] = e), (i[7] = v))
        : (v = i[7]);
      var S;
      i[8] !== d || i[9] !== p || i[10] !== e
        ? ((S = K(e, p, d)), (i[8] = d), (i[9] = p), (i[10] = e), (i[11] = S))
        : (S = i[11]);
      var R;
      i[12] !== u
        ? ((R = [{ attachmentDataList: u, shouldRenderInTetra: !0 }]),
          (i[12] = u),
          (i[13] = R))
        : (R = i[13]);
      var L;
      if (i[14] !== (b == null ? void 0 : b.serializedPayload)) {
        var E, k;
        ((L =
          (E =
            I == null
              ? void 0
              : I.get(
                  (k = b == null ? void 0 : b.serializedPayload) != null
                    ? k
                    : "",
                )) != null
            ? E
            : null),
          (i[14] = b == null ? void 0 : b.serializedPayload),
          (i[15] = L));
      } else L = i[15];
      var D;
      i[16] !== _ ||
      i[17] !== f ||
      i[18] !== g ||
      i[19] !== v ||
      i[20] !== S ||
      i[21] !== R ||
      i[22] !== L ||
      i[23] !== C
        ? ((D = {
            headerData: v,
            messageData: S,
            attachmentsData: R,
            creativeBadgeData: _,
            footerData: f,
            footerPillsPayload: null,
            pduSectionPayload: null,
            miscellaneousData: g,
            ufiData: C,
            bloksData: L,
          }),
          (i[16] = _),
          (i[17] = f),
          (i[18] = g),
          (i[19] = v),
          (i[20] = S),
          (i[21] = R),
          (i[22] = L),
          (i[23] = C),
          (i[24] = D))
        : (D = i[24]);
      var x = D;
      return x;
    }
    var X = " " + String.fromCodePoint(183) + " ",
      Y = s._(/*BTDS*/ "Sponsored"),
      J = { SPONSORED: r("gkx")("19623") ? s._(/*BTDS*/ "Ad") : Y },
      Z = function (t, n) {
        n === void 0 && (n = !1);
        var e = n ? Y : J.SPONSORED;
        return t != null
          ? c.jsxs(c.Fragment, {
              children: [e, X, c.jsx("span", { children: t })],
            })
          : e;
      };
    ((l.useRenderSpecToReactProps = Q), (l.getSponsoredLabel = Z));
  },
  226,
);
