__d(
  "adsUEditorAdGroupBrandedContentInstagramBoostingTypeFieldSelector",
  ["AdsUEditorSelectors", "adsCreateSelector", "adsGetUniformValueSelector"],
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
        [e],
        function (t) {
          return t;
        },
        { name: i.id + ".brandedContentAdBoostingTypeSelector" },
      );
    l.brandedContentAdBoostingTypeSelector = s;
  },
  98,
);
