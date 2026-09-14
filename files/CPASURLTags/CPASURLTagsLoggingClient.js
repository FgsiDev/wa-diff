__d(
  "CPASURLTagsLoggingClient",
  ["CPASURLTagsTypedLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        ADS_CF_DYNAMIC_ADGROUP_PLUGIN_COMMON: "AdsCFDynamicAdgroupPluginCommon",
        ADS_UEDITOR_ACCOUNT_CATALOG_SELECTOR_CONTAINER:
          "AdsUEditorAccountCatalogSelectorContainer",
        ADS_UEDITOR_ADGROUP_URL_TAGS_FIELD: "AdsUEditorAdgroupURLTagsField",
        CATALOG_MANAGER_SHARE_DIALOG_CONTAINER:
          "CPASShareCatalogSegmentDialogContainer",
        CPAS_MERCHANT_PREDEFINED_UTM_SELECTOR:
          "CPASMerchantPredefinedUTMSelector",
        COLLABORATION_HUB_SHARING_DIALOG: "CollaborationHubSharingDialog",
      },
      s = {
        log: function (t) {
          new (r("CPASURLTagsTypedLogger"))()
            .setAdvertiserAccountID(t.advertiserAccountID)
            .setAdvertiserBusinessID(t.advertiserBusinessID)
            .setBusinessID(t.businessID)
            .setCatalogSegmentID(t.catalogSegmentID)
            .setComponent(t.component)
            .setDebugMessage(t.debugMessage)
            .setEvent(t.event)
            .setEventSeverity(t.eventSeverity || "info")
            .setEventType("debug")
            .setNewURLTags(t.newURLTags)
            .setOldURLTags(t.oldURLTags)
            .log();
        },
      };
    ((l.CPASURLTagsLoggingComponent = e), (l.CPASURLTagsLoggingClient = s));
  },
  98,
);
