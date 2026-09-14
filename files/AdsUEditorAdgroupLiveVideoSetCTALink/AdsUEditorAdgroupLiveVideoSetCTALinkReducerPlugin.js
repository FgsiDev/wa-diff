__d(
  "AdsUEditorAdgroupLiveVideoSetCTALinkReducerPlugin",
  [
    "AdsAPIAdgroupRecordUtils",
    "AdsAdgroupSemanticFields",
    "AdsInstagramUsernameStore",
    "AdsMutators",
    "AdsUEditorAdgroupLiveVideoSetCTALinkActionFlux",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSetCTALinkMutatorsUtils",
    "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
    "AdsUEditorCallToActionMutators",
    "AdsUEditorLiveVideoMutators",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {
            plugins: o("AdsUEditorAdgroupSelectors").adObjectsList.mapTransform(
              o("AdsUEditorAdgroupSpecPathPluginAdObjectsUtils")
                .getAdgroupSpecPathPlugin,
            ),
            getInstagramAccount: r("AdsInstagramUsernameStore")
              .getForAdgroupSelector,
          },
          function (e, t, n) {
            var a = n.getInstagramAccount,
              i = n.plugins;
            return o("AdsMutators").mutateEach(
              e,
              t.adgroupIDs,
              function (e, t) {
                var n = r("nullthrows")(i.get(t));
                return o("AdsMutators").chain(
                  function (e) {
                    return r("AdsAdgroupSemanticFields").callToActionType.set(
                      n,
                      e,
                      "WATCH_LIVE_VIDEO",
                    );
                  },
                  function (e) {
                    return o(
                      "AdsUEditorCallToActionMutators",
                    ).setCallToActionValueAppDestination(
                      e,
                      n,
                      "INSTAGRAM_LIVE_VIDEO",
                    );
                  },
                  function (e) {
                    return o(
                      "AdsUEditorAdgroupSetCTALinkMutatorsUtils",
                    ).updateCreativeCallToAction({
                      adgroup: e,
                      appDestination: "INSTAGRAM_LIVE_VIDEO",
                      callToActionType: "WATCH_LIVE_VIDEO",
                    });
                  },
                  function (e) {
                    var i = r("AdsAdgroupSemanticFields").instagramActorID.get(
                      n,
                      e,
                    );
                    if (i != null) {
                      var l = a(i, t);
                      if (l != null) {
                        var s = o("AdsAPIAdgroupRecordUtils").getPostEditMode(
                          e,
                        );
                        return o(
                          "AdsUEditorLiveVideoMutators",
                        ).setCTALinkAndAppLink({
                          adgroup: e,
                          specPlugin: n,
                          instagramAccount: l,
                          postEditMode: s,
                        });
                      }
                    }
                    return e;
                  },
                )(e);
              },
            );
          },
          r("AdsUEditorAdgroupLiveVideoSetCTALinkActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
