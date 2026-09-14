__d(
  "AdsConnectionObjectDataManager",
  [
    "AdsBaseDataManager",
    "AdsConnectionObjectBatchLoadErrorDataAction",
    "AdsConnectionObjectBatchLoadedDataAction",
    "AdsGraphAPI",
    "GraphAPIPaging",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.loadAllFor = function (t, n) {
            var e = this;
            n.length !== 0 &&
              r("promiseDone")(
                o("AdsGraphAPI")
                  .get(i.id)
                  .adaccount(t)
                  .edge("connectionobjects")
                  .get({ extra_fbids: n.join(","), extra_only: !0 })
                  .then(
                    o("GraphAPIPaging").eachPage(function (t) {
                      return e.$AdsConnectionObjectDataManager$p_1(t.data);
                    }),
                  ),
                function (t) {
                  return e.__processDataArrayResponse(
                    t,
                    n,
                    function (e) {
                      return e.id;
                    },
                    function (t) {
                      return e.__getObjectError(t, null);
                    },
                  );
                },
                function (t) {
                  return n.forEach(function (n) {
                    return e.__handleError(["load"], n, null, t);
                  });
                },
              );
          }),
          (n.loadFor = function (t, n) {
            this.loadAllFor(t, [n]);
          }),
          (n.$AdsConnectionObjectDataManager$p_1 = function (t) {
            var e = new Map();
            (t.forEach(function (t) {
              return e.set(t.id, t);
            }),
              r("AdsConnectionObjectBatchLoadedDataAction").dispatch(
                { connectionObjects: e },
                {
                  line: "64",
                  module: "AdsConnectionObjectDataManager.js",
                  moduleID: i.id,
                },
              ));
          }),
          (n.__onBatchLoaded = function (t) {
            r("AdsConnectionObjectBatchLoadedDataAction").dispatch(
              { connectionObjects: t },
              {
                line: "73",
                module: "AdsConnectionObjectDataManager.js",
                moduleID: i.id,
              },
            );
          }),
          (n.__onBatchLoadError = function (t) {
            r("AdsConnectionObjectBatchLoadErrorDataAction").dispatch(
              { errors: t },
              {
                line: "79",
                module: "AdsConnectionObjectDataManager.js",
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
