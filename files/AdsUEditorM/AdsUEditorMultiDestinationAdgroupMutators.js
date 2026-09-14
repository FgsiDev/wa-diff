__d(
  "AdsUEditorMultiDestinationAdgroupMutators",
  [
    "AdsAdgroupRecordAccessors",
    "AdsInterfacesLogger",
    "AdsMessengerConstants",
    "AdsMutators",
    "AdsUEditorInstagramUtils",
    "AdsUEditorUnifiedCreationUtils",
    "AdsUnifiedProfileVisitUtils",
    "AdsWhatsAppUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      if (
        o(
          "AdsUEditorUnifiedCreationUtils",
        ).isMultiDestinationMessagingFromAdSpec(e) ||
        o(
          "AdsUnifiedProfileVisitUtils",
        ).isMultiDestinationProfileVisitsFromAdSpec(e)
      ) {
        var t = r(
          "AdsAdgroupRecordAccessors",
        ).creative.object_story_spec.link_data.link.get(e);
        if (
          t === o("AdsMessengerConstants").EMPTY_MESSENGER_LINK ||
          t === o("AdsWhatsAppUtils").getDefaultCTALink() ||
          t === o("AdsUEditorInstagramUtils").DEFAULT_INSTAGRAM_LINK
        ) {
          var n;
          r("AdsInterfacesLogger").log(
            {
              eventName: "stale_messaging_link_on_cta_switch",
              data:
                ((n = {}),
                (n.message = "MULTI_DEST_CLEANUP_WITHOUT_CTA_LINK_CLEAR"),
                (n.stale_link = t),
                n),
            },
            r("AdsInterfacesLogger").LOG_TYPE_PRIMARY_APP,
          );
        }
        return o("AdsMutators").chain(
          r("AdsAdgroupRecordAccessors").creative.asset_feed_spec.delete,
          r("AdsAdgroupRecordAccessors").creative.object_story_spec.link_data
            .name.delete,
        )(e);
      }
      return e;
    }
    l.cleanMultiDestAdSpecOnConversionLocationChange = e;
  },
  98,
);
