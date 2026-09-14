__d(
  "AdsMessengerInboxVideoValidationPlugin",
  ["AdsVideoValidationMigrationUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        type: "adsVideoValidation",
        key: "messengerInbox",
        getErrors: function (t, n) {
          return o("AdsVideoValidationMigrationUtils").validateMessengerInbox(
            t,
            n,
          );
        },
        platform: "messenger",
        position: "messenger_home",
      },
      s = e;
    l.default = s;
  },
  98,
);
