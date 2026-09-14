__d(
  "AdsCTAURLViewStore",
  [
    "fbt",
    "AdsCTAURLViewActionTypes",
    "AdsCTAURLViewViewUpdateAction",
    "AdsDataAtom",
    "AdsURLValidationView",
    "FluxStore",
    "Promise",
    "ads-lib-urllib",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = (function (e) {
        function t(t) {
          var o;
          return (
            (o = e.call(this, t) || this),
            (o.$AdsCTAURLViewStore$p_6 = function (e) {
              return !e || !r("ads-lib-urllib").isPotentialUrl(e)
                ? (u || (u = n("Promise"))).reject(
                    s._(/*BTDS*/ "The URL is not valid."),
                  )
                : (u || (u = n("Promise"))).resolve();
            }),
            (o.$AdsCTAURLViewStore$p_1 = new Map()),
            (o.$AdsCTAURLViewStore$p_2 = new Map()),
            o
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var o = t.prototype;
        return (
          (o.$AdsCTAURLViewStore$p_3 = function (t, n) {
            var e = this.$AdsCTAURLViewStore$p_1.get(n);
            return (
              e
                ? e.url && e.url === n && (e = e.changeFragment(n))
                : ((e = new (r("AdsURLValidationView"))(n).loading()),
                  this.$AdsCTAURLViewStore$p_4(e),
                  this.$AdsCTAURLViewStore$p_5(t, n)),
              this.$AdsCTAURLViewStore$p_1.set(n, e),
              e
            );
          }),
          (o.get = function (t, n) {
            return this.$AdsCTAURLViewStore$p_3(t, n);
          }),
          (o.$AdsCTAURLViewStore$p_5 = function (t, n) {
            var e = this;
            this.$AdsCTAURLViewStore$p_2.forEach(function (n, r) {
              n.has(t) &&
                (n.size === 1
                  ? (e.$AdsCTAURLViewStore$p_2.delete(r),
                    e.$AdsCTAURLViewStore$p_1.delete(r))
                  : (n.delete(t),
                    e.$AdsCTAURLViewStore$p_2.set(r, new Set(n))));
            });
            var r = new Set(this.$AdsCTAURLViewStore$p_2.get(n));
            (r.add(t), this.$AdsCTAURLViewStore$p_2.set(n, new Set(r)));
          }),
          (o.__getActionTypes = function () {
            return [r("AdsCTAURLViewActionTypes").VIEW_UPDATE];
          }),
          (o.__onDispatch = function (t) {
            var e = t.action;
            switch (e.type) {
              case r("AdsCTAURLViewActionTypes").VIEW_UPDATE:
                this.$AdsCTAURLViewStore$p_1.has(e.view.fragment) &&
                  (this.$AdsCTAURLViewStore$p_1.set(e.view.fragment, e.view),
                  this.__emitChange());
                break;
            }
          }),
          (o.$AdsCTAURLViewStore$p_4 = function (t) {
            r("promiseDone")(
              t.promiseWithURL(this.$AdsCTAURLViewStore$p_6),
              function (e) {
                r("AdsCTAURLViewViewUpdateAction").dispatch(
                  { view: e },
                  {
                    line: "103",
                    module: "AdsCTAURLViewStore.js",
                    moduleID: i.id,
                  },
                );
              },
            );
          }),
          t
        );
      })(r("FluxStore"));
    c.__moduleID = i.id;
    var d = new c(e || (e = r("AdsDataAtom")));
    l.default = d;
  },
  226,
);
