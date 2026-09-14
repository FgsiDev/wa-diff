__d(
  "AdsInstagramUsernameStore",
  [
    "AdsBaseDataStore_LEGACY",
    "AdsDataAtom",
    "AdsInstagramAccountBusinessBatchLoadedDataActionFlux",
    "AdsInstagramAccountCreateAndUseInstagramBackedDataActionFlux",
    "AdsInstagramAccountErrorRefreshAllErrorsDataActionFlux",
    "AdsInstagramAccountPageBatchLoadedDataActionFlux",
    "AdsInstagramAccountUsernameLoadErrorDataActionFlux",
    "AdsInstagramAccountUsernameLoadedDataActionFlux",
    "AdsInstagramBackedThreadsAccountDataManager",
    "AdsInstagramUsernameDataManager",
    "AdsLoadState_LEGACY",
    "AdsUEditorAdgroupSetBackedThreadsAccountAction",
    "AdsUEditorAdgroupSetBackedThreadsAccountActionFlux",
    "LoadObject",
    "adsCreateStoreThunkSelector",
    "getByPath",
    "gkx",
    "isTruthy",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (function (t) {
        function n() {
          for (var e, n = arguments.length, o = new Array(n), a = 0; a < n; a++)
            o[a] = arguments[a];
          return (
            (e = t.call.apply(t, [this].concat(o)) || this),
            (e.$AdsInstagramUsernameStore$p_1 = new Map()),
            (e.getByV2 = function (t, n) {
              var o = e.getCached(t);
              return o.loadState !== r("AdsLoadState_LEGACY").NOT_LOADED
                ? o
                : (r("AdsInstagramUsernameDataManager").loadByV2(t, n),
                  e.__updateLoading([t]),
                  e.getCached(t));
            }),
            (e.getByV2Selector = r("adsCreateStoreThunkSelector")(
              babelHelpers.assertThisInitialized(e),
              e.getByV2,
            )),
            (e.getAllByV2 = function (t, n) {
              var o = e.__updateLoading(t);
              return (
                r("AdsInstagramUsernameDataManager").loadAllByV2(o, n),
                e.getAllCached(t)
              );
            }),
            (e.getAllByV2Selector = r("adsCreateStoreThunkSelector")(
              babelHelpers.assertThisInitialized(e),
              e.getAllByV2,
            )),
            (e.getForAdgroup = function (t, n) {
              if (n == null) return e.get(t);
              var o = e.getCached(t);
              return o.loadState !== r("AdsLoadState_LEGACY").NOT_LOADED
                ? o
                : (r("AdsInstagramUsernameDataManager").loadForAdgroup(t, n),
                  e.__updateLoading([t]),
                  e.getCached(t));
            }),
            (e.getAllForAdgroup = function (t, n) {
              if (n == null) return e.getAll(t);
              var o = e.__updateLoading(t);
              return (
                r("AdsInstagramUsernameDataManager").loadAllForAdgroup(o, n),
                e.getAllCached(t)
              );
            }),
            (e.getForAdgroupSelector = r("adsCreateStoreThunkSelector")(
              babelHelpers.assertThisInitialized(e),
              e.getForAdgroup,
            )),
            (e.getAllForAdgroupSelector = r("adsCreateStoreThunkSelector")(
              babelHelpers.assertThisInitialized(e),
              e.getAllForAdgroup,
            )),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.getDataManager = function () {
            return r("AdsInstagramUsernameDataManager");
          }),
          (a.getInstagramBackedThreadsAccountLoadObject = function (t) {
            return this.$AdsInstagramUsernameStore$p_1.get(t);
          }),
          (a.getCachedInstagramBackedThreadsAccountId = function (t) {
            var e = this.getInstagramBackedThreadsAccountLoadObject(t);
            return !(e != null && e.isLoading()) && e != null && e.hasValue()
              ? e == null
                ? void 0
                : e.getValue()
              : null;
          }),
          (a.__getActionTypes = function () {
            return [
              o("AdsInstagramAccountBusinessBatchLoadedDataActionFlux")
                .actionType,
              o("AdsInstagramAccountErrorRefreshAllErrorsDataActionFlux")
                .actionType,
              o("AdsInstagramAccountPageBatchLoadedDataActionFlux").actionType,
              o("AdsInstagramAccountUsernameLoadErrorDataActionFlux")
                .actionType,
              o("AdsInstagramAccountUsernameLoadedDataActionFlux").actionType,
              r("AdsInstagramAccountCreateAndUseInstagramBackedDataActionFlux")
                .actionType,
              r("AdsUEditorAdgroupSetBackedThreadsAccountActionFlux")
                .actionType,
            ];
          }),
          (a.__onDispatch = function (n) {
            var t = n.action;
            switch (t.type) {
              case o("AdsInstagramAccountUsernameLoadedDataActionFlux")
                .actionType:
                this.$AdsInstagramUsernameStore$p_2(t.specs);
                break;
              case o("AdsInstagramAccountUsernameLoadErrorDataActionFlux")
                .actionType:
                this.$AdsInstagramUsernameStore$p_3(t.errors);
                break;
              case o("AdsInstagramAccountPageBatchLoadedDataActionFlux")
                .actionType:
                this.$AdsInstagramUsernameStore$p_4(t.specs);
                break;
              case o("AdsInstagramAccountBusinessBatchLoadedDataActionFlux")
                .actionType:
                this.$AdsInstagramUsernameStore$p_5(t.specs);
                break;
              case o("AdsInstagramAccountErrorRefreshAllErrorsDataActionFlux")
                .actionType:
                this.__invalidateAllErrors() && this.__emitChange();
                break;
              case r(
                "AdsInstagramAccountCreateAndUseInstagramBackedDataActionFlux",
              ).actionType: {
                var a = this.getInstagramBackedThreadsAccountLoadObject(
                  t.instagramAccountV2ID,
                );
                if (a != null && a.isLoading()) break;
                var l = this.getCachedInstagramBackedThreadsAccountId(
                  t.instagramAccountV2ID,
                );
                if (r("isTruthy")(l)) {
                  (e || (e = r("AdsDataAtom"))).addPostDispatchCallback(
                    function () {
                      r(
                        "AdsUEditorAdgroupSetBackedThreadsAccountAction",
                      ).dispatch(
                        {
                          hostID: t.hostID,
                          threadsUserID: l,
                          adgroupIDs: t.adgroupIDs,
                          instagramAccountV2ID: t.instagramAccountV2ID,
                        },
                        {
                          line: "247",
                          module: "AdsInstagramUsernameStore.js",
                          moduleID: i.id,
                        },
                      );
                    },
                  );
                  break;
                }
                (this.$AdsInstagramUsernameStore$p_1.set(
                  t.instagramAccountV2ID,
                  r("LoadObject").loading({ creatorModuleID: i.id }),
                ),
                  this.__emitChange(),
                  r(
                    "AdsInstagramBackedThreadsAccountDataManager",
                  ).createAndUseInstagramBackedAccount(
                    t.instagramAccountV2ID,
                    t.adgroupIDs,
                    t.hostID,
                  ));
                break;
              }
              case r("AdsUEditorAdgroupSetBackedThreadsAccountActionFlux")
                .actionType: {
                this.getCachedInstagramBackedThreadsAccountId(
                  t.instagramAccountV2ID,
                ) !== t.threadsUserID &&
                  (this.$AdsInstagramUsernameStore$p_1.set(
                    t.instagramAccountV2ID,
                    r("LoadObject").withValue(t.threadsUserID, {
                      creatorModuleID: i.id,
                    }),
                  ),
                  this.__emitChange());
                break;
              }
            }
          }),
          (a.$AdsInstagramUsernameStore$p_4 = function (t) {
            if (!(!t || t.size === 0)) {
              var e = new Map();
              (t.forEach(function (t, n) {
                var o = r("getByPath")(
                  t,
                  ["page_backed_instagram_accounts", "data"],
                  [],
                ).concat(r("getByPath")(t, ["instagram_accounts", "data"], []));
                o.forEach(function (t) {
                  (e.set(t.id, t),
                    t.id_v2 && e.set(t.id_v2, t),
                    t.threads_user_id &&
                      r("gkx")("5403") &&
                      e.set(t.threads_user_id, t));
                });
              }),
                this.__handleData(e, r("AdsLoadState_LEGACY").LOADED));
            }
          }),
          (a.$AdsInstagramUsernameStore$p_5 = function (t) {
            if (!(!t || t.size === 0)) {
              var e = new Map();
              (t.forEach(function (t, n) {
                var o = r("getByPath")(t, ["data"], []);
                o.forEach(function (t) {
                  (e.set(t.id, t),
                    t.id_v2 && e.set(t.id_v2, t),
                    t.threads_user_id &&
                      r("gkx")("5403") &&
                      e.set(t.threads_user_id, t));
                });
              }),
                this.__handleData(e, r("AdsLoadState_LEGACY").LOADED));
            }
          }),
          (a.$AdsInstagramUsernameStore$p_2 = function (t) {
            if (!(!t || t.size === 0)) {
              var e = new Map();
              (t.forEach(function (t, n) {
                (e.set(n, t),
                  t.id_v2 && e.set(t.id_v2, t),
                  t.threads_user_id &&
                    r("gkx")("5403") &&
                    e.set(t.threads_user_id, t));
              }),
                this.__handleData(e, r("AdsLoadState_LEGACY").LOADED));
            }
          }),
          (a.$AdsInstagramUsernameStore$p_3 = function (t) {
            var e = this;
            if (!(!t || t.size === 0)) {
              var n = new Map();
              (t.forEach(function (t, o) {
                n.set(o, t);
                var a = e.getCached(o);
                a &&
                  a.loadState === r("AdsLoadState_LEGACY").LOADED &&
                  (a.id_v2 && n.set(a.id_v2, t),
                  a.threads_user_id &&
                    r("gkx")("5403") &&
                    n.set(a.threads_user_id, t));
              }),
                this.__handleData(n, r("AdsLoadState_LEGACY").ERROR));
            }
          }),
          n
        );
      })(r("AdsBaseDataStore_LEGACY")),
      u = new s();
    l.default = u;
  },
  98,
);
