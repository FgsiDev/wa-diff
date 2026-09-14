__d(
  "ShopsAdsSelectedShopDataProviderPlugin",
  [
    "AdsGraphAPI",
    "AdsUEditorCrossChannelShopsAdsCommon",
    "LoadObjectMap",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        initialState: function (t) {
          return r("LoadObjectMap").create(function (e) {
            (t(function (t) {
              return t.setLoading(e);
            }),
              e.forEach(function (e) {
                r("promiseDone")(
                  o("AdsGraphAPI")
                    .get(i.id)
                    .object("mini_shop_collection", e)
                    .get({
                      fields: o("AdsUEditorCrossChannelShopsAdsCommon")
                        .STOREFRONT_FIELDS,
                    }),
                  function (n) {
                    t(function (t) {
                      return t.setSingleValueOrError(e, n);
                    });
                  },
                  function (n) {
                    t(function (t) {
                      return t.setSingleValueOrError(e, n);
                    });
                  },
                );
              }));
          });
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
