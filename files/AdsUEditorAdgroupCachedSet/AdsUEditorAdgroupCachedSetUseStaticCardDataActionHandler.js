__d(
  "AdsUEditorAdgroupCachedSetUseStaticCardDataActionHandler",
  ["AdsUEditorAdgroupSetUseStaticCardDataActionFlux"],
  function (t, n, r, o, a, i, l) {
    var e = {
        type: r("AdsUEditorAdgroupSetUseStaticCardDataActionFlux").actionType,
        mutate: function (t, n) {
          var e = t.adgroupIDs,
            r = t.useStaticCard;
          return r
            ? n
            : n.withMutations(function (t) {
                return e.reduce(function (e, t) {
                  var n = [t, "childMediaFormatData", 0];
                  return (e.hasIn(n) && e.deleteIn(n), e);
                }, t);
              });
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
