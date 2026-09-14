__d(
  "adsUEditorIsAdgroupEligibleForCtxAdvantageCatalogSelector",
  [
    "ClickToWhatsAppFeatureGating",
    "adsCreateSelector",
    "adsUEditorAdPlainObjectsForSelectedAdgroupsSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [r("adsUEditorAdPlainObjectsForSelectedAdgroupsSelector")],
        function (t) {
          return t.every(function (e) {
            var t = e.campaign;
            return o(
              "ClickToWhatsAppFeatureGating",
            ).isEligibleForCTXAdvantageCatalog(t.destination_type, !1);
          });
        },
        {
          name:
            i.id + ".adsUEditorIsAdgroupEligibleForCtxAdvantageCatalogSelector",
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
