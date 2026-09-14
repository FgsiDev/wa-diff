__d(
  "adsCallToActionFilterTypesByDynamicAdVoice",
  ["CTAsAllowedPerAdVoice"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return t == null
        ? e
        : e.filter(function (e) {
            return r("CTAsAllowedPerAdVoice")[t].includes(e.name);
          });
    }
    l.default = e;
  },
  98,
);
