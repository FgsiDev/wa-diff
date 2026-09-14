__d(
  "AdsBusinessConstraintsAdAccountDataStore",
  [
    "AdAccountConstraintsPlacementExclusionType",
    "AdsBusinessConstraintsAdAccountDataStoreLoadedQuery.graphql",
    "AdsBusinessConstraintsAdAccountDataStoreLoaderQuery.graphql",
    "AdsBusinessConstraintsAdAccountSetContraintsActionFlux",
    "AdsDataAtom",
    "FluxLoadObjectStore_RELAY",
    "react-relay",
    "readQueryToLoadObject",
    "updateLoadedAdAccountsClientSchema",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c =
        e !== void 0
          ? e
          : (e = n(
              "AdsBusinessConstraintsAdAccountDataStoreLoaderQuery.graphql",
            )),
      d =
        s !== void 0
          ? s
          : (s = n(
              "AdsBusinessConstraintsAdAccountDataStoreLoadedQuery.graphql",
            )),
      m = (function (e) {
        function t() {
          return e.call(this, u || (u = r("AdsDataAtom"))) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.reduce = function (t, n) {
            var e = n.action;
            switch (e.type) {
              case r("AdsBusinessConstraintsAdAccountSetContraintsActionFlux")
                .actionType:
                return (this.__load(e.adAccountID, "network-only"), t);
              default:
                return t;
            }
          }),
          (n.__addIDToClientSchema = function (t) {
            r("updateLoadedAdAccountsClientSchema")(
              this.getRelayEnvironment(),
              t,
            );
          }),
          (n.__load = function (t, n) {
            var e = this;
            n === void 0 && (n = "store-or-network");
            var r = this.getRelayEnvironment();
            (this.__addIDToClientSchema(t),
              o("react-relay")
                .fetchQuery(r, c, { adAccountID: t }, { fetchPolicy: n })
                .subscribe({
                  error: function (r) {
                    return e.__handleErrors([t], r);
                  },
                }));
          }),
          (n.__getQuery = function () {
            return d;
          }),
          (n.__getVariables = function () {
            return {};
          }),
          (n.__getCachedFromRelayStore = function (t) {
            return r("readQueryToLoadObject")(
              this.getRelayEnvironment(),
              c,
              { adAccountID: t },
              function (e) {
                return p(e);
              },
            );
          }),
          t
        );
      })(r("FluxLoadObjectStore_RELAY"));
    m.__moduleID = i.id;
    function p(e) {
      var t,
        n,
        o,
        a,
        i,
        l =
          e == null ||
          (t = e.ad_account) == null ||
          (t = t.advertiser_profile_editable_attributes[0].value) == null
            ? void 0
            : t.as_integer,
        s =
          e == null ||
          (n = e.ad_account) == null ||
          (n = n.advertiser_profile_editable_attributes[1].value) == null ||
          (n = n.as_ad_target_geo_locations) == null
            ? void 0
            : n.as_location_api_spec_object,
        u =
          e == null ||
          (o = e.ad_account) == null ||
          (o = o.advertiser_profile_editable_attributes[2].value) == null ||
          (o = o.as_ad_target_geo_locations) == null
            ? void 0
            : o.as_location_api_spec_object,
        c = {},
        d =
          (a =
            e == null ||
            (i = e.ad_account) == null ||
            (i = i.advertiser_profile_editable_attributes[3].value) == null
              ? void 0
              : i.as_multi_string) != null
            ? a
            : [],
        m = d
          .map(function (e) {
            return r("AdAccountConstraintsPlacementExclusionType").isValid(e)
              ? r("AdAccountConstraintsPlacementExclusionType").cast(e)
              : null;
          })
          .filter(Boolean),
        p = null;
      return (
        l != null && (c.age_min = l),
        s != null && (c.geo_locations = s),
        u != null && (c.excluded_geo_locations = u),
        m.length > 0 && (p = { placement_exclusions: m }),
        { data: [{ audience_controls: c, placement_controls: p }] }
      );
    }
    var _ = new m();
    l.default = _;
  },
  98,
);
