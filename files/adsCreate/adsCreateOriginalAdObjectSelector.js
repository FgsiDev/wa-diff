__d(
  "adsCreateOriginalAdObjectSelector",
  ["LoadObject", "adsCreateKeyedStoreSelector"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("LoadObject").withValue(
      babelHelpers.extends({}, Object.freeze({})),
      { creatorModuleID: i.id },
    );
    function s(t) {
      var n = t.draftStore,
        o = t.liveStore;
      return r("adsCreateKeyedStoreSelector")([o, n], {
        getKey: function (t) {
          return t;
        },
        getInputData: function (a) {
          if (n.get(a).isLoading())
            return r("LoadObject").loading({ creatorModuleID: i.id });
          if (n.isNew(a)) return e;
          var t = o.get(a);
          return t.map(function (t) {
            return t != null ? t : e;
          });
        },
        computeResult: function (t, n) {
          return n;
        },
        areInputsEqual: function (t, n) {
          return t === n;
        },
      });
    }
    l.default = s;
  },
  98,
);
