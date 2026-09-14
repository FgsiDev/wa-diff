__d(
  "AdsPELoggerGetAsyncRequestMetadata",
  [
    "AdDraftFragmentSource",
    "AdsDataAtom",
    "AdsDraftPublishDataProvider",
    "AdsDraftPublishProvider",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = {
        object_creation_source: r("AdDraftFragmentSource").NOT_SPECIFIED,
        immediate: !1,
      };
    function u(t) {
      if (!t) return s;
      var n = String(t.async_request_set_id);
      (e || (e = r("AdsDataAtom"))).waitFor([
        r("AdsDraftPublishProvider").toFluxStore().getDispatchToken(),
      ]);
      var o = r("AdsDraftPublishDataProvider")().requestMetadata;
      return o.get(n) || s;
    }
    l.default = u;
  },
  98,
);
