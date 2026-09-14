__d(
  "AdsUEditorAdgroupInstagramUtils",
  [
    "AdCampaignDestination",
    "AdsAdgroupFetchDefaultInstagramAccountForPageFinishedAction",
    "AdsAdgroupFetchDefaultInstagramAccountForPageStartedAction",
    "AdsDataAtom",
    "AdsInstagramAccountActionSources",
    "AdsInstagramAccountCreateAndUseInstagramBackedDataAction",
    "AdsInstagramAccountPageCreateAndUsePageBackedDataAction",
    "AdsInstagramAccountStoreUtils",
    "AdsInstagramUsernameStoreUtils",
    "AdsPageInstagramAccountStore_RELAY",
    "AdsUEditorAdgroupSetInstagramAccountDataAction",
    "AdsUEditorHostIDs",
    "AdsUnifiedProfileVisitUtils",
    "asyncToGeneratorRuntime",
    "isEmpty",
    "isFalsey",
    "isTruthy",
    "isUPVBPScopedPickersEnabled",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    function u(e, t, n, r, o, a, i, l, s) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, n, a, l, u, c, d, m, p) {
            var _ = !1;
            if ((Object.keys(n).length > 0 && (_ = !0), _)) {
              (e || (e = r("AdsDataAtom"))).addPostDispatchCallback(
                function () {
                  r(
                    "AdsAdgroupFetchDefaultInstagramAccountForPageStartedAction",
                  ).dispatch(
                    {},
                    {
                      line: "61",
                      module: "AdsUEditorAdgroupInstagramUtils.js",
                      moduleID: i.id,
                    },
                  );
                },
              );
              var f = yield r(
                  "AdsInstagramAccountStoreUtils",
                ).genDefaultInstagramAccountForPage(a),
                g = f.hasConnectedInstagramAccount,
                h = f.instagramAccountID,
                y = f.instagramAccountV2ID,
                C = f.pageAccessToken,
                b = f.threadsUserID,
                v = Object.keys(n);
              (r("isFalsey")(c) &&
                p !== r("AdCampaignDestination").INSTAGRAM_LIVE &&
                (v = yield r(
                  "AdsInstagramAccountStoreUtils",
                ).genAdgroupsThatNeedNewInstagramAccount(
                  t.account_id,
                  !!t.business,
                  n,
                )),
                o(
                  "AdsUnifiedProfileVisitUtils",
                ).getIsUnifiedProfileVisitsDestination(p) &&
                r("isUPVBPScopedPickersEnabled")()
                  ? (v = [])
                  : (s || (s = r("isEmpty")))(v) &&
                    o(
                      "AdsUnifiedProfileVisitUtils",
                    ).getIsUnifiedProfileVisitsDestination(p) &&
                    (v = Object.entries(n)
                      .filter(function (e) {
                        var t = e[0],
                          n = e[1];
                        return n !== h;
                      })
                      .map(function (e) {
                        var t = e[0],
                          n = e[1];
                        return t;
                      })),
                (s || (s = r("isEmpty")))(v) ||
                  (r("isTruthy")(d)
                    ? r(
                        "AdsUEditorAdgroupSetInstagramAccountDataAction",
                      ).dispatch(
                        {
                          hostID: l,
                          adgroupIDs: v,
                          instagramAccountID: d,
                          identityToStorefront: u,
                          selectedInstagramAccount: o(
                            "AdsInstagramUsernameStoreUtils",
                          ).loadInstagramUsernameByID(d),
                        },
                        {
                          line: "126",
                          module: "AdsUEditorAdgroupInstagramUtils.js",
                          moduleID: i.id,
                        },
                      )
                    : r("isTruthy")(h)
                      ? (r(
                          "AdsUEditorAdgroupSetInstagramAccountDataAction",
                        ).dispatch(
                          {
                            hostID: l,
                            adgroupIDs: v,
                            instagramAccountID: h,
                            identityToStorefront: u,
                            threadsUserID: b,
                            selectedInstagramAccount: o(
                              "AdsInstagramUsernameStoreUtils",
                            ).loadInstagramUsernameByID(h),
                          },
                          {
                            line: "139",
                            module: "AdsUEditorAdgroupInstagramUtils.js",
                            moduleID: i.id,
                          },
                        ),
                        r("isFalsey")(b) &&
                          g &&
                          r("isTruthy")(y) &&
                          r(
                            "AdsInstagramAccountCreateAndUseInstagramBackedDataAction",
                          ).dispatch(
                            {
                              adgroupIDs: v,
                              campaignID: "",
                              hostID: l,
                              instagramAccountV2ID: y,
                            },
                            {
                              line: "156",
                              module: "AdsUEditorAdgroupInstagramUtils.js",
                              moduleID: i.id,
                            },
                          ),
                        r("isFalsey")(b) &&
                          !g &&
                          r(
                            "AdsPageInstagramAccountStore_RELAY",
                          ).createAndUsePBTAActionDispatch(a, l, v))
                      : (r(
                          "AdsInstagramAccountPageCreateAndUsePageBackedDataAction",
                        ).dispatch(
                          {
                            hostID: l,
                            source:
                              l === r("AdsUEditorHostIDs").CREATION
                                ? r("AdsInstagramAccountActionSources")
                                    .CF_AUCTION
                                : r("AdsInstagramAccountActionSources")
                                    .PE_AUCTION,
                            data: {
                              campaignID: null,
                              adgroupIDs: v,
                              pageID: a,
                              accessToken: C,
                            },
                          },
                          {
                            line: "178",
                            module: "AdsUEditorAdgroupInstagramUtils.js",
                            moduleID: i.id,
                          },
                        ),
                        r(
                          "AdsPageInstagramAccountStore_RELAY",
                        ).createAndUsePBTAActionDispatch(a, l, v))),
                r(
                  "AdsAdgroupFetchDefaultInstagramAccountForPageFinishedAction",
                ).dispatch(
                  {},
                  {
                    line: "203",
                    module: "AdsUEditorAdgroupInstagramUtils.js",
                    moduleID: i.id,
                  },
                ));
            }
          },
        )),
        c.apply(this, arguments)
      );
    }
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield r(
              "AdsInstagramAccountStoreUtils",
            ).genDefaultInstagramAccountForPage(e),
            n = t.hasConnectedInstagramAccount;
          return n;
        })),
        m.apply(this, arguments)
      );
    }
    ((l.initiateInstagramDefaulting = u), (l.hasConnectedInstagramAccount = d));
  },
  98,
);
