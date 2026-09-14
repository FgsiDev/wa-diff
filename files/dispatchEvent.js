__d(
  "dispatchEvent",
  [],
  function (t, n, r, o, a, i) {
    function e(e, n) {
      var r;
      (typeof t.Event == "function"
        ? (r = new t.Event(n))
        : ((r = t.document.createEvent("Event")), r.initEvent(n, !0, !0)),
        e.dispatchEvent(r));
    }
    i.default = e;
  },
  66,
);
