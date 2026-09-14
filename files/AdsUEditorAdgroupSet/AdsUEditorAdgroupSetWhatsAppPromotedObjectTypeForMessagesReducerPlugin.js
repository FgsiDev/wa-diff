__d(
  "AdsUEditorAdgroupSetWhatsAppPromotedObjectTypeForMessagesReducerPlugin",
  [
    "AdsCampaignRecordAccessors",
    "AdsCreativeFormatMutatorUtils",
    "AdsMutators",
    "AdsPageStore",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorCampaignSetWhatsAppPromotedObjectTypeDataActionFlux",
    "AdsUEditorMessagingDestinationUtils",
    "AdsUEditorSelectors",
    "AdsUEditorWhatsAppMutators",
    "CTWAChatBuilderFlowsUtils",
    "adsAutomaticFlowMutationSetDoFSpec",
    "adsGetUniformValueSelector",
    "adsUEditorAccountSelector",
    "adsUEditorCampaignGroupWhatsAppBusinessAccountsSelector",
    "adsUEditorGetShouldEnableAutoflowByDefaultGetValueSelector",
    "adsUEditorMessagesUnifiedCreationSelectedPageWhatsAppBusinessPhoneNumberIDSelector",
    "adsUEditorMessagesUnifiedCreationSelectedPageWhatsAppNumberIDSelector",
    "isTruthy",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {
            account: r("adsUEditorAccountSelector"),
            destinationType: o("AdsUEditorSelectors").campaign.bulkByAccessor(
              r("AdsCampaignRecordAccessors").destination_type.get,
            ),
            parentData: o(
              "AdsUEditorAdgroupSelectors",
            ).adObjectsList.mapTransform(
              o("AdsUEditorAdgroupAdObjectsUtils").getParentAdObjectsExtraData,
            ),
            getShouldEnableAutomaticFlowByDefault: r(
              "adsUEditorGetShouldEnableAutoflowByDefaultGetValueSelector",
            ),
            pageWhatsAppNumberID: r(
              "adsUEditorMessagesUnifiedCreationSelectedPageWhatsAppNumberIDSelector",
            ),
            whatsAppBusinessPhoneNumberID: r(
              "adsUEditorMessagesUnifiedCreationSelectedPageWhatsAppBusinessPhoneNumberIDSelector",
            ),
            businessWhatsAppBusinessAccountsLoadObject: o(
              "adsUEditorCampaignGroupWhatsAppBusinessAccountsSelector",
            ).businessWhatsAppBusinessAccountsSelector,
            optimizationGoal: r("adsGetUniformValueSelector")(
              o("AdsUEditorSelectors").campaign.bulkByAccessorToJS(
                function (e) {
                  return e.optimization_goal;
                },
              ),
              null,
            ),
            getPage: r("AdsPageStore").getSelector,
          },
          function (e, t, n) {
            var a = n.account,
              i = n.businessWhatsAppBusinessAccountsLoadObject,
              l = n.destinationType,
              s = n.getPage,
              u = n.getShouldEnableAutomaticFlowByDefault,
              c = n.optimizationGoal,
              d = n.pageWhatsAppNumberID,
              m = n.parentData,
              p = n.whatsAppBusinessPhoneNumberID,
              _ = o("AdsUEditorMessagingDestinationUtils").isMultiDestination(
                l,
              ),
              f = o(
                "CTWAChatBuilderFlowsUtils",
              ).getWABAIDForWhatsAppBusinessPhoneNumberID(p, i);
            return o("AdsMutators").mutateEach(
              e,
              t.adgroupIDs,
              function (e, n) {
                var i,
                  l = r("nullthrows")(m.get(n)),
                  g = l.campaign,
                  h = l.campaignGroup,
                  y = l.specPlugin,
                  C = (i = g.promoted_object) == null ? void 0 : i.page_id;
                return o("AdsMutators").chain(
                  function (e) {
                    return o(
                      "AdsUEditorWhatsAppMutators",
                    ).setFieldsForSelectingPromotedObjectType({
                      adgroup: e,
                      campaignPromotedPageID: C,
                      destinationType: t.newDestinationType,
                      objective: h.objective,
                      specPlugin: y,
                      enableMessageTemplateSection: !0,
                      isMultiDestination: _,
                      pageWhatsAppNumberID: d,
                      page: r("isTruthy")(C) ? s(C) : null,
                      whatsAppBusinessPhoneNumberID: p,
                      whatsAppBusinessPhoneNumberWabaID: f,
                      optimizationGoal: c,
                      campaignGroupObjective: h.objective,
                    });
                  },
                  function (e) {
                    return o(
                      "AdsCreativeFormatMutatorUtils",
                    ).mutateCreativeMediaType(e, "SINGLE_LINK");
                  },
                  function (e) {
                    return o(
                      "adsAutomaticFlowMutationSetDoFSpec",
                    ).adsAutomaticFlowLiteSpecMutator(
                      a,
                      { campaign: g, campaignGroup: h, adgroup: e },
                      u,
                    );
                  },
                )(e);
              },
            );
          },
          o("AdsUEditorCampaignSetWhatsAppPromotedObjectTypeDataActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
