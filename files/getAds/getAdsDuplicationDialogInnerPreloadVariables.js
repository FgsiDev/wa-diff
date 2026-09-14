__d(
  "getAdsDuplicationDialogInnerPreloadVariables",
  [
    "AdsAccountStore",
    "AdsAdObjectRelayIDUtils",
    "AdsCampaignCombinedListStore",
    "AdsDuplicationDialogInnerQueryUtils",
    "AdsDuplicationMaxObjectConstants",
    "AdsEditingAdgroupContext",
    "AdsEditingAdgroupEditorContext",
    "AdsEditingCampaignEditorContext",
    "AdsEditingCampaignGroupEditorContext",
    "AdsEditorSelectedIDsSelector",
    "AdsUEditorContextFactory",
    "RelayEverywhereUEditorRegistry",
    "adsDuplicateDialogUtils",
    "adsUEditorSelectedAdgroupIDsSelector",
    "adsUEditorSelectedCampaignGroupIDsSelector",
    "adsUEditorSelectedCampaignIDsSelector",
    "gkx",
    "useAdsDuplicationAdObjectSelectors",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n,
        a = r("AdsAccountStore").getSelectedAccount().getValue();
      if (e == null || a == null) return null;
      var i = o(
          "useAdsDuplicationAdObjectSelectors",
        ).AdsDuplicationSelectedAdgroupIDsSelector(
          r("AdsEditingAdgroupEditorContext"),
        ),
        l = o("AdsEditorSelectedIDsSelector").AdsEditorSelectedIDsSelector(
          "campaignGroup",
        ),
        s = o("adsDuplicateDialogUtils")
          .getSelectedCampaignIDs(
            a,
            e,
            r("AdsCampaignCombinedListStore").getForCampaignGroupsSelector(),
            o("AdsEditorSelectedIDsSelector").AdsEditorSelectedIDsSelector,
          )
          .getValue(),
        u = s != null ? s : [];
      if (
        u.length + i.length >
        o("AdsDuplicationMaxObjectConstants")
          .ADS_DUPLICATION_FRAGMENT_CREATION_LIMIT
      )
        return null;
      var c = r("gkx")("22184"),
        d = o(
          "useAdsDuplicationAdObjectSelectors",
        ).AdsDuplicationSelectedAdgroupSelector(
          r("AdsEditingAdgroupEditorContext"),
        ),
        m = c
          ? i
          : (n =
                d == null
                  ? void 0
                  : d.map(function (e) {
                      return e.id;
                    })) != null
            ? n
            : [],
        p = r("adsUEditorSelectedAdgroupIDsSelector")(
          r("AdsEditingAdgroupEditorContext"),
        ),
        _ = o(
          "adsUEditorSelectedCampaignGroupIDsSelector",
        ).adsUEditorSelectedCampaignGroupIDsSelector(
          r("AdsEditingCampaignGroupEditorContext"),
        ),
        f = r("adsUEditorSelectedCampaignIDsSelector")(
          r("AdsEditingCampaignEditorContext"),
        ),
        g = o("AdsUEditorContextFactory").getForIDs(
          r("AdsEditingAdgroupContext"),
          Array.from(m),
          t,
        ),
        h = o("RelayEverywhereUEditorRegistry").Adgroup.getKey(g),
        y = o("AdsAdObjectRelayIDUtils").encodeAdObjectRelayIDsWithContext(
          p,
          r("AdsEditingAdgroupEditorContext"),
        );
      return o(
        "AdsDuplicationDialogInnerQueryUtils",
      ).getAdsDuplicationDialogInnerQueryVariables(
        a.account_id,
        h,
        y,
        g,
        m,
        l,
        u,
        p,
        _,
        f,
        l,
        e,
      );
    }
    l.default = e;
  },
  98,
);
