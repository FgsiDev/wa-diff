__d(
  "AdsAppMutationUtils",
  [
    "AdsAPICampaignRecordUtils",
    "AdsAppUrlUtils",
    "AdsAppUtils",
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "ads-app-platforms",
    "ads-mobile-operating-systems",
    "immutable",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = r("AdsAppUrlUtils").getMobileAppStoreNameFromUrl(t),
        a = o("ads-app-platforms").getOSForMobileStore(n),
        i = r("justknobx")._("634");
      if (
        a == null ||
        a == "" ||
        (i && a === o("ads-mobile-operating-systems").operatingSystems.ALL)
      )
        return e;
      var l = (e.targeting.user_device || r("immutable").List()).filter(
        function (e) {
          return r("AdsAppUtils").isValidDeviceForStore(n, e);
        },
      );
      return (
        l.size === 0 && (l = r("AdsAppUtils").getDefaultUserDevices(n)),
        o("AdsMutators").chain(
          r("AdsCampaignRecordAccessors").targeting.user_os.set(
            r("immutable").List([a]),
          ),
          r("AdsCampaignRecordAccessors").targeting.user_device.set(
            r("immutable").List(l),
          ),
        )(e)
      );
    }
    function s(e, t) {
      var n = o("AdsAPICampaignRecordUtils").getPromotedObjectType(t, e);
      return r("AdsAppUtils").isAppEngagementObjective(t, n)
        ? e
        : r("AdsCampaignRecordAccessors").targeting.app_install_state.delete(e);
    }
    ((l.setTargetingAppOS = e), (l.maybeRemoveAppInstallState = s));
  },
  98,
);
