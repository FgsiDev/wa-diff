__d(
  "AdsUEditorCampaignGroupToggleBwPReducerPlugin",
  [
    "AdsAPIObjectives",
    "AdsBwIUtils",
    "AdsCampaignGroupRecordAccessors",
    "AdsMutators",
    "AdsUEditorBwIToggleActionFlux",
    "AdsUEditorCampaignGroupReducerUtils",
    "FBLogger",
    "LoadObject",
    "adsCreateStoreSelector",
    "requireWeak",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    r("requireWeak")(
      "adsUEditorCampaignGroupDetailsBwPCatalogsSelector",
      function (t) {
        e = t.adsUEditorCampaignGroupDetailsBwPCatalogsSelector;
      },
    );
    var s = r("adsCreateStoreSelector")(
        function (t) {
          var n, r;
          return (n = (r = e) == null ? void 0 : r.getStores(t)) != null
            ? n
            : [];
        },
        function (n) {
          return e ? e(n) : r("LoadObject").empty({ creatorModuleID: i.id });
        },
        { name: i.id + ".adsUEditorCampaignGroupDetailsBwPCatalogsSelector" },
      ),
      u = { catalogsLoadObject: s },
      c = {
        reduce: o("AdsUEditorCampaignGroupReducerUtils").createReducer(
          u,
          function (e, t, n) {
            var a = n.catalogsLoadObject,
              i = t.enabled ? "BWP" : "NONE",
              l = t.enabled ? t.partner : "NONE";
            return o("AdsMutators").mutateEach(
              e,
              t.campaignGroupIDs,
              function (e) {
                var n = a.getValue();
                if (!o("AdsBwIUtils").isEligibleBwICampaignGroup(e, t.partner))
                  return e;
                if (!(n != null && n.length))
                  return (
                    r("FBLogger")("ads").mustfix(
                      "The BwP toggle and toggle action should be disabled if thereare no BwP catalogs or they are not loaded yet.",
                    ),
                    e
                  );
                var s = new Set(
                  n.map(function (e) {
                    return e.id;
                  }),
                );
                return o("AdsMutators").chain(
                  function (e) {
                    return t.partner === "AMAZON"
                      ? r(
                          "AdsCampaignGroupRecordAccessors",
                        ).buy_with_prime_type.set(i, e)
                      : e;
                  },
                  function (e) {
                    return r(
                      "AdsCampaignGroupRecordAccessors",
                    ).buy_with_integration_partner.set(l, e);
                  },
                  function (e) {
                    if (e.objective !== r("AdsAPIObjectives").OUTCOME_SALES)
                      return e;
                    if (t.enabled) {
                      var o, a;
                      return s.has(
                        (o =
                          e == null || (a = e.promoted_object) == null
                            ? void 0
                            : a.product_catalog_id) != null
                          ? o
                          : "",
                      )
                        ? e
                        : r(
                            "AdsCampaignGroupRecordAccessors",
                          ).promoted_object.product_catalog_id.set(n[0].id, e);
                    } else
                      return r(
                        "AdsCampaignGroupRecordAccessors",
                      ).promoted_object.product_catalog_id.delete(e);
                  },
                )(e);
              },
            );
          },
          o("AdsUEditorBwIToggleActionFlux").actionType,
        ),
      },
      d = c;
    l.default = d;
  },
  98,
);
