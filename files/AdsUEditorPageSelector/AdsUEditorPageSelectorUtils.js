__d(
  "AdsUEditorPageSelectorUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      var t = e.reduce(function (e, t) {
        return ((e[t.id] = t), e);
      }, {});
      return t;
    }
    i.pagesMapLogic = e;
  },
  66,
);
