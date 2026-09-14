__d(
  "SignalsLoadAdAccountSignalSourceContainersStoreSource",
  [
    "RelayHooks",
    "ReverseInteropStoreSourceWeakBase",
    "SignalsLoadAdAccountSignalSourceContainersStoreSourceFragment.graphql",
    "SignalsLoadAdAccountSignalSourceContainersStoreSourceServerLoadedQuery.graphql",
    "SignalsLoadAdAccountSignalSourceContainersStoreSourceServerQuery.graphql",
    "TypeCoercionUtils",
    "XFBSignalContainerUsageTypesUtils.facebook",
    "nullthrows",
    "promiseDone",
    "readClientFragment",
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
              "SignalsLoadAdAccountSignalSourceContainersStoreSourceServerQuery.graphql",
            )),
      d =
        s !== void 0
          ? s
          : (s = n(
              "SignalsLoadAdAccountSignalSourceContainersStoreSourceServerLoadedQuery.graphql",
            )),
      m =
        u !== void 0
          ? u
          : (u = n(
              "SignalsLoadAdAccountSignalSourceContainersStoreSourceFragment.graphql",
            )),
      p = (function (e) {
        function t() {
          var t =
            "xfb_andromeda_XSignalsLoadAdAccountSignalSourceContainersControllerWithoutID";
          return e.call(this, t) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.__getQuery = function () {
            return d;
          }),
          (n.__getVariables = function () {
            return {};
          }),
          (n.__getGQLParams = function (t) {
            return {
              act: t.adAccountID,
              usage_type: r("nullthrows")(
                o("XFBSignalContainerUsageTypesUtils.facebook").fromJSEnum(
                  t.usageType,
                ),
              ),
            };
          }),
          (n.__fetchQuery = function (t, n) {
            var e = this,
              a = "loaded_signals_load_ad_account_signal_source_containers",
              i = "XFBXSignalsLoadAdAccountSignalSourceContainersController",
              l = t[0],
              s = this.getRelayId(l);
            this.updateRecords([s], a, i);
            var u = this.__getGQLParams(l),
              d = o("RelayHooks")
                .fetchQuery(this.__environment, c, u)
                .toPromise()
                .then(function (t) {
                  return {
                    xfb_andromeda_XSignalsLoadAdAccountSignalSourceContainersControllerWithoutID:
                      e.$SignalsLoadAdAccountSignalSourceContainersStoreSource$p_1(
                        t == null
                          ? void 0
                          : t.xfb_andromeda_XSignalsLoadAdAccountSignalSourceContainersControllerWithoutID,
                      ),
                  };
                })
                .catch(function (r) {
                  return e.handleFetchQueryError(t, n, r);
                });
            r("promiseDone")(d);
          }),
          (n.__getCached = function (t, n) {
            var e = this,
              o = t.map(function (t) {
                var n = e.getRelayId(t),
                  o = e.__getGQLParams(t);
                return {
                  key: t,
                  value: r("readClientFragment")(
                    e.__environment,
                    c,
                    m,
                    o,
                    {},
                    n,
                    function (t) {
                      return e.$SignalsLoadAdAccountSignalSourceContainersStoreSource$p_1(
                        t,
                      );
                    },
                  ),
                };
              });
            return o;
          }),
          (n.$SignalsLoadAdAccountSignalSourceContainersStoreSource$p_1 =
            function (t) {
              return t != null
                ? {
                    signal_containers:
                      (t == null ? void 0 : t.signal_containers) != null
                        ? t == null
                          ? void 0
                          : t.signal_containers.map(function (e) {
                              var t,
                                n,
                                r,
                                a,
                                l,
                                s,
                                u,
                                c,
                                d,
                                m,
                                p,
                                _,
                                f,
                                g,
                                h,
                                y,
                                C;
                              return {
                                cluster:
                                  e.cluster != null
                                    ? {
                                        pixel_id: o(
                                          "TypeCoercionUtils",
                                        ).coerceNonMaybeValue(
                                          (t = e.cluster) == null
                                            ? void 0
                                            : t.pixel_id,
                                          "signal_containers[].cluster.pixel_id",
                                          i.id,
                                        ),
                                        app:
                                          ((n = e.cluster) == null
                                            ? void 0
                                            : n.app) != null &&
                                          e.cluster.app.id != null
                                            ? {
                                                id: e.cluster.app.id,
                                                object_store_urls:
                                                  e.cluster.app
                                                    .object_store_urls,
                                              }
                                            : void 0,
                                        data_set_id: o(
                                          "TypeCoercionUtils",
                                        ).coerceNonMaybeValue(
                                          (r = e.cluster) == null
                                            ? void 0
                                            : r.data_set_id,
                                          "signal_containers[].cluster.data_set_id",
                                          i.id,
                                        ),
                                      }
                                    : void 0,
                                has_bapi_domains: o(
                                  "TypeCoercionUtils",
                                ).coerceNonMaybeValue(
                                  e.has_bapi_domains,
                                  "signal_containers[].has_bapi_domains",
                                  i.id,
                                ),
                                id: o("TypeCoercionUtils").coerceNonMaybeValue(
                                  e.signal_containers_id,
                                  "signal_containers[].signal_containers_id",
                                  i.id,
                                ),
                                last_fired_time: o(
                                  "TypeCoercionUtils",
                                ).coerceNonMaybeValue(
                                  e.last_fired_time,
                                  "signal_containers[].last_fired_time",
                                  i.id,
                                ),
                                server_last_fired_time: o(
                                  "TypeCoercionUtils",
                                ).coerceNonMaybeValue(
                                  e.server_last_fired_time,
                                  "signal_containers[].server_last_fired_time",
                                  i.id,
                                ),
                                name: o(
                                  "TypeCoercionUtils",
                                ).coerceNonMaybeValue(
                                  e.name,
                                  "signal_containers[].name",
                                  i.id,
                                ),
                                is_unavailable: o(
                                  "TypeCoercionUtils",
                                ).coerceNonMaybeValue(
                                  e.is_unavailable,
                                  "signal_containers[].is_unavailable",
                                  i.id,
                                ),
                                is_eligible_for_value_optimization: o(
                                  "TypeCoercionUtils",
                                ).coerceNonMaybeValue(
                                  e.is_eligible_for_value_optimization,
                                  "signal_containers[].is_eligible_for_value_optimization",
                                  i.id,
                                ),
                                is_bwi_eligible:
                                  (a = e.is_bwi_eligible) != null ? a : void 0,
                                is_bwp_eligible:
                                  (l = e.is_bwp_eligible) != null ? l : void 0,
                                has_custom_attribution_source:
                                  (s = e.has_custom_attribution_source) != null
                                    ? s
                                    : void 0,
                                has_eligible_custom_attribution_source:
                                  (u =
                                    e.has_eligible_custom_attribution_source) !=
                                  null
                                    ? u
                                    : void 0,
                                signal_setup_recommendation_ent_id:
                                  (c = e.signal_setup_recommendation_ent_id) !=
                                  null
                                    ? c
                                    : void 0,
                                is_signal_setup_recommended_share_to_biz:
                                  (d =
                                    e.is_signal_setup_recommended_share_to_biz) !=
                                  null
                                    ? d
                                    : void 0,
                                has_access_to_shared_event_names_only:
                                  (m =
                                    e.has_access_to_shared_event_names_only) !=
                                  null
                                    ? m
                                    : void 0,
                                owner_ad_account:
                                  e.owner_ad_account != null
                                    ? {
                                        account_id: o(
                                          "TypeCoercionUtils",
                                        ).coerceNonMaybeValue(
                                          (p = e.owner_ad_account) == null
                                            ? void 0
                                            : p.account_id,
                                          "signal_containers[].owner_ad_account.account_id",
                                          i.id,
                                        ),
                                      }
                                    : void 0,
                                owner_business:
                                  e.owner_business != null
                                    ? {
                                        id: o(
                                          "TypeCoercionUtils",
                                        ).coerceNonMaybeValue(
                                          (_ = e.owner_business) == null
                                            ? void 0
                                            : _.business_id,
                                          "signal_containers[].owner_business.business_id",
                                          i.id,
                                        ),
                                        name: o(
                                          "TypeCoercionUtils",
                                        ).coerceNonMaybeValue(
                                          (f = e.owner_business) == null
                                            ? void 0
                                            : f.name,
                                          "signal_containers[].owner_business.name",
                                          i.id,
                                        ),
                                      }
                                    : void 0,
                                is_offline_active:
                                  (g = e.is_offline_active) != null
                                    ? g
                                    : void 0,
                                business_object_id:
                                  (h = e.business_object_id) != null
                                    ? h
                                    : void 0,
                                creation_time:
                                  (y = e.creation_time) != null ? y : void 0,
                                revenue_events_last_56d:
                                  (C = e.revenue_events_last_56d) != null
                                    ? C
                                    : void 0,
                              };
                            })
                        : [],
                  }
                : void 0;
            }),
          t
        );
      })(r("ReverseInteropStoreSourceWeakBase"));
    l.default = p;
  },
  98,
);
