__d(
  "DATargetingConsolidationUtils",
  [
    "fbt",
    "$InternalEnum",
    "AdsAPICampaignTargetingConsolidation",
    "AdsAPIObjectives",
    "AdsDynamicTargetingTypes",
    "AdsPEAdsetsEditRouteAdapter",
    "CatalogVertical",
    "GeoText.react",
    "GeoVStack.react",
    "URI",
    "gkx",
    "isTruthy",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = u || (u = o("react")),
      d = n("$InternalEnum")({
        NEW_CAMPAIGN: "new_campaign",
        HOT_SWAP_ELIGIBLE_CAMPAIGN: "hot_swap_eligible_campaign",
        EDITING_DISABLE_ELIGIBLE_PROSPECTNG_EXCLUDE_PURCHASED_CAMPAIGN:
          "editing_disable_eligible_prospecting_exclude_purchased_campaign",
        EDITING_DISABLE_ELIGIBLE_PROSPECTNG_EXCLUDE_CUSTOM_CAMPAIGN:
          "editing_disable_eligible_prospecting_exclude_custom_campaign",
        EDITING_DISABLE_ELIGIBLE_RETARGETING_CAMPAIGN:
          "editing_disable_eligible_retargeting_campaign",
      });
    function m(e, t) {
      switch (e) {
        case r("AdsAPICampaignTargetingConsolidation").PHASE_1:
          return t === !0 ? r("gkx")("1472") : r("gkx")("580");
        case r("AdsAPICampaignTargetingConsolidation").PHASE_2:
          return !0;
        case r("AdsAPICampaignTargetingConsolidation").PHASE_3:
          return !0;
      }
    }
    var p = s._(
        /*BTDS*/ "Your previous audience type selection has been applied as custom audiences",
      ),
      _ = s._(
        /*BTDS*/ "Audience types are going away, but you can {=m2} using custom audiences.",
        [
          s._implicitParam(
            "=m2",
            c.jsx("b", {
              children: s._(
                /*BTDS*/ "continue to retarget ads or find prospective customers",
              ),
            }),
          ),
        ],
      ),
      f = s._(/*BTDS*/ "Your audience has been updated"),
      g = s._(
        /*BTDS*/ "Audience types are going away, but you can {=m2} using custom audiences.",
        [
          s._implicitParam(
            "=m2",
            c.jsx("b", {
              children: s._(
                /*BTDS*/ "continue to find prospective customers or retarget ads",
              ),
            }),
          ),
        ],
      ),
      h = s._(/*BTDS*/ "About catalog custom audiences"),
      y = s._(/*BTDS*/ "Your audience has been updated"),
      C = s._(
        /*BTDS*/ "Audience types are going away, but you can {=m2} using custom audiences.",
        [
          s._implicitParam(
            "=m2",
            c.jsx("b", {
              children: s._(
                /*BTDS*/ "continue to find prospective customers or retarget ads",
              ),
            }),
          ),
        ],
      ),
      b = s._(
        /*BTDS*/ "Your previous audience type selection has been applied as custom audiences",
      ),
      v = s._(
        /*BTDS*/ "Audience types are going away, but you can {=m2} using custom audiences.",
        [
          s._implicitParam(
            "=m2",
            c.jsx("b", {
              children: s._(
                /*BTDS*/ "continue to find prospective customers or retarget ads",
              ),
            }),
          ),
        ],
      ),
      S = s._(
        /*BTDS*/ "Using custom audiences to find prospective customers or retarget ads",
      ),
      R = s._(
        /*BTDS*/ "Using custom audiences to find prospective customers or retarget ads and marketing messages",
      ),
      L = s._(
        /*BTDS*/ "Audience types are going away, but you can {=m2} by creating custom audiences using catalog as your source.",
        [
          s._implicitParam(
            "=m2",
            c.jsx("b", {
              children: s._(
                /*BTDS*/ "continue to retarget ads or find prospective customers",
              ),
            }),
          ),
        ],
      ),
      E = s._(
        /*BTDS*/ "Audience types are going away, but you can {=m2} by creating custom audiences using catalog as your source.",
        [
          s._implicitParam(
            "=m2",
            c.jsx("b", {
              children: s._(
                /*BTDS*/ "continue to retarget ads and marketing messages, or find prospective customers",
              ),
            }),
          ),
        ],
      ),
      k = s._(
        /*BTDS*/ "Custom audiences represent people you want to reach or avoid by excluding or including them.",
      ),
      I = s._(
        /*BTDS*/ "Your previous audience type selection has been applied as custom audience exclusions.",
      ),
      T = s._(
        /*BTDS*/ "Your previous audience type selection has been applied using custom audience inclusions.",
      ),
      D = s._(/*BTDS*/ "Go to original ad set"),
      x = s._(
        /*BTDS*/ "Some campaign options are disabled and no longer available for use.",
      ),
      $ = s._(/*BTDS*/ "Audience types are no longer available for use."),
      P = s._(/*BTDS*/ "Duplicate ad set"),
      N = s._(/*BTDS*/ "Audience for this ad set cannot be edited"),
      M = s._(
        /*BTDS*/ "This ad set is using audience type features that are no longer available for use. To continue editing, duplicate ad set to apply your previous audience setup using custom audiences.",
      ),
      w = s._(
        /*BTDS*/ "These ad sets are using audience type features that are no longer available for use.",
      ),
      A = s._(/*BTDS*/ "Changes impacting audiences");
    function F(e) {
      return s._(/*BTDS*/ "Starting {date}:", [s._param("date", e)]);
    }
    F.displayName = F.name + " [from " + i.id + "]";
    var O = s._(
        /*BTDS*/ "Retargeting and prospecting options under {audience type bold} are going away.",
        [
          s._param(
            "audience type bold",
            c.jsx("b", { children: "Audience type" }),
          ),
        ],
      ),
      B = s._(
        /*BTDS*/ "You won't be able to edit the audience of impacted ad sets.",
      ),
      W = s._(
        /*BTDS*/ "You can {continue bold} using custom audiences. Duplicating impacted ad sets will create an equivalent audience set up using custom audiences.",
        [
          s._param(
            "continue bold",
            c.jsx("b", {
              children:
                "continue to find prospective customers and retarget ads",
            }),
          ),
        ],
      );
    function q(e) {
      return re(e) ? $ : x;
    }
    var U = function (t, n) {
        var e =
          t == null
            ? void 0
            : t.find(function (e) {
                var t,
                  o =
                    (t = e.promoted_object) == null
                      ? void 0
                      : t.product_catalog_id,
                  a = o != null,
                  i = e.objective,
                  l =
                    a &&
                    [
                      r("AdsAPIObjectives").PRODUCT_CATALOG_SALES,
                      r("AdsAPIObjectives").OUTCOME_SALES,
                    ].includes(i),
                  s = !1;
                if (r("isTruthy")(o)) {
                  var u,
                    c = n(o);
                  s =
                    ((u = c.getValue()) == null ? void 0 : u.vertical) ===
                      r("CatalogVertical").COMMERCE || r("gkx")("9389");
                }
                return l && s;
              });
        return e != null;
      },
      V = function (t) {
        return (
          (t == null
            ? void 0
            : t.find(function (e) {
                return e.campaign_targeting_consolidation == null;
              })) != null
        );
      },
      H = function (t) {
        var e =
          t == null
            ? void 0
            : t.find(function (e) {
                return G(e.targeting) || z(e.targeting);
              });
        return e != null;
      },
      G = function (t) {
        var e,
          n =
            t == null || (e = t.flexible_spec) == null
              ? void 0
              : e.find(function (e) {
                  return e.product_audience_specs != null;
                });
        return n != null
          ? !0
          : (t == null ? void 0 : t.product_audience_specs) != null ||
              (t == null ? void 0 : t.dynamic_audience_ids) != null;
      },
      z = function (t) {
        return (
          (t == null ? void 0 : t.excluded_product_audience_specs) != null ||
          (t == null ? void 0 : t.excluded_dynamic_audience_ids) != null
        );
      },
      j = function (t) {
        return (t == null ? void 0 : t.dynamic_audience_ids) != null;
      },
      K = function (t) {
        return (t == null ? void 0 : t.excluded_dynamic_audience_ids) != null;
      },
      Q = function (n, o) {
        return new (e || (e = r("URI")))(
          r("AdsPEAdsetsEditRouteAdapter").buildUri({
            act: n,
            selected_adset_ids: o != null ? o : void 0,
          }),
        );
      };
    function X(e, t, n, r) {
      return t && r ? (e ? b : y) : r ? (n ? R : S) : s._(/*BTDS*/ "");
    }
    X.displayName = X.name + " [from " + i.id + "]";
    function Y(e, t, n, o) {
      return t && o
        ? e
          ? c.jsx(r("GeoText.react"), { children: v })
          : c.jsx(r("GeoText.react"), { children: C })
        : o
          ? c.jsxs(r("GeoVStack.react"), {
              children: [
                c.jsx(r("GeoText.react"), { children: n ? E : L }),
                c.jsx(r("GeoText.react"), { children: k }),
              ],
            })
          : null;
    }
    Y.displayName = Y.name + " [from " + i.id + "]";
    function J(e) {
      return e == null
        ? !1
        : (m(r("AdsAPICampaignTargetingConsolidation").PHASE_1) &&
            e === d.NEW_CAMPAIGN) ||
            (m(r("AdsAPICampaignTargetingConsolidation").PHASE_2) &&
              e === d.HOT_SWAP_ELIGIBLE_CAMPAIGN);
    }
    function Z(e) {
      return (
        e ===
          d.EDITING_DISABLE_ELIGIBLE_PROSPECTNG_EXCLUDE_PURCHASED_CAMPAIGN ||
        e === d.EDITING_DISABLE_ELIGIBLE_PROSPECTNG_EXCLUDE_CUSTOM_CAMPAIGN
      );
    }
    function ee(e) {
      return e == null
        ? !1
        : (m(r("AdsAPICampaignTargetingConsolidation").PHASE_2) && Z(e)) ||
            re(e);
    }
    function te(e, t) {
      return !m(r("AdsAPICampaignTargetingConsolidation").PHASE_2) ||
        t === r("AdsDynamicTargetingTypes").NO_EXCLUSION ||
        e == null
        ? !1
        : e === d.EDITING_DISABLE_ELIGIBLE_PROSPECTNG_EXCLUDE_PURCHASED_CAMPAIGN
          ? t === r("AdsDynamicTargetingTypes").EXCLUDE_CUSTOM
          : e === d.EDITING_DISABLE_ELIGIBLE_PROSPECTNG_EXCLUDE_CUSTOM_CAMPAIGN
            ? t === r("AdsDynamicTargetingTypes").EXCLUDE_PURCHASED
            : !1;
    }
    function ne(e) {
      return e !== r("CatalogVertical").COMMERCE
        ? r("gkx")("11306")
          ? "April 8, 2026"
          : r("gkx")("11456")
            ? "April 13, 2026"
            : r("gkx")("11958")
              ? "May 4, 2026"
              : null
        : r("gkx")("21074")
          ? r("gkx")("21075")
            ? "March 9, 2026"
            : r("gkx")("21076")
              ? "March 12, 2026"
              : r("gkx")("21077")
                ? "April 2, 2026"
                : r("gkx")("9868")
                  ? "April 7, 2026"
                  : r("gkx")("9937")
                    ? "April 14, 2026"
                    : r("gkx")("10047")
                      ? "April 21, 2026"
                      : r("gkx")("23149")
                        ? "April 28, 2026"
                        : null
          : null;
    }
    function re(e) {
      return m(r("AdsAPICampaignTargetingConsolidation").PHASE_3)
        ? e != null &&
            [
              d.EDITING_DISABLE_ELIGIBLE_PROSPECTNG_EXCLUDE_PURCHASED_CAMPAIGN,
              d.EDITING_DISABLE_ELIGIBLE_PROSPECTNG_EXCLUDE_CUSTOM_CAMPAIGN,
              d.EDITING_DISABLE_ELIGIBLE_RETARGETING_CAMPAIGN,
            ].includes(e)
        : !1;
    }
    ((l.DATargetingConsolidationCampaignType = d),
      (l.accountHasAccessToDATargetingConsolidation = m),
      (l.TITLE_FOR_DUPLICATION_GUIDANCE_CARD = p),
      (l.DESC_FOR_DUPLICATION_GUIDANCE_CARD = _),
      (l.TITLE_FOR_DUPLICATION_GUIDANCE_CARD_NO_PRODUCT_AUDIENCE = f),
      (l.DESC_FOR_DUPLICATION_GUIDANCE_CARD_NO_PRODUCT_AUDIENCE = g),
      (l.LINK_LABEL_FOR_GUIDANCE_CARD = h),
      (l.PROSPECTIVE_CUSTOMERS_CONSOLIDATION_GUIDANCE_CARD_CONTENT = I),
      (l.RETARGETING_AUDIENCE_CONSOLIDATION_GUIDANCE_CARD_CONTENT = T),
      (l.GO_TO_CAMPAIGN_LINK = D),
      (l.CAMPAIGN_OPTIONS_DISABLED_TOOLTIP = x),
      (l.AUDIENCE_TYPES_DISABLED_TOOLTIP = $),
      (l.DUPLICATE_CAMPAIGN_LINK_LABEL = P),
      (l.DISABLE_AUDIENCE_EDITS_GUIDANCE_TITLE = N),
      (l.DISABLE_AUDIENCE_EDITS_GUIDANCE_CONTENT = M),
      (l.BULK_DISABLE_AUDIENCE_EDITS_GUIDANCE_CONTENT = w),
      (l.DEPRECATION_GUIDANCE_TITLE = A),
      (l.getDeprecationGuidanceStartingDate = F),
      (l.DEPRECATION_GUIDANCE_AUDIENCE_TYPE_GOING_AWAY = O),
      (l.DEPRECATION_GUIDANCE_CANNOT_EDIT = B),
      (l.DEPRECATION_GUIDANCE_CUSTOM_AUDIENCES = W),
      (l.getAudienceTypeDisabledTooltip = q),
      (l.isDuplicatingPCSAndEligibleCatalogCampaignGroup = U),
      (l.isDuplicatingCampaignWithProductAudience = V),
      (l.hasProductAudienceInSourceCampaigns = H),
      (l.hasProductAudienceInTargeting = G),
      (l.hasExcludedProductAudienceInTargeting = z),
      (l.hasRetargetingDynamicAudienceInTargeting = j),
      (l.hasProspectingDynamicAudienceInTargeting = K),
      (l.sourceCampaignURL = Q),
      (l.getCreationGuidanceHeading = X),
      (l.getCreationGuidanceContent = Y),
      (l.getShouldShowDATargetingConsolidationNewUI = J),
      (l.getShouldDisableRetargetingToggle = ee),
      (l.getShouldDisableProspectingOptionsToggle = te),
      (l.getDeprecationDateForHeadsupBanner = ne),
      (l.getShouldDisableDATargetingOldUI = re));
  },
  226,
);
