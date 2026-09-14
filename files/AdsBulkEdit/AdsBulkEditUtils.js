__d(
  "AdsBulkEditUtils",
  [
    "fbt",
    "invariant",
    "$InternalEnum",
    "AdsAPIBidStrategies",
    "AdsAPIObjectives",
    "AdsAdgroupBulkEditColumnKeys",
    "AdsBiddingOptimizationUtils",
    "AdsBulkEditDialogTypes",
    "AdsBulkEditFlowTypes",
    "AdsBulkValueUtils",
    "AdsCampaignBulkEditColumnKeys",
    "AdsCampaignGroupBulkEditColumnKeys",
    "AdsCampaignRawSpecUtils",
    "AdsCampaignRecordAccessors",
    "AdsImageUtils",
    "AdsMinRoasUtils",
    "AdsMixedValue",
    "AdsMutators",
    "AdsObjectTypeUtils",
    "AdsPlacementAssetThumbnailUtils",
    "AdsPlacementConstants",
    "AdsTargetingConstants",
    "AdsUniformValue",
    "AdsUserDeviceTypes",
    "AdsUserOSUtils",
    "AdsValidationConsts",
    "FBLogger",
    "GeoIcon.react",
    "Image.react",
    "IsAppAdUtils",
    "areEqual",
    "deepEquals",
    "immutable",
    "isEmptyObject",
    "meta-brand-folder-filled-16",
    "meta-brand-folder-outline-16",
    "meta-brand-four-squares-grid-filled-16",
    "meta-brand-four-squares-grid-outline-16",
    "meta-brand-three-dash-lines-left-two-rectangles-filled-16",
    "meta-brand-three-dash-lines-left-two-rectangles-outline-16",
    "react",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e,
      c,
      d = c || (c = o("react")),
      m = n("$InternalEnum")({
        BULK_EDIT_DIALOG: "bulk_edit_dialog",
        BULK_EDIT_DIALOG_INSTANT_PUBLISH: "bulk_edit_dialog_instant_publish",
        BULK_EDIT_MODE: "bulk_edit_mode",
        NONE: "none",
      });
    function p(e, t, n, r, a, i) {
      if (
        n === o("AdsBulkEditFlowTypes").AdsBulkEditFilterTypes.FILTER_BY_CHANGES
      ) {
        var l = t.filter(function (e, t) {
          return e.has(a);
        });
        return e.filter(function (e, t) {
          return l.has(t);
        });
      }
      return n ===
        o("AdsBulkEditFlowTypes").AdsBulkEditFilterTypes.FILTER_BY_ERROR
        ? e.filter(function (e, t) {
            return r.has(t);
          })
        : e;
    }
    function _(t) {
      switch (t) {
        case r("AdsCampaignBulkEditColumnKeys").GENDER:
          return O;
        case r("AdsCampaignBulkEditColumnKeys").BID_STRATEGY:
          return H;
        case r("AdsCampaignBulkEditColumnKeys").SCHEDULE_END:
          return W;
        case r("AdsCampaignGroupBulkEditColumnKeys").SPEND_CAP:
          return q;
        case r("AdsCampaignBulkEditColumnKeys").DELIVERY_TYPE:
          return e || (e = r("areEqual"));
        case r("AdsCampaignBulkEditColumnKeys").MAX_SPEND_LIMIT:
          return P;
        case r("AdsCampaignBulkEditColumnKeys").MIN_SPEND_LIMIT:
          return $;
        case r("AdsCampaignGroupBulkEditColumnKeys").CAMPAIGN_GROUP_BUDGET:
          return M;
        case r("AdsCampaignBulkEditColumnKeys")
          .CAMPAIGN_BID_CAPS_FROM_CAMPAIGN_GROUP:
        case r("AdsCampaignBulkEditColumnKeys")
          .CAMPAIGN_COST_CAPS_FROM_CAMPAIGN_GROUP:
          return G;
        case r("AdsCampaignBulkEditColumnKeys").LOCATION:
          return w;
        case r("AdsCampaignBulkEditColumnKeys").DEVICE_PLATFORMS:
          return A;
        case r("AdsCampaignBulkEditColumnKeys").AGE_SUGGESTION:
          return B;
        case r("AdsCampaignBulkEditColumnKeys").USER_OS:
          return F;
        case r("AdsCampaignBulkEditColumnKeys").CUSTOM_AUDIENCE:
          return D;
        case r("AdsCampaignBulkEditColumnKeys").DETAILED_TARGETING:
          return I;
        case r("AdsCampaignBulkEditColumnKeys").SAVED_AUDIENCE:
          return f;
        case r("AdsAdgroupBulkEditColumnKeys").MARKETING_MESSAGES:
          return g;
        case r("AdsCampaignBulkEditColumnKeys").CAMPAIGN_GOAL_TYPE:
          return h;
        case r("AdsCampaignBulkEditColumnKeys")
          .CAMPAIGN_GOAL_AUDIENCE_ENGAGEMENT:
          return y;
        case r("AdsCampaignBulkEditColumnKeys")
          .CAMPAIGN_GOAL_EXISTING_CUSTOMER_EXCLUSION:
          return C;
        case r("AdsCampaignBulkEditColumnKeys").CAMPAIGN_GOAL_EXCLUDE_AUDIENCES:
          return b;
        case r("AdsCampaignBulkEditColumnKeys")
          .CAMPAIGN_GOAL_ENGAGED_AUDIENCE_INCLUSION:
          return v;
        case r("AdsCampaignBulkEditColumnKeys")
          .CAMPAIGN_GOAL_EXISTING_CUSTOMER_INCLUSION:
          return S;
        case r("AdsCampaignBulkEditColumnKeys")
          .CAMPAIGN_GOAL_LOOKALIKE_INCLUSION:
          return R;
        case r("AdsCampaignBulkEditColumnKeys")
          .CAMPAIGN_MESSAGING_STRUCTURED_LEAD_SPEC:
          return E;
        default:
          return x;
      }
    }
    function f(e, t) {
      return (e == null ? void 0 : e.name) !== void 0
        ? !0
        : r("deepEquals")(e, t);
    }
    function g(e, t) {
      var n =
          t == null
            ? void 0
            : t.toJS().creative.marketing_message_structured_spec,
        o =
          e == null
            ? void 0
            : e.toJS().creative.marketing_message_structured_spec;
      return r("deepEquals")(n, o);
    }
    function h(e, t) {
      var n,
        o,
        a =
          (n = r("AdsCampaignRecordAccessors").campaign_goal) == null
            ? void 0
            : n.type.get(e),
        i =
          (o = r("AdsCampaignRecordAccessors").campaign_goal) == null
            ? void 0
            : o.type.get(t);
      return a === i;
    }
    function y(e, t) {
      var n,
        o,
        a,
        i,
        l,
        s,
        u =
          (n = r("AdsCampaignRecordAccessors").campaign_goal) == null
            ? void 0
            : n.type.get(e),
        c =
          (o = r("AdsCampaignRecordAccessors").campaign_goal) == null
            ? void 0
            : o.type.get(t);
      if (u !== c) return !1;
      var d =
          (a = r("AdsCampaignRecordAccessors").campaign_goal) == null
            ? void 0
            : a.engaged_audiences_exclusions.get(e),
        m =
          (i = r("AdsCampaignRecordAccessors").campaign_goal) == null
            ? void 0
            : i.engaged_audiences_exclusions.get(t);
      return k(d, m)
        ? k(
            (l = r("AdsCampaignRecordAccessors").campaign_goal) == null
              ? void 0
              : l.engaged_audiences_audience_label_exclusions.get(e),
            (s = r("AdsCampaignRecordAccessors").campaign_goal) == null
              ? void 0
              : s.engaged_audiences_audience_label_exclusions.get(t),
          )
        : !1;
    }
    function C(e, t) {
      var n,
        o,
        a,
        i,
        l,
        s,
        u =
          (n = r("AdsCampaignRecordAccessors").campaign_goal) == null
            ? void 0
            : n.existing_customers_auto_exclusion_retention_days.get(e),
        c =
          (o = r("AdsCampaignRecordAccessors").campaign_goal) == null
            ? void 0
            : o.existing_customers_auto_exclusion_retention_days.get(t);
      if (u !== c) return !1;
      var d =
          (a = r("AdsCampaignRecordAccessors").campaign_goal) == null
            ? void 0
            : a.existing_customers_exclusions.get(e),
        m =
          (i = r("AdsCampaignRecordAccessors").campaign_goal) == null
            ? void 0
            : i.existing_customers_exclusions.get(t);
      return k(d, m)
        ? k(
            (l = r("AdsCampaignRecordAccessors").campaign_goal) == null
              ? void 0
              : l.existing_customers_audience_label_exclusions.get(e),
            (s = r("AdsCampaignRecordAccessors").campaign_goal) == null
              ? void 0
              : s.existing_customers_audience_label_exclusions.get(t),
          )
        : !1;
    }
    function b(e, t) {
      return C(e, t) && y(e, t);
    }
    function v(e, t) {
      var n,
        o,
        a,
        i,
        l,
        s,
        u =
          (n = r("AdsCampaignRecordAccessors").campaign_goal) == null
            ? void 0
            : n.type.get(e),
        c =
          (o = r("AdsCampaignRecordAccessors").campaign_goal) == null
            ? void 0
            : o.type.get(t);
      if (u !== c) return !1;
      var d =
          (a = r("AdsCampaignRecordAccessors").campaign_goal) == null
            ? void 0
            : a.is_ca_expansion_enabled.get(e),
        m =
          (i = r("AdsCampaignRecordAccessors").campaign_goal) == null
            ? void 0
            : i.is_ca_expansion_enabled.get(t);
      if (d !== m) return !1;
      var p =
          (l = r("AdsCampaignRecordAccessors").campaign_goal) == null
            ? void 0
            : l.engaged_audiences_inclusions.get(e),
        _ =
          (s = r("AdsCampaignRecordAccessors").campaign_goal) == null
            ? void 0
            : s.engaged_audiences_inclusions.get(t);
      return k(p, _);
    }
    function S(e, t) {
      var n,
        o,
        a,
        i,
        l =
          (n = r("AdsCampaignRecordAccessors").campaign_goal) == null
            ? void 0
            : n.type.get(e),
        s =
          (o = r("AdsCampaignRecordAccessors").campaign_goal) == null
            ? void 0
            : o.type.get(t);
      if (l !== s) return !1;
      var u =
          (a = r("AdsCampaignRecordAccessors").campaign_goal) == null
            ? void 0
            : a.existing_customers_inclusions.get(e),
        c =
          (i = r("AdsCampaignRecordAccessors").campaign_goal) == null
            ? void 0
            : i.existing_customers_inclusions.get(t);
      return k(u, c);
    }
    function R(e, t) {
      var n,
        o,
        a,
        i,
        l =
          (n = r("AdsCampaignRecordAccessors").campaign_goal) == null
            ? void 0
            : n.is_lookalike_inclusion_enabled.get(e),
        s =
          (o = r("AdsCampaignRecordAccessors").campaign_goal) == null
            ? void 0
            : o.is_lookalike_inclusion_enabled.get(t);
      if (l !== s) return !1;
      var u =
          (a = r("AdsCampaignRecordAccessors").campaign_goal) == null
            ? void 0
            : a.lookalike_inclusions.get(e),
        c =
          (i = r("AdsCampaignRecordAccessors").campaign_goal) == null
            ? void 0
            : i.lookalike_inclusions.get(t);
      return k(u, c);
    }
    function L(e) {
      return e == null ? [] : Array.isArray(e) ? e : e.toJS();
    }
    function E(e, t) {
      var n,
        o,
        a = L(
          (n = r(
            "AdsCampaignRecordAccessors",
          ).messaging_structured_lead_spec) == null
            ? void 0
            : n.get(e),
        ),
        i = L(
          (o = r(
            "AdsCampaignRecordAccessors",
          ).messaging_structured_lead_spec) == null
            ? void 0
            : o.get(t),
        );
      return a.length !== i.length
        ? !1
        : a.every(function (e, t) {
            var n = i[t];
            return e.field_type === n.field_type && e.label === n.label;
          });
    }
    function k(t, n) {
      var o = t == null || (r("immutable").List.isList(t) && t.size === 0),
        a = n == null || (r("immutable").List.isList(n) && n.size === 0);
      return o && a ? !0 : o !== a ? !1 : (e || (e = r("areEqual")))(t, n);
    }
    function I(e, t) {
      var n = {
          detailedTargeting: t == null ? void 0 : t.toJS().flexible_spec,
          exclusionsInDetailedTargeting:
            t == null ? void 0 : t.toJS().exclusions,
        },
        r = {
          detailedTargeting: e == null ? void 0 : e.targeting.flexible_spec,
          exclusionsInDetailedTargeting:
            e == null ? void 0 : e.targeting.exclusions,
        };
      return (
        T(n.detailedTargeting, r.detailedTargeting) ||
        T(n.exclusionsInDetailedTargeting, r.exclusionsInDetailedTargeting)
      );
    }
    function T(e, t) {
      if (e === void 0 && Array.isArray(t)) {
        var n = t;
        if (n.length === 0) return !0;
      }
      if (t === void 0 && Array.isArray(e)) {
        var o = e;
        if (o.length === 0) return !0;
      }
      return r("deepEquals")(e, t);
    }
    function D(e, t) {
      var n,
        r,
        o = t == null ? void 0 : t.toJS().targeting.custom_audiences,
        a = e == null ? void 0 : e.toJS().targeting.custom_audiences,
        i =
          t == null || (n = t.toJS()) == null || (n = n.targeting) == null
            ? void 0
            : n.excluded_custom_audiences,
        l =
          e == null || (r = e.toJS()) == null || (r = r.targeting) == null
            ? void 0
            : r.excluded_custom_audiences;
      return T(o, a) && T(i, l);
    }
    function x(e, t) {
      return e === t;
    }
    function $(e, t) {
      return N(e, t, 0);
    }
    function P(e, t) {
      return N(e, t, 922337203685478);
    }
    function N(e, t, n) {
      var r = e != null && +e !== n,
        o = t != null && +t !== n;
      return r !== o ? !1 : r === !1 || +e == +t;
    }
    function M(e, t) {
      return t == null && e == null ? !0 : Number(t) === e;
    }
    function w(e, t) {
      var n = {
          geoLocations: t == null ? void 0 : t.toJS().geo_locations,
          excludedGeoLocations:
            t == null ? void 0 : t.toJS().excluded_geo_locations,
        },
        o = {
          geoLocations: e == null ? void 0 : e.targeting.geo_locations,
          excludedGeoLocations:
            e == null ? void 0 : e.targeting.excluded_geo_locations,
        };
      return r("deepEquals")(n, o);
    }
    function A(e, t) {
      return r("deepEquals")(e.toJS().sort(), t.toJS().sort());
    }
    function F(e, t) {
      return t.toJS()[0] === r("AdsUserDeviceTypes").ANDROID ||
        t.toJS()[0] === r("AdsUserDeviceTypes").IOS
        ? e.equals(
            r("immutable").List([
              o("AdsUserOSUtils").getOSLowestMinVersion(t.toJS()[0]),
            ]),
          )
        : e.equals(t);
    }
    function O(t, n) {
      return n
        ? (e || (e = r("areEqual")))(t, n)
        : t === void 0 ||
            (t && t.get(0) === o("AdsTargetingConstants").GENDERS.All);
    }
    function B(t, n) {
      if (n) return (e || (e = r("areEqual")))(t, n);
      if (t != null && t.length !== 0) {
        var o =
          t[0] !== r("AdsValidationConsts").minMessagingDestinationAge ||
          t[1] !== r("AdsValidationConsts").maxAge;
        return !o;
      }
      return !0;
    }
    function W(e, t) {
      return (
        U(e, t) ||
        (t == null &&
          e ===
            o("AdsBulkEditFlowTypes").AdsCampaignScheduleConstants
              .PENDING_SCHEDULE_TOKEN)
      );
    }
    function q(e, t) {
      return U(e, t);
    }
    function U(e, t) {
      return t === void 0 && e === null ? !0 : e === t;
    }
    function V(e) {
      return (
        !e ||
        (typeof e == "object" && r("isEmptyObject")(e)) ||
        (e instanceof r("immutable").List && e.size === 0)
      );
    }
    function H(t, n) {
      return V(t) && V(n) ? !0 : (e || (e = r("areEqual")))(t, n);
    }
    function G(e, t) {
      return !1;
    }
    function z(e) {
      return e instanceof r("AdsMixedValue");
    }
    function j(e, t, n) {
      var a = [],
        i = e.getValues();
      if (t instanceof r("AdsUniformValue")) return t;
      for (var l = 0; l < i.length; l++)
        n.includes(i[l]) && a.push(t.getValueForIndex(l));
      return o("AdsBulkValueUtils").aggregate(a);
    }
    function K(e, t) {
      var n;
      switch (e) {
        case "campaign":
          n = t
            ? o("meta-brand-folder-filled-16")
                .metaBrandFolderCampaignTableFilled16
            : o("meta-brand-folder-outline-16")
                .metaBrandFolderCampaignTableOutline16;
          break;
        case "ad_set":
          n = t
            ? o("meta-brand-four-squares-grid-filled-16")
                .metaBrandFourSquaresGridAdSetsTableFilled16
            : o("meta-brand-four-squares-grid-outline-16")
                .metaBrandFourSquaresGridAdSetsTableOutline16;
          break;
        case "ad":
          n = t
            ? o("meta-brand-three-dash-lines-left-two-rectangles-filled-16")
                .metaBrandThreeDashLinesLeftTwoRectanglesAdLeftNavFilled16
            : o("meta-brand-three-dash-lines-left-two-rectangles-outline-16")
                .metaBrandThreeDashLinesLeftTwoRectanglesAdLeftNavOutline16;
          break;
      }
      return n
        ? d.jsx(r("GeoIcon.react"), { color: t ? "blue" : "default", icon: n })
        : d.jsx(r("Image.react"), {});
    }
    function Q(e, t, n, o) {
      var a = t,
        i = a.get(o, r("immutable").Set());
      if (e) a = a.set(o, i.add(n));
      else {
        var l = i.remove(n);
        ((a = a.set(o, l)), l.size || (a = a.remove(o)));
      }
      return a;
    }
    function X(e, t, n, r, o) {
      return t.reduce(function (t, r) {
        var a = o.get(r).original,
          i = o.get(r).current,
          l = _(n),
          s = e.some(function (e) {
            return !l(i.getIn(e), a.getIn(e));
          });
        return Q(s, t, n, r);
      }, r);
    }
    function Y(e, t) {
      var n = t;
      if (r("immutable").is(e, n)) return n;
      var a = o("AdsCampaignRawSpecUtils").isAutomaticPlacements(e)
        ? o("AdsPlacementConstants").PLACEMENT_FIELD_TO_AD_SET_PATHS.values()
        : o("AdsPlacementConstants").PLACEMENT_BULK_EDIT_DENYLIST_PATHS;
      for (var i of a) {
        var l = e.getIn(i);
        l ? (n = n.setIn(i, l)) : (n = n.deleteIn(i));
      }
      return (
        n.end_time ===
          o("AdsBulkEditFlowTypes").AdsCampaignScheduleConstants
            .PENDING_SCHEDULE_TOKEN &&
          (n = r("AdsCampaignRecordAccessors").end_time.set(e.end_time, n)),
        n
      );
    }
    function J(e, t, n, a, i, l, s) {
      var u = a.get(i) || [],
        c = r("immutable")
          .OrderedMap()
          .withMutations(function (a) {
            u.map(function (i) {
              var u = i;
              switch (n) {
                case r("AdsAPIBidStrategies").COST_CAP:
                case r("AdsAPIBidStrategies").LOWEST_COST_WITH_BID_CAP:
                case r("AdsAPIBidStrategies").TARGET_COST:
                  u = u.set(
                    "bid_amount",
                    o("AdsBiddingOptimizationUtils").getDefaultBidAmount(
                      l,
                      i.optimization_goal,
                      i.billing_event,
                    ),
                  );
                  break;
                case r("AdsAPIBidStrategies").LOWEST_COST_WITH_MIN_ROAS:
                  if (e != null && t != null) {
                    var c, d, m;
                    ((u = o(
                      "AdsMinRoasUtils",
                    ).setDefaultFieldsForMinROASBidStrategy(e, i, t, n)),
                      (c = u.promoted_object) != null &&
                        c.pixel_rule &&
                        (d = u.promoted_object) != null &&
                        d.pixel_id &&
                        ((m = u.promoted_object) == null
                          ? void 0
                          : m.custom_event_type) !== "PURCHASE" &&
                        (u = r(
                          "AdsCampaignRecordAccessors",
                        ).promoted_object.delete(u)),
                      r("IsAppAdUtils").getIsMAICampaignGroup(t.objective) &&
                      r("IsAppAdUtils").getIsMAISupportedVO(i.optimization_goal)
                        ? o("AdsMutators").chain(
                            r("AdsCampaignRecordAccessors").promoted_object
                              .custom_event_type.delete,
                            r("AdsCampaignRecordAccessors").promoted_object
                              .custom_event_str.delete,
                          )(u)
                        : (u = r(
                            "AdsCampaignRecordAccessors",
                          ).promoted_object.custom_event_type.set(
                            "PURCHASE",
                            u,
                          )));
                  }
                  break;
                default:
                  break;
              }
              s && (u = u.set("bid_strategy", n));
              var p = { current: u, original: i, isDraftObject: !1 };
              a.set(i.id, p);
            });
          }),
        d = r("immutable").Set([Z(n)]),
        m = r("immutable")
          .Map()
          .withMutations(function (e) {
            u.map(function (t) {
              e.set(t.id, d);
            });
          }),
        p = ee(n);
      return { dialogType: p, rows: c, changedColumnsByRowMap: m };
    }
    function Z(e) {
      switch (e) {
        case r("AdsAPIBidStrategies").COST_CAP:
          return r("AdsCampaignBulkEditColumnKeys")
            .CAMPAIGN_COST_CAPS_FROM_CAMPAIGN_GROUP;
        case r("AdsAPIBidStrategies").LOWEST_COST_WITH_BID_CAP:
          return r("AdsCampaignBulkEditColumnKeys")
            .CAMPAIGN_BID_CAPS_FROM_CAMPAIGN_GROUP;
        case r("AdsAPIBidStrategies").LOWEST_COST_WITH_MIN_ROAS:
          return r("AdsCampaignBulkEditColumnKeys")
            .CAMPAIGN_BID_CONATRAINTS_FROM_CAMPAIGN_GROUP;
        default:
          (r("FBLogger")("ads").warn(
            "Unsupported bid strategy edit to provide bid amount in campaign group level",
          ),
            u(0, 976));
      }
    }
    function ee(e) {
      switch (e) {
        case r("AdsAPIBidStrategies").LOWEST_COST_WITH_BID_CAP:
          return r("AdsBulkEditDialogTypes").ALL_CAMPAIGN_BID_CAPS;
        case r("AdsAPIBidStrategies").COST_CAP:
          return r("AdsBulkEditDialogTypes").ALL_CAMPAIGN_COST_CAPS;
        case r("AdsAPIBidStrategies").LOWEST_COST_WITH_MIN_ROAS:
          return r("AdsBulkEditDialogTypes").ALL_CAMPAIGN_MIN_ROAS;
        default:
          (r("FBLogger")("ads").warn(
            "Unsupported bid strategy edit to provide bid amount in campaign group level",
          ),
            u(0, 976));
      }
    }
    function te(e) {
      return (
        e === r("AdsBulkEditDialogTypes").ALL_CAMPAIGN_BID_CAPS ||
        e === r("AdsBulkEditDialogTypes").ALL_CAMPAIGN_COST_CAPS ||
        e === r("AdsBulkEditDialogTypes").ALL_CAMPAIGN_MIN_ROAS
      );
    }
    function ne(e) {
      var t = o("AdsObjectTypeUtils").getObjectLevelFromAdLevel(e);
      return t === "campaign"
        ? s._(/*BTDS*/ "campaigns")
        : t === "ad_set"
          ? s._(/*BTDS*/ "ad sets")
          : t === "ad"
            ? s._(/*BTDS*/ "ads")
            : "";
    }
    function re(e) {
      var t = o("AdsObjectTypeUtils").getObjectLevelFromAdLevel(e);
      return t === "campaign"
        ? s._(/*BTDS*/ "campaign")
        : t === "ad_set"
          ? s._(/*BTDS*/ "ad set")
          : t === "ad"
            ? s._(/*BTDS*/ "ad")
            : "";
    }
    function oe(e, t) {
      var n = o("AdsObjectTypeUtils").getObjectLevelFromAdLevel(e),
        r = ["campaign", "ad_set", "ad"].includes(n);
      return r ? t > 1 : !1;
    }
    function ae(e) {
      return e === "campaign"
        ? s._(/*BTDS*/ "Edit each campaign")
        : e === "ad_set"
          ? s._(/*BTDS*/ "Edit each ad set")
          : e === "ad"
            ? s._(/*BTDS*/ "Edit each ad")
            : "";
    }
    function ie(e) {
      return e === "campaign"
        ? s._(/*BTDS*/ "Edit all selected campaigns")
        : e === "ad_set"
          ? s._(/*BTDS*/ "Edit all selected ad sets")
          : e === "ad"
            ? s._(/*BTDS*/ "Edit all selected ads")
            : "";
    }
    function le(e) {
      var t = 48;
      if ((e == null ? void 0 : e.format) === "image") {
        var n = e.height,
          r = e.width,
          a = null,
          i = e.crops;
        if (i != null && Object.keys(i).length > 0) {
          var l = Object.keys(i)[0];
          a = i[l];
        }
        return {
          cropTransform: o("AdsImageUtils").getImageTransformForBounds(
            r,
            n,
            t,
            t,
            a,
          ),
          name: e == null ? void 0 : e.name,
          thumbnailSrc: o("AdsPlacementAssetThumbnailUtils").getImageThumbnail(
            e,
          ),
        };
      } else if ((e == null ? void 0 : e.format) === "video")
        return {
          cropTransform: null,
          name: e.video.title,
          thumbnailSrc: o("AdsPlacementAssetThumbnailUtils").getVideoThumbnail(
            e,
          ),
        };
      return null;
    }
    function se(e) {
      return e.reduce(function (e, t) {
        return e.union(t);
      }, r("immutable").Set());
    }
    function ue(e, t) {
      return e.reduce(function (e, n) {
        return e.union(t.get(n, r("immutable").Set()));
      }, r("immutable").Set());
    }
    function ce(e, t) {
      var n = e.campaignGroup.objective;
      return t === "playable_source" || n === r("AdsAPIObjectives").VIDEO_VIEWS;
    }
    ((l.AdsBulkEditSourceForMarketingMessagesType = m),
      (l.getDisplayedRows = p),
      (l.getEqualityComparator = _),
      (l.supportBulkEdit = z),
      (l.filterSpecBySelectedID = j),
      (l.getIconForObjectType = K),
      (l.getUpdatedChangedColumnsByRowMap = Q),
      (l.getNewChangedColumnsByRowMap = X),
      (l.postProcessChangedCampaign = Y),
      (l.getInitialBidRelatedFieldsForCampaigns = J),
      (l.getColumnKeyByNewCampaignGroupBidStrategy = Z),
      (l.hasCampaignGroupBudgetBidStrategyChange = te),
      (l.getPluralAdObjectName = ne),
      (l.getSingularAdObjectName = re),
      (l.isBulkEditingInLScreens = oe),
      (l.getBulkEditButtonText = ae),
      (l.getBulkEditNavigationRowText = ie),
      (l.getMediaData = le),
      (l.calculateChangedColumnKeys = se),
      (l.calculateChangedDialogTypes = ue),
      (l.isVideoOnlyMediaSupportedForAdGroup = ce));
  },
  226,
);
