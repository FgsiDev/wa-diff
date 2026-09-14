__d(
  "MobileFeedClientSideAdPreviewContext",
  ["WebApiApplication", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = u.createContext({
        initialFetchParams: {
          appId: (e = o("WebApiApplication").getClientID()) != null ? e : "",
        },
      });
    l.default = c;
  },
  98,
);
