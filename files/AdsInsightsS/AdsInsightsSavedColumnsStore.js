__d(
  "AdsInsightsSavedColumnsStore",
  [
    "invariant",
    "AdFLEXConfig",
    "AdsAccountStore",
    "AdsApplicationUtils",
    "AdsDataAtom",
    "AdsInsightsAttributionWindows",
    "AdsInsightsBuiltinColumnPresetConfig",
    "AdsInsightsColumnPresetDataDispatcher",
    "AdsInsightsColumnUtil",
    "AdsInsightsCreateColumnPresetActionFlux",
    "AdsInsightsCreateColumnPresetSuccessActionFlux",
    "AdsInsightsDeleteColumnPresetActionFlux",
    "AdsInsightsDeleteColumnPresetErrorActionFlux",
    "AdsInsightsFetchColumnPresetErrorActionFlux",
    "AdsInsightsFetchColumnPresetSuccessActionFlux",
    "AdsInsightsSetAttributionSettingColumnAddedActionFlux",
    "AdsInsightsUpdateColumnPresetActionFlux",
    "AdsInsightsUpdateColumnPresetErrorActionFlux",
    "AdsInterfacesRouteUpdateParamsDataActionFlux",
    "AdsMgmtAdAccountUserSettingsAPIErrorActionFlux",
    "AdsMgmtFlow11_1CustomColumnSaveGatingUtils",
    "FluxStore",
    "LoadObject",
    "adsPENavStateSelector",
    "areEqual",
    "err",
    "filterObject",
    "isTruthy",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = (function (t) {
        function n() {
          var n;
          return (
            (n = t.call(this, e || (e = r("AdsDataAtom"))) || this),
            (n.findByContent = function (e, t, a, i) {
              var l = n.$AdsInsightsSavedColumnsStore$p_5[e]
                  ? n.$AdsInsightsSavedColumnsStore$p_5[e].hasValue()
                    ? n.$AdsInsightsSavedColumnsStore$p_5[e].getValueEnforcing()
                    : []
                  : [],
                s = l.find(function (e) {
                  var o = n.get(e);
                  return (
                    (i ||
                      (u || (u = r("areEqual")))(a, o.attributionWindows)) &&
                    (u || (u = r("areEqual")))(t, o.columnIDs)
                  );
                });
              return (
                r("isTruthy")(s) ||
                  (s = n.$AdsInsightsSavedColumnsStore$p_3.find(function (e) {
                    var l = n.getBuiltin(e);
                    return (
                      (i ||
                        (u || (u = r("areEqual")))(
                          a,
                          o(
                            "AdsInsightsAttributionWindows",
                          ).getDefaultWindows(),
                        )) &&
                      (u || (u = r("areEqual")))(t, l.specializeColumnIDs())
                    );
                  })),
                s
              );
            }),
            (n.findByName = function (e, t) {
              var o = n.$AdsInsightsSavedColumnsStore$p_5[e].hasValue()
                  ? n.$AdsInsightsSavedColumnsStore$p_5[e].getValueEnforcing()
                  : [],
                a = o.find(function (e) {
                  return n.get(e).name === t;
                });
              return r("isTruthy")(a)
                ? a
                : n.$AdsInsightsSavedColumnsStore$p_3.find(function (e) {
                    return n.getBuiltin(e).name === t;
                  });
            }),
            (n.get = function (e, t) {
              var r = n.getOrNull(e, t);
              return (
                r || s(0, 625, e),
                r &&
                  (r.columnIDs = o("AdsInsightsColumnUtil").getColumnsInOrder(
                    r.columnIDs,
                  )),
                r
              );
            }),
            (n.getOrNull = function (e, t) {
              var o = n.$AdsInsightsSavedColumnsStore$p_8[e] || e;
              return (
                n.$AdsInsightsSavedColumnsStore$p_4[o] ||
                (r("isTruthy")(t)
                  ? n.$AdsInsightsSavedColumnsStore$p_6[o]
                  : void 0)
              );
            }),
            (n.getBuiltin = function (e) {
              var t = n.getBuiltinOrNull(e);
              return (t || s(0, 626, e), t);
            }),
            (n.getBuiltinOrNull = function (e) {
              return (
                n.$AdsInsightsSavedColumnsStore$p_12(),
                n.$AdsInsightsSavedColumnsStore$p_2[e]
              );
            }),
            (n.getBuiltinColumnPresets = function () {
              return (
                n.$AdsInsightsSavedColumnsStore$p_12(),
                n.$AdsInsightsSavedColumnsStore$p_3.map(function (e) {
                  return n.$AdsInsightsSavedColumnsStore$p_2[e];
                })
              );
            }),
            (n.getAllColumnPresets = function (e) {
              var t;
              n.$AdsInsightsSavedColumnsStore$p_1[e] ||
                (n.$AdsInsightsSavedColumnsStore$p_1[e] =
                  n.$AdsInsightsSavedColumnsStore$p_14(e));
              var o = n.$AdsInsightsSavedColumnsStore$p_1[e],
                a =
                  r("AdFLEXConfig") == null ||
                  (t = r("AdFLEXConfig").get()) == null
                    ? void 0
                    : t.excludedColumnPreset;
              return a != null
                ? o.filter(function (e) {
                    return e.id !== a;
                  })
                : n.$AdsInsightsSavedColumnsStore$p_1[e];
            }),
            (n.makeTemporaryID = function () {
              return (
                "temp_column_preset_" + n.$AdsInsightsSavedColumnsStore$p_10++
              );
            }),
            (n.isAttributionSettingColumnAddedToCustomPreset = function () {
              return n.$AdsInsightsSavedColumnsStore$p_11;
            }),
            (n.$AdsInsightsSavedColumnsStore$p_1 = {}),
            (n.$AdsInsightsSavedColumnsStore$p_3 = []),
            (n.$AdsInsightsSavedColumnsStore$p_2 = {}),
            (n.$AdsInsightsSavedColumnsStore$p_5 = {}),
            (n.$AdsInsightsSavedColumnsStore$p_4 = {}),
            (n.$AdsInsightsSavedColumnsStore$p_6 = {}),
            (n.$AdsInsightsSavedColumnsStore$p_8 = {}),
            (n.$AdsInsightsSavedColumnsStore$p_10 = 0),
            (n.$AdsInsightsSavedColumnsStore$p_7 = !1),
            (n.$AdsInsightsSavedColumnsStore$p_11 = !1),
            o("AdsApplicationUtils").isCampaignManager()
              ? (n.$AdsInsightsSavedColumnsStore$p_9 = "MANAGE_ADS_CM")
              : o("AdsApplicationUtils").isPowerEditor() &&
                ((n.$AdsInsightsSavedColumnsStore$p_9 = r(
                  "adsPENavStateSelector",
                )().tool),
                n.$AdsInsightsSavedColumnsStore$p_9 ||
                  (n.$AdsInsightsSavedColumnsStore$p_9 = "MANAGE_ADS")),
            n
          );
        }
        (babelHelpers.inheritsLoose(n, t),
          (n.getStores = function () {
            return [r("AdsAccountStore")];
          }));
        var a = n.prototype;
        return (
          (a.__getActionTypes = function () {
            return [
              o("AdsInterfacesRouteUpdateParamsDataActionFlux").actionType,
              o("AdsInsightsCreateColumnPresetActionFlux").actionType,
              o("AdsInsightsCreateColumnPresetSuccessActionFlux").actionType,
              o("AdsInsightsFetchColumnPresetErrorActionFlux").actionType,
              o("AdsInsightsDeleteColumnPresetErrorActionFlux").actionType,
              o("AdsInsightsUpdateColumnPresetErrorActionFlux").actionType,
              o("AdsInsightsFetchColumnPresetSuccessActionFlux").actionType,
              o("AdsInsightsDeleteColumnPresetActionFlux").actionType,
              o("AdsInsightsUpdateColumnPresetActionFlux").actionType,
              o("AdsMgmtAdAccountUserSettingsAPIErrorActionFlux").actionType,
              o("AdsInsightsSetAttributionSettingColumnAddedActionFlux")
                .actionType,
            ];
          }),
          (a.$AdsInsightsSavedColumnsStore$p_13 = function (t) {
            this.$AdsInsightsSavedColumnsStore$p_5[t] == null &&
              (o("AdsInsightsColumnPresetDataDispatcher").loadColumnPresets(t),
              (this.$AdsInsightsSavedColumnsStore$p_5[t] = r(
                "LoadObject",
              ).loading({ creatorModuleID: i.id })));
          }),
          (a.getColumnPresets = function (t) {
            var e = this;
            return (
              this.$AdsInsightsSavedColumnsStore$p_13(t),
              this.$AdsInsightsSavedColumnsStore$p_5[t].map(function (t) {
                return t.map(function (t) {
                  return e.$AdsInsightsSavedColumnsStore$p_4[t];
                });
              })
            );
          }),
          (a.__onDispatch = function (t) {
            var e = t.action;
            switch (e.type) {
              case o("AdsInterfacesRouteUpdateParamsDataActionFlux").actionType:
                e.data.params.tool !== this.$AdsInsightsSavedColumnsStore$p_9 &&
                  ((this.$AdsInsightsSavedColumnsStore$p_9 =
                    e.data.params.tool),
                  (this.$AdsInsightsSavedColumnsStore$p_7 = !1),
                  this.__emitChange());
                break;
              case o("AdsInsightsCreateColumnPresetActionFlux").actionType:
                this.$AdsInsightsSavedColumnsStore$p_15(e.columnPreset);
                break;
              case o("AdsInsightsCreateColumnPresetSuccessActionFlux")
                .actionType:
                this.$AdsInsightsSavedColumnsStore$p_16(e.oldID, e.newID);
                break;
              case o("AdsMgmtAdAccountUserSettingsAPIErrorActionFlux")
                .actionType:
                e.fieldSet === "column" &&
                  typeof e.accountID == "string" &&
                  this.$AdsInsightsSavedColumnsStore$p_17(e.accountID);
                break;
              case o("AdsInsightsFetchColumnPresetErrorActionFlux").actionType:
              case o("AdsInsightsDeleteColumnPresetErrorActionFlux").actionType:
              case o("AdsInsightsUpdateColumnPresetErrorActionFlux").actionType:
                this.$AdsInsightsSavedColumnsStore$p_17(e.accountID);
                break;
              case o("AdsInsightsFetchColumnPresetSuccessActionFlux")
                .actionType:
                this.$AdsInsightsSavedColumnsStore$p_18(
                  e.accountID,
                  r("nullthrows")(e.columnPresets),
                );
                break;
              case o("AdsInsightsDeleteColumnPresetActionFlux").actionType:
                this.$AdsInsightsSavedColumnsStore$p_19(e.id);
                break;
              case o("AdsInsightsUpdateColumnPresetActionFlux").actionType:
                this.$AdsInsightsSavedColumnsStore$p_20(e.columnPreset);
                break;
              case o("AdsInsightsSetAttributionSettingColumnAddedActionFlux")
                .actionType:
                this.$AdsInsightsSavedColumnsStore$p_11 = e.isAdded;
                break;
            }
          }),
          (a.$AdsInsightsSavedColumnsStore$p_15 = function (t) {
            this.$AdsInsightsSavedColumnsStore$p_4[t.id] = t;
            var e = this.$AdsInsightsSavedColumnsStore$p_5[t.accountID].value;
            (e || s(0, 627),
              e.push(t.id),
              o(
                "AdsMgmtFlow11_1CustomColumnSaveGatingUtils",
              ).getIsAccountInFlow11_1CustomColumnSaveWithoutExposure() &&
                this.$AdsInsightsSavedColumnsStore$p_21(),
              o("AdsInsightsColumnPresetDataDispatcher").createColumnPreset(t));
          }),
          (a.$AdsInsightsSavedColumnsStore$p_16 = function (t, n) {
            ((this.$AdsInsightsSavedColumnsStore$p_4[n] = babelHelpers.extends(
              {},
              this.$AdsInsightsSavedColumnsStore$p_4[t],
              { id: n },
            )),
              delete this.$AdsInsightsSavedColumnsStore$p_4[t]);
            var e = this.$AdsInsightsSavedColumnsStore$p_4[n].accountID;
            ((this.$AdsInsightsSavedColumnsStore$p_5[e] =
              this.$AdsInsightsSavedColumnsStore$p_5[e].map(function (e) {
                return e.map(function (e) {
                  return e === t ? n : e;
                });
              })),
              (this.$AdsInsightsSavedColumnsStore$p_8[t] = n),
              this.$AdsInsightsSavedColumnsStore$p_21(),
              this.__emitChange());
          }),
          (a.$AdsInsightsSavedColumnsStore$p_19 = function (t) {
            var e = this.$AdsInsightsSavedColumnsStore$p_4[t];
            (delete this.$AdsInsightsSavedColumnsStore$p_4[t],
              (this.$AdsInsightsSavedColumnsStore$p_5[e.accountID] =
                this.$AdsInsightsSavedColumnsStore$p_5[e.accountID].map(
                  function (e) {
                    return e.filter(function (e) {
                      return e !== t;
                    });
                  },
                )),
              o("AdsInsightsColumnPresetDataDispatcher").deleteColumnPreset(e),
              (this.$AdsInsightsSavedColumnsStore$p_8 = r("filterObject")(
                this.$AdsInsightsSavedColumnsStore$p_8,
                function (e) {
                  return e !== t;
                },
              )),
              (this.$AdsInsightsSavedColumnsStore$p_6[t] = e),
              this.$AdsInsightsSavedColumnsStore$p_21(),
              this.__emitChange());
          }),
          (a.$AdsInsightsSavedColumnsStore$p_17 = function (t) {
            ((this.$AdsInsightsSavedColumnsStore$p_5[t] = r(
              "LoadObject",
            ).withError(r("err")(""), { creatorModuleID: i.id })),
              this.$AdsInsightsSavedColumnsStore$p_21(),
              this.__emitChange());
          }),
          (a.$AdsInsightsSavedColumnsStore$p_18 = function (t, n) {
            var e = this;
            (n.forEach(function (t) {
              return (e.$AdsInsightsSavedColumnsStore$p_4[t.id] = t);
            }),
              (this.$AdsInsightsSavedColumnsStore$p_5[t] = r(
                "LoadObject",
              ).withValue(
                n.map(function (e) {
                  return e.id;
                }),
                { creatorModuleID: i.id },
              )),
              this.$AdsInsightsSavedColumnsStore$p_21(),
              this.__emitChange());
          }),
          (a.$AdsInsightsSavedColumnsStore$p_22 = function () {
            var e = [],
              t = r("AdsAccountStore").getSelectedAccount();
            return (
              t.isDone() &&
                t.hasValue() &&
                (e = t.getValueEnforcing().capabilities),
              e
            );
          }),
          (a.$AdsInsightsSavedColumnsStore$p_23 = function () {
            return o("AdsInsightsBuiltinColumnPresetConfig").getIDs(
              this.$AdsInsightsSavedColumnsStore$p_22(),
            );
          }),
          (a.$AdsInsightsSavedColumnsStore$p_12 = function () {
            var e = this;
            if (!this.$AdsInsightsSavedColumnsStore$p_7) {
              this.$AdsInsightsSavedColumnsStore$p_3 =
                this.$AdsInsightsSavedColumnsStore$p_23();
              var t = o("AdsInsightsBuiltinColumnPresetConfig").build(
                this.$AdsInsightsSavedColumnsStore$p_22(),
              );
              ((this.$AdsInsightsSavedColumnsStore$p_2 = {}),
                this.$AdsInsightsSavedColumnsStore$p_3.forEach(function (n) {
                  return (e.$AdsInsightsSavedColumnsStore$p_2[n] = r(
                    "nullthrows",
                  )(
                    t.find(function (e) {
                      return e.id === n;
                    }),
                  ));
                }),
                (this.$AdsInsightsSavedColumnsStore$p_7 = !0));
            }
          }),
          (a.$AdsInsightsSavedColumnsStore$p_14 = function (t) {
            var e = this.getColumnPresets(t);
            return [].concat(
              this.getBuiltinColumnPresets(),
              e.hasValue() ? e.getValueEnforcing() : [],
            );
          }),
          (a.$AdsInsightsSavedColumnsStore$p_21 = function () {
            this.$AdsInsightsSavedColumnsStore$p_1 = {};
          }),
          (a.$AdsInsightsSavedColumnsStore$p_20 = function (t) {
            ((this.$AdsInsightsSavedColumnsStore$p_4[t.id] = t),
              o("AdsInsightsColumnPresetDataDispatcher").updateColumnPreset(t),
              this.$AdsInsightsSavedColumnsStore$p_21(),
              this.__emitChange());
          }),
          n
        );
      })(r("FluxStore"));
    c.__moduleID = i.id;
    var d = new c();
    l.default = d;
  },
  98,
);
