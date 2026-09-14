__d(
  "AdsTargetingAccountControlInfoGAPISelector",
  [
    "AdsAccountStore",
    "AdsTargetingAccountControlInfoProvider",
    "adsCreateSelector",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function () {
        var e = !r("gkx")("804");
        return e;
      },
      s = r("adsCreateSelector")(
        [
          r("AdsAccountStore").getSelectedAccount,
          r("AdsTargetingAccountControlInfoProvider").toFluxSelector(),
        ],
        function (n, r) {
          if (e()) return {};
          if (!n.hasValue()) return {};
          var t = r.get(n.getValueEnforcing().account_id);
          return t.hasValue() ? t.getValueEnforcing() : {};
        },
        { name: i.id + ".AdsTargetingAccountControlInfoGAPISelector" },
      ),
      u = s;
    l.default = u;
  },
  98,
);
