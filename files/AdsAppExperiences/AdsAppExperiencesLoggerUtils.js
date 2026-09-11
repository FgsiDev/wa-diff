__d(
  "AdsAppExperiencesLoggerUtils",
  ["AdsInterfacesLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "app_experiences";
    function s(e) {
      var t = {};
      for (var n of Object.keys(e)) {
        var r = e[n],
          o = {},
          a = !1;
        for (var i of Object.keys(r)) {
          var l = r[i] === !0;
          ((o[i] = l), (a = a || l));
        }
        t[n] = { sources: o, status: a };
      }
      return t;
    }
    function u(t, n) {
      var o;
      r("AdsInterfacesLogger").logOnce({
        eventName: "app_experiences_entry_point_impression",
        data:
          ((o = {}),
          (o.adgroup_id = t.toString()),
          (o.event_source = e),
          (o.status = n),
          o),
      });
    }
    var c = new Set();
    function d(t, n, o, a) {
      var i,
        l = t.toString(),
        s = l + ":" + a;
      c.has(s) ||
        (c.add(s),
        r("AdsInterfacesLogger").log({
          eventName: "app_experiences_modal_eligible",
          data:
            ((i = {}),
            (i.adgroup_id = l),
            (i.event_source = e),
            (i.component_name = a),
            (i.status = n.toString()),
            (i.subsequent_data = JSON.stringify(o)),
            i),
        }));
    }
    function m(t) {
      var n;
      r("AdsInterfacesLogger").log({
        eventName: "app_experiences_modal_open",
        data:
          ((n = {}), (n.adgroup_id = t.toString()), (n.event_source = e), n),
      });
    }
    function p(t, n, o, a) {
      var i;
      r("AdsInterfacesLogger").log({
        eventName: "app_experiences_modal_initial_status",
        data:
          ((i = {}),
          (i.adgroup_id = t.toString()),
          (i.event_source = e),
          (i.status = n.toString()),
          (i.subsequent_data = JSON.stringify(
            babelHelpers.extends({}, s(o), {
              metadata_type: a != null ? a : {},
            }),
          )),
          i),
      });
    }
    function _(t, n, o) {
      var a;
      r("AdsInterfacesLogger").log({
        eventName: "app_experiences_modal_save",
        data:
          ((a = {}),
          (a.adgroup_id = t.toString()),
          (a.event_source = e),
          (a.status = n.toString()),
          (a.subsequent_data = JSON.stringify(s(o))),
          a),
      });
    }
    function f(t, n, o, a) {
      var i;
      r("AdsInterfacesLogger").log({
        eventName: "app_experiences_toggle_changed",
        data:
          ((i = {}),
          (i.adgroup_id = t.toString()),
          (i.event_source = e),
          (i.component_name = n),
          (i.source = o),
          (i.status = a.toString()),
          i),
      });
    }
    ((l.logAppExperiencesEntryPointImpression = u),
      (l.logAppExperiencesModalEligible = d),
      (l.logAppExperiencesModalOpen = m),
      (l.logAppExperiencesModalInitialStatus = p),
      (l.logAppExperiencesModalSave = _),
      (l.logAppExperiencesToggleChanged = f));
  },
  98,
);
