__d(
  "AdsPreviewsWhatsAppChannelPlugin",
  [
    "fbt",
    "ix",
    "AdsPlacementAssetCustomizationTypes",
    "AdsPreviewsPluginCommon",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e = babelHelpers.extends({}, r("AdsPreviewsPluginCommon"), {
        type: "previews",
        key: "previews/whatsapp_channel",
        apiFormat: "WHATSAPP_CHANNEL",
        customizationGroup: r("AdsPlacementAssetCustomizationTypes")
          .AdsAssetCustomizationGroups.WHATSAPP_CHANNEL,
        loadingPlaceholderSize: { width: 320, height: 387 },
        name: s._(/*BTDS*/ "WhatsApp Channel"),
        positionName: s._(/*BTDS*/ "WhatsApp Channel"),
        positionDetails: null,
        icon: u("279341"),
      }),
      c = e;
    l.default = c;
  },
  226,
);
