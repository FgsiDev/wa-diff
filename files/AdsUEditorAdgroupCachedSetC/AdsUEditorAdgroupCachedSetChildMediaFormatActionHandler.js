__d(
  "AdsUEditorAdgroupCachedSetChildMediaFormatActionHandler",
  [
    "AdsAdgroupChildAttachmentsFields",
    "AdsAdgroupRecordAccessors",
    "AdsUEditorAdgroupCachedChildMediaFomatDataRecord",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSetChildMediaFormatDataActionFlux",
    "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        type: o("AdsUEditorAdgroupSetChildMediaFormatDataActionFlux")
          .actionType,
        fluxInputs: {
          plugins: o("AdsUEditorAdgroupSelectors").adObjectsList.mapTransform(
            o("AdsUEditorAdgroupSpecPathPluginAdObjectsUtils")
              .getAdgroupSpecPathPlugin,
          ),
        },
        mutate: function (t, n, o) {
          var e = o.plugins,
            a = t.adgroupIDs,
            i = t.adgroupsToCache,
            l = t.index,
            d = t.mediaFormat,
            m = t.previousMediaFormat;
          return i
            ? n.withMutations(function (t) {
                return a.reduce(function (t, n) {
                  var o = i.get(n),
                    a = r("nullthrows")(e.get(n));
                  if (!o) return t;
                  var p = [n, "childMediaFormatData", l],
                    _ =
                      t.getIn(p) ||
                      r(
                        "AdsUEditorAdgroupCachedChildMediaFomatDataRecord",
                      ).getEmptyRecord();
                  switch (d) {
                    case "IMAGE": {
                      m === "VIDEO"
                        ? (_ = u(o, a, l, _))
                        : m === "EXISTING_POST" && (_ = c(o, _));
                      break;
                    }
                    case "VIDEO": {
                      m === "IMAGE"
                        ? (_ = s(o, a, l, _))
                        : m === "EXISTING_POST" && (_ = c(o, _));
                      break;
                    }
                    case "EXISTING_POST": {
                      m === "IMAGE"
                        ? (_ = s(o, a, l, _))
                        : m === "VIDEO" && (_ = u(o, a, l, _));
                      break;
                    }
                  }
                  return (t.setIn(p, _), t);
                }, t);
              })
            : n;
        },
      },
      s = function (t, n, o, a) {
        var e = r("AdsAdgroupChildAttachmentsFields").imageURL.get(t, n, o),
          i = r("AdsAdgroupChildAttachmentsFields").imageHash.get(t, n, o),
          l = r("AdsAdgroupChildAttachmentsFields").imageCrops.get(t, n, o),
          s = a;
        return (
          i.supported && (s = s.set("imageHash", i.value)),
          e.supported && (s = s.set("imageURL", e.value)),
          l.supported && (s = s.set("imageCrops", l.value)),
          s
        );
      },
      u = function (t, n, o, a) {
        var e = r("AdsAdgroupChildAttachmentsFields").videoID.get(t, n, o),
          i = r("AdsAdgroupChildAttachmentsFields").imageURL.get(t, n, o),
          l = a;
        (e.supported && (l = l.set("videoID", e.value)),
          i.supported && (l = l.set("thumbnailURL", i.value)));
        var s = r("AdsAdgroupChildAttachmentsFields").captionIDs.get(t, n, o);
        return (s.supported && (l = l.set("captionIDs", s.value)), l);
      },
      c = function (t, n) {
        var e = n,
          o = r(
            "AdsAdgroupRecordAccessors",
          ).creative.branded_content.parent_source_facebook_post_id.get(t),
          a = r(
            "AdsAdgroupRecordAccessors",
          ).creative.branded_content.parent_source_instagram_media_id.get(t);
        return (
          o != null &&
            o !== "0" &&
            ((e = e.set("parentSourceFacebookPostID", o)),
            (e = e.set("parentSourceInstagramMediaID", null))),
          a != null &&
            ((e = e.set("parentSourceInstagramMediaID", a)),
            (e = e.set("parentSourceFacebookPostID", null))),
          e
        );
      },
      d = e;
    l.default = d;
  },
  98,
);
