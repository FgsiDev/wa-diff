__d(
  "MAIBAInlinedContext",
  [
    "invariant",
    "ALFlowChannel",
    "ALToolTab",
    "AdsAIContextPathUtils",
    "AdsALAppData",
    "AdsALChannel",
    "AdsApplicationIDs",
    "AdsManagerAutoLoggingAppConfig",
    "BusinessConsoleDynamicFields",
    "CurrentUser",
    "MAIBAResponseTonePreferenceStorage",
    "WebApiApplication",
    "XFBAutoLoggingToolEnumUtils.facebook",
    "XFBAutoLoggingToolTabEnumUtils.facebook",
    "XFBCASSegmentEnumUtils.facebook",
    "gkx",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = null,
      u = new Set(),
      c = "/latest/whatsapp_manager";
    function d(e) {
      if (e == null) return null;
      for (var t of Object.entries(r("AdsApplicationIDs"))) {
        var n = t[0],
          o = t[1];
        if (o === e) return n;
      }
      return null;
    }
    function m(e) {
      return e != null && e !== "" && e !== "0" ? e : null;
    }
    function p(e) {
      var t = o("AdsAIContextPathUtils").getURLParams(),
        n = t.pathname;
      return (
        e === "WA Messaging Audience" ||
        e === "WA Messaging Campaign Creation" ||
        e === "WA Messaging Campaigns" ||
        e === "WA Messaging Event-Based Send" ||
        e === "Marketing Messages Audiences" ||
        e === "Whatsapp Manager" ||
        n.includes(c)
      );
    }
    function _(e) {
      if (!p(e)) return null;
      var t = o("AdsAIContextPathUtils").getURLParams(),
        n = t.searchParams;
      if (e === "Marketing Messages Audiences") return m(n.get("waba_id"));
      var r = m(n.get("asset_id"));
      return r != null ? r : m(n.get("waba_id"));
    }
    function f() {
      var e = o("AdsAIContextPathUtils").getURLParams(),
        t = e.searchParams;
      return m(t.get("act"));
    }
    function g() {
      var e,
        t = o("AdsAIContextPathUtils").getURLParams(),
        n = t.searchParams;
      return (e = m(n.get("business_id"))) != null
        ? e
        : m(n.get("global_scope_id"));
    }
    function h(e) {
      var t = o("AdsAIContextPathUtils").getURLParams(),
        n = t.searchParams,
        r = m(n.get("page_id"));
      if (r != null) return r;
      if (p(e)) return null;
      var a = m(n.get("asset_id"));
      return a != null ? a : m(n.get("selected_business_page_id"));
    }
    function y() {
      var e = o("AdsAIContextPathUtils").getURLParams(),
        t = e.searchParams;
      return m(t.get("agency_brand_id"));
    }
    function C() {
      var t,
        n,
        a,
        i,
        l,
        s = r("CurrentUser").getID(),
        u = o("AdsALAppData").getAppData(),
        c = o("ALToolTab").getCurrentToolTab(),
        p = r("nullthrows")(
          (t = o("XFBAutoLoggingToolEnumUtils.facebook").fromJSEnum(c.tool)) !=
            null
            ? t
            : o("XFBAutoLoggingToolEnumUtils.facebook").fromJSEnum("Unknown"),
          '("Unknown") should always be a valid enum value',
        ),
        f = o("XFBAutoLoggingToolTabEnumUtils.facebook").fromJSEnum(c.tab),
        g = _(c.tab),
        C = m(u == null ? void 0 : u.ad_account_id),
        b = m(u == null ? void 0 : u.business_id),
        v = r("BusinessConsoleDynamicFields").enterprise_id,
        S = v != null && v !== "" && v !== "0" ? v : null,
        R = o("WebApiApplication").getClientID(),
        L = d(R),
        E;
      c.tool === "Facebook Ad Center"
        ? (E = o("XFBAutoLoggingToolEnumUtils.facebook").fromJSEnum("LWI"))
        : r("gkx")("9497")
          ? (E = o("XFBAutoLoggingToolEnumUtils.facebook").fromJSEnum(
              "Ads Manager (Campaigns)",
            ))
          : r("gkx")("9506")
            ? (E = o("XFBAutoLoggingToolEnumUtils.facebook").fromJSEnum("MBS"))
            : (E = o("XFBAutoLoggingToolEnumUtils.facebook").fromJSEnum(
                "Unknown",
              ));
      var k = (n = e) == null ? void 0 : n.surface,
        I = (a = e) == null ? void 0 : a.page_id,
        T = (i = e) == null ? void 0 : i.seed_media_flow,
        D = (l = e) == null ? void 0 : l.seed_media_source;
      return (
        (e = {
          user_id: s !== "0" ? s : null,
          ad_account_id: C,
          business_id: b,
          waba_id: g,
          page_id: I != null ? I : h(c.tab),
          beneficiary_brand_ig_user_id: y(),
          organization_id: S,
          app: L,
          tool: p,
          tab: f,
          advertiser_type: {
            main_tool: r("nullthrows")(
              E,
              "advertiserMainTool should always be a valid enum value",
            ),
            cas_segment_account: o(
              "XFBCASSegmentEnumUtils.facebook",
            ).fromJSEnum(
              o("AdsManagerAutoLoggingAppConfig").cas_segment_account,
            ),
          },
          metadata: {
            is_user_editing_draft: !1,
            is_workspace_prompt_edit: !1,
            response_tone_preference: o(
              "MAIBAResponseTonePreferenceStorage",
            ).getStoredResponseTonePreference(),
          },
          al_browser_session_id: u.browser_session_id,
          al_app_session_id: u.app_session_id,
          al_event_index: -1,
          surface: k,
          seed_media_flow: T,
          seed_media_source: D,
        }),
        e
      );
    }
    function b() {
      (C(),
        o("ALFlowChannel").ALFlowChannel.addListener(
          "al_flow_status",
          function (e) {
            switch (e.flowStatus) {
              case o("ALFlowChannel").ALFlowStatus.STARTED:
                u.add(e.flow);
                break;
              case o("ALFlowChannel").ALFlowStatus.SUCCEEDED:
              case o("ALFlowChannel").ALFlowStatus.CANCELLED:
              case o("ALFlowChannel").ALFlowStatus.FAILED:
              case o("ALFlowChannel").ALFlowStatus.TIMEDOUT:
              default:
                u.delete(e.flow);
                break;
            }
          },
        ),
        o("AdsALChannel").AdsALChannel.addListener("al_ui_event", function (t) {
          /click|keydown|submit/.test(t.event) &&
            t.surface != null &&
            /maiba/.test(t.surface) &&
            e != null &&
            ((e.al_event_index = t.eventIndex), (e.surface = t.surface));
        }));
    }
    function v(t) {
      (e == null && b(),
        e != null || s(0, 114030),
        (e = babelHelpers.extends({}, e, t)));
    }
    function S(t) {
      e == null && (b(), e != null || s(0, 114030));
      var n = C(),
        r = babelHelpers.extends({}, n, t, {
          metadata: babelHelpers.extends(
            {},
            n == null ? void 0 : n.metadata,
            t == null ? void 0 : t.metadata,
          ),
          flow: Array.from(u)
            .map(function (e) {
              return e.name;
            })
            .filter(Boolean)
            .join(","),
        }),
        a = g(),
        i = o("ALToolTab").getCurrentToolTab(),
        l = i.tool;
      return (
        (t == null ? void 0 : t.business_id) == null &&
          a != null &&
          (l === "Ads Manager (Campaigns)" ||
            l === "Advertising Settings" ||
            l === "Account Overview" ||
            l === "Audiences") &&
          (r.business_id = a),
        r
      );
    }
    ((l.getAdAccountIDFromURL = f),
      (l.getBusinessIDFromURL = g),
      (l.init = b),
      (l.updateInlinedContext = v),
      (l.getInlinedContext = S));
  },
  98,
);
