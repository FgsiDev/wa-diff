__d(
  "AdsPageInstagramAccountShadowValidateUtils",
  [
    "AdsInstagramAccountPageCreatePageBackedErrorDataAction",
    "AdsInstagramAccountPageCreatePageBackedSuccessDataAction",
    "AdsInstagramUserIdMigrationUtils",
    "AdsInterfacesLogger",
    "AdsManagerRelayEnvironment",
    "AdsPageInstagramAccountMutation",
    "RelayModern",
    "isTruthy",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, a, l, s) {
      o("RelayModern").commitMutation(r("AdsManagerRelayEnvironment"), {
        mutation: o("AdsPageInstagramAccountMutation")
          .createPageBackedInstagramAccount,
        variables: { page_id: n },
        onCompleted: function (u) {
          var a,
            c =
              u == null ||
              (a = u.xfb_create_page_backed_instagram_accounts) == null
                ? void 0
                : a.iguser_v2_id;
          if (r("isTruthy")(c)) {
            var d = o(
              "AdsInstagramUserIdMigrationUtils",
            ).convertIGIDV2FromStringToStrongType(c);
            d != null &&
              r(
                "AdsInstagramAccountPageCreatePageBackedSuccessDataAction",
              ).dispatch(
                {
                  hostID: s,
                  source: l,
                  data: {
                    campaignID: e,
                    adgroupIDs: t,
                    pageID: n,
                    instagramAccountID: void 0,
                    instagramUserID: d,
                  },
                },
                {
                  line: "49",
                  module: "AdsPageInstagramAccountShadowValidateUtils.js",
                  moduleID: i.id,
                },
              );
          } else
            r("AdsInterfacesLogger").log(
              {
                eventName: "page_backed_instagram_account_creation_failure",
                eventCategory: "errors",
                data: {
                  page_id: n,
                  source: l,
                  error_name: "failed request with null result",
                  data_source: "gql_v2",
                },
              },
              r("AdsInterfacesLogger").LOG_TYPE_PRIMARY_APP,
            );
        },
        onError: function (t) {
          (r("AdsInstagramAccountPageCreatePageBackedErrorDataAction").dispatch(
            { data: { pageID: n } },
            {
              line: "78",
              module: "AdsPageInstagramAccountShadowValidateUtils.js",
              moduleID: i.id,
            },
          ),
            r("AdsInterfacesLogger").log(
              {
                eventName: "page_backed_instagram_account_creation_failure",
                eventCategory: "errors",
                data: {
                  page_id: n,
                  source: l,
                  error_name: t.message,
                  data_source: "gql_v2",
                },
              },
              r("AdsInterfacesLogger").LOG_TYPE_PRIMARY_APP,
            ));
        },
      });
    }
    l.createAndUsePageBackedAccountV2 = e;
  },
  98,
);
