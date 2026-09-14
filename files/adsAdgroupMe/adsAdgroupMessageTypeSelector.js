__d(
  "adsAdgroupMessageTypeSelector",
  [
    "AdsAdgroupRecordAccessors",
    "AdsBulkValueUtils",
    "AdsUEditorSelectors",
    "adsCreateSelector",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = r("adsCreateSelector")(
        [
          (s = o("AdsUEditorSelectors")).adgroup.bulkByAccessor(
            (e = r("AdsAdgroupRecordAccessors")).creative.asset_feed_spec
              .call_to_actions.get,
          ),
          s.adgroup.bulkByAccessor(e.creative.call_to_action.get),
          s.adgroup.bulkByAccessor(
            e.creative.object_story_spec.link_data.call_to_action.value
              .app_destination.get,
          ),
          s.adgroup.bulkByAccessor(
            e.creative.object_story_spec.video_data.call_to_action.value
              .app_destination.get,
          ),
          s.adgroup.bulkByAccessor(
            e.creative.object_story_spec.photo_data.call_to_action.value
              .app_destination.get,
          ),
          s.adgroup.bulkByAccessor(e.creative.call_to_action_type.get),
        ],
        function (t, n, r, a, i, l) {
          var e,
            s,
            u = (s = o("AdsBulkValueUtils")).getUniformValue(r),
            d = s.getUniformValue(a),
            m = s.getUniformValue(i),
            p = s.getUniformValue(t),
            _ =
              (e = o("AdsBulkValueUtils").getUniformValue(n)) == null
                ? void 0
                : e.type,
            f = o("AdsBulkValueUtils").getUniformValue(l);
          return c(p, _, f, u, d, m);
        },
        { name: i.id + ".adsAdgroupMessageTypeSelector" },
      );
    function c(e, t, n, o, a, i) {
      var l,
        s,
        u,
        c,
        d = null;
      if (e != null) {
        if (e.size === 1) {
          var m,
            p = e == null || (m = e.get(0)) == null ? void 0 : m.get("value");
          p instanceof r("immutable").Map && (d = p.get("app_destination"));
        } else if (e.size > 1) {
          var _ = new Set();
          for (var f of e) {
            var g = f.get("value");
            if (g instanceof r("immutable").Map) {
              var h = g.get("app_destination");
              h != null && _.add(h);
            }
          }
          return (
            _.has("MESSENGER") && _.has("INSTAGRAM_DIRECT") && _.has("WHATSAPP")
              ? (d = "MESSAGING_INSTAGRAM_DIRECT_MESSENGER_WHATSAPP")
              : _.has("MESSENGER") && _.has("INSTAGRAM_DIRECT")
                ? (d = "MESSAGING_INSTAGRAM_DIRECT_MESSENGER")
                : _.has("MESSENGER") && _.has("WHATSAPP")
                  ? (d = "MESSAGING_MESSENGER_WHATSAPP")
                  : _.has("INSTAGRAM_DIRECT") &&
                    _.has("WHATSAPP") &&
                    (d = "MESSAGING_INSTAGRAM_DIRECT_WHATSAPP"),
            d
          );
        }
      }
      return (l =
        (s = (u = (c = o != null ? o : a) != null ? c : i) != null ? u : d) !=
        null
          ? s
          : n) != null
        ? l
        : t;
    }
    ((l.adsAdgroupMessageTypeSelector = u), (l.adsAdgroupMessageType = c));
  },
  98,
);
