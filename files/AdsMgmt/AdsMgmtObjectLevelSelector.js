__d(
  "AdsMgmtObjectLevelSelector",
  [
    "AdsPENavigationUtils",
    "adsCreateSelector",
    "adsPEManageAdsSectionSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
      [r("adsPEManageAdsSectionSelector")],
      function (t) {
        return r(
          "AdsPENavigationUtils",
        ).getAdObjectLevelFromNavSection_TO_BE_DEPRECATED(t);
      },
      { name: i.id },
    );
    l.default = e;
  },
  98,
);
