__d(
  "AdsPEListStore",
  [
    "AdsAccountStore",
    "AdsDataAtom",
    "AdsObjectTypes",
    "AdsPEAdgroupTablePagingSelectors",
    "AdsPEAdgroupVisibleIDsSelectors",
    "AdsPECampaignGroupTablePagingSelectors",
    "AdsPECampaignGroupVisibleIDsSelectors",
    "AdsPECampaignTablePagingSelectors",
    "AdsPECampaignVisibleIDsSelectors",
    "AdsPEManageCampaignsConstants",
    "FluxStore",
    "LoadObject",
    "adsPENavStateSelector",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (function (t) {
        function n() {
          var n;
          return (
            (n = t.call(this, e || (e = r("AdsDataAtom"))) || this),
            (n.getCurrentPageSize = function (e) {
              var t = r("AdsAccountStore").getSelectedAccount();
              if (
                !t.hasValueWithoutError() ||
                !o(
                  "AdsPEManageCampaignsConstants",
                ).MANAGE_CAMPAIGNS_TOOLS.includes(n.$AdsPEListStore$p_4)
              )
                return r("LoadObject").loading({ creatorModuleID: i.id });
              if (e.objectType === r("AdsObjectTypes").ACCOUNT)
                return r("LoadObject").withValue(1, { creatorModuleID: i.id });
              var a = n.$AdsPEListStore$p_13(e);
              return a
                ? r("LoadObject").withValue(a().length, {
                    creatorModuleID: i.id,
                  })
                : r("LoadObject").loading({ creatorModuleID: i.id });
            }),
            (n.$AdsPEListStore$p_1 = [].concat(
              r("adsPENavStateSelector").getStores(),
              [r("AdsAccountStore")],
            )),
            (n.$AdsPEListStore$p_2 = []),
            (n.$AdsPEListStore$p_3 = []),
            n.setupStoreDependency(),
            n
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.setupStoreDependency = function () {
            ((this.$AdsPEListStore$p_4 = r("adsPENavStateSelector")().tool),
              (this.$AdsPEListStore$p_7 = r(
                "AdsPECampaignGroupVisibleIDsSelectors",
              ).visibleIDsSelector),
              (this.$AdsPEListStore$p_8 = r(
                "AdsPECampaignVisibleIDsSelectors",
              ).visibleIDsSelector),
              (this.$AdsPEListStore$p_6 = r(
                "AdsPEAdgroupVisibleIDsSelectors",
              ).visibleIDsSelector),
              (this.$AdsPEListStore$p_9 = r(
                "AdsPECampaignGroupTablePagingSelectors",
              ).getRowTotalSelector),
              (this.$AdsPEListStore$p_10 = r(
                "AdsPECampaignTablePagingSelectors",
              ).getRowTotalSelector),
              (this.$AdsPEListStore$p_11 = r(
                "AdsPEAdgroupTablePagingSelectors",
              ).getRowTotalSelector),
              (this.$AdsPEListStore$p_5 = null),
              (this.$AdsPEListStore$p_2 = [].concat(
                r("nullthrows")(this.$AdsPEListStore$p_7).getStores(),
                r("nullthrows")(this.$AdsPEListStore$p_8).getStores(),
                r("nullthrows")(this.$AdsPEListStore$p_6).getStores(),
                this.$AdsPEListStore$p_1,
              )),
              (this.$AdsPEListStore$p_3 = this.$AdsPEListStore$p_2
                .concat(this.$AdsPEListStore$p_1)
                .filter(function (e) {
                  return !!e;
                })
                .map(function (e) {
                  return e.getDispatchToken();
                })));
          }),
          (a.getTotalCount = function (t) {
            var e = r("AdsAccountStore").getSelectedAccount();
            if (!e.hasValueWithoutError())
              return r("LoadObject").loading({ creatorModuleID: i.id });
            if (
              o(
                "AdsPEManageCampaignsConstants",
              ).MANAGE_CAMPAIGNS_TOOLS.includes(this.$AdsPEListStore$p_4)
            ) {
              if (t.objectType === r("AdsObjectTypes").ACCOUNT)
                return r("LoadObject").withValue(1, { creatorModuleID: i.id });
              var n = this.$AdsPEListStore$p_12(t.objectType);
              return n
                ? r("LoadObject").withValue(n(), { creatorModuleID: i.id })
                : r("LoadObject").loading({ creatorModuleID: i.id });
            } else return this.getCurrentPageSize(t);
          }),
          (a.getIDsWithNulls = function (t) {
            var e = [];
            if (
              o(
                "AdsPEManageCampaignsConstants",
              ).MANAGE_CAMPAIGNS_TOOLS.includes(this.$AdsPEListStore$p_4)
            ) {
              if (t.objectType === r("AdsObjectTypes").ACCOUNT)
                return [r("AdsAccountStore").getSelectedAccountID()];
              var n = this.$AdsPEListStore$p_13(t);
              return n ? n() : e;
            }
            return e;
          }),
          (a.getIDs = function (t) {
            return this.getIDsWithNulls(t).filter(Boolean);
          }),
          (a.getFetchedCount = function (t) {
            if (
              o(
                "AdsPEManageCampaignsConstants",
              ).MANAGE_CAMPAIGNS_TOOLS.includes(this.$AdsPEListStore$p_4)
            ) {
              if (t.objectType === r("AdsObjectTypes").ACCOUNT) return 1;
              var e = this.$AdsPEListStore$p_13(t);
              return e ? e().length : 0;
            }
            return 0;
          }),
          (a.$AdsPEListStore$p_13 = function (t) {
            var e = t.objectType,
              n =
                e === r("AdsObjectTypes").ADGROUP
                  ? this.$AdsPEListStore$p_6
                  : e === r("AdsObjectTypes").CAMPAIGN
                    ? this.$AdsPEListStore$p_8
                    : this.$AdsPEListStore$p_7;
            return n;
          }),
          (a.$AdsPEListStore$p_12 = function (t) {
            return t === r("AdsObjectTypes").ADGROUP
              ? this.$AdsPEListStore$p_11
              : t === r("AdsObjectTypes").CAMPAIGN
                ? this.$AdsPEListStore$p_10
                : this.$AdsPEListStore$p_9;
          }),
          (a.__onDispatch = function () {
            (this.getDispatcher().waitFor(this.$AdsPEListStore$p_3),
              r("adsPENavStateSelector")
                .getStores()
                .some(function (e) {
                  return e.hasChanged();
                }) && this.setupStoreDependency(),
              this.$AdsPEListStore$p_2.some(function (e) {
                return e.hasChanged();
              }) && this.__emitChange());
          }),
          n
        );
      })(r("FluxStore"));
    s.__moduleID = i.id;
    var u = new s();
    l.default = u;
  },
  98,
);
