__d(
  "AdsUEditorCampaignSetMinOsVersionDataReducerPlugin",
  [
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsPlacementReducerUtils",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignSetMinOsVersionDataActionFlux",
    "AdsUserOSUtils",
    "FBLogger",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
        {},
        function (e, t) {
          var n = t.value;
          return o("AdsMutators").mutateEach(e, t.campaignIDs, function (e) {
            return o("AdsPlacementReducerUtils").updatePlacementSpec(s(e, n));
          });
        },
        o("AdsUEditorCampaignSetMinOsVersionDataActionFlux").actionType,
      ),
    };
    function s(e, t) {
      var n = e.targeting.user_os;
      if (
        (n && !r("immutable").List.isList(n) && (n = r("immutable").List(n)),
        !n || n.size !== 1)
      )
        return (
          r("FBLogger")("ads").mustfix(
            "Trying to set min version when device type is not defined or more than one is defined",
          ),
          e
        );
      var a = o("AdsUserOSUtils").splitUserOS(n.toJS()[0]);
      return r("AdsCampaignRecordAccessors").targeting.user_os.set(
        a.os == null
          ? r("immutable").List([null])
          : r("immutable").List([
              o("AdsUserOSUtils").toUserOSString(a.os, t, a.max_version),
            ]),
        e,
      );
    }
    var u = e;
    l.default = u;
  },
  98,
);
