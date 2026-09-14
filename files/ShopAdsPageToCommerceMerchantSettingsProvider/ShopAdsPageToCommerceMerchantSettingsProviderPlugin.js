__d(
  "ShopAdsPageToCommerceMerchantSettingsProviderPlugin",
  [
    "AdsGraphAPI",
    "AdsUEditorCrossChannelShopsAdsCommon",
    "GraphAPIFieldUtils",
    "LoadObjectMap",
    "promiseDone",
    "promiseLoadObjectsFromKeys",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      initialState: function (t) {
        return r("LoadObjectMap").create(function (e) {
          (t(function (t) {
            return t.setLoading(e);
          }),
            r("promiseDone")(
              r("promiseLoadObjectsFromKeys")(e, function (e) {
                return s(e);
              }),
              function (e) {
                return t(function (t) {
                  return t.merge(e);
                });
              },
              function (e) {
                return t(function (t) {
                  return t.merge(e);
                });
              },
            ));
        });
      },
    };
    function s(e) {
      return o("AdsGraphAPI")
        .get(i.id)
        .object("page", e)
        .get({
          fields: [
            "id",
            o("GraphAPIFieldUtils").getFieldWithSubfields(
              "mini_shop_storefront",
              o("AdsUEditorCrossChannelShopsAdsCommon").STOREFRONT_FIELDS,
            ),
            "name",
            "picture",
          ],
        });
    }
    var u = e;
    l.default = u;
  },
  98,
);
