__d(
  "AdsPredictionObjectStore",
  [
    "AdsDataAtom",
    "AdsPredictionBatchLoadErrorDataActionFlux",
    "AdsPredictionBatchLoadedDataActionFlux",
    "AdsPredictionDataManager",
    "FluxLoadObjectStore",
    "adsCreateStoreThunkSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (function (e) {
        function t() {
          for (var t, n = arguments.length, o = new Array(n), a = 0; a < n; a++)
            o[a] = arguments[a];
          return (
            (t = e.call.apply(e, [this].concat(o)) || this),
            (t.getAllSelector = r("adsCreateStoreThunkSelector")(
              babelHelpers.assertThisInitialized(t),
              function (e) {
                return t.getAll(e);
              },
            )),
            (t.getSelector = r("adsCreateStoreThunkSelector")(
              babelHelpers.assertThisInitialized(t),
              function (e) {
                return t.get(e);
              },
            )),
            babelHelpers.assertThisInitialized(t) ||
              babelHelpers.assertThisInitialized(t)
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.__getActionTypes = function () {
            return [
              this.getActionTypeStartLoad(),
              o("AdsPredictionBatchLoadErrorDataActionFlux").actionType,
              o("AdsPredictionBatchLoadedDataActionFlux").actionType,
            ];
          }),
          (n.reduce = function (t, n) {
            var e = n.action;
            switch (e.type) {
              case o("AdsPredictionBatchLoadedDataActionFlux").actionType:
                return this.__handleMap(t, e.predictions);
              case o("AdsPredictionBatchLoadErrorDataActionFlux").actionType:
                return this.__handleMap(t, e.errors);
              default:
                return t;
            }
          }),
          (n.__load = function (t) {
            r("AdsPredictionDataManager").load(t);
          }),
          t
        );
      })(r("FluxLoadObjectStore"));
    s.__moduleID = i.id;
    var u = new s(e || (e = r("AdsDataAtom")));
    l.default = u;
  },
  98,
);
