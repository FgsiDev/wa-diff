__d(
  "AdAccount-promo_ads_data-resolver",
  ["AdAccountPromoAdsDataResolver.graphql", "RelayHooks"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t) {
      var r,
        a,
        i,
        l,
        s,
        u,
        c,
        d,
        m,
        p,
        _,
        f,
        g,
        h,
        y,
        C,
        b,
        v,
        S,
        R,
        L,
        E,
        k,
        I,
        T = o("RelayHooks").readFragment(
          e !== void 0 ? e : (e = n("AdAccountPromoAdsDataResolver.graphql")),
          t,
        );
      return {
        is_always_on_detected_offers_upsell_eligible:
          (r =
            (a = T.promo_ad_account_data) == null
              ? void 0
              : a.is_always_on_detected_offers_upsell_eligible) != null
            ? r
            : !0,
        is_always_on_l1_notice_eligible:
          (i =
            (l = T.promo_ad_account_data) == null
              ? void 0
              : l.is_always_on_l1_notice_eligible) != null
            ? i
            : !0,
        is_ec_detected_offers_upsell_eligible:
          (s =
            (u = T.promo_ad_account_data) == null
              ? void 0
              : u.is_ec_detected_offers_upsell_eligible) != null
            ? s
            : !0,
        is_ec_shops_only_upsell_eligible:
          (c =
            (d = T.promo_ad_account_data) == null
              ? void 0
              : d.is_ec_shops_only_upsell_eligible) != null
            ? c
            : !0,
        is_pre_click_notification_eligible:
          (m =
            (p = T.promo_ad_account_data) == null
              ? void 0
              : p.is_pre_click_notification_eligible) != null
            ? m
            : !0,
        is_promo_ad_account_default_on_blocked:
          (_ =
            (f = T.promo_ad_account_data) == null
              ? void 0
              : f.is_promo_ad_account_default_on_blocked) != null
            ? _
            : !1,
        is_promo_ad_account_default_on_eligible:
          (g =
            (h = T.promo_ad_account_data) == null
              ? void 0
              : h.is_promo_ad_account_default_on_eligible) != null
            ? g
            : !0,
        is_promo_ad_account_default_on_in_cooldown:
          (y =
            (C = T.promo_ad_account_data) == null
              ? void 0
              : C.is_promo_ad_account_default_on_in_cooldown) != null
            ? y
            : !1,
        is_promo_ad_account_email_capture_default_on_eligible:
          (b =
            (v = T.promo_ad_account_data) == null
              ? void 0
              : v.is_promo_ad_account_email_capture_default_on_eligible) != null
            ? b
            : !0,
        is_promo_ad_account_email_capture_default_on_in_cooldown:
          (S =
            (R = T.promo_ad_account_data) == null
              ? void 0
              : R.is_promo_ad_account_email_capture_default_on_in_cooldown) !=
          null
            ? S
            : !1,
        is_promo_ad_account_shop_email_capture_upsell_eligible:
          (L =
            (E = T.promo_ad_account_data) == null
              ? void 0
              : E.is_promo_ad_account_shop_email_capture_upsell_eligible) !=
          null
            ? L
            : !1,
        turn_off_promo_count:
          (k =
            (I = T.promo_ad_account_data) == null
              ? void 0
              : I.turn_off_promo_count) != null
            ? k
            : 0,
      };
    }
    l.promo_ads_data = s;
  },
  98,
);
