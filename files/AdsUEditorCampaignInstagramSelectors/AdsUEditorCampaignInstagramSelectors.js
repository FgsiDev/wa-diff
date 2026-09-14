__d(
  "AdsUEditorCampaignInstagramSelectors",
  [
    "AdsAPIObjectives",
    "AdsAccountStore",
    "AdsBusinessInstagramAccountStore",
    "AdsCPBUtils",
    "AdsConnectedInstagramAccountsWithIABPStore",
    "AdsFeedApplicabilityUtils",
    "AdsFluxHooks",
    "AdsInstagramApplicabilityUtils",
    "AdsInstagramAvailabilityUtils",
    "AdsInstagramIdentityUtils",
    "AdsInstagramUserIdMigrationUtils",
    "AdsLoadStateUtils_LEGACY",
    "AdsLoadState_LEGACY",
    "AdsLoggedInInstagramAccountProvider",
    "AdsManagerIGLoginUtils",
    "AdsPageInstagramAccountStore_RELAY",
    "AdsPlacementAPISpecReaderUtils",
    "AdsPlacementsInstagramFeedPositionPlugin",
    "AdsPromotableBusinessInstagramAccountsWithIABPProvider",
    "AdsUEditorAdgroupBulkSelectors",
    "AdsUEditorCampaignInstagramSelectorsUtils",
    "AdsUEditorCampaignInstagramSelectors_useBusinessInstagramAccountsMapRelaySelectorFragment.graphql",
    "AdsUEditorCampaignInstagramSelectors_useBusinessInstagramAccountsWithIABPFragment.graphql",
    "AdsUEditorCampaignSelectors",
    "AdsUniformValue",
    "LaminarReactHooks",
    "LoadObject",
    "RelayHooks",
    "TypeCoercionUtils",
    "adsConvertAdObjectRecordToPlainJS",
    "adsCreateSelector",
    "adsCreateStoreSelector",
    "adsUEditorAccountSelector",
    "adsUEditorAdPlainObjectsForSelectedAdgroupsSelector",
    "adsUEditorSelectedAdgroupIDsSelector",
    "gkx",
    "isFalsey",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = function (t, n) {
        return r("AdsBusinessInstagramAccountStore").get({
          legacy_account_id: t,
          business_id: n,
        });
      },
      c = r("gkx")("15449")
        ? r("AdsConnectedInstagramAccountsWithIABPStore")
        : null,
      d =
        c != null
          ? c
          : r(
              "AdsPromotableBusinessInstagramAccountsWithIABPProvider",
            ).toFluxStore(),
      m = function (t) {
        if (c != null) {
          var e, n, o;
          return c.get({
            business_id:
              (e = t == null || (n = t.business) == null ? void 0 : n.id) !=
              null
                ? e
                : "",
            legacy_account_id:
              (o = t == null ? void 0 : t.account_id) != null ? o : "",
          });
        } else
          return h(
            t,
            r("AdsPromotableBusinessInstagramAccountsWithIABPProvider")
              .toFluxStore()
              .getState(),
          );
      },
      p = r("AdsLoggedInInstagramAccountProvider").toFluxStore(),
      _ = { loadState: r("AdsLoadState_LEGACY").LOADED, data: [] },
      f = r("adsCreateStoreSelector")(
        [r("AdsAccountStore"), r("AdsBusinessInstagramAccountStore")],
        function () {
          var e = r("AdsAccountStore").getSelectedAccount().getValue(),
            t = e == null ? void 0 : e.business;
          return !e || !t
            ? _
            : o("AdsLoadStateUtils_LEGACY").fromLoadObjectTreatEmptyAsLoading(
                u(e.account_id, t.id),
              );
        },
        { name: i.id + ".businessInstagramAccounts" },
      ),
      g = r("adsCreateStoreSelector")(
        [r("AdsAccountStore"), d],
        function () {
          var e = r("AdsAccountStore").getSelectedAccount().getValue();
          return m(e);
        },
        { name: i.id + ".businessInstagramAccountsWithIABP" },
      );
    function h(e, t) {
      var n = e == null ? void 0 : e.business;
      return !e || !n
        ? r("LoadObject").withValue({ data: [] }, { creatorModuleID: i.id })
        : t.get(e.account_id);
    }
    function y(e) {
      var t = o("react-compiler-runtime").c(5),
        n;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((n = r(
            "AdsConnectedInstagramAccountsWithIABPStore",
          ).fluxGetSelector()),
          (t[0] = n))
        : (n = t[0]);
      var a = n,
        i = o("AdsFluxHooks").useAdsSelector(a);
      if (c != null) {
        var l,
          s,
          u =
            (l = e == null || (s = e.business) == null ? void 0 : s.id) != null
              ? l
              : "",
          d;
        if (
          t[1] !== (e == null ? void 0 : e.account_id) ||
          t[2] !== i ||
          t[3] !== u
        ) {
          var m, p;
          ((d = i({
            business_id: u,
            legacy_account_id:
              (m =
                e == null || (p = e.account_id) == null
                  ? void 0
                  : p.toString()) != null
                ? m
                : "",
          })),
            (t[1] = e == null ? void 0 : e.account_id),
            (t[2] = i),
            (t[3] = u),
            (t[4] = d));
        } else d = t[4];
        return d;
      }
    }
    function C(t) {
      var a,
        i,
        l,
        s,
        u,
        c,
        d = o("react-compiler-runtime").c(6),
        m = o("RelayHooks").useFragment(
          e !== void 0
            ? e
            : (e = n(
                "AdsUEditorCampaignInstagramSelectors_useBusinessInstagramAccountsWithIABPFragment.graphql",
              )),
          t,
        ),
        p = (a = m == null ? void 0 : m.account_id) != null ? a : "",
        _ =
          (i = m == null || (l = m.business) == null ? void 0 : l.id) != null
            ? i
            : "",
        f =
          (s = m == null || (u = m.business) == null ? void 0 : u.name) != null
            ? s
            : "",
        g;
      d[0] !== _ || d[1] !== f
        ? ((g = { id: _, name: f }), (d[0] = _), (d[1] = f), (d[2] = g))
        : (g = d[2]);
      var C;
      d[3] !== p || d[4] !== g
        ? ((C = { account_id: p, business: g }),
          (d[3] = p),
          (d[4] = g),
          (d[5] = C))
        : (C = d[5]);
      var b = C,
        v = o("LaminarReactHooks").useProvider(
          r("AdsPromotableBusinessInstagramAccountsWithIABPProvider"),
        );
      return (c = y(b)) != null ? c : h(b, v);
    }
    function b(e) {
      var t = o("react-compiler-runtime").c(5),
        a = o("RelayHooks").useFragment(
          s !== void 0
            ? s
            : (s = n(
                "AdsUEditorCampaignInstagramSelectors_useBusinessInstagramAccountsMapRelaySelectorFragment.graphql",
              )),
          e,
        ),
        l = C(a);
      if (l.isLoading()) {
        var u;
        return (
          t[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((u = r("LoadObject").loading({ creatorModuleID: i.id })),
              (t[0] = u))
            : (u = t[0]),
          u
        );
      }
      var c, d;
      if (t[1] !== l) {
        d = Symbol.for("react.early_return_sentinel");
        e: {
          var m,
            p = (m = l.getValue()) == null ? void 0 : m.data;
          if (p == null) {
            var _;
            (t[4] === Symbol.for("react.memo_cache_sentinel")
              ? ((_ = r("LoadObject").withValue(null, {
                  creatorModuleID: i.id,
                })),
                (t[4] = _))
              : (_ = t[4]),
              (d = _));
            break e;
          }
          var f = p.reduce(v, {});
          c = r("LoadObject").withValue(f, { creatorModuleID: i.id });
        }
        ((t[1] = l), (t[2] = c), (t[3] = d));
      } else ((c = t[2]), (d = t[3]));
      return d !== Symbol.for("react.early_return_sentinel") ? d : c;
    }
    function v(e, t) {
      if (
        o("TypeCoercionUtils").coerceEmptyStringToUndefined(t.id_v2) &&
        r("gkx")("15449")
      ) {
        var n;
        e[(n = t.id_v2) != null ? n : t.id] = t;
      } else e[t.id] = t;
      return e;
    }
    var S = r("adsCreateStoreSelector")(
      [r("AdsAccountStore"), p],
      function () {
        var e = r("AdsAccountStore").getSelectedAccount().getValue();
        return o("AdsManagerIGLoginUtils").getIsIGLogin(e)
          ? p.getState().get()
          : r("LoadObject").withValue(null, { creatorModuleID: i.id });
      },
      { name: i.id + ".loggedInInstagramAccountSelector" },
    );
    function R(e, t, n, a, i, l) {
      if (o("AdsManagerIGLoginUtils").getIsIGLogin(e)) {
        var s;
        return i.isLoading()
          ? null
          : (s = i.getValue()) == null
            ? void 0
            : s.id;
      }
      if (!(t instanceof r("AdsUniformValue"))) return null;
      var u = t.getValue();
      if (r("isFalsey")(u)) return null;
      var c = n(u);
      if (!o("AdsLoadStateUtils_LEGACY").isLoaded(c)) return null;
      var d = o("AdsInstagramIdentityUtils").getEligibleInstagramAccount(
        !!e.business,
        c,
        l,
      );
      return d && d.id ? d.id : null;
    }
    function L(e, t, n, a, i, l) {
      if (o("AdsManagerIGLoginUtils").getIsIGLogin(e)) {
        var s;
        if (i.isLoading()) return null;
        var u = (s = i.getValue()) == null ? void 0 : s.id_v2;
        return u != null
          ? o(
              "AdsInstagramUserIdMigrationUtils",
            ).convertIGIDV2FromStringToStrongType(u)
          : null;
      }
      if (!(t instanceof r("AdsUniformValue"))) return null;
      var c = t.getValue();
      if (r("isFalsey")(c)) return null;
      var d = n(c);
      if (!o("AdsLoadStateUtils_LEGACY").isLoaded(d)) return null;
      var m = o("AdsInstagramIdentityUtils").getEligibleInstagramAccount(
        !!e.business,
        d,
        l,
      );
      return m && m.id_v2 != null
        ? o(
            "AdsInstagramUserIdMigrationUtils",
          ).convertIGIDV2FromStringToStrongType(m.id_v2)
        : null;
    }
    var E = r("adsCreateSelector")(
        [
          r("adsUEditorAccountSelector"),
          o("AdsUEditorAdgroupBulkSelectors").pageID,
          r("AdsPageInstagramAccountStore_RELAY").fluxGetSelector(),
          r("adsUEditorSelectedAdgroupIDsSelector"),
          S,
        ],
        function (t, n, r, o, a) {
          return R(t, n, r, o, a, !0);
        },
        { name: i.id + ".eligibleInstagramAccountIDWithBusiness" },
      ),
      k = r("adsCreateSelector")(
        [
          r("adsUEditorAccountSelector"),
          o("AdsUEditorAdgroupBulkSelectors").pageID,
          r("AdsPageInstagramAccountStore_RELAY").fluxGetSelector(),
          r("adsUEditorSelectedAdgroupIDsSelector"),
          S,
        ],
        function (t, n, r, o, a) {
          return L(t, n, r, o, a, !0);
        },
        { name: i.id + ".eligibleInstagramAccountIDV2WithBusiness" },
      ),
      I = r("adsCreateSelector")(
        [
          r("adsUEditorAccountSelector"),
          o("AdsUEditorAdgroupBulkSelectors").pageID,
          r("AdsPageInstagramAccountStore_RELAY").fluxGetSelector(),
          r("adsUEditorSelectedAdgroupIDsSelector"),
          S,
        ],
        R,
        { name: i.id + ".eligibleInstagramAccountID" },
      ),
      T = r("adsCreateSelector")(
        [o("AdsUEditorCampaignSelectors").eligibilityInformationArray],
        function (t) {
          return t.some(function (e) {
            var t = e.spec;
            return r("AdsInstagramApplicabilityUtils").hasPlacementForPlatform(
              t,
              "instagram",
            );
          });
        },
        { name: i.id },
      ),
      D = r("adsCreateSelector")(
        [o("AdsUEditorCampaignSelectors").eligibilityInformationArray],
        function (t) {
          return t.every(function (e) {
            var t = e.spec;
            return r("AdsInstagramApplicabilityUtils").hasPlacementForPlatform(
              t,
              "instagram",
            );
          });
        },
        { name: i.id },
      ),
      x = r("adsCreateSelector")(
        [o("AdsUEditorCampaignSelectors").eligibilityInformationArray],
        function (t) {
          return t.some(function (e) {
            var t = e.spec;
            return (
              r("AdsInstagramApplicabilityUtils").hasPlacementForPlatform(
                t,
                "threads",
              ) ||
              o("AdsPlacementAPISpecReaderUtils").isActiveThreadsPosition(
                t,
                "threads_stream",
              )
            );
          });
        },
        { name: i.id },
      ),
      $ = r("adsCreateSelector")(
        [o("AdsUEditorCampaignSelectors").eligibilityInformationArray],
        o("AdsUEditorCampaignInstagramSelectorsUtils")
          .someEligibilityInfoHaveInstagramPlacementOnly,
        { name: i.id + ".someHaveInstagramPlacementOnly" },
      ),
      P = r("adsCreateSelector")(
        [o("AdsUEditorCampaignSelectors").eligibilityInformationArray],
        function (t) {
          return t.some(function (e) {
            var t = e.spec;
            return o(
              "AdsFeedApplicabilityUtils",
            ).placementSpecHasFacebookPlacement(t);
          });
        },
        { name: i.id },
      ),
      N = r("adsCreateSelector")(
        [
          r("AdsAccountStore").getSelectedAccount,
          r("adsUEditorAdPlainObjectsForSelectedAdgroupsSelector"),
          o("AdsUEditorCampaignSelectors").eligibilityInformationSelector,
        ],
        function (t, n, a) {
          var e = n.some(function (e) {
              var t = e.campaign,
                n = e.campaignGroup,
                a = n.objective;
              return (
                o("AdsCPBUtils").isCPBCampaign(
                  n,
                  r("adsConvertAdObjectRecordToPlainJS")(t),
                ) &&
                (a === r("AdsAPIObjectives").LINK_CLICKS ||
                  a === r("AdsAPIObjectives").CONVERSIONS)
              );
            }),
            i =
              a &&
              r(
                "AdsPlacementsInstagramFeedPositionPlugin",
              ).getIneligibilityReason(a),
            l = n.every(function (e) {
              var n,
                r = e.campaignGroup,
                a = r.objective;
              return o("AdsInstagramAvailabilityUtils").supportsObjective(
                a,
                (n = t.getValue()) == null ? void 0 : n.capabilities,
              );
            });
          return l && !e && !i;
        },
        { name: i.id },
      ),
      M = r("adsCreateSelector")(
        [o("AdsUEditorCampaignSelectors").eligibilityInformationArray],
        function (t) {
          return t.every(function (e) {
            var t = e.spec;
            return r(
              "AdsInstagramApplicabilityUtils",
            ).placementSpecHasInstagramStoryPlacementOnly(t);
          });
        },
        { name: i.id },
      ),
      w = r("adsCreateSelector")(
        [o("AdsUEditorCampaignSelectors").eligibilityInformationArray],
        function (t) {
          return A(t);
        },
        { name: i.id },
      );
    function A(e) {
      return e.some(function (e) {
        var t = e.spec;
        return r(
          "AdsInstagramApplicabilityUtils",
        ).placementSpecHasStoryPlacement(t);
      });
    }
    var F = r("adsCreateSelector")(
        [o("AdsUEditorCampaignSelectors").eligibilityInformationArray],
        function (t) {
          return t.some(function (e) {
            var t = e.spec;
            return r(
              "AdsInstagramApplicabilityUtils",
            ).placementSpecHasInstagramStoryPlacementOnly(t);
          });
        },
        { name: i.id },
      ),
      O = r("adsCreateSelector")(
        [o("AdsUEditorCampaignSelectors").eligibilityInformationArray],
        function (t) {
          return t.some(function (e) {
            var t = e.spec;
            return r(
              "AdsInstagramApplicabilityUtils",
            ).placementSpecHasStreamPlacement(t);
          });
        },
        { name: i.id },
      ),
      B = r("adsCreateSelector")(
        [r("adsUEditorAdPlainObjectsForSelectedAdgroupsSelector")],
        function (t) {
          return t.every(function (e) {
            var t = e.adgroup;
            return r("AdsInstagramApplicabilityUtils").hasInstagramActor(t);
          });
        },
        { name: i.id },
      );
    ((l.AdsConnectedInstagramAccountsWithIABPReverseInteropStore = c),
      (l.BUSINESS_INSTAGRAM_ACCOUNTS_NOT_SUPPORTED = _),
      (l.businessInstagramAccounts = f),
      (l.businessInstagramAccountsWithIABP = g),
      (l.useBusinessInstagramAccountsWithIABP = C),
      (l.useBusinessInstagramAccountsMap = b),
      (l.loggedInInstagramAccountSelector = S),
      (l.eligibleInstagramAccountIDWithBusiness = E),
      (l.eligibleInstagramAccountIDV2WithBusiness = k),
      (l.eligibleInstagramAccountID = I),
      (l.someHaveInstagramPlacement = T),
      (l.allHaveInstagramPlacement = D),
      (l.someHaveThreadsPlacement = x),
      (l.someHaveInstagramPlacementOnly = $),
      (l.someHaveFacebookPlacement = P),
      (l.isInstagramEligibile = N),
      (l.allHaveInstagramStoryPlacementOnly = M),
      (l.someHaveInstagramStoryPlacement = w),
      (l.someHaveInstagramStoryPlacementLogic = A),
      (l.someHaveInstagramStoryPlacementOnly = F),
      (l.someHaveInstagramStreamPlacement = O),
      (l.allHaveInstagramActor = B));
  },
  98,
);
