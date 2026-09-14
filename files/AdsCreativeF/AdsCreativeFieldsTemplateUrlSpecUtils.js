__d(
  "AdsCreativeFieldsTemplateUrlSpecUtils",
  [
    "AdsAPIAdgroupPaths",
    "AdsAPIConnectionObjectPaths",
    "AdsAdgroupSetHasCustomTemplateUrlSpecFieldsDataAction",
    "AdsAppPlatformCreativeFieldTypes",
    "AdsAppUtils",
    "ads-app-platforms",
    "getByPath",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      switch (e) {
        case r("AdsAppPlatformCreativeFieldTypes").ANDROID:
          return r("AdsAPIAdgroupPaths").CREATIVE.TEMPLATE_URL_SPEC.ANDROID.URL;
        case r("AdsAppPlatformCreativeFieldTypes").IOS:
          return r("AdsAPIAdgroupPaths").CREATIVE.TEMPLATE_URL_SPEC.IOS.URL;
        case r("AdsAppPlatformCreativeFieldTypes").IPAD:
          return r("AdsAPIAdgroupPaths").CREATIVE.TEMPLATE_URL_SPEC.IPAD.URL;
        case r("AdsAppPlatformCreativeFieldTypes").IPHONE:
          return r("AdsAPIAdgroupPaths").CREATIVE.TEMPLATE_URL_SPEC.IPHONE.URL;
        case r("AdsAppPlatformCreativeFieldTypes").WINDOWS:
          return r("AdsAPIAdgroupPaths").CREATIVE.TEMPLATE_URL_SPEC
            .WINDOWS_PHONE.URL;
      }
    }
    function s(e) {
      switch (e) {
        case r("AdsAppPlatformCreativeFieldTypes").ANDROID:
          return r("AdsAPIAdgroupPaths").CREATIVE.TEMPLATE_URL_SPEC.ANDROID
            .APP_NAME;
        case r("AdsAppPlatformCreativeFieldTypes").IOS:
          return r("AdsAPIAdgroupPaths").CREATIVE.TEMPLATE_URL_SPEC.IOS
            .APP_NAME;
        case r("AdsAppPlatformCreativeFieldTypes").IPAD:
          return r("AdsAPIAdgroupPaths").CREATIVE.TEMPLATE_URL_SPEC.IPAD
            .APP_NAME;
        case r("AdsAppPlatformCreativeFieldTypes").IPHONE:
          return r("AdsAPIAdgroupPaths").CREATIVE.TEMPLATE_URL_SPEC.IPHONE
            .APP_NAME;
        case r("AdsAppPlatformCreativeFieldTypes").WINDOWS:
          return r("AdsAPIAdgroupPaths").CREATIVE.TEMPLATE_URL_SPEC
            .WINDOWS_PHONE.APP_NAME;
      }
    }
    function u(e) {
      switch (e) {
        case r("AdsAppPlatformCreativeFieldTypes").ANDROID:
          return r("AdsAPIAdgroupPaths").CREATIVE.TEMPLATE_URL_SPEC.ANDROID
            .PACKAGE;
        case r("AdsAppPlatformCreativeFieldTypes").IOS:
          return r("AdsAPIAdgroupPaths").CREATIVE.TEMPLATE_URL_SPEC.IOS
            .APP_STORE_ID;
        case r("AdsAppPlatformCreativeFieldTypes").IPAD:
          return r("AdsAPIAdgroupPaths").CREATIVE.TEMPLATE_URL_SPEC.IPAD
            .APP_STORE_ID;
        case r("AdsAppPlatformCreativeFieldTypes").IPHONE:
          return r("AdsAPIAdgroupPaths").CREATIVE.TEMPLATE_URL_SPEC.IPHONE
            .APP_STORE_ID;
        case r("AdsAppPlatformCreativeFieldTypes").WINDOWS:
          return r("AdsAPIAdgroupPaths").CREATIVE.TEMPLATE_URL_SPEC
            .WINDOWS_PHONE.APP_ID;
      }
    }
    function c(e) {
      var t = [];
      return (
        e.map(function (e) {
          var n = e.id,
            r = d(e);
          t.push({ id: n, hasInitValue: r });
        }),
        t
      );
    }
    function d(e) {
      var t = !1;
      for (var n of r("AdsAppPlatformCreativeFieldTypes").members()) {
        var o = r("getByPath")(e, s(n)),
          a = r("getByPath")(e, u(n));
        if (((t = o !== void 0 || a !== void 0), t === !0)) break;
      }
      return t;
    }
    function m(e, t) {
      return (
        (e === r("AdsAppPlatformCreativeFieldTypes").ANDROID &&
          !t.includes(o("ads-app-platforms").MOBILE_STORE.GOOGLE_PLAY)) ||
        (e === r("AdsAppPlatformCreativeFieldTypes").IOS &&
          !t.includes(o("ads-app-platforms").MOBILE_STORE.ITUNES) &&
          !t.includes(o("ads-app-platforms").MOBILE_STORE.ITUNES_IPAD)) ||
        (e === r("AdsAppPlatformCreativeFieldTypes").WINDOWS &&
          !t.includes(o("ads-app-platforms").MOBILE_STORE.WINDOWS_10_STORE))
      );
    }
    function p(e, t) {
      var n = [],
        o = r("getByPath")(
          e,
          r("AdsAPIConnectionObjectPaths").OBJECT_STORE_URLS,
        );
      return (
        o &&
          Object.keys(o).forEach(function (e) {
            r("AdsAppUtils")
              .getPlatformsForObjectives(t.getValues())
              .includes(e) && n.push(e);
          }),
        n
      );
    }
    function _(e) {
      r("AdsAdgroupSetHasCustomTemplateUrlSpecFieldsDataAction").dispatch(
        { initValueObjects: e },
        {
          line: "173",
          module: "AdsCreativeFieldsTemplateUrlSpecUtils.js",
          moduleID: i.id,
        },
      );
    }
    ((l.getUrlPathForPlatform = e),
      (l.getAppIDPathForPlatform = u),
      (l.getInitialCustomFieldValueObjects = c),
      (l.isUnsupportedPlatform = m),
      (l.getSupportedPlatforms = p),
      (l.setDeepLinkCustomFieldsInitValues = _));
  },
  98,
);
