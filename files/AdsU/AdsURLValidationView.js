__d(
  "AdsURLValidationView",
  ["fbt", "AdsGraphAPI", "cachedGraphAPI", "immutable"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = Object.freeze({ BLACKLISTED: 2622, UNRESOLVABLE: 1500 }),
      u = (function (t) {
        function n(e) {
          return t.call(this, { fragment: e }) || this;
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.changeFragment = function (t) {
            return this.withMutations(function (e) {
              ((e.fragment = t), (e.isLoading = !1), (e.xuiError = void 0));
            });
          }),
          (a.loading = function () {
            return this.withMutations(function (e) {
              ((e.isLoading = !0), (e.xuiError = void 0));
            });
          }),
          (a.$AdsURLValidationView$p_1 = function (n) {
            return n
              ? n.code === e.BLACKLISTED
                ? s._(/*BTDS*/ "The destination URL is blocked.")
                : n.code === e.UNRESOLVABLE
                  ? s._(/*BTDS*/ "The destination URL cannot be resolved.")
                  : s._(
                      /*BTDS*/ "An unknown error has occurred checking this URL.",
                    )
              : null;
          }),
          (a.promiseWithURL = function (t) {
            var e = this;
            return r("cachedGraphAPI")(
              o("AdsGraphAPI").get(i.id).search("addestination"),
            )
              .get({ object_url: this.fragment })
              .then(
                function (t) {
                  var n = t && t.data && t.data.length ? t.data[0].url : null;
                  return e.withMutations(function (e) {
                    ((e.url = n), (e.isLoading = !1), (e.xuiError = void 0));
                  });
                },
                function (t) {
                  return e
                    .withMutations(function (e) {
                      e.isLoading = !1;
                    })
                    .set("xuiError", e.$AdsURLValidationView$p_1(t));
                },
              )
              .then(function (e) {
                return e.get("xuiError") || !t
                  ? e
                  : t(e.get("fragment")).then(
                      function () {
                        return e.set("xuiError", void 0);
                      },
                      function (t) {
                        return e.set("xuiError", t);
                      },
                    );
              });
          }),
          n
        );
      })(
        r("immutable").Record({
          fragment: "",
          url: "",
          isLoading: !1,
          xuiError: void 0,
        }),
      );
    l.default = u;
  },
  226,
);
