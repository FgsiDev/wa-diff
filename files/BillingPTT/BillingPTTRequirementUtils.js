__d(
  "BillingPTTRequirementUtils",
  [
    "BillingError",
    "BillingErrorUtils",
    "BillingWizardRootUPLogger",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield e();
          return (
            t != null &&
              u(n, t.getIsPTTRequired, t.errorMessage, t.sourceState),
            n
          );
        })),
        s.apply(this, arguments)
      );
    }
    function u(e, t, n, a) {
      if (!(e != null && e !== "") && t()) {
        var i = new (r("BillingError"))(
          n,
          "required parameter is missing or invalid",
          {
            event_action: "ptt_generation",
            event_result: "failure",
            event_side: "client_side",
          },
          { action: "mutate", document_name: "ptt_generation" },
          void 0,
          {
            errorCode:
              o("BillingErrorUtils").BILLING_ERRORS__PTT_GENERATION_FAILED,
            sourceState: a,
          },
        );
        throw (
          r("BillingWizardRootUPLogger").logBillingPayloadError(
            i.type,
            i.errorPayload,
          ),
          (i.logged = !0),
          i
        );
      }
    }
    ((l.generatePTTWithRequirement = e), (l.enforcePTTRequirement = u));
  },
  98,
);
