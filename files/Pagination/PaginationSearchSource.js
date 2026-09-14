__d(
  "PaginationSearchSource",
  [
    "AbstractSearchSource",
    "FBLogger",
    "PagintaionSearchSourceCallbackManager",
    "TokenizeUtil",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
      function t(t) {
        var n;
        return (
          (n = e.call(this) || this),
          (n.$PaginationSearchSource$p_1 = t),
          (n.$PaginationSearchSource$p_2 = {}),
          (n.$PaginationSearchSource$p_3 = new (r(
            "PagintaionSearchSourceCallbackManager",
          ))({
            parseFn: r("TokenizeUtil").parse,
            matchFn: r("TokenizeUtil").isQueryMatch,
          })),
          n
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.searchImpl = function (t, n, o) {
          var e = this,
            a = t || "";
          (a !== "" && this.$PaginationSearchSource$p_3.search(a, n, !0),
            r("promiseDone")(
              this.$PaginationSearchSource$p_1(a),
              function (t) {
                return e.$PaginationSearchSource$p_4(t, a, n);
              },
              function (e) {
                return r("FBLogger")("ads")
                  .catching(e)
                  .warn('unable to load search results for "%s"', a);
              },
            ));
        }),
        (n.$PaginationSearchSource$p_4 = function (t, n, r) {
          if (
            t.length === 0 &&
            !Object.prototype.hasOwnProperty.call(
              this.$PaginationSearchSource$p_2,
              n,
            )
          ) {
            (this.$PaginationSearchSource$p_3.search(n, r),
              (this.$PaginationSearchSource$p_2[n] = 0));
            return;
          }
          t.length !== this.$PaginationSearchSource$p_2[n]
            ? ((this.$PaginationSearchSource$p_2[n] = t.length),
              this.$PaginationSearchSource$p_3.addQueryEntries(t, n, r))
            : this.$PaginationSearchSource$p_3.search(n, r);
        }),
        t
      );
    })(r("AbstractSearchSource"));
    l.default = e;
  },
  98,
);
