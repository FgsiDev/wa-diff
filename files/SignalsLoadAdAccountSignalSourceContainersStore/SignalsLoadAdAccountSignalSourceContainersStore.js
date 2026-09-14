__d(
  "SignalsLoadAdAccountSignalSourceContainersStore",
  [
    "ReverseInteropStoreBase",
    "SignalsConversionDataManager",
    "SignalsLoadAdAccountSignalSourceContainersStoreSource",
    "adsCreateStoreThunkSelector",
    "memoize",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "SignalsLoadAdAccountSignalSourceContainersStore.DATA_UPDATED",
      s = (function (t) {
        function n() {
          var n,
            o = new (r(
              "SignalsLoadAdAccountSignalSourceContainersStoreSource",
            ))();
          return (
            (n = t.call(this, o, e) || this),
            (n.fluxGetSelector = r("memoize")(function () {
              return r("adsCreateStoreThunkSelector")(u, function (e) {
                return u.get(e);
              });
            })),
            n
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.get = function (t) {
            var e = this.getSingleField(t, "signal_containers");
            return e.map(function (e) {
              return o(
                "SignalsConversionDataManager",
              ).SignalsLoadAdAccountSignalSourceContainersPayloadHandler({
                signal_containers: e,
              });
            });
          }),
          n
        );
      })(r("ReverseInteropStoreBase"));
    s.__moduleID = i.id;
    var u = new s(),
      c = u;
    l.default = c;
  },
  98,
);
