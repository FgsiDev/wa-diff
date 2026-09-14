__d(
  "AdsPartnershipAdsOrganicPlacementsSpecMutators",
  [
    "AdsAdgroupRecordAccessors",
    "AdsUEditorAdgroupMediaSourcingSpecMutators",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = r(
        "AdsAdgroupRecordAccessors",
      ).creative.media_sourcing_spec.posts.get(e);
      if (n == null || n.size !== 1) return e;
      var a = n.get(0);
      if (a == null) return e;
      var i = o(
        "AdsUEditorAdgroupMediaSourcingSpecMutators",
      ).convertPlacementCustomizationsDataToPlacementCustomizationsSpec(t);
      return r(
        "AdsAdgroupRecordAccessors",
      ).creative.media_sourcing_spec.posts.set(
        r("immutable").List([
          i == null || i.length === 0
            ? a.delete("placement_customizations")
            : a.set("placement_customizations", i),
        ]),
        e,
      );
    }
    l.setPartnershipAdsOrganicPostPlacementCustomizations = e;
  },
  98,
);
