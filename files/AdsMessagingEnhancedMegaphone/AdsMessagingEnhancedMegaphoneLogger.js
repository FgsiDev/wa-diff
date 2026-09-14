__d(
  "AdsMessagingEnhancedMegaphoneLogger",
  ["AdsInterfacesLogger"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n, o) {
      r("AdsInterfacesLogger").logOnce({
        eventName: "ads_manager_banner_message_render",
        data: { message: o, message_id: n, object_level: e, status: t },
      });
    }
    function s(e) {
      var t = e.channelID,
        n = e.status,
        o = e.tipID,
        a = e.tipName;
      r("AdsInterfacesLogger").log({
        eventName: "ads_manager_banner_messages_primary_cta_click",
        data: { message: a, message_id: o, module_name: t, status: n },
      });
    }
    function u(e, t) {
      return { tipName: e.tipName, tipID: e.id, count: t, status: e.severity };
    }
    function c(e, t) {
      var n = u(e, t),
        o = n.count,
        a = n.status,
        i = n.tipID,
        l = n.tipName;
      r("AdsInterfacesLogger").log({
        eventName: "syd_megaphone_entrypoint_click",
        data: { message: l, message_id: i, status: a, item_count: o },
      });
    }
    function d(e) {
      var t = e.status,
        n = e.tipID,
        o = e.tipName;
      r("AdsInterfacesLogger").logOnce({
        eventName: "syd_megaphone_toast_entrypoint_impression",
        data: { message: o, message_id: n, status: t },
      });
    }
    function m(e) {
      var t = e.status,
        n = e.tipID,
        o = e.tipName;
      r("AdsInterfacesLogger").log({
        eventName: "syd_megaphone_toast_entrypoint_click",
        data: { message: o, message_id: n, status: t },
      });
    }
    ((l.logMessageRender = e),
      (l.logPrimaryCTAClick = s),
      (l.logSYDBannerEntrypointClick = c),
      (l.logSYDDismissToastEntrypointImpression = d),
      (l.logSYDDismissToastEntrypointClick = m));
  },
  98,
);
