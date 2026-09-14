__d(
  "AdsPELoggerLogDraftPublishWillComplete",
  [
    "AdsCrepePublishingLogger",
    "AdsDraftFragmentListStore",
    "AdsDraftFragmentStore",
    "AdsDraftGroupByUtils",
    "AdsPEDraftPublishAdgroupFragmentLogger",
    "AdsPEDraftPublishCampaignFragmentLogger",
    "AdsPEDraftPublishCampaignGroupFragmentLogger",
    "AdsPEDraftPublishLoggerHelper",
    "AdsPELoggerGetAsyncRequestMetadata",
    "AdsPELoggerLogDraftPublishWillCompleteStoreUtils",
    "getByPath",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = r("AdsPELoggerGetAsyncRequestMetadata")(e.response),
        n = t.immediate,
        a = t.object_creation_source;
      o("AdsPELoggerLogDraftPublishWillCompleteStoreUtils").log(
        "publish_will_complete",
        babelHelpers.extends(
          {},
          o("AdsPEDraftPublishLoggerHelper").getPublishWillCompleteData(e),
          { immediate: n, object_creation_source: a },
        ),
        "upload",
      );
      var i = r("getByPath")(e, ["response", "fragment_statuses", "data"], []),
        l = e.draftID,
        s = new Map(),
        u = r("AdsDraftFragmentListStore").getFor(l),
        c = r("AdsDraftFragmentStore").getAllCached(u.list),
        d = i.map(function (e) {
          return e.fragment_id;
        });
      for (var m of c) {
        var p = m[0],
          _ = m[1];
        d.includes(_.id) && s.set(p, _);
      }
      var f = new Map(
          i.map(function (e) {
            return [e.ad_object_id, e.status];
          }),
        ),
        g = o("AdsDraftGroupByUtils").groupFragmentsByLevel(s),
        h = null,
        y = g.ad || [];
      h = o("AdsPEDraftPublishAdgroupFragmentLogger").processAdgroupFragments(
        y,
        f,
        e,
        a,
        n,
        h,
      );
      var C = g.ad_set || [];
      h = o("AdsPEDraftPublishCampaignFragmentLogger").processCampaignFragments(
        C,
        e,
        a,
        n,
        h,
      );
      var b = g.campaign || [];
      ((h = o(
        "AdsPEDraftPublishCampaignGroupFragmentLogger",
      ).processCampaignGroupFragments(b, e, n, h)),
        h != null && o("AdsCrepePublishingLogger").logPackagePublished(h));
    }
    l.default = e;
  },
  98,
);
