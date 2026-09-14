__d(
  "AdsCFWebsiteAndAppPromotedObjectUtils",
  ["immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.conversion.pixelData,
        n = t.customEventType,
        o = t.eventName,
        a = t.id,
        i = t.rule,
        l = r("immutable").Map([
          ["pixel_id", a],
          ["custom_event_type", n],
          ["pixel_rule", i],
        ]);
      return n === "OTHER" ? l.set("custom_event_str", o) : l;
    }
    function s(e) {
      var t = e.conversion.applicationData,
        n = t.customEventType,
        o = t.eventName,
        a = t.id,
        i = r("immutable").Map([
          ["application_id", a],
          ["custom_event_type", n],
          ["object_store_urls", e.objectStoreUrls],
        ]);
      return n === "OTHER" ? i.set("custom_event_str", o) : i;
    }
    function u(t, n) {
      return n != null
        ? r("immutable").List([e(n)])
        : t.pixelID == null
          ? r("immutable").List()
          : r("immutable").List([
              r("immutable").Map([
                ["pixel_id", t.pixelID],
                ["custom_event_type", t.customEventType],
                ["pixel_rule", t.pixelRule],
              ]),
            ]);
    }
    ((l.buildMCMEPixelObject = e),
      (l.buildMCMEAppObject = s),
      (l.buildOmnichannelPixelList = u));
  },
  98,
);
