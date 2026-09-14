__d(
  "OmniPromoAdsAdsManagerUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      switch (e) {
        case "QR":
          return "QR";
        case "CODE128":
          return "CODE128";
        case "CODE128B":
          return "CODE128B";
        case "CODE93":
          return "CODE93";
        case "DATAMATRIX":
          return "DATAMATRIX";
        case "PDF417":
          return "PDF417";
        default:
          return null;
      }
    }
    i.getOfferDiscountBarcodeType = e;
  },
  66,
);
