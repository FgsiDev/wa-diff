__d(
  "adsUEditorCampaignGroupEventDetectionEnabledByDefaultSelector",
  [
    "AdsAccountStore",
    "AdsReminderAdsAdAccountDataStore",
    "AdsReminderAdsAdgroupDefaultOptinDataProvider",
    "AdsUEditorAdgroupUpcomingEventDetailsDateDetectionUtil",
    "adsChooseSelector",
    "adsCreateSelector",
    "adsCreateStoreSelector",
    "adsUEditorAdPlainObjectsForSelectedAdgroupsSelector",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = !0,
      s = r("adsCreateStoreSelector")(
        [r("AdsAccountStore"), r("AdsReminderAdsAdAccountDataStore")],
        function () {
          var e = r("AdsAccountStore").getSelectedAccountID();
          if (e != null) {
            var t, n;
            return (t =
              (n = r("AdsReminderAdsAdAccountDataStore").get(e).getValue()) ==
              null
                ? void 0
                : n.manual_opt_out_count) != null
              ? t
              : 0;
          }
          return 0;
        },
        { name: i.id + ".manualOptOutCountStoreSelector" },
      ),
      u = r("adsCreateStoreSelector")(
        [r("AdsAccountStore"), r("AdsReminderAdsAdAccountDataStore")],
        function () {
          var e = r("AdsAccountStore").getSelectedAccountID();
          if (e != null) {
            var t;
            return (t = r("AdsReminderAdsAdAccountDataStore")
              .get(e)
              .getValue()) == null
              ? void 0
              : t.cool_down_end_date_time;
          }
          return null;
        },
        { name: i.id + ".coolDownEndDateTimeStoreSelector" },
      ),
      c = r("adsCreateSelector")(
        [
          r("AdsReminderAdsAdgroupDefaultOptinDataProvider").toFluxSelector(),
          r("adsUEditorAdPlainObjectsForSelectedAdgroupsSelector"),
        ],
        function (t, n) {
          return n
            .map(function (e) {
              var n = e.adgroup;
              return t.includes(n.id);
            })
            .some(Boolean);
        },
        { name: i.id + ".adgroupOptoutStoreSelector" },
      ),
      d = r("adsChooseSelector")(
        function () {
          return !r("justknobx")._("3688");
        },
        r("adsCreateSelector")(
          [s, u, c],
          function (t, n, r) {
            return (
              o(
                "AdsUEditorAdgroupUpcomingEventDetailsDateDetectionUtil",
              ).shouldEnableAutoDetectByDefault(t, n) && !r
            );
          },
          { name: i.id },
        ),
        r("adsCreateSelector")(
          [],
          function () {
            return e;
          },
          { name: i.id },
        ),
        !0,
        i.id + ".adsUEditorCampaignGroupEventDetectionEnabledByDefaultSelector",
      ),
      m = d;
    l.default = m;
  },
  98,
);
