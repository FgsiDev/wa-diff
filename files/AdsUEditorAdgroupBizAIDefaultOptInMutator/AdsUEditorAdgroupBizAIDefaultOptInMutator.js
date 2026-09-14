__d(
  "AdsUEditorAdgroupBizAIDefaultOptInMutator",
  [
    "AdsAdgroupRecordAccessors",
    "AdsInterfacesLogger",
    "AdsPageUtils",
    "gkx",
    "justknobx",
    "qex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["adgroup_id", "page_id"];
    function s(t, n, o) {
      var a,
        i = t.adgroup_id,
        l = t.page_id,
        s = babelHelpers.objectWithoutPropertiesLoose(t, e),
        u = JSON.stringify(s);
      r("AdsInterfacesLogger").log({
        eventName: "bizai_l1_default_opt_in_diagnostic",
        data:
          ((a = {}),
          (a.adgroup_id = i),
          (a.page_id = l),
          (a.ad_account_id = o != null ? o : ""),
          (a.status = n),
          (a.message = u),
          a),
      });
    }
    function u(e, t, n) {
      if (r("qex")._("2821") !== !0) return e;
      var a = r(
          "AdsAdgroupRecordAccessors",
        ).creative.biz_ai.capabilities.prompts.enroll_status.get(e),
        i = r(
          "AdsAdgroupRecordAccessors",
        ).creative.biz_ai.capabilities.prompts.action_metadata.get(e),
        l = r(
          "AdsAdgroupRecordAccessors",
        ).creative.degrees_of_freedom_spec.creative_features_spec.biz_ai.action_metadata.type.get(
          e,
        ),
        u = i === "MANUAL",
        c = l === "MANUAL",
        d = r("justknobx")._("4027")
          ? {
              adgroup_id: e.id,
              page_id: o("AdsPageUtils").getPageID(e),
              callsite: n != null ? String(n) : "unspecified",
              existing_l1_enroll_status: String(a),
              l1_action_metadata: String(i),
              aplusc_action_type: String(l),
              eligibility_loaded: String(t != null),
              is_l1_section_visible: String(
                t == null ? void 0 : t.isL1SectionVisible,
              ),
              is_eligible_for_default_opt_in: String(
                t == null ? void 0 : t.isEligibleForDefaultOptIn,
              ),
              is_sticky_opt_in: String(
                t == null ? void 0 : t.isStickyOptInEligible,
              ),
              is_aplusc_sticky_opt_in: String(
                t == null ? void 0 : t.isAPlusCStickyOptInEligible,
              ),
              is_recruited_test: String(r("gkx")("22377")),
              is_ad_account_gk: String(r("gkx")("5670")),
            }
          : null;
      if (u) return (d != null && s(d, "skipped_manual", e.account_id), e);
      if (c) {
        var m = r(
          "AdsAdgroupRecordAccessors",
        ).creative.degrees_of_freedom_spec.creative_features_spec.biz_ai.enroll_status.get(
          e,
        );
        if (m != null) {
          var p = e;
          return (
            (p = r(
              "AdsAdgroupRecordAccessors",
            ).creative.biz_ai.capabilities.prompts.enroll_status.set(m, p)),
            (p = r(
              "AdsAdgroupRecordAccessors",
            ).creative.biz_ai.capabilities.prompts.action_metadata.set(
              "MANUAL",
              p,
            )),
            p
          );
        }
      }
      var _, f, g;
      if (t == null)
        ((_ = "OPT_OUT"), (f = "DEFAULT"), (g = "fallback_null_eligibility"));
      else if (!t.isL1SectionVisible)
        ((_ = "OPT_OUT"), (f = "DEFAULT"), (g = "opt_out_not_visible"));
      else {
        var h,
          y =
            (h = t.isStickyOptInEligible) != null
              ? h
              : t.isAPlusCStickyOptInEligible,
          C = (t.isEligibleForDefaultOptIn || y === !0) && y !== !1;
        ((_ = C ? "OPT_IN" : "OPT_OUT"),
          (f = C
            ? y === !0
              ? "STICKY_OPT_IN"
              : "DEFAULT"
            : y === !1
              ? "STICKY_OPT_OUT"
              : "DEFAULT"),
          (g = C ? "opt_in" : "opt_out"));
      }
      d != null && s(d, g, e.account_id);
      var b = e;
      return (
        (b = r(
          "AdsAdgroupRecordAccessors",
        ).creative.biz_ai.capabilities.prompts.enroll_status.set(_, b)),
        (b = r(
          "AdsAdgroupRecordAccessors",
        ).creative.biz_ai.capabilities.prompts.action_metadata.set(f, b)),
        b
      );
    }
    l.updateBizAIDefaultOptIn = u;
  },
  98,
);
