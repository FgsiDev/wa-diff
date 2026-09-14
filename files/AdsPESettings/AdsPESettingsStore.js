__d(
  "AdsPESettingsStore",
  [
    "AdsAccountBatchLoadedDataActionFlux",
    "AdsAccountStore",
    "AdsDataAtom",
    "AdsInterfacesRouteUpdateParamsDataActionFlux",
    "AdsManager2026H2ExperimentUtils",
    "AdsPECreateSettingsDataManager",
    "AdsPEFilterUIStateSelectors",
    "AdsPEManageCampaignsConstants",
    "AdsPESettingsDataManager",
    "FluxReduceStore",
    "JSScheduler",
    "adsPENavStateSelector",
    "isFalsey",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = o("AdsPEFilterUIStateSelectors").getFilterSet.getStores(),
      c = (function (t) {
        function n(e) {
          var n;
          return (
            (n = t.call(this, e) || this),
            (n.$AdsPESettingsStore$p_1 = new Set()),
            (n.$AdsPESettingsStore$p_2 = new Set()),
            n
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.getInitialState = function () {
            return {};
          }),
          (a.__getActionTypes = function () {
            return [
              o("AdsAccountBatchLoadedDataActionFlux").actionType,
              o("AdsInterfacesRouteUpdateParamsDataActionFlux").actionType,
            ];
          }),
          (a.__getDependencyStores = function () {
            return [r("AdsAccountStore")].concat(
              u,
              r("adsPENavStateSelector").getStores(),
            );
          }),
          (a.reduce = function (t, n) {
            var e = n.action;
            if (
              (this.getDispatcher().waitFor(this.getDependencyDispatchTokens()),
              u.filter(function (e) {
                return e.hasChanged();
              }).length)
            ) {
              var a = r("adsPENavStateSelector")();
              o(
                "AdsPEManageCampaignsConstants",
              ).MANAGE_CAMPAIGNS_TOOLS.includes(a.tool) &&
                this.$AdsPESettingsStore$p_3();
            }
            e: {
              var i = e;
              if (
                ((typeof i == "object" && i !== null) ||
                  typeof i == "function") &&
                "type" in i &&
                i.type ===
                  o("AdsInterfacesRouteUpdateParamsDataActionFlux")
                    .actionType &&
                "data" in i
              ) {
                var l = i.data,
                  s = l.changedParamKeys;
                return (
                  (s.act || s.business_id) && this.$AdsPESettingsStore$p_4(),
                  t
                );
                break e;
              }
              if (
                ((typeof i == "object" && i !== null) ||
                  typeof i == "function") &&
                "type" in i &&
                i.type === o("AdsAccountBatchLoadedDataActionFlux").actionType
              ) {
                return (this.$AdsPESettingsStore$p_4(), t);
                break e;
              }
              {
                return (
                  r("AdsAccountStore").hasChanged() &&
                    this.$AdsPESettingsStore$p_4(),
                  t
                );
                break e;
              }
            }
          }),
          (a.$AdsPESettingsStore$p_4 = function () {
            var e = r("AdsAccountStore").getSelectedAccount().getValue();
            if (!r("isFalsey")(e)) {
              var t = e.account_id,
                n = e.user_settings;
              if (t) {
                if (!n && !this.$AdsPESettingsStore$p_2.has(t)) {
                  (o("AdsPECreateSettingsDataManager").createUserSettings(t),
                    this.$AdsPESettingsStore$p_2.add(t));
                  return;
                }
                if (n != null && !this.$AdsPESettingsStore$p_1.has(t)) {
                  var a = n.id;
                  (r("AdsPESettingsDataManager").loadFilters(a),
                    this.$AdsPESettingsStore$p_1.add(t));
                }
              }
            }
          }),
          (a.$AdsPESettingsStore$p_3 = function () {
            var t = r("AdsAccountStore").getSelectedAccountID();
            if (t != null && t !== "" && this.$AdsPESettingsStore$p_1.has(t)) {
              var n = o("AdsPEFilterUIStateSelectors").getFilterSet(),
                a;
              (n == null ? (a = []) : (a = n.toAPI()),
                o(
                  "AdsManager2026H2ExperimentUtils",
                ).getShouldDeferSettingsPostOnFilter()
                  ? (e || (e = r("JSScheduler"))).scheduleLoggingPriCallback(
                      function () {
                        r("AdsPESettingsDataManager").updateLastUsedFilterSet(
                          t,
                          a,
                        );
                      },
                    )
                  : r("AdsPESettingsDataManager").updateLastUsedFilterSet(
                      t,
                      a,
                    ));
            }
          }),
          n
        );
      })(r("FluxReduceStore"));
    c.__moduleID = i.id;
    var d = new c(s || (s = r("AdsDataAtom")));
    l.default = d;
  },
  98,
);
