__d(
  "AdsAdgroupStickyOptInMutators",
  ["AdsAdgroupRecordAccessors", "AdsMutators", "immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Set(["BACKFILL", "DEFAULT", "DEFAULT_OPT_IN"]);
    function s(t) {
      return typeof t == "string" && e.has(t);
    }
    function u(e, t) {
      return e == null || s(t);
    }
    function c(e) {
      return e ? "OPT_IN" : "OPT_OUT";
    }
    function d(e, t, n, a) {
      var i,
        l,
        d = n.getValue(),
        m = a.getValue();
      if (d == null && m == null) return t;
      var p =
        (i = e.creative) == null || (i = i.creative_sourcing_spec) == null
          ? void 0
          : i.website_summary_spec;
      if (
        !u(
          p == null ? void 0 : p.enroll_status,
          p == null || (l = p.action_metadata) == null ? void 0 : l.type,
        )
      )
        return t;
      var _ = p == null ? void 0 : p.subfeatures,
        f = function (t) {
          var e =
            _ == null
              ? void 0
              : _.find(function (e) {
                  return e.asImmutable().get("feature_name") === t;
                });
          return (
            e == null || s(e.asImmutable().getIn(["action_metadata", "type"]))
          );
        },
        g = function (t, n) {
          return r("immutable").Map({
            enroll_status: c(n),
            action_metadata: { type: "STICKY" },
            feature_name: t,
          });
        },
        h = d != null && f("reviews") ? g("reviews", d) : null,
        y = m != null && f("selling_points") ? g("selling_points", m) : null;
      return o("AdsMutators").chain(
        r(
          "AdsAdgroupRecordAccessors",
        ).creative.creative_sourcing_spec.website_summary_spec.enroll_status.set(
          c(d === !0 || m === !0),
        ),
        r(
          "AdsAdgroupRecordAccessors",
        ).creative.creative_sourcing_spec.website_summary_spec.action_metadata.type.set(
          "STICKY",
        ),
        r(
          "AdsAdgroupRecordAccessors",
        ).creative.creative_sourcing_spec.website_summary_spec.subfeatures.set(
          r("immutable").List([h, y]).filter(Boolean),
        ),
      )(t);
    }
    function m(e, t, n) {
      var a,
        i,
        l,
        s,
        d = n.getValue();
      if (d == null) return t;
      var m =
        (a = e.creative) == null || (a = a.creative_sourcing_spec) == null
          ? void 0
          : a.website_media_spec;
      if (
        !u(
          m == null ? void 0 : m.enroll_status,
          m == null || (i = m.action_metadata) == null ? void 0 : i.type,
        )
      )
        return t;
      var p =
        ((l = m == null || (s = m.media) == null ? void 0 : s.size) != null
          ? l
          : 0) > 0;
      return d && !p
        ? t
        : o("AdsMutators").chain(
            r(
              "AdsAdgroupRecordAccessors",
            ).creative.creative_sourcing_spec.website_media_spec.enroll_status.set(
              c(d),
            ),
            r(
              "AdsAdgroupRecordAccessors",
            ).creative.creative_sourcing_spec.website_media_spec.action_metadata.type.set(
              "STICKY",
            ),
          )(t);
    }
    ((l.applyWebsiteSummaryStickyOptInMutator = d),
      (l.applyWebsiteMediaStickyOptInMutator = m));
  },
  98,
);
