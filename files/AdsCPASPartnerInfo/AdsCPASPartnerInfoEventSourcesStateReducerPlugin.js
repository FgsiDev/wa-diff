__d(
  "AdsCPASPartnerInfoEventSourcesStateReducerPlugin",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          var e = n.collaborativeAdsPartnerInfo;
          return t
            .set("isPartnerSourcesSelected", e != null)
            .set(
              "selectedPartnerID",
              e ? e.merchant_partner_business_id : null,
            );
        },
      },
      l = e;
    i.default = l;
  },
  66,
);
