__d(
  "AdsLoggedInInstagramAccountDataManager",
  [
    "AdsBaseDataManager",
    "AdsGraphAPI",
    "AdsLoggedInInstagramAccountErrorDataAction",
    "AdsLoggedInInstagramAccountSuccessDataAction",
    "GraphAPIFieldUtils",
    "gkx",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.loadIGAccount = function () {
            r("promiseDone")(
              o("AdsGraphAPI")
                .get(i.id)
                .me()
                .get({
                  fields: [
                    o("GraphAPIFieldUtils").getFieldWithSubfields(
                      "instagram_user_self_asset",
                      [
                        "has_profile_picture",
                        "id",
                        "id_v2",
                        "is_messaging_light_switch_enabled",
                        "is_authorized_for_political_ads",
                        "is_business",
                        "is_professional",
                        "is_private",
                        "is_published",
                        "profile_pic",
                        "user_id",
                        "username",
                        "shopping_review_status",
                        "is_shopping_onsite_checkout_enabled",
                        "date_joined",
                        "is_shopless_account_with_static_product_tags_enabled",
                        "is_shopless_account_with_dynamic_product_tags_enabled",
                        "eimu_id",
                        r("gkx")("5403") ? "threads_user_id" : null,
                        r("gkx")("5403") ? "threads_profile_pic" : null,
                      ].filter(Boolean),
                    ),
                  ],
                }),
              function (e) {
                r("AdsLoggedInInstagramAccountSuccessDataAction").dispatch(
                  { instagramAccount: e.instagram_user_self_asset },
                  {
                    line: "64",
                    module: "AdsLoggedInInstagramAccountDataManager.js",
                    moduleID: i.id,
                  },
                );
              },
              function (e) {
                r("AdsLoggedInInstagramAccountErrorDataAction").dispatch(
                  { error: e },
                  {
                    line: "69",
                    module: "AdsLoggedInInstagramAccountDataManager.js",
                    moduleID: i.id,
                  },
                );
              },
            );
          }),
          t
        );
      })(r("AdsBaseDataManager")),
      s = new e();
    l.default = s;
  },
  98,
);
