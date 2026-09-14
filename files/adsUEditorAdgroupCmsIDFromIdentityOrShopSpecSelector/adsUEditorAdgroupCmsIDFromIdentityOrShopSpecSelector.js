__d(
  "adsUEditorAdgroupCmsIDFromIdentityOrShopSpecSelector",
  [
    "adsCreateSelector",
    "adsUEditorAdgroupCmsIDFromIdentityOrShopSpecSelectorUtils",
    "adsUEditorAdgroupCommerceMerchantSettingsIDFromIdentityLoadObjectSelector",
    "adsUEditorAdgroupShopSpecSelectedShopSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
      [
        o("adsUEditorAdgroupShopSpecSelectedShopSelector")
          .adsUEditorAdgroupShopSpecSelectedShopSelector,
        o(
          "adsUEditorAdgroupCommerceMerchantSettingsIDFromIdentityLoadObjectSelector",
        )
          .adsUEditorAdgroupCommerceMerchantSettingsIDFromIdentityLoadObjectSelector,
      ],
      function (t, n) {
        return o(
          "adsUEditorAdgroupCmsIDFromIdentityOrShopSpecSelectorUtils",
        ).adsUEditorAdgroupCmsIDFromIdentityOrShopSpec(t, n);
      },
      { name: i.id + ".adsUEditorAdgroupCmsIDFromIdentityOrShopSpecSelector" },
    );
    l.adsUEditorAdgroupCmsIDFromIdentityOrShopSpecSelector = e;
  },
  98,
);
