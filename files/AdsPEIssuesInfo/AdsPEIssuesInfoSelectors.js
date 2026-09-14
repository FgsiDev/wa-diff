__d(
  "AdsPEIssuesInfoSelectors",
  [
    "AdsAMAdvertiserDeliveryIssueFriendlyErrors",
    "AdsAdgroupDraftFragmentStore",
    "AdsCampaignDraftFragmentStore",
    "AdsCampaignGroupDraftFragmentStore",
    "AdsDynamicAdObjectsSelectors",
    "AdsError",
    "AdsPEIssuesInfoErrorCodesToResolutionFieldMap",
    "LoadObject",
    "adsCreateMapSelector",
    "adsCreateSelector",
    "adsCreateStoreSelector",
    "adsUEditorAdgroupPublishStatusSelector",
    "adsUEditorCampaignGroupPublishStatusSelector",
    "adsUEditorCampaignPublishStatusSelector",
    "adsUEditorSelectedAdgroupIDsSelector",
    "adsUEditorSelectedCampaignGroupIDsSelector",
    "adsUEditorSelectedCampaignIDsSelector",
    "curry",
    "getAdsErrorExtraData",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e, t) {
      var n = o(
        "AdsPEIssuesInfoErrorCodesToResolutionFieldMap",
      ).getDeliveryIssueErrorResolutionField(e);
      return n == null
        ? !1
        : t
            .filter(function (e) {
              return !o(
                "AdsPEIssuesInfoErrorCodesToResolutionFieldMap",
              ).DELIVERY_ISSUE_ERROR_FIELD_EXCLUSIONS.has(e);
            })
            .some(function (e) {
              return e.includes(n);
            });
    }
    function c(e, t, n, a, l) {
      var s = a || !n.isDone() ? null : n.getValue();
      if (s == null) return n.setValue(null);
      var c = s
          .filter(function (t) {
            return t.level === e && !u(t, l);
          })
          .map(function (e) {
            var n,
              a = e.additional_info,
              i = e.error_code,
              l = e.error_message,
              s = e.error_type,
              u = e.mid;
            return new (r("AdsError"))(
              i,
              l,
              babelHelpers.extends(
                {
                  isServerError: !0,
                  isDeliveryIssue: !0,
                  level:
                    s === "HARD_ERROR"
                      ? r("AdsError").Level.WARN
                      : r("AdsError").Level.RECOMMEND,
                },
                (n = o("getAdsErrorExtraData").getAdsErrorExtraData(i)) != null
                  ? n
                  : {},
                { additionalInfo: a, objectID: t, opesMid: u },
              ),
            );
          }),
        d = o(
          "AdsAMAdvertiserDeliveryIssueFriendlyErrors",
        ).getFriendlyDeliveryIssueErrors(c);
      return r("LoadObject").withValue(d, { creatorModuleID: i.id });
    }
    var d = (e = r("adsCreateStoreSelector"))(
        [],
        function (t) {
          return t;
        },
        { name: i.id + ".adObjectIdParamSelector" },
      ),
      m = (s = r("adsCreateSelector"))(
        [
          d,
          o("AdsDynamicAdObjectsSelectors").getAdsDynamicCampaignGroupSelector(
            "issues_info",
          ),
          e(
            [r("AdsCampaignGroupDraftFragmentStore")],
            function (t) {
              return r("AdsCampaignGroupDraftFragmentStore").isNew(t);
            },
            { name: i.id },
          ),
          e(
            [r("AdsCampaignGroupDraftFragmentStore")],
            function (t) {
              return r("AdsCampaignGroupDraftFragmentStore").getChangedFields(
                t,
              );
            },
            { name: i.id },
          ),
        ],
        r("curry")(c, "CAMPAIGN"),
        { name: i.id + ".campaignGroupIssuesInfoSelector" },
      ),
      p = s(
        [
          d,
          o("AdsDynamicAdObjectsSelectors").getAdsDynamicCampaignSelector(
            "issues_info",
          ),
          e(
            [r("AdsCampaignDraftFragmentStore")],
            function (t) {
              return r("AdsCampaignDraftFragmentStore").isNew(t);
            },
            { name: i.id },
          ),
          e(
            [r("AdsCampaignDraftFragmentStore")],
            function (t) {
              return r("AdsCampaignDraftFragmentStore").getChangedFields(t);
            },
            { name: i.id },
          ),
        ],
        r("curry")(c, "AD_SET"),
        { name: i.id + ".campaignIssuesInfoSelector" },
      ),
      _ = s(
        [
          d,
          o("AdsDynamicAdObjectsSelectors").getAdsDynamicAdgroupSelector(
            "issues_info",
          ),
          e(
            [r("AdsAdgroupDraftFragmentStore")],
            function (t) {
              return r("AdsAdgroupDraftFragmentStore").isNew(t);
            },
            { name: i.id },
          ),
          e(
            [r("AdsAdgroupDraftFragmentStore")],
            function (t) {
              return r("AdsAdgroupDraftFragmentStore").getChangedFields(t);
            },
            { name: i.id },
          ),
        ],
        r("curry")(c, "AD"),
        { name: i.id + ".adgroupIssuesInfoSelector" },
      );
    function f(e, t) {
      return e.filter(function (e) {
        var n;
        return !((n = t.get(e)) != null && n.isNew);
      });
    }
    var g = r("adsCreateMapSelector")(
        s(
          [
            o("adsUEditorSelectedCampaignGroupIDsSelector")
              .adsUEditorSelectedCampaignGroupIDsSelector,
            o("adsUEditorCampaignGroupPublishStatusSelector")
              .adsUEditorCampaignGroupPublishStatusSelector,
          ],
          f,
          { name: i.id },
        ),
        m,
        i.id + ".selectedCampaignGroupIssuesInfoUEditorSelector",
      ),
      h = r("adsCreateMapSelector")(
        s(
          [
            r("adsUEditorSelectedCampaignIDsSelector"),
            r("adsUEditorCampaignPublishStatusSelector"),
          ],
          f,
          { name: i.id },
        ),
        p,
        i.id + ".selectedCampaignIssuesInfoUEditorSelector",
      ),
      y = s(
        [h],
        function (t) {
          return t
            .filter(function (e) {
              return e.isDone() && e.hasValue();
            })
            .map(function (e) {
              return e.getValueEnforcing();
            })
            .toSeq()
            .toArray();
        },
        { name: i.id + ".selectedCampaignWithIssuesArraySelector" },
      ),
      C = r("adsCreateMapSelector")(
        s(
          [
            r("adsUEditorSelectedAdgroupIDsSelector"),
            r("adsUEditorAdgroupPublishStatusSelector"),
          ],
          f,
          { name: i.id },
        ),
        _,
        i.id + ".selectedAdgroupIssuesInfoUEditorSelector",
      );
    ((l.campaignGroupIssuesInfoSelector = m),
      (l.campaignIssuesInfoSelector = p),
      (l.adgroupIssuesInfoSelector = _),
      (l.selectedCampaignGroupIssuesInfoUEditorSelector = g),
      (l.selectedCampaignIssuesInfoUEditorSelector = h),
      (l.selectedCampaignWithIssuesArraySelector = y),
      (l.selectedAdgroupIssuesInfoUEditorSelector = C));
  },
  98,
);
