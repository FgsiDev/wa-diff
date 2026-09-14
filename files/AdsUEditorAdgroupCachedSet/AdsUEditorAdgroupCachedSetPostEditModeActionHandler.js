__d(
  "AdsUEditorAdgroupCachedSetPostEditModeActionHandler",
  [
    "AdsAPIAdgroupRecordUtils",
    "AdsEditorPostEditMode",
    "AdsUEditorAdgroupCachedRecord",
    "AdsUEditorAdgroupSetPostEditModeDataActionFlux",
    "adsUEditorAccountSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        type: o("AdsUEditorAdgroupSetPostEditModeDataActionFlux").actionType,
        fluxInputs: { account: r("adsUEditorAccountSelector") },
        mutate: function (t, n, a) {
          var e = a.account,
            i = t.adgroupIDs,
            l = t.adgroupsToCache;
          return l
            ? n.withMutations(function (t) {
                return i.reduce(function (t, n) {
                  var a = l.get(n);
                  if (!a) return t;
                  t.get(n) ||
                    t.set(
                      n,
                      r("AdsUEditorAdgroupCachedRecord").getEmptyRecord(),
                    );
                  var i = a.creative,
                    s = o("AdsAPIAdgroupRecordUtils").getPostEditMode(a, e);
                  switch (s) {
                    case r("AdsEditorPostEditMode").EXISTING:
                      t.setIn(
                        [n, "existingPostPageID"],
                        o("AdsAPIAdgroupRecordUtils").getExistingPostAdPageID(
                          a,
                        ),
                      );
                      break;
                    case r("AdsEditorPostEditMode").INLINE:
                      t.setIn([n, "metadata"], a.metadata);
                      break;
                    default:
                      break;
                  }
                  var u = [n, "creatives"];
                  return (
                    t.updateIn(u, function (e) {
                      var t;
                      return babelHelpers.extends(
                        {},
                        e || {},
                        ((t = {}), (t[s] = i), t),
                      );
                    }),
                    t
                  );
                }, t);
              })
            : n;
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
