__d(
  "adsDraftBrandedContentSponsorIDTranslator",
  ["AdsAPIAdgroupPaths", "ApiAdObjectTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = [
        (e =
          r(
            "AdsAPIAdgroupPaths",
          )).CREATIVE.OBJECT_STORY_SPEC.PHOTO_DATA.BRANDED_CONTENT_SPONSOR_PAGE_ID.slice(
          1,
        ),
        e.CREATIVE.OBJECT_STORY_SPEC.VIDEO_DATA.BRANDED_CONTENT_SPONSOR_PAGE_ID.slice(
          1,
        ),
        e.CREATIVE.OBJECT_STORY_SPEC.TEMPLATE_DATA.BRANDED_CONTENT_SPONSOR_PAGE_ID.slice(
          1,
        ),
        e.CREATIVE.OBJECT_STORY_SPEC.LINK_DATA.BRANDED_CONTENT_SPONSOR_PAGE_ID.slice(
          1,
        ),
        e.CREATIVE.BRANDED_CONTENT_SPONSOR_PAGE_ID.slice(1),
        e.CREATIVE.ASSET_FEED_SPEC.ADDITIONAL_DATA.BRAND_PAGE_ID.slice(1),
      ],
      u = e.CREATIVE.FACEBOOK_BRANDED_CONTENT.SPONSOR_PAGE_ID.slice(1),
      c = [].concat(s, [u]);
    function d(e) {
      var t = e.values.get("creative");
      if (t == null || (t == null ? void 0 : t.newValue) == null) return e;
      var n = t.newValue,
        o = n.getIn(r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_TYPE.slice(1)),
        a =
          o === r("ApiAdObjectTypes").PHOTO &&
          n.getIn(["uca_draft_version"]) >= 1,
        i = s.reduce(function (e, t) {
          return e != null ? e : n.getIn(t);
        }, null),
        l = n.getIn(u),
        d = null;
      if (
        (i == null && l == null) ||
        (i != null && l != null && i !== l ? (d = a ? l : i) : (d = i || l),
        d == null)
      )
        return e;
      var m =
        s.reduce(function (e, t) {
          return e != null ? e : n.getIn(t);
        }, null) != null;
      return m
        ? ((n = c.reduce(function (e, t) {
            return e.deleteIn(t);
          }, n)),
          (n = n.setIn(
            r(
              "AdsAPIAdgroupPaths",
            ).CREATIVE.FACEBOOK_BRANDED_CONTENT.SPONSOR_PAGE_ID.slice(1),
            d,
          )),
          t.newValue !== n ? e.setIn(["values", "creative", "newValue"], n) : e)
        : e;
    }
    l.default = d;
  },
  98,
);
