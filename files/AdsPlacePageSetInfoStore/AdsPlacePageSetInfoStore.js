__d(
  "AdsPlacePageSetInfoStore",
  [
    "AdsDataAtom",
    "AdsPlacePageSetDataManager",
    "AdsPlacePageSetInfoPageSetsInfoLoadErrorDataActionFlux",
    "AdsPlacePageSetInfoPageSetsInfoLoadSuccessDataActionFlux",
    "FluxLoadObjectStore",
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
          (n.__getActionTypes = function () {
            return [
              this.getActionTypeStartLoad(),
              o("AdsPlacePageSetInfoPageSetsInfoLoadErrorDataActionFlux")
                .actionType,
              o("AdsPlacePageSetInfoPageSetsInfoLoadSuccessDataActionFlux")
                .actionType,
            ];
          }),
          (n.reduce = function (t, n) {
            var e = n.action;
            switch (e.type) {
              case o("AdsPlacePageSetInfoPageSetsInfoLoadSuccessDataActionFlux")
                .actionType:
                return this.__handleOne(t, e.pageSetID, e.placePageSetInfo);
              case o("AdsPlacePageSetInfoPageSetsInfoLoadErrorDataActionFlux")
                .actionType:
                return this.__handleOne(t, e.pageSetID, e.error);
              default:
                return t;
            }
          }),
          (n.__load = function (t) {
            r("AdsPlacePageSetDataManager").fetchPlacePageSetInfo(t);
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
