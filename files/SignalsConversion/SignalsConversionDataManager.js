__d(
  "SignalsConversionDataManager",
  [
    "AdsEventsManagerTimeUtils",
    "AdsGraphAPI",
    "AsyncTypedRequest",
    "FBLogger",
    "GraphAPIFieldUtils",
    "GraphAPIPaging",
    "SignalsConversionTypeaheadLogger",
    "SignalsConversionTypeaheadLoggingKeys",
    "XSignalsConversionEventsDataFetchControllerRouteBuilder",
    "XSignalsConversionEventsForProductSetDataFetchControllerRouteBuilder",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["account_id"],
      s = [
        "id",
        "is_eligible_for_value_optimization",
        "is_unavailable",
        "has_bapi_domains",
        "last_fired_time",
        "name",
        "owner_business",
        "is_bwi_eligible",
        "is_bwp_eligible",
        "has_custom_attribution_source",
        "has_eligible_custom_attribution_source",
        o("GraphAPIFieldUtils").getFieldWithSubfields("owner_ad_account", e),
      ],
      u = [
        "account_id",
        "advanced_rule",
        "business",
        "custom_event_type",
        "data_sources",
        "domains",
        "event_source_type",
        "id",
        "is_archived",
        "is_unavailable",
        "last_fired_time",
        "name",
        "pixel",
        "rule",
        "default_conversion_value",
        "offsite_signal_container_id",
      ];
    function c(e) {
      return o("AdsGraphAPI")
        .get(i.id)
        .adaccount(e)
        .edge("adspixels")
        .batched()
        .get({ fields: s })
        .then(
          function (e) {
            var t = e.data;
            return (
              o("SignalsConversionTypeaheadLogger").logApiFetchingSuccess(
                r("SignalsConversionTypeaheadLoggingKeys")
                  .SIGNALS_CONVERSION_TYPEAHEAD_API_PIXELS_LOAD_SUCCESS,
              ),
              t.map(function (e) {
                var t = e.has_bapi_domains,
                  n = e.has_custom_attribution_source,
                  r = e.has_eligible_custom_attribution_source,
                  o = e.id,
                  a = e.is_bwi_eligible,
                  i = e.is_bwp_eligible,
                  l = e.is_eligible_for_value_optimization,
                  s = e.is_offline_active,
                  u = e.is_unavailable,
                  c = e.last_fired_time,
                  d = e.name,
                  m = e.owner_ad_account,
                  p = e.owner_business;
                return {
                  hasBAPIDomains: t,
                  hasCustomAttributionSource: n,
                  hasEligibleCustomAttributionSource: r,
                  id: o,
                  isBWIEligible: a,
                  isBWPEligible: i,
                  isEligibleForValueOptimization: l,
                  isOfflineActive: s,
                  isUnavailable: u,
                  lastFiredTime: c,
                  name: d,
                  owner_ad_account: m,
                  owner_business: p,
                };
              })
            );
          },
          function (e) {
            return (
              o("SignalsConversionTypeaheadLogger").logApiFetchingError(
                r("SignalsConversionTypeaheadLoggingKeys")
                  .SIGNALS_CONVERSION_TYPEAHEAD_API_PIXELS_LOAD_ERROR,
                e,
              ),
              []
            );
          },
        );
    }
    function d(e) {
      var t = e.signal_containers;
      return t.map(function (e) {
        var t = e.cluster,
          n = e.has_access_to_shared_event_names_only,
          a = e.has_bapi_domains,
          i = e.has_custom_attribution_source,
          l = e.has_eligible_custom_attribution_source,
          s = e.id,
          u = e.is_bwi_eligible,
          c = e.is_bwp_eligible,
          d = e.is_eligible_for_value_optimization,
          m = e.is_offline_active,
          p = e.is_signal_setup_recommended_share_to_biz,
          _ = e.is_unavailable,
          f = e.last_fired_time,
          g = e.name,
          h = e.owner_ad_account,
          y = e.owner_business,
          C = e.revenue_events_last_56d,
          b = e.server_last_fired_time,
          v = e.signal_setup_recommendation_ent_id,
          S = null;
        try {
          f !== 0 &&
            (S = o("AdsEventsManagerTimeUtils")
              .getLocalDateFromInstant(f)
              .toISOString());
        } catch (e) {
          var R = r("getErrorSafe")(e);
          r("FBLogger")("signals_consolidation").mustfix(
            "Failed to get browser last fired date time from time instant %s with error message: %s",
            f,
            R.message,
          );
        }
        var L = null;
        try {
          b !== 0 &&
            (L = o("AdsEventsManagerTimeUtils")
              .getLocalDateFromInstant(b)
              .toISOString());
        } catch (e) {
          var E = r("getErrorSafe")(e);
          r("FBLogger")("signals_consolidation").mustfix(
            "Failed to get capi last fired date time from time instant %s with error message: %s",
            b,
            E.message,
          );
        }
        var k = {
          cluster:
            t != null
              ? {
                  app:
                    t.app != null
                      ? {
                          id: t.app.id,
                          object_store_urls: t.app.object_store_urls,
                        }
                      : null,
                  dataSetID: t.data_set_id,
                  pixelID: t.pixel_id,
                }
              : null,
          hasAccessToSharedEventNamesOnly: n,
          hasBAPIDomains: a,
          hasCustomAttributionSource: i,
          hasEligibleCustomAttributionSource: l,
          id: s,
          isBWIEligible: u,
          isBWPEligible: c,
          isEligibleForValueOptimization: d,
          isSignalSetupRecommendedShareToBiz: p,
          isUnavailable: _,
          lastFiredTime: S,
          name: g,
          revenueEventsLast56d: C,
          serverLastFiredTime: L,
          signalSetupRecommendationEntId: v,
        };
        return (
          h != null &&
            (k = babelHelpers.extends({}, k, {
              ownerAdAccount: { accountID: h.account_id },
            })),
          y != null && (k = babelHelpers.extends({}, k, { ownerBusiness: y })),
          m != null &&
            (k = babelHelpers.extends({}, k, { isOfflineActive: m })),
          k
        );
      });
    }
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.adAccountID,
            n = e.isDatasetSplitConversion,
            a = e.isMarketingMessageOffsiteConversion,
            i = e.objective,
            l = e.pixelID,
            s = e.productSetID,
            u = r("XSignalsConversionEventsDataFetchControllerRouteBuilder")
              .buildUri({
                ad_account_id: t,
                event_source_id: l,
                is_dataset_split_conversion: n,
                is_marketing_message_offsite_conversion: a,
                objective: i != null ? i : void 0,
                product_set_id: s,
              })
              .toString(),
            c = yield new (r("AsyncTypedRequest"))()
              .setURI(u)
              .promisePayload()
              .then(
                function (e) {
                  var t;
                  return (
                    o("SignalsConversionTypeaheadLogger").logApiFetchingSuccess(
                      r("SignalsConversionTypeaheadLoggingKeys")
                        .SIGNALS_CONVERSION_TYPEAHEAD_API_PIXEL_EVENT_STATS_LOAD_SUCCESS,
                    ),
                    {
                      allEvents: e.conversion_events,
                      voDefaultedEvents:
                        (t = e.vo_defaulted_events) != null ? t : null,
                    }
                  );
                },
                function (e) {
                  return { allEvents: [], voDefaultedEvents: null };
                },
              ),
            d = c.allEvents,
            m = c.voDefaultedEvents;
          return d.map(function (e) {
            var t = e.event_name.toLowerCase(),
              n = _(e.default_bid_constraint_guidance),
              r =
                m != null
                  ? m.findIndex(function (e) {
                      return e.toLowerCase() === t;
                    })
                  : -1;
            return {
              bapi_domains: e.domains,
              count: e.count,
              defaultBidConstraintGuidance: n,
              eventName: e.event_name,
              eventNameID: e.event_name_id,
              hasDiagnostics: e.has_diagnostics,
              isEligibleForNPVO: e.is_eligible_for_npvo,
              isSharedEvent: !!e.is_shared_event,
              isUnavailable: e.is_unavailable,
              lastFiredTime: e.last_fired_time,
              voDefaultRank: r >= 0 ? r : null,
            };
          });
        })),
        p.apply(this, arguments)
      );
    }
    function _(e) {
      return e == null
        ? null
        : {
            cpaAverageTargetDefaultValue: e.cpa_average_target_default_value,
            cpaAverageTargetWarningLimit: e.cpa_average_target_warning_limit,
            roasAverageFloorDefaultValue: e.roas_average_floor_default_value,
            roasAverageFloorWarningLimit: e.roas_average_floor_warning_limit,
          };
    }
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.adAccountID,
            n = e.productSetID,
            o = r(
              "XSignalsConversionEventsForProductSetDataFetchControllerRouteBuilder",
            ).buildUri({ ad_account_id: t, product_set_id: n }),
            a;
          try {
            var i = yield new (r("AsyncTypedRequest"))()
              .setURI(o)
              .promisePayload();
            a = i.conversion_events;
          } catch (e) {
            a = [];
          }
          return a.map(function (e) {
            return {
              appAEMApps: e.apps,
              bapi_domains: e.domains,
              count: e.count,
              eventName: e.event_name,
              eventNameID: e.event_name_id,
              hasDiagnostics: e.has_diagnostics,
              isEligibleForNPVO: e.is_eligible_for_npvo,
              isSharedEvent: !!e.is_shared_event,
              isUnavailable: e.is_unavailable,
              lastFiredTime: e.last_fired_time,
            };
          });
        })),
        g.apply(this, arguments)
      );
    }
    function h(e) {
      return o("AdsGraphAPI")
        .get(i.id)
        .adaccount(e)
        .edge("customconversions")
        .setPriority("HIGH")
        .declareOnly()
        .get({ fields: u, limit: 100 });
    }
    function y(e) {
      return h(e)
        .go()
        .then(o("GraphAPIPaging").allPages())
        .then(function (e) {
          var t = e.data;
          return t
            .filter(function (e) {
              return (
                e.event_source_type === "pixel" ||
                e.event_source_type === "multiple_sources"
              );
            })
            .map(function (e) {
              var t = e.account_id,
                n = e.advanced_rule,
                r = e.business,
                o = e.custom_event_type,
                a = e.data_sources,
                i = e.default_conversion_value,
                l = e.domains,
                s = e.event_source_type,
                u = e.id,
                c = e.is_archived,
                d = e.is_unavailable,
                m = e.last_fired_time,
                p = e.name,
                _ = e.offsite_signal_container_id,
                f = e.pixel,
                g = e.rule;
              return {
                accountID: t,
                advancedRule: n,
                bapi_domains:
                  l == null
                    ? void 0
                    : l.map(function (e) {
                        var t = e.domain,
                          n = e.in_cool_down_until,
                          r = e.is_eligible_for_vo,
                          o = e.is_in_cool_down;
                        return {
                          domain: t,
                          inCooldownUntil: n,
                          isEligibleForVO: r,
                          isInCooldown: o,
                        };
                      }),
                business: r,
                conversionCategory: o,
                dataSources: a
                  ? a.map(function (e) {
                      return {
                        dataSourceType: e.source_type,
                        id: e.id,
                        name: e.name,
                      };
                    })
                  : [],
                defaultConversionValue: i,
                eventSourceType: s,
                id: u,
                isArchived: c,
                isUnavailable: d,
                lastFiredTime: m,
                name: p,
                offsiteSignalContainerID: _,
                pixel: f,
                rule: g,
              };
            });
        })
        .catch(function (e) {
          return (
            o("SignalsConversionTypeaheadLogger").logApiFetchingError(
              r("SignalsConversionTypeaheadLoggingKeys")
                .SIGNALS_CONVERSION_TYPEAHEAD_API_CUSTOM_CONVERSIONS_LOAD_ERROR,
              e,
            ),
            []
          );
        });
    }
    ((l.loadAdAccountPixelsForConversion = c),
      (l.SignalsLoadAdAccountSignalSourceContainersPayloadHandler = d),
      (l.loadWebsiteConversionEventsData = m),
      (l.loadWebsiteConversionEventsDataForProductSet = f),
      (l.buildLoadWebsiteCustomConversionsRequest = h),
      (l.loadWebsiteCustomConversionsByAdAccount = y));
  },
  98,
);
