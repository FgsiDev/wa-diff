__d(
  "adsUEditorAdgroupDynamicFlexibleIdentityShopSelectorExtraDataSelector",
  [
    "adsCreateSelector",
    "adsUEditorAdPlainObjectsForSelectedAdgroupsSelector",
    "adsUEditorAdgroupDynamicFlexibleIdentityShopSelectorExtraDataSelectorUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
      [r("adsUEditorAdPlainObjectsForSelectedAdgroupsSelector")],
      function (t) {
        return o(
          "adsUEditorAdgroupDynamicFlexibleIdentityShopSelectorExtraDataSelectorUtils",
        ).targetingCountry(t);
      },
      { name: i.id + ".targetingCountrySelector" },
    );
    l.targetingCountrySelector = e;
  },
  98,
);
