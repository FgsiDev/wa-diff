__d(
  "AdsAdgroupDynamicAdsTextFieldMutators",
  [
    "invariant",
    "AdsAdgroupChildAttachmentsFields",
    "AdsAdgroupRecordAccessors",
    "AdsDACreativeFlexMediaUtils",
    "AdsUEditorAdgroupDynamicAdsSetUnifiedTextFieldDataActionFlux",
    "FBLogger",
    "immutable",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = {
      headline: {
        childAttachmentField: r("AdsAdgroupChildAttachmentsFields").headline,
        relatedMediaFieldName: "titles",
      },
      description: {
        childAttachmentField: r("AdsAdgroupChildAttachmentsFields").description,
        relatedMediaFieldName: "descriptions",
      },
      url: {
        childAttachmentField: r("AdsAdgroupChildAttachmentsFields").linkURL,
        relatedMediaFieldName: "destination_customizations",
      },
    };
    function u(t) {
      var n = e[t];
      return (n == null, n);
    }
    function c(e, t, n, r) {
      var o = u(t);
      if (o == null) return e;
      var a = o.childAttachmentField;
      if (a == null) return e;
      var i = a.get(e, r, 0);
      return i.supported ? e.setIn(i.path, n) : e;
    }
    function d(e, t, n) {
      var a = ["creative"],
        i = e.getIn(a) || {},
        l = i.media_sourcing_spec || {};
      if (!l.related_media) return e;
      var s = u(t);
      if (s == null) return e;
      var c = l.related_media,
        d = s.relatedMediaFieldName,
        m = e;
      if (t === "url")
        (c.images &&
          c.images.length > 0 &&
          c.images.forEach(function (e, t) {
            var i =
              e instanceof r("immutable").Map
                ? e.get("opt_in_status")
                : e.opt_in_status;
            if (
              o("AdsDACreativeFlexMediaUtils").isValidDARelatedMediaOptInStatus(
                i,
              )
            ) {
              var l = [].concat(a, [
                "media_sourcing_spec",
                "related_media",
                "images",
                t,
                d,
              ]);
              m = m.setIn(l, [{ url: n }]);
            }
          }),
          c.videos &&
            c.videos.length > 0 &&
            c.videos.forEach(function (e, t) {
              var i =
                e instanceof r("immutable").Map
                  ? e.get("opt_in_status")
                  : e.opt_in_status;
              if (
                o(
                  "AdsDACreativeFlexMediaUtils",
                ).isValidDARelatedMediaOptInStatus(i)
              ) {
                var l = [].concat(a, [
                  "media_sourcing_spec",
                  "related_media",
                  "videos",
                  t,
                  d,
                ]);
                m = m.setIn(l, [{ url: n }]);
              }
            }));
      else {
        if (c.images && c.images.length > 0) {
          var p = r("immutable").List(
            c.images.map(function (e) {
              var a = e instanceof r("immutable").Map ? e.toJS() : e,
                i = a.opt_in_status,
                l;
              if (t === "headline") {
                var s, u;
                l = {
                  bodies:
                    (s = a.text_customizations) == null ? void 0 : s.bodies,
                  titles: [{ text: n }],
                  descriptions:
                    (u = a.text_customizations) == null
                      ? void 0
                      : u.descriptions,
                };
              } else if (t === "description") {
                var c, d;
                l = {
                  bodies:
                    (c = a.text_customizations) == null ? void 0 : c.bodies,
                  titles:
                    (d = a.text_customizations) == null ? void 0 : d.titles,
                  descriptions: [{ text: n }],
                };
              }
              return o(
                "AdsDACreativeFlexMediaUtils",
              ).isValidDARelatedMediaOptInStatus(i)
                ? babelHelpers.extends({}, a, { text_customizations: l })
                : a;
            }),
          );
          m = r(
            "AdsAdgroupRecordAccessors",
          ).creative.media_sourcing_spec.related_media.images.set(p, m);
        }
        if (c.videos && c.videos.length > 0) {
          var _ = r("immutable").List(
            c.videos.map(function (e) {
              var a = e instanceof r("immutable").Map ? e.toJS() : e,
                i = a.opt_in_status,
                l;
              if (t === "headline") {
                var s, u;
                l = {
                  bodies:
                    (s = a.text_customizations) == null ? void 0 : s.bodies,
                  titles: [{ text: n }],
                  descriptions:
                    (u = a.text_customizations) == null
                      ? void 0
                      : u.descriptions,
                };
              } else if (t === "description") {
                var c, d;
                l = {
                  bodies:
                    (c = a.text_customizations) == null ? void 0 : c.bodies,
                  titles:
                    (d = a.text_customizations) == null ? void 0 : d.titles,
                  descriptions: [{ text: n }],
                };
              }
              return o(
                "AdsDACreativeFlexMediaUtils",
              ).isValidDARelatedMediaOptInStatus(i)
                ? babelHelpers.extends({}, a, { text_customizations: l })
                : a;
            }),
          );
          m = r(
            "AdsAdgroupRecordAccessors",
          ).creative.media_sourcing_spec.related_media.videos.set(_, m);
        }
      }
      return m;
    }
    ((l.mutateDynamicAdsUploadedMediaTextFieldMutator = c),
      (l.mutateDynamicAdsRelatedMediaTextFieldMutator = d));
  },
  98,
);
