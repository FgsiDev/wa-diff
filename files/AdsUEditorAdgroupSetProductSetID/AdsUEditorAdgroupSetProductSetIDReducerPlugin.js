__d(
  "AdsUEditorAdgroupSetProductSetIDReducerPlugin",
  [
    "AdsAdgroupCreativeAssetGroupsSpecMutators",
    "AdsAdgroupRecordAccessors",
    "AdsAdgroupSemanticFields",
    "AdsDAAplusCImageBackgroundGenerationDefaultOnMutator",
    "AdsMutators",
    "AdsPCAUnifiedFormatEligibilityUtils",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSetProductSetIDDataActionFlux",
    "FBLogger",
    "adsUEditorAccountSelector",
    "adsUEditorGetShouldEnableDACreativeFlexByDefaultSelector",
    "cr:9793",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {
            account: r("adsUEditorAccountSelector"),
            isCreativeFlexDefaultOn: r(
              "adsUEditorGetShouldEnableDACreativeFlexByDefaultSelector",
            ),
            parentData: o(
              "AdsUEditorAdgroupSelectors",
            ).adObjectsList.mapTransform(
              o("AdsUEditorAdgroupAdObjectsUtils").getParentAdObjectsExtraData,
            ),
          },
          function (e, t, a) {
            var i = a.account,
              l = a.isCreativeFlexDefaultOn,
              u = a.parentData;
            return o("AdsMutators").mutateEach(
              e,
              t.adgroupIDs,
              function (e, a) {
                var c,
                  d = r("nullthrows")(u.get(a)),
                  m = d.campaign,
                  p = d.specPlugin,
                  _ = e;
                if (
                  ((_ = r("AdsAdgroupSemanticFields").productSetID.set(
                    p,
                    _,
                    t.productSetID,
                  )),
                  o(
                    "AdsPCAUnifiedFormatEligibilityUtils",
                  ).isMediaSourcePCAUnifiedFormat(
                    (c = e.metadata) == null ? void 0 : c.adgroup_media_source,
                  ) &&
                    o(
                      "AdsPCAUnifiedFormatEligibilityUtils",
                    ).isGKEnableForUnifiedMediaSetupFlow() &&
                    (_ = o(
                      "AdsAdgroupCreativeAssetGroupsSpecMutators",
                    ).updateFormatSpecBasedOnCreativeSpec(_, "catalog")),
                  !r(
                    "AdsAdgroupSemanticFields",
                  ).catalogAssetFormatOption.isSupported(p, _))
                )
                  return (
                    r("FBLogger")("dpa").mustfix(
                      "tried to add a product set id to an adgroup that does not support catalogAssetFormatOption",
                    ),
                    _
                  );
                if (
                  (t.productSetID !== null &&
                    t.formatOption === "single_image") ||
                  t.formatOption === "carousel_images_multi_items"
                ) {
                  var f = r("nullthrows")(u.get(e.id)),
                    g = f.campaign,
                    h = f.campaignGroup;
                  o(
                    "AdsDAAplusCImageBackgroundGenerationDefaultOnMutator",
                  ).isAdFormatEligibleForDAImageBackgroundGenDefaultOn({
                    campaign: g,
                    campaignGroup: h,
                    adgroup: _,
                  }) &&
                    (_ = o(
                      "AdsDAAplusCImageBackgroundGenerationDefaultOnMutator",
                    ).adsDAAplusCImageBackgroundGenerationDefaultOnMutator(_));
                }
                if (
                  ((_ =
                    t.formatOption === "single_image"
                      ? o("AdsMutators").chain(
                          r(
                            "AdsAdgroupRecordAccessors",
                          ).creative.object_story_spec.template_data.force_single_link.set(
                            !0,
                          ),
                          function (e) {
                            return r(
                              "AdsAdgroupSemanticFields",
                            ).catalogAssetFormatOption.delete(p, e);
                          },
                        )(_)
                      : r(
                          "AdsAdgroupSemanticFields",
                        ).catalogAssetFormatOption.set(p, _, t.formatOption)),
                  n("cr:9793") != null)
                ) {
                  var y,
                    C,
                    b,
                    v,
                    S,
                    R,
                    L,
                    E = (y = _.creative) == null ? void 0 : y.object_story_spec,
                    k =
                      (C =
                        (b =
                          (v =
                            E == null || (S = E.link_data) == null
                              ? void 0
                              : S.link) != null
                            ? v
                            : E == null ||
                                (R = E.video_data) == null ||
                                (R = R.call_to_action) == null ||
                                (R = R.value) == null
                              ? void 0
                              : R.link) != null
                          ? b
                          : (L = _.creative) == null
                            ? void 0
                            : L.link_url) != null
                        ? C
                        : null;
                  n("cr:9793")(
                    _,
                    t.productSetID,
                    m == null ? void 0 : m.id,
                    k,
                    i,
                    l === !0,
                    t.hostID,
                    s,
                  );
                }
                return _;
              },
            );
          },
          o("AdsUEditorAdgroupSetProductSetIDDataActionFlux").actionType,
        ),
      },
      s = "set_product_set_id_reducer",
      u = e;
    l.default = u;
  },
  98,
);
