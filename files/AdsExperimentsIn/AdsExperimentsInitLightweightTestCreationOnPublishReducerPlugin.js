__d(
  "AdsExperimentsInitLightweightTestCreationOnPublishReducerPlugin",
  [
    "AdsAccountStore",
    "AdsAdObjectsSelectors",
    "AdsDataAtom",
    "AdsDraftFragmentStore",
    "AdsExperimentsLightweightSplitTestType",
    "AdsLoadObjectUtils",
    "AdsPEAdgroupSelectors",
    "AdsPECampaignGroupSelectors",
    "AdsPECampaignSelectors",
    "FBLogger",
    "JSResource",
    "Laminar",
    "adsCreateStoreThunkSelector",
    "adsExperimentsGetDerivedStudyLevelFromLightweightType",
    "adsExperimentsGetLightweightCatalogData",
    "adsExperimentsGetLightweightStudyLevelAdObjectID",
    "filterNulls",
    "immutable",
    "isEmpty",
    "isNullish",
    "onlyx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["daily_budget", "lifetime_budget", "lifetime_spent", "objective"],
      s,
      u,
      c = {
        reduce: o("Laminar").withFluxSelectors(
          {
            getCampaignGroupIDFromFragment: m("campaign"),
            getCampaignIDFromFragment: m("ad_set"),
            getAdgroupIDFromFragment: m("ad"),
            getCampaignGroup: o("AdsPECampaignGroupSelectors")
              .getByFieldsSelector,
            getCampaign: o("AdsPECampaignSelectors").getByFieldsSelector,
            getAdgroup: o("AdsPEAdgroupSelectors").getByFieldsSelector,
            adAccountLoader: r("AdsAccountStore").getSelectedAccount,
          },
          function (t, n, a) {
            var i = n.fragmentIDs,
              l = a.adAccountLoader,
              s = a.getAdgroup,
              u = a.getAdgroupIDFromFragment,
              c = a.getCampaign,
              m = a.getCampaignGroup,
              p = a.getCampaignGroupIDFromFragment,
              _ = a.getCampaignIDFromFragment,
              f = d({
                adAccountLoader: l,
                adObjectLevel: "campaign",
                fragmentIDs: i,
                state: t,
                getAdObjectIDFromFragment: p,
                getAdObject: function (n) {
                  return m(n, {
                    id: null,
                    lightweight_split_test: null,
                    lightweight_split_test_options: null,
                    lifetime_spent: null,
                    daily_budget: null,
                    lifetime_budget: null,
                    objective: null,
                  }).mapValue(function (t) {
                    var n = t.daily_budget,
                      r = t.lifetime_budget,
                      o = t.lifetime_spent,
                      a = t.objective,
                      i = babelHelpers.objectWithoutPropertiesLoose(t, e);
                    return babelHelpers.extends({}, i, {
                      campaignGroupDurationRelatedParams: {
                        objective: a,
                        lifetime_budget: r,
                        daily_budget: n,
                        lifetime_spent: o,
                        id: t.id,
                      },
                    });
                  });
                },
              }),
              g = function (t) {
                var e = t[0],
                  n = m(r("onlyx")(e), {
                    daily_budget: null,
                    lifetime_budget: null,
                    lifetime_spent: null,
                    objective: null,
                    id: null,
                  });
                return o("AdsLoadObjectUtils")
                  .all([n])
                  .mapValue(function (e) {
                    var t = e[0];
                    return t;
                  });
              };
            return (
              (f = d({
                adAccountLoader: l,
                adObjectLevel: "ad_set",
                fragmentIDs: i,
                state: f,
                getAdObjectIDFromFragment: _,
                getAdObject: function (t) {
                  var e = c(t, {
                      id: null,
                      campaign_id: null,
                      lightweight_split_test: null,
                      lightweight_split_test_options: null,
                      lifetime_spent: null,
                    }).mapValue(function (e) {
                      return {
                        campaignGroupID: e.campaign_id,
                        id: e.id,
                        lifetime_spent: e.lifetime_spent,
                        lightweight_split_test: e.lightweight_split_test,
                        lightweight_split_test_options:
                          e.lightweight_split_test_options,
                      };
                    }),
                    n = o("AdsLoadObjectUtils")
                      .all([
                        o(
                          "AdsAdObjectsSelectors",
                        ).getParentAdObjectIDsLoadObjectSelector({
                          adObjectLevel: "campaign",
                          campaignIDs: [t],
                        }),
                      ])
                      .mapValue(g);
                  return o("AdsLoadObjectUtils")
                    .all([e, n])
                    .mapValue(function (e) {
                      var t = e[0],
                        n = e[1];
                      return {
                        campaignGroupID: t.campaignGroupID,
                        id: t.id,
                        lifetime_spent: t.lifetime_spent,
                        lightweight_split_test: t.lightweight_split_test,
                        lightweight_split_test_options:
                          t.lightweight_split_test_options,
                        campaignGroupDurationRelatedParams: n,
                      };
                    });
                },
              })),
              d({
                adAccountLoader: l,
                adObjectLevel: "ad",
                fragmentIDs: i,
                state: f,
                getAdObjectIDFromFragment: u,
                getAdObject: function (t) {
                  var e = s(t, {
                      adset_id: null,
                      campaign_id: null,
                      id: null,
                      lightweight_split_test: null,
                      lightweight_split_test_options: null,
                    }).mapValue(function (e) {
                      return {
                        campaignID: e.adset_id,
                        campaignGroupID: e.campaign_id,
                        id: e.id,
                        lightweight_split_test: e.lightweight_split_test,
                        lightweight_split_test_options:
                          e.lightweight_split_test_options,
                      };
                    }),
                    n = o("AdsLoadObjectUtils")
                      .all([
                        o(
                          "AdsAdObjectsSelectors",
                        ).getParentAdObjectIDsLoadObjectSelector({
                          adObjectLevel: "campaign",
                          adgroupIDs: [t],
                        }),
                      ])
                      .mapValue(g);
                  return o("AdsLoadObjectUtils")
                    .all([e, n])
                    .mapValue(function (e) {
                      var t = e[0],
                        n = e[1];
                      return babelHelpers.extends({}, t, {
                        campaignGroupDurationRelatedParams: n,
                      });
                    });
                },
              })
            );
          },
        ),
      };
    function d(e) {
      var t,
        n = e.adAccountLoader,
        o = e.adObjectLevel,
        a = e.fragmentIDs,
        i = e.getAdObject,
        l = e.getAdObjectIDFromFragment,
        s = e.state,
        u =
          (t = a == null ? void 0 : a.map(l).filter(Boolean)) != null
            ? t
            : r("immutable").Set(),
        c = u
          .map(function (e) {
            try {
              return i(e).getValue();
            } catch (t) {
              return (
                r("FBLogger")(
                  "ads_experiments",
                  "AdsExperimentsInitLightweightTestCreationOnPublishReducerPlugin",
                ).mustfix(
                  "expected to get ad object parent for:",
                  e,
                  ", error: ",
                  t,
                ),
                null
              );
            }
          })
          .filter(Boolean),
        d = r("immutable").Map(),
        m = function (t) {
          if (t === "CREATIVE_MULTICELL_TESTING") return 1;
          var e = c.filter(function (e) {
            return (e == null ? void 0 : e.lightweight_split_test) === t;
          });
          d = d.set(t, e);
        };
      for (var _ of r("AdsExperimentsLightweightSplitTestType").members()) m(_);
      var f = c.filter(function (e) {
          return !r("isNullish")(e == null ? void 0 : e.lightweight_split_test);
        }),
        g = s.filter(function (e, t) {
          return (
            f.some(function (e) {
              return t === (e == null ? void 0 : e.id);
            }) ||
            !c.some(function (e) {
              return t === (e == null ? void 0 : e.id);
            })
          );
        });
      return (p(g, d, n, o), g);
    }
    function m(e) {
      return r("adsCreateStoreThunkSelector")(
        r("AdsDraftFragmentStore"),
        function (t) {
          var n = r("AdsDraftFragmentStore").getCached(t);
          return (n == null ? void 0 : n.ad_object_type) === e
            ? n.ad_object_id
            : null;
        },
      );
    }
    function p(e, t, n, o) {
      if (
        t.some(function (e) {
          return e.size > 0;
        })
      ) {
        var a;
        (a = r("JSResource")).loadAll(
          [
            a("adsExperimentsCheckBestPracticeEligibility").__setRef(
              "AdsExperimentsInitLightweightTestCreationOnPublishReducerPlugin",
            ),
            a("AdsExperimentsInitLightweightCreationAction").__setRef(
              "AdsExperimentsInitLightweightTestCreationOnPublishReducerPlugin",
            ),
            a("AdsExperimentsGetBestPracticesNextStepUtils").__setRef(
              "AdsExperimentsInitLightweightTestCreationOnPublishReducerPlugin",
            ),
            a("AdsExperimentsLightweightCreationStepType").__setRef(
              "AdsExperimentsInitLightweightTestCreationOnPublishReducerPlugin",
            ),
            a("AdsExperimentsLightweightGetDependentIDs").__setRef(
              "AdsExperimentsInitLightweightTestCreationOnPublishReducerPlugin",
            ),
          ],
          function (a, l, c, d, m) {
            var p = a.adsExperimentsCheckBestPracticeEligibility,
              _ = c.adsExperimentsGetBestPracticesNextStepFromEligibility,
              f = t.map(function (t, a) {
                return t.map(function (t) {
                  var i,
                    l,
                    s = !0;
                  if (
                    ((t == null ? void 0 : t.lifetime_spent) != null &&
                      Number(t.lifetime_spent) > 0 &&
                      (s = !1),
                    t == null)
                  )
                    return null;
                  var u = n.mapValue(function (e) {
                      return p({
                        adObjectID: t.id,
                        adAccount: e,
                        isFastStartEligible: s,
                        lightweightType: a,
                        isFromPublish: !0,
                      });
                    }),
                    c = (i = e.get(t.id)) == null ? void 0 : i.step,
                    f = _(c || d.CHECKING_ELIGIBILITY, u),
                    g,
                    h =
                      (l = m({
                        lightweightType: a,
                        adObjectID: t.id,
                      }).getValue()) != null
                        ? l
                        : [];
                  if (f !== c) {
                    var y = u.getValue();
                    y != null &&
                      f === d.INELIGIBLE &&
                      (g = y.ineligibleReasons);
                  }
                  return {
                    adObjectID: t.id,
                    adObjectLevel: o,
                    isLightweightABTestCreation: !0,
                    lightweightType: a,
                    lightweightOptions:
                      typeof t.lightweight_split_test_options == "string"
                        ? r("adsExperimentsGetLightweightCatalogData")(
                            t.lightweight_split_test_options,
                          )
                        : t.lightweight_split_test_options,
                    studyLevelAdObjectID: r(
                      "adsExperimentsGetLightweightStudyLevelAdObjectID",
                    )(t, a),
                    step: f,
                    studyLevel: r(
                      "adsExperimentsGetDerivedStudyLevelFromLightweightType",
                    )({
                      lightweightType: a,
                      campaignGroup: t.campaignGroupDurationRelatedParams,
                    }),
                    ineligibleReasons: g,
                    dependentIDs: h,
                    isFastStartEligible: s,
                    campaignGroupDurationRelatedParams:
                      t.campaignGroupDurationRelatedParams,
                  };
                });
              }),
              g = r("filterNulls")(f.flatten().toArray());
            (s || (s = r("isEmpty")))(g) ||
              (u || (u = r("AdsDataAtom"))).addPostDispatchCallback(
                function () {
                  return l.dispatch(
                    { lightweightCreationStatus: g },
                    {
                      line: "455",
                      module:
                        "AdsExperimentsInitLightweightTestCreationOnPublishReducerPlugin.js",
                      moduleID: i.id,
                    },
                  );
                },
              );
          },
        );
      }
    }
    var _ = c;
    l.default = _;
  },
  98,
);
