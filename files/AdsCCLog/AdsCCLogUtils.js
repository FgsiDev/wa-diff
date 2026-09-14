__d(
  "AdsCCLogUtils",
  ["AdsInterfacesLogger", "immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "AdsContentCards",
      s = "ContentCard",
      u = "INLINE",
      c = r("immutable").Set();
    function d(e, t) {
      r("AdsInterfacesLogger").log({ eventName: e, data: t });
    }
    function m(t, n, r, o, a, i) {
      var l;
      d(
        "ahg_message_click",
        ((l = {}),
        (l.content = t),
        (l.message_id = n),
        (l.subobject_category = r),
        (l.subobject_type = o),
        (l.subobject_id = a.toString()),
        (l.component_name = e),
        (l.message_format = u),
        (l.ahg_log_source = s),
        (l.am_fragment_id = i),
        l),
      );
    }
    function p(e, t, n, r, o) {
      c.has(e) || (c = c.add(e));
    }
    ((l.logClickCTA = m), (l.logMountCard = p));
  },
  98,
);
