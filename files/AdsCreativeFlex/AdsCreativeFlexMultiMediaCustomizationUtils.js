__d(
  "AdsCreativeFlexMultiMediaCustomizationUtils",
  [
    "AdsCreativeFlexTypes",
    "AdsImageIDClasses",
    "AdsMultiMediaThumbnailUtils",
    "AdsVideoStore",
    "VCETrimUtils",
    "isEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 100;
    function u(e, t, n, r, a, i, l, s) {
      var u = Array.from(
        o(
          "AdsCreativeFlexTypes",
        ).AdsCreativeFlexMultiMediaModalEditorTab.members(),
      );
      return u.some(function (o) {
        return c(o, e, t, n, a, i, l, r, s);
      });
    }
    function c(t, n, a, i, l, s, u, c, d) {
      return t ===
        o("AdsCreativeFlexTypes").AdsCreativeFlexMultiMediaModalEditorTab.TEXT
        ? !f(n.textData)
        : t ===
            o("AdsCreativeFlexTypes").AdsCreativeFlexMultiMediaModalEditorTab
              .DESTINATION
          ? !h(n.destinationData)
          : t ===
              o("AdsCreativeFlexTypes").AdsCreativeFlexMultiMediaModalEditorTab
                .PLACEMENTS
            ? !p(n.placementCustomizationsData)
            : t ===
                o("AdsCreativeFlexTypes")
                  .AdsCreativeFlexMultiMediaModalEditorTab.CROP
              ? !C(a, n, i, c)
              : t ===
                  o("AdsCreativeFlexTypes")
                    .AdsCreativeFlexMultiMediaModalEditorTab.ASPECT_RATIOS
                ? !1
                : t ===
                    o("AdsCreativeFlexTypes")
                      .AdsCreativeFlexMultiMediaModalEditorTab.TRIM
                  ? y(l, u, s, n)
                  : t ===
                      o("AdsCreativeFlexTypes")
                        .AdsCreativeFlexMultiMediaModalEditorTab.THUMBNAIL
                    ? !m(n.thumbnailData)
                    : t ===
                        o("AdsCreativeFlexTypes")
                          .AdsCreativeFlexMultiMediaModalEditorTab.AUDIENCE
                      ? (d == null ? void 0 : d.has(n.id)) === !0
                      : t ===
                          o("AdsCreativeFlexTypes")
                            .AdsCreativeFlexMultiMediaModalEditorTab.ALT_TEXT
                        ? !(e || (e = r("isEmpty")))(n.altText)
                        : t ===
                            o("AdsCreativeFlexTypes")
                              .AdsCreativeFlexMultiMediaModalEditorTab
                              .AUDIO_DESCRIPTION
                          ? n.audioDescriptionData != null
                          : t ===
                              o("AdsCreativeFlexTypes")
                                .AdsCreativeFlexMultiMediaModalEditorTab
                                .CAPTIONS
                            ? !1
                            : (function () {
                                throw Error(
                                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                                    t,
                                );
                              })();
    }
    function d(e) {
      var t, n;
      return (
        ((t =
          (n = r("AdsVideoStore").getCached(e)) == null ||
          (n = n.captions) == null ||
          (n = n.data) == null
            ? void 0
            : n.length) != null
          ? t
          : 0) > 0
      );
    }
    function m(e) {
      return (
        e == null ||
        !o("AdsMultiMediaThumbnailUtils").isCustomThumbnailSource(
          e.thumbnailSource,
        )
      );
    }
    function p(t) {
      return t == null
        ? !0
        : (e || (e = r("isEmpty")))(t.placementCustomizations);
    }
    function _(t) {
      return t == null
        ? !0
        : t.every(function (t) {
            return (e || (e = r("isEmpty")))(t);
          });
    }
    function f(e) {
      return e == null
        ? !0
        : _(e.primaryText) && _(e.headline) && _(e.description);
    }
    function g(t) {
      return t == null
        ? !0
        : (e || (e = r("isEmpty")))(t.websiteUrl) &&
            (e || (e = r("isEmpty")))(t.displayLink);
    }
    function h(t) {
      return t == null
        ? !0
        : (e || (e = r("isEmpty")))(t) ||
            t.every(function (e) {
              return g(e);
            });
    }
    function y(e, t, n, a) {
      var i = !1;
      if (e != null && (e == null ? void 0 : e.type) === "video") {
        var l,
          u =
            (l = t == null ? void 0 : t.get(e.id)) != null
              ? l
              : n == null
                ? void 0
                : n.get(e);
        if (u) {
          var c,
            d = e == null || (c = e.asset) == null ? void 0 : c.length,
            m = { trim_after_end: d != null ? d : s, trim_before_start: 0 };
          return (
            (i = o("VCETrimUtils").haveMediaPickerTrimmingParamsChanged(u, m)),
            i
          );
        }
      }
      if (!i && a != null && a.type === "VIDEO") {
        var p = t == null ? void 0 : t.get(a.id);
        if (p) {
          var _ = r("AdsVideoStore").get(a.id),
            f = _ == null ? void 0 : _.length,
            g = { trim_after_end: f != null ? f : s, trim_before_start: 0 };
          i = o("VCETrimUtils").haveMediaPickerTrimmingParamsChanged(p, g);
        }
        if (!i && n != null) {
          var h = n.findKey(function (e, t) {
            return t.type === "video" && t.id === a.id;
          });
          if (h != null && h.type === "video") {
            var y = n.get(h);
            if (y) {
              var C = r("AdsVideoStore").get(a.id),
                b = C == null ? void 0 : C.length,
                v = { trim_after_end: b != null ? b : s, trim_before_start: 0 };
              i = o("VCETrimUtils").haveMediaPickerTrimmingParamsChanged(y, v);
            }
          }
        }
      }
      return i;
    }
    function C(e, t, n, r) {
      if (r != null && t != null) {
        if (t.type === "IMAGE") {
          var a,
            i =
              (a = r.creative) == null || (a = a.media_sourcing_spec) == null
                ? void 0
                : a.images;
          if (i != null) {
            var l = i.find(function (e) {
              return (
                (e.hash === t.id || e.url === t.id) &&
                e.image_crops != null &&
                Array.isArray(e.image_crops) &&
                e.image_crops.length > 0
              );
            });
            if (l) return !1;
          }
        }
        if (t.type === "VIDEO") {
          var s,
            u =
              (s = r.creative) == null || (s = s.media_sourcing_spec) == null
                ? void 0
                : s.videos;
          if (u != null) {
            var c = u.find(function (e) {
              return (
                e.original_video_id != null &&
                e.original_video_id === t.id &&
                e.original_video_id !== e.video_id
              );
            });
            if (c) return !1;
          }
        }
      }
      if (e != null && !e.isEmpty()) {
        var d = e.some(function (e) {
          return e.isChecked && !e.isOriginalSelected;
        });
        return !d;
      }
      if (n == null || n.isEmpty() || t == null || (n == null && n.isEmpty()))
        return !0;
      var m = n.findKey(function (e, n) {
        if (n.type === "image" && t.type === "IMAGE") {
          if (n.id == null) return !1;
          if (
            n.id instanceof o("AdsImageIDClasses").AdsAccountImageID ||
            n.id instanceof o("AdsImageIDClasses").AdsBusinessImageID ||
            n.id instanceof o("AdsImageIDClasses").AdsExternalImageWithHashID ||
            n.id instanceof o("AdsImageIDClasses").AdsStickerImageID
          ) {
            var r = n.id.getHash();
            return r === t.id;
          } else if (
            n.id instanceof o("AdsImageIDClasses").AdsExternalImageID
          ) {
            var a = n.id.getUrl();
            return a === t.id || a === t.url;
          }
        } else if (n.type === "video" && t.type === "VIDEO")
          return n.id === t.id;
        return !1;
      });
      if (m == null) return !0;
      var p = n.get(m);
      if (p == null || p.isEmpty()) return !0;
      var _ = p.some(function (e) {
        var t;
        return (
          e.isAspectRatioChecked &&
          !e.isOriginalSelected &&
          ((t = e.asset) == null ? void 0 : t.crops) != null
        );
      });
      return !_;
    }
    ((l.isRelatedMediaEditedOnAnyTab = u),
      (l.isRelatedMediaEditedInTab = c),
      (l.hasUploadedCaptionTrack = d));
  },
  98,
);
