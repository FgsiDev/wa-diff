__d(
  "AdsPageSetStore",
  [
    "AdsDataAtom",
    "AdsFlatPageSetLoadErrorActionFlux",
    "AdsFlatPageSetLoadedActionFlux",
    "AdsPlacePageSetDataManager",
    "FluxLoadObjectStore",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.__load = function (t) {
            var e = t.accountID,
              n = t.dlaParentPageID;
            r("promiseDone")(
              r("AdsPlacePageSetDataManager").getOrCreateFlatPageSetID(e, n),
            );
          }),
          (n.reduce = function (t, n) {
            var e = n.action;
            switch (e.type) {
              case o("AdsFlatPageSetLoadedActionFlux").actionType:
                return this.__handleOne(t, e.key, e.pageSetID);
              case o("AdsFlatPageSetLoadErrorActionFlux").actionType:
                return this.__handleOne(t, e.key, e.error);
              default:
                return t;
            }
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
