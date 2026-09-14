__d(
  "AdsReachFrequencyInsteamPlacementVideoRequirementsDialogShownReducerPlugins",
  ["AdsPlacementPlatformUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          return babelHelpers.extends({}, t, {
            isDialogTriggered: n.isVideoRequirementsDialogShown,
          });
        },
      },
      s = {
        reduce: function (t, n) {
          var e = n.params.target_spec;
          return babelHelpers.extends({}, t, {
            isFacebookInstreamSelected: o(
              "AdsPlacementPlatformUtils",
            ).hasAnyInstreamVideoPlacement(e),
          });
        },
      };
    ((l.setDialogShown = e), (l.isInstreamSelected = s));
  },
  98,
);
