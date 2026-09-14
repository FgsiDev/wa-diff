__d(
  "AdsPEExportStore",
  [
    "invariant",
    "$InternalEnum",
    "AdsAccountStore",
    "AdsCopyCopyDataActionFlux",
    "AdsDataAtom",
    "AdsPEExportAllAdgroupsActionFlux",
    "AdsPEExportAllCampaignGroupsActionFlux",
    "AdsPEExportAllCampaignsActionFlux",
    "AdsPEExportCompletedTextAction",
    "AdsPEExportCompletedTextActionFlux",
    "AdsPEExportConstants",
    "AdsPEExportHideCustomizeActionFlux",
    "AdsPEExportHideExportAsTextActionFlux",
    "AdsPEExportHideFileFormatDialogActionFlux",
    "AdsPEExportHideSelectPresetActionFlux",
    "AdsPEExportSelectedAdgroupsActionFlux",
    "AdsPEExportSelectedAdgroupsCustomizedActionFlux",
    "AdsPEExportSelectedCampaignGroupsActionFlux",
    "AdsPEExportSelectedCampaignGroupsCustomizedActionFlux",
    "AdsPEExportSelectedCampaignsActionFlux",
    "AdsPEExportSelectedCampaignsCustomizedActionFlux",
    "AdsPEExportShowCopyPasteWarningActionFlux",
    "AdsPEExportShowFileFormatDialogActionFlux",
    "AdsPEExportShowSelectPresetActionFlux",
    "AdsPEImportDownloadTemplateActionFlux",
    "AdsPEToolbarActionsTypes",
    "ExecutionEnvironment",
    "FluxStore",
    "JSResource",
    "LoadObject",
    "XAdsManagerTemplateControllerRouteBuilder",
    "adsCreateStoreSelector",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = {
        level: "campaign",
        mode: o("AdsPEToolbarActionsTypes").ExportMode.All,
      },
      d = n("$InternalEnum").Mirrored(["Selected", "All"]),
      m = (function (t) {
        function n() {
          var n;
          return (
            (n = t.call(this, e || (e = r("AdsDataAtom"))) || this),
            (n.getLatestExportText = r("adsCreateStoreSelector")(
              [n],
              function () {
                return n.$AdsPEExportStore$p_2;
              },
              { name: i.id },
            )),
            (n.getShowFileFormatDialog = r("adsCreateStoreSelector")(
              [n],
              function () {
                return n.$AdsPEExportStore$p_7;
              },
              { name: i.id },
            )),
            (n.getExportConfig = r("adsCreateStoreSelector")(
              [n],
              function () {
                return n.$AdsPEExportStore$p_8;
              },
              { name: i.id },
            )),
            (n.$AdsPEExportStore$p_1 = null),
            (n.$AdsPEExportStore$p_3 = !1),
            (n.$AdsPEExportStore$p_2 = r("LoadObject").empty({
              creatorModuleID: i.id,
            })),
            (n.$AdsPEExportStore$p_4 = !1),
            (n.$AdsPEExportStore$p_5 = !1),
            (n.$AdsPEExportStore$p_6 = !1),
            (n.$AdsPEExportStore$p_7 = !1),
            (n.$AdsPEExportStore$p_8 = c),
            n
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.__getActionTypes = function () {
            return [
              o("AdsPEExportAllAdgroupsActionFlux").actionType,
              o("AdsPEExportCompletedTextActionFlux").actionType,
              o("AdsPEExportSelectedAdgroupsCustomizedActionFlux").actionType,
              o("AdsPEExportSelectedAdgroupsActionFlux").actionType,
              o("AdsPEExportAllCampaignsActionFlux").actionType,
              o("AdsPEExportSelectedCampaignsCustomizedActionFlux").actionType,
              o("AdsPEExportSelectedCampaignsActionFlux").actionType,
              o("AdsPEExportAllCampaignGroupsActionFlux").actionType,
              o("AdsPEExportSelectedCampaignGroupsCustomizedActionFlux")
                .actionType,
              o("AdsPEExportSelectedCampaignGroupsActionFlux").actionType,
              o("AdsPEExportHideCustomizeActionFlux").actionType,
              o("AdsPEExportHideExportAsTextActionFlux").actionType,
              o("AdsPEExportHideSelectPresetActionFlux").actionType,
              o("AdsPEExportShowSelectPresetActionFlux").actionType,
              o("AdsPEExportShowCopyPasteWarningActionFlux").actionType,
              o("AdsPEExportShowFileFormatDialogActionFlux").actionType,
              o("AdsPEExportHideFileFormatDialogActionFlux").actionType,
              o("AdsCopyCopyDataActionFlux").actionType,
              o("AdsPEImportDownloadTemplateActionFlux").actionType,
            ];
          }),
          (a.__onDispatch = function (t) {
            var e = t.action;
            e: {
              var n = e;
              if (
                ((typeof n == "object" && n !== null) ||
                  typeof n == "function") &&
                "type" in n &&
                n.type === o("AdsPEExportAllAdgroupsActionFlux").actionType
              ) {
                var a = n;
                ((this.$AdsPEExportStore$p_7 = !1),
                  this.$AdsPEExportStore$p_9(
                    "ad",
                    null,
                    a.fileFormat,
                    a.userOptions,
                    d.All,
                  ),
                  this.__emitChange());
                break e;
              }
              if (
                ((typeof n == "object" && n !== null) ||
                  typeof n == "function") &&
                "type" in n &&
                n.type === o("AdsPEExportCompletedTextActionFlux").actionType &&
                "data" in n
              ) {
                var l = n.data;
                ((this.$AdsPEExportStore$p_2 = r("LoadObject").withValue(l, {
                  creatorModuleID: i.id,
                })),
                  this.__emitChange());
                break e;
              }
              if (
                ((typeof n == "object" && n !== null) ||
                  typeof n == "function") &&
                "type" in n &&
                n.type ===
                  o("AdsPEExportSelectedAdgroupsCustomizedActionFlux")
                    .actionType
              ) {
                this.$AdsPEExportStore$p_10("ad");
                break e;
              }
              if (
                ((typeof n == "object" && n !== null) ||
                  typeof n == "function") &&
                "type" in n &&
                n.type === o("AdsPEExportSelectedAdgroupsActionFlux").actionType
              ) {
                var s = n;
                ((this.$AdsPEExportStore$p_7 = !1),
                  this.$AdsPEExportStore$p_9(
                    "ad",
                    s.fieldOrder,
                    s.fileFormat,
                    s.userOptions,
                    d.Selected,
                  ),
                  this.__emitChange());
                break e;
              }
              if (
                ((typeof n == "object" && n !== null) ||
                  typeof n == "function") &&
                "type" in n &&
                n.type === o("AdsPEExportAllCampaignsActionFlux").actionType
              ) {
                var u = n;
                ((this.$AdsPEExportStore$p_7 = !1),
                  this.$AdsPEExportStore$p_9(
                    "ad_set",
                    null,
                    u.fileFormat,
                    u.userOptions,
                    d.All,
                  ),
                  this.__emitChange());
                break e;
              }
              if (
                ((typeof n == "object" && n !== null) ||
                  typeof n == "function") &&
                "type" in n &&
                n.type ===
                  o("AdsPEExportSelectedCampaignsCustomizedActionFlux")
                    .actionType
              ) {
                this.$AdsPEExportStore$p_10("ad_set");
                break e;
              }
              if (
                ((typeof n == "object" && n !== null) ||
                  typeof n == "function") &&
                "type" in n &&
                n.type ===
                  o("AdsPEExportSelectedCampaignsActionFlux").actionType
              ) {
                var c = n;
                ((this.$AdsPEExportStore$p_7 = !1),
                  this.$AdsPEExportStore$p_9(
                    "ad_set",
                    c.fieldOrder,
                    c.fileFormat,
                    c.userOptions,
                    d.Selected,
                  ),
                  this.__emitChange());
                break e;
              }
              if (
                ((typeof n == "object" && n !== null) ||
                  typeof n == "function") &&
                "type" in n &&
                n.type ===
                  o("AdsPEExportAllCampaignGroupsActionFlux").actionType
              ) {
                var m = n;
                ((this.$AdsPEExportStore$p_7 = !1),
                  this.$AdsPEExportStore$p_9(
                    "campaign",
                    null,
                    m.fileFormat,
                    m.userOptions,
                    d.All,
                  ),
                  this.__emitChange());
                break e;
              }
              if (
                ((typeof n == "object" && n !== null) ||
                  typeof n == "function") &&
                "type" in n &&
                n.type ===
                  o("AdsPEExportSelectedCampaignGroupsCustomizedActionFlux")
                    .actionType
              ) {
                this.$AdsPEExportStore$p_10("campaign");
                break e;
              }
              if (
                ((typeof n == "object" && n !== null) ||
                  typeof n == "function") &&
                "type" in n &&
                n.type ===
                  o("AdsPEExportSelectedCampaignGroupsActionFlux").actionType
              ) {
                var p = n;
                ((this.$AdsPEExportStore$p_7 = !1),
                  this.$AdsPEExportStore$p_9(
                    "campaign",
                    p.fieldOrder,
                    p.fileFormat,
                    p.userOptions,
                    d.Selected,
                  ),
                  this.__emitChange());
                break e;
              }
              if (
                ((typeof n == "object" && n !== null) ||
                  typeof n == "function") &&
                "type" in n &&
                n.type === o("AdsPEExportHideCustomizeActionFlux").actionType
              ) {
                ((this.$AdsPEExportStore$p_3 = !1), this.__emitChange());
                break e;
              }
              if (
                ((typeof n == "object" && n !== null) ||
                  typeof n == "function") &&
                "type" in n &&
                n.type === o("AdsPEExportHideExportAsTextActionFlux").actionType
              ) {
                ((this.$AdsPEExportStore$p_4 = !1),
                  (this.$AdsPEExportStore$p_2 = r("LoadObject").empty({
                    creatorModuleID: i.id,
                  })),
                  this.__emitChange());
                break e;
              }
              if (
                ((typeof n == "object" && n !== null) ||
                  typeof n == "function") &&
                "type" in n &&
                n.type === o("AdsPEExportHideSelectPresetActionFlux").actionType
              ) {
                ((this.$AdsPEExportStore$p_5 = !1), this.__emitChange());
                break e;
              }
              if (
                ((typeof n == "object" && n !== null) ||
                  typeof n == "function") &&
                "type" in n &&
                n.type === o("AdsPEExportShowSelectPresetActionFlux").actionType
              ) {
                ((this.$AdsPEExportStore$p_5 = !0), this.__emitChange());
                break e;
              }
              if (
                ((typeof n == "object" && n !== null) ||
                  typeof n == "function") &&
                "type" in n &&
                n.type ===
                  o("AdsPEExportShowCopyPasteWarningActionFlux").actionType
              ) {
                ((this.$AdsPEExportStore$p_6 = !0), this.__emitChange());
                break e;
              }
              if (
                ((typeof n == "object" && n !== null) ||
                  typeof n == "function") &&
                "type" in n &&
                n.type === o("AdsCopyCopyDataActionFlux").actionType
              ) {
                ((this.$AdsPEExportStore$p_6 = !1), this.__emitChange());
                break e;
              }
              if (
                ((typeof n == "object" && n !== null) ||
                  typeof n == "function") &&
                "type" in n &&
                n.type ===
                  o("AdsPEExportHideFileFormatDialogActionFlux").actionType
              ) {
                ((this.$AdsPEExportStore$p_7 = !1), this.__emitChange());
                break e;
              }
              if (
                ((typeof n == "object" && n !== null) ||
                  typeof n == "function") &&
                "type" in n &&
                n.type ===
                  o("AdsPEExportShowFileFormatDialogActionFlux").actionType
              ) {
                var _ = n;
                ((this.$AdsPEExportStore$p_7 = !0),
                  (this.$AdsPEExportStore$p_4 = !1),
                  (this.$AdsPEExportStore$p_8 = {
                    level: _.level,
                    mode: _.mode,
                    fieldOrder: _.fieldOrder,
                    presetID: _.presetID,
                  }),
                  this.__emitChange());
                break e;
              }
              if (
                ((typeof n == "object" && n !== null) ||
                  typeof n == "function") &&
                "type" in n &&
                n.type === o("AdsPEImportDownloadTemplateActionFlux").actionType
              ) {
                this.$AdsPEExportStore$p_11();
                break e;
              }
              throw Error(
                "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                  n,
              );
            }
          }),
          (a.getShowSelectPreset = function () {
            return this.$AdsPEExportStore$p_5;
          }),
          (a.getShowCopyPasteWarning = function () {
            return this.$AdsPEExportStore$p_6;
          }),
          (a.getCustomizingObjectType = function () {
            return this.$AdsPEExportStore$p_1;
          }),
          (a.isCustomizing = function () {
            return this.$AdsPEExportStore$p_3;
          }),
          (a.isShowingExportAsText = function () {
            return this.$AdsPEExportStore$p_4;
          }),
          (a.$AdsPEExportStore$p_9 = function (t, n, r, a, i) {
            if (
              ((this.$AdsPEExportStore$p_3 = !1),
              this.__emitChange(),
              r === "TEXT")
            ) {
              this.$AdsPEExportStore$p_12(t, n, a, i);
              return;
            }
            this.$AdsPEExportStore$p_13(
              t,
              n,
              o("AdsPEExportConstants").Delimiter.Tab,
              r,
              a,
              i === d.Selected
                ? function (e) {
                    return e.exportSelectedToFile();
                  }
                : function (e) {
                    return e.exportAllToFile();
                  },
            );
          }),
          (a.$AdsPEExportStore$p_12 = function (t, n, a, l) {
            ((this.$AdsPEExportStore$p_2 = r("LoadObject").loading({
              creatorModuleID: i.id,
            })),
              (this.$AdsPEExportStore$p_4 = !0),
              this.$AdsPEExportStore$p_13(
                t,
                n,
                o("AdsPEExportConstants").Delimiter.Tab,
                "TEXT",
                a,
                l === d.Selected
                  ? function (e) {
                      return r("promiseDone")(
                        e.exportSelectedAsString(),
                        function (e) {
                          return r("AdsPEExportCompletedTextAction").dispatch(
                            { data: e },
                            {
                              line: "429",
                              module: "AdsPEExportStore.js",
                              moduleID: i.id,
                            },
                          );
                        },
                      );
                    }
                  : function (e) {
                      return r("promiseDone")(
                        e.exportAllAsString(),
                        function (e) {
                          return r("AdsPEExportCompletedTextAction").dispatch(
                            { data: e },
                            {
                              line: "435",
                              module: "AdsPEExportStore.js",
                              moduleID: i.id,
                            },
                          );
                        },
                      );
                    },
              ));
          }),
          (a.$AdsPEExportStore$p_10 = function (t) {
            ((this.$AdsPEExportStore$p_1 = t),
              (this.$AdsPEExportStore$p_3 = !0),
              this.__emitChange());
          }),
          (a.$AdsPEExportStore$p_13 = function (t, n, o, a, i, l) {
            var e;
            e: {
              if (t === "ad") {
                r("JSResource").loadAll(
                  [
                    r("JSResource")("AdsPEAdExporter").__setRef(
                      "AdsPEExportStore",
                    ),
                  ],
                  function (t) {
                    ((e = new t(n, {
                      fileFormat: a,
                      delimiter: o,
                      userOptions: i,
                    })),
                      l(e));
                  },
                );
                break e;
              }
              if (t === "ad_set") {
                r("JSResource").loadAll(
                  [
                    r("JSResource")("AdsPECampaignExporter").__setRef(
                      "AdsPEExportStore",
                    ),
                  ],
                  function (t) {
                    ((e = new t(n, {
                      fileFormat: a,
                      delimiter: o,
                      userOptions: i,
                    })),
                      l(e));
                  },
                );
                break e;
              }
              if (t === "campaign") {
                r("JSResource").loadAll(
                  [
                    r("JSResource")("AdsPECampaignGroupExporter").__setRef(
                      "AdsPEExportStore",
                    ),
                  ],
                  function (t) {
                    ((e = new t(n, {
                      fileFormat: a,
                      delimiter: o,
                      userOptions: i,
                    })),
                      l(e));
                  },
                );
                break e;
              }
              {
                s(0, 12340, t);
                break e;
              }
            }
          }),
          (a.$AdsPEExportStore$p_11 = function () {
            var e = r("AdsAccountStore").getSelectedAccountID();
            e != null || s(0, 116802);
            var t = r("XAdsManagerTemplateControllerRouteBuilder").buildUri({
              account_id: e,
            });
            (u || (u = r("ExecutionEnvironment"))).canUseDOM &&
              window.open(t.toString());
          }),
          n
        );
      })(r("FluxStore"));
    m.__moduleID = i.id;
    var p = new m();
    l.default = p;
  },
  98,
);
