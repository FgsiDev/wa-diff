__d(
  "ExternalEventSourceListDataManager",
  [
    "fbt",
    "AdsBaseListDataManager",
    "ExternalEventSourceActions",
    "ExternalEventSourceListActions",
    "ExternalEventSourcesAPI",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e) {
      var t = new Map();
      (e.forEach(function (e) {
        t.set(e.id, e);
      }),
        o("ExternalEventSourceActions").externalEventSourceLoaded(t));
    }
    var u = (function (t) {
        function n() {
          return t.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.loadFor = function (t) {
            var e = this;
            r("promiseDone")(
              o("ExternalEventSourcesAPI").fetch(t),
              function (n) {
                e.__handleSuccess(["load"], t, null, n);
              },
              function (n) {
                e.__handleError(["load"], t, null, n);
              },
            );
          }),
          (a.__onBatchLoaded = function (n) {
            n.forEach(function (t, n) {
              (e(t),
                o(
                  "ExternalEventSourceListActions",
                ).externalEventSourceListLoaded(n, t));
            });
          }),
          (a.__onBatchLoadError = function (t) {
            t.forEach(function (e, t) {
              o(
                "ExternalEventSourceListActions",
              ).externalEventSourceListLoadError(t);
            });
          }),
          (a.__getObjectTypeLabel = function () {
            return s._(/*BTDS*/ "Product catalog");
          }),
          n
        );
      })(r("AdsBaseListDataManager")),
      c = new u(),
      d = c;
    l.default = d;
  },
  226,
);
