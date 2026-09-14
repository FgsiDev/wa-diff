__d(
  "CommerceSession",
  ["WebSession"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = o("WebSession").getId();
    function s(t) {
      e = t;
    }
    function u() {
      return e;
    }
    ((l.setCurrentSession = s), (l.getSerializedSessionId = u));
  },
  98,
);
