__d(
  "adsValidationAccountDataSelector",
  ["AdsAccountStore", "adsCreateSelector"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [r("AdsAccountStore").getSelectedAccount],
        function () {
          var e = r("AdsAccountStore").getSelectedAccount();
          if (!e.hasValueWithoutError()) return null;
          var t = e.getValueEnforcing();
          return { account: t };
        },
        { name: i.id + ".adsValidationAccountDataSelector" },
      ),
      s = e;
    l.default = s;
  },
  98,
);
