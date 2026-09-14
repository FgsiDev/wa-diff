__d(
  "AdsDynamicAudienceUtils",
  [
    "fbt",
    "AdsAPIObjectives",
    "AdsDynamicAudienceDraft",
    "AdsDynamicAudienceDraftBookingWindow",
    "AdsDynamicAudienceDraftEvent",
    "AdsDynamicAudienceDraftSaveState",
    "AdsDynamicAudienceDraftUpsell",
    "AdsDynamicAudienceEventRestriction",
    "AdsDynamicTargetingCategories",
    "AdsPixelConversionStandardEvents",
    "AdsUEditorHostIDs",
    "CatalogVertical",
    "DateConsts",
    "DynamicAdsContentTypes$FbtEnum",
    "DynamicAdsContentTypesCapitalized$FbtEnum",
    "DynamicAdsVerticalToContentType",
    "DynamicContentTypeToCatalogVertical",
    "ExternalEventSourceTypes",
    "FBLogger",
    "SupportedEventsForContentType",
    "adsDynamicCampaignHasUpsellDynamicAudience",
    "immutable",
    "intlList",
    "isEmpty",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = 180 * o("DateConsts").SEC_PER_DAY,
      c = 30,
      d = c * o("DateConsts").SEC_PER_DAY;
    function m() {
      return c;
    }
    function p() {
      return new (r("AdsDynamicAudienceDraftBookingWindow"))({
        enabled: !1,
        min_seconds: 0,
        max_seconds: d,
      });
    }
    function _(e, t, n, o, a) {
      var i = p();
      return new (r("AdsDynamicAudienceDraft"))({
        booking_window: i,
        event_source_group_creation_in_progress: !1,
        event_source_group_id: null,
        event_sources: e,
        exclusions: t,
        inclusions: n,
        is_excluded_dynamic_audience: o,
        restrict_to_set_id: null,
        state: r("AdsDynamicAudienceDraftSaveState").UNPUBLISHED,
        preconfigured_options: { preset_type: a, upsell: k() },
      });
    }
    function f(e) {
      return new (r("AdsDynamicAudienceDraftEvent"))({
        content_type: $(e),
        event_type: "Purchase",
        min_event_count: 1,
        restriction_type: r("AdsDynamicAudienceEventRestriction").IN_THE_PAST,
        max_seconds: d,
        min_seconds: 0,
      });
    }
    function g(e, t) {
      var n = f(e),
        o = E(e, n),
        a = R(e, n);
      return _(
        t,
        o,
        a,
        !1,
        b(e, r("AdsDynamicTargetingCategories").RETARGETING),
      );
    }
    function h(e) {
      return (
        e === r("CatalogVertical").FLIGHTS ||
        e === r("CatalogVertical").HOTELS ||
        e === r("CatalogVertical").DESTINATIONS
      );
    }
    function y(e) {
      return (
        e === r("CatalogVertical").VEHICLE_OFFERS ||
        e === r("CatalogVertical").VEHICLES ||
        e === r("CatalogVertical").AUTOMOTIVE_MODELS
      );
    }
    function C(e) {
      switch (e) {
        case r("CatalogVertical").FLIGHTS:
        case r("CatalogVertical").HOTELS:
        case r("CatalogVertical").DESTINATIONS:
          return "TRAVEL";
        case r("CatalogVertical").VEHICLES:
          return "VEHICLE";
        case r("CatalogVertical").VEHICLE_OFFERS:
          return "VEHICLE_OFFER";
        case r("CatalogVertical").AUTOMOTIVE_MODELS:
          return "AUTOMOTIVE_MODEL";
        case r("CatalogVertical").HOME_LISTINGS:
          return "HOME_LISTING";
        case r("CatalogVertical").MEDIA_TITLES:
          return "MEDIA_TITLE";
        case r("CatalogVertical").COMMERCE:
        default:
          return "PRODUCT";
      }
    }
    function b(e, t, n, o) {
      if (t === r("AdsDynamicTargetingCategories").PROSPECTING) {
        if (
          n !== r("AdsAPIObjectives").PRODUCT_CATALOG_SALES ||
          o !== r("AdsUEditorHostIDs").CREATION
        )
          return "EMPTY_AUDIENCE";
        if (h(e)) return "PURCHASED_AUDIENCE";
        if (y(e)) return "CUSTOM_AUDIENCE";
      }
      return "CUSTOM_AUDIENCE";
    }
    function v(e, t, n, o) {
      var a = f(e),
        i = E(e, a);
      return _(
        t,
        r("immutable").List(),
        i,
        !0,
        b(e, r("AdsDynamicTargetingCategories").PROSPECTING, n, o),
      );
    }
    function S(e) {
      return _(
        e,
        r("immutable").List(),
        r("immutable").List(),
        !0,
        "EMPTY_AUDIENCE",
      );
    }
    function R(e, t) {
      switch (e) {
        case r("CatalogVertical").VEHICLES:
          return r("immutable").List([
            t.set("event_type", "Search"),
            t.set("event_type", "ViewContent"),
            t.set("event_type", "AddToWishlist"),
          ]);
        case r("CatalogVertical").DESTINATIONS:
        case r("CatalogVertical").FLIGHTS:
        case r("CatalogVertical").HOTELS:
          return r("immutable").List([
            t.set("event_type", "Search"),
            t.set("event_type", "ViewContent"),
          ]);
        default:
          return r("immutable").List();
      }
    }
    function L(e, t) {
      switch (e) {
        case r("CatalogVertical").MEDIA_TITLES:
          return r("immutable").List();
        case r("CatalogVertical").VEHICLES:
        case r("CatalogVertical").VEHICLE_OFFERS:
          return r("immutable").List([t.set("event_type", "Lead")]);
        case r("CatalogVertical").DESTINATIONS:
        case r("CatalogVertical").FLIGHTS:
        case r("CatalogVertical").HOTELS:
          return r("immutable").List([
            t.set("event_type", "Purchase"),
            t.set("event_type", "ViewContent"),
            t.set("event_type", "Search"),
            t.set("event_type", "InitiateCheckout"),
          ]);
        default:
          return r("immutable").List();
      }
    }
    function E(e, t) {
      switch (e) {
        case r("CatalogVertical").MEDIA_TITLES:
          return r("immutable").List();
        case r("CatalogVertical").VEHICLES:
        case r("CatalogVertical").VEHICLE_OFFERS:
          return r("immutable").List([t.set("event_type", "Lead")]);
        case r("CatalogVertical").DESTINATIONS:
        case r("CatalogVertical").FLIGHTS:
        case r("CatalogVertical").HOTELS:
          return r("immutable").List([t.set("event_type", "Purchase")]);
        default:
          return r("immutable").List();
      }
    }
    function k() {
      return new (r("AdsDynamicAudienceDraftUpsell"))({
        enabled: !1,
        max_seconds: d,
      });
    }
    function I(e) {
      return r("DynamicAdsVerticalToContentType")[e];
    }
    function T(e, t) {
      switch (e) {
        case r("CatalogVertical").AUTOMOTIVE_MODELS:
          return ["automotive_model"];
        case r("CatalogVertical").DESTINATIONS:
        case r("CatalogVertical").FLIGHTS:
        case r("CatalogVertical").HOTELS:
          return ["hotel", "flight", "destination"];
        case r("CatalogVertical").HOME_LISTINGS:
          return ["home_listing"];
        case r("CatalogVertical").VEHICLES:
          return ["vehicle"];
        case r("CatalogVertical").VEHICLE_OFFERS:
          return ["vehicle_offer"];
        case r("CatalogVertical").MEDIA_TITLES:
          return ["media_title"];
        case r("CatalogVertical").LOCAL_SERVICE_BUSINESSES:
          return [t ? "product" : "local_service_business"];
        default:
          return [];
      }
    }
    function D(e) {
      return r("SupportedEventsForContentType")[e];
    }
    function x(e, t) {
      var n = D(t),
        r = e.inclusions
          .concat(e.exclusions)
          .filter(function (e) {
            return e.content_type === t;
          })
          .map(function (e) {
            return e.event_type;
          }),
        o = n.filter(function (e) {
          return !r.contains(e);
        });
      return o.length === 0 ? n[0] : o[0];
    }
    function $(e) {
      if (
        !Object.prototype.hasOwnProperty.call(
          r("DynamicAdsVerticalToContentType"),
          e,
        )
      )
        throw r("FBLogger")("dpa").mustfixThrow(
          "vertical %s does not have an associated content type",
        );
      return r("DynamicAdsVerticalToContentType")[e];
    }
    function P(e) {
      return r("DynamicContentTypeToCatalogVertical")[e];
    }
    function N(e, t, n) {
      var o = w(e, t, n);
      return o.length === 0
        ? null
        : new (r("AdsDynamicAudienceDraftEvent"))({
            content_type: o[0].contentType,
            event_type: o[0].eventType,
            min_event_count: 1,
            restriction_type: r("AdsDynamicAudienceEventRestriction")
              .IN_THE_PAST,
            max_seconds: d,
            min_seconds: 0,
          });
    }
    function M(e, t, n) {
      return w(e, t, n).length > 0;
    }
    function w(e, t, n) {
      var r = [],
        o = T(t, n),
        a = function (n) {
          var t = e
            .filter(function (e) {
              return e.content_type === n;
            })
            .map(function (e) {
              return e.event_type;
            });
          D(n)
            .filter(function (e) {
              return !t.includes(e);
            })
            .forEach(function (e) {
              return r.push({ contentType: n, eventType: e });
            });
        };
      for (var i of o) a(i);
      return r;
    }
    function A(e, t) {
      var n = s._(
        /*BTDS*/ '_j{"automotive_model":"Automotive Model events from event source {event source ids}","destination":"Destination events from event source {event source ids}","flight":"Flight events from event source {event source ids}","home_listing":"Home Listing events from event source {event source ids}","hotel":"Hotel events from event source {event source ids}","media_title":"Media Title events from event source {event source ids}","vehicle":"Vehicle events from event source {event source ids}","vehicle_offer":"Vehicle Offer events from event source {event source ids}"}',
        [
          s._enum(e, r("DynamicAdsContentTypesCapitalized$FbtEnum")),
          s._param("event source ids", t),
        ],
      );
      return n.toString();
    }
    function F(e, t, n, a, i) {
      var l = r("intlList")(
          a.map(function (e) {
            return r("AdsPixelConversionStandardEvents")[e.event_type].name;
          }),
        ),
        u = r("intlList")(
          i.map(function (e) {
            return r("AdsPixelConversionStandardEvents")[e.event_type].name;
          }),
        ),
        c = Math.round(e.min_seconds / o("DateConsts").SEC_PER_DAY),
        d = Math.round(e.max_seconds / o("DateConsts").SEC_PER_DAY),
        m;
      if (
        (!u && !e.enabled
          ? (m = s._(
              /*BTDS*/ '_j{"automotive_model":"People with automotive model events from event source {event source ids} including {list of inclusion events}","destination":"People with destination events from event source {event source ids} including {list of inclusion events}","flight":"People with flight events from event source {event source ids} including {list of inclusion events}","home_listing":"People with home listing events from event source {event source ids} including {list of inclusion events}","hotel":"People with hotel events from event source {event source ids} including {list of inclusion events}","media_title":"People with media title events from event source {event source ids} including {list of inclusion events}","vehicle":"People with vehicle events from event source {event source ids} including {list of inclusion events}","vehicle_offer":"People with vehicle offer events from event source {event source ids} including {list of inclusion events}"}',
              [
                s._enum(t, r("DynamicAdsContentTypes$FbtEnum")),
                s._param("event source ids", n),
                s._param("list of inclusion events", l),
              ],
            ))
          : u && !e.enabled
            ? (m = s._(
                /*BTDS*/ '_j{"automotive_model":"People with automotive model events from event source {event source ids} including {list of inclusion events}, excluding {list of exclusion events}","destination":"People with destination events from event source {event source ids} including {list of inclusion events}, excluding {list of exclusion events}","flight":"People with flight events from event source {event source ids} including {list of inclusion events}, excluding {list of exclusion events}","home_listing":"People with home listing events from event source {event source ids} including {list of inclusion events}, excluding {list of exclusion events}","hotel":"People with hotel events from event source {event source ids} including {list of inclusion events}, excluding {list of exclusion events}","media_title":"People with media title events from event source {event source ids} including {list of inclusion events}, excluding {list of exclusion events}","vehicle":"People with vehicle events from event source {event source ids} including {list of inclusion events}, excluding {list of exclusion events}","vehicle_offer":"People with vehicle offer events from event source {event source ids} including {list of inclusion events}, excluding {list of exclusion events}"}',
                [
                  s._enum(t, r("DynamicAdsContentTypes$FbtEnum")),
                  s._param("event source ids", n),
                  s._param("list of inclusion events", l),
                  s._param("list of exclusion events", u),
                ],
              ))
            : !u && e.enabled
              ? (m = s._(
                  /*BTDS*/ '_j{"automotive_model":"People with automotive model events from event source {event source ids} including {list of inclusion events}, in a booking window of {start day} to {end day} days","destination":"People with destination events from event source {event source ids} including {list of inclusion events}, in a booking window of {start day} to {end day} days","flight":"People with flight events from event source {event source ids} including {list of inclusion events}, in a booking window of {start day} to {end day} days","home_listing":"People with home listing events from event source {event source ids} including {list of inclusion events}, in a booking window of {start day} to {end day} days","hotel":"People with hotel events from event source {event source ids} including {list of inclusion events}, in a booking window of {start day} to {end day} days","media_title":"People with media title events from event source {event source ids} including {list of inclusion events}, in a booking window of {start day} to {end day} days","vehicle":"People with vehicle events from event source {event source ids} including {list of inclusion events}, in a booking window of {start day} to {end day} days","vehicle_offer":"People with vehicle offer events from event source {event source ids} including {list of inclusion events}, in a booking window of {start day} to {end day} days"}',
                  [
                    s._enum(t, r("DynamicAdsContentTypes$FbtEnum")),
                    s._param("event source ids", n),
                    s._param("list of inclusion events", l),
                    s._param("start day", c),
                    s._param("end day", d),
                  ],
                ))
              : u &&
                e.enabled &&
                (m = s._(
                  /*BTDS*/ '_j{"automotive_model":"People with automotive model events from event source {event source ids} including {list of inclusion events}, excluding {list of exclusion events}, in a booking window of {start day} to {end day} days","destination":"People with destination events from event source {event source ids} including {list of inclusion events}, excluding {list of exclusion events}, in a booking window of {start day} to {end day} days","flight":"People with flight events from event source {event source ids} including {list of inclusion events}, excluding {list of exclusion events}, in a booking window of {start day} to {end day} days","home_listing":"People with home listing events from event source {event source ids} including {list of inclusion events}, excluding {list of exclusion events}, in a booking window of {start day} to {end day} days","hotel":"People with hotel events from event source {event source ids} including {list of inclusion events}, excluding {list of exclusion events}, in a booking window of {start day} to {end day} days","media_title":"People with media title events from event source {event source ids} including {list of inclusion events}, excluding {list of exclusion events}, in a booking window of {start day} to {end day} days","vehicle":"People with vehicle events from event source {event source ids} including {list of inclusion events}, excluding {list of exclusion events}, in a booking window of {start day} to {end day} days","vehicle_offer":"People with vehicle offer events from event source {event source ids} including {list of inclusion events}, excluding {list of exclusion events}, in a booking window of {start day} to {end day} days"}',
                  [
                    s._enum(t, r("DynamicAdsContentTypes$FbtEnum")),
                    s._param("event source ids", n),
                    s._param("list of inclusion events", l),
                    s._param("list of exclusion events", u),
                    s._param("start day", c),
                    s._param("end day", d),
                  ],
                )),
        !m)
      )
        throw r("FBLogger")("dpa").mustfixThrow(
          "intl_string should never be empy at this point",
        );
      return m.toString();
    }
    function O(e) {
      return Math.min(u, Math.max(0, e));
    }
    function B(e) {
      if (
        !e.event_source_group_id &&
        (!e.event_sources || e.event_sources.isEmpty())
      )
        return !1;
      var t = function (t) {
        return !D(t.content_type).includes(t.event_type);
      };
      return !(
        e.inclusions.isEmpty() ||
        e.inclusions.some(t) ||
        e.exclusions.some(t)
      );
    }
    function W(e) {
      return e === r("CatalogVertical").FLIGHTS;
    }
    function q(e, t) {
      if (
        !r("adsDynamicCampaignHasUpsellDynamicAudience")(t) ||
        !e.preconfigured_options.upsell.enabled
      )
        return e;
      var n = e.preconfigured_options.upsell;
      return e.merge({
        exclusions: r("immutable").List(),
        inclusions: r("immutable").List([
          new (r("AdsDynamicAudienceDraftEvent"))({
            content_type: $(t),
            event_type: "Purchase",
            min_event_count: 1,
            restriction_type: r("AdsDynamicAudienceEventRestriction")
              .IN_THE_PAST,
            max_seconds: n.max_seconds,
            min_seconds: 0,
          }),
        ]),
      });
    }
    function U(e, t, n) {
      return !n &&
        t.count() === 0 &&
        e.count() === 1 &&
        e.first().event_type === "Purchase"
        ? new (r("AdsDynamicAudienceDraftUpsell"))({
            enabled: !0,
            max_seconds: e.first().max_seconds,
          })
        : k();
    }
    function V(e) {
      if (!e) return !1;
      var t = JSON.parse(e),
        n = t.content_type,
        r = t.inclusions;
      return !(
        !r ||
        n !== "flight" ||
        (typeof r == "string" && (r = JSON.parse(r)), !Array.isArray(r)) ||
        !r.every(function (e) {
          return e.event === "Purchase";
        })
      );
    }
    function H(e, t, n) {
      return e.withMutations(function (e) {
        return t.forEach(function (t) {
          return e.update(t, n);
        });
      });
    }
    function G(e, t, n, r, o) {
      var a = r;
      return a == null
        ? H(e, t, function (e) {
            return e
              ? e.update(n ? "inclusions" : "exclusions", function (t) {
                  return t.map(function (t) {
                    return o(t, e);
                  });
                })
              : null;
          })
        : H(e, t, function (e) {
            return e
              ? e.update(n ? "inclusions" : "exclusions", function (t) {
                  return t.update(a, function (t) {
                    return o(t, e);
                  });
                })
              : null;
          });
    }
    function z(e, t, n) {
      return t === e
        ? t
        : t.withMutations(function (n) {
            for (var o of e.keys())
              r("immutable").is(t.get(o), e.get(o)) ||
                n.update(o, function (e) {
                  return e
                    ? e.set(
                        "state",
                        r("AdsDynamicAudienceDraftSaveState").UNPUBLISHED,
                      )
                    : null;
                });
          });
    }
    function j(t, n) {
      var o = n.eventSources,
        a = n.ids,
        i = n.setNameOnly;
      if (o != null) {
        if (i === !0)
          return H(t, a, function (t) {
            if (!t) return null;
            var n = t.get("event_sources");
            if (n == null) return t.set("event_sources", o);
            var a = [];
            return (
              n.forEach(function (t) {
                var n = t;
                ((e || (e = r("isEmpty")))(t.name) &&
                  (n = o.find(
                    function (e) {
                      return e.id === t.id;
                    },
                    null,
                    t,
                  )),
                  a.push(n));
              }),
              t.set("event_sources", r("immutable").List(a))
            );
          });
        var l = H(t, a, function (e) {
          return e ? e.set("event_sources", o) : null;
        });
        return z(t, l, a);
      }
      return t;
    }
    function K(e, t) {
      var n = t.eventSources,
        o = t.ids,
        a = t.setNameOnly;
      if (n != null && !a) {
        var i = H(e, o, function (e) {
          var t;
          if (!e || !n) return null;
          var o =
            (t = e.get("event_sources")) == null
              ? void 0
              : t.filterNot(function (e) {
                  return e.source_type === r("ExternalEventSourceTypes").PAGE;
                });
          return o
            ? e.set("event_sources", n.concat(o))
            : e.set("event_sources", n);
        });
        return z(e, i, o);
      }
      return e;
    }
    ((l.getDefaultRetentionDays = m),
      (l.getNewBookingWindow = p),
      (l.getNewDraftBase = _),
      (l.getBaseEvent = f),
      (l.getNewDraft = g),
      (l.isTravelVertical = h),
      (l.isAutoVertical = y),
      (l.getClaimObjectiveTypeForVertical = C),
      (l.getDefaultPreset = b),
      (l.getNewExclusionDraft = v),
      (l.getNewEmptyDraft = S),
      (l.getDefaultInclusions = R),
      (l.getRetargetingExclusions = L),
      (l.getDefaultExclusions = E),
      (l.getDefaultUpsell = k),
      (l.getContentType = I),
      (l.getContentTypes = T),
      (l.getEventTypes = D),
      (l.getNextEventType = x),
      (l.getDefaultContentTypeForVertical = $),
      (l.getVerticalForDynamicAdsContentType = P),
      (l.getNextEvent = N),
      (l.canAddEvent = M),
      (l.getUnusedEventTuples = w),
      (l.generateName = A),
      (l.generateDescription = F),
      (l.clipRetention = O),
      (l.isValidDraft = B),
      (l.requiresSetRestriction = W),
      (l.maybeTranformUpsellToPurchaseInclusion = q),
      (l.maybeTranformPurchaseInclusionToUpsell = U),
      (l.creationParamsEligibleForPurchaseUpsell = V),
      (l.mutateEach = H),
      (l.mutateEachInList = G),
      (l.unpublishIfChanged = z),
      (l.setEventSourcesOnDynamicAudienceDraft = j),
      (l.updatePageEventSourcesOnDynamicAudienceDraft = K));
  },
  226,
);
