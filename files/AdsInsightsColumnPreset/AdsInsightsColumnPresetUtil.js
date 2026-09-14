__d(
  "AdsInsightsColumnPresetUtil",
  [
    "AdsAgencyFeeUtils",
    "AdsAudienceDirectConfig",
    "AdsCustomPresetLocalStorageUtil",
    "AdsInsightsAttributionWindows",
    "AdsInsightsBuiltinColumnPreset",
    "AdsInsightsColumnUtil",
    "AdsInterfacesLogger",
    "AdsMgmtColumn",
    "AdsMgmtColumnPresetStoreWrapper",
    "AdsMgmtColumns",
    "AdsRecentlyUsedColumnsPresetLocalStorage",
    "IGFAGraduationColumnDefaultPresetUtils",
    "getObjectValues",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("getObjectValues")(r("AdsInsightsBuiltinColumnPreset"));
    function s() {
      return e;
    }
    function u(e) {
      return (
        e === void 0 && (e = !1),
        r("AdsAudienceDirectConfig").isDirectDealsUser
          ? "AUDIENCE_DIRECT"
          : o(
                "IGFAGraduationColumnDefaultPresetUtils",
              ).isEligibleForIGFAGraduationDefaultColumnPreset(e)
            ? "PERFORMANCE_LEGACY"
            : "PERFORMANCE"
      );
    }
    function c(e) {
      return (
        s().find(function (t) {
          return t === e;
        }) != null
      );
    }
    function d(e) {
      return Number.isNaN(parseInt(e, 10));
    }
    function m(e) {
      if (!Array.isArray(e))
        return {
          attributionWindows: o(
            "AdsInsightsAttributionWindows",
          ).getDefaultWindows(),
        };
      var t = [],
        n = {},
        a = [];
      return (
        e.forEach(function (e) {
          typeof e != "string" || !o("AdsInsightsAttributionWindows").isValid(e)
            ? t.push({ message: "Invalid attribution window", value: e })
            : n[e]
              ? t.push({ message: "Duplicate attribution window", value: e })
              : e === "7d_view" || e === "28d_view"
                ? t.push({
                    message: "Should not have deprecated Xd_view",
                    value: e,
                  })
                : (a.push(e), (n[e] = !0));
        }),
        t.length > 0 &&
          r("AdsInterfacesLogger").log({
            eventName: "am_has_deprecated_attribution_in_preset",
            data: {
              attribution_windows: t.map(function (e) {
                return e.value;
              }),
              message: JSON.stringify({ errors: t }),
            },
          }),
        a.sort(),
        a.length === 0
          ? {
              attributionWindows: o(
                "AdsInsightsAttributionWindows",
              ).getDefaultWindows(),
            }
          : { attributionWindows: a }
      );
    }
    function p(e) {
      var t = o("AdsInsightsColumnUtil").getStickyColumnIDs();
      if (!Array.isArray(e)) {
        var n =
          e !== void 0
            ? [{ message: "Column IDs must be an array", value: e }]
            : [];
        return { columnIDs: [], errors: n };
      }
      var r = [],
        a = {},
        i = [];
      return (
        e.forEach(function (e) {
          if (typeof e != "string") {
            r.push({ message: "Column ID must be a string", value: e });
            return;
          }
          var n = o("AdsMgmtColumns").getConfigOrNull(e);
          n
            ? a[n.id]
              ? r.push({ message: "Duplicate column", value: n.id })
              : t.indexOf(n.id) !== -1
                ? r.push({ message: "Columns must not be sticky", value: n.id })
                : (i.push(n.id), (a[n.id] = !0))
            : r.push({ message: "No config for column", value: e });
        }),
        (i = o("AdsInsightsColumnUtil").sanitizeColumnIDs(i)),
        { columnIDs: i, errors: r }
      );
    }
    function _(e, t, n) {
      var o = m(e.attribution_windows),
        a = o.attributionWindows,
        i = p(
          (e.columns || []).map(function (e) {
            return e.column_id;
          }),
        ),
        l = i.columnIDs;
      return (
        l.indexOf(r("AdsMgmtColumn").NAME) === -1 &&
          l.unshift(r("AdsMgmtColumn").NAME),
        {
          accountID: t,
          attributionWindows: a,
          columnIDs: l,
          id: e.id,
          name: e.name,
          userSettingsID: n,
        }
      );
    }
    function f(e) {
      var t = e.attributionWindows,
        n = e.columnIDs,
        r = e.name;
      return {
        attribution_windows: t,
        columns: n.map(function (e) {
          return { column_id: e, width: 0 };
        }),
        name: r,
      };
    }
    var g = [
      "PERFORMANCE",
      "PERFORMANCE_LEGACY",
      "ENGAGEMENT",
      "DELIVERY",
      "VALIDATION_VIEW",
      "VIDEO_ENGAGEMENT",
    ];
    function h(e) {
      var t = r("AdsMgmtColumnPresetStoreWrapper").getBuiltinOrNull(e);
      return t == null ? r("AdsMgmtColumnPresetStoreWrapper").get(e) : t;
    }
    function y(e, t, n) {
      var r = C(e, t);
      if (
        o("AdsRecentlyUsedColumnsPresetLocalStorage") != null &&
        o("AdsRecentlyUsedColumnsPresetLocalStorage").LIST_LENGTH &&
        r.length <
          (o("AdsRecentlyUsedColumnsPresetLocalStorage") == null
            ? void 0
            : o("AdsRecentlyUsedColumnsPresetLocalStorage").LIST_LENGTH)
      ) {
        var a = n.filter(function (e) {
            return !c(e.id);
          }),
          i = a.filter(function (e) {
            return !r.includes(e);
          });
        return r
          .concat(i)
          .slice(
            0,
            o("AdsRecentlyUsedColumnsPresetLocalStorage") == null
              ? void 0
              : o("AdsRecentlyUsedColumnsPresetLocalStorage").LIST_LENGTH,
          );
      } else return r;
    }
    function C(e, t) {
      var n =
        o("AdsRecentlyUsedColumnsPresetLocalStorage") == null
          ? void 0
          : o(
              "AdsRecentlyUsedColumnsPresetLocalStorage",
            ).getLocalStorageRecentlyUsedColumnPresets();
      if (n !== void 0) {
        if (n.length === 0) return t != null ? [h(t)] : [];
        var a = [],
          i = new Set();
        return (
          n.forEach(function (t) {
            if (
              r("AdsMgmtColumnPresetStoreWrapper").getBuiltinOrNull(t) !=
                null ||
              r("AdsMgmtColumnPresetStoreWrapper").getOrNull(t) != null ||
              t === "CUSTOM_PLACEHOLDER"
            )
              if (
                t === "CROSS_DEVICE" ||
                t === "BIDDING_AND_OPTIMIZATION" ||
                t === "TARGETING_AND_CREATIVE" ||
                (t === "AGENCY_FEE" &&
                  !o("AdsAgencyFeeUtils").canSeeAgencyFeeInsightsColumns(e))
              )
                o("AdsRecentlyUsedColumnsPresetLocalStorage") == null ||
                  o(
                    "AdsRecentlyUsedColumnsPresetLocalStorage",
                  ).deleteLocalStorageRecentlyUsedColumnPresets(t);
              else {
                var n,
                  l = r("AdsMgmtColumnPresetStoreWrapper").getOrNull(t),
                  s = (n = l == null ? void 0 : l.id) != null ? n : t;
                i.has(s)
                  ? o("AdsRecentlyUsedColumnsPresetLocalStorage") == null ||
                    o(
                      "AdsRecentlyUsedColumnsPresetLocalStorage",
                    ).deleteLocalStorageRecentlyUsedColumnPresets(t)
                  : (i.add(s), a.push(t));
              }
            else
              o("AdsRecentlyUsedColumnsPresetLocalStorage") == null ||
                o(
                  "AdsRecentlyUsedColumnsPresetLocalStorage",
                ).deleteLocalStorageRecentlyUsedColumnPresets(t);
          }),
          a.map(function (e) {
            return h(e);
          })
        );
      }
      return [];
    }
    function b(e, t) {
      var n = g.map(function (e) {
        return r("AdsMgmtColumnPresetStoreWrapper").getBuiltin(e);
      });
      return (
        (r("gkx")("11516") || r("gkx")("16847")) &&
          n.unshift(
            r("AdsMgmtColumnPresetStoreWrapper").getBuiltin(
              "MESSAGING_ENGAGEMENT",
            ),
          ),
        o("AdsAgencyFeeUtils").canSeeAgencyFeeInsightsColumns(e) &&
          n.unshift(
            r("AdsMgmtColumnPresetStoreWrapper").getBuiltin("AGENCY_FEE"),
          ),
        n.filter(function (e) {
          return !t.includes(e);
        })
      );
    }
    function v(e) {
      if (e === "CUSTOM_PLACEHOLDER")
        return r(
          "AdsCustomPresetLocalStorageUtil",
        ).getCustomPresetMetricsLocalStorage();
      var t = r("AdsMgmtColumnPresetStoreWrapper").getOrNull(e);
      return t == null ? void 0 : t.columnIDs;
    }
    ((l.getBuiltinPresetIDs = s),
      (l.getDefault = u),
      (l.isBuiltinID = c),
      (l.isTemporaryID = d),
      (l.sanitizeAttributionWindows = m),
      (l.sanitizeColumnIDs = p),
      (l.fromAPI = _),
      (l.toAPI = f),
      (l.getRecentlyUsedColumnPresets = y),
      (l.getPopularColumnPresetsLightWeightActionBar = b),
      (l.getColumnsToEdit = v));
  },
  98,
);
