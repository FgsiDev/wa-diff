__d(
  "AdsTargetingCustomAudienceFromURLUtils",
  [
    "AdsAddToastCardAction",
    "AdsODAXObjectiveStrings",
    "AdsTargetingAudienceConstants",
    "URIInitDataUtil",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function () {
        return (
          o("URIInitDataUtil").getNavSource() === "ca_success_dialog_create_ad"
        );
      },
      s = function (n) {
        if (e()) {
          var t,
            r,
            o = (t = n.customAudiences) != null ? t : [],
            a = (r = n.objective) != null ? r : null;
          a !== null && o.length > 0 && u(a, o);
        }
      },
      u = function (t, n) {
        var e = o("AdsODAXObjectiveStrings").getObjectiveName(t).toString(),
          a = o(
            "AdsTargetingAudienceConstants",
          ).CA_DEFAULTED_FROM_EXTERNAL_SOURCE_TOAST_HEADER(e),
          l = o(
            "AdsTargetingAudienceConstants",
          ).CA_DEFAULTED_FROM_EXTERNAL_SOURCE_TOAST_BODY(n[0].name || "");
        (n.length > 1 &&
          ((a = o(
            "AdsTargetingAudienceConstants",
          ).MULTIPLE_CA_DEFAULTED_FROM_EXTERNAL_SOURCE_TOAST_HEADER(
            e,
            n.length,
          )),
          (l = o(
            "AdsTargetingAudienceConstants",
          ).MULTIPLE_CA_DEFAULTED_FROM_EXTERNAL_SOURCE_TOAST_BODY)),
          r("AdsAddToastCardAction").dispatch(
            {
              toastCard: {
                id: "custom-audience-toast",
                "data-testid": "custom-audience-toast",
                cardType: "success",
                dismissTimer: 5e3,
                canDismiss: !0,
                header: a,
                bodyText: l,
                maxHeaderLines: 2,
              },
            },
            {
              line: "62",
              module: "AdsTargetingCustomAudienceFromURLUtils.js",
              moduleID: i.id,
            },
          ));
      };
    ((l.isInitiatedFromCASuccessDialog = e),
      (l.showExternalCreationCustomAudienceToast = s),
      (l.dispatchExternalCreationCustomAudienceToast = u));
  },
  98,
);
