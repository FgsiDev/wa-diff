__d(
  "AdsMgmtAdAccountUserSettingsAPIErrorReducerPlugin",
  [
    "invariant",
    "AdsAccountStore",
    "LaminarReducerWithFluxSelectors",
    "LoadObject",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = {
        reduce: r("LaminarReducerWithFluxSelectors")(
          { accountID: r("AdsAccountStore").getSelectedAccountIDX },
          function (e, t, n) {
            var o = n.accountID;
            if (t.userSettingsData == null) return e;
            var a = t.userSettingsData,
              l = t.fieldSet;
            return (
              a.__field_set === l || s(0, 16517),
              e.set(
                { accountID: o, fieldSet: l },
                r("LoadObject").withValue(a, { creatorModuleID: i.id }),
              )
            );
          },
        ),
      },
      u = e;
    l.default = u;
  },
  98,
);
