__d(
  "logCTXAutomatedChatEvent",
  ["AdsInterfacesLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      var o,
        a = ((o = {}), (o.event_source = t), (o.adgroup_id = n), o);
      r("AdsInterfacesLogger").log({ eventName: e, data: a });
    }
    l.default = e;
  },
  98,
);
