__d(
  "AdsInstagramBackedThreadsAccountDataManager",
  [
    "AdsGraphAPI",
    "AdsInterfacesLogger",
    "AdsUEditorAdgroupSetBackedThreadsAccountAction",
    "FBLogger",
    "Promise",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = ["threads_user_id", "threads_user_profile_pic"],
      u = [],
      c = (function () {
        function t() {}
        var a = t.prototype;
        return (
          (a.loadFor = function (a, l) {
            return a == null
              ? (e || (e = n("Promise"))).resolve(u)
              : o("AdsGraphAPI")
                  .get(i.id)
                  .object("instagram_user", a)
                  .edge("instagram_backed_threads_user")
                  .get({ fields: s })
                  .then(function (e) {
                    var t;
                    return (
                      r("AdsInterfacesLogger").log({
                        eventName:
                          "threads_ads_instagram_backed_threads_account_fetching_success",
                        eventCategory: "user_action",
                        data: ((t = {}), (t.adgroup_id = l), t),
                      }),
                      e.data
                    );
                  })
                  .catch(function (e) {
                    var t;
                    return (
                      r("AdsInterfacesLogger").log({
                        eventName:
                          "threads_ads_instagram_backed_threads_account_fetching_error",
                        eventCategory: "user_action",
                        data:
                          ((t = {}),
                          (t.adgroup_id = l),
                          (t.error_name = e.message),
                          t),
                      }),
                      r("FBLogger")(
                        "AdsInstagramBackedThreadsAccountDataManager",
                      )
                        .event(
                          "instagram_backed_threads_account_fetching_error",
                        )
                        .catching(e)
                        .mustfix(
                          "error occurred when fetching instagram backed threads user",
                        ),
                      u
                    );
                  });
          }),
          (a.createAndUseInstagramBackedAccount = function (t, n, a) {
            if (t == null) return null;
            r("promiseDone")(
              o("AdsGraphAPI")
                .get(i.id)
                .object("instagram_user", t)
                .edge("instagram_backed_threads_user")
                .batched()
                .post(),
              function (e) {
                if ((e == null ? void 0 : e.id) != null) {
                  var o;
                  (r("AdsUEditorAdgroupSetBackedThreadsAccountAction").dispatch(
                    {
                      hostID: a,
                      threadsUserID: e.id,
                      adgroupIDs: n,
                      instagramAccountV2ID: t,
                    },
                    {
                      line: "98",
                      module: "AdsInstagramBackedThreadsAccountDataManager.js",
                      moduleID: i.id,
                    },
                  ),
                    r("AdsInterfacesLogger").log({
                      eventName:
                        "threads_ads_instagram_backed_threads_account_creation_success",
                      eventCategory: "user_action",
                      data: ((o = {}), (o.adgroup_id = n[0]), o),
                    }));
                }
                return e == null ? void 0 : e.id;
              },
              function (e) {
                var o;
                return (
                  r("AdsInterfacesLogger").log({
                    eventName:
                      "threads_ads_instagram_backed_threads_account_creation_error",
                    eventCategory: "user_action",
                    data:
                      ((o = {}),
                      (o.adgroup_id = n[0]),
                      (o.error_name = e.message),
                      o),
                  }),
                  r("FBLogger")("AdsInstagramBackedThreadsAccountDataManager")
                    .event("instagram_backed_threads_account_creation_failure")
                    .catching(e)
                    .mustfix(
                      "error occurred when creating instagram backed threads user %s",
                      t,
                    ),
                  null
                );
              },
            );
          }),
          (a.mergeInstagramAccountDataWithIBTA = function (t, n) {
            var e,
              r,
              o =
                (e =
                  n == null || (r = n[0]) == null
                    ? void 0
                    : r.threads_user_id) != null
                  ? e
                  : void 0;
            return t.threads_user_id != null
              ? babelHelpers.extends({}, t, {
                  is_text_post_app_onboarded: !0,
                  instagram_backed_threads_user_id: o,
                })
              : babelHelpers.extends({}, t, {
                  is_text_post_app_onboarded: !1,
                  threads_user_id: o,
                  instagram_backed_threads_user_id: o,
                  threads_profile_pic: "",
                });
          }),
          t
        );
      })(),
      d = new c();
    l.default = d;
  },
  98,
);
