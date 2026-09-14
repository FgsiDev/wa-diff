__d(
  "adsUEditorAdgroupConnectedSourcesBrandEligibilitySelector",
  [
    "AdCampaignDestination",
    "AdsCreativeGenAIEligibilityUtils",
    "AdsMetadataBrandKitUtils",
    "AdsMgmtAssetPickerMediaTypeProvider",
    "AdsUEditorMediaPickerMediaFormat",
    "AdsUEditorMessagingDestinationUtils",
    "ClickToMessageCTDFeatureGating",
    "MediaPickerComponentKey",
    "adsCreateSelector",
    "adsUEditorAccountSelector",
    "adsUEditorAdObjectsLoadObjectForSelectedAdgroupsSelector",
    "adsUEditorAdgroupConnectedSourcesEligibilitySelector",
    "adsUEditorAdgroupIsVideoSelectedSelector",
    "adsUEditorIsEligibleForCTMCatalogProductSelector",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
      [
        r("adsUEditorAccountSelector"),
        r("adsUEditorAdObjectsLoadObjectForSelectedAdgroupsSelector"),
        r("adsUEditorAdgroupIsVideoSelectedSelector"),
        r("AdsMgmtAssetPickerMediaTypeProvider").toFluxSelector(),
        o("adsUEditorAdgroupConnectedSourcesEligibilitySelector")
          .adsUEditorAdgroupConnectedSourcesEligibilitySelector,
        o("adsUEditorIsEligibleForCTMCatalogProductSelector")
          .adsUEditorAdgroupIsSMCEligibleSelector,
      ],
      function (t, n, a, i, l, s) {
        var e;
        if (!n.isDone() || !n.hasValue()) return !1;
        var u = n.getValueEnforcing(),
          c =
            ((e = i.get(r("MediaPickerComponentKey").DEFAULT)) == null
              ? void 0
              : e.mediaPickerFormat) ===
            r("AdsUEditorMediaPickerMediaFormat").VIDEO_PICKER,
          d = !1;
        if (u != null && (u == null ? void 0 : u[0]) != null) {
          var m,
            p,
            _ = u[0],
            f =
              _ == null || (m = _.campaign) == null
                ? void 0
                : m.destination_type,
            g =
              _ == null || (p = _.adgroup) == null || (p = p.creative) == null
                ? void 0
                : p.call_to_action_type,
            h = o("AdsUEditorMessagingDestinationUtils").isCTMAd(
              f != null ? f : r("AdCampaignDestination").UNDEFINED,
              u,
              g != null ? g : "NO_BUTTON",
            );
          d = s && h;
        }
        return (
          !a &&
          !c &&
          l &&
          u.length > 0 &&
          u[0] != null &&
          o("AdsCreativeGenAIEligibilityUtils").isGenAIEligibleInMediaPicker(
            t,
            u[0],
            !0,
          ) &&
          u.every(function (e) {
            var t = e.adgroup,
              n = e.campaign,
              r = e.campaignGroup;
            return t != null && n != null && r != null
              ? o("AdsMetadataBrandKitUtils").isEligibleForBrandKit(n, t, r)
              : !1;
          }) &&
          !(d && r("gkx")("4181")) &&
          !u.some(function (e) {
            var t = e.campaign;
            return (
              (t == null ? void 0 : t.destination_type) ===
                r("AdCampaignDestination").INSTAGRAM_DIRECT &&
              o(
                "ClickToMessageCTDFeatureGating",
              ).enableCTDProductExtensionsIGPlacement(!0)
            );
          })
        );
      },
      {
        name:
          i.id + ".adsUEditorAdgroupConnectedSourcesBrandEligibilitySelector",
      },
    );
    l.adsUEditorAdgroupConnectedSourcesBrandEligibilitySelector = e;
  },
  98,
);
