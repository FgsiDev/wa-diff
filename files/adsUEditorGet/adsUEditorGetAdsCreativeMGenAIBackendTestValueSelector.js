__d(
  "adsUEditorGetAdsCreativeMGenAIBackendTestValueSelector",
  [
    "adsCreateSelector",
    "adsCreateThunkSelector",
    "adsUEditorAccountSelector",
    "adsUEditorAdObjectsForSelectedAdgroupsSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateThunkSelector")(
        r("adsCreateSelector")(
          [
            r("adsUEditorAccountSelector"),
            r("adsUEditorAdObjectsForSelectedAdgroupsSelector"),
          ],
          function (t, n) {
            var e = n[0],
              r = e.adgroup,
              o = r;
            return { shouldInTest: !1, updatedAdgroupSpec: o };
          },
          { name: i.id },
        ),
      ),
      s = e;
    l.default = s;
  },
  98,
);
