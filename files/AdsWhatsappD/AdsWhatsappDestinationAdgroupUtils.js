__d(
  "AdsWhatsappDestinationAdgroupUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      var t,
        n =
          (t = e.creative) == null || (t = t.asset_feed_spec) == null
            ? void 0
            : t.call_to_action_types;
      return n == null
        ? !1
        : n.some(function (e) {
            return e === "WHATSAPP_MESSAGE";
          });
    }
    i.hasWhatsappCTAinAFS = e;
  },
  66,
);
