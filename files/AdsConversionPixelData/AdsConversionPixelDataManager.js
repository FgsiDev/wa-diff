__d(
  "AdsConversionPixelDataManager",
  [
    "fbt",
    "AdsBaseDataManager",
    "AdsConversionPixelBatchLoadErrorDataAction",
    "AdsConversionPixelBatchLoadedDataAction",
    "AdsGraphAPI",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = ["id", "js_pixel", "last_firing_time", "name", "tag"],
      u = (function (t) {
        function n() {
          return t.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.loadAll = function (t) {
            var e = this;
            t.forEach(function (t) {
              return e.load(t);
            });
          }),
          (a.load = function (n) {
            var t = this;
            r("promiseDone")(
              o("AdsGraphAPI")
                .get(i.id)
                .object("offsitePixel", n)
                .batched()
                .get({ fields: e }),
              function (e) {
                return t.__handleSuccess(["load"], n, null, e);
              },
              function (e) {
                return t.__handleError(["load"], n, null, e);
              },
            );
          }),
          (a.__onBatchLoaded = function (t) {
            r("AdsConversionPixelBatchLoadedDataAction").dispatch(
              { conversionPixels: t },
              {
                line: "53",
                module: "AdsConversionPixelDataManager.js",
                moduleID: i.id,
              },
            );
          }),
          (a.__onBatchLoadError = function (t) {
            var e = this,
              n = new Map();
            (t.forEach(function (t, r) {
              n.set(r, e.__getObjectError(r, t));
            }),
              r("AdsConversionPixelBatchLoadErrorDataAction").dispatch(
                { errors: n },
                {
                  line: "63",
                  module: "AdsConversionPixelDataManager.js",
                  moduleID: i.id,
                },
              ));
          }),
          (a.__getObjectTypeLabel = function () {
            return s._(/*BTDS*/ "Ads pixel");
          }),
          n
        );
      })(r("AdsBaseDataManager")),
      c = new u(),
      d = c;
    l.default = d;
  },
  226,
);
