__d(
  "MAIBAGP1AnalyzeTopicsUtil",
  ["fbt", "$InternalEnum", "AdsMgmtAdObjectLevelTransformUtils", "qex"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e;
    function u() {
      var e = r("qex")._("5112");
      return e === "split_button_variant" || e === "dropdown_button_variant";
    }
    function c() {
      return r("qex")._("5112") === "split_button_variant";
    }
    var d = n("$InternalEnum").Mirrored([
      "PERFORMANCE_SUMMARY",
      "CREATIVE_ENGAGEMENT",
      "INDUSTRY_BENCHMARK",
      "TOP_AND_BOTTOM_PERFORMERS",
      "AUDIENCE",
      "OPTIMIZE_BUDGET",
    ]);
    function m(e) {
      return Object.fromEntries(
        e.map(function (e) {
          return [e, f(e)];
        }),
      );
    }
    function p(e, t, n) {
      return (function (e) {
        return e === "campaign"
          ? t
            ? [].concat(n ? [d.PERFORMANCE_SUMMARY] : [], [
                d.CREATIVE_ENGAGEMENT,
                d.INDUSTRY_BENCHMARK,
                d.OPTIMIZE_BUDGET,
                d.AUDIENCE,
              ])
            : [
                d.PERFORMANCE_SUMMARY,
                d.CREATIVE_ENGAGEMENT,
                d.INDUSTRY_BENCHMARK,
                d.OPTIMIZE_BUDGET,
              ]
          : e === "ad_set"
            ? t
              ? [].concat(n ? [d.PERFORMANCE_SUMMARY] : [], [
                  d.CREATIVE_ENGAGEMENT,
                  d.INDUSTRY_BENCHMARK,
                  d.AUDIENCE,
                ])
              : [
                  d.PERFORMANCE_SUMMARY,
                  d.CREATIVE_ENGAGEMENT,
                  d.INDUSTRY_BENCHMARK,
                  d.AUDIENCE,
                ]
            : t
              ? [].concat(n ? [d.PERFORMANCE_SUMMARY] : [], [
                  d.CREATIVE_ENGAGEMENT,
                  d.INDUSTRY_BENCHMARK,
                  d.AUDIENCE,
                ])
              : [
                  d.PERFORMANCE_SUMMARY,
                  d.CREATIVE_ENGAGEMENT,
                  d.INDUSTRY_BENCHMARK,
                  d.AUDIENCE,
                ];
      })(
        o("AdsMgmtAdObjectLevelTransformUtils").transformAdObjectLevelToType(e),
      );
    }
    function _(e, t, n, r) {
      if ((r === void 0 && (r = !1), t === 0)) {
        var o = [
          d.PERFORMANCE_SUMMARY,
          d.CREATIVE_ENGAGEMENT,
          d.INDUSTRY_BENCHMARK,
          d.TOP_AND_BOTTOM_PERFORMERS,
        ];
        return (
          n &&
            (r || o.splice(o.indexOf(d.PERFORMANCE_SUMMARY), 1),
            o.push(d.AUDIENCE)),
          m(o)
        );
      }
      return m(p(e, n, r));
    }
    function f(e) {
      var t = c();
      return e === d.PERFORMANCE_SUMMARY
        ? t
          ? s._(/*BTDS*/ "Create performance summary")
          : s._(/*BTDS*/ "30-day performance")
        : e === d.CREATIVE_ENGAGEMENT
          ? t
            ? s._(/*BTDS*/ "Analyze creative")
            : s._(/*BTDS*/ "Creative engagement")
          : e === d.INDUSTRY_BENCHMARK
            ? t
              ? s._(/*BTDS*/ "Compare with industry benchmarks")
              : s._(/*BTDS*/ "Industry benchmarks")
            : e === d.TOP_AND_BOTTOM_PERFORMERS
              ? t
                ? s._(/*BTDS*/ "Identify top and bottom performers")
                : s._(/*BTDS*/ "Top and bottom performers")
              : e === d.AUDIENCE
                ? t
                  ? s._(/*BTDS*/ "Analyze audience")
                  : s._(/*BTDS*/ "Audience engagement")
                : e === d.OPTIMIZE_BUDGET
                  ? t
                    ? s._(/*BTDS*/ "Help optimize budget")
                    : s._(/*BTDS*/ "Budget strategy")
                  : (function () {
                      throw Error(
                        "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                          e,
                      );
                    })();
    }
    var g =
      ((e = {}),
      (e[d.PERFORMANCE_SUMMARY] = "gp1_analyze_entrypoint_performance_summary"),
      (e[d.CREATIVE_ENGAGEMENT] = "gp1_analyze_entrypoint_creative_engagement"),
      (e[d.INDUSTRY_BENCHMARK] = "gp1_analyze_entrypoint_industry_benchmark"),
      (e[d.TOP_AND_BOTTOM_PERFORMERS] =
        "gp1_analyze_entrypoint_top_and_bottom_performers"),
      (e[d.AUDIENCE] = "gp1_analyze_entrypoint_audience"),
      (e[d.OPTIMIZE_BUDGET] = "gp1_analyze_entrypoint_optimize_budget"),
      e);
    function h(e, t) {
      if (t) return "gp1_analyze_entrypoint_custom_prompt";
      if (e != null) {
        var n;
        return (n = g[e]) != null ? n : "gp1_analyze_entrypoint";
      }
      return "gp1_analyze_entrypoint";
    }
    var y = "scorecard_weekly_report",
      C = s._(/*BTDS*/ "Summarize my performance over the last 7 days"),
      b = s._(
        /*BTDS*/ "Summarize my performance over the last 7 days for my highest-spend result type",
      );
    function v(e, t, n) {
      if (e === y) return b;
      var r = [
        "gp1_analyze_entrypoint_performance_summary",
        "gp1_analyze_entrypoint",
      ];
      return r.includes(e) && n != null ? n : t;
    }
    function S(e) {
      e === void 0 && (e = !1);
      var t = e ? r("qex")._("4588") : r("qex")._("5243");
      return (
        t === "inline_buttons" || t === "inline_buttons_with_analyze_split"
      );
    }
    function R() {
      return r("qex")._("5243") === "inline_buttons_with_analyze_split";
    }
    function L(e, t, n) {
      var r, o;
      return {
        prompt:
          t != null && t !== ""
            ? t
            : (r = n == null ? void 0 : n.prompt) != null
              ? r
              : "",
        promptCategory:
          (o = n == null ? void 0 : n.promptCategory) != null ? o : "",
        promptHighRetentionTopic: e != null ? e : t != null ? "custom" : "",
      };
    }
    function E(e) {
      if (e === "AD_OBJECT_HOVER") {
        var t;
        return JSON.stringify({
          split_button_variant:
            (t = r("qex")._("5243")) != null ? t : "control",
        });
      }
      return JSON.stringify({
        split_button_variant: u()
          ? c()
            ? "split_button"
            : "dropdown_button"
          : "control",
      });
    }
    function k(e, t) {
      var n = o("AdsMgmtAdObjectLevelTransformUtils")
        .transformAdObjectLevelToType(t)
        .replace("_", " ");
      return e === d.PERFORMANCE_SUMMARY
        ? null
        : e === d.CREATIVE_ENGAGEMENT
          ? s._(
              /*BTDS*/ "Analyze my {ad-object-level} creative engagement and recommend any creative variations to try",
              [s._param("ad-object-level", n)],
            )
          : e === d.INDUSTRY_BENCHMARK
            ? s._(
                /*BTDS*/ "Analyze my {ad-object-level} performance and compare it with industry benchmarks",
                [s._param("ad-object-level", n)],
              )
            : e === d.TOP_AND_BOTTOM_PERFORMERS
              ? s._(
                  /*BTDS*/ "Identify my top and bottom-performing {ad-object-level}s and tell me any available recommendation(s) that could help improve them",
                  [s._param("ad-object-level", n)],
                )
              : e === d.AUDIENCE
                ? s._(
                    /*BTDS*/ "Analyze my {ad-object-level} audience engagement and tell me which audiences are driving the best results",
                    [s._param("ad-object-level", n)],
                  )
                : e === d.OPTIMIZE_BUDGET
                  ? s._(
                      /*BTDS*/ "Analyze my campaign budget and bidding strategy and tell me how I can get more outcomes for my current budget",
                    )
                  : (function () {
                      throw Error(
                        "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                          e,
                      );
                    })();
    }
    ((l.showAnalyzeTopicsAtActionBar = u),
      (l.showMAIBASplitButtonUIAmongAnalyzeTopics = c),
      (l.MAIBAAnalyzeTopicsEnum = d),
      (l.getMAIBAAnalyzeTopicsMap = _),
      (l.getAnalyzeTopicPromptID = h),
      (l.SCORECARD_WEEKLY_REPORT_ID = y),
      (l.SCORECARD_WEEKLY_REPORT_PROMPT = C),
      (l.SCORECARD_WEEKLY_REPORT_USER_MESSAGE = b),
      (l.getFinalPrompt = v),
      (l.showInlineButtonsAtAdHoverBar = S),
      (l.showAnalyzeSplitButtonAtAdHoverBar = R),
      (l.getAnalyzeTopicChatOverrides = L),
      (l.getAnalyzeTopicsExperimentConfig = E),
      (l.getMAIBAPromptForTopic = k));
  },
  226,
);
