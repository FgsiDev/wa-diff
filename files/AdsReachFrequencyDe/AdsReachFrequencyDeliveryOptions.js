__d(
  "AdsReachFrequencyDeliveryOptions",
  ["fbt", "keyMirror"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = r("keyMirror")({
        STANDARD: null,
        SEQUENCING: null,
        TIME_BASED: null,
      }),
      u = {
        STANDARD: s._(/*BTDS*/ "Standard"),
        SEQUENCING: s._(/*BTDS*/ "Sequenced"),
        TIME_BASED: s._(/*BTDS*/ "Scheduled"),
      };
    ((l.AdsReachFrequencyDeliveryOptions = e),
      (l.AdsReachFrequencyDeliveryOptionDetails = u));
  },
  226,
);
