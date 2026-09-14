__d(
  "AdsPartnershipAdInstagramMediaDataProviderPlugin",
  [
    "AdsPartnershipAdInstagramMediaDataManager",
    "LoadObjectMap",
    "mapSet",
    "promiseDone",
    "promiseLoadObjectsFromKeys",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      e(function (e) {
        return e.merge(
          r("mapSet")(t, function (t) {
            return [t, e.get(t).loading()];
          }),
        );
      });
    }
    function s(e, t) {
      e(function (e) {
        return e.merge(t);
      });
    }
    var u = {
        initialState: function (n) {
          return r("LoadObjectMap").createKeyed(
            function (t) {
              (e(n, t),
                r("promiseDone")(
                  r("promiseLoadObjectsFromKeys")(t, function (e) {
                    return r(
                      "AdsPartnershipAdInstagramMediaDataManager",
                    ).loadFromV2ID(
                      e.ig_user_id,
                      e.ad_account_id,
                      e.media_id,
                      e.ad_code,
                      e.primary_fb_page_id,
                      e.primary_ig_user_id,
                      e.secondary_fb_page_id,
                      e.secondary_ig_user_id,
                    );
                  }),
                  function (e) {
                    s(n, e);
                  },
                ));
            },
            function (e) {
              return [
                e.ig_user_id,
                e.ad_account_id,
                e.media_id,
                e.ad_code,
                e.primary_fb_page_id,
                e.primary_ig_user_id,
                e.secondary_fb_page_id,
                e.secondary_ig_user_id,
              ].join("_");
            },
          );
        },
      },
      c = u;
    l.default = c;
  },
  98,
);
