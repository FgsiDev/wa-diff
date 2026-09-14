__d(
  "AdsPlacePageSetInfoActions",
  [
    "AdsPlacePageSetInfoPageSetsInfoLoadErrorDataAction",
    "AdsPlacePageSetInfoPageSetsInfoLoadSuccessDataAction",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      r("AdsPlacePageSetInfoPageSetsInfoLoadSuccessDataAction").dispatch(
        { pageSetID: e, placePageSetInfo: t },
        { line: "21", module: "AdsPlacePageSetInfoActions.js", moduleID: i.id },
      );
    }
    function s(e, t) {
      r("AdsPlacePageSetInfoPageSetsInfoLoadErrorDataAction").dispatch(
        { pageSetID: e, error: t },
        { line: "28", module: "AdsPlacePageSetInfoActions.js", moduleID: i.id },
      );
    }
    ((l.pageSetsInfoLoadSuccess = e), (l.pageSetsInfoLoadError = s));
  },
  98,
);
