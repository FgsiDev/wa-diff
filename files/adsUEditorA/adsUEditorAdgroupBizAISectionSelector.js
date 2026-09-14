__d(
  "adsUEditorAdgroupBizAISectionSelector",
  [
    "AdsAPICampaignRecordUtilsShared",
    "AdsAPIObjectives",
    "AdsBulkValueUtils",
    "AdsChildAttachmentsUtils",
    "AdsPagePostUtils",
    "AdsPageStore",
    "AdsPromotedObjectTypes",
    "AdsRegulatedCategory",
    "AdsUEditorCampaignGroupSelectors",
    "AdsUEditorSelectors",
    "BizAIAdsDefaultOptInUtils",
    "BizAIStickySettingStoreSource",
    "BizAIStickySignalsUtils",
    "IGAdsSensitiveVerticalsUtils",
    "adsConvertAdObjectRecordToPlainJS",
    "adsCreateSelector",
    "adsGetUniformValueSelector",
    "adsUEditorAIAgentStickyOptInL0Selector",
    "adsUEditorAccountSelector",
    "adsUEditorAdPlainObjectsForSelectedAdgroupsSelector",
    "adsUEditorAnyAdgroupHasMediaSelector",
    "gkx",
    "immutable",
    "justknobx",
    "qex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = r("immutable").Set([
        (s = r("AdsRegulatedCategory")).EMPLOYMENT,
        s.HOUSING,
        s.CREDIT,
        s.ISSUES_ELECTIONS_POLITICS,
        s.SOCIAL_ISSUES,
        s.ELECTIONS_POLITICS,
      ]),
      d = new Set([
        "INSTAGRAM_MESSAGE",
        "MESSAGE_PAGE",
        "WHATSAPP_MESSAGE",
        "CALL_NOW",
        "GET_DIRECTIONS",
        "INSTALL_APP",
        "INSTALL_MOBILE_APP",
        "MOBILE_DOWNLOAD",
        "PLAY_GAME",
        "USE_APP",
        "USE_MOBILE_APP",
        "BUY_TICKETS",
      ]),
      m = (u = r("adsCreateSelector"))(
        [
          (e = o("AdsUEditorSelectors")).adgroup.bulkByAccessorToJS(
            function (e) {
              var t;
              return (t = e.creative) == null
                ? void 0
                : t.branded_content_boosting_type;
            },
          ),
        ],
        function (t) {
          var e = o("AdsBulkValueUtils").getUniformValue(t);
          return e != null;
        },
        { name: i.id + ".adsUEditorAdgroupIsPartnershipAdSelector" },
      ),
      p = u(
        [
          e.adgroup.bulkByAccessorToJS(function (e) {
            var t;
            return (t = e.creative) == null || (t = t.object_story_spec) == null
              ? void 0
              : t.page_id;
          }),
          e.adgroup.bulkByAccessorToJS(function (e) {
            var t;
            return (t = e.creative) == null ? void 0 : t.object_story_id;
          }),
          e.adgroup.bulkByAccessorToJS(function (e) {
            var t;
            return (t = e.creative) == null ? void 0 : t.object_id;
          }),
        ],
        function (t, n, a) {
          var e = o("AdsBulkValueUtils").getUniformValue(t);
          if (e != null) return e;
          if (r("justknobx")._("3086")) {
            var i = o("AdsBulkValueUtils").getUniformValue(n);
            if (i != null)
              return o("AdsPagePostUtils").getPageIdFromPagePostId_BROKEN(i);
          }
          var l = o("AdsBulkValueUtils").getUniformValue(a);
          return l != null ? l : null;
        },
        { name: i.id + ".adsUEditorAdGroupPageIdSelector" },
      ),
      _ = u(
        [p, r("AdsPageStore").getSelector],
        function (t, n) {
          var e;
          if (t == null) return !1;
          var r = n(t);
          return (e = r.is_eligible_for_biz_ai_aplusc) != null ? e : !1;
        },
        { name: i.id + ".adsUEditorAdgroupBizAIPageEligibilitySelector" },
      ),
      f = o("AdsUEditorCampaignGroupSelectors").campaignGroups.every(
        function (e) {
          var t,
            n = (t = e.special_ad_categories) == null ? void 0 : t.toArray();
          return (
            n != null &&
            n.some(function (e) {
              return c.includes(e);
            })
          );
        },
      ),
      g = u(
        [
          r("adsUEditorAccountSelector"),
          r("adsUEditorAdPlainObjectsForSelectedAdgroupsSelector"),
          _,
          f,
          m,
        ],
        function (t, n, a, i, l) {
          if (i || l) return !1;
          var e = n.every(function (e) {
            var n,
              i,
              l,
              s,
              u = e.adgroup,
              c = e.campaign,
              d = e.campaignGroup,
              m = d.objective,
              p = o("AdsAPICampaignRecordUtilsShared").getPromotedObjectType(
                t,
                m,
                r("adsConvertAdObjectRecordToPlainJS")(c),
              ),
              _ =
                ((n = u.creative) == null ||
                (n = n.object_story_spec) == null ||
                (n = n.link_data) == null ||
                (n = n.call_to_action) == null
                  ? void 0
                  : n.type) ||
                ((i = u.creative) == null ||
                (i = i.object_story_spec) == null ||
                (i = i.video_data) == null ||
                (i = i.call_to_action) == null
                  ? void 0
                  : i.type) ||
                null,
              f =
                ((l = u.creative) == null || (l = l.asset_feed_spec) == null
                  ? void 0
                  : l.message_extensions) != null ||
                ((s = u.creative) == null || (s = s.asset_feed_spec) == null
                  ? void 0
                  : s.call_ads_configuration) != null;
            return E(p, m, a, t == null ? void 0 : t.sales_segment_v2, _, f);
          });
          if (!e) return !1;
          var s = r("qex")._("4615") === !0;
          return s;
        },
        { name: i.id + ".adsUEditorBizAIL1SectionSelector" },
      ),
      h = r("adsGetUniformValueSelector")(
        e.adgroup.bulkByAccessorToJS(function (e) {
          var t;
          return (t = e.creative) == null ||
            (t = t.degrees_of_freedom_spec) == null ||
            (t = t.creative_features_spec) == null ||
            (t = t.biz_ai) == null ||
            (t = t.action_metadata) == null
            ? void 0
            : t.type;
        }),
        null,
      ),
      y = r("adsGetUniformValueSelector")(
        e.adgroup.bulkByAccessorToJS(function (e) {
          var t;
          return (t = e.creative) == null ||
            (t = t.degrees_of_freedom_spec) == null ||
            (t = t.creative_features_spec) == null ||
            (t = t.biz_ai) == null
            ? void 0
            : t.enroll_status;
        }),
        null,
      ),
      C = u(
        [
          g,
          r("adsUEditorAccountSelector"),
          o(
            "BizAIStickySettingStoreSource",
          ).bizAIStickySettingStore.fluxGetSelector(),
          h,
          y,
          o("adsUEditorAIAgentStickyOptInL0Selector")
            .adsUEditorAIAgentStickyOptInL0Selector,
        ],
        function (t, n, r, a, i, l) {
          var e =
              t &&
              o("BizAIAdsDefaultOptInUtils").shouldEnableBizAIToggleByDefault(
                n == null ? void 0 : n.sales_segment_v2,
              ),
            s = null,
            u = null;
          if (t && (n == null ? void 0 : n.account_id) != null) {
            var c = r(n.account_id),
              d = c.getValue(),
              m = o("BizAIStickySignalsUtils").computeBizAIStickySignals({
                stickySettingValue: d,
                aPlusCActionType: a,
                aPlusCEnrollStatus: i,
                accountLevelAPlusCOptIn: l.getValue(),
              });
            ((s = m.isStickyOptInEligible),
              (u = m.isAPlusCStickyOptInEligible));
          }
          return {
            isEligibleForDefaultOptIn: e,
            isL1SectionVisible: t,
            isStickyOptInEligible: s,
            isAPlusCStickyOptInEligible: u,
          };
        },
        { name: i.id + ".adsUEditorBizAIAdsSectionEligibilitySelector" },
      ),
      b = r("adsGetUniformValueSelector")(
        e.adgroup.bulkByAccessorToJS(function (e) {
          var t;
          return (t = e.creative) == null ||
            (t = t.object_story_spec) == null ||
            (t = t.link_data) == null
            ? void 0
            : t.child_attachments;
        }),
        null,
      ),
      v = e.adgroup.bulkByAccessorToJS(function (e) {
        var t;
        return (t = e.creative) == null ? void 0 : t.source_instagram_media_id;
      }),
      S = e.adgroup.bulkByAccessorToJS(function (e) {
        var t;
        return (t = e.creative) == null ? void 0 : t.product_set_id;
      }),
      R = e.adgroup.bulkByAccessorToJS(function (e) {
        var t;
        return (t = e.creative) == null ? void 0 : t.object_story_id;
      }),
      L = u(
        [r("adsUEditorAnyAdgroupHasMediaSelector"), b, v, S, R],
        function (t, n, r, a, i) {
          var e =
              n != null &&
              Array.from(n).length > 0 &&
              !o(
                "AdsChildAttachmentsUtils",
              ).hasOnlyEmptyChildAttachmentsPlaceholder(n),
            l = o("AdsBulkValueUtils").getUniformValue(r) != null,
            s = o("AdsBulkValueUtils").getUniformValue(a) != null,
            u = o("AdsBulkValueUtils").getUniformValue(i) != null;
          return t || e || l || u || s;
        },
        { name: i.id + ".adsUEditorBizAIHasMediaSelector" },
      );
    function E(e, t, n, o, a, i) {
      var l = r("gkx")("22377");
      return l || (o != null && o.includes("GBG In-Market"))
        ? !1
        : k(e, t, n, a, i);
    }
    function k(e, t, n, o, a) {
      var i =
          r("IGAdsSensitiveVerticalsUtils").is_pharma_or_sensitive_vertical ||
          r("IGAdsSensitiveVerticalsUtils").is_luxury_vertical,
        l = I(e),
        s = r("gkx")("5670");
      return (
        !i &&
        n &&
        l &&
        s &&
        (t === r("AdsAPIObjectives").OUTCOME_SALES ||
          (!r("gkx")("13172") && T(t) && D(t, o, a)))
      );
    }
    function I(e) {
      return (
        e === r("AdsPromotedObjectTypes").PIXEL ||
        e === r("AdsPromotedObjectTypes").WEB_AND_APP ||
        e === r("AdsPromotedObjectTypes").WEBSITE_AND_IN_STORE ||
        e === r("AdsPromotedObjectTypes").WEBSITE_AND_PHONE_CALL ||
        e === r("AdsPromotedObjectTypes").PRODUCT_SET ||
        e === r("AdsPromotedObjectTypes").WEBSITE ||
        e === r("AdsPromotedObjectTypes").WEB_AND_SHOP ||
        e === r("AdsPromotedObjectTypes").WEBSITE_APP_AND_IN_STORE ||
        e === r("AdsPromotedObjectTypes").WEBSITE_AND_INSTANT_FORM
      );
    }
    function T(e) {
      return (
        e === r("AdsAPIObjectives").OUTCOME_SALES ||
        e === r("AdsAPIObjectives").OUTCOME_TRAFFIC ||
        e === r("AdsAPIObjectives").LINK_CLICKS
      );
    }
    function D(e, t, n) {
      return e !== r("AdsAPIObjectives").OUTCOME_TRAFFIC &&
        e !== r("AdsAPIObjectives").LINK_CLICKS
        ? !0
        : !((t != null && d.has(t)) || n === !0);
    }
    ((l.adsUEditorAdgroupIsPartnershipAdSelector = m),
      (l.adsUEditorAdgroupBizAIPageEligibilitySelector = _),
      (l.hasSpecialAdCategorySelector = f),
      (l.adsUEditorBizAIL1SectionSelector = g),
      (l.adsUEditorBizAIAdsSectionEligibilitySelector = C),
      (l.adsUEditorBizAIHasMediaSelector = L),
      (l.isEligibleforBizAIL1Section = E),
      (l.isEligibleForBizAICommon = k));
  },
  98,
);
