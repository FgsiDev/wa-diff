__d(
  "ScriptPathState",
  ["Arbiter"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = 100,
      m = {
        setIsUIPageletRequest: function (t) {
          u = t;
        },
        setUserURISampleRate: function (t) {
          c = t;
        },
        reset: function () {
          ((e = null), (s = !1), (u = !1));
        },
        _shouldUpdateScriptPath: function () {
          return s && !u;
        },
        _shouldSendURI: function () {
          return Math.random() < c;
        },
        getParams: function () {
          var t = {};
          return (
            m._shouldUpdateScriptPath()
              ? m._shouldSendURI() &&
                e !== null &&
                (t.user_uri = e.substring(0, d))
              : (t.no_script_path = 1),
            t
          );
        },
      };
    r("Arbiter").subscribe("pre_page_transition", function (t, n) {
      ((s = !0), (e = n.to.getUnqualifiedURI().toString()));
    });
    var p = (t.ScriptPathState = m);
    l.default = p;
  },
  98,
);
