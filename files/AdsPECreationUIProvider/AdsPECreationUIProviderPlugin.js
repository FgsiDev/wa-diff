__d(
  "AdsPECreationUIProviderPlugin",
  ["immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        creationStartLevel: "campaign",
        isCreationOpen: !1,
        isReachFrequencyConfirmDialogOpen: !1,
        quickCreateSource: null,
        quickCreateStarted: !1,
      },
      s = r("immutable").Record(e),
      u = { initialState: s() },
      c = u;
    l.default = c;
  },
  98,
);
