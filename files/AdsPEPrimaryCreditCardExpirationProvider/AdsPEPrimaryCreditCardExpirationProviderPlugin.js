__d(
  "AdsPEPrimaryCreditCardExpirationProviderPlugin",
  ["AdsGraphAPI", "GraphAPIFieldUtils", "loadObjectMapProvider"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        initialState: r("loadObjectMapProvider")(function (e) {
          return o("AdsGraphAPI")
            .get(i.id)
            .adaccounts(e)
            .get({
              fields: [
                o("GraphAPIFieldUtils").getFieldWithSubfields(
                  "am_oneshop_settings",
                  [
                    o("GraphAPIFieldUtils").getFieldWithSubfields(
                      "ad_account_settings",
                      [
                        o("GraphAPIFieldUtils").getFieldWithSubfields(
                          "primary_credit_card",
                          ["exp_month", "exp_year"],
                        ),
                      ],
                    ),
                  ],
                ),
              ],
            })
            .then(function (t) {
              var n = new Map();
              return (
                e.forEach(function (e) {
                  var r,
                    o = t["act_" + e],
                    a =
                      (r = o.am_oneshop_settings) == null ||
                      (r = r.ad_account_settings) == null
                        ? void 0
                        : r.primary_credit_card;
                  a != null && n.set(e, a);
                }),
                n
              );
            });
        }),
      },
      s = e;
    l.default = s;
  },
  98,
);
