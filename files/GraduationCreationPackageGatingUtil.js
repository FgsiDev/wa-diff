__d(
  "GraduationCreationPackageGatingUtil",
  ["CurrentAdAccount", "gkx", "qex", "requireDeferred"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("requireDeferred")("LWIGraduationFalcoEvent").__setRef(
      "GraduationCreationPackageGatingUtil",
    );
    function s() {
      return r("gkx")("15220");
    }
    function u(t) {
      var n,
        o = r("CurrentAdAccount").getID(),
        a = (n = r("qex")._("3349")) != null ? n : !1;
      return (
        o != null &&
          t != null &&
          e.onReady(function (e) {
            e.log({
              ad_account_id: o,
              entry_point: "am_lwi_graduation_objective_selector_bau",
              event: "impression",
              event_data: {
                creation_package_type: t,
                is_am_deeplink_qe_enabled: a ? "true" : "false",
              },
              event_side: "client_side",
              surface: "creation_package",
            });
          }),
        a
      );
    }
    function c() {
      return r("gkx")("2359");
    }
    ((l.enableLWIBaselineAudience = s),
      (l.shouldHideForBAUTransition = u),
      (l.enableGraduationExpansionToInternationalLowSpenders = c));
  },
  98,
);
