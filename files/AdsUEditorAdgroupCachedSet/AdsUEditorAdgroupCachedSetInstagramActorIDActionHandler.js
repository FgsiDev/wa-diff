__d(
  "AdsUEditorAdgroupCachedSetInstagramActorIDActionHandler",
  [
    "AdsAdgroupSemanticFields",
    "AdsUEditorAdgroupCachedRecord",
    "AdsUEditorAdgroupRemoveInstagramAccountDataActionFlux",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
    "isTruthy",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        type: o("AdsUEditorAdgroupRemoveInstagramAccountDataActionFlux")
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
            l = t.pageIDMap;
          return !i || !l
            ? n
            : n.withMutations(function (t) {
                return a.reduce(function (t, n) {
                  var o = i.get(n),
                    a = e.get(n);
                  if (!o || !l.get(n) || !a) return t;
                  t.get(n) ||
                    t.set(
                      n,
                      r("AdsUEditorAdgroupCachedRecord").getEmptyRecord(),
                    );
                  var s = r("AdsAdgroupSemanticFields").instagramActorID.get(
                    a,
                    o,
                  );
                  return (
                    r("isTruthy")(s) &&
                      t
                        .setIn([n, "instagramActorID"], s)
                        .setIn([n, "pageIDForInstagram"], l.get(n)),
                    t
                  );
                }, t);
              });
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
