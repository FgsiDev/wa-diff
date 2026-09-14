__d(
  "adsPagesInAuthorizationSelector",
  ["AdsAccountStore", "adsCreateSelector"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [r("AdsAccountStore").getSelectedAccount],
        function (t) {
          return t.map(function (e) {
            return e.pages_in_authorizations;
          });
        },
        { name: i.id + ".adsPagesInAuthorizationSelector" },
      ),
      s = e;
    l.default = s;
  },
  98,
);
