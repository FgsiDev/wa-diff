__d(
  "AdsCreativeBadgeGetUtils",
  ["Currency", "immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      if (e == null || e.size === 0) return r("immutable").Map();
      var t = e.toJS()[0],
        n = r("immutable").Map();
      if (t.shipping_policy != null) {
        var o,
          a,
          i,
          l,
          u,
          c = {
            is_shipping_free:
              (o = t.shipping_policy.is_shipping_free) != null ? o : void 0,
            shipping_time_frame_value:
              (a = t.shipping_policy.shipping_time_frame_value) != null
                ? a
                : null,
            shipping_time_frame_unit:
              (i = t.shipping_policy.shipping_time_frame_unit) != null
                ? i
                : null,
            shipping_min_amount_value:
              (l = t.shipping_policy.shipping_min_amount_value) != null
                ? l
                : null,
            shipping_min_amount_unit:
              (u = t.shipping_policy.shipping_min_amount_unit) != null
                ? u
                : null,
          };
        ((c.shipping_min_amount_value = s(
          c.shipping_min_amount_unit,
          c.shipping_min_amount_value,
        )),
          (n = n.set("shipping_policy", c)));
      }
      if (t.payment_options != null) {
        var d,
          m = {
            payment_methods_accepted:
              (d = t.payment_options.payment_methods_accepted) != null ? d : [],
          };
        n = n.set("payment_options", m);
      }
      if (t.return_policy != null) {
        var p,
          _,
          f,
          g = {
            is_return_free:
              (p = t.return_policy.is_return_free) != null ? p : null,
            return_window_value:
              (_ = t.return_policy.return_window_value) != null ? _ : null,
            return_window_unit:
              (f = t.return_policy.return_window_unit) != null ? f : null,
          };
        n = n.set("return_policy", g);
      }
      if (t.business_info_from_profile != null) {
        var h,
          y = {
            selected_business_info_options:
              (h =
                t.business_info_from_profile.selected_business_info_options) !=
              null
                ? h
                : [],
          };
        n = n.set("business_info_from_profile", y);
      }
      if (t.social_cues_from_profile != null) {
        var C,
          b = {
            selected_social_cues_options:
              (C = t.social_cues_from_profile.selected_social_cues_options) !=
              null
                ? C
                : [],
          };
        n = n.set("social_cues_from_profile", b);
      }
      if (t.brand_highlights_from_profile != null) {
        var v,
          S = {
            selected_brand_highlights_info_options:
              (v =
                t.brand_highlights_from_profile
                  .selected_brand_highlights_info_options) != null
                ? v
                : [],
          };
        n = n.set("brand_highlights_from_profile", S);
      }
      if (t.app_highlights_from_profile != null) {
        var R,
          L = {
            selected_app_highlights_info_options:
              (R =
                t.app_highlights_from_profile
                  .selected_app_highlights_info_options) != null
                ? R
                : [],
          };
        n = n.set("app_highlights_from_profile", L);
      }
      return n;
    }
    function s(e, t) {
      return e != null && t != null ? t / r("Currency").getOffset(e) : t;
    }
    l.getBadgeItemSpecMapFromAssetFeed = e;
  },
  98,
);
