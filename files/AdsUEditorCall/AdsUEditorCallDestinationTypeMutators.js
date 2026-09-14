__d(
  "AdsUEditorCallDestinationTypeMutators",
  [
    "AdsAdgroupRecordAccessors",
    "AdsUEditorAdgroupCallAdsConfigurationUtils",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return r(
        "AdsAdgroupRecordAccessors",
      ).creative.asset_feed_spec.call_ads_configuration.call_destination_type.set(
        t,
        e,
      );
    }
    function s(e) {
      return r(
        "AdsAdgroupRecordAccessors",
      ).creative.asset_feed_spec.call_ads_configuration.call_destination_type.delete(
        e,
      );
    }
    function u(t, n) {
      var a = t;
      if (((a = e(a, "WHATSAPP")), r("isStringNullOrEmpty")(n)))
        ((a = o("AdsUEditorAdgroupCallAdsConfigurationUtils").clearPhoneNumber(
          a,
        )),
          (a = d(a)));
      else {
        a = r(
          "AdsAdgroupRecordAccessors",
        ).creative.asset_feed_spec.call_ads_configuration.phone_number.set(
          n,
          a,
        );
        var i = n.startsWith("tel:") ? n : "tel:" + n;
        a = c(a, i);
      }
      return a;
    }
    function c(e, t) {
      var n,
        o = e,
        a =
          (n = e.creative) == null || (n = n.object_story_spec) == null
            ? void 0
            : n.video_data;
      return (
        a
          ? ((o = r(
              "AdsAdgroupRecordAccessors",
            ).creative.object_story_spec.video_data.call_to_action.type.set(
              "CALL_NOW",
              o,
            )),
            (o = r(
              "AdsAdgroupRecordAccessors",
            ).creative.object_story_spec.video_data.call_to_action.value.link.set(
              t,
              o,
            )))
          : ((o = r(
              "AdsAdgroupRecordAccessors",
            ).creative.object_story_spec.link_data.call_to_action.type.set(
              "CALL_NOW",
              o,
            )),
            (o = r(
              "AdsAdgroupRecordAccessors",
            ).creative.object_story_spec.link_data.call_to_action.value.link.set(
              t,
              o,
            ))),
        o
      );
    }
    function d(e) {
      var t,
        n = e,
        o =
          (t = e.creative) == null || (t = t.object_story_spec) == null
            ? void 0
            : t.video_data;
      return (
        o
          ? (n = r(
              "AdsAdgroupRecordAccessors",
            ).creative.object_story_spec.video_data.call_to_action.value.link.delete(
              n,
            ))
          : (n = r(
              "AdsAdgroupRecordAccessors",
            ).creative.object_story_spec.link_data.call_to_action.value.link.delete(
              n,
            )),
        n
      );
    }
    ((l.setCallDestinationType = e),
      (l.clearCallDestinationType = s),
      (l.setWhatsAppCallDestinationWithWhatsAppNumber = u));
  },
  98,
);
