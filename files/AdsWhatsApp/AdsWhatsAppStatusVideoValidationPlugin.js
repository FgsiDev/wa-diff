__d(
  "AdsWhatsAppStatusVideoValidationPlugin",
  ["AdsVideoValidationMigrationUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        type: "adsVideoValidation",
        key: "whatsAppStatus",
        getErrors: function (t, n) {
          return o("AdsVideoValidationMigrationUtils").validateWhatsAppStatus(
            t,
            n,
          );
        },
        platform: "whatsapp",
        position: "status",
      },
      s = e;
    l.default = s;
  },
  98,
);
