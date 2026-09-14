__d(
  "AdsAPlusCDefaultOnceUtils",
  ["AdsUEditorAdgroupACOMutators"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = !1;
    function s(t, n, r, a, i, l, s, u) {
      return e
        ? t
        : ((e = !0),
          o("AdsUEditorAdgroupACOMutators").transformAdgroupToDAAPlusC(
            t,
            n,
            r,
            a,
            i,
            l,
            !0,
            void 0,
            s,
            u,
          ));
    }
    function u() {
      e = !1;
    }
    ((l.defaultOnceToAPlusC = s), (l.reset = u));
  },
  98,
);
