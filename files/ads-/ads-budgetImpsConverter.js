__d(
  "ads-budgetImpsConverter",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      convertToBudget: function (t, n) {
        /,/.test(n) && (n = n.replace(/,/g, ""));
        var e = Number(n);
        return e ? Math.round((t / 1e3) * e) : 0;
      },
      convertToImps: function (t, n, r) {
        return (
          (r = r || 100),
          (n = n * 1),
          n ? Math.round((t / r / n) * 1e3) : 0
        );
      },
    };
    i.Converter = e;
  },
  66,
);
