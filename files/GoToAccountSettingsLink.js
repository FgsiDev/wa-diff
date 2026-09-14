__d(
  "GoToAccountSettingsLink",
  [
    "ASAAccountSettingLinksStrings",
    "AdsInterfacesLogger",
    "GeoLink.react",
    "URI",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react"));
    function c(t) {
      var n = o("react-compiler-runtime").c(10),
        a = t.adAccountID,
        i = t.entryPoint,
        l = t.eventCategory,
        s = t.linkText,
        c = t.navEntryPoint;
      if (a == null) return null;
      var d;
      n[0] !== a
        ? ((d = new (e || (e = r("URI")))(
            "/ads/manager/account_settings/information",
          ).addQueryData("act", a)),
          (n[0] = a),
          (n[1] = d))
        : (d = n[1]);
      var m = d,
        p;
      n[2] !== i || n[3] !== l || n[4] !== c
        ? ((p = function () {
            r("AdsInterfacesLogger").logOnce({
              eventName: "ad_account_settings_page_entry",
              eventCategory: l,
              data: {
                event_source: c,
                message: i,
                to_section: "account_settings",
                to_tool: "information",
                source: "old_ad_account_settings",
              },
            });
          }),
          (n[2] = i),
          (n[3] = l),
          (n[4] = c),
          (n[5] = p))
        : (p = n[5]);
      var _ =
          s != null
            ? s
            : o("ASAAccountSettingLinksStrings").EXISTING_CUSTOMERS_NOTICE_LINK,
        f;
      return (
        n[6] !== p || n[7] !== _ || n[8] !== m
          ? ((f = u.jsx(r("GeoLink.react"), {
              href: m,
              onClick: p,
              target: "_blank",
              children: _,
            })),
            (n[6] = p),
            (n[7] = _),
            (n[8] = m),
            (n[9] = f))
          : (f = n[9]),
        f
      );
    }
    l.default = c;
  },
  98,
);
