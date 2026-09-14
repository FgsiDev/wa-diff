__d(
  "AdsConversionsWhatsAppAdgroupCreativePlugin",
  [
    "AdsAPIObjectives",
    "AdsDefaultAdgroupCreativePlugin",
    "AdsPromotedObjectTypes",
    "AdsWhatsAppAdgroupCreativePluginCommon",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends(
        {},
        r("AdsDefaultAdgroupCreativePlugin"),
        r("AdsWhatsAppAdgroupCreativePluginCommon"),
        {
          type: "adgroup/creative",
          key: "conversions/whatsapp",
          pivots: {
            objective: r("AdsAPIObjectives").CONVERSIONS,
            promotedObjectType: r("AdsPromotedObjectTypes").WHATSAPP,
          },
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
