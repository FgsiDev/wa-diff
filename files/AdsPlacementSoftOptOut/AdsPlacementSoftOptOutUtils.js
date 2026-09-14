__d(
  "AdsPlacementSoftOptOutUtils",
  [
    "$InternalEnum",
    "AdsAPIAudienceNetworkPosition",
    "AdsAPIFacebookPosition",
    "AdsAPIInstagramPosition",
    "AdsAPIMessengerPosition",
    "AdsAPIObjectives",
    "AdsAPIOculusPosition",
    "AdsAPIThreadsPosition",
    "AdsAPIWhatsAppPosition",
    "AdsInterfacesLogger",
    "AdsPlacementAssetPluginUtils",
    "AdsPlacementDependentPlatformGatingUtils",
    "AdsPlacementExcludeParentPositionModalUtils",
    "AdsPlacementPositionGroupPluginList",
    "AdsPlacementPositionPlugins",
    "AdsPlacementSOOBundleGatingUtils",
    "AdsPlacementUIUtils",
    "AdsPlacementUtils",
    "AdsPlacementsAudienceNetworkPlatformPlugin",
    "GeoIcon.react",
    "IGAdsSensitiveVerticalsUtils",
    "adsPlacementAPISpecReaderIsActivePosition",
    "convertSoftOptOutPlacementsToPositionKeys",
    "convertStringToAdsPlacementPositionPluginKey",
    "enumUtils",
    "getFilteredPositionsWithParentEligibleParentPlacementAndSoftOptOut",
    "gkx",
    "immutable",
    "isDeprecatedAdsPlacementPositionKey",
    "justknobx",
    "meta-brand-audience-network-outline-16",
    "meta-brand-facebook-outline-16",
    "meta-brand-instagram-outline-16",
    "meta-brand-instagram-threads-outline-16",
    "meta-brand-messenger-outline-16",
    "meta-brand-oculus-outline-16",
    "meta-brand-tv-outline-16",
    "meta-brand-whatsapp-outline-16",
    "qex",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = n("$InternalEnum").Mirrored(["DISABLED", "MVP_V2"]);
    function c(e, t) {
      t === void 0 && (t = !0);
      var n = d(e, t);
      return n !== u.DISABLED;
    }
    function d(e, t) {
      if (
        (t === void 0 && (t = !0),
        r("IGAdsSensitiveVerticalsUtils").is_pharma_vertical)
      )
        return u.DISABLED;
      var n = r("justknobx")._("1163"),
        a =
          (w(e) || (M(e) && !n)) &&
          (r("gkx")("13941") || r("qex")._("1594") === !0),
        i = n && M(e) && r("qex")._("3075") === !0;
      if (a || i) return u.MVP_V2;
      var l = !1;
      return (
        N(e) &&
          (o(
            "AdsPlacementSOOBundleGatingUtils",
          ).isSOOObjectiveExpansionGKEnabled() ||
            o("AdsPlacementSOOBundleGatingUtils").isGrowthObjectivesQEEnabled(
              t,
            )) &&
          (l = !0),
        l ? u.MVP_V2 : u.DISABLED
      );
    }
    function m(e, t, n, a, i) {
      var l =
          d(e, !1) === u.MVP_V2 &&
          o(
            "AdsPlacementSOOBundleGatingUtils",
          ).isCampaignGroupObjectiveEligible(e, !1) &&
          (t > 0 || r("gkx")("7131") === !0),
        s = l && (n || a);
      return i === !0 ? s : l;
    }
    function p(e, t, n, r, a) {
      return d(e, !1) !== u.MVP_V2 ||
        !o("AdsPlacementSOOBundleGatingUtils").isCampaignGroupObjectiveEligible(
          e,
          !1,
        ) ||
        t === 0 ||
        r
        ? !1
        : n
          ? !a
          : !0;
    }
    function _(e) {
      return e === "audience_network"
        ? s.jsx(r("GeoIcon.react"), {
            icon: o("meta-brand-audience-network-outline-16")
              .metaBrandAudienceNetworkAppAudienceNetworkOutline16,
          })
        : e === "facebook"
          ? s.jsx(r("GeoIcon.react"), {
              icon: o("meta-brand-facebook-outline-16")
                .metaBrandFacebookAppFacebookCircleOutline16,
            })
          : e === "instagram"
            ? s.jsx(r("GeoIcon.react"), {
                icon: o("meta-brand-instagram-outline-16")
                  .metaBrandInstagramAppInstagramOutline16,
              })
            : e === "messenger"
              ? s.jsx(r("GeoIcon.react"), {
                  icon: o("meta-brand-messenger-outline-16")
                    .metaBrandMessengerAppMessengerOutline16,
                })
              : e === "oculus"
                ? s.jsx(r("GeoIcon.react"), {
                    icon: o("meta-brand-oculus-outline-16")
                      .metaBrandOculusAppOculusOutline16,
                  })
                : e === "streaming_services"
                  ? s.jsx(r("GeoIcon.react"), {
                      icon: o("meta-brand-tv-outline-16").metaBrandTvOutline16,
                    })
                  : e === "threads"
                    ? s.jsx(r("GeoIcon.react"), {
                        icon: o("meta-brand-instagram-threads-outline-16")
                          .metaBrandInstagramThreadsAppThreadsOutline16,
                      })
                    : e === "whatsapp"
                      ? s.jsx(r("GeoIcon.react"), {
                          icon: o("meta-brand-whatsapp-outline-16")
                            .metaBrandWhatsappAppWhatsappOutline16,
                        })
                      : (function () {
                          throw Error(
                            "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                              e,
                          );
                        })();
    }
    function f(e, t, n) {
      n != null &&
        n.forEach(function (n) {
          var o = t + "/" + n,
            a = r("convertStringToAdsPlacementPositionPluginKey")(o);
          a != null
            ? e.add(a)
            : r("isDeprecatedAdsPlacementPositionKey")(o) ||
              r("AdsInterfacesLogger").log({
                eventName: "placement_soft_opt_out_key_conversion_error",
                eventCategory: "errors",
                data: { message: o },
              });
        });
    }
    function g(e) {
      var t = [],
        n = [],
        r = [],
        o = [],
        a = [],
        i = [],
        l = [];
      return (
        e.forEach(function (e) {
          var s = e.split("/"),
            u = s[0],
            c = s[1];
          switch (u) {
            case "audience_network": {
              var d = C(e);
              d != null && t.push(d);
              break;
            }
            case "facebook": {
              var m = h(c);
              m != null && n.push(m);
              break;
            }
            case "instagram": {
              var p = y(c);
              p != null && r.push(p);
              break;
            }
            case "messenger": {
              var _ = b(c);
              _ != null && o.push(_);
              break;
            }
            case "oculus": {
              var f = S(c);
              f != null && a.push(f);
              break;
            }
            case "threads": {
              var g = R(c);
              g != null && i.push(g);
              break;
            }
            case "whatsapp": {
              var L = v(c);
              L != null && l.push(L);
              break;
            }
            default:
              break;
          }
        }),
        {
          audience_network_positions: t,
          facebook_positions: n,
          instagram_positions: r,
          messenger_positions: o,
          oculus_positions: a,
          threads_positions: i,
          whatsapp_positions: l,
        }
      );
    }
    function h(e) {
      if (e === "stories") return "story";
      if (e === "fb_reels") return "facebook_reels";
      if (e === "reels_overlay") return "facebook_reels_overlay";
      if (e === "right_column") return "right_hand_column";
      if (e === "group_tab") return "groups_feed";
      var t = Object.keys(r("AdsAPIFacebookPosition")).find(function (t) {
        return r("AdsAPIFacebookPosition")[t] === e;
      });
      return t == null ? null : r("AdsAPIFacebookPosition")[t];
    }
    function y(e) {
      if (e === "search") return "ig_search";
      if (e === "shop_tab") return "shop";
      var t = Object.keys(r("AdsAPIInstagramPosition")).find(function (t) {
        return r("AdsAPIInstagramPosition")[t] === e;
      });
      return t == null ? null : r("AdsAPIInstagramPosition")[t];
    }
    function C(e) {
      var t = r("AdsPlacementsAudienceNetworkPlatformPlugin").positions,
        n = t.find(function (t) {
          return t.key === e;
        });
      return n != null
        ? o("enumUtils").coerce(
            n.apiPosition,
            r("AdsAPIAudienceNetworkPosition"),
          )
        : null;
    }
    function b(e) {
      if (e === "inbox") return "messenger_home";
      var t = Object.keys(r("AdsAPIMessengerPosition")).find(function (t) {
        return r("AdsAPIMessengerPosition")[t] === e;
      });
      return t == null ? null : r("AdsAPIMessengerPosition")[t];
    }
    function v(e) {
      var t = Object.keys(r("AdsAPIWhatsAppPosition")).find(function (t) {
        return r("AdsAPIWhatsAppPosition")[t] === e;
      });
      return t == null ? null : r("AdsAPIWhatsAppPosition")[t];
    }
    function S(e) {
      if (e === "rewarded_video") return "vr_rewarded_video";
      var t = Object.keys(r("AdsAPIOculusPosition")).find(function (t) {
        return r("AdsAPIOculusPosition")[t] === e;
      });
      return t == null ? null : r("AdsAPIOculusPosition")[t];
    }
    function R(e) {
      if (e === "stream") return "threads_stream";
      var t = Object.keys(r("AdsAPIThreadsPosition")).find(function (t) {
        return r("AdsAPIThreadsPosition")[t] === e;
      });
      return t == null ? null : r("AdsAPIThreadsPosition")[t];
    }
    function L(e) {
      return new Set(
        Array.from(e).map(function (e) {
          return o(
            "AdsPlacementAssetPluginUtils",
          ).getPlatformKeyFromPositionKey(e);
        }),
      );
    }
    function E(e, t) {
      var n, r;
      return Array.from(
        (n =
          (r = e.get(t)) == null || (r = r.positions) == null
            ? void 0
            : r.entries()) != null
          ? n
          : [],
      )
        .filter(function (e) {
          var t = e[0],
            n = e[1];
          return n.isEligible;
        })
        .map(function (e) {
          var t = e[0],
            n = e[1];
          return t;
        });
    }
    function k(e, t, n, r) {
      var o,
        a = [],
        i = r != null ? r : new Set();
      if (i.has(e)) return a;
      i.add(e);
      var l = (o = t.get(e)) != null ? o : [];
      return (
        l.forEach(function (e) {
          i.has(e) ||
            (a.push(e), n.includes(e) && a.push.apply(a, k(e, t, n, i)));
        }),
        a
      );
    }
    function I(e, t, n, a, i, l, s, u, c, d, m, p) {
      if (
        !(m === !0 && p === !1) &&
        !d &&
        !(
          r("IGAdsSensitiveVerticalsUtils").is_pharma_or_sensitive_vertical ||
          r("IGAdsSensitiveVerticalsUtils").is_luxury_vertical
        )
      ) {
        var _ = r("convertSoftOptOutPlacementsToPositionKeys")(c),
          f = new Set(_);
        if (n != null) {
          var h =
            r("AdsPlacementUtils").castStringToAdsPlacementPositionPluginKey(e);
          if (h == null) return;
          t === o("AdsPlacementUIUtils").CHECKBOX_STATES.UNCHECKED
            ? (f.add(h),
              l &&
                l(function (e) {
                  var t = babelHelpers.extends({}, e);
                  return ((t[h] = !0), t);
                }))
            : (f.delete(h),
              l &&
                l(function (e) {
                  var t = babelHelpers.extends({}, e);
                  return (delete t[h], t);
                }));
        } else {
          var y =
            r(
              "AdsPlacementUtils",
            ).castStringToAdsPlacementPositionGroupPluginKey(e);
          if (y == null) return;
          var C = o("AdsPlacementPositionGroupPluginList")
              .getEligiblePositionKeysFromPositionGroup(y, s)
              .keys(),
            b = Array.from(C);
          if (
            o(
              "AdsPlacementSOOBundleGatingUtils",
            ).isAccountEligibleForSOOExpansionBundle(s.objective)
          ) {
            var v = b.map(function (e) {
              return r("AdsPlacementPositionPlugins").get(e);
            });
            b = Array.from(
              o(
                "getFilteredPositionsWithParentEligibleParentPlacementAndSoftOptOut",
              )
                .getFilteredPositionsWithParentEligibleParentPlacementAndSoftOptOut(
                  r("immutable").OrderedSet(v),
                  s,
                )
                .map(function (e) {
                  return e.key;
                }),
            );
          }
          t === o("AdsPlacementUIUtils").CHECKBOX_STATES.UNCHECKED
            ? (b.forEach(function (e) {
                f.add(e);
              }),
              l &&
                l(function (e) {
                  var t = babelHelpers.extends({}, e);
                  if (
                    (b.forEach(function (e) {
                      t[e] = !0;
                    }),
                    o(
                      "AdsPlacementSOOBundleGatingUtils",
                    ).isAccountEligibleForSOOExpansionBundle(s.objective))
                  ) {
                    var n = V(t, s);
                    return n;
                  }
                  return t;
                }))
            : t === o("AdsPlacementUIUtils").CHECKBOX_STATES.CHECKED &&
              (b.forEach(function (e) {
                f.delete(e);
              }),
              l &&
                l(function (e) {
                  var t = babelHelpers.extends({}, e);
                  if (
                    (b.forEach(function (e) {
                      delete t[e];
                    }),
                    o(
                      "AdsPlacementSOOBundleGatingUtils",
                    ).isAccountEligibleForSOOExpansionBundle(s.objective))
                  ) {
                    var n = V(t, s);
                    return n;
                  }
                  return t;
                }));
        }
        var S = g(f);
        (i && i(S), u && u(S));
      }
    }
    function T(e, t, n, a, i, l, s, u, c, d) {
      if (
        !(c === !0 && d === !1) &&
        !u &&
        !(
          r("IGAdsSensitiveVerticalsUtils").is_pharma_or_sensitive_vertical ||
          r("IGAdsSensitiveVerticalsUtils").is_luxury_vertical
        )
      ) {
        var m = E(i, s),
          p = r("convertSoftOptOutPlacementsToPositionKeys")(l),
          _ = new Set(p);
        e === o("AdsPlacementUIUtils").CHECKBOX_STATES.UNCHECKED
          ? (m.forEach(function (e) {
              _.add(e);
            }),
            n &&
              n(function (e) {
                var t = babelHelpers.extends({}, e);
                return (
                  m.forEach(function (e) {
                    t[e] = !0;
                  }),
                  t
                );
              }))
          : e === o("AdsPlacementUIUtils").CHECKBOX_STATES.CHECKED &&
            (m.forEach(function (e) {
              _.delete(e);
            }),
            n &&
              n(function (e) {
                var t = babelHelpers.extends({}, e);
                return (
                  m.forEach(function (e) {
                    delete t[e];
                  }),
                  t
                );
              }));
        var f = g(_);
        (t && t(f), a && a(f));
      }
    }
    function D(e) {
      return e == null
        ? !0
        : Object.values(e).every(function (e) {
            return e == null || e.length === 0;
          });
    }
    function x(e) {
      return e.length === 0
        ? !0
        : e.every(function (e) {
            return D(e);
          });
    }
    function $(e) {
      return e == null
        ? 0
        : Object.values(e).reduce(function (e, t) {
            return e + (Array.isArray(t) ? t.length : 0);
          }, 0);
    }
    function P(e, t) {
      if (!e || !t) return !1;
      var n = r("convertSoftOptOutPlacementsToPositionKeys")(t);
      return Array.from(e.keys()).some(function (e) {
        return n.has(e);
      });
    }
    function N(e) {
      if (e == null) return !1;
      var t = [
        r("AdsAPIObjectives").OUTCOME_TRAFFIC,
        r("AdsAPIObjectives").LINK_CLICKS,
        r("AdsAPIObjectives").OUTCOME_ENGAGEMENT,
        r("AdsAPIObjectives").POST_ENGAGEMENT,
        r("AdsAPIObjectives").PAGE_LIKES,
        r("AdsAPIObjectives").VIDEO_VIEWS,
        r("AdsAPIObjectives").EVENT_RESPONSES,
        r("AdsAPIObjectives").OUTCOME_ACQUISITION,
        r("AdsAPIObjectives").APP_INSTALLS,
        r("AdsAPIObjectives").MOBILE_APP_INSTALLS,
        r("AdsAPIObjectives").MOBILE_APP_ENGAGEMENT,
      ];
      return t.includes(e);
    }
    function M(e) {
      if (e == null) return !1;
      var t = [
        r("AdsAPIObjectives").LEAD_GENERATION,
        r("AdsAPIObjectives").OUTCOME_LEADS,
      ];
      return t.includes(e);
    }
    function w(e) {
      if (e == null) return !1;
      var t = [
        r("AdsAPIObjectives").OUTCOME_SALES,
        r("AdsAPIObjectives").PRODUCT_CATALOG_SALES,
        r("AdsAPIObjectives").WEBSITE_CONVERSIONS,
      ];
      return t.includes(e);
    }
    function A(e) {
      var t = [];
      return (
        e.forEach(function (e) {
          var n = r("convertSoftOptOutPlacementsToPositionKeys")(e);
          n.forEach(function (e) {
            var n = r("AdsPlacementPositionPlugins").get(e);
            if (n != null) {
              var o = n.childPlacements;
              o != null && o.size > 0 && t.push(e);
            }
          });
        }),
        r("immutable").OrderedSet(t)
      );
    }
    function F(e, t, n) {
      var r = e.parentPlacements;
      return r == null || r.size === 0
        ? !1
        : r.some(function (r) {
            return (
              !o(
                "AdsPlacementDependentPlatformGatingUtils",
              ).shouldSkipPlacementParentDependency(e.key, r, n) &&
              t[r] != null &&
              t[r] === !1
            );
          });
    }
    function O(e) {
      return r("immutable").OrderedSet(
        e
          .flatMap(function (e) {
            return Array.from(
              r("convertSoftOptOutPlacementsToPositionKeys")(e),
            );
          })
          .map(function (e) {
            return r("AdsPlacementPositionPlugins").get(e);
          })
          .filter(Boolean),
      );
    }
    function B(e, t, n, a) {
      var i,
        l,
        s = !1,
        u = r("immutable").OrderedSet(),
        c = r("immutable").OrderedSet();
      if (
        ((i = e == null || (l = e.childPlacements) == null ? void 0 : l.size) !=
        null
          ? i
          : 0) > 0
      ) {
        var d = o(
          "AdsPlacementExcludeParentPositionModalUtils",
        ).getParentPlacementDataForModalContent(t, e.key, O(n));
        ((c = d.childPlacementsPlugin),
          !a && c.size > 0 && ((u = c), (s = !0)));
      }
      return {
        shouldShowChildPlacementsDescription: s,
        childPlacements: u,
        childPlacementsPlugin: c,
      };
    }
    function W(e, t, n, o) {
      var a, i;
      return ((a =
        e == null || (i = e.childPlacements) == null ? void 0 : i.size) != null
        ? a
        : 0) === 0
        ? {
            shouldShowChildPlacementsDescription: !1,
            childPlacements: r("immutable").OrderedSet(),
            childPlacementsPlugin: r("immutable").OrderedSet(),
          }
        : B(e, t, n, o);
    }
    function q(e, t, n, r, a) {
      var i = e.parentPlacements,
        l =
          i == null
            ? void 0
            : i.find(function (n) {
                return (
                  !o(
                    "AdsPlacementDependentPlatformGatingUtils",
                  ).shouldSkipPlacementParentDependency(e.key, n, a) &&
                  t[n] === !1
                );
              });
      return l != null || F(e, n, a) || r;
    }
    function U(e, t, n) {
      var a = r("AdsPlacementPositionPlugins").get(e);
      if (a == null) return !1;
      var i = o(
        "AdsPlacementExcludeParentPositionModalUtils",
      ).getFirstParentPlacementPlugin(a, n);
      if (i == null) return !0;
      var l = F(a, t, n);
      return !l;
    }
    function V(e, t) {
      var n = t == null ? void 0 : t.softOptOutSpec,
        o = r("convertSoftOptOutPlacementsToPositionKeys")(n),
        a = {};
      return (
        Object.keys(e).forEach(function (n) {
          var i =
            r("AdsPlacementUtils").castStringToAdsPlacementPositionPluginKey(n);
          if (i != null) {
            var l = r("AdsPlacementPositionPlugins").get(i);
            if (l != null) {
              var s = e[i],
                u = r("adsPlacementAPISpecReaderIsActivePosition")(
                  t.spec,
                  l.platformKey,
                  l.apiPosition,
                );
              !u && !o.has(i) ? delete a[i] : (a[i] = s);
            }
          }
        }),
        a
      );
    }
    function H(e) {
      return (
        e === void 0 && (e = !0),
        e ? r("qex")._("3309") === !0 : r("qex")._("5381") === !0
      );
    }
    function G(e) {
      return (
        e === void 0 && (e = !0),
        e ? r("qex")._("5383") === !0 : r("qex")._("5382") === !0
      );
    }
    function z(e, t) {
      return (
        t === void 0 && (t = !0),
        !w(e) && !M(e) ? !1 : H(t) || r("gkx")("11600")
      );
    }
    function j(e) {
      return (e === void 0 && (e = !0), G(e) || r("gkx")("11600"));
    }
    ((l.getFirstParentPlacementPlugin = o(
      "AdsPlacementExcludeParentPositionModalUtils",
    ).getFirstParentPlacementPlugin),
      (l.SoftOptOutVersion = u),
      (l.isAccountPassingGKForSoftOptOut = c),
      (l.getSoftOptOutVersion = d),
      (l.isCampaignGroupObjectiveEligible = o(
        "AdsPlacementSOOBundleGatingUtils",
      ).isCampaignGroupObjectiveEligible),
      (l.shouldShowPlacementFlexSection = m),
      (l.shouldShowPlacementFlexSectionOutsideProgressiveDisclosure = p),
      (l.getIconFromPlacementPlatform = _),
      (l.convertSoftOptOutPlacementsToPositionKeys = r(
        "convertSoftOptOutPlacementsToPositionKeys",
      )),
      (l.addPositions = f),
      (l.convertPositionKeysToSoftOptOutPlacements = g),
      (l.getPlatformKeysFromPositionKeys = L),
      (l.getAllEligiblePlacementPositionsForPlatform = E),
      (l.getAllChildrenRecursively = k),
      (l.handlePlacementChangeWithoutPlatform = I),
      (l.handlePlatformChangeV2ForSoftOptOut = T),
      (l.isAllSoftOptOutPlacementsEmpty = D),
      (l.isSoftOptOutEmpty = x),
      (l.getSoftOptOutTotalPositionCount = $),
      (l.hasAnyPositionsFromGroupingSpecInSoftOptOut = P),
      (l.isGrowthObjective = N),
      (l.isLeadGenObjective = M),
      (l.isSalesObjective = w),
      (l.getParentPlacementsFromSoftOptOut = A),
      (l.hasParentPlacementWithFalseValue = F),
      (l.convertSoftOptOutPlacementsToPositionPlugins = O),
      (l.getChildPlacementsDataForModal = B),
      (l.getChildPlacementsDataWithDefaults = W),
      (l.getSOOPlacementToggleIsDisabled = q),
      (l.getLocalStateSOOParentPlacementOffWithoutChildPlacement = U),
      (l.filterPositionStatesBySoftOptOut = V),
      (l.isEligibleForSOOGuidance = z),
      (l.isEligibleForSOODUWithoutObjective = j));
  },
  98,
);
