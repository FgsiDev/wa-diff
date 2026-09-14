__d(
  "AdsAutomaticFlowLiteLoggerUtils",
  ["AdsInterfacesLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t,
        n = e.adCreationSource,
        o = e.adgroupID,
        a = e.fragmentID,
        i = e.isNewFragment;
      r("AdsInterfacesLogger").log({
        data:
          ((t = {}),
          (t.adgroup_id = o),
          (t.fragment_id = a),
          (t.is_new_fragment = i),
          (t.object_creation_source = n),
          t),
        eventName: "automatic_flow_lite_publish",
      });
    }
    function s(e) {
      var t = e.adCreationSource,
        n = e.adgroupID,
        r = e.error,
        o = e.fragmentID,
        a = e.isNewFragment;
    }
    ((l.logSessionEnd = e), (l.logPublishFailed = s));
  },
  98,
);
