__d(
  "AdsMetadataSourceWebsiteMediaPlugin",
  [
    "AdsAPIAdgroupRecordUtils",
    "AdsAccountSettingsIdProvider",
    "AdsConnectedSourcesFbt",
    "AdsMetadataCombinedWebsiteHighlightsPluginUtils",
    "AdsMetadataWebsiteMediaUtils",
    "JSResource",
    "adsCreateSelector",
    "adsCreateStructuredSelector",
    "adsUEditorAdgroupConnectedSourcesCatalogEligibilitySelector",
    "adsUEditorAdgroupWebsiteMediaExtensionEligibilityWithDataSelector",
    "adsUEditorSelectedAdgroupPlainObjectsSelector",
    "adsUserSettingsSelector",
    "lazyLoadComponent",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u() {
      var e,
        t = r("AdsAccountSettingsIdProvider").toFluxSelector()();
      return t == null
        ? null
        : (e = o("adsUserSettingsSelector").adsUserSettingsSelector()(t)) ==
            null
          ? void 0
          : e.getValue();
    }
    var c = r("lazyLoadComponent")(
        r("JSResource")("AdsMetadataWebsiteMediaMainView.react").__setRef(
          "AdsMetadataSourceWebsiteMediaPlugin",
        ),
      ),
      d = r("lazyLoadComponent")(
        r("JSResource")("AdsMetadataWebsiteMediaOptInBadge.react").__setRef(
          "AdsMetadataSourceWebsiteMediaPlugin",
        ),
      ),
      m = r("lazyLoadComponent")(
        r("JSResource")("AdsMetadataWebsiteMediaSelectedItems.react").__setRef(
          "AdsMetadataSourceWebsiteMediaPlugin",
        ),
      ),
      p = {
        key: "website_media",
        type: "metadata/source_extension",
        preloadableJSResources: [
          r("JSResource")("AdsMetadataWebsiteMediaMainView.react").__setRef(
            "AdsMetadataSourceWebsiteMediaPlugin",
          ),
          r("JSResource")("AdsMetadataWebsiteMediaOptInBadge.react").__setRef(
            "AdsMetadataSourceWebsiteMediaPlugin",
          ),
          r("JSResource")(
            "AdsMetadataWebsiteMediaSelectedItems.react",
          ).__setRef("AdsMetadataSourceWebsiteMediaPlugin"),
        ],
        getSortOrder: function () {
          return 5;
        },
        getHeading: function () {
          return o("AdsConnectedSourcesFbt").WEBSITE_MEDIA_HEADING;
        },
        getSubheading: function () {
          return o("AdsConnectedSourcesFbt").WEBSITE_MEDIA_SUBTITLE;
        },
        getTooltip: function () {
          return o("AdsConnectedSourcesFbt")
            .WEBSITE_MEDIA_TOOLTIP_ADDITIONAL_SOURCES;
        },
        visibilityDataSelector: r("adsCreateStructuredSelector")(
          {
            isEligible: r("adsCreateSelector")(
              [
                o(
                  "adsUEditorAdgroupWebsiteMediaExtensionEligibilityWithDataSelector",
                )
                  .adsUEditorAdgroupWebsiteMediaExtensionEligibilityWithDataSelector,
                r("adsUEditorSelectedAdgroupPlainObjectsSelector"),
                o("adsUEditorAdgroupConnectedSourcesCatalogEligibilitySelector")
                  .adsUEditorAdgroupConnectedSourcesCatalogEligibilitySelector,
              ],
              function (t, n, r) {
                return o(
                  "AdsMetadataWebsiteMediaUtils",
                ).isEligibleForCombinedWebsiteHighlightsExperience({
                  fromExistingPostFlow:
                    (n == null ? void 0 : n[0]) != null &&
                    o("AdsAPIAdgroupRecordUtils").isExistingPostAd(n[0]),
                  exposure: "silent",
                  isCatalogEligible: r,
                })
                  ? !1
                  : t;
              },
              { name: i.id + ".isEligible" },
            ),
          },
          i.id + ".visibilityDataSelector",
        ),
        isVisible: function (t) {
          var e = t.isEligible;
          return e;
        },
        MainComponent: function () {
          return s.jsx(c, {});
        },
        OptInComponent: function () {
          return s.jsx(d, {});
        },
        SelectedItemsComponent: function () {
          return s.jsx(m, {});
        },
        getInitialStateFromAdgroup: function (t, n) {
          return o(
            "AdsMetadataCombinedWebsiteHighlightsPluginUtils",
          ).getInitialWebsiteMediaStateFromAdgroup(t, n, u());
        },
        mutateAdgroup: function (t, n) {
          if (
            (n == null ? void 0 : n.isCombinedWebsiteHighlightsVisible) === !0
          )
            return t;
          var e = r("AdsAccountSettingsIdProvider").toFluxSelector()();
          return o(
            "AdsMetadataCombinedWebsiteHighlightsPluginUtils",
          ).mutateWebsiteMediaAdgroup(t, n, e);
        },
      },
      _ = p;
    l.default = _;
  },
  98,
);
