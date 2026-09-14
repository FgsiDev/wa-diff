__d(
  "AdsUEditorAdgroupAddOmniChannelCustomizationIosAndAndroidUrlReducerPlugin",
  [
    "AdsMutators",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupAddOmnichannelCustomizationIosAndAndroidUrlActionFlux",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupWebAndAppMutators",
    "FBLogger",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {
            parentData: o(
              "AdsUEditorAdgroupSelectors",
            ).adObjectsList.mapTransform(
              o("AdsUEditorAdgroupAdObjectsUtils").getParentAdObjectsExtraData,
            ),
          },
          function (e, t, n) {
            var a = n.parentData;
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              var n = a.get(e.id);
              return (
                n ||
                  r("FBLogger")("ads_market_dynamics_solutions").mustfix(
                    "[PAC] ParentData not be null when AdsUEditorAdgroupAddOmnichannelCustomizationIosAndAndroidUrlActionPluginType",
                  ),
                o("AdsMutators").chain(function (e) {
                  var r,
                    a,
                    i = e,
                    l = {
                      ios_deep_link_url: t.iosDeepLink,
                      android_deep_link_url: t.androidDeepLink,
                    },
                    s =
                      (r =
                        (a = e.creative) == null ||
                        (a = a.omnichannel_link_spec) == null ||
                        (a = a.app) == null
                          ? void 0
                          : a.application_id) != null
                        ? r
                        : "";
                  return o(
                    "AdsUEditorAdgroupWebAndAppMutators",
                  ).addPlacementOmnichannelCustomizationUrl(
                    i,
                    n.specPlugin,
                    t.placements,
                    l,
                    t.isDefaultPlacementAsset,
                    s,
                  );
                })(e)
              );
            });
          },
          o(
            "AdsUEditorAdgroupAddOmnichannelCustomizationIosAndAndroidUrlActionFlux",
          ).actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
