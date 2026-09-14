__d(
  "CombinedAdgroup-resolvers",
  [
    "AdAccountIDConverter",
    "AdsAdObjectRelayIDUtils",
    "AdsDML",
    "AdsDMLQueryHandler_DerivedDataBase",
    "AdsDMLUtils",
    "AdsRelayReadInteropHostIDUtils",
    "AdsRelayReadInteropLogHostID",
    "AdsUEditorHostIDs",
    "LoadObject",
    "err",
    "gkx",
    "ifRequired",
    "nullthrows",
    "subscribeCombinedStoreLive",
  ],
  function (t, n, r, o, a, i, l) {
    var e = o("AdsDML")
        .Query({ name: i.id, liveResolverDMLQuery: !0 })
        .Derived(function (e) {
          return e.data.L1Adgroup(e.vars.id, function (t) {
            return t != null
              ? {
                  adgroup: t,
                  adObjectLevel: e.vars.adObjectLevel,
                  hostID: e.vars.hostID,
                  id: o(
                    "AdsRelayReadInteropHostIDUtils",
                  ).encodeRelayIDWithHostID(
                    e.vars.id,
                    e.vars.hostID,
                    e.vars.adObjectLevel,
                  ),
                }
              : null;
          });
        }),
      s = function () {
        var e = r("ifRequired")("AdsAdgroupBulkEditStore", function (e) {
          return e;
        });
        return r("nullthrows")(
          e,
          "The Adgroup bulk edit store is not available. This likely means this data is being accessed outside of the L1 bulk edit flow.",
        );
      },
      u = function () {
        var e = s();
        return o("AdsDMLUtils").storeToQuery({
          dataGetter: function (t, n) {
            var e,
              r =
                (e = n.getState().rows.get(t.id)) == null ||
                e.current.toJS == null
                  ? void 0
                  : e.current.toJS();
            return r != null
              ? {
                  adgroup: r,
                  adObjectLevel: t.adObjectLevel,
                  hostID: t.hostID,
                  id: o(
                    "AdsRelayReadInteropHostIDUtils",
                  ).encodeRelayIDWithHostID(t.id, t.hostID, t.adObjectLevel),
                }
              : null;
          },
          store: e,
        });
      },
      c = function () {
        var e,
          t =
            (e = r("ifRequired")(
              "AdsEditingCreativeContainerAdgroupDraftFragmentsDataProvider",
              function (e) {
                return e;
              },
            )) == null
              ? void 0
              : e.toFluxStore();
        return r("nullthrows")(
          t,
          "The Creative editing store is not available. This likely means this data is being accessed outside of the creative editing flow.",
        );
      },
      d = o("AdsDMLQueryHandler_DerivedDataBase").modularLoader(
        function () {
          return [c()];
        },
        function (e) {
          var t,
            n = c(),
            a = n.getState().get(e.id);
          return (t =
            a == null
              ? void 0
              : a.map(function (t) {
                  return {
                    adgroup: t.toJS(),
                    adObjectLevel: e.adObjectLevel,
                    hostID: e.hostID,
                    id: o(
                      "AdsRelayReadInteropHostIDUtils",
                    ).encodeRelayIDWithHostID(e.id, e.hostID, e.adObjectLevel),
                  };
                })) != null
            ? t
            : r("LoadObject").withValue(null, { creatorModuleID: i.id });
        },
      ),
      m = o("AdsDML")
        .Query({ name: i.id, liveResolverDMLQuery: !0 })
        .Derived(function (e) {
          return d(e.vars);
        });
    function p(t) {
      return r("gkx")("11010")
        ? o("subscribeCombinedStoreLive").subscribeCombinedAdgroupStoreLive(t)
        : o("AdsDML").subscribeQueryLive(e, t);
    }
    function _(e) {
      var t = o("AdsRelayReadInteropHostIDUtils").decodeRelayIDWithHostID(e),
        n = t.adObjectLevel,
        a = t.hostID,
        l = t.id;
      if (
        (o("AdsRelayReadInteropLogHostID").maybeLogHostID(a, i.id),
        n != null &&
          n !== o("AdsAdObjectRelayIDUtils").AdsUEditorAdObjectLevels.ADGROUP)
      )
        return p({ adObjectLevel: n, hostID: a, id: l });
      switch (a) {
        case r("AdsUEditorHostIDs").EDITING:
        case r("AdsUEditorHostIDs").TEST_AND_LEARN:
          return p({ adObjectLevel: n, hostID: a, id: l });
        case r("AdsUEditorHostIDs").BULK_EDIT_DIALOG:
          return o("AdsDML").subscribeQueryLive(u(), {
            adObjectLevel: n,
            hostID: a,
            id: l,
          });
        case r("AdsUEditorHostIDs").EDITING_CREATIVE_CONTAINER:
          return o("AdsDML").subscribeQueryLive(m, {
            adObjectLevel: n,
            hostID: a,
            id: l,
          });
        case r("AdsUEditorHostIDs").CREATION:
        default:
          throw r("err")("Unhandled hostID " + a);
      }
    }
    function f(e) {
      return { id: e.adgroup.account_id };
    }
    function g(e) {
      return { id: o("AdAccountIDConverter").toActID(e.adgroup.account_id) };
    }
    function h(e) {
      return { id: e.adgroup.id };
    }
    function y(e) {
      return e.adgroup;
    }
    function C(e) {
      return e.adgroup.id;
    }
    function b(e) {
      return e.adgroup.adset_id;
    }
    function v(e) {
      return e.adgroup.campaign_id;
    }
    function S(e) {
      var t = e.hostID;
      return {
        id: o("AdsRelayReadInteropHostIDUtils").encodeRelayIDWithHostID(
          e.adgroup.campaign_id,
          t,
          e.adObjectLevel,
        ),
      };
    }
    function R(e) {
      var t = e.hostID;
      return {
        id: o("AdsRelayReadInteropHostIDUtils").encodeRelayIDWithHostID(
          e.adgroup.adset_id,
          t,
          e.adObjectLevel,
        ),
      };
    }
    function L(e) {
      return e.adgroup.creative;
    }
    function E(e) {
      return e.adgroup.metadata;
    }
    function k(e) {
      return e.adgroup.name;
    }
    function I(e) {
      return e.adgroup.conversion_specs;
    }
    function T(e) {
      return e.adgroup.source_ad_id;
    }
    function D(e) {
      var t = e.adgroup.source_ad_id;
      return e == null || t == null
        ? null
        : {
            id: o("AdsRelayReadInteropHostIDUtils").encodeRelayIDWithHostID(
              t,
              e.hostID,
              e.adObjectLevel,
            ),
          };
    }
    function x(e) {
      return e.adgroup.tracking_and_conversion_with_defaults;
    }
    function $(e) {
      return e.adgroup.updated_time;
    }
    function P(e) {
      return e.adgroup.creative_asset_groups_spec;
    }
    function N(e) {
      return e.adgroup.creative_automation_spec;
    }
    function M(e) {
      return e.adgroup.ad_review_feedback;
    }
    function w(e) {
      return e.adgroup.account_id;
    }
    function A(e) {
      return e.adgroup.ad_active_time;
    }
    function F(e) {
      return e.adgroup.ad_schedule_end_time;
    }
    function O(e) {
      return e.adgroup.ad_schedule_start_time;
    }
    function B(e) {
      return e.adgroup.adgroup_status;
    }
    function W(e) {
      return e.adgroup.adset;
    }
    function q(e) {
      return e.adgroup.bid_amount;
    }
    function U(e) {
      return e.adgroup.bid_info;
    }
    function V(e) {
      return e.adgroup.bid_type;
    }
    function H(e) {
      return e.adgroup.can_aggregate_social_feedback_on_edit;
    }
    function G(e) {
      return e.adgroup.conversion_domain;
    }
    function z(e) {
      return e.adgroup.created_time;
    }
    function j(e) {
      return e.adgroup.creative_link_url;
    }
    function K(e) {
      return e.adgroup.ctv_website_url;
    }
    function Q(e) {
      return e.adgroup.delivery_info;
    }
    function X(e) {
      return e.adgroup.delivery_status;
    }
    function Y(e) {
      return e.adgroup.demolink_hash;
    }
    function J(e) {
      return e.adgroup.display_sequence;
    }
    function Z(e) {
      return e.adgroup.effective_status;
    }
    function ee(e) {
      return e.adgroup.engagement_audience;
    }
    function te(e) {
      return e.adgroup.id;
    }
    function ne(e) {
      return e.adgroup.creative_delivery_push;
    }
    function re(e) {
      return e.adgroup.creative_audience_pairing_persona;
    }
    function oe(e) {
      return e.adgroup.include_in_ad_study_cell_id;
    }
    function ae(e) {
      return e.adgroup.include_in_ad_study_id;
    }
    function ie(e) {
      return e.adgroup.is_creative_flex_feature_aware;
    }
    function le(e) {
      return e.adgroup.is_organic_ad_joint_optimized === 1;
    }
    function se(e) {
      return e.adgroup.is_eligible_for_message_editing;
    }
    function ue(e) {
      return e.adgroup.last_updated_by_app_id;
    }
    function ce(e) {
      return e.adgroup.lightweight_split_test;
    }
    function de(e) {
      return e.adgroup.lightweight_split_test_options;
    }
    function me(e) {
      return e.adgroup.manual_review_requested;
    }
    function pe(e) {
      return e.adgroup.biz_ai_enabled_state;
    }
    function _e(e) {
      return e.adgroup.meta_reward_adgroup_status;
    }
    function fe(e) {
      return e.adgroup.naming_template_custom_fields;
    }
    function ge(e) {
      return e.adgroup.priority;
    }
    function he(e) {
      return e.adgroup.review_config;
    }
    function ye(e) {
      return e.adgroup.shops_ads_metadata_tags;
    }
    function Ce(e) {
      return e.adgroup.source_app_id;
    }
    function be(e) {
      return e.adgroup.status;
    }
    function ve(e) {
      return e.adgroup.targeting;
    }
    function Se(e) {
      return e.adgroup.tracking_specs;
    }
    function Re(e) {
      return e.adgroup.view_tags;
    }
    function Le(e) {
      return {
        adgroup_id: e.adgroup.id,
        adObjectLevel: e.adObjectLevel,
        hostID: e.hostID,
      };
    }
    function Ee(e) {
      return e.adgroup.placement;
    }
    function ke(e) {
      return {
        adObjectLevel: e.adObjectLevel,
        hostID: e.hostID,
        id: e.adgroup.id,
      };
    }
    function Ie(e) {
      return { id: e.id };
    }
    ((l.CombinedAdgroup = _),
      (l.ad_account = f),
      (l.server_ad_account_ref = g),
      (l.server_adgroup = h),
      (l.self = y),
      (l.ad_object_id = C),
      (l.adset_id = b),
      (l.campaign_id = v),
      (l.combined_campaign_group = S),
      (l.combined_campaign = R),
      (l.creative = L),
      (l.metadata = E),
      (l.name = k),
      (l.conversion_specs = I),
      (l.source_ad_id = T),
      (l.source_object = D),
      (l.tracking_and_conversion_with_defaults = x),
      (l.updated_time = $),
      (l.creative_asset_groups_spec = P),
      (l.creative_automation_spec = N),
      (l.ad_review_feedback = M),
      (l.account_id = w),
      (l.ad_active_time = A),
      (l.ad_schedule_end_time = F),
      (l.ad_schedule_start_time = O),
      (l.adgroup_status = B),
      (l.adset = W),
      (l.bid_amount = q),
      (l.bid_info = U),
      (l.bid_type = V),
      (l.can_aggregate_social_feedback_on_edit = H),
      (l.conversion_domain = G),
      (l.created_time = z),
      (l.creative_link_url = j),
      (l.ctv_website_url = K),
      (l.delivery_info = Q),
      (l.delivery_status = X),
      (l.demolink_hash = Y),
      (l.display_sequence = J),
      (l.effective_status = Z),
      (l.engagement_audience = ee),
      (l.adgroup_id = te),
      (l.creative_delivery_push = ne),
      (l.creative_audience_pairing_persona = re),
      (l.include_in_ad_study_cell_id = oe),
      (l.include_in_ad_study_id = ae),
      (l.is_creative_flex_feature_aware = ie),
      (l.is_organic_ad_joint_optimized = le),
      (l.is_eligible_for_message_editing = se),
      (l.last_updated_by_app_id = ue),
      (l.lightweight_split_test = ce),
      (l.lightweight_split_test_options = de),
      (l.manual_review_requested = me),
      (l.biz_ai_enabled_state = pe),
      (l.meta_reward_adgroup_status = _e),
      (l.naming_template_custom_fields = fe),
      (l.priority = ge),
      (l.review_config = he),
      (l.shops_ads_metadata_tags = ye),
      (l.source_app_id = Ce),
      (l.status = be),
      (l.targeting = ve),
      (l.tracking_specs = Se),
      (l.view_tags = Re),
      (l.semantic_fields = Le),
      (l.placement = Ee),
      (l.utils = ke),
      (l.catalog_ui = Ie));
  },
  98,
);
