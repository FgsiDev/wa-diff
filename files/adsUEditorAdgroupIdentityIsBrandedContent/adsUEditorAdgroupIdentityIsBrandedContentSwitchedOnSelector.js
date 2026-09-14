__d(
  "adsUEditorAdgroupIdentityIsBrandedContentSwitchedOnSelector",
  [
    "AdsUEditorSelectors",
    "adsCreateSelector",
    "adsGetUniformValueSelector",
    "adsUEditorAdgroupIdentityBrandedContentToggleVisibilitySelector",
    "adsUEditorAdgroupIdentityIsBrandedContentDisabledSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsGetUniformValueSelector")(
        o("AdsUEditorSelectors").adgroup.bulkByAccessorToJS(function (e) {
          var t;
          return (t = e.creative) == null
            ? void 0
            : t.branded_content_boosting_type;
        }),
        null,
      ),
      s = r("adsCreateSelector")(
        [
          r("adsUEditorAdgroupIdentityBrandedContentToggleVisibilitySelector"),
          r("adsUEditorAdgroupIdentityIsBrandedContentDisabledSelector"),
          e,
          r("adsGetUniformValueSelector")(
            o("AdsUEditorSelectors").adgroup.bulkByAccessorToJS(function (e) {
              var t;
              return (t = e.creative) == null || (t = t.branded_content) == null
                ? void 0
                : t.ui_version;
            }),
            null,
          ),
        ],
        function (t, n, r, o) {
          return (
            t &&
            !n &&
            (r === "SPONSOR_INLINE" || r === "CREATOR_INLINE" || o === 1)
          );
        },
        { name: i.id },
      ),
      u = s;
    l.default = u;
  },
  98,
);
