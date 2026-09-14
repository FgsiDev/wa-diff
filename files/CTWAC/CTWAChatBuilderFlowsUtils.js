__d(
  "CTWAChatBuilderFlowsUtils",
  [
    "fbt",
    "AdsMessengerVisualEditorCustomerActionType",
    "CTWAChatBuilderFlowsUtilsBusinessAppAccountQuery.graphql",
    "RelayHooks",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e;
    function u(e) {
      try {
        var t,
          n = JSON.parse(e.page_welcome_message_body),
          o =
            n == null || (t = n.text_format) == null
              ? void 0
              : t.customer_action_type;
        return o ===
          r("AdsMessengerVisualEditorCustomerActionType").WHATSAPP_FLOW
          ? s._(/*BTDS*/ "Form")
          : s._(/*BTDS*/ "Conversation prompts");
      } catch (e) {
        return null;
      }
    }
    function c(e, t) {
      var n = null,
        r = t == null ? void 0 : t.getValue();
      if (e != null && r != null) {
        var o = r.find(function (t) {
          return t.whatsAppNumberID === e;
        });
        n = o == null ? void 0 : o.whatsAppBusinessAccountID;
      }
      return n;
    }
    function d(e) {
      var t = e == null ? void 0 : e.getValue();
      if (t == null) return null;
      for (var n of t)
        if (n.whatsAppBusinessAccountID != null)
          return n.whatsAppBusinessAccountID;
      return null;
    }
    function m() {
      var t = o("react-compiler-runtime").c(2),
        r;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((r = {}), (t[0] = r))
        : (r = t[0]);
      var a = r,
        i;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((i =
            e !== void 0
              ? e
              : (e = n(
                  "CTWAChatBuilderFlowsUtilsBusinessAppAccountQuery.graphql",
                ))),
          (t[1] = i))
        : (i = t[1]);
      var l = o("RelayHooks").useClientQuery(i, a);
      return l;
    }
    ((l.getDescriptionForCTWAFlowsSavedTemplate = u),
      (l.getWABAIDForWhatsAppBusinessPhoneNumberID = c),
      (l.getDefaultWABAIDFromBusinessAccounts = d),
      (l.useBusinessAppAccountQuery = m));
  },
  226,
);
