__d(
  "AdsUEditorAdgroupSetCreativeFlexRelatedMediaSpecSilentDropLoggerPlugin",
  ["AdsInterfacesLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        log: function (t, n) {
          var e,
            o = n.adgroupState;
          if (!(t.adgroupIDs.length === 0 || t.relatedMediaMap.size === 0)) {
            var a = t.adgroupIDs.some(function (e) {
              var t = o.get(e);
              return t != null && t.hasValue();
            });
            if (!a) {
              if (t.websiteMediaHashMap != null) {
                var i;
                r("AdsInterfacesLogger").log({
                  eventName: "website_media_eager_path_ineligible",
                  data:
                    ((i = {}),
                    (i.adgroup_id = t.adgroupIDs[0]),
                    (i.subsequent_data =
                      "dispatch_silent_drop|actionCategory:" +
                      String(t.actionCategory) +
                      "|relatedMediaCount:" +
                      String(t.relatedMediaMap.size) +
                      "|requestedAdgroups:" +
                      String(t.adgroupIDs.length) +
                      "|processedAdgroups:0"),
                    i),
                });
                return;
              }
              o.size !== 0 &&
                r("AdsInterfacesLogger").log({
                  eventName: "creative_flex_debug",
                  data:
                    ((e = {}),
                    (e.adgroup_id = t.adgroupIDs[0]),
                    (e.event_source = "related_media_spec_silent_drop"),
                    (e.subsequent_data =
                      "actionCategory:" +
                      String(t.actionCategory) +
                      "|hostID:" +
                      String(t.hostID) +
                      "|relatedMediaCount:" +
                      String(t.relatedMediaMap.size) +
                      "|requestedAdgroups:" +
                      String(t.adgroupIDs.length) +
                      "|providerAdgroups:" +
                      String(o.size)),
                    e),
                });
            }
          }
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
