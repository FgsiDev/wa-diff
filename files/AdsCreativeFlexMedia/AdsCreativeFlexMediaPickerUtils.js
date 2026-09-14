__d(
  "AdsCreativeFlexMediaPickerUtils",
  [
    "AdsAutomatedAdSpecMutationReason",
    "AdsAutomatedAdSpecMutationUseCaseName",
    "AdsCreativeFlexConstants",
    "AdsCreativeFlexDataProvider",
    "AdsCreativeFlexLoggingUtils",
    "AdsCreativeFlexMediaUtils",
    "AdsCreativeFlexRelatedMediaUtils",
    "AdsCreativeFlexTypes",
    "AdsCreativeFlexWHMediaUtils",
    "AdsInterfacesLogger",
    "AdsRelatedMediaGroupingUtils",
    "AdsUEditorAdgroupSetCreativeFlexRelatedMediaSpecAction",
    "adsAutomatedAdSpecMutation",
    "immutable",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return e.isDefaultSelected === !1 ||
        e.selection === o("AdsCreativeFlexTypes").RelatedMediaSelection.OPT_OUT
        ? o("AdsCreativeFlexTypes").RelatedMediaSelection.OPT_OUT
        : o("AdsCreativeFlexTypes").RelatedMediaSelection.OPT_IN;
    }
    function s(t, n, a, l, s) {
      var c, d;
      s === void 0 && (s = "media_picker_mvp");
      var m = u(a),
        p = m.reduce(function (e, t) {
          return e.concat(t);
        }, []),
        _ = r("AdsCreativeFlexDataProvider")(),
        f = _.pendingV2IRelatedMediaMap,
        g = _.pendingWHRelatedMediaMap,
        h =
          t.length > 0 && (c = g == null ? void 0 : g.get(String(t[0]))) != null
            ? c
            : null,
        y =
          t.length > 0 && (d = f == null ? void 0 : f.get(String(t[0]))) != null
            ? d
            : null,
        C =
          h != null || y != null
            ? (h != null ? h : r("immutable").OrderedMap()).merge(
                y != null ? y : r("immutable").OrderedMap(),
              )
            : null,
        b = o(
          "AdsRelatedMediaGroupingUtils",
        ).isInRelatedMediaGroupingExperiment(),
        v =
          !b && C != null && C.size > 0
            ? o("AdsCreativeFlexWHMediaUtils").mergeRecommendedWithCachedWH(
                p,
                C,
              )
            : p,
        S = o("AdsRelatedMediaGroupingUtils").isRelatedMediaGroupingQEEnabled(
          !0,
        )
          ? v
          : v.slice(
              0,
              o("AdsCreativeFlexConstants").RELATED_MEDIA_DEFAULT_COUNT,
            );
      return S.some(function (t) {
        return e(t) !== o("AdsCreativeFlexTypes").RelatedMediaSelection.OPT_OUT;
      })
        ? (o("adsAutomatedAdSpecMutation").maybeHandleAutomatedAdSpecMutation(
            r("justknobx")._("515"),
            {
              useCaseName: r("AdsAutomatedAdSpecMutationUseCaseName")
                .ADS_ADGROUP_SET_CREATIVE_FLEX_RELATED_MEDIA_DEFAULT_ON_MEDIA_PICKER,
              adgroupIDs: [].concat(t),
              mutationFn: function () {
                r(
                  "AdsUEditorAdgroupSetCreativeFlexRelatedMediaSpecAction",
                ).dispatch(
                  {
                    adgroupIDs: t,
                    hostID: n,
                    relatedMediaMap: r("immutable").OrderedMap(
                      S.map(function (t) {
                        return [
                          t.id,
                          babelHelpers.extends({}, t, { selection: e(t) }),
                        ];
                      }),
                    ),
                    actionCategory: o("AdsCreativeFlexTypes").ActionCategory
                      .DEFAULT_ON,
                  },
                  {
                    line: "125",
                    module: "AdsCreativeFlexMediaPickerUtils.js",
                    moduleID: i.id,
                  },
                );
              },
              reasons: new Set([
                r("AdsAutomatedAdSpecMutationReason").PRODUCT_DEFAULTING,
              ]),
            },
          ),
          S.length > 0 &&
            o("AdsCreativeFlexLoggingUtils").logCreativeRelaxationDefaultOn(
              t[0],
              m,
              l != null ? l : !1,
              s,
              h,
            ),
          !0)
        : !1;
    }
    function u(e) {
      if (e.hasValueWithoutError()) {
        var t = e.getValueEnforcing();
        return t != null ? t : r("immutable").OrderedMap();
      }
      return r("immutable").OrderedMap();
    }
    function c(e) {
      return u(e).some(function (e) {
        return e.length > 0;
      });
    }
    function d(e, t, n, a, l, s) {
      var c,
        d = Array.from(u(a).values()).flat(),
        m = d.filter(function (e) {
          return (
            e.selection ===
            o("AdsCreativeFlexTypes").RelatedMediaSelection.OPT_IN
          );
        }),
        _ = p(n, a);
      o("adsAutomatedAdSpecMutation").maybeHandleAutomatedAdSpecMutation(
        r("justknobx")._("515"),
        {
          useCaseName: r("AdsAutomatedAdSpecMutationUseCaseName")
            .ADS_ADGROUP_SET_CREATIVE_FLEX_RELATED_MEDIA_OPT_IN_MEDIA_PICKER,
          adgroupIDs: [].concat(e),
          mutationFn: function () {
            r(
              "AdsUEditorAdgroupSetCreativeFlexRelatedMediaSpecAction",
            ).dispatch(
              {
                adgroupIDs: e,
                hostID: t,
                relatedMediaMap: o(
                  "AdsCreativeFlexRelatedMediaUtils",
                ).mergeSelectionMap(d, n),
                actionCategory: o("AdsCreativeFlexTypes").ActionCategory
                  .DEFAULT,
              },
              {
                line: "201",
                module: "AdsCreativeFlexMediaPickerUtils.js",
                moduleID: i.id,
              },
            );
          },
          reasons: new Set([
            r("AdsAutomatedAdSpecMutationReason").MISSING_TRIGGER,
          ]),
        },
      );
      var f = JSON.stringify(
        Object.freeze(
          babelHelpers.extends(
            {
              source_media: l,
              opt_in_count: _.length,
              opt_in_ids: _.map(function (e) {
                return e.id;
              }),
              total_count: d.length,
              all_related_media_ids: d.map(function (e) {
                return e.id;
              }),
              has_opt_in_on_open: m.length > 0,
              is_eligible_for_default_on: s,
            },
            o("AdsCreativeFlexMediaUtils").getRelatedMediaSourceCounts(d),
            {
              opt_in_source_counts: o(
                "AdsCreativeFlexMediaUtils",
              ).getRelatedMediaSourceCounts(_).source_counts,
            },
          ),
        ),
      );
      if (l != null) {
        var g;
        r("AdsInterfacesLogger").logOnce({
          eventName: "creative_flex_mvp_recommendation_query",
          data:
            ((g = {}),
            (g.adgroup_id = e[0]),
            (g.targeting_ui_event_data = "related_media_query"),
            (g.subsequent_data = f),
            (g.event_source = "media_picker"),
            g),
        });
      }
      r("AdsInterfacesLogger").logOnce({
        eventName: "creative_flex_mvp_modal_save_cta_click",
        data:
          ((c = {}),
          (c.adgroup_id = e[0]),
          (c.event_source = "media_picker"),
          (c.subsequent_data = f),
          c),
      });
    }
    function m(e) {
      return Array.from(e.values()).filter(function (e) {
        return (
          e.selection === o("AdsCreativeFlexTypes").RelatedMediaSelection.OPT_IN
        );
      });
    }
    function p(e, t) {
      var n = u(t).reduce(function (e, t) {
          return e.concat(t);
        }, []),
        r = o("AdsCreativeFlexRelatedMediaUtils").mergeSelectionMap(n, e);
      return m(r);
    }
    ((l.getCreativeFlexDefaultOnSelection = e),
      (l.dispatchCreativeFlexDefaultOn = s),
      (l.hasResolvedRecommendedMedia = c),
      (l.dispatchCreativeFlexRelatedMediaOptIn = d));
  },
  98,
);
