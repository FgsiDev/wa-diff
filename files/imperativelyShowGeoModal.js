__d(
  "imperativelyShowGeoModal",
  [
    "fbt",
    "DOM",
    "GeoButton.react",
    "GeoModal.react",
    "GeoModalFooter.react",
    "GeoModalHeader.react",
    "GeoSection.react",
    "GeoText.react",
    "ReactDOM",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = r("DOM").create("div"),
        n = o("ReactDOM").createRoot(t),
        a = function () {
          (e.callback && e.callback(!1), n.unmount(), r("DOM").remove(t));
        },
        i = function () {
          (e.callback && e.callback(!0), n.unmount(), r("DOM").remove(t));
        };
      n.render(
        u.jsx(r("GeoModal.react"), {
          footer: u.jsx(r("GeoModalFooter.react"), {
            "data-testid": void 0,
            logging: { surface: "imperatively_show_geo_modal_yv2c" },
            primaryButton: u.jsx(r("GeoButton.react"), {
              label: s._(/*BTDS*/ "OK"),
              onClick: i,
              variant: "primary",
            }),
            secondaryButton:
              e.showCancelButton === !0
                ? u.jsx(r("GeoButton.react"), {
                    label: s._(/*BTDS*/ "Cancel"),
                    onClick: a,
                  })
                : void 0,
          }),
          header: u.jsx(r("GeoModalHeader.react"), { heading: e.title }),
          label: e.label,
          onHide: a,
          children: u.jsx(r("GeoSection.react"), {
            children:
              e.body != null && u.jsx(r("GeoText.react"), { children: e.body }),
          }),
        }),
      );
    }
    l.default = c;
  },
  226,
);
