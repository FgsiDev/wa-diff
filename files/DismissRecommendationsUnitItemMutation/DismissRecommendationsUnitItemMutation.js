__d(
  "DismissRecommendationsUnitItemMutation",
  ["CometRelay", "DismissRecommendationsUnitItemMutation.graphql"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s =
        e !== void 0
          ? e
          : (e = n("DismissRecommendationsUnitItemMutation.graphql"));
    function u(e, t, n, r) {
      var a = function (t) {
        t.delete(n);
      };
      return o("CometRelay").commitMutation(e, {
        mutation: s,
        onError: r,
        optimisticUpdater: a,
        updater: a,
        variables: {
          input: { dismiss_item_id: n, recommendations_unit_id: t },
        },
      });
    }
    l.commit = u;
  },
  98,
);
