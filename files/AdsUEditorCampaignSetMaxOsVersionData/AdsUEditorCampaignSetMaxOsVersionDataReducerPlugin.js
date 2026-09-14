__d(
  "AdsUEditorCampaignSetMaxOsVersionDataReducerPlugin",
  [
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsPlacementReducerUtils",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignSetMaxOsVersionDataActionFlux",
    "AdsUserOSUtils",
    "AppAdsConfig.experimental",
    "FBLogger",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["iOS", "Windows", "Android", "Windows Phone"],
      s = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.campaignIDs, function (e) {
              var n = t.value;
              return o("AdsPlacementReducerUtils").updatePlacementSpec(u(e, n));
            });
          },
          o("AdsUEditorCampaignSetMaxOsVersionDataActionFlux").actionType,
        ),
      };
    function u(t, n) {
      var a = t.targeting.user_os;
      if (!a || (a == null ? void 0 : a.size) !== 1)
        return (
          r("FBLogger")("ads").mustfix(
            "Trying to set max version when device type is not defined or more than one is defined",
          ),
          t
        );
      var i = o("AdsUserOSUtils").splitUserOS(a.toJS()[0]),
        l = i.min_version;
      if (l == null || l === "") {
        var s = i.os,
          u = e.find(function (e) {
            return e === s;
          }),
          c =
            u != null
              ? r("AppAdsConfig.experimental").mobileOsVersionNames[u]
              : null;
        if (!c)
          return (
            r("FBLogger")("ads").mustfix(
              "Trying to set max version but versions couldn't be computed",
            ),
            t
          );
        l = Object.keys(c)[0];
      }
      return r("AdsCampaignRecordAccessors").targeting.user_os.set(
        r("immutable").List([
          o("AdsUserOSUtils").toUserOSString(i.os || "", l, n),
        ]),
        t,
      );
    }
    var c = s;
    l.default = c;
  },
  98,
);
