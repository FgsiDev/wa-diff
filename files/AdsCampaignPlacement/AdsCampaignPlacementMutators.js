__d(
  "AdsCampaignPlacementMutators",
  [
    "AdsCampaignPlacementAddDataActionFlux",
    "AdsMutators",
    "AdsPlacementAPISpecWriterUtils",
    "AdsPlacementPluginList",
    "AdsPlacementPositionGroupPlugins",
    "AdsPlacementReducerUtils",
    "AdsUEditorCampaignMutators",
    "WAMMUnknownAgePlacementMutator",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      reduce: function (t, n) {
        var e = n.action;
        switch (e.type) {
          case o("AdsCampaignPlacementAddDataActionFlux").actionType: {
            var r = e.eligibilityInformation;
            return o("AdsMutators").mutateEach(t, e.ids, function (e) {
              return o("AdsPlacementReducerUtils").updatePlacementSpec(s(e, r));
            });
          }
          default:
            return t;
        }
      },
    };
    function s(e, t) {
      var n = o("AdsUEditorCampaignMutators").updateBundledSettings(e, t);
      return o("AdsPlacementAPISpecWriterUtils").resetDevicesIfIneligible(
        n,
        t,
        !1,
      );
    }
    var u = r("immutable").List([]);
    ((u = u.concat(
      o("AdsPlacementPluginList")
        .getAllPositions()
        .map(function (e) {
          return o("AdsPlacementAPISpecWriterUtils").createMutator(
            e,
            function (e) {
              var t = e.isEnabled;
              return !0;
            },
            function (e) {
              var t = e.adsetReducer;
              return t;
            },
          );
        })
        .filter(function (e) {
          return e;
        }),
    )),
      (u = u.concat(
        r("AdsPlacementPositionGroupPlugins")
          .getSet()
          .map(function (e) {
            return o("AdsPlacementAPISpecWriterUtils").createMutator(
              e,
              function (e) {
                var t = e.isEnabled;
                return !0;
              },
              function (e) {
                var t = e.adsetReducer;
                return t;
              },
            );
          })
          .filter(function (e) {
            return e;
          }),
      )),
      (u = u.concat(
        o("AdsPlacementPluginList")
          .getAllPlatforms()
          .map(function (e) {
            return o("AdsPlacementAPISpecWriterUtils").createMutator(
              e,
              function (e) {
                var t = e.isEnabled;
                return !0;
              },
              function (e) {
                var t = e.adsetReducer;
                return t;
              },
            );
          })
          .filter(function (e) {
            return e;
          }),
      )),
      (u = u.push(e)),
      (u = u.push(r("WAMMUnknownAgePlacementMutator"))));
    var c = u;
    l.default = c;
  },
  98,
);
