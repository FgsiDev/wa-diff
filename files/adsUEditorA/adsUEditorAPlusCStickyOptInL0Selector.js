__d(
  "adsUEditorAPlusCStickyOptInL0Selector",
  [
    "AdsAccountStore",
    "AdsAdAccountSettingsStore",
    "LoadObject",
    "adsCreateSelector",
    "adsCreateStoreSelector",
    "gkx",
    "immutable",
    "userSettingsSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e, t) {
      if (e == null) return !1;
      switch (t) {
        case "replace_media_text":
          return e.replace_media_text_opt_in_status === "OPTED_OUT";
        case "carousel_to_video":
          return e.carousel_to_video_opt_in_status === "OPTED_OUT";
        case "image_background_gen":
          return e.image_background_generation_opt_in_status === "OPTED_OUT";
        default:
          return !1;
      }
    }
    var u = (e = r("adsCreateSelector"))(
        [r("userSettingsSelector")],
        function (t) {
          var e;
          return (e =
            t == null
              ? void 0
              : t.mapValue(function (e) {
                  var t,
                    n = e.creative_feature_default_config;
                  return r("immutable").OrderedMap(
                    n == null || (t = n.aplusc_sticky_opt_in_status) == null
                      ? void 0
                      : t.map(function (e) {
                          return [e.key, e.value];
                        }),
                  );
                })) != null
            ? e
            : r("LoadObject").withValue(null, { creatorModuleID: i.id });
        },
        { name: i.id + ".aplusCStickyStatusMapSelector" },
      ),
      c = e(
        [r("userSettingsSelector")],
        function (t) {
          var e;
          return (e =
            t == null
              ? void 0
              : t.mapValue(function (e) {
                  var t,
                    n = e.creative_feature_default_config;
                  return r("immutable").OrderedMap(
                    n == null || (t = n.aplusc_sticky_opt_in_status_v2) == null
                      ? void 0
                      : t.map(function (e) {
                          return [e.key, e.value];
                        }),
                  );
                })) != null
            ? e
            : r("LoadObject").withValue(null, { creatorModuleID: i.id });
        },
        { name: i.id + ".aplusCStickyStatusV2MapSelector" },
      ),
      d = r("adsCreateStoreSelector")(
        [r("AdsAdAccountSettingsStore"), r("AdsAccountStore")],
        function () {
          var e = r("AdsAccountStore").getSelectedAccountID();
          return e == null
            ? r("LoadObject").empty({ creatorModuleID: i.id })
            : r("AdsAdAccountSettingsStore").get(e);
        },
        { name: i.id + ".adsAdAccountSettingsForSelectedAccountSelector" },
      ),
      m = e(
        [d],
        function (t) {
          return t.map(function (e) {
            var t;
            return (t = e == null ? void 0 : e.aplusc_sticky_config) != null
              ? t
              : null;
          });
        },
        { name: i.id + ".aplusCAdAccountStickyConfigSelector" },
      ),
      p = e(
        [u, c, r("userSettingsSelector"), m],
        function (t, n, o, a) {
          return function (e) {
            var l, u;
            if (r("gkx")("3951") && a.hasValue()) {
              var c = a.getValueEnforcing(),
                d = c == null ? void 0 : c[e];
              if (d != null)
                return a.map(function () {
                  return (
                    d.status === "OPTED_IN" ||
                    d.status === "DEFAULT_OPTED_IN_FIRST_TIME"
                  );
                });
            }
            var m = n == null || (l = n.getValue()) == null ? void 0 : l.get(e);
            if (m != null) {
              if (m.status === "OPTED_IN")
                return r("LoadObject").withValue(!0, { creatorModuleID: i.id });
              if (m.status === "OPTED_OUT")
                return r("LoadObject").withValue(!1, { creatorModuleID: i.id });
            }
            var p = t == null || (u = t.getValue()) == null ? void 0 : u.get(e);
            if (p === "OPTED_IN")
              return r("LoadObject").withValue(!0, { creatorModuleID: i.id });
            if (p === "OPTED_OUT")
              return r("LoadObject").withValue(!1, { creatorModuleID: i.id });
            var _ = o == null ? void 0 : o.getValue();
            return s(_, e)
              ? r("LoadObject").withValue(!1, { creatorModuleID: i.id })
              : r("LoadObject").withValue(null, { creatorModuleID: i.id });
          };
        },
        { name: i.id + ".adsUEditorAPlusCStickyOptInL0Selector" },
      ),
      _ = e(
        [c, m],
        function (t, n) {
          return function (e) {
            var o, a;
            if (r("gkx")("3951") && n.hasValue()) {
              var l = n.getValueEnforcing(),
                s = l == null ? void 0 : l[e];
              if (s != null)
                return n.map(function () {
                  return s.timestamp;
                });
            }
            var u = t == null || (o = t.getValue()) == null ? void 0 : o.get(e);
            return r("LoadObject").withValue(
              (a = u == null ? void 0 : u.latest_action_timestamp) != null
                ? a
                : null,
              { creatorModuleID: i.id },
            );
          };
        },
        { name: i.id + ".adsUEditorAPlusCStickyOptInTimestampL0Selector" },
      );
    ((l.aplusCStickyStatusMapSelector = u),
      (l.aplusCAdAccountStickyConfigSelector = m),
      (l.adsUEditorAPlusCStickyOptInL0Selector = p),
      (l.adsUEditorAPlusCStickyOptInTimestampL0Selector = _));
  },
  98,
);
