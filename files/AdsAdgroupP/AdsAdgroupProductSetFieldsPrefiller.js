__d(
  "AdsAdgroupProductSetFieldsPrefiller",
  ["AdsAPIAdgroupPaths", "isTruthy"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = [
        (e = r("AdsAPIAdgroupPaths")).CREATIVE.APPLINK_TREATMENT,
        e.CREATIVE.OBJECT_STORY_SPEC.TEMPLATE_DATA.FORCE_SINGLE_LINK,
        e.CREATIVE.PRODUCT_SET_ID,
        e.CREATIVE.TEMPLATE_URL_SPEC.path,
      ].map(function (e) {
        return { current: e, original: e };
      }),
      u = {
        key: "productSetID",
        genPaths: function (t) {
          var e,
            n =
              (e = t.current.campaign.promoted_object) == null
                ? void 0
                : e.product_set_id;
          return r("isTruthy")(n) ? s : [];
        },
      },
      c = u;
    l.default = c;
  },
  98,
);
