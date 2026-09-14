__d(
  "AdsSuggestedProductTagsInfoReducerPlugins",
  ["AdsSuggestedProductTagsConstants"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          return babelHelpers.extends({}, t, {
            showInfo: n.showInfo,
            productTags: n.productTags,
          });
        },
      },
      s = {
        reduce: function (t, n) {
          return babelHelpers.extends({}, t, { showInfo: !1 });
        },
      },
      u = {
        reduce: function (t, n) {
          return n.newState ===
            o("AdsSuggestedProductTagsConstants").SuggestedProductTagState
              .REMOVED
            ? babelHelpers.extends({}, t, { showInfo: !1 })
            : t;
        },
      };
    ((l.AdsSuggestedProductTagsInfoReducerPlugin = e),
      (l.onRemoveCustomisations = s),
      (l.onRemoveProductTags = u));
  },
  98,
);
