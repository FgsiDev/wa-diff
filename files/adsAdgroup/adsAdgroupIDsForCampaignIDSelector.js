__d(
  "adsAdgroupIDsForCampaignIDSelector",
  [
    "AdsAccountStore",
    "AdsAdgroupCombinedListStore",
    "adsCreateDynamicSelector",
    "adsCreateSelector",
    "adsCreateStoreSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateDynamicSelector")(
        r("adsCreateSelector")(
          [
            r("adsCreateStoreSelector")(
              [],
              function (t) {
                return t;
              },
              { name: i.id },
            ),
            r("AdsAccountStore").getSelectedAccount,
            o("AdsAdgroupCombinedListStore").AdsAdgroupCombinedListStore
              .getAdgroupIDsSelector,
          ],
          function (t, n, r) {
            var e;
            if (t == null || !n.hasValueWithoutError()) return null;
            var o = (e = n.getValue()) == null ? void 0 : e.account_id;
            return o == null ? null : r(o, t);
          },
          { name: i.id },
        ),
      ),
      s = e;
    l.default = s;
  },
  98,
);
