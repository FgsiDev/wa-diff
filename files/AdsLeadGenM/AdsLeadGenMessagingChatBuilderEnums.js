__d(
  "AdsLeadGenMessagingChatBuilderEnums",
  ["fbt"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e) {
      return e === "NONE" || e === "VIEW_WEBSITE" || e === "CALL_BUSINESS"
        ? e
        : e === "MESSAGE_BUSINESS" ||
            e === "DOWNLOAD" ||
            e === "SCHEDULE_APPOINTMENT" ||
            e === "VIEW_ON_FACEBOOK" ||
            e === "PROMO_CODE" ||
            e === "WHATSAPP" ||
            e === "P2B_MESSENGER" ||
            e === "BOOK_ON_WEBSITE"
          ? "CURRENT_CTA"
          : (function () {
              throw Error(
                "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                  e,
              );
            })();
    }
    var u = {
      NONE: s._(/*BTDS*/ "No CTA"),
      VIEW_WEBSITE: s._(/*BTDS*/ "View website"),
      CALL_BUSINESS: s._(/*BTDS*/ "Call now"),
      CURRENT_CTA: s._(/*BTDS*/ "Current CTA"),
    };
    ((l.convertButtonTypeToCTAValue = e), (l.CTA_OVERRIDE_SELECTOR_LABELS = u));
  },
  226,
);
