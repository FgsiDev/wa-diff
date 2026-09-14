__d(
  "AdsConnectedInstagramAccountsWithIABPStore",
  [
    "AdsBusinessInstagramAccountWithIABPReloadActionFlux",
    "AdsConnectedInstagramAccountsWithIABPStoreSource",
    "ReverseInteropStoreBase",
    "adsCreateStoreThunkSelector",
    "memoize",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "AdsConnectedInstagramAccountsWithIABPStore.DATA_UPDATED",
      s = {
        data: {
          eimu_id: null,
          has_profile_picture: null,
          iabp_id: null,
          id: null,
          id_v2: null,
          is_authorized_for_political_ads: null,
          is_private: null,
          is_professional: null,
          is_published: null,
          profile_pic: null,
          username: null,
        },
      },
      u = (function (t) {
        function n() {
          var n,
            o = new (r("AdsConnectedInstagramAccountsWithIABPStoreSource"))();
          return (
            (n = t.call(this, o, e) || this),
            (n.fluxGetSelector = r("memoize")(function () {
              return r("adsCreateStoreThunkSelector")(c, function (e) {
                return c.get(e);
              });
            })),
            n
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var o = n.prototype;
        return (
          (o.get = function (t) {
            return this.getSingleValue(t, s);
          }),
          (o.reduce = function (t, n) {
            var e = n.action;
            if (
              e.type ===
              r("AdsBusinessInstagramAccountWithIABPReloadActionFlux")
                .actionType
            ) {
              var o,
                a = Object.keys(s.data);
              this.loadData(
                [
                  {
                    business_id: e.business_id,
                    legacy_account_id:
                      (o = e.legacy_account_id) != null ? o : "",
                  },
                ],
                a,
                !0,
              );
            }
            return t;
          }),
          n
        );
      })(r("ReverseInteropStoreBase"));
    u.__moduleID = i.id;
    var c = new u(),
      d = c;
    l.default = d;
  },
  98,
);
