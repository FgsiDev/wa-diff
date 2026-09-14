__d(
  "AdsMgmtOneshopUtil",
  [
    "AdsApplicationUtils",
    "AdsInsightsField",
    "AdsMgmtOneshopAPIResponse",
    "URIInitDataUtil",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["fields"],
      s,
      u = new Set([
        "image_asset",
        "video_asset",
        "media_asset",
        "description_asset",
        "title_asset",
        "call_to_action_asset",
        "link_url_asset",
        "body_asset",
        "creative_fingerprint",
        "activity_recency",
        "creative_automation_asset_id",
      ]),
      c = new Set([
        (s = r("AdsInsightsField")).INTERACTIVE_COMPONENT_TAP,
        s.VIDEO_PLAY_RETENTION_CURVE_ACTIONS,
        s.OPTIMIZATION_RESULTS,
        s.COST_PER_OPTIMIZATION_RESULT,
        s.COST_PER_ACTION_RESULT,
        s.ACTION_RESULTS,
        s.CUSTOM_AUDIENCES,
        s.EXCLUDED_CUSTOM_AUDIENCES,
      ]);
    function d(t) {
      var n = t.fields,
        r = babelHelpers.objectWithoutPropertiesLoose(t, e);
      return babelHelpers.extends({}, r, { column_fields: n });
    }
    function m(e) {
      return e.every(function (e) {
        return !c.has(e);
      });
    }
    function p(e) {
      return (
        !e ||
        e.every(function (e) {
          return !u.has(e);
        })
      );
    }
    function _(e) {
      return !e || e.length === 0;
    }
    function f(e) {
      var t = e.action_breakdowns,
        n = e.breakdowns,
        r = e.fields;
      return m(r) && p(n) && _(t);
    }
    function g(e) {
      return (
        o("AdsApplicationUtils").isPowerEditor() &&
        !o("URIInitDataUtil").shouldUseInsightsFromURI() &&
        f(e)
      );
    }
    function h(e, t) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = d(t),
            r = yield e.get(n);
          return o("AdsMgmtOneshopAPIResponse").getNormalizedOneshopResponse(r);
        })),
        y.apply(this, arguments)
      );
    }
    ((l.shouldUseAmOneshop = g), (l.getAmTabularResponse = h));
  },
  98,
);
