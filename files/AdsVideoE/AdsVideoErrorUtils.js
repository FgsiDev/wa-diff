__d(
  "AdsVideoErrorUtils",
  [
    "AdsBulkValueUtils",
    "AdsBuyingTypes",
    "AdsError",
    "AdsPlacementAssetValidationUtils",
    "AdsUniformValue",
    "AdsVideoBuyingStoreUtils",
    "AdsVideoValidation",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, a, i, l, s) {
      var u = o("AdsBulkValueUtils").getUniformValue(
          e,
          r("AdsBuyingTypes").AUCTION,
        ),
        d = new Map();
      return (
        i
          .map(function (e) {
            return o(
              "AdsVideoValidation",
            ).getValidationMapByPlacementForVideoList(
              l,
              e,
              a instanceof r("AdsUniformValue") ? a.getValue() : void 0,
              u,
              n,
              s,
            );
          })
          .forEach(function (e) {
            e.forEach(function (e, t) {
              var n = d.get(t) || [];
              (e.forEach(function (e) {
                n.some(function (t) {
                  return t.key === e.key;
                }) || n.push(e);
              }),
                d.set(t, n));
            });
          }),
        c(t, l, d),
        d
      );
    }
    function s(e, t, n, a, i, l) {
      var s = [],
        u = o("AdsBulkValueUtils").getUniformValueOrDefault(
          n,
          r("AdsBuyingTypes").AUCTION,
        );
      l.forEach(function (n) {
        return (s = s.concat(
          o("AdsVideoValidation").validateVideoForPlacementBuyingTypeObjective(
            t,
            n,
            i instanceof r("AdsUniformValue") ? i.getValue() : void 0,
            u,
            e,
          ),
        ));
      });
      var c = o("AdsVideoBuyingStoreUtils").getVideoBuyingVideoErrors(
        t,
        a.getValues(),
      );
      return s.concat(c);
    }
    function u(e, t, n, a, i, l, u) {
      var c = l
        ? o("AdsPlacementAssetValidationUtils").getVideoErrors(
            t,
            l,
            i instanceof r("AdsUniformValue") ? i.getValue() : void 0,
          )
        : s(e, t, n, a, i, u);
      return c.filter(function (e) {
        return e.level === r("AdsError").Level.WARN;
      });
    }
    function c(e, t, n) {
      o("AdsVideoBuyingStoreUtils").addVideoBuyingVideoListErrors(
        t,
        n,
        e.getValues(),
      );
    }
    ((l.getVideoListErrors = e),
      (l.getSingleVideoErrors = s),
      (l.getNewlyUploadedVideoWarnErrors = u),
      (l.updateOptimizedVideoError = c));
  },
  98,
);
