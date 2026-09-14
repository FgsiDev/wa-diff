__d(
  "AdsUEditorAdgroupSetImageAndCropsReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsAdgroupSetMediaReducerUtils",
    "AdsCreativeGenAIBaseAssetUtils",
    "AdsMutators",
    "AdsPageStore",
    "AdsSFMediaPickerDataProvider",
    "AdsTargetingConstants",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSetImageAndCropsDataActionFlux",
    "AdsValidationConsts",
    "CapaUtils",
    "ShopAdsOnsiteDestinationsMaybeUpdateAdgroupProvider",
    "adsUEditorAccountSelector",
    "adsUEditorAdgroupUniversalStorefrontsFromShopSpecOrIdentitySelector",
    "adsUEditorCampaignGroupPromoAdDefaultOptinStatusSelector",
    "adsUEditorGetShouldEnableMusicOnReelsInSingleImageByDefaultGetValueSelector",
    "immutable",
    "musicOnReelsOptOutDefaultStatus",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {
            account: r("adsUEditorAccountSelector"),
            getShouldEnableMusicByDefault: r(
              "adsUEditorGetShouldEnableMusicOnReelsInSingleImageByDefaultGetValueSelector",
            ),
            getPage: r("AdsPageStore").getSelector,
            mediaPickerData: r("AdsSFMediaPickerDataProvider").toFluxSelector(),
            parentData: o(
              "AdsUEditorAdgroupSelectors",
            ).adObjectsList.mapTransform(
              o("AdsUEditorAdgroupAdObjectsUtils").getParentAdObjectsExtraData,
            ),
            promoAdDefaultOptinStatus: r(
              "adsUEditorCampaignGroupPromoAdDefaultOptinStatusSelector",
            ),
            onsiteDestinations: r(
              "ShopAdsOnsiteDestinationsMaybeUpdateAdgroupProvider",
            ).toFluxSelector(),
            storefronts: o(
              "adsUEditorAdgroupUniversalStorefrontsFromShopSpecOrIdentitySelector",
            )
              .adsUEditorAdgroupStorefrontsFromShopSpecOrIdentityUniformValueSelector,
          },
          function (e, t, n) {
            var a,
              i = n.account,
              l = n.getPage,
              s = n.getShouldEnableMusicByDefault,
              u = n.mediaPickerData,
              c = n.onsiteDestinations,
              d = n.parentData,
              m = n.promoAdDefaultOptinStatus,
              p = n.storefronts,
              _ = (
                (a = s == null ? void 0 : s()) != null
                  ? a
                  : o("musicOnReelsOptOutDefaultStatus")
                      .MUSIC_ON_REELS_OPT_OUT_DEFAULT_STATUS
              ).singleImage.shouldOptIn;
            return o("AdsMutators").mutateEach(
              e,
              t.adgroupIDs,
              function (e, n) {
                var a,
                  s,
                  f,
                  g,
                  h,
                  y,
                  C,
                  b,
                  v,
                  S,
                  R,
                  L,
                  E = o(
                    "AdsCreativeGenAIBaseAssetUtils",
                  ).getBaseAssetImageSpecFromAdgroup(e),
                  k = o(
                    "AdsAdgroupSetMediaReducerUtils",
                  ).getAdsSetImageAndCropsMutator(
                    t,
                    i,
                    l,
                    d,
                    n,
                    E,
                    _,
                    m,
                    p != null ? (p == null ? void 0 : p.getValue()) : null,
                    c,
                  )(e),
                  I = (a = d.get(n)) == null ? void 0 : a.campaign,
                  T = I != null && r("CapaUtils").isCapaL0EnabledInCampaign(I);
                if (!T) return k;
                var D =
                    t.imageHash != null && t.imageHash !== ""
                      ? t.imageHash
                      : t.imageURL,
                  x =
                    D != null &&
                    (s =
                      u == null || (f = u.audiencePersonaChangeSets) == null
                        ? void 0
                        : f.get(D)) != null
                      ? s
                      : null,
                  $ = I == null ? void 0 : I.targeting,
                  P = e.creative_audience_pairing_persona,
                  N = P == null ? void 0 : P.age_min,
                  M = P == null ? void 0 : P.age_max,
                  w =
                    P == null || (g = P.genders) == null || g.first == null
                      ? void 0
                      : g.first(),
                  A =
                    (h =
                      (y =
                        (C = x == null ? void 0 : x.ageMin) != null
                          ? C
                          : typeof N == "number"
                            ? N
                            : null) != null
                        ? y
                        : $ == null
                          ? void 0
                          : $.age_min) != null
                      ? h
                      : r("AdsValidationConsts").minAgeDefault,
                  F =
                    (b =
                      (v =
                        (S = x == null ? void 0 : x.ageMax) != null
                          ? S
                          : typeof M == "number"
                            ? M
                            : null) != null
                        ? v
                        : $ == null
                          ? void 0
                          : $.age_max) != null
                      ? b
                      : r("AdsValidationConsts").maxAge,
                  O =
                    (R =
                      (L = x == null ? void 0 : x.genders) != null ? L : w) !=
                    null
                      ? R
                      : o("AdsTargetingConstants").GENDERS.All;
                return o("AdsMutators").chain(
                  r(
                    "AdsAdgroupRecordAccessors",
                  ).creative_audience_pairing_persona.age_min.set(A),
                  r(
                    "AdsAdgroupRecordAccessors",
                  ).creative_audience_pairing_persona.age_max.set(F),
                  r(
                    "AdsAdgroupRecordAccessors",
                  ).creative_audience_pairing_persona.genders.set(
                    r("immutable").List([O]),
                  ),
                )(k);
              },
            );
          },
          o("AdsUEditorAdgroupSetImageAndCropsDataActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
