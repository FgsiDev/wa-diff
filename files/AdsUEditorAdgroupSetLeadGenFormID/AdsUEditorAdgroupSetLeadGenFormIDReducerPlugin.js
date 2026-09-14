__d(
  "AdsUEditorAdgroupSetLeadGenFormIDReducerPlugin",
  [
    "AdGroupLeadGenUtils",
    "AdsAPIAdgroupCallToActionValueRecord",
    "AdsAPICampaignGroupRecordUtils",
    "AdsAdgroupRecordAccessors",
    "AdsAdgroupSemanticFields",
    "AdsMutators",
    "AdsODAXUtils",
    "AdsPromotedObjectTypes",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupChildAttachmentsMutators",
    "AdsUEditorAdgroupLeadAdsWorkEmailEnforcementMutators",
    "AdsUEditorAdgroupLeadNurtureChannelsMutator",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSetLeadGenFormIDDataActionFlux",
    "AdsUEditorCampaignAdObjectsUtils",
    "AdsUEditorWebsiteMutators",
    "adsCallToActionGetDefaultCallToActionType",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "http://fb.me",
      s = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {
            parentData: o(
              "AdsUEditorAdgroupSelectors",
            ).adObjectsList.mapTransform(
              o("AdsUEditorAdgroupAdObjectsUtils").getParentAdObjectsExtraData,
            ),
          },
          function (t, n, a) {
            var i = a.parentData;
            return o("AdsMutators").mutateEach(
              t,
              n.adgroupIDs,
              function (t, a) {
                var l = r("nullthrows")(i.get(a)),
                  s = l.campaign,
                  u = l.campaignGroup,
                  c = l.specPlugin,
                  d = o(
                    "AdsAPICampaignGroupRecordUtils",
                  ).getPromotedObjectPageID(u),
                  m = o(
                    "AdsUEditorCampaignAdObjectsUtils",
                  ).getPromotedObjectType({ campaign: s, campaignGroup: u }),
                  p = o("AdsODAXUtils").maybeTranslateObjective(
                    u.objective,
                    m,
                    s.optimization_goal,
                  ),
                  _ =
                    m === r("AdsPromotedObjectTypes").WEBSITE_AND_INSTANT_FORM;
                return o("AdsMutators").chain(
                  function (t) {
                    if (
                      o("AdGroupLeadGenUtils").isLeadGenAdGroupWithExistingPost(
                        t,
                        p,
                        m,
                      )
                    ) {
                      var a = r(
                          "AdsAdgroupRecordAccessors",
                        ).creative.call_to_action_type.get(t),
                        i = t;
                      _ ||
                        (i = r(
                          "AdsAdgroupRecordAccessors",
                        ).creative.call_to_action.value.link.set(e, t));
                      var l =
                        a != null
                          ? a
                          : r("adsCallToActionGetDefaultCallToActionType")(
                              p,
                              m,
                            );
                      return (
                        l != null &&
                          (i = r(
                            "AdsAdgroupRecordAccessors",
                          ).creative.call_to_action.type.set(l, i)),
                        r(
                          "AdsAdgroupRecordAccessors",
                        ).creative.call_to_action.value.lead_gen_form_id.set(
                          n.formID,
                          i,
                        )
                      );
                    }
                    if (
                      !r(
                        "AdsAdgroupSemanticFields",
                      ).callToActionValue.isSupported(c, t)
                    )
                      return t;
                    var s =
                      r("AdsAdgroupSemanticFields").callToActionValue.get(
                        c,
                        t,
                      ) ||
                      o(
                        "AdsAPIAdgroupCallToActionValueRecord",
                      ).createEmptyCallToActionValueFromAdgroup(t);
                    return r("AdsAdgroupSemanticFields").callToActionValue.set(
                      c,
                      t,
                      s.set("lead_gen_form_id", n.formID),
                    );
                  },
                  function (e) {
                    if (
                      o("AdGroupLeadGenUtils").isLeadGenAdGroupWithExistingPost(
                        e,
                        p,
                        m,
                      )
                    )
                      return e;
                    var t = r("AdsAdgroupSemanticFields").callToActionType.get(
                      c,
                      e,
                    );
                    return o(
                      "AdsUEditorAdgroupChildAttachmentsMutators",
                    ).mutateChildAttachments(c, e, function (e) {
                      return e
                        .setIn(
                          ["call_to_action", "value", "lead_gen_form_id"],
                          n.formID,
                        )
                        .setIn(["call_to_action", "type"], t);
                    });
                  },
                  function (t) {
                    return n.isFormExtension === !0 ||
                      o("AdGroupLeadGenUtils").isLeadGenAdGroupWithExistingPost(
                        t,
                        p,
                        m,
                      )
                      ? t
                      : o(
                          "AdsUEditorAdgroupChildAttachmentsMutators",
                        ).mutateChildAttachments(c, t, function (t) {
                          return t.setIn(
                            ["call_to_action", "value", "link"],
                            e,
                          );
                        });
                  },
                  function (t) {
                    return n.isFormExtension === !0 ||
                      o("AdGroupLeadGenUtils").isLeadGenAdGroupWithExistingPost(
                        t,
                        p,
                        m,
                      )
                      ? t
                      : o(
                          "AdsUEditorAdgroupChildAttachmentsMutators",
                        ).mutateChildAttachments(c, t, function (t) {
                          return t.setIn(["link"], e);
                        });
                  },
                  function (t) {
                    return n.isFormExtension === !0 ||
                      o("AdGroupLeadGenUtils").isLeadGenAdGroupWithExistingPost(
                        t,
                        p,
                        m,
                      )
                      ? t
                      : o("AdsUEditorWebsiteMutators").setWebsiteURL({
                          adgroup: t,
                          campaignGroupPromotedPageID: d,
                          objective: p,
                          promotedObjectType: m,
                          specPlugin: c,
                          websiteURL: e,
                        });
                  },
                  function (e) {
                    return n.isFormExtension === !0 ||
                      o("AdGroupLeadGenUtils").isLeadGenAdGroupWithExistingPost(
                        e,
                        p,
                        m,
                      )
                      ? e
                      : o(
                          "AdsUEditorAdgroupLeadNurtureChannelsMutator",
                        ).cleanLeadNurtureChannelsField(e);
                  },
                  function (e) {
                    return o(
                      "AdsUEditorAdgroupLeadAdsWorkEmailEnforcementMutators",
                    ).setLeadAdsWorkEnforcementEnabled(e, !1);
                  },
                )(t);
              },
            );
          },
          o("AdsUEditorAdgroupSetLeadGenFormIDDataActionFlux").actionType,
        ),
      },
      u = s;
    l.default = u;
  },
  98,
);
