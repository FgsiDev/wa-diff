__d(
  "AdsInstagramMediaDataManagerV2",
  [
    "AdsBaseDataManager",
    "AdsGraphAPI",
    "AdsInstagramMediaLoadErrorDataV2Action",
    "AdsInstagramMediaLoadedDataV2Action",
    "ShadowIGMediaFields",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
        function t() {
          for (var t, n = arguments.length, a = new Array(n), l = 0; l < n; l++)
            a[l] = arguments[l];
          return (
            (t = e.call.apply(e, [this].concat(a)) || this),
            (t.loadFromV2ID = function (e) {
              return o("AdsGraphAPI")
                .get(i.id)
                .object("instagram_object", e)
                .batched()
                .get({
                  fields: r("ShadowIGMediaFields"),
                  metric: ["video_views"],
                })
                .then(function (e) {
                  return e;
                });
            }),
            babelHelpers.assertThisInitialized(t) ||
              babelHelpers.assertThisInitialized(t)
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.loadAll = function (t) {
            var e = this;
            t.forEach(function (t) {
              return e.load(t);
            });
          }),
          (n.load = function (t) {
            var e = this;
            r("promiseDone")(
              o("AdsGraphAPI")
                .get(i.id)
                .object("instagram_object", t)
                .batched()
                .get({
                  fields: r("ShadowIGMediaFields"),
                  metric: ["video_views"],
                }),
              function (n) {
                return e.__handleSuccess(["load"], t, null, n);
              },
              function (n) {
                return e.__handleError(["load"], t, null, n);
              },
            );
          }),
          (n.__onBatchLoaded = function (t) {
            r("AdsInstagramMediaLoadedDataV2Action").dispatch(
              { specs: t },
              {
                line: "56",
                module: "AdsInstagramMediaDataManagerV2.js",
                moduleID: i.id,
              },
            );
          }),
          (n.__onBatchLoadError = function (t) {
            r("AdsInstagramMediaLoadErrorDataV2Action").dispatch(
              { errors: t },
              {
                line: "60",
                module: "AdsInstagramMediaDataManagerV2.js",
                moduleID: i.id,
              },
            );
          }),
          t
        );
      })(r("AdsBaseDataManager")),
      s = new e();
    l.default = s;
  },
  98,
);
