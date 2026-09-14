__d(
  "CallAdsConfigurationUtils",
  [
    "AdsClickToCallFeatureGating",
    "AdsInterfacesLogger",
    "AdsUEditorCallDestinationTypeMutators",
    "CallAdsWithWhatsAppCallUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, r, o) {
      var a = e;
      return ((a = s(a, t, n, r, o)), a);
    }
    function s(e, t, n, a, i) {
      var l = o(
        "CallAdsWithWhatsAppCallUtils",
      ).isCallAdsWithWhatsAppCallEligible(t, n, a, i, !1);
      if (l) {
        var s,
          c = u();
        if (
          (r("AdsInterfacesLogger").log({
            eventName: "call_ads_call_destination_type_defaulting",
            data:
              ((s = {}),
              (s.adgroup_id = e.id),
              (s.page_id = t == null ? void 0 : t.id),
              (s.objective = n),
              (s.new_value = c),
              (s.old_value = null),
              s),
          }),
          c === "WHATSAPP")
        ) {
          var d = o(
            "CallAdsWithWhatsAppCallUtils",
          ).getPageInfoForCallAdsWithWhatsAppCall(t);
          return o(
            "AdsUEditorCallDestinationTypeMutators",
          ).setWhatsAppCallDestinationWithWhatsAppNumber(
            e,
            d.validPageWhatsAppNumber,
          );
        }
        return o(
          "AdsUEditorCallDestinationTypeMutators",
        ).setCallDestinationType(e, c);
      }
      return o(
        "AdsUEditorCallDestinationTypeMutators",
      ).clearCallDestinationType(e);
    }
    function u() {
      return o("AdsClickToCallFeatureGating").shouldDefaultToWhatsApp()
        ? "WHATSAPP"
        : "PHONE";
    }
    function c(e) {
      var t;
      return (t = e.creative) == null ||
        (t = t.asset_feed_spec) == null ||
        (t = t.call_ads_configuration) == null
        ? void 0
        : t.call_destination_type;
    }
    ((l.maybeDefaultCallAdsConfiguration = e),
      (l.maybeDefaultCallDestinationType = s),
      (l.getDefaultCallDestinationType = u),
      (l.getCallDestinationType = c));
  },
  98,
);
