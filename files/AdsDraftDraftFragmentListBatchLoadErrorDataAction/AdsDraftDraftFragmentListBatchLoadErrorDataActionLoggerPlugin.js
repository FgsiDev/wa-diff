__d(
  "AdsDraftDraftFragmentListBatchLoadErrorDataActionLoggerPlugin",
  ["adsMgmtLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        log: function (t) {
          t.errors.forEach(function (e, t) {
            e &&
              r("adsMgmtLogger")(
                "draft_fragment_list_load_error",
                {
                  draft_id: t,
                  error_code: e.code,
                  error_message:
                    e.error_user_msg != null ? e.error_user_msg : e.message,
                  error_sub_code: e.error_subcode,
                },
                "download",
              );
          });
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
