__d(
  "AdsPACSpecMutationAsyncLog",
  ["AdsInterfacesLogger", "adsHasValidAdlabelsForPACAds"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t, n, o) {
      var e = Date.now(),
        a = r("adsHasValidAdlabelsForPACAds")(t),
        i = a.length === 0;
      r("AdsInterfacesLogger").log({
        eventName: "LOG_PAC_SPEC_" + n,
        data: {
          adgroup_id: t.id,
          current_action_time: e,
          event_source: o,
          field_names: a,
          sub_event: i ? "VALID_EVENT" : "INVALID_EVENT",
        },
      });
    };
    l.log = e;
  },
  98,
);
