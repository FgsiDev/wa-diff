__d(
  "AdsSuggestedProductTagsProviderPlugin",
  [
    "AdsSuggestedProductTagsUtils",
    "LoadObjectMap",
    "promiseDone",
    "promiseLoadObjectsFromKeys",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t, n) {
        (t(function (e) {
          return e.setLoading(n);
        }),
          r("promiseDone")(
            r("promiseLoadObjectsFromKeys")(
              n,
              o("AdsSuggestedProductTagsUtils").fetchProductTagsApiCall,
            ).then(function (e) {
              t(function (t) {
                return t.merge(e);
              });
            }),
          ));
      },
      s = function (t) {
        var e;
        return [
          t.imageHashId,
          (e = t.destinationLinkUrl) != null ? e : "",
          t.pictureFBID,
          t.videoFBID,
        ].join(",");
      },
      u = {
        initialState: function (n) {
          return r("LoadObjectMap").createKeyed(
            function (t) {
              return e(n, t);
            },
            function (e) {
              return s(e);
            },
          );
        },
      },
      c = u;
    l.default = c;
  },
  98,
);
