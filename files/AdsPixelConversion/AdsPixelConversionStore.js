__d(
  "AdsPixelConversionStore",
  [
    "AdsAccountSelectDataActionFlux",
    "AdsDataAtom",
    "AdsPixelConversionTypes",
    "AdsPixelDataManager",
    "AdsPixelProvider",
    "AdsPixelServerReceiveDefaultPromotedObjectDataActionFlux",
    "AdsPixelServerReceivePixelEventCountsActionFlux",
    "AdsPixelServerReceivePixelStatsDataActionFlux",
    "AdsPixelStoreUtil",
    "AdsPixelViewUpdateConversionChoiceActionFlux",
    "DateConsts",
    "FluxStore",
    "ImmutableObject",
    "StandardEventsDetails",
    "adsCreateStoreThunkSelector",
    "isFalsey",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 300,
      u = (function (t) {
        function n() {
          var n;
          return (
            (n = t.call(this, e || (e = r("AdsDataAtom"))) || this),
            (n.getConversionSelector = r("adsCreateStoreThunkSelector")(
              n,
              n.getConversion.bind(n),
            )),
            n.$AdsPixelConversionStoreClass$p_8(),
            n
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.$AdsPixelConversionStoreClass$p_8 = function () {
            ((this.$AdsPixelConversionStoreClass$p_6 = {}),
              (this.$AdsPixelConversionStoreClass$p_2 = {}),
              (this.$AdsPixelConversionStoreClass$p_5 = {}),
              (this.$AdsPixelConversionStoreClass$p_3 = {}),
              (this.$AdsPixelConversionStoreClass$p_7 = {}));
          }),
          (a.__getActionTypes = function () {
            return [
              o("AdsAccountSelectDataActionFlux").actionType,
              o("AdsPixelServerReceiveDefaultPromotedObjectDataActionFlux")
                .actionType,
              o("AdsPixelServerReceivePixelStatsDataActionFlux").actionType,
              o("AdsPixelViewUpdateConversionChoiceActionFlux").actionType,
              o("AdsPixelServerReceivePixelEventCountsActionFlux").actionType,
            ];
          }),
          (a.__onDispatch = function (t) {
            var e = t.action;
            switch (e.actionType) {
              case o("AdsPixelViewUpdateConversionChoiceActionFlux")
                .actionType: {
                ((this.$AdsPixelConversionStoreClass$p_1 = new (r(
                  "ImmutableObject",
                ))(e.data.conversion && e.data.conversion.getAuxiliaryData())),
                  this.__emitChange());
                break;
              }
              case o("AdsPixelServerReceivePixelEventCountsActionFlux")
                .actionType: {
                (this.$AdsPixelConversionStoreClass$p_9(
                  e.pixelID,
                  e.eventCounts,
                ),
                  this.__emitChange());
                break;
              }
              case o("AdsAccountSelectDataActionFlux").actionType: {
                (this.$AdsPixelConversionStoreClass$p_8(), this.__emitChange());
                break;
              }
              case o("AdsPixelServerReceiveDefaultPromotedObjectDataActionFlux")
                .actionType: {
                var n = e.data;
                if (n == null) break;
                var a = n.customConversionID,
                  i = n.customEventType,
                  l = n.pixelID,
                  s = n.pixelRule;
                (a != null
                  ? (this.$AdsPixelConversionStoreClass$p_4 = {
                      customConversionID: a,
                    })
                  : s != null
                    ? (this.$AdsPixelConversionStoreClass$p_4 = {
                        customEventType: i,
                        pixelID: l,
                        pixelRule: s,
                      })
                    : (this.$AdsPixelConversionStoreClass$p_4 = {
                        customEventType: i,
                        pixelID: l,
                      }),
                  this.__emitChange());
                break;
              }
            }
          }),
          (a.$AdsPixelConversionStoreClass$p_10 = function () {
            return (
              Object.keys(this.$AdsPixelConversionStoreClass$p_7).length ===
                0 &&
                (this.$AdsPixelConversionStoreClass$p_7 = r(
                  "StandardEventsDetails",
                )),
              this.$AdsPixelConversionStoreClass$p_7
            );
          }),
          (a.getConversionChoice = function () {
            return this.$AdsPixelConversionStoreClass$p_1;
          }),
          (a.getConversion = function (t) {
            if (t == null) return null;
            var e = this.getConversions(),
              n = String(t.pixel_id) + "_" + String(t.custom_event_type);
            return e[n] ? e[n] : null;
          }),
          (a.getConversions = function () {
            var e = this,
              t = o("AdsPixelStoreUtil").getPixelIDs(
                r("AdsPixelProvider").toFluxStore().getState(),
              );
            t.forEach(function (t) {
              e.$AdsPixelConversionStoreClass$p_11(t);
            });
            var n = {},
              a = this.$AdsPixelConversionStoreClass$p_10();
            return (
              Object.keys(this.$AdsPixelConversionStoreClass$p_2).forEach(
                function (t) {
                  var o = e.$AdsPixelConversionStoreClass$p_2[t];
                  Object.keys(o).forEach(function (e) {
                    var i = a[e].custom_event_type;
                    n[t + "_" + i] = new (r("ImmutableObject"))(o[e]);
                  });
                },
              ),
              n
            );
          }),
          (a.getDefaultPromotedObject = function () {
            return (
              this.$AdsPixelConversionStoreClass$p_4 ||
                o("AdsPixelDataManager").loadDefaultPromotedObject(),
              this.$AdsPixelConversionStoreClass$p_4
            );
          }),
          (a.$AdsPixelConversionStoreClass$p_11 = function (t) {
            r("isFalsey")(t) ||
              this.$AdsPixelConversionStoreClass$p_6[t] ||
              ((this.$AdsPixelConversionStoreClass$p_6[t] = !0),
              this.$AdsPixelConversionStoreClass$p_12(t),
              o("AdsPixelDataManager").loadEventCountsAndLastFiredTime(
                t,
                s,
                "-7 days",
              ));
          }),
          (a.$AdsPixelConversionStoreClass$p_12 = function (t) {
            var e = this;
            this.$AdsPixelConversionStoreClass$p_2[t] = {};
            var n = this.$AdsPixelConversionStoreClass$p_10();
            Object.keys(n).forEach(function (o) {
              var a = n[o].custom_event_type,
                i = t + "_" + a;
              e.$AdsPixelConversionStoreClass$p_2[t][o] = {
                description: n[o].description,
                id: i,
                name: n[o].name,
                pixelID: t,
                type: r("AdsPixelConversionTypes").NEW,
                value: o,
              };
            });
          }),
          (a.$AdsPixelConversionStoreClass$p_9 = function (t, n) {
            var e = this;
            (this.$AdsPixelConversionStoreClass$p_6[t] ||
              ((this.$AdsPixelConversionStoreClass$p_6[t] = !0),
              this.$AdsPixelConversionStoreClass$p_12(t)),
              (this.$AdsPixelConversionStoreClass$p_3[t] = !0));
            var r =
              o("DateConsts").getCurrentTimeInSeconds() -
              o("DateConsts").SEC_PER_WEEK * 2;
            n.forEach(function (n) {
              var a = n.count,
                i = n.event,
                l = n.last_fired_time,
                s = e.$AdsPixelConversionStoreClass$p_2[t];
              i in s &&
                r < l &&
                ((s[i].lastFiredTime = new Date(
                  l * o("DateConsts").MS_PER_SEC,
                ).toISOString()),
                (s[i].count = a),
                (e.$AdsPixelConversionStoreClass$p_5[t] = !0));
            });
          }),
          n
        );
      })(r("FluxStore"));
    u.__moduleID = i.id;
    var c = new u(),
      d = c;
    l.default = d;
  },
  98,
);
