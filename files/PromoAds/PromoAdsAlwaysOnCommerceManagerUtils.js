__d(
  "PromoAdsAlwaysOnCommerceManagerUtils",
  [
    "fbt",
    "GeoBaseText.react",
    "GeoLink.react",
    "GeoVStack.react",
    "cr:2084",
    "cr:2424",
    "cr:2456",
    "cr:3192",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c(e, t) {
      return e == null || n("cr:2456") == null
        ? null
        : n("cr:2456")
            .buildUri(
              babelHelpers.extends(
                { catalog_or_cms_id: e },
                t != null ? { business_id: t } : null,
              ),
            )
            .toString();
    }
    function d(e, t) {
      return e == null || n("cr:3192") == null || n("cr:2084") == null
        ? null
        : n("cr:3192")
            .buildUri(
              babelHelpers.extends(
                { catalog_or_cms_id: e },
                t != null ? { business_id: t } : null,
                { settings_sub_tab: n("cr:2084").OFFER_MERCHANDISING },
              ),
            )
            .toString();
    }
    function m(e, t) {
      var o = c(e, t),
        a =
          e != null && n("cr:2424") != null
            ? n("cr:2424")
                .buildUri(
                  babelHelpers.extends(
                    { catalog_or_cms_id: e },
                    t != null ? { business_id: t } : null,
                  ),
                )
                .toString()
            : null;
      return u.jsxs(r("GeoVStack.react"), {
        children: [
          u.jsx(r("GeoBaseText.react"), {
            color: "placeholder",
            size: "accent",
            children: s._(/*BTDS*/ "Only valid promo codes can be used."),
          }),
          u.jsx(r("GeoBaseText.react"), {
            color: "placeholder",
            size: "accent",
            children: s._(
              /*BTDS*/ "To turn off {offers link} detected from your ads and website and {email sign-up offers link} go to Commerce Manager. These offers will no longer appear on your ads, including after someone taps.",
              [
                s._param(
                  "offers link",
                  o != null
                    ? u.jsx(r("GeoLink.react"), {
                        href: o,
                        target: "_blank",
                        children: s._(/*BTDS*/ "offers"),
                      })
                    : s._(/*BTDS*/ "offers"),
                ),
                s._param(
                  "email sign-up offers link",
                  a != null
                    ? u.jsx(r("GeoLink.react"), {
                        href: a,
                        target: "_blank",
                        children: s._(/*BTDS*/ "email sign-up offers"),
                      })
                    : s._(/*BTDS*/ "email sign-up offers"),
                ),
              ],
            ),
          }),
        ],
      });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.getAlwaysOnSettingsUrl = d),
      (l.getAlwaysOnDisclaimer = m));
  },
  226,
);
