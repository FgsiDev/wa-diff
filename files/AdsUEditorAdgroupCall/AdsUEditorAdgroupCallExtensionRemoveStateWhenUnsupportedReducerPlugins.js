__d(
  "AdsUEditorAdgroupCallExtensionRemoveStateWhenUnsupportedReducerPlugins",
  ["AdsLinkPostFormat"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          var e = t;
          return (
            n.linkPostFormat !== r("AdsLinkPostFormat").SINGLE &&
              n.adgroupIDs.forEach(function (t) {
                var n;
                e = e.set(t, {
                  preventAutomaticEnable:
                    ((n = e.get(t)) == null
                      ? void 0
                      : n.preventAutomaticEnable) || !1,
                });
              }),
            e
          );
        },
      },
      s = {
        reduce: function (t, n) {
          var e = t;
          return (
            n.adgroupIDs.forEach(function (t) {
              var n;
              e = e.set(t, {
                preventAutomaticEnable:
                  ((n = e.get(t)) == null
                    ? void 0
                    : n.preventAutomaticEnable) || !1,
              });
            }),
            e
          );
        },
      },
      u = {
        reduce: function (t, n) {
          var e = t;
          return (
            n.linkType !== "external" &&
              n.adgroupIDs.forEach(function (t) {
                var n;
                e = e.set(t, {
                  preventAutomaticEnable:
                    ((n = e.get(t)) == null
                      ? void 0
                      : n.preventAutomaticEnable) || !1,
                });
              }),
            e
          );
        },
      },
      c = {
        reduce: function (t, n) {
          var e = t;
          return (
            n.adgroupIDs.forEach(function (t) {
              var n;
              e = e.set(t, {
                preventAutomaticEnable:
                  ((n = e.get(t)) == null
                    ? void 0
                    : n.preventAutomaticEnable) || !1,
              });
            }),
            e
          );
        },
      },
      d = {
        reduce: function (t, n) {
          var e = t;
          return (
            n.adgroupIDs.forEach(function (t) {
              var n;
              e = e.set(t, {
                preventAutomaticEnable:
                  ((n = e.get(t)) == null
                    ? void 0
                    : n.preventAutomaticEnable) || !1,
              });
            }),
            e
          );
        },
      },
      m = {
        reduce: function (t, n) {
          if (n.websiteExtensionType === "phone_call") return t;
          var e = t;
          return (
            n.adgroupIDs.forEach(function (t) {
              var n;
              e = e.set(t, {
                preventAutomaticEnable:
                  ((n = e.get(t)) == null
                    ? void 0
                    : n.preventAutomaticEnable) || !1,
              });
            }),
            e
          );
        },
      };
    ((l.AdsUEditorAdgroupCallExtensionRemoveStateWhenLinkPostReducerPlugin = e),
      (l.AdsUEditorAdgroupCallExtensionRemoveStateWhenCanvasReducerPlugin = s),
      (l.AdsUEditorAdgroupCallExtensionRemoveStateWhenLinkTypeReducerPlugin =
        u),
      (l.AdsUEditorAdgroupCallExtensionRemoveStateWhenPageReducerPlugin = c),
      (l.AdsUEditorAdgroupCallExtensionRemoveStateWhenSetPagePostReducerPlugin =
        d),
      (l.AdsUEditorAdgroupCallExtensionRemoveStateWhenSetWebsiteExtensionType =
        m));
  },
  98,
);
