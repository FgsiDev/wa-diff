__d(
  "AdsPECreateSettingsDataManager",
  ["AdsAccountSettingsCreateFinishedDataAction", "AdsGraphAPI", "promiseDone"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      r("promiseDone")(
        o("AdsGraphAPI").get(i.id).adaccount(e).edge("user_settings").post(),
        function (t) {
          r("AdsAccountSettingsCreateFinishedDataAction").dispatch(
            { accountID: e, settingsID: t.id },
            {
              line: "25",
              module: "AdsPECreateSettingsDataManager.js",
              moduleID: i.id,
            },
          );
        },
        function (e) {},
      );
    }
    l.createUserSettings = e;
  },
  98,
);
