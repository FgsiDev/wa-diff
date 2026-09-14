__d(
  "adsBulkEditCampaignPublishedStatusSelector",
  [
    "AdsBulkEditCampaignStructureProvider",
    "AdsCampaignDraftFragmentStore",
    "AdsPECampaignDraftSelectors",
    "adsCreateSelector",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = r("adsCreateSelector")(
        [
          r("AdsBulkEditCampaignStructureProvider").toFluxSelector(),
          (e = r("AdsCampaignDraftFragmentStore")).getIsNewSelector,
          e.getIsNewDraftFragmentWithoutPublishAttemptSelector,
          e.getHasDraftSelector,
          o("AdsPECampaignDraftSelectors").getIsDirtySelector,
          e.getIsDeletedSelector,
          e.getChangedFieldsSelector,
        ],
        function (t, n, o, a, i, l, s) {
          var e,
            u = t.selectedIDs;
          return r("immutable").Map(
            (e = u.get("ad_set")) == null
              ? void 0
              : e.map(function (e) {
                  return [
                    e,
                    {
                      isNew: n(e),
                      isNewDraftFragmentWithoutPublishAttempt: o(e),
                      hasDraft: a(e),
                      isDirty: i(e),
                      isDeleted: l(e),
                      changedFields: s(e),
                    },
                  ];
                }),
          );
        },
        { name: i.id + ".adsBulkEditCampaignPublishedStatusSelector" },
      ),
      u = s;
    l.default = u;
  },
  98,
);
