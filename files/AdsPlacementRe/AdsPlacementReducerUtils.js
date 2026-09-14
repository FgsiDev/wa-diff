__d(
  "AdsPlacementReducerUtils",
  [
    "AdsAPIDevicePlatform",
    "AdsCampaignRawSpecUtils",
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsPlacementAPISpecDefaultsUtils",
    "AdsPlacementAPISpecWriterUtils",
    "AdsPlacementConstants",
    "AdsPlacementSoftOptOutUtils",
    "AdsPlacementUtils",
    "AdsUserDeviceTypes",
    "AdsUserOSUtils",
    "FBLogger",
    "adsPlacementAPISpecReaderConvertCampaignRecordToPlacementSpec",
    "immutable",
    "isTruthy",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t,
        n = r("AdsCampaignRecordAccessors").placement.set(
          r("immutable").fromJS(
            o(
              "adsPlacementAPISpecReaderConvertCampaignRecordToPlacementSpec",
            ).convertCampaignRecordToPlacementSpec(e),
          ),
          e,
        ),
        a = (t = e.saved_audience) == null ? void 0 : t.id;
      return (
        r("isTruthy")(a) &&
          (n = r("AdsCampaignRecordAccessors").saved_audience_id.set(a, n)),
        n
      );
    }
    function s(e, t) {
      var n = r("AdsCampaignRecordAccessors").placement_soft_opt_out.set(
        r("immutable").fromJS(t),
        e,
      );
      return n;
    }
    function u(e, t) {
      var n = r("immutable").fromJS({
          audience_network: String(t.get("audience_network")),
          facebook: String(t.get("facebook")),
          instagram: String(t.get("instagram")),
          messenger: String(t.get("messenger")),
          oculus: String(t.get("oculus")),
          threads: String(t.get("threads")),
          whatsapp: String(t.get("whatsapp")),
        }),
        a = [];
      t.forEach(function (e, t) {
        e !== "none" && a.push(t);
      });
      var i = r("immutable").fromJS(
        o(
          "adsPlacementAPISpecReaderConvertCampaignRecordToPlacementSpec",
        ).convertCampaignRecordToPlacementSpec(e),
      );
      i.set("publisher_platforms", a);
      var l = r("immutable").List(a);
      return o("AdsMutators").chain(
        r("AdsCampaignRecordAccessors").publisher_platforms_status.set(n),
        r("AdsCampaignRecordAccessors").placement.set(i),
        r("AdsCampaignRecordAccessors").targeting.publisher_platforms.set(l),
      )(e);
    }
    function c(e) {
      return e.withMutations(function (e) {
        o("AdsPlacementConstants").PLACEMENT_MOBILE_OPTIONS_FIELDS.forEach(
          function (t) {
            var n = r("nullthrows")(
              o("AdsPlacementConstants").PLACEMENT_FIELD_TO_AD_SET_PATHS.get(t),
            );
            e.deleteIn(n);
          },
        );
      });
    }
    function d(e) {
      var t, n;
      return o("AdsMutators").chain(
        (n = r("AdsCampaignRecordAccessors")).targeting.publisher_platforms.set(
          (t = o("AdsPlacementAPISpecDefaultsUtils")).getPublisherPlatforms(e),
        ),
        n.targeting.facebook_positions.set(
          t.getPositionsForPlatformWithEligibility("facebook", e),
        ),
        n.targeting.instagram_positions.set(
          t.getPositionsForPlatformWithEligibility("instagram", e),
        ),
        n.targeting.messenger_positions.set(
          t.getPositionsForPlatformWithEligibility("messenger", e),
        ),
        n.targeting.audience_network_positions.set(
          t.getPositionsForPlatformWithEligibility("audience_network", e),
        ),
        n.targeting.whatsapp_positions.set(
          t.getPositionsForPlatformWithEligibility("whatsapp", e),
        ),
        n.targeting.streaming_services_positions.set(
          t.getPositionsForPlatformWithEligibility("streaming_services", e),
        ),
      );
    }
    function m(e, t) {
      return d(t)(e);
    }
    function p(e, t, n) {
      var a = t
          ? r("immutable").List(t)
          : o("AdsPlacementAPISpecDefaultsUtils").getDevicePlatforms(n),
        i = r("AdsCampaignRecordAccessors").targeting.device_platforms.set(
          a,
          e,
        );
      t &&
        t.length === 1 &&
        t[0] === r("AdsAPIDevicePlatform").DESKTOP &&
        (i = c(i));
      var l = m(
        i,
        babelHelpers.extends({}, n, {
          spec: babelHelpers.extends({}, n.spec, {
            device_platforms: a.toJS(),
          }),
        }),
      );
      return o("AdsPlacementAPISpecWriterUtils").resetDevicesIfIneligible(
        l,
        n,
        !1,
      );
    }
    function _(e, t) {
      var n = e.targeting.user_os;
      if (
        (n && !r("immutable").List.isList(n) && (n = r("immutable").List(n)),
        !n || n.size !== 1)
      )
        return (
          r("FBLogger")("ads").mustfix(
            "Trying to set min version when device type is not defined or more than one is defined",
          ),
          e
        );
      var a = o("AdsUserOSUtils").splitUserOS(n.toJS()[0]);
      return r("AdsCampaignRecordAccessors").targeting.user_os.set(
        a.os == null
          ? r("immutable").List([null])
          : r("immutable").List([
              o("AdsUserOSUtils").toUserOSString(a.os, t, a.max_version),
            ]),
        e,
      );
    }
    function f(e, t) {
      var n,
        a = o("AdsPlacementAPISpecDefaultsUtils").getUserDeviceAndOS(t),
        i = a.userDevices,
        l = a.userOS,
        s = t === r("AdsUserDeviceTypes").DIRECT_INSTALL,
        u = o("AdsMutators").chain(
          (n = r("AdsCampaignRecordAccessors")).targeting.user_os.set(
            r("immutable").List(l),
          ),
          n.targeting.user_device.set(r("immutable").List(i)),
          n.targeting.excluded_user_device.set(r("immutable").List()),
          n.targeting.direct_install_devices.set(s),
        )(e);
      if (s) {
        var n, c;
        u = o("AdsMutators").chain(
          (n = r(
            "AdsCampaignRecordAccessors",
          )).targeting.instagram_positions.set((c = r("immutable")).List()),
          n.targeting.publisher_platforms.set(c.List(["facebook"])),
          n.targeting.facebook_positions.set(c.List(["feed"])),
          n.targeting.geo_locations.countries.set(c.List(["US"])),
          n.targeting.audience_network_positions.set(c.List()),
          n.targeting.whatsapp_positions.set(c.List()),
          n.targeting.messenger_positions.set(c.List()),
        )(u);
      }
      return u;
    }
    function g(t, n) {
      var a = r("AdsPlacementUtils").getAutomaticCampaignPlacement(n),
        i = e(o("AdsCampaignRawSpecUtils").setCampaignPlacement(t, a)),
        l = r("AdsCampaignRecordAccessors").placement_soft_opt_out.get(i);
      return l == null
        ? i
        : s(
            i,
            o(
              "AdsPlacementSoftOptOutUtils",
            ).convertPositionKeysToSoftOptOutPlacements(new Set()),
          );
    }
    function h(e, t) {
      var n, a;
      return o("AdsMutators").chain(
        (n = r("AdsCampaignRecordAccessors")).targeting.user_os.set(
          (a = r("immutable")).List(t.spec.user_os),
        ),
        n.targeting.excluded_user_device.set(
          a.List(t.spec.excluded_user_device),
        ),
        n.targeting.user_device.set(a.List(t.spec.user_device)),
        n.targeting.wireless_carrier.set(a.List(t.spec.wireless_carrier)),
      )(e);
    }
    function y(e, t) {
      return o("AdsMutators").chain(
        r(
          "AdsCampaignRecordAccessors",
        ).targeting.brand_safety_content_filter_levels.set(
          r("immutable").List(t.spec.brand_safety_content_filter_levels),
        ),
        r(
          "AdsCampaignRecordAccessors",
        ).targeting.excluded_publisher_list_ids.set(
          r("immutable").List(t.spec.excluded_publisher_list_ids),
        ),
        r(
          "AdsCampaignRecordAccessors",
        ).targeting.excluded_brand_safety_content_types.set(
          r("immutable").List(t.spec.excluded_brand_safety_content_types),
        ),
      )(e);
    }
    ((l.updatePlacementSpec = e),
      (l.updatePlacementSoftOptOut = s),
      (l.updatePublisherPlatformsInfo = u),
      (l.clearUpMobileSettings = c),
      (l.getClearPlacementSettingsMutator = d),
      (l.setDevicePlatform = p),
      (l.setMobileDeviceVersion = _),
      (l.setMobileDeviceType = f),
      (l.resetPlacement = g),
      (l.mergeMobilePlacementData = h),
      (l.mergeBrandSafetyPlacementData = y));
  },
  98,
);
