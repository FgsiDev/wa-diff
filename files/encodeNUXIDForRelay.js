__d(
  "encodeNUXIDForRelay",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = "NUX_ID:";
    function l(t) {
      return typeof t == "string" && t.startsWith(e)
        ? { nuxID: Number(t.replace(e, "")), relayID: t }
        : { nuxID: Number(t), relayID: e + t };
    }
    i.default = l;
  },
  66,
);
