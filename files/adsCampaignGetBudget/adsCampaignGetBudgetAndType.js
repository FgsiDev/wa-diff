__d(
  "adsCampaignGetBudgetAndType",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      return e
        ? { budget: e, mode: "daily" }
        : t
          ? { budget: t, mode: "lifetime" }
          : e != null
            ? { budget: e, mode: "daily" }
            : t != null
              ? { budget: t, mode: "lifetime" }
              : { budget: 0, mode: "daily" };
    }
    i.default = e;
  },
  66,
);
