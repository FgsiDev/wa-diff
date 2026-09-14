__d(
  "AdsExperimentsLightweightSetOptInBackOnAfterIneligible",
  [
    "AdsDataAtom",
    "AdsUEditorHostIDs",
    "FBLogger",
    "JSResource",
    "adsExperimentsGetLightweightABTestingPlugin",
    "adsExperimentsGroupDraftFragmentsByLightweightType",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t) {
      var n = t.filter(function (e) {
        var t = e.ineligibleReasons,
          n = e.lightweightType,
          o = r("adsExperimentsGetLightweightABTestingPlugin")(n),
          a =
            t == null
              ? void 0
              : t.keySeq().some(function (e) {
                  var t;
                  return (
                    (o == null ||
                    (t = o.eligibilityConfig) == null ||
                    (t = t.get(e)) == null
                      ? void 0
                      : t.isRecoverable) === !1
                  );
                });
        return a !== !0;
      });
      if (n.size !== 0) {
        var o = r("adsExperimentsGroupDraftFragmentsByLightweightType")(n);
        o.size !== 0 &&
          r("JSResource").loadAll(
            [
              r("JSResource")(
                "AdsUEditorAdgroupSetLightweightSplitTestAction",
              ).__setRef(
                "AdsExperimentsLightweightSetOptInBackOnAfterIneligible",
              ),
              r("JSResource")(
                "AdsUEditorCampaignSetLightweightSplitTestAction",
              ).__setRef(
                "AdsExperimentsLightweightSetOptInBackOnAfterIneligible",
              ),
            ],
            function (n, a) {
              o.forEach(function (o, l) {
                if (o.size !== 0) {
                  var s = r("adsExperimentsGetLightweightABTestingPlugin")(l);
                  (e || (e = r("AdsDataAtom"))).addPostDispatchCallback(
                    function () {
                      if (
                        s != null &&
                        (s == null
                          ? void 0
                          : s.hasOptInUXSupportForAdObjectTestRecovery) === !0
                      )
                        u({
                          adObjectIDs: o,
                          adObjectLevel: s.getAdObjectLevel(),
                          ineligibleStudyParts: t,
                          lightweightSplitTest: l,
                        });
                      else
                        switch (l) {
                          case "STANDARD_ENHANCEMENT":
                            n.dispatch(
                              {
                                lightweightSplitTest: l,
                                adgroupIDs: o.toArray(),
                                hostID: r("AdsUEditorHostIDs").EDITING,
                              },
                              {
                                line: "86",
                                module:
                                  "AdsExperimentsLightweightSetOptInBackOnAfterIneligible.js",
                                moduleID: i.id,
                              },
                            );
                            break;
                          case "GUIDANCE_DUPLICATION":
                            break;
                          case "ADVANTAGE_SHOPPING_CAMPAIGN":
                            break;
                          case "AUTOMATIC_PLACEMENT":
                          case "ADVANTAGE_PLUS_AUDIENCE":
                            a.dispatch(
                              {
                                lightweightSplitTest: l,
                                campaignIDs: o.toArray(),
                                hostID: r("AdsUEditorHostIDs").EDITING,
                                isAutomaticOptBackIn: !0,
                              },
                              {
                                line: "98",
                                module:
                                  "AdsExperimentsLightweightSetOptInBackOnAfterIneligible.js",
                                moduleID: i.id,
                              },
                            );
                            break;
                          case "DYNAMIC_ADS":
                          case "ADVANTAGE_PLUS_CREATIVE":
                          case "CREATIVE_MULTICELL_TESTING":
                            break;
                          case "CREATIVE_PRIMARY_TEXT_GEN":
                            throw r("FBLogger")("ads_experiments").mustfixThrow(
                              "lightweight test text gen only uses plugin system",
                            );
                          case "GUIDANCE_MFR":
                            throw r("FBLogger")("ads_experiments").mustfixThrow(
                              "lightweight test guidance mfr only uses plugin system",
                            );
                          case "CREATIVE_IMAGE_GEN":
                            throw r("FBLogger")("ads_experiments").mustfixThrow(
                              "lightweight test image gen only uses plugin system",
                            );
                          case "ADVANTAGE_PLUS_CREATIVE_ENHANCEMENTS":
                            throw r("FBLogger")("ads_experiments").mustfixThrow(
                              "lightweight test creative enhancements only uses plugin system",
                            );
                          case "CONSOLIDATED_ADVANTAGE_PLUS_AUDIENCE":
                            throw r("FBLogger")("ads_experiments").mustfixThrow(
                              "lightweight test consolidated advantage+ audience only uses plugin system",
                            );
                          case "L2_DUPLICATION_UPGRADE":
                            throw r("FBLogger")("ads_experiments").mustfixThrow(
                              "lightweight test L2 duplication upgrade only uses plugin system",
                            );
                          case "L3_DUPLICATION_UPGRADE":
                            throw r("FBLogger")("ads_experiments").mustfixThrow(
                              "lightweight test L3 duplication upgrade only uses plugin system",
                            );
                          case "VALUE_OPTIMIZATION_GOAL":
                            throw r("FBLogger")("ads_experiments").mustfixThrow(
                              "lightweight test value optimization goal only uses plugin system",
                            );
                          case "LEAD_GEN_FORM":
                            throw r("FBLogger")("ads_experiments").mustfixThrow(
                              "lightweight test lead gen form only uses plugin system",
                            );
                        }
                    },
                  );
                }
              });
            },
          );
      }
    }
    function u(e) {
      var t = e.adObjectIDs,
        n = e.adObjectLevel,
        o = e.lightweightSplitTest;
      switch (n) {
        case "ad":
          r("promiseDone")(
            r("JSResource")("AdsUEditorAdgroupSetLightweightSplitTestAction")
              .__setRef(
                "AdsExperimentsLightweightSetOptInBackOnAfterIneligible",
              )
              .load()
              .then(function (e) {
                return e.dispatch({
                  adgroupIDs: t.toArray(),
                  hostID: r("AdsUEditorHostIDs").EDITING,
                  lightweightSplitTest: o,
                });
              }),
          );
          break;
        case "ad_set":
          r("promiseDone")(
            r("JSResource")("AdsUEditorCampaignSetLightweightSplitTestAction")
              .__setRef(
                "AdsExperimentsLightweightSetOptInBackOnAfterIneligible",
              )
              .load()
              .then(function (e) {
                return e.dispatch({
                  lightweightSplitTest: o,
                  campaignIDs: t.toArray(),
                  hostID: r("AdsUEditorHostIDs").EDITING,
                  isAutomaticOptBackIn: !0,
                });
              }),
          );
          break;
        case "campaign":
          break;
      }
    }
    l.default = s;
  },
  98,
);
