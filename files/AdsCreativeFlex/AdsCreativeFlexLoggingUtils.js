__d(
  "AdsCreativeFlexLoggingUtils",
  ["AdsCreativeFlexMediaUtils", "AdsInterfacesLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, o) {
      var a,
        i,
        l =
          o === !0
            ? "da_creative_flex_mvp_entrypoint_impression"
            : "creative_flex_mvp_entrypoint_impression";
      r("AdsInterfacesLogger").logOnce({
        eventName: l,
        data: babelHelpers.extends(
          ((a = {}), (a.adgroup_id = t), (a.event_source = e), a),
          n != null ? ((i = {}), (i.subsequent_data = n), i) : void 0,
        ),
      });
    }
    function s(e, t, n) {
      var a;
      if (n.length === 0) return !1;
      var i = JSON.stringify(
        Object.freeze(o("AdsCreativeFlexMediaUtils").getOrganicMediaCounts(n)),
      );
      return (
        r("AdsInterfacesLogger").log({
          eventName: "creative_flex_mvp_organic_media_available",
          data:
            ((a = {}),
            (a.adgroup_id = t),
            (a.event_source = e),
            (a.subsequent_data = i),
            a),
        }),
        !0
      );
    }
    function u(e, t, n) {
      var o;
      r("AdsInterfacesLogger").log({
        eventName: "creative_flex_mvp_organic_card_impression",
        data:
          ((o = {}),
          (o.adgroup_id = t),
          (o.event_source = e),
          (o.subsequent_data = n),
          o),
      });
    }
    function c(e, t, n, a, i) {
      var l,
        s,
        u,
        c = t.keySeq().toArray(),
        d = t.reduce(function (e, t) {
          return e.concat(t);
        }, []),
        m = JSON.stringify(
          Object.freeze(
            babelHelpers.extends(
              {
                target_media_identifiers: c,
                related_media: o(
                  "AdsCreativeFlexMediaUtils",
                ).getRelatedMediaForLogging(d),
              },
              o("AdsCreativeFlexMediaUtils").getRelatedMediaSourceCounts(d),
              {
                deferred_default_on: n,
                pending_wh_count:
                  (l = i == null ? void 0 : i.size) != null ? l : 0,
                pending_wh_ids:
                  (s = i == null ? void 0 : i.keySeq().toArray()) != null
                    ? s
                    : [],
              },
            ),
          ),
        );
      r("AdsInterfacesLogger").logOnce({
        eventName: "creative_flex_mvp_default_on",
        data:
          ((u = {}),
          (u.adgroup_id = e),
          (u.subsequent_data = m),
          (u.event_source = a),
          u),
      });
    }
    var d = 0;
    function m(e, t, n, o, a) {
      var i;
      d += 1;
      var l = n.hasValue()
          ? n.hasError()
            ? "value_with_error"
            : "value_without_error"
          : n.isLoading()
            ? "loading_no_value"
            : n.hasError()
              ? "error_no_value"
              : "empty",
        s = JSON.stringify(
          Object.freeze({
            skip_kind: "default_on",
            lo_state: l,
            no_candidate_fix_gk: o,
            rescue_invoked: a,
            callsite: t,
            skip_seq: d,
          }),
        );
      r("AdsInterfacesLogger").logOnce({
        eventName: "creative_flex_debug",
        data:
          ((i = {}),
          (i.adgroup_id = e),
          (i.subsequent_data = s),
          (i.event_source = "default_on_skipped"),
          i),
      });
    }
    var p = 0;
    function _(e, t, n, o, a, i) {
      var l;
      p += 1;
      var s = JSON.stringify(
        Object.freeze({
          rescue_outcome: t,
          callsite: i,
          latency_ms: n,
          target_media_identifier: o,
          rec_count: a,
          rescue_outcome_seq: p,
        }),
      );
      r("AdsInterfacesLogger").logOnce({
        eventName: "creative_flex_debug",
        data:
          ((l = {}),
          (l.adgroup_id = e),
          (l.subsequent_data = s),
          (l.event_source = "default_on_rescue_outcome"),
          l),
      });
    }
    function f(e, t, n, o, a, i, l) {
      var s,
        u = JSON.stringify(
          Object.freeze({
            is_cf_editor_model: t,
            related_media_default_opt_in: n,
            has_exist_selection: o,
            recs_ready: a,
            rec_count: i,
            callsite: l,
            client_ts_ms: Date.now(),
          }),
        );
      r("AdsInterfacesLogger").logOnce({
        eventName: "creative_flex_debug",
        data:
          ((s = {}),
          (s.adgroup_id = e),
          (s.subsequent_data = u),
          (s.event_source = "default_on_routing"),
          s),
      });
    }
    function g(e, t, n, o) {
      var a,
        i = n.code != null ? Number(n.code) : null,
        l = JSON.stringify(
          Object.freeze({
            media_id: t.id,
            media_type: t.type,
            media_source_platform: t.mediaSourcePlatform,
            creation_source: t.creationSource,
            retriever_sources: t.retriever_sources,
            has_organic_media_source: t.organicMediaSource != null,
            error_code: i != null && Number.isFinite(i) ? i : null,
            error_message: n.message,
            error_mid: n.mid,
            callsite: o,
          }),
        );
      r("AdsInterfacesLogger").log({
        eventName: "creative_flex_debug",
        data:
          ((a = {}),
          (a.adgroup_id = e),
          (a.subsequent_data = l),
          (a.event_source = "preview_failure"),
          a),
      });
    }
    ((l.logCreativeFlexEntrypointImpression = e),
      (l.logCreativeFlexOrganicMediaAvailable = s),
      (l.logCreativeFlexOrganicCardImpression = u),
      (l.logCreativeRelaxationDefaultOn = c),
      (l.logCreativeRelaxationDefaultOnSkipped = m),
      (l.logCreativeFlexRescueOutcome = _),
      (l.logCreativeRelaxationDefaultOnRouting = f),
      (l.logCreativeFlexPreviewFailure = g));
  },
  98,
);
