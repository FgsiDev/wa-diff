__d(
  "isMessageMarketingPhoneNumberVirtualNumberDisplayNameUnapproved",
  ["WhatsAppNameVerificationSummaryStatus"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t;
      if (e == null) return !1;
      var n =
        (t = r("WhatsAppNameVerificationSummaryStatus").cast(
          e.displayNameVerificationRequestStatus,
        )) != null
          ? t
          : "NONE";
      return e.isVirtualPhoneNumber === !0 && n !== "APPROVED";
    }
    l.default = e;
  },
  98,
);
