__d(
  "TargetingSpecStore",
  [
    "invariant",
    "AdsAPITargetFields",
    "AdsBulkValueUtils",
    "AdsCommonTargetingApiTransformer",
    "AdsCommonTargetingProperties",
    "AdsCommonTargetingTargetingChangeActionFlux",
    "AdsCommonTargetingTargetingInitDataActionFlux",
    "AdsDataAtom",
    "AdsEmptyValue",
    "AdsMixedValue",
    "AdsTargetingLoadTimeInitTargetingContainerActionFlux",
    "AdsTargetingResetMixStateComponentDataActionFlux",
    "AdsTargetingSetTargetingApiSpecDataActionFlux",
    "AdsTargetingSetTargetingBulkApiSpecDataActionFlux",
    "AdsTargetingUpdateTargetingSpecDataActionFlux",
    "AdsUEditorCampaignSetAdvantageAudienceActionFlux",
    "AdsUEditorCampaignSetUserAgeUnknownActionFlux",
    "AdsUEditorCampaignTargetingSetAgeMaxAndAgeMinActionFlux",
    "AdsUEditorCampaignTargetingSetAppInstallStateActionFlux",
    "AdsUEditorCampaignTargetingSetBroadGeoTargetingAutomationActionFlux",
    "AdsUEditorCampaignTargetingSetCustomAudiencesActionFlux",
    "AdsUEditorCampaignTargetingSetFlexibleTargetingActionFlux",
    "AdsUEditorCampaignTargetingSetGendersActionFlux",
    "AdsUEditorCampaignTargetingSetGeoLocationsActionFlux",
    "AdsUEditorCampaignTargetingSetLocalesActionFlux",
    "AdsUEditorCampaignTargetingSetRelaxationActionFlux",
    "AdsUEditorCampaignTargetingSetTargetingOptimizationActionFlux",
    "AdsUniformValue",
    "TargetingConditionalReduceStore",
    "TargetingViewConfig",
    "immutable",
    "targetingBulkSpecGetBulkApiSpecFromState",
    "targetingBulkSpecGetTargetingApiSpecFromState",
    "targetingBulkSpecGetTargetingSpecFromState",
    "targetingBulkSpecProcessSpecChangeForCustomAudience",
    "targetingBulkSpecProcessSpecChangedOnCustomAudienceBulkValue",
    "targetingBulkSpecProcessSpecChangedOnDetailedTargetingBulkValue",
    "targetingBulkSpecProcessSpecChangedOnLocaleBulkValue",
    "targetingBulkSpecSeparateBulkValueSpecToFlatAndMixed",
    "trimObject",
    "whitelistObjectKeys",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.getInitialState = function () {
            return r("immutable").Map({});
          }),
          (n.__getActionTypes = function () {
            return [
              o("AdsTargetingLoadTimeInitTargetingContainerActionFlux")
                .actionType,
              o("AdsCommonTargetingTargetingInitDataActionFlux").actionType,
              o("AdsTargetingResetMixStateComponentDataActionFlux").actionType,
              o("AdsTargetingSetTargetingBulkApiSpecDataActionFlux").actionType,
              o("AdsTargetingSetTargetingApiSpecDataActionFlux").actionType,
              o("AdsTargetingUpdateTargetingSpecDataActionFlux").actionType,
              o("AdsCommonTargetingTargetingChangeActionFlux").actionType,
              o("AdsUEditorCampaignTargetingSetAgeMaxAndAgeMinActionFlux")
                .actionType,
              r("AdsUEditorCampaignTargetingSetAppInstallStateActionFlux")
                .actionType,
              r("AdsUEditorCampaignSetUserAgeUnknownActionFlux").actionType,
              o("AdsUEditorCampaignTargetingSetGendersActionFlux").actionType,
              r("AdsUEditorCampaignTargetingSetLocalesActionFlux").actionType,
              o("AdsUEditorCampaignTargetingSetGeoLocationsActionFlux")
                .actionType,
              o("AdsUEditorCampaignTargetingSetTargetingOptimizationActionFlux")
                .actionType,
              o("AdsUEditorCampaignSetAdvantageAudienceActionFlux").actionType,
              r("AdsUEditorCampaignTargetingSetRelaxationActionFlux")
                .actionType,
              r(
                "AdsUEditorCampaignTargetingSetBroadGeoTargetingAutomationActionFlux",
              ).actionType,
              r("AdsUEditorCampaignTargetingSetCustomAudiencesActionFlux")
                .actionType,
              r("AdsUEditorCampaignTargetingSetFlexibleTargetingActionFlux")
                .actionType,
            ];
          }),
          (n.getValue = function (t) {
            var e = this.getState().get(t);
            return e instanceof r("AdsUniformValue") ? e.getValue() : void 0;
          }),
          (n.getTypedValue = function (t) {
            var e = this.getState().get(t);
            return e instanceof r("AdsUniformValue") ? e.getValue() : void 0;
          }),
          (n.getValues = function (t) {
            var e = this;
            return t.reduce(function (t, n) {
              return ((t[n] = e.getValue(n)), t);
            }, {});
          }),
          (n.getBulkApiSpec = function () {
            return r("targetingBulkSpecGetBulkApiSpecFromState")(
              this.getState(),
            );
          }),
          (n.getTargetingSpec = function () {
            return r("targetingBulkSpecGetTargetingSpecFromState")(
              this.getState(),
            );
          }),
          (n.getTargetingApiSpec = function () {
            return r("targetingBulkSpecGetTargetingApiSpecFromState")(
              this.getState(),
            );
          }),
          (n.getBulkSpec = function () {
            return this.getState().toObject();
          }),
          (n.reduceIfActive = function (t, n) {
            var e = n.action;
            switch (e.type) {
              case o("AdsCommonTargetingTargetingInitDataActionFlux")
                .actionType:
                return this.getInitialState();
              case o("AdsTargetingResetMixStateComponentDataActionFlux")
                .actionType:
                return this.$TargetingSpecStore$p_1(t, e.component);
              case o("AdsTargetingSetTargetingBulkApiSpecDataActionFlux")
                .actionType:
                return this.$TargetingSpecStore$p_2(e.spec, e.behaviors);
              case o("AdsTargetingSetTargetingApiSpecDataActionFlux")
                .actionType:
                return this.$TargetingSpecStore$p_3(e.spec, e.behaviors);
              case o("AdsTargetingUpdateTargetingSpecDataActionFlux")
                .actionType:
                return this.$TargetingSpecStore$p_4(t, e.spec);
              case o("AdsCommonTargetingTargetingChangeActionFlux").actionType:
                return this.$TargetingSpecStore$p_4(t, e);
              case o("AdsUEditorCampaignTargetingSetAgeMaxAndAgeMinActionFlux")
                .actionType:
                return e.triggerAgeRangeAction
                  ? this.$TargetingSpecStore$p_5(t, e.ageMax, e.ageMin)
                  : this.$TargetingSpecStore$p_6(
                      t,
                      e.ageMax,
                      e.ageMin,
                      e.allowAgeRangeField,
                    );
              case o("AdsUEditorCampaignTargetingSetGendersActionFlux")
                .actionType:
                return this.$TargetingSpecStore$p_7(t, e.genders);
              case r("AdsUEditorCampaignTargetingSetLocalesActionFlux")
                .actionType:
                return this.$TargetingSpecStore$p_8(t, e.locales);
              case r("AdsUEditorCampaignTargetingSetCustomAudiencesActionFlux")
                .actionType:
                return this.$TargetingSpecStore$p_9(
                  t,
                  e.customAudiences,
                  e.excludedCustomAudiences,
                  e.supportBulkEdit,
                  e.oldAudiencesToNewAudiencesMap,
                );
              case r(
                "AdsUEditorCampaignTargetingSetFlexibleTargetingActionFlux",
              ).actionType:
                return this.$TargetingSpecStore$p_10(
                  t,
                  e.flexibleSpec,
                  e.mutationType,
                  e.boxPosition,
                  e.changedEntries,
                );
              case o("AdsUEditorCampaignTargetingSetGeoLocationsActionFlux")
                .actionType:
                return this.$TargetingSpecStore$p_11(
                  t,
                  e.geoLocations,
                  e.excludedGeoLocations,
                  e.applyToGeoInclusionOnly,
                );
              case o(
                "AdsUEditorCampaignTargetingSetTargetingOptimizationActionFlux",
              ).actionType:
                return this.$TargetingSpecStore$p_12(
                  t,
                  e.targetingOptimization,
                );
              case r("AdsUEditorCampaignTargetingSetRelaxationActionFlux")
                .actionType:
                return this.$TargetingSpecStore$p_13(
                  t,
                  e.targetingRelaxationTypes,
                );
              case o("AdsUEditorCampaignSetAdvantageAudienceActionFlux")
                .actionType:
                return this.$TargetingSpecStore$p_14(t, e.targetingAutomation);
              case r("AdsUEditorCampaignSetUserAgeUnknownActionFlux")
                .actionType:
                return this.$TargetingSpecStore$p_15(t, e.value);
              case r("AdsUEditorCampaignTargetingSetAppInstallStateActionFlux")
                .actionType:
                return this.$TargetingSpecStore$p_16(t, e.appInstallState);
              case r(
                "AdsUEditorCampaignTargetingSetBroadGeoTargetingAutomationActionFlux",
              ).actionType:
                return this.$TargetingSpecStore$p_14(t, e.targetingAutomation);
              default:
                return t;
            }
          }),
          (n.$TargetingSpecStore$p_15 = function (t, n) {
            return n == null
              ? t.delete("userAgeUnknown")
              : t.set("userAgeUnknown", new (r("AdsUniformValue"))(n));
          }),
          (n.$TargetingSpecStore$p_16 = function (t, n) {
            return n == null
              ? t.delete("appInstallState")
              : t.set("appInstallState", new (r("AdsUniformValue"))(n));
          }),
          (n.$TargetingSpecStore$p_2 = function (t, n) {
            this.$TargetingSpecStore$p_17(
              t,
              r("AdsAPITargetFields").FLEXIBLE_SPEC,
              r("AdsAPITargetFields").EXCLUSIONS,
            );
            var e = r("targetingBulkSpecSeparateBulkValueSpecToFlatAndMixed")(
                t,
              ),
              a = e.flatSpec,
              i = e.mixedValueSpec,
              l = o("AdsCommonTargetingApiTransformer").fromApi(a, n);
            Object.entries(l).forEach(function (e) {
              var t = e[0],
                n = e[1];
              l[t] = r("AdsUniformValue").create([n]);
            });
            var s = this.$TargetingSpecStore$p_18(i, n);
            return s
              ? this.getInitialState().merge(l).merge(s)
              : this.getInitialState().merge(l);
          }),
          (n.$TargetingSpecStore$p_17 = function (t, n, o) {
            var e = t[n],
              a = t[o];
            if (
              e instanceof r("AdsMixedValue") &&
              a instanceof r("AdsUniformValue")
            ) {
              var i = e.getValues().length;
              t[o] = r("AdsMixedValue").create(Array(i).fill(a.getValue()));
            } else if (
              e instanceof r("AdsUniformValue") &&
              a instanceof r("AdsMixedValue")
            ) {
              var l = a.getValues().length;
              t[n] = r("AdsMixedValue").create(Array(l).fill(e.getValue()));
            }
          }),
          (n.$TargetingSpecStore$p_18 = function (t, n) {
            var e = {},
              a = Object.values(t).length;
            if (a === 0) return null;
            var i = o("AdsBulkValueUtils").deaggregateDeep(
              t,
              t[Object.keys(t)[0]].getValues().length,
            );
            i = i.map(function (e) {
              return r("trimObject")(
                o("AdsCommonTargetingApiTransformer").fromApi(e, n, !0),
              );
            });
            var l = i.reduce(function (e, t) {
              return [].concat(Object.keys(t), e);
            }, []);
            return (
              new Set(l).forEach(function (t) {
                e[t] = r("AdsMixedValue").create(
                  i.map(function (e) {
                    return e[t];
                  }),
                );
              }),
              e
            );
          }),
          (n.$TargetingSpecStore$p_3 = function (t, n) {
            var e = o("AdsCommonTargetingApiTransformer").fromApi(t, n);
            return (
              Object.entries(e).forEach(function (t) {
                var n = t[0],
                  o = t[1];
                e[n] = r("AdsUniformValue").create([o]);
              }),
              this.getInitialState().merge(e)
            );
          }),
          (n.$TargetingSpecStore$p_12 = function (t, n) {
            var e =
              n == null
                ? { targetingOptimization: r("AdsEmptyValue").instance() }
                : { targetingOptimization: new (r("AdsUniformValue"))(n) };
            return t.merge(e);
          }),
          (n.$TargetingSpecStore$p_13 = function (t, n) {
            var e =
              n == null
                ? { targetingRelaxationTypes: r("AdsEmptyValue").instance() }
                : { targetingRelaxationTypes: new (r("AdsUniformValue"))(n) };
            return t.merge(e);
          }),
          (n.$TargetingSpecStore$p_10 = function (t, n, o, a, i) {
            var e = r(
                "targetingBulkSpecProcessSpecChangedOnDetailedTargetingBulkValue",
              )(t.get(r("AdsAPITargetFields").FLEXIBLE_SPEC), n, o, a, i || []),
              l =
                e == null
                  ? { flexibleSpec: r("AdsEmptyValue").instance() }
                  : { flexibleSpec: e };
            return t.merge(l);
          }),
          (n.$TargetingSpecStore$p_9 = function (t, n, o, a, i) {
            if (a) {
              var e = r("targetingBulkSpecProcessSpecChangeForCustomAudience")(
                  t.get("customAudiences"),
                  t.get("flexibleSpec"),
                  n,
                  i,
                ),
                l = e.customAudiences,
                s = e.flexibleSpec,
                u = r(
                  "targetingBulkSpecProcessSpecChangedOnCustomAudienceBulkValue",
                )(t.get("excludedCustomAudiences"), o, i),
                c = {
                  customAudiences:
                    l != null ? l : r("AdsEmptyValue").instance(),
                  excludedCustomAudiences:
                    u != null ? u : r("AdsEmptyValue").instance(),
                };
              return (s != null && (c.flexibleSpec = s), t.merge(c));
            }
            var d = t.get("flexibleSpec");
            if (d != null) {
              var m = r("targetingBulkSpecProcessSpecChangeForCustomAudience")(
                  t.get("customAudiences"),
                  d,
                  n,
                  i,
                ),
                p = m.customAudiences,
                _ = m.flexibleSpec,
                f = {
                  customAudiences:
                    p != null ? p : r("AdsEmptyValue").instance(),
                  excludedCustomAudiences: new (r("AdsUniformValue"))(o),
                };
              return (_ != null && (f.flexibleSpec = _), t.merge(f));
            }
            return t.merge({
              customAudiences: new (r("AdsUniformValue"))(n),
              excludedCustomAudiences: new (r("AdsUniformValue"))(o),
            });
          }),
          (n.$TargetingSpecStore$p_14 = function (t, n) {
            var e =
              n == null
                ? { targetingAutomation: r("AdsEmptyValue").instance() }
                : { targetingAutomation: new (r("AdsUniformValue"))(n) };
            return t.merge(e);
          }),
          (n.$TargetingSpecStore$p_11 = function (t, n, o, a) {
            return (
              o === void 0 && (o = {}),
              a === !0
                ? t.merge({ geoLocations: new (r("AdsUniformValue"))(n) })
                : t.merge({
                    geoLocations: new (r("AdsUniformValue"))(n),
                    excludedGeoLocations: new (r("AdsUniformValue"))(o),
                  })
            );
          }),
          (n.$TargetingSpecStore$p_8 = function (t, n) {
            var e,
              o =
                ((e = {}),
                (e[r("AdsAPITargetFields").LOCALES] = new (r(
                  "AdsUniformValue",
                ))(n)),
                e);
            return t.merge(o);
          }),
          (n.$TargetingSpecStore$p_7 = function (t, n) {
            var e,
              o =
                ((e = {}),
                (e[r("AdsAPITargetFields").GENDERS] = new (r(
                  "AdsUniformValue",
                ))(n)),
                e);
            return t.merge(o);
          }),
          (n.$TargetingSpecStore$p_6 = function (t, n, o, a) {
            var e = {
              ageMax: new (r("AdsUniformValue"))(n),
              ageMin: new (r("AdsUniformValue"))(o),
            };
            if (a) {
              var i,
                l =
                  ((i = t.get("ageRange")) == null
                    ? void 0
                    : i.getValueForIndex(0)) || [],
                s = l[0];
              if (s != null && s < o) {
                var u = l[1];
                return t.merge(
                  babelHelpers.extends({}, e, {
                    ageRange: new (r("AdsUniformValue"))([
                      o,
                      u != null && u > o ? u : n,
                    ]),
                  }),
                );
              }
            }
            return t.merge(e);
          }),
          (n.$TargetingSpecStore$p_5 = function (t, n, o) {
            var e = { ageRange: new (r("AdsUniformValue"))([o, n]) };
            return t.merge(e);
          }),
          (n.$TargetingSpecStore$p_4 = function (t, n) {
            var e = r("whitelistObjectKeys")(
              n,
              r("AdsCommonTargetingProperties"),
            );
            return (
              Object.entries(e).forEach(function (o) {
                var a = o[0],
                  i = o[1];
                if (n.supportBulkEdit)
                  if ((i instanceof Array || s(0, 2578), a === "locales"))
                    e[a] = r(
                      "targetingBulkSpecProcessSpecChangedOnLocaleBulkValue",
                    )(t.get(a), i);
                  else if (a === "customAudiences") {
                    var l = r(
                        "targetingBulkSpecProcessSpecChangeForCustomAudience",
                      )(
                        t.get(a),
                        t.get("flexibleSpec"),
                        i,
                        n.oldAudiencesToNewAudiencesMap,
                      ),
                      u = l.customAudiences,
                      c = l.flexibleSpec;
                    ((e.customAudiences = u),
                      c != null && (e.flexibleSpec = c));
                  } else
                    a === "excludedCustomAudiences"
                      ? (e[a] = r(
                          "targetingBulkSpecProcessSpecChangedOnCustomAudienceBulkValue",
                        )(t.get(a), i, n.oldAudiencesToNewAudiencesMap))
                      : a === "flexibleSpec"
                        ? (e[a] = r(
                            "targetingBulkSpecProcessSpecChangedOnDetailedTargetingBulkValue",
                          )(
                            t.get(a),
                            i,
                            n.mutationType,
                            n.boxPosition,
                            n.changedEntries || [],
                          ))
                        : s(0, 2579, a);
                else
                  n[a] === null
                    ? (e[a] = r("AdsEmptyValue").instance())
                    : (e[a] = r("AdsUniformValue").create([i]));
              }),
              t.merge(e)
            );
          }),
          (n.$TargetingSpecStore$p_1 = function (t, n) {
            var e = o("TargetingViewConfig").getFieldsForComponent({
                displayName: n.displayName,
                name: n.name,
                targetingSpecFields: n.targetingSpecFields,
              }),
              a = e.reduce(function (e, t) {
                return ((e[t] = r("AdsEmptyValue").instance()), e);
              }, {});
            return t.merge(a);
          }),
          t
        );
      })(r("TargetingConditionalReduceStore"));
    u.__moduleID = i.id;
    var c = new u(e || (e = r("AdsDataAtom")));
    l.default = c;
  },
  98,
);
