__d(
  "AdsCreativeContainerUIContextRecord",
  ["AdsCreativeToolChangeSetRecord", "immutable"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("immutable").Record({
        draftChanges: new (n("AdsCreativeToolChangeSetRecord"))(),
        toolsEdited: n("immutable").Set([]),
      }),
      l = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(e),
      s = l;
    i.default = s;
  },
  66,
);
