__d(
  "AdsCPASPromotableAppDataManager",
  ["AdsGraphAPI", "PromotableAppFields"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.adAccountID,
        n = e.appID,
        r = o("PromotableAppFields").PROMOTABLE_APP_FIELDS,
        a = o("PromotableAppFields").PROMOTABLE_APP_FIELDS.indexOf("business");
      return (
        a > -1 && r.splice(a, 1),
        o("AdsGraphAPI")
          .get(i.id)
          .adaccount(t)
          .edge("advertisable_applications")
          .get({ app_id: n, fields: r })
          .then(function (e) {
            return e.data[0];
          })
      );
    }
    var s = { fetchCPASPromotableApp: e },
      u = s;
    l.default = u;
  },
  98,
);
