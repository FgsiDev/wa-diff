__d(
  "WhatsAppViolationReviewUtils",
  ["fbt"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = function (t, n) {
      switch (t) {
        case 8:
          return s._(
            /*BTDS*/ "transacting in the sale or use of adult products or services",
          );
        case 5:
          return n === 86
            ? s._(/*BTDS*/ "messaging about alcohol in countries not allowed")
            : s._(/*BTDS*/ "transacting in the sale of alcohol");
        case 2:
        case 88:
          return s._(
            /*BTDS*/ "transacting in the sale of illegal, prescription, or recreational drugs",
          );
        case 80:
          return n === 86
            ? s._(
                /*BTDS*/ "messaging about over the counter drugs in countries not allowed",
              )
            : s._(/*BTDS*/ "transacting in the sale of over the counter drugs");
        case 6:
          return n === 86
            ? s._(
                /*BTDS*/ "messaging about real money gambling, games of skill, or lotteries in countries without permission",
              )
            : s._(
                /*BTDS*/ "transacting in or facilitating real money gambling, games of skill, or lotteries",
              );
        case 10:
          return s._(
            /*BTDS*/ "transacting in the sale of unsafe ingestible supplements",
          );
        case 40:
          return s._(/*BTDS*/ "data scraping");
        case 32:
          return s._(/*BTDS*/ "spam or other impermissible communication");
        case 55:
        case 48:
        case 49:
        case 50:
        case 51:
        case 52:
        case 53:
        case 81:
        case 82:
        case 84:
        case 89:
          return s._(/*BTDS*/ "breach of Terms of Acceptable Use");
      }
      return "";
    };
    l.getWhatsAppViolationReason = e;
  },
  226,
);
