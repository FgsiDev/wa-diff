__d(
  "adsUEditorCropAndExpandPlacementGroupStickyOptInL0Selector",
  ["LoadObject", "adsCreateSelector", "justknobx", "userSettingsSelector"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
      [r("userSettingsSelector")],
      function (t) {
        var e;
        return r("justknobx")._("2672")
          ? (e =
              t == null
                ? void 0
                : t.mapValue(function (e) {
                    var t = e.placement_group_square_opt_in_status,
                      n = e.placement_group_vertical_opt_in_status,
                      r = {
                        VERTICAL:
                          n === "OPTED_IN" ? !0 : n === "OPTED_OUT" ? !1 : null,
                        SQUARE:
                          t === "OPTED_IN" ? !0 : t === "OPTED_OUT" ? !1 : null,
                      };
                    return r;
                  })) != null
            ? e
            : r("LoadObject").withValue(null, { creatorModuleID: i.id })
          : r("LoadObject").withValue(null, { creatorModuleID: i.id });
      },
      {
        name:
          i.id + ".adsUEditorCropAndExpandPlacementGroupStickyOptInL0Selector",
      },
    );
    l.adsUEditorCropAndExpandPlacementGroupStickyOptInL0Selector = e;
  },
  98,
);
