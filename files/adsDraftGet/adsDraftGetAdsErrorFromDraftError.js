__d(
  "adsDraftGetAdsErrorFromDraftError",
  [
    "errorCode",
    "errorDesc",
    "AdsAPIAdgroupPaths",
    "AdsError",
    "AdsErrorsCTAStrings",
    "UsabilityFlow63Utils",
    "adsDraftClassifyActionablePublishError",
    "emptyObject",
    "getAdsErrorExtraData",
    "qex",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    function e(e) {
      var t,
        n,
        r = (
          (t = (n = e.error_description) != null ? n : e.error_message) != null
            ? t
            : ""
        ).toString();
      return (
        r.includes("omnichannel_link_spec['web']['url']") &&
        o("UsabilityFlow63Utils").is3COWebURLErrorImprovementsEnabled()
      );
    }
    function c(t, n) {
      var a, i;
      if ((n === void 0 && (n = {}), e(t)))
        return r("AdsError").createError(
          2446458,
          u._(function (e, t) {
            return e._(
              /*BTDS*/ "The Website URL field is required. Please complete the field to continue.",
            );
          }, {}),
          babelHelpers.extends({}, n, {
            cta: r("AdsErrorsCTAStrings").ADD_URL_CTA,
            level: r("AdsError").Level.WARN,
            path: r("AdsAPIAdgroupPaths").CREATIVE.OMNICHANNEL_LINK_SPEC.WEB
              .URL,
            isServerError: !0,
            helpCenterID: t.help_center_id,
            wwwRequestID: t.www_request_id,
            errorPlacementType: t.error_placement,
            opesMid: t.opes_mid,
          }),
        );
      var l = Number(t.error_code),
        s = t.error_description || t.error_message || "?",
        c = t.blame_field_spec == null ? null : [t.blame_field_spec],
        d = r("adsDraftClassifyActionablePublishError")({
          blameFieldSpecs: c,
          code: l,
        }),
        m =
          (d == null ? void 0 : d.cause) === "WEBSITE_URL"
            ? [].concat(d.path)
            : null,
        p = m != null && r("qex")._("4966") === !0,
        _ =
          (d == null ? void 0 : d.cause) === "POST" &&
          r("qex")._("4970") === !0,
        f = _
          ? {
              cta: r("AdsErrorsCTAStrings").CHOOSE_ANOTHER_POST_CTA,
              path: r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_ID,
            }
          : (a = o("getAdsErrorExtraData").getAdsErrorExtraData(l)) != null
            ? a
            : r("emptyObject"),
        g =
          t.help_center_id == null &&
          f.helpCenterID != null &&
          r("qex")._("3935") === !0,
        h = babelHelpers.extends({}, n, f, {
          path: t.blame_field_spec || f.path || null,
          helpCenterID:
            (i = t.help_center_id) != null ? i : g ? f.helpCenterID : null,
          isServerError: !0,
          wwwRequestID: t.www_request_id,
          errorPlacementType: t.error_placement,
          opesMid: t.opes_mid,
        });
      return p
        ? r("AdsError").createError(
            2501341,
            u._(function (e, t) {
              return e._(/*BTDS*/ "Enter your website URL to publish this ad.");
            }, {}),
            babelHelpers.extends({}, h, {
              cta: r("AdsErrorsCTAStrings").ADD_URL_CTA,
              level: r("AdsError").Level.WARN,
              path: m,
            }),
          )
        : t.error_severity === "warning"
          ? r("AdsError").createNotice(t.error_code, s.toString(), h)
          : t.error_severity === "quiet"
            ? r("AdsError").createError(
                t.error_code,
                s.toString(),
                babelHelpers.extends({}, h, {
                  level: r("AdsError").Level.QUIET,
                }),
              )
            : r("AdsError").createError(t.error_code, s.toString(), h);
    }
    l.default = c;
  },
  226,
);
