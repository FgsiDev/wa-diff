__d(
  "authorizeExistingPostCreativeFlexDefaultOn",
  [
    "AdsCreativeFlexGKCheckUtils",
    "AdsDataAtom",
    "AdsEditingAdgroupEditorContext",
    "AdsManagerRelayEnvironment",
    "FBLogger",
    "FluxContainerSubscriptions",
    "adsUEditorEpaCreativeFlexDefaultOnSelector",
    "clearTimeout",
    "setTimeout",
    "triggerExistingPostCreativeFlexDefaultOn",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 5e3;
    function u() {
      if (o("AdsCreativeFlexGKCheckUtils").isExistingPostAdFlowEnabled()) {
        var t = r("AdsEditingAdgroupEditorContext"),
          n = function () {
            return r("adsUEditorEpaCreativeFlexDefaultOnSelector")(t);
          },
          a = function (o) {
            r("triggerExistingPostCreativeFlexDefaultOn")(
              r("AdsManagerRelayEnvironment"),
              o.queryInput,
              o.adgroupIDs,
              t.hostID,
              {
                getHasUserOptedOutMedia: function () {
                  return n().hasUserOptedOutMedia;
                },
                isAccountDefaultOnEligible: o.isAccountDefaultOnEligible,
                relatedMediaUserOptedOut: o.relatedMediaUserOptedOut,
              },
            );
          },
          i = n();
        if (i.queryInput != null) {
          a(i);
          return;
        }
        var l = i.adgroupIDs[0],
          u = i.pagePostID,
          c = new (r("FluxContainerSubscriptions"))(
            "authorizeExistingPostCreativeFlexDefaultOn",
          );
        c.setStores(
          r("adsUEditorEpaCreativeFlexDefaultOnSelector").getStores(t),
        );
        var d = r("setTimeout")(function () {
          (c.reset(),
            r("FBLogger")("ads_creative_flex").warn(
              "Existing-post default-on gave up waiting for the recommendation query input",
            ));
        }, s);
        c.addListener(function () {
          var t = n();
          t.queryInput != null &&
            (r("clearTimeout")(d),
            c.reset(),
            !(t.adgroupIDs[0] !== l || t.pagePostID !== u) &&
              (e || (e = r("AdsDataAtom"))).addPostDispatchCallback(
                function () {
                  return a(t);
                },
              ));
        });
      }
    }
    l.default = u;
  },
  98,
);
