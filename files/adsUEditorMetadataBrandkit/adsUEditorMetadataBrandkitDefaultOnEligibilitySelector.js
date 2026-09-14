__d(
  "adsUEditorMetadataBrandkitDefaultOnEligibilitySelector",
  ["LoadObject", "adsCreateSelector", "adsUEditorAccountIDSelector"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Map(),
      s = function (n, r) {
        e.set(n, r);
      },
      u = function (n) {
        n != null ? e.delete(n) : e.clear();
      },
      c = r("adsCreateSelector")(
        [r("adsUEditorAccountIDSelector")],
        function (n) {
          if (n == null || !e.has(n))
            return r("LoadObject").empty({ creatorModuleID: i.id });
          var t = e.get(n);
          return r("LoadObject").withValue(t, { creatorModuleID: i.id });
        },
        {
          name:
            i.id + ".adsUEditorMetadataBrandkitDefaultOnEligibilitySelector",
        },
      );
    ((l.setBrandKitDefaultEligibility = s),
      (l.clearBrandKitDefaultEligibility = u),
      (l.adsUEditorMetadataBrandkitDefaultOnEligibilitySelector = c));
  },
  98,
);
