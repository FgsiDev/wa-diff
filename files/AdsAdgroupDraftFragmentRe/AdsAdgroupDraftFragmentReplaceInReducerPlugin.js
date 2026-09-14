__d(
  "AdsAdgroupDraftFragmentReplaceInReducerPlugin",
  [
    "AdsMutators",
    "AdsRegexp",
    "adsAdgroupDraftFragmentCreateReducer",
    "isFalsey",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: r("adsAdgroupDraftFragmentCreateReducer")(
          function (e) {
            return e;
          },
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.ids, function (e) {
              return e.updateIn(t.path, function (e) {
                return r("isFalsey")(e)
                  ? e
                  : o("AdsRegexp").getReplacedText(
                      e,
                      t.toFind,
                      t.replaceWith,
                      "ig",
                    );
              });
            });
          },
          function (e) {
            return e;
          },
          function (e) {
            return e;
          },
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
