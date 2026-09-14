__d(
  "AdsAdgroupCreativeFlexMutators",
  [
    "AdsAdgroupCreativeAssetGroupsSpecMutators",
    "AdsAdgroupCreativeAssetGroupsSpecOriginMutators",
    "AdsAdgroupRecordAccessors",
    "AdsCreativeFlexGKCheckUtils",
    "AdsCreativeFlexSpecCheckUtils",
    "AdsInterfacesLogger",
    "AdsUEditorAdgroupMediaSourcingSpecMutators",
    "immutable",
    "uuidv4",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = r(
        "AdsAdgroupRecordAccessors",
      ).creative.media_sourcing_spec.push_metadata_ids.get(e);
      return t == null || t.size === 0
        ? e
        : r(
            "AdsAdgroupRecordAccessors",
          ).creative.media_sourcing_spec.push_metadata_ids.set(
            r("immutable").List(),
            e,
          );
    }
    function s(e, t) {
      var n,
        a = e.creative_asset_groups_spec;
      if (
        o("AdsAdgroupCreativeAssetGroupsSpecOriginMutators").hasAnyOrigins(e, [
          "gen_ai",
        ])
      ) {
        if (
          !o("AdsAdgroupCreativeAssetGroupsSpecMutators").doesCagHaveGroupUuid(
            a,
          )
        ) {
          var i;
          r("AdsInterfacesLogger").logOnce({
            eventName: "creative_flex_debug",
            data:
              ((i = {}),
              (i.adgroup_id = r("AdsAdgroupRecordAccessors").id.get(e)),
              (i.event_source = "genai_missing_uuid"),
              (i.subsequent_data = JSON.stringify({ callsite: t })),
              i),
          });
        }
        return e;
      }
      return (o(
        "AdsAdgroupCreativeAssetGroupsSpecOriginMutators",
      ).hasAnyOrigins(
        e,
        o(
          "AdsUEditorAdgroupMediaSourcingSpecMutators",
        ).CREATIVE_FLEX_AD_CAG_ORIGINS.toArray(),
      ) &&
        o("AdsAdgroupCreativeAssetGroupsSpecMutators").doesCagHaveGroupUuid(
          a,
        )) ||
        !o("AdsCreativeFlexSpecCheckUtils").isCreativeFlexOptedInAd(e)
        ? e
        : (r("AdsInterfacesLogger").logOnce({
            eventName: "creative_flex_debug",
            data:
              ((n = {}),
              (n.adgroup_id = r("AdsAdgroupRecordAccessors").id.get(e)),
              (n.event_source = "inject_cf_cag"),
              (n.subsequent_data = JSON.stringify({
                callsite: t,
                has_cf_origin: o(
                  "AdsAdgroupCreativeAssetGroupsSpecOriginMutators",
                ).hasAnyOrigins(
                  e,
                  o(
                    "AdsUEditorAdgroupMediaSourcingSpecMutators",
                  ).CREATIVE_FLEX_AD_CAG_ORIGINS.toArray(),
                ),
                has_group_uuid: o(
                  "AdsAdgroupCreativeAssetGroupsSpecMutators",
                ).doesCagHaveGroupUuid(a),
              })),
              n),
          }),
          o(
            "AdsCreativeFlexGKCheckUtils",
          ).isEligibleForCreativeFlexUnknownBucketFixEnhanced()
            ? o(
                "AdsUEditorAdgroupMediaSourcingSpecMutators",
              ).maySetCreativeFlexInCAG(e, r("uuidv4")().toString())
            : e);
    }
    ((l.adsAdgroupClearPushMetadataIdsMutator = e),
      (l.ensureCreativeFlexCAGAfterGenAIClear = s));
  },
  98,
);
