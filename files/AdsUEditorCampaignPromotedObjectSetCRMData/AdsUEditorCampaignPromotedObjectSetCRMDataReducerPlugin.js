__d(
  "AdsUEditorCampaignPromotedObjectSetCRMDataReducerPlugin",
  [
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignPromotedObjectSetCRMDataActionFlux",
    "AdsUEditorCampaignReducerUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {},
          function (e, t) {
            var n = t.campaignIDs;
            return o("AdsMutators").mutateEach(e, n, function (e) {
              var n,
                a,
                i,
                l = (n = e.promoted_object) == null ? void 0 : n.page_id,
                s =
                  (a = e.promoted_object) == null
                    ? void 0
                    : a.lead_ads_form_event_source_type,
                u =
                  (i = e.promoted_object) == null
                    ? void 0
                    : i.lead_ads_quality_volume_setting,
                c = o("AdsMutators").chain(
                  r("AdsCampaignRecordAccessors").promoted_object.delete,
                  r("AdsCampaignRecordAccessors").promoted_object.page_id.set(
                    l,
                  ),
                  r(
                    "AdsCampaignRecordAccessors",
                  ).promoted_object.lead_ads_form_event_source_type.set(s),
                  r(
                    "AdsCampaignRecordAccessors",
                  ).promoted_object.lead_ads_quality_volume_setting.set(u),
                )(e);
              return (
                t.crmData.type === "CRM" &&
                  (c = r(
                    "AdsCampaignRecordAccessors",
                  ).promoted_object.pixel_id.set(t.crmData.id, c)),
                t.crmData.type === "DATA_SET" &&
                  (c = r(
                    "AdsCampaignRecordAccessors",
                  ).promoted_object.offline_conversion_data_set_id.set(
                    t.crmData.id,
                    c,
                  )),
                c
              );
            });
          },
          o("AdsUEditorCampaignPromotedObjectSetCRMDataActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
