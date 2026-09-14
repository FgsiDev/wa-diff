__d(
  "adsUEditorAdgroupHasWebsiteCTADestinationSelector",
  [
    "AdsAPIAdgroupRecordUtils",
    "AdsBulkValueUtils",
    "AdsProductExtensionsWebsiteCTAUtils",
    "AdsUEditorAdgroupExistingPostCTACommonSelectors",
    "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
    "adsCreateSelector",
    "adsUEditorAdObjectsForSelectedAdgroupsSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
      [
        r("adsUEditorAdObjectsForSelectedAdgroupsSelector"),
        o("AdsUEditorAdgroupExistingPostCTACommonSelectors")
          .existingPostCTABulkObjectSelector,
      ],
      function (t, n) {
        return t.length === 0
          ? !0
          : t.every(function (e) {
              var t = e.adgroup,
                r = e.campaign,
                a = e.campaignGroup;
              return o(
                "AdsProductExtensionsWebsiteCTAUtils",
              ).hasWebsiteCTADestination(
                t,
                o(
                  "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
                ).getAdgroupSpecPathPlugin({ campaign: r, campaignGroup: a }),
                o("AdsAPIAdgroupRecordUtils").isExistingPostAd(t) ? s(n) : null,
              );
            });
      },
      { name: i.id + ".adsUEditorAdgroupHasWebsiteCTADestinationSelector" },
    );
    function s(e) {
      if (!e.hasValue()) return null;
      var t = e.getValueEnforcing();
      return {
        link: o("AdsBulkValueUtils").getUniformValue(t.bulkDisplayCTALink),
        type: o("AdsBulkValueUtils").getUniformValue(t.bulkDisplayCTAType),
      };
    }
    l.adsUEditorAdgroupHasWebsiteCTADestinationSelector = e;
  },
  98,
);
