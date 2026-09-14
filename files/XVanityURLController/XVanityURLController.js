__d(
  "XVanityURLController",
  ["XController"],
  function (t, n, r, o, a, i) {
    a.exports = n("XController").create("/{vanity}/", {
      and: { type: "String" },
      filter: { type: "Int" },
      sk: { type: "String" },
      v: { type: "String" },
      vanity: { type: "StringOrPFBID", required: !0 },
      __xts__: { type: "StringVector" },
      __tn__: { type: "String" },
      redto: { type: "String" },
      hr: { type: "Bool", defaultValue: !1 },
    });
  },
  null,
);
