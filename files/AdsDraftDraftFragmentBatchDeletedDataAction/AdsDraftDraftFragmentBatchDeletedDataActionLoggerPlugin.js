__d(
  "AdsDraftDraftFragmentBatchDeletedDataActionLoggerPlugin",
  ["adsMgmtLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        log: function (t) {
          var e = Array.from(t.fragments.keys()).reduce(function (e, n) {
              var r;
              return (
                (e[n] =
                  (r = t.fragments.get(n)) == null ? void 0 : r.ad_object_id),
                e
              );
            }, {}),
            n = { fragment_to_published_ids: e };
          r("adsMgmtLogger")("draft_fragment_batch_deleted", n, "delete");
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
