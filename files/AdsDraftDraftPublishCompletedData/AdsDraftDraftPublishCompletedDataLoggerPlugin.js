__d(
  "AdsDraftDraftPublishCompletedDataLoggerPlugin",
  [
    "AdAsyncRequestStatus",
    "AdsDataAtom",
    "AdsDraftPublishProvider",
    "AdsInterfacesPredictedOutcomesLogger",
    "adsMgmtLogger",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = {
        log: function (n) {
          var t,
            a =
              (t = n.response) == null || (t = t.fragment_statuses) == null
                ? void 0
                : t.data;
          if (a) {
            var i = a.reduce(function (e, t) {
              return (
                t.ad_object_type === "ad_set" &&
                  t.status === r("AdAsyncRequestStatus").SUCCESS &&
                  e.push(t.ad_object_id),
                e
              );
            }, []);
            o("AdsInterfacesPredictedOutcomesLogger").logSubmit(i, "edit");
          } else
            o("AdsInterfacesPredictedOutcomesLogger").logSubmit([], "edit");
          ((e || (e = r("AdsDataAtom"))).waitFor([
            r("AdsDraftPublishProvider").toFluxStore().getDispatchToken(),
          ]),
            r("adsMgmtLogger")("active_publish_ids_on_publish_complete", {
              publish_ids: r("AdsDraftPublishProvider")
                .toFluxStore()
                .getState()
                .activePublishIDs.toArray(),
            }));
        },
      },
      u = s;
    l.default = u;
  },
  98,
);
