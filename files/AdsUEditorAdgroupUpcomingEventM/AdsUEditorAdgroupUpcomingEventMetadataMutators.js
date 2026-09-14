__d(
  "AdsUEditorAdgroupUpcomingEventMetadataMutators",
  [
    "AdsAPIAdgroupRecordUtils",
    "AdsAdgroupRecordAccessors",
    "AdsAdgroupSpecUtils",
    "AdsBulkValueUtils",
    "AdsObjectTypeUtils",
    "AdsUEditorAdgroupUpcomingEventDetailsDateDetectionUtil",
    "AdsUEditorAdgroupUpcomingEventMutatorUtils",
    "AdsUEditorAdgroupUpcomingEventsMutator",
    "AdsUpcomingEventsUtils",
    "CallToActionTypes",
    "ReminderAdsGating",
    "TypeCoercionUtils",
    "adsCallToActionFilterTypesForReminderAds",
    "adsUEditorAdgroupPromoAdCreativeFieldSelectorUtil",
    "adsUEditorAdgroupUpcomingEventDetailsVisibilitySelectorUtil",
    "enumUtils",
    "first",
    "immutable",
    "isEmpty",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = r("justknobx")._("3285");
    function u(t, n, a, i, l, u, c, d, p) {
      var _ = o(
        "AdsUEditorAdgroupUpcomingEventDetailsDateDetectionUtil",
      ).sortAndFilterEventDates(n, s);
      if ((e || (e = r("isEmpty")))(_)) return h(t);
      var f = r("first")(_);
      if (f == null) return h(t);
      var g = r(
          "AdsAdgroupRecordAccessors",
        ).creative.asset_feed_spec.upcoming_event_metadata.event_dates.set(
          r("immutable").fromJS([f.unixTimestamp]),
          t,
        ),
        y =
          f.format != null
            ? r(
                "AdsAdgroupRecordAccessors",
              ).creative.asset_feed_spec.upcoming_event_metadata.date_format.set(
                f.format,
                g,
              )
            : r(
                "AdsAdgroupRecordAccessors",
              ).creative.asset_feed_spec.upcoming_event_metadata.date_format.delete(
                g,
              ),
        C =
          c != null
            ? r(
                "AdsAdgroupRecordAccessors",
              ).creative.asset_feed_spec.upcoming_event_metadata.detection_source.set(
                c,
                y,
              )
            : r(
                "AdsAdgroupRecordAccessors",
              ).creative.asset_feed_spec.upcoming_event_metadata.detection_source.delete(
                y,
              );
      return m(C, a, i, l, u, d, p);
    }
    function c(e) {
      var t,
        n,
        r,
        a,
        i,
        l = (t = e.toJS()) == null ? void 0 : t.creative;
      return o(
        "adsUEditorAdgroupUpcomingEventDetailsVisibilitySelectorUtil",
      ).getSelectedAdsHaveInteractiveComponents(
        o("AdsBulkValueUtils").aggregate([
          l == null || (n = l.interactive_components_spec) == null
            ? void 0
            : n.components,
        ]),
        o("AdsBulkValueUtils").aggregate([
          l == null || (r = l.interactive_components_spec) == null
            ? void 0
            : r.child_attachments,
        ]),
        o("AdsBulkValueUtils").aggregate([
          l == null || (a = l.asset_feed_spec) == null ? void 0 : a.images,
        ]),
        o("AdsBulkValueUtils").aggregate([
          l == null || (i = l.asset_feed_spec) == null ? void 0 : i.videos,
        ]),
      );
    }
    function d(e) {
      var t;
      return (
        (t = r(
          "AdsAdgroupRecordAccessors",
        ).creative.asset_feed_spec.upcoming_event_metadata.disabled_reasons.get(
          e,
        )) != null
          ? t
          : r("immutable").List()
      )
        .filter(Boolean)
        .toSet();
    }
    function m(e, t, n, a, i, l, s) {
      var u = d(e),
        m = [
          {
            condition: !o("ReminderAdsGating").isAutoDetectEnabled(a, i),
            reason: "NOT_IN_GK",
          },
          {
            condition:
              o("AdsUpcomingEventsUtils").upcomingEventAccessor.get(e) !=
                null && !u.contains("REPLACED_WITH_MANUAL_EVENT"),
            reason: "MANUAL_EVENT_ALREADY_EXISTS",
          },
          {
            condition: !o(
              "adsCallToActionFilterTypesForReminderAds",
            ).isCTATypeCompatibleWithUpcomingEvent(
              o("enumUtils").coerceNullable(
                o("TypeCoercionUtils").coerceOptionalValue(
                  o("AdsAdgroupSpecUtils").getCallToActionType(e),
                ),
                r("CallToActionTypes"),
              ),
            ),
            reason: "INCOMPATIBLE_CTA_TYPE",
          },
          {
            condition: !o(
              "adsUEditorAdgroupUpcomingEventDetailsVisibilitySelectorUtil",
            ).postEditModesAreEligible([
              o("AdsAPIAdgroupRecordUtils").getPostEditMode(e),
            ]),
            reason: "INELIGIBLE_POST_EDIT_MODE",
          },
          {
            condition: o(
              "adsUEditorAdgroupPromoAdCreativeFieldSelectorUtil",
            ).isPromoAdOptedInForAdgroup(e, l, s, !0, !0),
            reason: "IS_PROMO_AD",
          },
          {
            condition: o("AdsObjectTypeUtils").isDynamicProductAd(e),
            reason: "IS_CATALOG_AD",
          },
          { condition: c(e), reason: "INTERACTIVE_COMPONENT_COLLISION" },
          {
            condition: !o(
              "adsUEditorAdgroupUpcomingEventDetailsVisibilitySelectorUtil",
            ).linkTypeIsEligible(t),
            reason: "INELIGIBLE_DESTINATION_LINK_TYPE",
          },
          {
            condition: !n && !u.contains("OPTED_OUT_MANUALLY"),
            reason: "OPTED_OUT_BY_AD_ACCOUNT_SETTING",
          },
        ],
        p = m.concat({ condition: !1, reason: "DUPLICATED_FROM_OPTED_OUT_AD" }),
        _ = p
          .filter(function (e) {
            return e.condition;
          })
          .map(function (e) {
            return e.reason;
          }),
        f = p
          .filter(function (e) {
            return !e.condition;
          })
          .map(function (e) {
            return e.reason;
          });
      return g(e, u.concat(_).subtract(f));
    }
    function p(e, t) {
      var n =
        r(
          "AdsAdgroupRecordAccessors",
        ).creative.asset_feed_spec.upcoming_event_metadata.event_dates.get(e) !=
        null;
      if (!n) return e;
      var o = d(e);
      o = o.subtract([
        "REPLACED_WITH_MANUAL_EVENT",
        "MANUAL_EVENT_ALREADY_EXISTS",
      ]);
      var a = _(t);
      return (a != null && (o = o.add(a)), g(e, o));
    }
    function _(e) {
      switch (e) {
        case o("AdsUEditorAdgroupUpcomingEventsMutator")
          .ResetUpcomingEventSpecReason.DLO_ENABLED:
          return "IS_DLO";
        case o("AdsUEditorAdgroupUpcomingEventsMutator")
          .ResetUpcomingEventSpecReason.INCOMPATIBLE_CALL_TO_ACTION:
          return "INCOMPATIBLE_CTA_TYPE";
        case o("AdsUEditorAdgroupUpcomingEventsMutator")
          .ResetUpcomingEventSpecReason.PROMO_CODE_ADDED:
          return "IS_PROMO_AD";
        case o("AdsUEditorAdgroupUpcomingEventsMutator")
          .ResetUpcomingEventSpecReason.INTERACTIVE_COMPONENT_SPEC_CHANGED:
          return "INTERACTIVE_COMPONENT_COLLISION";
        case o("AdsUEditorAdgroupUpcomingEventsMutator")
          .ResetUpcomingEventSpecReason.INCOMPATIBLE_DESTINATION_TYPE:
          return "INELIGIBLE_DESTINATION_LINK_TYPE";
        case o("AdsUEditorAdgroupUpcomingEventsMutator")
          .ResetUpcomingEventSpecReason.INSTAGRAM_ACCOUNT_CHANGED:
        case o("AdsUEditorAdgroupUpcomingEventsMutator")
          .ResetUpcomingEventSpecReason.OPTIMIZATION_GOAL_CHANGED:
        case o("AdsUEditorAdgroupUpcomingEventsMutator")
          .ResetUpcomingEventSpecReason.REMOVED_BY_USER:
          return null;
      }
    }
    function f(e, t) {
      var n = d(e);
      return n.contains(t)
        ? g(
            e,
            n.filter(function (e) {
              return e !== t;
            }),
          )
        : e;
    }
    function g(e, t) {
      return t.size === 0
        ? r(
            "AdsAdgroupRecordAccessors",
          ).creative.asset_feed_spec.upcoming_event_metadata.disabled_reasons.delete(
            e,
          )
        : r(
            "AdsAdgroupRecordAccessors",
          ).creative.asset_feed_spec.upcoming_event_metadata.disabled_reasons.set(
            t.toList(),
            e,
          );
    }
    function h(e) {
      return o(
        "AdsUEditorAdgroupUpcomingEventMutatorUtils",
      ).isAdgroupUsingOnlySingleFieldInAssetFeedFromRecord(
        e,
        "upcoming_event_metadata",
      )
        ? r("AdsAdgroupRecordAccessors").creative.asset_feed_spec.delete(e)
        : r(
            "AdsAdgroupRecordAccessors",
          ).creative.asset_feed_spec.upcoming_event_metadata.delete(e);
    }
    function y(t, n, a, i, l, s, c, d, m, p, _, f) {
      if (r("justknobx")._("3652") || !c) return h(t);
      var g = o(
          "AdsUEditorAdgroupUpcomingEventDetailsDateDetectionUtil",
        ).getDetectedDatesFromAllMessageVariants(t, a, i, l),
        y = o(
          "AdsUEditorAdgroupUpcomingEventDetailsDateDetectionUtil",
        ).extractDatesAndEndDatesFromText(p),
        C = !(e || (e = r("isEmpty")))(y) && (e || (e = r("isEmpty")))(g);
      return u(t, C ? y : g, n, s, d, m, C ? "OCR_EXTRACTION" : null, _, f);
    }
    ((l.setUpcomingEventMetadataEventDates = u),
      (l.getUpcomingEventMetadataDisabledReasonsSet = d),
      (l.updateUpcomingEventMetadataForIncompatibility = p),
      (l.removeUpcomingEventMetadataDisabledReason = f),
      (l.setUpcomingEventMetadataDisabledReasons = g),
      (l.updateAdForUpcomingEventMetadata = y));
  },
  98,
);
