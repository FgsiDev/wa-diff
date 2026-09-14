__d(
  "adsExperimentsLightweightTestTextGenMutator",
  [
    "AdsAdgroupRecordAccessors",
    "AdsAssetFeedUtils",
    "AdsDCODegreesOfFreedomUtils",
    "AdsExperimentsFunnelLogger",
    "AdsMutators",
    "AdsUEditorAdgroupAssetFeedMutators",
    "FBLogger",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
        var t = ["bodies"],
          n = e;
        for (var r of t) n = s(n, r);
        return (
          o("AdsDCODegreesOfFreedomUtils").isDOFAdgroupWithUniqueDOFAssets(n) &&
            (n = o(
              "AdsUEditorAdgroupAssetFeedMutators",
            ).convertFromDOFAssetFeedSpec(
              n,
              o("AdsAssetFeedUtils").isDofWithImageAdgroupFromRecord(n),
            )),
          n
        );
      });
    }
    function s(e, t) {
      var n, o;
      if (
        ((n = e.creative) == null || (n = n.asset_feed_spec) == null
          ? void 0
          : n[t]) == null
      )
        return e;
      var a = e.creative.asset_feed_spec[t].some(function (e) {
        var t = e.get("asset_source");
        return (
          e.get("text_gen_input_text") != null ||
          (t != null &&
            typeof t == "string" &&
            t.startsWith("TEXT_GEN_SUGGESTION"))
        );
      });
      if (!a) {
        var i;
        return (
          r("FBLogger")("ads_experiments").warn(
            "Expected text gen fields to be present for lightweight test mutation. id: %s, speccount: %s",
            e.id,
            (i = e.creative) == null ||
              (i = i.asset_feed_spec) == null ||
              (i = i[t]) == null
              ? void 0
              : i.size,
          ),
          e
        );
      }
      var l =
        (o = e.creative) == null ||
        (o = o.asset_feed_spec) == null ||
        (o = o[t]) == null
          ? void 0
          : o.filter(function (e) {
              var t = e.get("asset_source");
              return (
                e.get("text_gen_input_text") == null &&
                !(
                  t != null &&
                  typeof t == "string" &&
                  t.startsWith("TEXT_GEN_SUGGESTION")
                )
              );
            });
      return (
        r("AdsExperimentsFunnelLogger")
          .withoutAccountID()
          .setAction("LIGHTWEIGHT_MUTATION_APPLIED")
          .addActionPayload("lightweightType", "CREATIVE_PRIMARY_TEXT_GEN")
          .addActionPayload("studyLevelAdObjectID", e.id)
          .log(),
        r("AdsAdgroupRecordAccessors").creative.asset_feed_spec[t].set(l, e)
      );
    }
    l.default = e;
  },
  98,
);
