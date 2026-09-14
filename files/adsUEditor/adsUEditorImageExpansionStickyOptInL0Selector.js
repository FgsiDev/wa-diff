__d(
  "adsUEditorImageExpansionStickyOptInL0Selector",
  ["LoadObject", "adsCreateSelector", "userSettingsSelector"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
      [r("userSettingsSelector")],
      function (t) {
        var e;
        return (e =
          t == null
            ? void 0
            : t.mapValue(function (e) {
                var t, n, o, a;
                if (e.image_expansion_opt_in_status === "OPTED_IN")
                  return r("LoadObject").withValue(!0, {
                    creatorModuleID: i.id,
                  });
                if (e.image_expansion_opt_in_status === "OPTED_OUT")
                  return r("LoadObject").withValue(!1, {
                    creatorModuleID: i.id,
                  });
                var l = e.creative_feature_default_config,
                  s =
                    l == null || (t = l.aplusc_sticky_opt_in_status_v2) == null
                      ? void 0
                      : t.find(function (e) {
                          return e.key === "image_uncrop";
                        });
                if (
                  (s == null || (n = s.value) == null ? void 0 : n.status) ===
                  "OPTED_IN"
                )
                  return r("LoadObject").withValue(!0, {
                    creatorModuleID: i.id,
                  });
                if (
                  (s == null || (o = s.value) == null ? void 0 : o.status) ===
                  "OPTED_OUT"
                )
                  return r("LoadObject").withValue(!1, {
                    creatorModuleID: i.id,
                  });
                var u =
                  l == null || (a = l.aplusc_sticky_opt_in_status) == null
                    ? void 0
                    : a.find(function (e) {
                        return e.key === "image_uncrop";
                      });
                return (u == null ? void 0 : u.value) === "OPTED_IN"
                  ? r("LoadObject").withValue(!0, { creatorModuleID: i.id })
                  : (u == null ? void 0 : u.value) === "OPTED_OUT"
                    ? r("LoadObject").withValue(!1, { creatorModuleID: i.id })
                    : r("LoadObject").withValue(null, {
                        creatorModuleID: i.id,
                      });
              })) != null
          ? e
          : r("LoadObject").withValue(null, { creatorModuleID: i.id });
      },
      { name: i.id + ".adsUEditorImageExpansionStickyOptInL0Selector" },
    );
    l.adsUEditorImageExpansionStickyOptInL0Selector = e;
  },
  98,
);
