__d(
  "adsUEditorWebsiteSellingPointsStickyOptInSelector",
  ["adsCreateSelector", "userSettingsSelector"],
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
                return e.website_selling_points_data_opt_in_status ===
                  "OPTED_IN"
                  ? !0
                  : e.website_selling_points_data_opt_in_status === "OPTED_OUT"
                    ? !1
                    : null;
              })) != null
          ? e
          : null;
      },
      { name: i.id + ".adsUEditorWebsiteSellingPointsStickyOptInSelector" },
    );
    l.adsUEditorWebsiteSellingPointsStickyOptInSelector = e;
  },
  98,
);
