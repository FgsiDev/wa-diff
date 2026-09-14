__d(
  "AdsProfileVisitPageDefaultingUtils",
  ["AdsInterfacesLogger", "AdsMessagesDefaultDestinationUtils", "qex"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      if (Object.keys(t).length <= 1) return e;
      var a = o("AdsMessagesDefaultDestinationUtils").pageHasIGAccountConnected(
        e,
        n(e),
      );
      if (a.isLoading() || a.getValue() === !0) return e;
      var i = null;
      for (var l of Object.keys(t))
        if (l !== e) {
          var s = o(
            "AdsMessagesDefaultDestinationUtils",
          ).pageHasIGAccountConnected(l, n(l));
          if (!s.isLoading() && s.getValue() === !0) {
            i = l;
            break;
          }
        }
      if (i != null && r("qex")._("4808") === !0) {
        var u;
        return (
          r("AdsInterfacesLogger").log({
            eventName: "unified_pv_page_defaulting_ig_swap",
            data: ((u = {}), (u.old_value = e), (u.new_value = i), u),
          }),
          i
        );
      }
      return e;
    }
    function s(t, n, r) {
      var o = n != null && !n.isLoading() ? n.getValue() : null;
      return o == null ? t : e(t, o, r);
    }
    ((l.getIGLinkedPageForPV = e), (l.maybeSwapToIGLinkedPage = s));
  },
  98,
);
