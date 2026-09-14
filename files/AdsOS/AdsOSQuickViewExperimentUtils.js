__d(
  "AdsOSQuickViewExperimentUtils",
  [
    "AdsMgmtQuickViewsIDProvider",
    "CurrentAdAccount",
    "Laminar",
    "gkx",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return r("gkx")("10386");
    }
    function s() {
      return r("gkx")("2192");
    }
    function u() {
      return r("gkx")("7642");
    }
    function c() {
      return r("gkx")("8284");
    }
    function d(e) {
      var t = o("react-compiler-runtime").c(3),
        n = o("Laminar").useProvider(r("AdsMgmtQuickViewsIDProvider")),
        a = n.quickViewID,
        i;
      if (t[0] !== a || t[1] !== e) {
        var l,
          s = r("CurrentAdAccount").getID();
        ((i =
          a != null &&
          s != null &&
          ((l = e.get(s).value) == null ||
          (l = l.find(function (e) {
            return e.id === a;
          })) == null
            ? void 0
            : l.quick_view_type) === "actions" &&
          u()),
          (t[0] = a),
          (t[1] = e),
          (t[2] = i));
      } else i = t[2];
      return i;
    }
    ((l.getIsAccountInOSQuickViewActionsRenameWithoutExposure = e),
      (l.getIsAccountInOSQuickViewActionsRename = s),
      (l.getIsAccountInOSQuickViewWithoutExposure = u),
      (l.getIsAccountInOSQuickView = c),
      (l.useIsOSQuickViewActive = d));
  },
  98,
);
