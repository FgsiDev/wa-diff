__d(
  "AdsFlexibleFormatLoggerUtils",
  [
    "AdsAPIObjectives",
    "AdsBulkValueUtils",
    "AdsInterfacesLogger",
    "AdsPromotedObjectTypes",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, a) {
      var i;
      if (!(e.length < 1)) {
        var l = t.getValues().every(function (e) {
            return (
              e === r("AdsAPIObjectives").LINK_CLICKS ||
              e === r("AdsAPIObjectives").OUTCOME_ENGAGEMENT
            );
          }),
          s = o("AdsBulkValueUtils").getUniformValueOrDefault(
            n,
            r("AdsPromotedObjectTypes").NONE,
          );
        r("AdsInterfacesLogger").logOnce({
          data:
            ((i = {}),
            (i.adgroup_id = e[0].toString()),
            (i.creative_editor_type = l ? "flexible_format" : "cag"),
            (i.objective = t.getValues()[0]),
            (i.message = s),
            (i.campaign_destination_type = a),
            i),
          eventName: "flexible_format_toggle_option_impression",
        });
      }
    }
    function s(e, t, n) {
      var o;
      r("AdsInterfacesLogger").log({
        data:
          ((o = {}),
          (o.adgroup_id = e.toString()),
          (o.objective = t),
          (o.campaign_destination_type = n),
          o),
        eventName: "flexible_format_toggle_on",
      });
    }
    function u(e, t, n) {
      var o;
      r("AdsInterfacesLogger").log({
        data:
          ((o = {}),
          (o.adgroup_id = e.toString()),
          (o.objective = t),
          (o.campaign_destination_type = n),
          o),
        eventName: "flexible_format_toggle_off",
      });
    }
    function c(e, t, n) {
      var o;
      r("AdsInterfacesLogger").log({
        data:
          ((o = {}),
          (o.ad_account_id = e),
          (o.adgroup_id = t.toString()),
          (o.objective = n),
          o),
        eventName: "flexible_format_defaulting",
      });
    }
    function d(e, t) {
      var n;
      e.length < 1 ||
        r("AdsInterfacesLogger").log({
          data:
            ((n = {}), (n.adgroup_id = e[0].toString()), (n.item_count = t), n),
          eventName: "flexible_format_pick_images",
        });
    }
    function m(e, t) {
      var n;
      e.length < 1 ||
        r("AdsInterfacesLogger").log({
          data:
            ((n = {}), (n.adgroup_id = e[0].toString()), (n.item_count = t), n),
          eventName: "flexible_format_pick_videos",
        });
    }
    function p(e) {
      var t;
      e.length < 1 ||
        r("AdsInterfacesLogger").log({
          data: ((t = {}), (t.adgroup_id = e[0].toString()), t),
          eventName: "flexible_format_image_crop",
        });
    }
    function _(e) {
      var t;
      e.length < 1 ||
        r("AdsInterfacesLogger").log({
          data: ((t = {}), (t.adgroup_id = e[0].toString()), t),
          eventName: "flexible_format_video_thumbnail",
        });
    }
    function f(e) {
      var t;
      e.length < 1 ||
        r("AdsInterfacesLogger").log({
          data: ((t = {}), (t.adgroup_id = e[0].toString()), t),
          eventName: "flexible_format_optimize_creative_on",
        });
    }
    function g(e) {
      var t;
      e.length < 1 ||
        r("AdsInterfacesLogger").log({
          data: ((t = {}), (t.adgroup_id = e[0].toString()), t),
          eventName: "flexible_format_optimize_creative_off",
        });
    }
    function h(e, t, n) {
      var o;
      e.length < 1 ||
        r("AdsInterfacesLogger").log({
          data:
            ((o = {}),
            (o.adgroup_id = e[0].toString()),
            (o.objective = t),
            (o.campaign_destination_type = n),
            o),
          eventName: "flexible_format_publish",
        });
    }
    ((l.logOnceFlexibleFormatImpression = e),
      (l.logFlexibleFormatToggleOn = s),
      (l.logFlexibleFormatToggleOff = u),
      (l.logFlexibleFormatDefaulting = c),
      (l.logFlexibleFormatPickImages = d),
      (l.logFlexibleFormatPickVideos = m),
      (l.logFlexibleFormatImageCrop = p),
      (l.logFlexibleFormatVideoThumbnail = _),
      (l.logFlexibleFormatOptimizeCreativeToggleOn = f),
      (l.logFlexibleFormatOptimizeCreativeToggleOff = g),
      (l.logFlexibleFormatPublish = h));
  },
  98,
);
