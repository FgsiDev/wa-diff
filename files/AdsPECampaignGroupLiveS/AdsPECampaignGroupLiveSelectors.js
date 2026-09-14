__d(
  "AdsPECampaignGroupLiveSelectors",
  [
    "AdsAPICampaignGroupRecord",
    "AdsPECampaignGroupLiveTableStore",
    "adsCreateStoreThunkSelector",
    "memoizeMapImmutableMap",
    "memoizeWithArgsByKey",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = r("memoizeWithArgsByKey")(function (e) {
        return e.map(function (e) {
          return new (r("AdsAPICampaignGroupRecord"))(e);
        });
      }),
      c = r("memoizeMapImmutableMap")(u),
      d = (e = r("adsCreateStoreThunkSelector"))(
        (s = r("AdsPECampaignGroupLiveTableStore")),
        function (e) {
          return r("AdsPECampaignGroupLiveTableStore").get(e);
        },
      ),
      m = e(s, function (e) {
        return r("AdsPECampaignGroupLiveTableStore").getRecord(e);
      }),
      p = e(s, function (e) {
        return r("AdsPECampaignGroupLiveTableStore").getAll(e);
      }),
      _ = e(s, function (e) {
        return r("AdsPECampaignGroupLiveTableStore").getAllRecords(e);
      }),
      f = e(s, function (e, t) {
        return r("AdsPECampaignGroupLiveTableStore").getByFields(e, t);
      });
    ((l.getSelector = d),
      (l.getRecordSelector = m),
      (l.getAllSelector = p),
      (l.getAllRecordsSelector = _),
      (l.getByFieldsSelector = f));
  },
  98,
);
