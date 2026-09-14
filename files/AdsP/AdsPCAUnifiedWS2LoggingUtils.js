__d(
  "AdsPCAUnifiedWS2LoggingUtils",
  ["AdsInterfacesLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, o, a, i) {
      var l,
        s =
          ((l = {}),
          (l.adgroup_id = o.adgroupID),
          (l.campaign_id = o.campaignID),
          (l.campaign_group_id = o.campaignGroupID),
          (l.product_set_id = o.productSetID),
          (l.status = o.enrollStatus),
          (l.action_type = o.actionType),
          (l.caller = n),
          (l.message = a != null ? JSON.stringify(a) : void 0),
          l);
      i === !0
        ? r("AdsInterfacesLogger").logOnce({
            eventName: e,
            eventCategory: t,
            data: s,
          })
        : r("AdsInterfacesLogger").log({
            eventName: e,
            eventCategory: t,
            data: s,
          });
    }
    function s(t, n, r) {
      e("pcau_ws2_product_media", "impression", t, n, r, !0);
    }
    function u(t, n) {
      e("pcau_ws2_product_media", "user_action", t, n);
    }
    function c(t, n, r) {
      e("pcau_ws2_uploaded_media", "impression", t, n, r, !0);
    }
    function d(t, n, r) {
      e("pcau_ws2_uploaded_media", "user_action", t, n, r);
    }
    function m(t, n, r) {
      e("pcau_ws2_related_media", "impression", t, n, r, !0);
    }
    function p(t, n, r) {
      e("pcau_ws2_related_media", "user_action", t, n, r);
    }
    function _(t, n) {
      e("pcau_ws2_gen_ai_media", "user_action", t, n);
    }
    function f(t, n, r) {
      e("pcau_ws2_frame_overlay", "impression", t, n, r, !0);
    }
    function g(t, n, r) {
      e("pcau_ws2_frame_overlay", "user_action", t, n, r);
    }
    function h(t, n, r) {
      e("pcau_ws2_slideshow", "impression", t, n, r, !0);
    }
    function y(t, n, r) {
      e("pcau_ws2_slideshow", "user_action", t, n, r);
    }
    function C(t, n, r) {
      e("pcau_ws2_product_video", "impression", t, n, r, !0);
    }
    function b(t, n, r) {
      e("pcau_ws2_product_video", "user_action", t, n, r);
    }
    function v(t, n, r) {
      e("pcau_ws2_product_set", "impression", t, n, r, !0);
    }
    function S(t, n, r) {
      e("pcau_ws2_product_set", "user_action", t, n, r);
    }
    function R(t, n, r) {
      e("pcau_ws2_format_modal", "impression", t, n, r, !0);
    }
    function L(t, n, r) {
      e("pcau_ws2_format_modal", "user_action", t, n, r);
    }
    function E(t, n, r) {
      e("pcau_ws2_flow", "ad_edit", t, n, r);
    }
    function k(t, n, r) {
      e("pcau_ws2_flow", "errors", t, n, r);
    }
    ((l.logProductMediaImpression = s),
      (l.logProductMediaAction = u),
      (l.logUploadedMediaImpression = c),
      (l.logUploadedMediaAction = d),
      (l.logRelatedMediaImpression = m),
      (l.logRelatedMediaAction = p),
      (l.logGenAiMediaAction = _),
      (l.logFrameOverlayImpression = f),
      (l.logFrameOverlayAction = g),
      (l.logSlideshowImpression = h),
      (l.logSlideshowAction = y),
      (l.logProductVideoImpression = C),
      (l.logProductVideoAction = b),
      (l.logProductSetImpression = v),
      (l.logProductSetAction = S),
      (l.logFormatModalImpression = R),
      (l.logFormatModalAction = L),
      (l.logFlowEdit = E),
      (l.logFlowError = k));
  },
  98,
);
