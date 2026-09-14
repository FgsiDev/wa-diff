__d(
  "AdsExperimentsLightweightCreativePrimaryTextGenPlugin",
  [
    "fbt",
    "AdsExperimentsLightweightCreativePrimaryTextGenStrings",
    "adsExperimentsEligibilityGetMultipleAdgroupsIneligibility",
    "adsExperimentsEligibilityGetMultipleCampaignsWithL3TestIneligibility",
    "adsExperimentsLightweightTestTextGenMutator",
    "adsUEditorTextGenDefaultAddEligibilitySelector",
    "gkx",
    "immutable",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = {
      getAdObjectLevel: function () {
        return "ad";
      },
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
        no_text_suggestions_selected: {
          errorMessage: function () {
            return s._(
              /*BTDS*/ "Select up to 5 text variations to run this test.",
            );
          },
          getIneligibleData: u,
          isRecoverable: !0,
          isPublishOnlyCheck: !0,
        },
      }),
      getEntryLabelContentOverride: function () {
        return o("AdsExperimentsLightweightCreativePrimaryTextGenStrings")
          .LIGHTWEIGHT_CREATIVE_PRIMARY_TEXT_GEN_ENTRY_LABEL;
      },
      getEntryDescriptionContent: function (t) {
        var e = t.isVersionBAU;
        return e
          ? null
          : s._(
              /*BTDS*/ "You can select up to 5 text variations for the test. If none are selected, we'll use the variations shown above.",
            );
      },
      getLoggingEntryPoint: function () {
        return "LightweightCheckboxPrimaryTextGeneration";
      },
      getWhichVersionIsBAU: function () {
        return "B";
      },
      hasOptInUXSupportForAdObjectTestRecovery: !0,
      isVisibleForAdvertiser: function () {
        var e = r(
          "adsUEditorTextGenDefaultAddEligibilitySelector",
        )().getValue();
        if (e == null) return !1;
        var t =
          r("gkx")("8193") ||
          r("gkx")("8194") ||
          e.hasTextGenRevenueInLast30Days === !1;
        return t;
      },
      key: "CREATIVE_PRIMARY_TEXT_GEN",
      mutationConfig: {
        getAdgroupMutator: function (t, n) {
          return r("adsExperimentsLightweightTestTextGenMutator")(t, n);
        },
        hasClientSideMutation: function () {
          return !0;
        },
      },
      getName: function () {
        return s._(/*BTDS*/ "Text Generation");
      },
      type: "lightweightABTest",
    };
    function u(e) {
      var t,
        n = e.adgroup;
      if (n == null) return null;
      var r =
        (t = n.creative) == null ||
        (t = t.asset_feed_spec) == null ||
        (t = t.bodies) == null
          ? void 0
          : t.some(function (e) {
              return e.get("asset_source") != null;
            });
      return r !== !0 ? { adgroupIDs: new Set([n.id]) } : null;
    }
    var c = e;
    l.default = c;
  },
  226,
);
