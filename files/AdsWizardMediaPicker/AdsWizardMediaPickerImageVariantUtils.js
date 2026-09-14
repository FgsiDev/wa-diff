__d(
  "AdsWizardMediaPickerImageVariantUtils",
  [
    "AdsImageIDClasses",
    "AdsWizardMediaPickerMultiUploadUtils",
    "CurrentAdAccount",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return (
        e instanceof o("AdsImageIDClasses").AdsAccountImageID ||
        e instanceof o("AdsImageIDClasses").AdsBusinessImageID
      );
    }
    function s(e) {
      return e instanceof o("AdsImageIDClasses").AdsAccountImageID
        ? e.getAccountID()
        : r("CurrentAdAccount").getID();
    }
    function u(e, t) {
      return t === !0 ? !1 : e ? r("gkx")("14313") : r("gkx")("11629");
    }
    function c(e) {
      return d(
        o("AdsWizardMediaPickerMultiUploadUtils").isEligibleForMultiUpload(
          "silent",
        ),
        e,
        "silent",
      );
    }
    function d(e, t, n) {
      return e && u(n === "silent" ? "silent" : void 0, t);
    }
    ((l.isVariantEligibleImageID = e),
      (l.getVariantFetchAccountID = s),
      (l.isEligibleForImageRecompOnAM = u),
      (l.isImageSizeVariationsEligible = c),
      (l.isImageRecompFetcherEligible = d));
  },
  98,
);
