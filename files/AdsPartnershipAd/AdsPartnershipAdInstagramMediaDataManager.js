__d(
  "AdsPartnershipAdInstagramMediaDataManager",
  [
    "AdsBaseDataManager",
    "AdsGraphAPI",
    "GraphAPIFieldUtils",
    "ShadowIGMediaFields",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, a, i, l, s) {
      var u,
        c = (u = o("GraphAPIFieldUtils")).getFieldWithSubfields(
          u.getFieldWithParameterizedSubfields("partnership_ads_identities", {
            primary_fb_page_id: a,
            primary_ig_user_id: i,
            secondary_fb_page_id: l,
            secondary_ig_user_id: s,
            partnership_ad_code: n,
            ad_account_id: e,
          }),
          [
            u.getFieldWithSubfields("primary_identity", [
              u.getFieldWithSubfields("fb_page", [
                "id",
                "name",
                "picture",
                "has_create_ads_access",
              ]),
              u.getFieldWithSubfields("ig_user", [
                "id",
                "legacy_instagram_user_id",
                "profile_picture_url",
                "username",
                "has_create_ads_access",
              ]),
            ]),
            u.getFieldWithSubfields("secondary_identities", [
              u.getFieldWithSubfields("fb_page", [
                "id",
                "name",
                "picture",
                "has_create_ads_access",
              ]),
              u.getFieldWithSubfields("ig_user", [
                "id",
                "profile_picture_url",
                "username",
                "has_create_ads_access",
              ]),
              "pa_permission_capabilities",
              "pa_permission_status",
            ]),
            "post_types",
          ],
        ),
        d = [].concat(r("ShadowIGMediaFields")),
        m = d.findIndex(function (e) {
          return e.startsWith("partnership_ads_identities");
        });
      return (
        d.splice(m, 1, c),
        [
          u.getFieldWithSubfields(
            u.getFieldWithParameterizedSubfields("instagram_media_for_ads", {
              ad_account_id: e,
              media_id: t,
              ad_code: n,
              primary_fb_page_id: a,
              primary_ig_user_id: i,
              secondary_fb_page_id: l,
              secondary_ig_user_id: s,
            }),
            d,
          ),
        ]
      );
    }
    var s = (function (t) {
        function n() {
          for (var n, r = arguments.length, a = new Array(r), l = 0; l < r; l++)
            a[l] = arguments[l];
          return (
            (n = t.call.apply(t, [this].concat(a)) || this),
            (n.loadFromV2ID = function (t, n, r, a, l, s, u, c) {
              return o("AdsGraphAPI")
                .get(i.id)
                .object("instagram_object", t)
                .batched()
                .get({ fields: e(n, r, a, l, s, u, c) })
                .then(function (e) {
                  return e;
                });
            }),
            babelHelpers.assertThisInitialized(n) ||
              babelHelpers.assertThisInitialized(n)
          );
        }
        return (babelHelpers.inheritsLoose(n, t), n);
      })(r("AdsBaseDataManager")),
      u = new s();
    l.default = u;
  },
  98,
);
