__d(
  "SignalsOptimizationSourceContainer",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      function e(e) {
        ((this.adAccountOwnerID = null),
          (this.bizAccountOwnerID = null),
          (this.bizAccountOwnerName = null),
          (this.cluster = null),
          (this.hasBAPIDomains = null),
          (this.id = e),
          (this.isEligibleForValueOptimization = null),
          (this.isUnavailable = null),
          (this.lastFiredTime = null),
          (this.serverLastFiredTime = null),
          (this.name = null),
          (this.code = null),
          (this.isBWIEligible = null),
          (this.isBWPEligible = null),
          (this.isOfflineActive = null),
          (this.signalSetupRecommendationEntId = null),
          (this.isSignalSetupRecommendedShareToBiz = null),
          (this.revenueEventsLast56d = null),
          (this.hasCustomAttributionSource = null),
          (this.hasEligibleCustomAttributionSource = null));
      }
      var t = e.prototype;
      return (
        (t.clearSignalSetupRecommendationIdAndBooleanValues = function () {
          ((this.signalSetupRecommendationEntId = null),
            (this.isSignalSetupRecommendedShareToBiz = null));
        }),
        (t.fromPixelRawData = function (t) {
          var e,
            n,
            r,
            o = t.cluster,
            a = t.hasAccessToSharedEventNamesOnly,
            i = t.hasBAPIDomains,
            l = t.hasCustomAttributionSource,
            s = t.hasEligibleCustomAttributionSource,
            u = t.id,
            c = t.isBWIEligible,
            d = t.isBWPEligible,
            m = t.isEligibleForValueOptimization,
            p = t.isOfflineActive,
            _ = t.isSignalSetupRecommendedShareToBiz,
            f = t.isUnavailable,
            g = t.lastFiredTime,
            h = t.name,
            y = t.revenueEventsLast56d,
            C = t.serverLastFiredTime,
            b = t.signalSetupRecommendationEntId;
          return (
            (this.adAccountOwnerID =
              (e = t.ownerAdAccount) == null ? void 0 : e.accountID),
            (this.bizAccountOwnerID =
              (n = t.ownerBusiness) == null ? void 0 : n.id),
            (this.bizAccountOwnerName =
              (r = t.ownerBusiness) == null ? void 0 : r.name),
            (this.cluster = o),
            (this.hasAccessToSharedEventNamesOnly = a),
            (this.hasBAPIDomains = i),
            (this.id = u),
            (this.isEligibleForValueOptimization = m),
            (this.isUnavailable = f),
            (this.lastFiredTime = g),
            (this.serverLastFiredTime = C),
            (this.name = h),
            (this.code = ""),
            (this.isBWIEligible = c),
            (this.isBWPEligible = d),
            (this.isOfflineActive = p),
            (this.signalSetupRecommendationEntId = b),
            (this.isSignalSetupRecommendedShareToBiz = _),
            (this.revenueEventsLast56d = y),
            (this.hasCustomAttributionSource = l),
            (this.hasEligibleCustomAttributionSource = s),
            this
          );
        }),
        (t.toJSObject = function () {
          return {
            adAccountOwnerID: this.adAccountOwnerID,
            bizAccountOwnerID: this.bizAccountOwnerID,
            bizAccountOwnerName: this.bizAccountOwnerName,
            cluster: this.cluster,
            code: this.code,
            hasBAPIDomains: this.hasBAPIDomains,
            hasCustomAttributionSource: this.hasCustomAttributionSource,
            hasEligibleCustomAttributionSource:
              this.hasEligibleCustomAttributionSource,
            id: this.id,
            isBWIEligible: this.isBWIEligible,
            isBWPEligible: this.isBWPEligible,
            isEligibleForValueOptimization: this.isEligibleForValueOptimization,
            isSignalSetupRecommendedShareToBiz:
              this.isSignalSetupRecommendedShareToBiz,
            isUnavailable: this.isUnavailable,
            lastFiredTime: this.lastFiredTime,
            name: this.name,
            revenueEventsLast56d: this.revenueEventsLast56d,
            signalSetupRecommendationEntId: this.signalSetupRecommendationEntId,
          };
        }),
        e
      );
    })();
    i.default = e;
  },
  66,
);
