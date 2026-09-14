__d(
  "AdsUEditorCampaignAppSelectors",
  [
    "AFCPromotableObjectStore",
    "AdsAppUtils",
    "AdsBulkValueUtils",
    "AdsCampaignGroupBudgetPluginResolver",
    "AdsLoadStateUtils_LEGACY",
    "AdsLoadState_LEGACY",
    "AdsPromotableAppListStore",
    "AdsPromotableAppStore",
    "AdsPromotedObjectTypes",
    "AdsUEditorCampaignAppStrings",
    "AdsUEditorCampaignGroupSelectors",
    "AdsUEditorSelectors",
    "LoadObject",
    "ads-app-platforms",
    "adsCreateSelector",
    "adsFromChinaAvailableAppsSetFilter",
    "adsUEditorAccountSelector",
    "adsUEditorCampaignPublishStatusSelector",
    "adsUEditorODAXTranslatedObjectivesForSelectedCampaignsSelector",
    "emptyFunction",
    "filterNulls",
    "flattenArray",
    "immutable",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = "977114232337111",
      c = r("immutable").Map(
        ((e = {}),
        (e[r("AdsPromotedObjectTypes").CANVAS_APP] =
          o("ads-app-platforms").MOBILE_STORE.FB_CANVAS),
        e),
      ),
      d = {
        isDisabled: !0,
        tooltip: o("AdsUEditorCampaignAppStrings").DISABLED_TOOLTIP,
      },
      m = function (t) {
        return {
          id: t,
          isFake: !0,
          url: null,
          name:
            t === u
              ? o("AdsUEditorCampaignAppStrings").JOBS_APP
              : o("AdsUEditorCampaignAppStrings").getUnknownApp(t),
          category: t !== u ? d.tooltip : null,
        };
      };
    function p(e, t) {
      var n = r("flattenArray")(
        Array.from(e.values()).map(function (e) {
          var n = e.id,
            o = r("nullthrows")(t.get(n)),
            a = {
              isAutobid: !!e.is_autobid,
              isAveragePricePacing: !!e.is_average_price_pacing,
            };
          return o.getDisabledPromotedObjectTypes(a).map(function (e) {
            return c.get(e);
          });
        }),
      );
      return r("immutable").Set(r("filterNulls")(n));
    }
    var _ = (s = r("adsCreateSelector"))(
        [
          o("AdsUEditorSelectors").campaign.bulkByAccessorToJS(function (e) {
            var t;
            return (t = e.promoted_object) == null ? void 0 : t.application_id;
          }),
        ],
        function (t) {
          return o("AdsBulkValueUtils").getUniformValue(t, null);
        },
        { name: i.id + ".appIDSelector" },
      ),
      f = o("AdsUEditorCampaignGroupSelectors").campaignGroups.mapTransform(
        function (e) {
          var t = e.objective;
          return r("AdsCampaignGroupBudgetPluginResolver").resolve({
            objective: t,
          });
        },
      ),
      g = s(
        [r("adsUEditorODAXTranslatedObjectivesForSelectedCampaignsSelector")],
        function (t) {
          return t.getValues();
        },
        { name: i.id + ".objectiveSelector" },
      ),
      h = s(
        [
          r("adsUEditorAccountSelector"),
          g,
          o("AdsUEditorCampaignGroupSelectors").campaignGroups.mapTransform(
            r("emptyFunction").thatReturnsArgument,
          ),
          f,
          r("adsUEditorCampaignPublishStatusSelector"),
        ],
        function (t, n, a, i, l) {
          var e = p(a, i),
            s = l.some(function (e) {
              var t = e.isNew;
              return !t;
            }),
            u = t.capabilities.includes("CAN_CREATE_NEKO_GAMEROOM_AD");
          return (
            (e =
              !s && !u
                ? e.add(o("ads-app-platforms").MOBILE_STORE.FB_GAMEROOM)
                : e),
            r("immutable")
              .Set(r("AdsAppUtils").getPlatformsForObjectives(n))
              .subtract(e)
          );
        },
        { name: i.id },
      ),
      y = s(
        [
          r("adsUEditorAccountSelector"),
          r("AdsPromotableAppListStore").getAllSelector,
          r("AdsPromotableAppStore").getAllForSelector,
          r("AFCPromotableObjectStore").getSelector,
        ],
        function (t, n, a, l) {
          var e = t.account_id,
            s = n(e);
          if (s.loadState !== r("AdsLoadState_LEGACY").LOADED)
            return r("LoadObject")
              .loading({ creatorModuleID: i.id })
              .setValue([]);
          var u = a(e, s.list);
          if (
            s.loadState === r("AdsLoadState_LEGACY").LOADING ||
            o("AdsLoadStateUtils_LEGACY").anyLoading(u)
          )
            return r("LoadObject")
              .loading({ creatorModuleID: i.id })
              .setValue(o("AdsLoadStateUtils_LEGACY").getLoadedValues(u));
          var c = o("AdsLoadStateUtils_LEGACY").getLoadedValues(u),
            d = t.capabilities.includes("CAN_USE_AAC_ENFORCE_PO_SELECTOR");
          if (d) {
            var m = l(e).getValue();
            return r("LoadObject").withValue(
              r("adsFromChinaAvailableAppsSetFilter")(c, m),
              { creatorModuleID: i.id },
            );
          }
          return r("LoadObject").withValue(c, { creatorModuleID: i.id });
        },
        { name: i.id },
      ),
      C = s(
        [_, y, h],
        function (t, n, o) {
          var e = [];
          return (
            n
              .match({
                loading: function () {
                  return [];
                },
                error: function () {
                  return [];
                },
                loaded: r("emptyFunction").thatReturnsArgument,
              })
              .forEach(function (t) {
                var n = o.some(function (e) {
                  return r("AdsAppUtils").appHasPlatform(t, e);
                });
                n && e.push(t);
              }),
            t != null &&
              !e.some(function (e) {
                return e.id === t;
              }) &&
              e.push(m(t)),
            e
          );
        },
        { name: i.id },
      );
    ((l.availablePlatforms = h),
      (l.availableApps = y),
      (l.relevantDestinations = C));
  },
  98,
);
