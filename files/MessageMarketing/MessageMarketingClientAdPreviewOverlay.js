__d(
  "MessageMarketingClientAdPreviewOverlay",
  [
    "fbt",
    "CenteredContainer.react",
    "CurrentUser",
    "GeoHeading.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = { root: { width: "x1m258z3", $$css: !0 } };
    function d() {
      var e = o("react-compiler-runtime").c(1),
        t;
      return (
        e[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = r("CurrentUser").isEmployee()
              ? u.jsxs(r("CenteredContainer.react"), {
                  horizontal: !0,
                  vertical: !0,
                  xstyle: c.root,
                  children: [
                    u.jsx(r("GeoHeading.react"), {
                      level: 4,
                      textAlign: "center",
                      children: s._(
                        /*BTDS*/ "[FB-Only] Marketing Message CSAP",
                      ),
                    }),
                    u.jsx("span", {
                      children: s._(
                        /*BTDS*/ "This message preview is powered by Client Side Ad Preview",
                      ),
                    }),
                    u.jsx("span", {
                      children: s._(
                        /*BTDS*/ "If anything looks off, please report {link} .",
                        [
                          s._param(
                            "link",
                            u.jsx("a", {
                              href: "https://fb.workplace.com/groups/872742301123954/",
                              target: "_blank",
                              children: s._(/*BTDS*/ "here"),
                            }),
                          ),
                        ],
                      ),
                    }),
                  ],
                })
              : null),
            (e[0] = t))
          : (t = e[0]),
        t
      );
    }
    l.default = d;
  },
  226,
);
