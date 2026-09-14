__d(
  "AdsWizardMediaPickerVariantMapUtils",
  [
    "AdsAppExperiencesImageUrlExpiry",
    "AdsCreativeMediaSourcingSpecTypes.flow",
    "AdsImageIDUtils",
    "AdsUtils",
    "AdsWizardMediaPickerVariantUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Map([
        ["advertiser_uploaded_variant", "advertiser_uploaded_variant"],
        ["padding", "padding"],
        ["recomposition", "recomposition"],
        ["uncrop", "uncrop"],
      ]),
      s = new Map(
        Array.from(e, function (e) {
          var t = e[0],
            n = e[1];
          return [n, t];
        }),
      ),
      u = new Set(Array.from(e.values()).concat("smart_crop"));
    function c(e) {
      return e === "MANUAL";
    }
    var d = {
      composition: new Set(["padding", "smart_crop"]),
      recomposition: new Set(["recomposition", "uncrop"]),
    };
    function m(e, t, n) {
      return e + ":" + t + ":" + n;
    }
    var p = "seed",
      _ = "original";
    function f(e) {
      return e != null && e !== "";
    }
    function g(e) {
      return (
        e !==
        o("AdsCreativeMediaSourcingSpecTypes.flow")
          .RelatedMediaOptInStatusSpecType.OPT_OUT
      );
    }
    function h(e) {
      return !g(e.optInStatus) && !c(e.actionMetadata);
    }
    function y(e) {
      return e.isFromSpec === !0 || c(e.actionMetadata);
    }
    function C(e) {
      return !o("AdsWizardMediaPickerVariantUtils").isOriginalVariantSource(
        e.type,
      );
    }
    function b(e) {
      return (
        o("AdsWizardMediaPickerVariantUtils").isOriginalVariantSource(e.type) ||
        (o("AdsWizardMediaPickerVariantUtils").isVariantCroppable(e.type) &&
          e.crop == null)
      );
    }
    function v(e) {
      return e.filter(C);
    }
    function S(e) {
      return e.some(function (e) {
        return v(e).some(function (e) {
          return (
            e.isFromSpec !== !0 ||
            e.actionMetadata !== e.initialActionMetadata ||
            e.optInStatus !== e.initialOptInStatus
          );
        });
      });
    }
    function R(e) {
      return v(e).some(function (e) {
        return g(e.optInStatus);
      });
    }
    function L(e) {
      return e.some(function (e) {
        var t;
        return y(e) || ((t = e.crop) == null ? void 0 : t.source) === "manual";
      });
    }
    function E(e) {
      return e.filter(function (e) {
        return g(e.optInStatus);
      }).length;
    }
    function k(e, t, n) {
      var r = d[t],
        o = new Set(
          e
            .filter(function (e) {
              return r.has(e.type);
            })
            .map(function (e) {
              return e.aspectRatioType;
            }),
        );
      return n.filter(function (e) {
        return !o.has(e);
      });
    }
    function I(e, t) {
      var n = f(e) ? e : null,
        r = [];
      n != null && r.push({ mediaId: p, thumbnailUrl: n });
      for (var a of t)
        if (
          !(
            o("AdsWizardMediaPickerVariantUtils").isOriginalVariantSource(
              a.type,
            ) || !g(a.optInStatus)
          )
        ) {
          var i = f(a.imageUrl) ? a.imageUrl : n;
          i != null && r.push({ mediaId: a.id, thumbnailUrl: i });
        }
      return r;
    }
    function T(e) {
      return e == null
        ? null
        : (function (e) {
            if (
              ((typeof e == "object" && e !== null) ||
                typeof e == "function") &&
              e.type === "image" &&
              "id" in e
            ) {
              var t = e.id;
              return o("AdsImageIDUtils").getImageHashFromID(t);
            }
            if (
              ((typeof e == "object" && e !== null) ||
                typeof e == "function") &&
              e.type === "video" &&
              "id" in e
            ) {
              var n = e.id;
              return String(n);
            }
            return null;
          })(e);
    }
    function D(e) {
      var t;
      if (e == null || e.type !== "image") return null;
      var n = T(e),
        r = (t = e.asset.getValue()) == null ? void 0 : t.url;
      return n == null || r == null || r === ""
        ? null
        : { mediaId: n, thumbnailUrl: r };
    }
    function x(e) {
      var t,
        n = e.type + ":" + e.aspectRatioType;
      return o("AdsWizardMediaPickerVariantUtils").isAdvertiserVariantSource(
        e.type,
      )
        ? n + ":" + ((t = e.imageHash) != null ? t : "")
        : n;
    }
    function $(e, t) {
      if (t.length === 0) return [];
      var n = new Map(
          e
            .filter(function (e) {
              return c(e.actionMetadata);
            })
            .map(function (e) {
              return [
                x(e),
                {
                  actionMetadata: e.actionMetadata,
                  optInStatus: e.optInStatus,
                },
              ];
            }),
        ),
        r = new Map(
          e
            .filter(function (e) {
              var t;
              return ((t = e.crop) == null ? void 0 : t.source) === "manual";
            })
            .map(function (e) {
              return [x(e), e.crop];
            }),
        ),
        o = new Set(
          e
            .filter(function (e) {
              return e.isFromSpec === !0;
            })
            .map(x),
        ),
        a = new Set(),
        i = [];
      for (var l of t) {
        var s = x(l);
        if (!a.has(s)) {
          a.add(s);
          var u = n.get(s),
            d = r.get(s),
            m = u == null ? l : babelHelpers.extends({}, l, u),
            p = d == null ? m : babelHelpers.extends({}, m, { crop: d });
          i.push(
            o.has(s) ? babelHelpers.extends({}, p, { isFromSpec: !0 }) : p,
          );
        }
      }
      var _ = new Set(i.map(x));
      return e
        .filter(function (e) {
          return !_.has(x(e));
        })
        .concat(i);
    }
    function P(e) {
      var t = e.original_image_hash;
      return t == null || t === "" || e.source === "smart_crop"
        ? !1
        : f(e.hash)
          ? !0
          : f(e.url) &&
            !o("AdsAppExperiencesImageUrlExpiry").isFbcdnUrlExpired(e.url);
    }
    function N(e, t) {
      if (e == null || e.length === 0) return [];
      var n = new Map();
      for (var r of e) {
        var a,
          i = r.source == null ? null : s.get(r.source),
          l = r.original_image_hash,
          u = t(r);
        if (!(i == null || l == null || l === "" || u == null)) {
          var c =
              o("AdsWizardMediaPickerVariantUtils").isAdvertiserVariantSource(
                i,
              ) && r.variant_types != null
                ? r.variant_types.filter(function (e) {
                    return o(
                      "AdsWizardMediaPickerVariantUtils",
                    ).VARIANT_ASPECT_RATIO_TYPES.includes(e);
                  })
                : [],
            d = c.length > 0 ? c : [u.aspectRatioType],
            p =
              (a = r.opt_in_status) != null
                ? a
                : o("AdsCreativeMediaSourcingSpecTypes.flow")
                    .RelatedMediaOptInStatusSpecType.OPT_IN,
            _ = A(r.action_metadata);
          for (var g of d) {
            var h = {
                actionMetadata: _,
                aspectRatioType: g,
                crop: u.crop,
                generatedVideoID: null,
                id: m(
                  g,
                  i,
                  o(
                    "AdsWizardMediaPickerVariantUtils",
                  ).isAdvertiserVariantSource(i) && f(r.hash)
                    ? r.hash
                    : l,
                ),
                imageHash: r.hash,
                imageUrl: r.url,
                initialActionMetadata: _,
                initialOptInStatus: p,
                isFromSpec: !0,
                mediaType: "image",
                optInStatus: p,
                type: i,
              },
              y = n.get(l);
            y == null ? n.set(l, [h]) : y.push(h);
          }
        }
      }
      return Array.from(n, function (e) {
        var t = e[0],
          n = e[1];
        return { mediaID: t, variants: n };
      });
    }
    function M(e, t) {
      if (e == null || e.length === 0) return [];
      var n = [];
      for (var r of e) {
        var a,
          i = r.hash;
        if (!(r.source !== "multi_media" || i == null || i === "")) {
          var l = (a = r.image_crops) == null ? void 0 : a[0],
            s = l == null ? void 0 : l.crop_spec;
          if (s != null) {
            var u =
                (l == null ? void 0 : l.type) === "manual"
                  ? "manual"
                  : "suggested",
              c = [];
            for (var d of Object.keys(s)) {
              var p = t(d),
                _ = s[d];
              p == null ||
                _ == null ||
                c.push({
                  actionMetadata: "DEFAULT",
                  aspectRatioType: p,
                  crop: { box: _, source: u },
                  generatedVideoID: null,
                  id: m(p, "smart_crop", i),
                  imageUrl: null,
                  initialActionMetadata: "DEFAULT",
                  initialOptInStatus: o(
                    "AdsCreativeMediaSourcingSpecTypes.flow",
                  ).RelatedMediaOptInStatusSpecType.OPT_IN,
                  isFromSpec: !0,
                  mediaType: "image",
                  optInStatus: o("AdsCreativeMediaSourcingSpecTypes.flow")
                    .RelatedMediaOptInStatusSpecType.OPT_IN,
                  type: "smart_crop",
                });
            }
            c.length > 0 && n.push({ mediaID: i, variants: c });
          }
        }
      }
      return n;
    }
    function w() {
      for (
        var e = new Map(), t = arguments.length, n = new Array(t), r = 0;
        r < t;
        r++
      )
        n[r] = arguments[r];
      for (var o of n)
        for (var a of o) {
          var i = e.get(a.mediaID);
          if (i == null) {
            var l, s;
            e.set(
              a.mediaID,
              [
                z(
                  (l = (s = a.variants[0]) == null ? void 0 : s.mediaType) !=
                    null
                    ? l
                    : "image",
                ),
              ].concat(a.variants),
            );
          } else i.push.apply(i, a.variants);
        }
      return Array.from(e, function (e) {
        var t = e[0],
          n = e[1];
        return { mediaID: t, variants: n };
      });
    }
    function A(e) {
      switch (e) {
        case "MANUAL":
          return "MANUAL";
        case "STICKY":
          return "STICKY";
        default:
          return "DEFAULT";
      }
    }
    var F = new Map([
        ["recomposition", 0],
        ["uncrop", 1],
        ["smart_crop", 2],
        ["padding", 3],
      ]),
      O = ["FULLSCREEN_VERTICAL", "SQUARE", "VERTICAL", "HORIZONTAL"],
      B = 5;
    function W(e) {
      var t;
      return (t = F.get(e.type)) != null ? t : Number.MAX_SAFE_INTEGER;
    }
    function q(e) {
      var t = O.indexOf(e.aspectRatioType);
      return t === -1 ? O.length : t;
    }
    function U(e) {
      return (
        e.initialOptInStatus !==
        o("AdsCreativeMediaSourcingSpecTypes.flow")
          .RelatedMediaOptInStatusSpecType.OPT_OUT
      );
    }
    function V(e) {
      return e.reduce(function (e, t) {
        if (e == null) return t;
        var n = W(t) - W(e),
          r = n !== 0 ? n : q(t) - q(e);
        return r < 0 ? t : e;
      }, null);
    }
    function H(e, t) {
      var n = e.filter(function (e) {
          return F.has(e.type);
        }),
        r = n.filter(y),
        a = r.filter(function (e) {
          return g(e.optInStatus);
        }),
        i = new Set(
          a.map(function (e) {
            return e.aspectRatioType;
          }),
        ),
        l = n.filter(function (e) {
          return !y(e) && !i.has(e.aspectRatioType) && e.aspectRatioType !== t;
        }),
        s = o("AdsWizardMediaPickerVariantUtils")
          .VARIANT_ASPECT_RATIO_TYPES.map(function (e) {
            var t,
              n = l.filter(function (t) {
                return t.aspectRatioType === e;
              });
            return (t = V(n.filter(U))) != null ? t : V(n);
          })
          .filter(Boolean),
        u = new Set(
          [].concat(
            s
              .filter(function (e) {
                return !U(e);
              })
              .map(function (e) {
                return e.aspectRatioType;
              }),
            r
              .filter(function (e) {
                return !g(e.optInStatus);
              })
              .map(function (e) {
                return e.aspectRatioType;
              }),
          ),
        ),
        c = V(
          l.filter(function (e) {
            return !U(e) && !u.has(e.aspectRatioType);
          }),
        );
      c != null && s.push(c);
      var d = Math.max(0, B - a.length),
        m = new Set([].concat(r, s.slice(0, d)));
      return e.filter(function (e) {
        return !F.has(e.type) || m.has(e);
      });
    }
    function G(e, t, n) {
      return t.length === 0
        ? e
        : e.withMutations(function (e) {
            for (var r of t) {
              var o,
                a = (o = e.get(r.mediaID)) != null ? o : [],
                i = H($(a, r.variants), n == null ? void 0 : n.get(r.mediaID));
              e.set(r.mediaID, i);
            }
          });
    }
    function z(e) {
      return {
        actionMetadata: "MANUAL",
        aspectRatioType: "ORIGINAL",
        crop: null,
        generatedVideoID: null,
        id: _,
        imageUrl: null,
        initialActionMetadata: "MANUAL",
        initialOptInStatus: o("AdsCreativeMediaSourcingSpecTypes.flow")
          .RelatedMediaOptInStatusSpecType.OPT_IN,
        mediaType: e,
        optInStatus: o("AdsCreativeMediaSourcingSpecTypes.flow")
          .RelatedMediaOptInStatusSpecType.OPT_IN,
        type: "original",
      };
    }
    function j(e, t, n) {
      return {
        actionMetadata: "MANUAL",
        aspectRatioType: n,
        crop: null,
        generatedVideoID: null,
        id: n + ":advertiser_uploaded_variant:" + e,
        imageHash: e,
        imageUrl: t,
        initialActionMetadata: "MANUAL",
        initialOptInStatus: o("AdsCreativeMediaSourcingSpecTypes.flow")
          .RelatedMediaOptInStatusSpecType.OPT_IN,
        mediaType: "image",
        optInStatus: o("AdsCreativeMediaSourcingSpecTypes.flow")
          .RelatedMediaOptInStatusSpecType.OPT_IN,
        type: "advertiser_uploaded_variant",
      };
    }
    function K(e, t) {
      return {
        actionMetadata: "DEFAULT",
        aspectRatioType: t,
        crop: null,
        generatedVideoID: null,
        id: m(t, "smart_crop", e),
        imageUrl: null,
        initialActionMetadata: "MANUAL",
        initialOptInStatus: o("AdsCreativeMediaSourcingSpecTypes.flow")
          .RelatedMediaOptInStatusSpecType.OPT_OUT,
        mediaType: "image",
        optInStatus: o("AdsCreativeMediaSourcingSpecTypes.flow")
          .RelatedMediaOptInStatusSpecType.OPT_OUT,
        type: "smart_crop",
      };
    }
    function Q(e, t) {
      return e + "|" + t;
    }
    function X(e, t) {
      var n = new Map();
      for (var r of e) {
        var a = r[0],
          i = r[1];
        for (var l of i) {
          var s = l.originalMediaID;
          if (!(s == null || s === "")) {
            var u = l.shouldDefaultOn
                ? o("AdsCreativeMediaSourcingSpecTypes.flow")
                    .RelatedMediaOptInStatusSpecType.OPT_IN
                : o("AdsCreativeMediaSourcingSpecTypes.flow")
                    .RelatedMediaOptInStatusSpecType.OPT_OUT,
              c =
                !l.shouldDefaultOn &&
                (t == null ? void 0 : t.has(Q(l.type, a))) === !0
                  ? "STICKY"
                  : "DEFAULT",
              d = {
                actionMetadata: c,
                aspectRatioType: a,
                crop:
                  l.suggestedCrop == null
                    ? null
                    : { box: l.suggestedCrop, source: "suggested" },
                generatedVideoID: l.generatedVideoID,
                id: l.id,
                imageHash: l.imageHash,
                imageUrl: l.imageUrl,
                initialActionMetadata: c,
                initialOptInStatus: u,
                mediaType: l.mediaType,
                optInStatus: u,
                type: l.type,
              },
              m = n.get(s);
            m == null ? n.set(s, [z(l.mediaType), d]) : m.push(d);
          }
        }
      }
      return Array.from(n, function (e) {
        var t = e[0],
          n = e[1];
        return { mediaID: t, variants: n };
      });
    }
    function Y(e, t, n, r, a, i) {
      var l,
        s = (l = e.get(t)) != null ? l : [];
      if (
        !s.some(function (e) {
          return e.id === n;
        })
      ) {
        if (i == null || !g(r) || !C(i)) return e;
        var u = babelHelpers.extends({}, i, {
          actionMetadata: a,
          id: n,
          optInStatus: r,
        });
        return e.set(
          t,
          s.length === 0 ? [z(u.mediaType), u] : [].concat(s, [u]),
        );
      }
      var c = !1,
        d = s.map(function (e) {
          return e.id !== n ||
            (e.optInStatus === r && e.actionMetadata === a) ||
            o("AdsWizardMediaPickerVariantUtils").isOriginalVariantSource(
              e.type,
            )
            ? e
            : ((c = !0),
              babelHelpers.extends({}, e, {
                actionMetadata: a,
                optInStatus: r,
              }));
        });
      return c ? e.set(t, d) : e;
    }
    function J(e, t, n, r) {
      var a = e.get(t);
      if (a == null) return e;
      var i = !1,
        l = a.map(function (e) {
          var t;
          if (e.id !== n) return e;
          var a = (t = e.crop) == null ? void 0 : t.box;
          return a != null && o("AdsUtils").isEqualWeak(a, r)
            ? e
            : ((i = !0),
              babelHelpers.extends({}, e, {
                crop: { box: r, source: "manual" },
              }));
        });
      return i ? e.set(t, l) : e;
    }
    ((l.MSS_SOURCE_BY_VARIANT_TYPE = e),
      (l.DERIVED_VARIANT_MSS_SOURCES = u),
      (l.isVariantOptedIn = g),
      (l.isUnactedVariantOffer = h),
      (l.isCommittedVariant = y),
      (l.isVariantToggleable = C),
      (l.drawsUntouchedMedia = b),
      (l.getToggleableVariants = v),
      (l.hasVariantChangeToCommit = S),
      (l.hasAppliedVariant = R),
      (l.hasEditedVariant = L),
      (l.getAppliedVariantCount = E),
      (l.getMissingRatiosForEndpoint = k),
      (l.getVariantStackMembers = I),
      (l.getVariantMediaID = T),
      (l.getVariantMediaGroupMember = D),
      (l.isHydratableVariantRow = P),
      (l.deriveMultiMediaVariantsFromMSS = N),
      (l.deriveSeedCropVariantsFromMSS = M),
      (l.mergeHydratedVariantEntries = w),
      (l.mergeMultiMediaVariants = G),
      (l.buildAdvertiserVariant = j),
      (l.buildManualCropVariant = K),
      (l.getVariantStickyOffKey = Q),
      (l.buildMergeEntriesFromVariants = X),
      (l.setMultiMediaVariantOptIn = Y),
      (l.setMultiMediaVariantCrop = J));
  },
  98,
);
