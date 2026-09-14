__d(
  "AdsFlexibleFormatDropdownTooltipUtils",
  ["AdsFlexibleFormatTooltipComponent.react", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e, t, n, r, a) {
      return s.jsx(
        o("AdsFlexibleFormatTooltipComponent.react")
          .AdsFlexibleFormatTooltipComponent,
        {
          description: t,
          imageBackgroundStyle: {
            backgroundColor: "#F2F2F2",
            flexGrow: 1,
            padding: "16px 0px 10px 0px",
          },
          imageSrc: n,
          imageStyle: a != null ? a : { width: "300px", height: "auto" },
          logData:
            (r == null ? void 0 : r.logData) == null || r == null
              ? void 0
              : r.logData,
          showImageInMiddle: !1,
          title: e,
        },
      );
    }
    ((u.displayName = u.name + " [from " + i.id + "]"),
      (l.renderFdoDropdownTooltip = u));
  },
  98,
);
