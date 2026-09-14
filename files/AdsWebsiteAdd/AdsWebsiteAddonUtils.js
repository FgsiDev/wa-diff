__d(
  "AdsWebsiteAddonUtils",
  [
    "AdsBulkValueUtils",
    "AdsCallAddonUtils",
    "AdsInstantBookUtils",
    "AdsLeadGenAdGroupUtils",
    "AdsWebsiteExtensionTypeUtils",
    "ClickToMessageCTXMDOptimizationExpansionFeatureGating",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, r) {
      var a,
        i = o("AdsLeadGenAdGroupUtils").getLeadGenFormId(e),
        l = (a = t.get(e.id)) == null ? void 0 : a.checkboxValue;
      return (l != null ? l : i != null) === !0
        ? "instant_form"
        : o(
              "AdsWebsiteExtensionTypeUtils",
            ).isMessagingAppsExtensionTypeSelected(e) &&
            (r == null
              ? void 0
              : r.some(function (e) {
                  return e.websiteExtensionType === "messaging_apps";
                })) === !0 &&
            o(
              "ClickToMessageCTXMDOptimizationExpansionFeatureGating",
            ).enableUnifiedCreationWTXMDL1(null, !1)
          ? "messaging_apps"
          : o("AdsWebsiteExtensionTypeUtils").isWhatsAppExtensionTypeSelected(e)
            ? "whatsapp"
            : o(
                  "AdsWebsiteExtensionTypeUtils",
                ).isInstagramExtensionTypeSelected(e)
              ? "instagram_direct"
              : o(
                    "AdsWebsiteExtensionTypeUtils",
                  ).isMessengerExtensionTypeSelected(e)
                ? "messenger"
                : o("AdsCallAddonUtils").isCallAddonSelected(e) ||
                    o("AdsBulkValueUtils").getUniformValueOrDefault(n, null) !=
                      null
                  ? "phone_call"
                  : o("AdsInstantBookUtils").isInstantBookSelected(e)
                    ? "instant_book"
                    : "none";
    }
    l.getExtensionTypeForAdgroupAdObjects = e;
  },
  98,
);
