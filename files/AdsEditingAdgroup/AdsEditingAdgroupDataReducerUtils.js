__d(
  "AdsEditingAdgroupDataReducerUtils",
  [
    "AdsAdgroupCombinedStore",
    "AdsDataAtom",
    "AdsEditingAdgroupContext",
    "AdsSelectorUtils",
    "AdsUEditorContextFactory",
    "AdsUEditorHostIDs",
    "AdsUEditorUtils",
    "mapObject",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = {
        callReduce: function (a, l, c, d) {
          if (
            !o("AdsUEditorUtils").shouldHostHandleAction(
              c,
              r("AdsUEditorHostIDs").EDITING,
            )
          )
            return l;
          var t = o("AdsUEditorContextFactory").getForIDs(
              r("AdsEditingAdgroupContext"),
              c.adgroupIDs || [],
              i.id,
            ),
            m = n("AdsAdgroupCombinedStore"),
            p = m.getDispatchToken(),
            _ = (u || (u = o("AdsSelectorUtils")))
              .getStoreDispatchTokens(Object.values(d), t)
              .filter(function (e) {
                return e !== p;
              });
          (e || (e = r("AdsDataAtom"))).waitFor(_);
          var f = (s || (s = r("mapObject"))).untyped(d, function (e) {
            return e(t);
          });
          return a(l, c, f);
        },
      },
      d = c;
    l.default = d;
  },
  98,
);
