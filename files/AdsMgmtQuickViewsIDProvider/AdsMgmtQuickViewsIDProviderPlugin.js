__d(
  "AdsMgmtQuickViewsIDProviderPlugin",
  ["URI"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = r("URI"))).getRequestURI().getQueryData().quick_view_id,
      u = { initialState: { quickViewID: s != null ? s : null } },
      c = u;
    l.default = c;
  },
  98,
);
