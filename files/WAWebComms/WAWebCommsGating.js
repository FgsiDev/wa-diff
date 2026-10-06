__d(
  "WAWebCommsGating",
  ["WAWebABProps"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return o("WAWebABProps").getABPropConfigValue(
        "waweb_comms_in_backend_worker",
      );
    }
    l.isCommsInWorker = e;
  },
  98,
);
