__d(
  "AdsExperimentsLightweightCreativeImageGenPlugin",
  [
    "fbt",
    "AdsAdgroupCreativeAssetGroupsSpecOriginMutators",
    "AdsCreativeGenAITypes",
    "AdsExperimentsLightweightCreativeImageGenStrings",
    "AdsUEditorAdgroupRemoveGenerativeAssetsDataAction",
    "AdsUEditorHostIDs",
    "FBLogger",
    "GeoLink.react",
    "adsExperimentsEligibilityGetMultipleAdgroupsIneligibility",
    "adsExperimentsEligibilityGetMultipleCampaignsWithL3TestIneligibility",
    "immutable",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = {
        getAdObjectLevel: function () {
          return "ad";
        },
        shouldShowDetailThumbnails: !0,
        eligibilityConfig: r("immutable").Map({
          multi_L2_in_L3_test: {
            errorMessage: function () {
              return s._(
                /*BTDS*/ "Make sure your campaign only includes one ad set to run this test.",
              );
            },
            getIneligibleData: r(
              "adsExperimentsEligibilityGetMultipleCampaignsWithL3TestIneligibility",
            ),
            isRecoverable: !1,
            isPublishOnlyCheck: !1,
          },
          non_skinny_ad_set: {
            errorMessage: function () {
              return s._(
                /*BTDS*/ "Make sure your ad set only includes one ad to run this test.",
              );
            },
            getIneligibleData: r(
              "adsExperimentsEligibilityGetMultipleAdgroupsIneligibility",
            ),
            isRecoverable: !1,
            isPublishOnlyCheck: !1,
          },
          no_image_suggestions_selected: {
            errorMessage: function () {
              return s._(
                /*BTDS*/ "You must select at least 1 generated image variation to run this type of A\/B test.",
              );
            },
            getIneligibleData: d,
            isRecoverable: !0,
            isPublishOnlyCheck: !0,
          },
        }),
        getEntryLabelContentOverride: function () {
          return o("AdsExperimentsLightweightCreativeImageGenStrings")
            .LIGHTWEIGHT_CREATIVE_IMAGE_GEN_ENTRY_LABEL;
        },
        getEntryDescriptionContent: function (t) {
          var e = t.isVersionBAU,
            n = t.lightweightABTestContextValue,
            a = n == null ? void 0 : n.creativeImageGen;
          if (e || a == null) return null;
          var i = a.availableImageSuggestionCount,
            l = a.showImageSuggestionModal,
            c = u.jsx(r("GeoLink.react"), {
              onClick: function () {
                l(
                  o("AdsCreativeGenAITypes").GenAIOpenModalActionType
                    .REVIEW_ASSET_FROM_AB_TEST,
                );
              },
              children: s._(/*BTDS*/ "Generate images"),
            });
          return i == null || i === 0
            ? s._(
                /*BTDS*/ "If none are selected, we\u2019ll use all generated image variations. {link}.",
                [s._param("link", c)],
              )
            : s._(
                /*BTDS*/ "If none are selected, we\u2019ll use all {amount} generated image variations. {link}.",
                [s._param("amount", i), s._param("link", c)],
              );
        },
        getLoggingEntryPoint: function () {
          return "LightweightCheckboxImageGeneration";
        },
        getWhichVersionIsBAU: function () {
          return "B";
        },
        hasOptInUXSupportForAdObjectTestRecovery: !0,
        isVisibleForAdvertiser: function () {
          return !1;
        },
        key: "CREATIVE_IMAGE_GEN",
        mutationConfig: {
          clientSideMutationCallback: function (t) {
            var e = t == null ? void 0 : t.adgroups;
            e != null
              ? r("AdsUEditorAdgroupRemoveGenerativeAssetsDataAction").dispatch(
                  {
                    hostID: r("AdsUEditorHostIDs").EDITING,
                    adgroupIDs: e.map(function (e) {
                      var t = e.id;
                      return t;
                    }),
                    removeGasSpecOnly: !0,
                  },
                  {
                    line: "155",
                    module:
                      "AdsExperimentsLightweightCreativeImageGenPlugin.js",
                    moduleID: i.id,
                  },
                )
              : r("FBLogger")(
                  "ads_experiments",
                  "AdsExperimentsLightweightCreativeImageGenPlugin: clientSideMutationCallback",
                ).mustfix(
                  "unexpected null adgroups for lightweight test image gen mutation",
                );
          },
          hasClientSideMutation: function () {
            return !0;
          },
        },
        getName: function () {
          return s._(/*BTDS*/ "AI image generation");
        },
        type: "lightweightABTest",
      };
    function d(e) {
      var t,
        n,
        r = e.adgroup;
      if (r == null) return null;
      var a = r == null ? void 0 : r.creative_asset_groups_spec;
      return o(
        "AdsAdgroupCreativeAssetGroupsSpecOriginMutators",
      ).hasSpecificOrigin(r, "gen_ai") &&
        (a == null ? void 0 : a.groups) != null &&
        ((t = a == null || (n = a.groups) == null ? void 0 : n.size) != null
          ? t
          : 0) > 0
        ? null
        : { adgroupIDs: new Set([r.id]) };
    }
    var m = c;
    l.default = m;
  },
  226,
);
