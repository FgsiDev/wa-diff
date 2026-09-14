__d(
  "adsUEditorAdgroupWebsiteMediaExtensionEligibilitySelector",
  [
    "AdsAPIAdgroupRecordUtils",
    "AdsAPIObjectives",
    "AdsAPlusCSCJUtils",
    "AdsAutomaticFlowUtils",
    "AdsMetadataConnectedSourcesUtils",
    "AdsSensitiveVerticalUtils",
    "AdsUEditorSelectors",
    "ApiAdObjectTypes",
    "adsCreateSelector",
    "adsGetUniformValueSelector",
    "adsUEditorAdPlainObjectsForSelectedAdgroupsSelector",
    "gkx",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsGetUniformValueSelector")(
        o("AdsUEditorSelectors").campaignGroup.bulkByAccessorToJS(function (e) {
          return e.objective;
        }),
        r("AdsAPIObjectives").NONE,
      ),
      s = r("adsCreateSelector")(
        [r("adsUEditorAdPlainObjectsForSelectedAdgroupsSelector"), e],
        function (t, n) {
          if (t.length === 0) return !1;
          var e = t[0],
            a = e.adgroup,
            i = e.campaign,
            l = e.campaignGroup,
            s = r("justknobx")._("896"),
            u = !1;
          if (
            (s
              ? (u = o(
                  "AdsMetadataConnectedSourcesUtils",
                ).isEligibleForWebsiteMediaByCampaignAndAdgroup(i, l, a))
              : (u =
                  n === r("AdsAPIObjectives").OUTCOME_TRAFFIC ||
                  n === r("AdsAPIObjectives").OUTCOME_SALES ||
                  n === r("AdsAPIObjectives").LINK_CLICKS),
            o(
              "AdsSensitiveVerticalUtils",
            ).isAdAccountInPharmaOrSensitiveVertical() ||
              o("AdsSensitiveVerticalUtils").isAdAccountLuxuryVertical() ||
              !u)
          )
            return !1;
          var c = r("gkx")("7613");
          if (c && o("AdsAPIAdgroupRecordUtils").isExistingPostAd(a)) {
            var d,
              m,
              p =
                (a == null || (d = a.creative) == null
                  ? void 0
                  : d.object_type) === r("ApiAdObjectTypes").PHOTO ||
                (a == null || (m = a.creative) == null
                  ? void 0
                  : m.object_type) === r("ApiAdObjectTypes").VIDEO;
            if (!p) return !1;
          } else if (
            !o("AdsAutomaticFlowUtils").isStaticSingleImageOrVideoFormat(a)
          )
            return !1;
          return !0;
        },
        {
          name: i.id + ".adsUEditorAdgroupWebsiteMediaEligibilityNoGKSelector",
        },
      ),
      u = r("adsCreateSelector")(
        [s],
        function (t) {
          return t && o("AdsAPlusCSCJUtils").passShowDestinationBlurbsGK();
        },
        {
          name:
            i.id + ".adsUEditorAdgroupWebsiteMediaExtensionEligibilitySelector",
        },
      ),
      c = r("adsCreateSelector")(
        [s],
        function (t) {
          return (
            t && o("AdsAPlusCSCJUtils").passShowDestinationBlurbsGK("silent")
          );
        },
        {
          name:
            i.id +
            ".adsUEditorAdgroupWebsiteMediaExtensionEligibilitySilentGKSelector",
        },
      );
    ((l.adsUEditorAdgroupWebsiteMediaExtensionEligibilitySelector = u),
      (l.adsUEditorAdgroupWebsiteMediaExtensionEligibilitySilentGKSelector =
        c));
  },
  98,
);
