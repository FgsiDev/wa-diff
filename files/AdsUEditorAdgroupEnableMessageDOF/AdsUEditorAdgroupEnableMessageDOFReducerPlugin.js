__d(
  "AdsUEditorAdgroupEnableMessageDOFReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsAdgroupUnifiedCreativeAPIMigrationUtils",
    "AdsAssetFeedMutationUtils",
    "AdsAssetFeedUtils",
    "AdsDynamicAdMultiTextUtils",
    "AdsMultiMediaUtils",
    "AdsMutators",
    "AdsUEditorAdgroupAssetFeedMutators",
    "AdsUEditorAdgroupEnableMessageDOFDataActionFlux",
    "AdsUEditorAdgroupMultiMediaSpecMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
    "AdsUnifiedCreativeAPIFields",
    "FBLogger",
    "adsConvertAdObjectRecordToPlainJS",
    "adsUEditorIsAdgroupMultiUploadEligibleSelector",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {
            plugins: o("AdsUEditorAdgroupSelectors").adObjectsList.mapTransform(
              o("AdsUEditorAdgroupSpecPathPluginAdObjectsUtils")
                .getAdgroupSpecPathPlugin,
            ),
            isMultiUploadEligible: o(
              "adsUEditorIsAdgroupMultiUploadEligibleSelector",
            ).adsUEditorIsAdgroupMSSMultiTextEligibleSelector,
          },
          function (e, t, n) {
            var a = n.isMultiUploadEligible,
              i = n.plugins;
            return o("AdsMutators").mutateEach(
              e,
              t.adgroupIDs,
              function (e, n) {
                var l,
                  s = e;
                if (a === !0) {
                  var u;
                  return (
                    (s = o(
                      "AdsUEditorAdgroupMultiMediaSpecMutators",
                    ).maySetMultiTextInMSSForMultiMediaAtIndex(
                      s,
                      o("AdsMultiMediaUtils").MultiMediaTextType.MESSAGE,
                      (u = t.message) != null ? u : "",
                      1,
                    )),
                    s
                  );
                }
                var c = r("adsConvertAdObjectRecordToPlainJS")(s),
                  d = o(
                    "AdsDynamicAdMultiTextUtils",
                  ).isEligibleDynamicAdForMultiText(s);
                if (
                  o("AdsAssetFeedUtils").isAdgroupUsingAssetFeedFromRecord(s) &&
                  !o("AdsAssetFeedUtils").isPACAdgroupFromRecord(s) &&
                  !o("AdsAssetFeedUtils").isAdgroupUsingOnlyOnsiteDestinations(
                    c,
                  ) &&
                  !d &&
                  !o("AdsAssetFeedUtils").isClickToMultiDestAds(s)
                )
                  return (
                    r("FBLogger")("ads-dof").mustfix(
                      "Unexpected to enable DOF message on adgroup using asset feed",
                    ),
                    s
                  );
                if (o("AdsAssetFeedUtils").isPACAdgroupFromRecord(s))
                  return o("AdsAssetFeedMutationUtils").setAssetFieldAtIndex(
                    s,
                    i.get(s.id),
                    r("AdsUnifiedCreativeAPIFields").message,
                    1,
                    "text",
                    "",
                    !0,
                  );
                if (d) {
                  var m,
                    p,
                    _,
                    f,
                    g,
                    h,
                    y,
                    C =
                      ((m = s.creative) == null ||
                      (m = m.asset_feed_spec) == null
                        ? void 0
                        : m.optimization_type) != null,
                    b = s;
                  C ||
                    (b = o(
                      "AdsUEditorAdgroupAssetFeedMutators",
                    ).convertToDOFAssetFeedSpec(s, !1));
                  var v = r("immutable")
                      .Map()
                      .set("text", (p = t.message) != null ? p : ""),
                    S =
                      (_ = r(
                        "AdsAdgroupRecordAccessors",
                      ).creative.asset_feed_spec.bodies.get(b)) != null
                        ? _
                        : r("immutable").List(),
                    R =
                      (f =
                        (g =
                          (h = b) == null ||
                          (h = h.creative) == null ||
                          (h = h.object_story_spec) == null ||
                          (h = h.template_data) == null
                            ? void 0
                            : h.message) != null
                          ? g
                          : (y = b) == null || (y = y.creative) == null
                            ? void 0
                            : y.body) != null
                        ? f
                        : "",
                    L =
                      S.size === 0
                        ? r("immutable").List([
                            r("immutable").Map().set("text", R),
                          ])
                        : S;
                  return r(
                    "AdsAdgroupRecordAccessors",
                  ).creative.asset_feed_spec.bodies.set(L.set(L.size, v), b);
                }
                var E = o(
                  "AdsUEditorAdgroupAssetFeedMutators",
                ).convertToDOFAssetFeedSpec(s, !1);
                if (
                  o(
                    "AdsAdgroupUnifiedCreativeAPIMigrationUtils",
                  ).isUnifiedCreativePhotoData(E)
                ) {
                  var k,
                    I,
                    T = r("immutable")
                      .Map()
                      .set("text", (k = t.message) != null ? k : ""),
                    D =
                      (I = r(
                        "AdsAdgroupRecordAccessors",
                      ).creative.asset_feed_spec.bodies.get(E)) != null
                        ? I
                        : r("immutable").List([T]);
                  return r(
                    "AdsAdgroupRecordAccessors",
                  ).creative.asset_feed_spec.bodies.set(D.set(1, T), E);
                }
                return (
                  (E = o("AdsAssetFeedMutationUtils").setAssetFieldAtIndex(
                    E,
                    i.get(s.id),
                    r("AdsUnifiedCreativeAPIFields").message,
                    1,
                    "text",
                    (l = t.message) != null ? l : "",
                    !0,
                  )),
                  t.assetSource != null
                    ? o("AdsAssetFeedMutationUtils").setAssetFieldAtIndex(
                        E,
                        i.get(s.id),
                        r("AdsUnifiedCreativeAPIFields").message,
                        1,
                        "asset_source",
                        t.assetSource,
                      )
                    : E
                );
              },
            );
          },
          o("AdsUEditorAdgroupEnableMessageDOFDataActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
