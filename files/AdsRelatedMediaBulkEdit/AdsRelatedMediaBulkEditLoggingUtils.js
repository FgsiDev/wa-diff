__d(
  "AdsRelatedMediaBulkEditLoggingUtils",
  [
    "AdsAdgroupBulkEditColumnKeys",
    "AdsCreativeFlexLoggingUtils",
    "AdsCreativeFlexMediaUtils",
    "AdsInterfacesLogger",
    "AdsRelatedMediaBulkEditUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n,
        o = JSON.stringify(
          Object.freeze({ selected_adgroup_ids: e, bulk_edit_source: t }),
        );
      r("AdsInterfacesLogger").logOnce({
        eventName: "creative_flex_bulk_edit",
        data:
          ((n = {}),
          (n.targeting_ui_event_data = "user_action"),
          (n.adgroup_id = e.length > 0 ? e[0] : null),
          (n.event_source = "on_click_entry"),
          (n.subsequent_data = o),
          n),
      });
    }
    function s(e, t, n) {
      var a = e
        .filter(function (e) {
          return e.has(r("AdsAdgroupBulkEditColumnKeys").RELATED_MEDIA);
        })
        .keySeq()
        .toArray();
      if (a.length !== 0) {
        var i = n ? "on_publish" : "on_apply";
        a.forEach(function (e) {
          var n,
            l = t.get(e),
            s = l != null ? l.toJS() : null;
          if (s != null) {
            var u =
                s != null
                  ? o(
                      "AdsRelatedMediaBulkEditUtils",
                    ).computeTargetMediaIdentifier(s)
                  : null,
              c = o("AdsCreativeFlexMediaUtils").getRelatedMediaFromAllSpecs(
                o("AdsCreativeFlexMediaUtils").FilterType.SELECT,
                [s],
              ),
              d = o("AdsCreativeFlexMediaUtils").getRelatedMediaFromAllSpecs(
                o("AdsCreativeFlexMediaUtils").FilterType.ALL,
                [s],
              ),
              m = JSON.stringify(
                Object.freeze({
                  source_media: u,
                  opt_in_count: c.length,
                  opt_in_ids: c.map(function (e) {
                    return e.id;
                  }),
                  total_count: d.length,
                  all_related_media_ids: d.map(function (e) {
                    return e.id;
                  }),
                  changed_adgroup_ids: a,
                  changed_adgroup_count: a.length,
                  all_related_media: o(
                    "AdsCreativeFlexMediaUtils",
                  ).getRelatedMediaForLogging(d),
                  all_related_media_source_count: o(
                    "AdsCreativeFlexMediaUtils",
                  ).getRelatedMediaSourceCounts(d),
                  opt_in_related_media_source_count: o(
                    "AdsCreativeFlexMediaUtils",
                  ).getRelatedMediaSourceCounts(c),
                }),
              );
            r("AdsInterfacesLogger").log({
              eventName: "creative_flex_mvp_modal_save_cta_click",
              data:
                ((n = {}),
                (n.targeting_ui_event_data = i),
                (n.adgroup_id = e),
                (n.event_source = "bulk_edit"),
                (n.subsequent_data = m),
                n),
            });
          }
        });
      }
    }
    function u(e, t, n, a) {
      var i,
        l = JSON.stringify(
          Object.freeze(
            t === "adgroup_row"
              ? babelHelpers.extends(
                  {
                    is_ad_object_eligible:
                      n == null ? void 0 : n.is_ad_object_eligible,
                    selected_media_count:
                      n == null ? void 0 : n.selected_media_count,
                    total_media_count: n == null ? void 0 : n.total_media_count,
                    display_related_media:
                      n == null ? void 0 : n.display_related_media,
                    all_related_media:
                      a != null
                        ? o(
                            "AdsCreativeFlexMediaUtils",
                          ).getRelatedMediaForLogging(a)
                        : void 0,
                  },
                  a != null
                    ? o(
                        "AdsCreativeFlexMediaUtils",
                      ).getRelatedMediaSourceCounts(a)
                    : void 0,
                )
              : { selected_adgroup_ids: e },
          ),
        ),
        s = e == null ? void 0 : e[0];
      r("AdsInterfacesLogger").logOnce({
        eventName: "creative_flex_mvp_modal_impression",
        data:
          ((i = {}),
          (i.adgroup_id = s),
          (i.targeting_ui_event_data = t),
          (i.event_source = "bulk_edit_modal"),
          (i.subsequent_data = l),
          i),
      });
    }
    function c(e) {
      var t,
        n = JSON.stringify(Object.freeze({ selected_adgroup_ids: e }));
      r("AdsInterfacesLogger").logOnce({
        eventName: "creative_flex_entrypoint_impression",
        data:
          ((t = {}),
          (t.event_source = "bulk_edit_entry"),
          (t.subsequent_data = n),
          t),
      });
    }
    function d(e, t, n) {
      var r = JSON.stringify(
        Object.freeze(
          babelHelpers.extends(
            {
              selected_adgroup_ids: e,
              opt_in_media_count: t,
              all_related_media: o(
                "AdsCreativeFlexMediaUtils",
              ).getRelatedMediaForLogging(n),
            },
            o("AdsCreativeFlexMediaUtils").getRelatedMediaSourceCounts(n),
          ),
        ),
      );
      o("AdsCreativeFlexLoggingUtils").logCreativeFlexEntrypointImpression(
        "bulk_edit_l1_entry",
        void 0,
        r,
      );
    }
    function m(e, t, n) {
      var a,
        i = JSON.stringify(
          Object.freeze(
            babelHelpers.extends(
              {
                selected_adgroup_ids: e,
                opt_in_media_count: t,
                all_related_media: o(
                  "AdsCreativeFlexMediaUtils",
                ).getRelatedMediaForLogging(n),
              },
              o("AdsCreativeFlexMediaUtils").getRelatedMediaSourceCounts(n),
            ),
          ),
        );
      r("AdsInterfacesLogger").log({
        eventName: "creative_flex_mvp_edit_click",
        data:
          ((a = {}),
          (a.adgroup_id = e.join(",")),
          (a.event_source = "bulk_edit_l1_entry"),
          (a.subsequent_data = i),
          a),
      });
    }
    function p(e, t, n, a) {
      var i,
        l = new Map();
      for (var s of e) {
        var u,
          c,
          d,
          m,
          p =
            (u = s.relatedMediaDisplay) == null
              ? void 0
              : u.map(function (e) {
                  return {
                    id: e == null ? void 0 : e.id,
                    type: e == null ? void 0 : e.type,
                  };
                });
        l.set(s.adgroupID, {
          total_count:
            (c =
              (d = s.totalCount) != null
                ? d
                : (m = s.relatedMediaDisplay) == null
                  ? void 0
                  : m.length) != null
              ? c
              : 0,
          related_media: p,
        });
      }
      var _ =
          t === "on_click_row_expand"
            ? { is_expanded: n }
            : t === "media_selection_change"
              ? { new_selection: n }
              : { new_checkbox_value: n },
        f = {};
      if ((a == null ? void 0 : a.allMedia) != null) {
        var g = a.allMedia;
        f.all_related_media = o(
          "AdsCreativeFlexMediaUtils",
        ).getRelatedMediaForLogging(g);
        var h = o("AdsCreativeFlexMediaUtils").getRelatedMediaSourceCounts(g);
        ((f.source_counts = h.source_counts), (f.total_count = h.total_count));
      }
      (a == null ? void 0 : a.creationSource) != null &&
        (f.creation_source = a.creationSource);
      var y = JSON.stringify(
        Object.freeze(
          babelHelpers.extends(
            {},
            _,
            { adgroup_related_media_map: Object.fromEntries(l) },
            f,
          ),
        ),
      );
      r("AdsInterfacesLogger").logOnce({
        eventName: "creative_flex_bulk_edit",
        data:
          ((i = {}),
          (i.adgroup_id = e.length > 0 ? e[0].adgroupID : null),
          (i.event_source = t),
          (i.subsequent_data = y),
          i),
      });
    }
    function _(e) {
      for (var t of e) {
        var n,
          o = t.adgroupID,
          a = t.allRelatedMedia,
          i = t.isEligible,
          l = t.noRecommendationReason,
          s = t.optInCount,
          u = t.sourceMedia,
          c = t.totalCount,
          d = JSON.stringify(
            Object.freeze({
              source_media: u,
              opt_in_count: s,
              total_count: c,
              all_related_media: a,
              is_eligible: i,
              no_recommendation_reason: l,
            }),
          );
        r("AdsInterfacesLogger").logOnce({
          eventName: "creative_flex_mvp_recommendation_query",
          data:
            ((n = {}),
            (n.adgroup_id = o),
            (n.targeting_ui_event_data = "related_media_query"),
            (n.subsequent_data = d),
            (n.event_source = "bulk_edit"),
            n),
        });
      }
    }
    ((l.logBulkEditModalOnClickEntry = e),
      (l.logRelatedMediaApplyOrPublish = s),
      (l.logBulkEditImpression = u),
      (l.logBulkEditEntryPointImpression = c),
      (l.logBulkEditL1EntryImpression = d),
      (l.logBulkEditL1EntryOnEdit = m),
      (l.logBulkEditAction = p),
      (l.logBulkEditRecommendationQuery = _));
  },
  98,
);
