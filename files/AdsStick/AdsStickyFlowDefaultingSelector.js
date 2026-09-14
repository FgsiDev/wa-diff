__d(
  "AdsStickyFlowDefaultingSelector",
  [
    "AdsStickyFlowDefaultingSelectorQuery.graphql",
    "adsCreateRelayStoreForMigration",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s =
        e !== void 0
          ? e
          : (e = n("AdsStickyFlowDefaultingSelectorQuery.graphql")),
      u = r("adsCreateRelayStoreForMigration")(
        r("AdsStickyFlowDefaultingSelectorQuery.graphql"),
        function (e) {
          return { pageID: e.pageID, should_skip: !1 };
        },
        function (e) {
          var t, n;
          return (t =
            e == null || (n = e.page) == null
              ? void 0
              : n.ctwa_sticky_flow_default_template_id) != null
            ? t
            : null;
        },
      ),
      c = u;
    l.default = c;
  },
  98,
);
