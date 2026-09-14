__d(
  "AdsUEditorAdgroupUpdatePerMediaAudiencePersonaReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupUpdatePerMediaAudiencePersonaDataActionFlux",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              var n,
                o,
                a,
                i,
                l = e,
                s = t.mediaKey,
                u = r("immutable").Map({
                  age_min: t.ageMin,
                  age_max: t.ageMax,
                  genders: r("immutable").List(t.genders),
                }),
                c =
                  (n =
                    (o = l.creative) == null ||
                    (o = o.media_sourcing_spec) == null
                      ? void 0
                      : o.images) != null
                    ? n
                    : r("immutable").List(),
                d = c.map(function (e) {
                  var t = e.get("hash"),
                    n = e.get("url");
                  return t === s || n === s
                    ? e.set("creative_audience_pairing_persona", u)
                    : e;
                });
              l = r(
                "AdsAdgroupRecordAccessors",
              ).creative.media_sourcing_spec.images.set(d, l);
              var m =
                  (a =
                    (i = l.creative) == null ||
                    (i = i.media_sourcing_spec) == null
                      ? void 0
                      : i.videos) != null
                    ? a
                    : r("immutable").List(),
                p = m.map(function (e) {
                  var t = e.get("video_id"),
                    n = e.get("original_video_id");
                  return t === s || n === s
                    ? e.set("creative_audience_pairing_persona", u)
                    : e;
                });
              return (
                (l = r(
                  "AdsAdgroupRecordAccessors",
                ).creative.media_sourcing_spec.videos.set(p, l)),
                l
              );
            });
          },
          o("AdsUEditorAdgroupUpdatePerMediaAudiencePersonaDataActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
