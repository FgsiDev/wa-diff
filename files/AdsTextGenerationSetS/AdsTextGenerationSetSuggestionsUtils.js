__d(
  "AdsTextGenerationSetSuggestionsUtils",
  [
    "AdsAdgroupRecordAccessors",
    "AdsAssetFeedFieldUtils",
    "AdsAssetFeedMutationUtils",
    "AdsAssetFeedUtils",
    "AdsChildAttachmentsUtils",
    "AdsContextualDiscoveryAdsUtils",
    "AdsCreativeFlexAssetUtils",
    "AdsDCODegreesOfFreedomUtils",
    "AdsDynamicAdsUtils",
    "AdsMutators",
    "AdsPlacementAssetTargetingRuleUtils",
    "AdsTextGenerationGetSourceUtils",
    "AdsTextGenerationLoggingUtils",
    "AdsTextGenerationReducerUtils",
    "AdsTextGenerationTypes",
    "AdsUEditorAdgroupAssetFeedMutators",
    "AdsUEditorAdgroupBodyMutators",
    "AdsUEditorAdgroupHeadlineMutators",
    "AdsUEditorAdgroupMultiMediaSpecMutators",
    "AdsUnifiedCreativeAPIFields",
    "adsAssetFeedSpecRemoveAssetFieldAtIndex",
    "adsConvertAdObjectRecordToPlainJS",
    "adsPlacementAssetMutationConvertToPACSpecForAdditionalCustomizations",
    "immutable",
    "justknobx",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 5,
      s = ["bodies", "optimization_type"];
    function u(e, t) {
      var n,
        a = r("adsConvertAdObjectRecordToPlainJS")(t),
        i = (n = a.creative) == null ? void 0 : n.asset_feed_spec;
      if (i == null) return e;
      var l = new Set(Object.keys(i)),
        u =
          l.size === s.length &&
          s.every(function (e) {
            return l.has(e);
          });
      return u
        ? o("AdsMutators").chain(
            r("AdsAdgroupRecordAccessors").creative.asset_feed_spec.delete,
          )(e)
        : o("AdsMutators").chain(
            r("AdsAdgroupRecordAccessors").creative.asset_feed_spec.bodies
              .delete,
            r("AdsAdgroupRecordAccessors").creative.asset_feed_spec
              .optimization_type.delete,
          )(e);
    }
    function c(e) {
      return d(e.field);
    }
    function d(e) {
      switch (e) {
        case "bodies":
          return r("AdsUnifiedCreativeAPIFields").message;
        case "titles":
          return r("AdsUnifiedCreativeAPIFields").headline;
      }
      return null;
    }
    function m(e, t, n, r, a) {
      var i = e;
      return (
        a.forEach(function (e) {
          var a = e.assetField,
            l = e.value;
          i = o("AdsAssetFeedMutationUtils").setAssetFieldAtIndex(
            i,
            t,
            n,
            r,
            a,
            l,
          );
        }),
        i
      );
    }
    function p(e, t, n) {
      var a,
        i = e,
        l = c(n);
      if (l == null || n.index == null) return i;
      var s = n.index,
        u = "MANUAL_ADD";
      n.status ===
      o("AdsTextGenerationTypes").TextGenSuggestionStatus.DEFAULT_ADDED
        ? (u = "DEFAULT_ADD")
        : n.status ===
            o("AdsTextGenerationTypes").TextGenSuggestionStatus.STICKY_ADDED &&
          (u = "STICKY_ADD");
      var d = [
        { assetField: "text", value: (a = n.editedText) != null ? a : n.text },
        {
          assetField: "asset_source",
          value: o("AdsTextGenerationReducerUtils").getAssetSourceForSuggestion(
            n,
            !1,
          ),
        },
        { assetField: "uuid", value: n.id },
      ];
      (r("justknobx")._("1921") ||
        d.push(
          { assetField: "text_gen_original_text", value: n.text },
          { assetField: "text_gen_input_text", value: n.input },
        ),
        d.push({ assetField: "action_type", value: u }),
        (i = m(i, t, l, s, d)));
      var p = [];
      return (
        n.language != null &&
          p.push({ assetField: "language", value: n.language }),
        n.persona != null &&
          p.push({ assetField: "target_audience", value: n.persona.name }),
        p.length > 0 && (i = m(i, t, l, s, p)),
        i
      );
    }
    function _(e, t) {
      return o("AdsCreativeFlexAssetUtils").hasMultiMediaAssetsOfSource(
        e,
        "multi_media",
      )
        ? o(
            "AdsUEditorAdgroupMultiMediaSpecMutators",
          ).getSuggestionIndexFromMSS(e, t)
        : y(e, t);
    }
    function f(e, t) {
      return g(e, t.field);
    }
    function g(e, t) {
      var n, r;
      switch (t) {
        case "bodies":
          return (n = e.creative) == null || (n = n.asset_feed_spec) == null
            ? void 0
            : n.bodies;
        case "titles":
          return (r = e.creative) == null || (r = r.asset_feed_spec) == null
            ? void 0
            : r.titles;
      }
      return null;
    }
    function h(e, t) {
      var n = f(e, t);
      if (t.field === "bodies" || t.field === "titles") {
        var a,
          i,
          l = t.field === "bodies",
          s = o(
            "AdsPlacementAssetTargetingRuleUtils",
          ).getDefaultTargetRuleLabel(e, l ? "body_label" : "title_label"),
          u = o(
            "AdsPlacementAssetTargetingRuleUtils",
          ).getAllLabelNamesFromAdgroup(e, l),
          c = l
            ? (a = o("AdsUEditorAdgroupBodyMutators").getBodyAssetsFromLabel(
                e,
                s,
              )) != null
              ? a
              : r("immutable").List()
            : (i = o(
                  "AdsUEditorAdgroupHeadlineMutators",
                ).getHeadlineAssetsFromLabel(e, s)) != null
              ? i
              : r("immutable").List(),
          d = n != null ? n : r("immutable").List(),
          m = o("AdsAssetFeedFieldUtils").findTargetAssetsIndex(d, c);
        return {
          defaultAssetIndexes: m,
          defaultAssets: c,
          defaultLabel: s,
          allLabels: u,
        };
      }
    }
    function y(e, t) {
      return C(e, t.field, t.id, t.text);
    }
    function C(e, t, n, r) {
      var o = g(e, t);
      if (o == null) return null;
      var a = o.findIndex(function (e) {
        return e != null && (e.get("uuid") === n || e.get("text") === r);
      });
      return a >= 0 ? a : null;
    }
    function b(e, t) {
      var n = y(e, t);
      if (n != null) return n;
      var r = f(e, t);
      return r == null ? -1 : r.size;
    }
    function v(e, t, n) {
      var r = e;
      if (
        (!o("AdsAssetFeedUtils").isFormatAutomationAdgroupFromRecord(r) &&
          !o("AdsAssetFeedUtils").isRegularDCOAdgroupFromRecord(r) &&
          (r = o(
            "AdsUEditorAdgroupAssetFeedMutators",
          ).convertToDOFAssetFeedSpec(
            r,
            o("AdsAssetFeedUtils").isDofWithImageAdgroupFromRecord(r),
          )),
        (t.index = b(r, t)),
        t.index === -1)
      ) {
        var a = c(t);
        if (a == null) return r;
        var i = [
          { assetField: "text", value: t.field === "bodies" ? t.input : "" },
        ];
        (t.field === "titles" &&
          i.push({
            assetField: "asset_source",
            value: "TEXT_FIRST_MANUAL_OPTION",
          }),
          (r = m(r, n, a, 0, i)),
          (t.index = 1));
      }
      return p(r, n, t);
    }
    function S(e, t, n, a) {
      var i = r(
          "adsPlacementAssetMutationConvertToPACSpecForAdditionalCustomizations",
        )(t, a, e),
        l = h(i, n);
      if (l == null) return i;
      var s = l.allLabels,
        u = l.defaultAssetIndexes,
        d = l.defaultAssets,
        m = l.defaultLabel,
        _ = y(i, n);
      if (_ != null) n.index = _;
      else {
        n.index = d.size > 0 ? u.last() + 1 : 0;
        var f = c(n);
        if (f == null) return i;
        ((i = o("AdsAssetFeedMutationUtils").insertAssetFieldAtIndex(
          i,
          a,
          f,
          r("nullthrows")(n.index),
          "text",
        )),
          s
            ? (i = o("AdsAssetFeedMutationUtils").setAssetAllAdLabelsAtIndex(
                i,
                a,
                f,
                r("nullthrows")(n.index),
                s,
              ))
            : (i = o("AdsAssetFeedMutationUtils").setAssetAdLabelAtIndex(
                i,
                a,
                f,
                r("nullthrows")(n.index),
                m,
              )));
      }
      return ((i = p(i, a, n)), i);
    }
    function R(e, t, n) {
      var r = o("AdsTextGenerationReducerUtils").getUpdatedSuggestion(t);
      if (
        o("AdsCreativeFlexAssetUtils").hasMultiMediaAssetsOfSource(
          e,
          "multi_media",
        )
      )
        return o(
          "AdsUEditorAdgroupMultiMediaSpecMutators",
        ).removeFromMediaSourcingSpec(e, r);
      var a = y(e, r);
      return a == null ? e : L(e, t.originalSuggestion.field, a, n);
    }
    function L(e, t, n, a) {
      var i = o("AdsAssetFeedMutationUtils").removeAssetAtIndex(
        e,
        r("nullthrows")(a.get(e.id)),
        r("nullthrows")(d(t)),
        n,
      );
      if (t === "titles") {
        var l,
          s =
            (l = i.creative) == null || (l = l.asset_feed_spec) == null
              ? void 0
              : l.titles;
        if (s != null && s.size === 1) {
          var c = s.first();
          if (
            c.get("text") === "" &&
            c.get("asset_source") === "TEXT_FIRST_MANUAL_OPTION"
          ) {
            var m,
              p =
                (m = i.creative) == null || (m = m.asset_feed_spec) == null
                  ? void 0
                  : m.optimization_type;
            p === "PLACEMENT"
              ? (i = o(
                  "adsAssetFeedSpecRemoveAssetFieldAtIndex",
                ).adsAssetFeedSpecRemoveAssetFieldAtIndex(
                  i,
                  "titles",
                  0,
                  "asset_source",
                ))
              : (i = o("AdsAssetFeedMutationUtils").removeAssetAtIndex(
                  i,
                  r("nullthrows")(a.get(i.id)),
                  r("AdsUnifiedCreativeAPIFields").headline,
                  0,
                ));
          }
        }
      }
      return (
        o("AdsDCODegreesOfFreedomUtils").isDOFAdgroupWithUniqueDOFAssets(i) &&
          (o("AdsDynamicAdsUtils").isDynamicAd(i)
            ? (i = u(i, e))
            : (i = o(
                "AdsUEditorAdgroupAssetFeedMutators",
              ).convertFromDOFAssetFeedSpec(
                i,
                o("AdsAssetFeedUtils").isDofWithImageAdgroupFromRecord(i),
              ))),
        i
      );
    }
    function E(e, t, n, a) {
      var i = e;
      return (
        o("AdsCreativeFlexAssetUtils").hasMultiMediaAssetsOfSource(
          i,
          "multi_media",
        )
          ? (i = o(
              "AdsUEditorAdgroupMultiMediaSpecMutators",
            ).setMediaSourcingSpecTextGenFields(
              i,
              o("AdsTextGenerationReducerUtils").getUpdatedSuggestion(n),
            ))
          : o("AdsAssetFeedUtils").isPACAdgroupFromRecord(i)
            ? (i = S(
                t,
                i,
                o("AdsTextGenerationReducerUtils").getUpdatedSuggestion(n),
                r("nullthrows")(a.get(i.id)),
              ))
            : (i = v(
                i,
                o("AdsTextGenerationReducerUtils").getUpdatedSuggestion(n),
                r("nullthrows")(a.get(i.id)),
              )),
        i
      );
    }
    function k(e) {
      var t = e.get("asset_source");
      return typeof t == "string" ? t.startsWith("TEXT_GEN") : !1;
    }
    function I(e) {
      return (
        e.newStatus ===
          o("AdsTextGenerationTypes").TextGenSuggestionStatus.DEFAULT_ADDED ||
        e.newStatus ===
          o("AdsTextGenerationTypes").TextGenSuggestionStatus.STICKY_ADDED
      );
    }
    function T(e) {
      var t = e.get("action_type");
      return typeof t == "string"
        ? t === "DEFAULT_ADD" || t === "STICKY_ADD"
        : !1;
    }
    function D(t, n) {
      if (
        o("AdsCreativeFlexAssetUtils").hasMultiMediaAssetsOfSource(
          t,
          "multi_media",
        )
      ) {
        var r = o(
          "AdsUEditorAdgroupMultiMediaSpecMutators",
        ).getTextGenSuggestionsFromMSS(t, n.originalSuggestion.field);
        return r.length >= e;
      }
      var a = f(t, n.originalSuggestion);
      return a == null
        ? !1
        : a.filter(function (e) {
            return k(e);
          }).size >= e;
    }
    function x(e) {
      if (e.length === 0) return null;
      var t = new Set(
        e
          .filter(function (e) {
            return I(e);
          })
          .map(function (e) {
            var t;
            return (t = e.originalSuggestion) == null ? void 0 : t.source;
          }),
      );
      return t;
    }
    function $(e) {
      var t,
        n = new Set(
          e == null ||
            (t = e.filter(function (e) {
              return k(e) && T(e);
            })) == null
            ? void 0
            : t.map(function (e) {
                return o(
                  "AdsTextGenerationGetSourceUtils",
                ).getCreativeTextSourceFromAssetSourceSuggestion(
                  String(e.get("asset_source")).toString(),
                );
              }),
        );
      return n;
    }
    function P(e, t) {
      var n,
        r,
        a = o("AdsContextualDiscoveryAdsUtils").isDuplicateFlow(e),
        i = g(e, "bodies"),
        l = (n = $(i)) != null ? n : new Set(),
        s = (r = x(t)) != null ? r : new Set(),
        u = {
          adgroupID: e.id,
          isDuplicateFlow: a,
          suggestionSourcesInExistingSuggestions: Array.from(l).join(","),
          suggestionSourcesInNewSuggestions: Array.from(s).join(","),
          newSuggestions:
            t == null
              ? void 0
              : t.map(function (e) {
                  return {
                    newStatus: e.newStatus,
                    originalStatus: e.originalSuggestion.status,
                    source: e.originalSuggestion.source,
                  };
                }),
          existingSuggestions:
            i == null
              ? void 0
              : i.map(function (e) {
                  return {
                    source: e.get("asset_source"),
                    originalStatus: e.get("action_type"),
                  };
                }),
        };
      if (l.size === 0 || s.size === 0)
        return (
          o("AdsTextGenerationLoggingUtils").logTextGenEvent(
            o("AdsTextGenerationLoggingUtils").TextGenLogEvent
              .TEXTGEN_AUTO_REFRESH_VARIATIONS,
            babelHelpers.extends({}, u, {
              shouldRemoveExistingSuggestions: !1,
              eventSource: o("AdsTextGenerationLoggingUtils")
                .TextSuggestionsCallSite.REFRESH_FROM_ACCORDION_VISIBLE,
            }),
          ),
          !1
        );
      var c = function (t, n) {
          return (
            t.size === n.size &&
            Array.from(n).every(function (e) {
              return t.has(e);
            })
          );
        },
        d = !c(l, s);
      return (
        o("AdsTextGenerationLoggingUtils").logTextGenEvent(
          o("AdsTextGenerationLoggingUtils").TextGenLogEvent
            .TEXTGEN_AUTO_REFRESH_VARIATIONS,
          babelHelpers.extends({}, u, {
            shouldRemoveExistingSuggestions: d,
            eventSource: o("AdsTextGenerationLoggingUtils")
              .TextSuggestionsCallSite.REFRESH_FROM_ACCORDION_VISIBLE,
          }),
        ),
        d
      );
    }
    function N(e, t, n, r, a) {
      var i = e,
        l =
          o("AdsChildAttachmentsUtils").isCarouselAd(e) &&
          !o("AdsDynamicAdsUtils").isDynamicAd(e);
      (((a ===
        o("AdsTextGenerationLoggingUtils").TextSuggestionsCallSite
          .REFRESH_FROM_ACCORDION_VISIBLE &&
        P(i, n)) ||
        a ===
          o("AdsTextGenerationLoggingUtils").TextSuggestionsCallSite
            .PRIMARY_TEXT_EDITED) &&
        (i = F(i, "bodies", !0, r)),
        n.forEach(function (e) {
          var t,
            n = (t = e.originalSuggestion.persona) == null ? void 0 : t.name;
          if (!(n == null || n !== "More to consider")) {
            var o = g(i, e.originalSuggestion.field);
            o != null &&
              o.forEach(function (t, o) {
                var a = t.get("target_audience"),
                  l = t.get("action_type");
                if (a === n) {
                  var s = l === "MANUAL_ADD";
                  s || (i = L(i, e.originalSuggestion.field, o, r));
                }
              });
          }
        }),
        n.map(function (e) {
          var n =
            e.originalSuggestion.field === "titles" ||
            e.originalSuggestion.field === "bodies";
          if (
            !(
              l &&
              n &&
              e.newStatus !==
                o("AdsTextGenerationTypes").TextGenSuggestionStatus.REMOVED
            )
          )
            if (
              e.newStatus ===
              o("AdsTextGenerationTypes").TextGenSuggestionStatus.REMOVED
            )
              i = R(i, e, r);
            else {
              var s,
                u = (s = e.newStatus) != null ? s : e.originalSuggestion.status,
                c =
                  a !==
                  o("AdsTextGenerationLoggingUtils").TextSuggestionsCallSite
                    .REFRESH_FROM_ACCORDION_VISIBLE
                    ? _(i, e.originalSuggestion)
                    : null;
              switch (u) {
                case o("AdsTextGenerationTypes").TextGenSuggestionStatus.ADDED:
                case o("AdsTextGenerationTypes").TextGenSuggestionStatus
                  .DEFAULT_ADDED:
                case o("AdsTextGenerationTypes").TextGenSuggestionStatus
                  .STICKY_ADDED:
                  if (c == null && D(i, e)) return;
                  i = E(i, t, e, r);
                  break;
                case o("AdsTextGenerationTypes").TextGenSuggestionStatus.NEW:
                case o("AdsTextGenerationTypes").TextGenSuggestionStatus
                  .REMOVED:
                  return i;
              }
            }
        }));
      var s = n.filter(function (e) {
        return !I(e);
      });
      return (s.length > 0 && (i = w(i, s[0].originalSuggestion.field, r)), i);
    }
    function M(e) {
      switch (e) {
        case "DEFAULT_ADD":
          return "DEFAULT_ADD_INTERACTION";
        case "STICKY_ADD":
          return "STICKY_ADD_INTERACTION";
        default:
          return null;
      }
    }
    function w(e, t, n) {
      var o,
        a =
          (o = g(e, t)) == null
            ? void 0
            : o.filter(function (e) {
                return k(e);
              });
      if (a == null) return e;
      var i = "uuid",
        l = "text",
        s = "action_type",
        u = e;
      return (
        a.forEach(function (e) {
          var o = e.get(s);
          if (typeof o == "string") {
            var a = M(o);
            if (a != null) {
              var c = C(u, t, e.get(i), e.get(l));
              if (c != null) {
                var p = [{ assetField: s, value: a }];
                u = m(
                  u,
                  r("nullthrows")(n.get(u.id)),
                  r("nullthrows")(d(t)),
                  c,
                  p,
                );
              }
            }
          }
        }),
        u
      );
    }
    function A(e, t, n, o) {
      var a = g(e, t);
      if (a == null) return e;
      var i = "uuid",
        l = "text",
        s = "automation_status",
        u = o ? "OPT_IN" : "OPT_OUT",
        c = e;
      return (
        a.forEach(function (e) {
          var o = C(c, t, e.get(i), e.get(l));
          if (o != null) {
            var a = [{ assetField: s, value: u }];
            c = m(c, r("nullthrows")(n.get(c.id)), r("nullthrows")(d(t)), o, a);
          }
        }),
        c
      );
    }
    function F(e, t, n, r) {
      var o,
        a =
          (o = g(e, t)) == null ||
          (o = o.filter(function (e) {
            return k(e);
          })) == null
            ? void 0
            : o.filter(function (e) {
                return !n || T(e);
              });
      if (a == null || (t !== "bodies" && t !== "titles")) return e;
      var i = "uuid",
        l = "text",
        s = e;
      return (
        a.forEach(function (e) {
          var n = C(s, t, e.get(i), e.get(l));
          n != null && (s = L(s, t, n, r));
        }),
        s
      );
    }
    ((l.getHandleSuggestionsMutation = N),
      (l.setTextAutomationStatus = A),
      (l.removeGeneratedSuggestions = F));
  },
  98,
);
