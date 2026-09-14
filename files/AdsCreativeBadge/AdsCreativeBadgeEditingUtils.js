__d(
  "AdsCreativeBadgeEditingUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t, n) {
      var r,
        o = e.get("business_info_from_profile");
      if (o != null && o.selected_business_info_options != null) {
        var a = o.selected_business_info_options,
          i = a;
        if (
          (n === !0
            ? a.includes(t) || (i = a.concat([t]))
            : (i = a.filter(function (e) {
                return e !== t;
              })),
          i.length !== 0)
        ) {
          var l = { selected_business_info_options: i };
          r = e.set("business_info_from_profile", l);
        } else r = e.remove("business_info_from_profile");
      } else {
        var s = { selected_business_info_options: [t] };
        r = e.set("business_info_from_profile", s);
      }
      return r;
    }
    function l(e, t, n) {
      var r,
        o = e.get("social_cues_from_profile");
      if (o != null && o.selected_social_cues_options != null) {
        var a = o.selected_social_cues_options,
          i = a;
        if (
          (n === !0
            ? a.includes(t) || (i = a.concat([t]))
            : (i = a.filter(function (e) {
                return e !== t;
              })),
          i.length !== 0)
        ) {
          var l = { selected_social_cues_options: i };
          r = e.set("social_cues_from_profile", l);
        } else r = e.remove("social_cues_from_profile");
      } else {
        var s = { selected_social_cues_options: [t] };
        r = e.set("social_cues_from_profile", s);
      }
      return r;
    }
    function s(e, t, n) {
      var r,
        o = e.get("app_highlights_from_profile");
      if (o != null && o.selected_app_highlights_info_options != null) {
        var a = o.selected_app_highlights_info_options,
          i = a;
        if (
          (n === !0
            ? a.includes(t) || (i = a.concat([t]))
            : (i = a.filter(function (e) {
                return e !== t;
              })),
          i.length !== 0)
        ) {
          var l = { selected_app_highlights_info_options: i };
          r = e.set("app_highlights_from_profile", l);
        } else r = e.remove("app_highlights_from_profile");
      } else {
        var s = { selected_app_highlights_info_options: [t] };
        r = e.set("app_highlights_from_profile", s);
      }
      return r;
    }
    function u(e, t, n) {
      var r,
        o = e.get("brand_highlights_from_profile");
      if (o != null && o.selected_brand_highlights_info_options != null) {
        var a = o.selected_brand_highlights_info_options,
          i = a;
        if (
          (n === !0
            ? a.includes(t) || (i = a.concat([t]))
            : (i = a.filter(function (e) {
                return e !== t;
              })),
          i.length !== 0)
        ) {
          var l = { selected_brand_highlights_info_options: i };
          r = e.set("brand_highlights_from_profile", l);
        } else r = e.remove("brand_highlights_from_profile");
      } else {
        var s = { selected_brand_highlights_info_options: [t] };
        r = e.set("brand_highlights_from_profile", s);
      }
      return r;
    }
    function c(e, t) {
      var n;
      return (
        t != null
          ? (n = e.set("shipping_policy", t))
          : (n = e.remove("shipping_policy")),
        n
      );
    }
    function d(e, t) {
      var n;
      return (
        t != null
          ? (n = e.set("payment_options", t))
          : (n = e.remove("payment_options")),
        n
      );
    }
    function m(e, t) {
      var n;
      return (
        t != null
          ? (n = e.set("return_policy", t))
          : (n = e.remove("return_policy")),
        n
      );
    }
    ((i.selectBusinessInfoFromProfileOption = e),
      (i.selectSocialCuesOption = l),
      (i.selectAppHighlightsOption = s),
      (i.selectBrandHighlightsOption = u),
      (i.updateShippingPolicy = c),
      (i.updatePaymentOptions = d),
      (i.updateReturnPolicy = m));
  },
  66,
);
