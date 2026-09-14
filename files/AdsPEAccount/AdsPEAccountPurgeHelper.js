__d(
  "AdsPEAccountPurgeHelper",
  [
    "AdsAccountStore",
    "AdsGraphAPI",
    "AdsInterfacesLogger",
    "AdsLoadObjectUtils",
    "AdsPEAccountUtils",
    "FBLogger",
    "adsStorePromiseAsyncGetForSyncStore",
    "getErrorSafe",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "DELETE_OLDEST",
      s = ["campaigns", "adsets", "ads"],
      u = (function () {
        function t(e, t) {
          ((this.$1 = e), (this.$3 = t));
        }
        t.purge = function (n, r) {
          var e = new t(n, r);
          e.run();
        };
        var n = t.prototype;
        return (
          (n.run = function () {
            var e = this;
            r("adsStorePromiseAsyncGetForSyncStore")(
              r("AdsAccountStore"),
              function () {
                return r("AdsAccountStore").getAll(e.$1);
              },
            )
              .then(function (t) {
                var n = o("AdsLoadObjectUtils").getLoadedValues(t.values());
                ((e.$2 = n),
                  (e.$4 = {}),
                  (e.$5 = {}),
                  (e.$8 = 0),
                  (e.$9 = 0),
                  (e.$10 = 0),
                  (e.$11 = 0),
                  (e.$6 = {}),
                  e.$2.forEach(function (t) {
                    var n,
                      r,
                      a,
                      i = o("AdsPEAccountUtils").getArchiveInfo(),
                      l = i.finalArchiveSize;
                    ((e.$6[t.account_id] = l),
                      (e.$4[t.account_id] = {}),
                      (e.$4[t.account_id].ads = t.archived_adgroup_count),
                      (e.$4[t.account_id].adsets = t.archived_campaign_count),
                      (e.$4[t.account_id].campaigns =
                        t.archived_campaign_group_count),
                      (e.$5[t.account_id] = {}),
                      (e.$5[t.account_id].ads = 0),
                      (e.$5[t.account_id].adsets = 0),
                      (e.$5[t.account_id].campaigns = 0),
                      (e.$9 = Math.max(
                        ((n = t.archived_adgroup_count) != null ? n : 0) - l,
                        0,
                      )),
                      (e.$10 = Math.max(
                        ((r = t.archived_campaign_count) != null ? r : 0) - l,
                        0,
                      )),
                      (e.$11 = Math.max(
                        ((a = t.archived_campaign_group_count) != null
                          ? a
                          : 0) - l,
                        0,
                      )),
                      (e.$8 += e.$9 + e.$10 + e.$11));
                  }));
              })
              .then(function () {
                (r("AdsInterfacesLogger").log({
                  eventName: "am_account_purge",
                  data: {
                    item_count: e.$8,
                    current_action_ads_count: e.$9,
                    current_action_campaigns_count: e.$10,
                    current_action_campaign_groups_count: e.$11,
                  },
                }),
                  e.$12());
              })
              .catch(function (e) {
                return r("FBLogger")("ads")
                  .catching(r("getErrorSafe")(e))
                  .mustfix("Failed to purge account store");
              });
          }),
          (n.$12 = function () {
            for (
              var t = this,
                n = function () {
                  for (
                    var n = t.$2[l],
                      a = n.account_id,
                      u = t.$4[a],
                      c = t.$6[a],
                      d = function () {
                        var n,
                          l = s[p],
                          d = (n = u[l]) != null ? n : NaN,
                          m = d - c;
                        if (d > c) {
                          t.$7 > 0 &&
                            (m = Math.ceil((d - c) / Math.pow(2, t.$7)));
                          var _ = {
                            delete_strategy: e,
                            object_count: m,
                            delete_offset: 0,
                          };
                          return (
                            r("promiseDone")(
                              o("AdsGraphAPI")
                                .get(i.id)
                                .adaccount(a)
                                .edge(l)
                                .remove(_),
                              function (e) {
                                return t.$13(a, l, e);
                              },
                              function (e) {
                                return t.$14(e);
                              },
                            ),
                            { v: { v: void 0 } }
                          );
                        }
                      },
                      m,
                      p = 0;
                    p < s.length;
                    p++
                  )
                    if (((m = d()), m)) return m.v;
                },
                a,
                l = 0;
              l < this.$2.length;
              l++
            )
              if (((a = n()), a)) return a.v;
            this.$3(!0, 0);
          }),
          (n.$14 = function (t) {
            this.$7 || (this.$7 = 0);
            var e = Math.max(this.$8 / 1e3, 5);
            this.$7++ < e
              ? this.$12()
              : (r("FBLogger")("ads")
                  .catching(t)
                  .mustfix(
                    "Account store purge has failed retry too many times",
                  ),
                this.$3(!0, 0));
          }),
          (n.$13 = function (t, n, r) {
            var e = this,
              o = r.deleted_object_ids.length;
            this.$5[t][n] += o;
            var a = this.$6[t];
            if (((this.$7 = 0), o > 0)) {
              var i,
                l = r.objects_left_to_delete_count;
              this.$4[t][n] =
                l != null && !Number.isNaN(l)
                  ? l
                  : ((i = this.$4[t][n]) != null ? i : NaN) - o;
            } else this.$4[t][n] = a;
            var s = this.$2.every(function (t) {
              var n,
                r,
                o,
                i = e.$4[t.account_id];
              return (
                ((n = i.ads) != null ? n : NaN) <= a &&
                ((r = i.adsets) != null ? r : NaN) <= a &&
                ((o = i.campaigns) != null ? o : NaN) <= a
              );
            });
            if (s) {
              ((this.$2 = []), this.$3(!0, o));
              return;
            }
            (this.$3(!1, o), this.$12());
          }),
          t
        );
      })();
    l.default = u;
  },
  98,
);
