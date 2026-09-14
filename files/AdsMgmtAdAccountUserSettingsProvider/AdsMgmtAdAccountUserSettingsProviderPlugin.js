__d(
  "AdsMgmtAdAccountUserSettingsProviderPlugin",
  [
    "invariant",
    "AdsDataAtom",
    "AdsGraphAPI",
    "AdsMgmtAccountUserSettingsLoadedDataAction",
    "AdsMgmtAdAccountUserSettingsFields",
    "AdsPECreateSettingsDataManager",
    "GraphAPIFieldUtils",
    "LoadObjectMap",
    "promiseDone",
    "promiseLoadObjectsFromKeys",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = {};
    function c(e) {
      var t = e.accountID,
        n = e.fieldSet;
      r("AdsMgmtAdAccountUserSettingsFields")[n] != null || s(0, 14701, n);
      var a = {
        fields: [
          o("GraphAPIFieldUtils").getFieldWithSubfields(
            "user_settings",
            r("AdsMgmtAdAccountUserSettingsFields")[n],
          ),
        ],
      };
      return o("AdsGraphAPI")
        .get(i.id)
        .adaccount(t)
        .get(a)
        .then(function (e) {
          var r = e.user_settings;
          return r
            ? ((r.__field_set = n), r)
            : (u[t] ||
                ((u[t] = !0),
                o("AdsPECreateSettingsDataManager").createUserSettings(t)),
              { __field_set: void 0 });
        });
    }
    var d = {
        initialState: function (n) {
          return r("LoadObjectMap").createKeyed(
            function (t) {
              (n(function (e) {
                return e.setLoading(t);
              }),
                r("promiseDone")(
                  r("promiseLoadObjectsFromKeys")(t, c)
                    .then(function (e) {
                      return (
                        n(function (t) {
                          return t.merge(e);
                        }),
                        e
                      );
                    })
                    .then(function (t) {
                      t.forEach(function (t, n) {
                        (e || (e = r("AdsDataAtom"))).addPostDispatchCallback(
                          function () {
                            r(
                              "AdsMgmtAccountUserSettingsLoadedDataAction",
                            ).dispatch(
                              {
                                accountID: n.accountID,
                                fieldSet: n.fieldSet,
                                userSettings: t.getValue(),
                              },
                              {
                                line: "172",
                                module:
                                  "AdsMgmtAdAccountUserSettingsProviderPlugin.js",
                                moduleID: i.id,
                              },
                            );
                          },
                        );
                      });
                    }),
                ));
            },
            function (e) {
              return e.accountID + ":" + e.fieldSet;
            },
          );
        },
      },
      m = d;
    l.default = m;
  },
  98,
);
