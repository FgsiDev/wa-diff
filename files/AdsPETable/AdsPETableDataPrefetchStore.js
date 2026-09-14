__d(
  "AdsPETableDataPrefetchStore",
  [
    "AdsDataAtom",
    "AdsInsightsTableViewStore",
    "AdsObjectTypes",
    "AdsPEPrefetchedIDsActionFlux",
    "FluxStore",
    "adsObjectTypeFromAdLevel",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = [
        r("AdsObjectTypes").CAMPAIGN_GROUP,
        r("AdsObjectTypes").CAMPAIGN,
        r("AdsObjectTypes").ADGROUP,
      ],
      u = (function (t) {
        function n() {
          var n, o;
          return (
            (o = t.call(this, e || (e = r("AdsDataAtom"))) || this),
            (o.$AdsPETableDataPrefetchStore$p_1 =
              ((n = {}),
              (n[r("AdsObjectTypes").CAMPAIGN] = r("immutable").OrderedSet()),
              (n[r("AdsObjectTypes").CAMPAIGN_GROUP] =
                r("immutable").OrderedSet()),
              (n[r("AdsObjectTypes").ADGROUP] = r("immutable").OrderedSet()),
              n)),
            (o.$AdsPETableDataPrefetchStore$p_3 = []),
            o
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.getObjectTypesToPrefetch = function () {
            return this.$AdsPETableDataPrefetchStore$p_3;
          }),
          (a.$AdsPETableDataPrefetchStore$p_4 = function () {
            this.$AdsPETableDataPrefetchStore$p_3 = [];
          }),
          (a.getPrefetchIDs = function (t) {
            return this.$AdsPETableDataPrefetchStore$p_1[t].toArray();
          }),
          (a.__getActionTypes = function () {
            return [o("AdsPEPrefetchedIDsActionFlux").actionType];
          }),
          (a.__getDependencyStores = function () {
            return [r("AdsInsightsTableViewStore")];
          }),
          (a.__onDispatch = function (t) {
            var e = this,
              n = t.action,
              a = !1;
            if (
              (this.$AdsPETableDataPrefetchStore$p_4(),
              n.type === o("AdsPEPrefetchedIDsActionFlux").actionType)
            ) {
              var i = r("adsObjectTypeFromAdLevel")(n.level);
              if (!i) return;
              var l = r("immutable").OrderedSet(n.ids);
              this.$AdsPETableDataPrefetchStore$p_1[i].equals(l) ||
                ((this.$AdsPETableDataPrefetchStore$p_1[i] = l),
                (a = !0),
                this.$AdsPETableDataPrefetchStore$p_3.push(i));
            }
            this.getDispatcher().waitFor(this.getDependencyDispatchTokens());
            var u = r("AdsInsightsTableViewStore").getOrNull();
            if (u) {
              if (r("AdsInsightsTableViewStore").hasChanged()) {
                var c = u.timeRange;
                (this.$AdsPETableDataPrefetchStore$p_2 &&
                  !c.equals(this.$AdsPETableDataPrefetchStore$p_2) &&
                  s.forEach(function (t) {
                    u.objectType !== t &&
                      (e.$AdsPETableDataPrefetchStore$p_3.push(t), (a = !0));
                  }),
                  (this.$AdsPETableDataPrefetchStore$p_2 = c));
              }
              a && this.__emitChange();
            }
          }),
          n
        );
      })(r("FluxStore"));
    u.__moduleID = i.id;
    var c = new u();
    l.default = c;
  },
  98,
);
