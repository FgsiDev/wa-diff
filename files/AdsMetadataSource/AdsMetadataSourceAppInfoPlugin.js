__d(
  "AdsMetadataSourceAppInfoPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsConnectedSourcesCloseNestedViewAction",
    "AdsConnectedSourcesCloseNestedWithoutSaveViewAction",
    "AdsConnectedSourcesFbt",
    "JSResource",
    "adsCreateStructuredSelector",
    "adsUEditorAdgroupConnectedSourcesAppInfoEligibilitySelector",
    "immutable",
    "lazyLoadComponent",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = r("lazyLoadComponent")(
        r("JSResource")("AdsMetadataAppInfoMainViewContainer.react").__setRef(
          "AdsMetadataSourceAppInfoPlugin",
        ),
      ),
      c = r("lazyLoadComponent")(
        r("JSResource")("AdsMetadataAppInfoOptInBadge.react").__setRef(
          "AdsMetadataSourceAppInfoPlugin",
        ),
      ),
      d = r("lazyLoadComponent")(
        r("JSResource")("AdsMetadataAppInfoSelectedItems.react").__setRef(
          "AdsMetadataSourceAppInfoPlugin",
        ),
      ),
      m = r("lazyLoadComponent")(
        r("JSResource")("AdsMetadataAppReviewManageNestedView.react").__setRef(
          "AdsMetadataSourceAppInfoPlugin",
        ),
      ),
      p = {
        key: "app_info",
        type: "metadata/source_extension",
        preloadableJSResources: [
          r("JSResource")("AdsMetadataAppInfoMainViewContainer.react").__setRef(
            "AdsMetadataSourceAppInfoPlugin",
          ),
          r("JSResource")("AdsMetadataAppInfoOptInBadge.react").__setRef(
            "AdsMetadataSourceAppInfoPlugin",
          ),
          r("JSResource")("AdsMetadataAppInfoSelectedItems.react").__setRef(
            "AdsMetadataSourceAppInfoPlugin",
          ),
          r("JSResource")(
            "AdsMetadataAppReviewManageNestedView.react",
          ).__setRef("AdsMetadataSourceAppInfoPlugin"),
        ],
        getSortOrder: function () {
          return 0;
        },
        getHeading: function () {
          return o("AdsConnectedSourcesFbt").APP_INFO_TITLE;
        },
        getSubheading: function () {
          return o("AdsConnectedSourcesFbt").APP_INFO_DESCRIPTION;
        },
        getTooltip: function () {
          return o("AdsConnectedSourcesFbt").APP_INFO_TOOLTIP_CONTENT;
        },
        getItemCount: function (t) {
          var e,
            n,
            r,
            o = t == null ? void 0 : t.appInfoSpec;
          if (o == null || o.enrollStatus !== "OPT_IN") return 0;
          var a = 0;
          return (
            ((e = o.media) == null ? void 0 : e.enrollStatus) === "OPT_IN" &&
              a++,
            ((n = o.appInformation) == null ? void 0 : n.enrollStatus) ===
              "OPT_IN" && a++,
            ((r = o.ratingsAndReviews) == null ? void 0 : r.enrollStatus) ===
              "OPT_IN" && a++,
            a
          );
        },
        visibilityDataSelector: r("adsCreateStructuredSelector")(
          {
            isEligible: o(
              "adsUEditorAdgroupConnectedSourcesAppInfoEligibilitySelector",
            ).adsUEditorAdgroupConnectedSourcesAppInfoEligibilitySelector,
          },
          i.id + ".visibilityDataSelector",
        ),
        isVisible: function (t) {
          var e = t.isEligible;
          return e;
        },
        getInitialStateFromAdgroup: function (t) {
          var e,
            n,
            r,
            o,
            a,
            i,
            l,
            s,
            u,
            c,
            d,
            m,
            p,
            _,
            f,
            g,
            h,
            y,
            C,
            b,
            v,
            S,
            R,
            L =
              (e = t.creative) == null || (e = e.creative_sourcing_spec) == null
                ? void 0
                : e.app_info_spec,
            E = L == null ? void 0 : L.enroll_status,
            k = L == null ? void 0 : L.media,
            I = L == null ? void 0 : L.app_information,
            T = L == null ? void 0 : L.ratings_and_reviews,
            D =
              (k == null ? void 0 : k.enroll_status) === "OPT_IN" ||
              (I == null ? void 0 : I.enroll_status) === "OPT_IN" ||
              (T == null ? void 0 : T.enroll_status) === "OPT_IN";
          return (
            D && E !== "OPT_IN" && (E = "OPT_IN"),
            {
              appInfoSpec: {
                enrollStatus: E != null ? E : null,
                enrollActionType:
                  (n =
                    L == null || (r = L.action_metadata) == null
                      ? void 0
                      : r.type) != null
                    ? n
                    : null,
                applicationId:
                  (o = L == null ? void 0 : L.application_id) != null
                    ? o
                    : null,
                objectStoreUrl:
                  (a = L == null ? void 0 : L.object_store_url) != null
                    ? a
                    : null,
                media:
                  k != null
                    ? {
                        enrollStatus:
                          (i = k == null ? void 0 : k.enroll_status) != null
                            ? i
                            : null,
                        enrollActionType:
                          (l =
                            k == null || (s = k.action_metadata) == null
                              ? void 0
                              : s.type) != null
                            ? l
                            : null,
                        iconImageUrl:
                          (u = k == null ? void 0 : k.icon_image_url) != null
                            ? u
                            : null,
                        screenshotUrls:
                          (k == null ? void 0 : k.screenshot_urls) != null
                            ? Array.from(k == null ? void 0 : k.screenshot_urls)
                            : null,
                      }
                    : void 0,
                appInformation:
                  I != null
                    ? {
                        enrollStatus:
                          (c = I == null ? void 0 : I.enroll_status) != null
                            ? c
                            : null,
                        enrollActionType:
                          (d =
                            I == null || (m = I.action_metadata) == null
                              ? void 0
                              : m.type) != null
                            ? d
                            : null,
                        appAuthor:
                          (p = I == null ? void 0 : I.app_author) != null
                            ? p
                            : null,
                        appCategory:
                          (_ = I == null ? void 0 : I.app_category) != null
                            ? _
                            : null,
                        appDescription:
                          (f = I == null ? void 0 : I.app_description) != null
                            ? f
                            : null,
                        appName:
                          (g = I == null ? void 0 : I.app_name) != null
                            ? g
                            : null,
                        appPrice:
                          (h = I == null ? void 0 : I.app_price) != null
                            ? h
                            : null,
                        appSubtitle:
                          (y = I == null ? void 0 : I.app_subtitle) != null
                            ? y
                            : null,
                      }
                    : void 0,
                ratingsAndReviews:
                  T != null
                    ? {
                        enrollStatus:
                          (C = T == null ? void 0 : T.enroll_status) != null
                            ? C
                            : null,
                        enrollActionType:
                          (b =
                            T == null || (v = T.action_metadata) == null
                              ? void 0
                              : v.type) != null
                            ? b
                            : null,
                        ratings:
                          (S = T == null ? void 0 : T.ratings) != null
                            ? S
                            : null,
                        starReviews:
                          (R = T == null ? void 0 : T.star_reviews) != null
                            ? R
                            : null,
                        summaryRating:
                          (T == null ? void 0 : T.summary_rating) != null
                            ? Array.from(T == null ? void 0 : T.summary_rating)
                            : null,
                        topReviews:
                          (T == null ? void 0 : T.top_reviews) != null
                            ? Array.from(T == null ? void 0 : T.top_reviews)
                                .filter(Boolean)
                                .map(function (e) {
                                  return {
                                    isChecked: e.is_checked,
                                    isFeatured: e.is_featured,
                                    reviewText: e.review_text,
                                  };
                                })
                            : void 0,
                      }
                    : void 0,
              },
            }
          );
        },
        mutateAdgroup: function (t, n) {
          var e,
            o,
            a,
            i = t,
            l = n == null ? void 0 : n.appInfoSpec;
          if (l == null)
            return (
              (i = r(
                "AdsAdgroupRecordAccessors",
              ).creative.creative_sourcing_spec.app_info_spec.delete(i)),
              i
            );
          var s =
              (l == null || (e = l.media) == null ? void 0 : e.enrollStatus) ===
                "OPT_IN" ||
              (l == null || (o = l.appInformation) == null
                ? void 0
                : o.enrollStatus) === "OPT_IN" ||
              (l == null || (a = l.ratingsAndReviews) == null
                ? void 0
                : a.enrollStatus) === "OPT_IN",
            u =
              s && (l == null ? void 0 : l.enrollStatus) !== "OPT_IN"
                ? "OPT_IN"
                : l == null
                  ? void 0
                  : l.enrollStatus;
          u != null &&
            (i = r(
              "AdsAdgroupRecordAccessors",
            ).creative.creative_sourcing_spec.app_info_spec.enroll_status.set(
              u,
            )(i));
          var c = l == null ? void 0 : l.enrollActionType;
          c != null &&
            (i = r(
              "AdsAdgroupRecordAccessors",
            ).creative.creative_sourcing_spec.app_info_spec.action_metadata.type.set(
              c,
            )(i));
          var d = l == null ? void 0 : l.applicationId;
          d != null &&
            (i = r(
              "AdsAdgroupRecordAccessors",
            ).creative.creative_sourcing_spec.app_info_spec.application_id.set(
              d,
            )(i));
          var m = l == null ? void 0 : l.objectStoreUrl;
          m != null &&
            (i = r(
              "AdsAdgroupRecordAccessors",
            ).creative.creative_sourcing_spec.app_info_spec.object_store_url.set(
              m,
            )(i));
          var p = l == null ? void 0 : l.media;
          if (p != null) {
            var _ = p == null ? void 0 : p.enrollStatus;
            _ != null &&
              (i = r(
                "AdsAdgroupRecordAccessors",
              ).creative.creative_sourcing_spec.app_info_spec.media.enroll_status.set(
                _,
              )(i));
            var f = p == null ? void 0 : p.enrollActionType;
            f != null &&
              (i = r(
                "AdsAdgroupRecordAccessors",
              ).creative.creative_sourcing_spec.app_info_spec.media.action_metadata.type.set(
                f,
              )(i));
            var g = p == null ? void 0 : p.iconImageUrl;
            g != null &&
              (i = r(
                "AdsAdgroupRecordAccessors",
              ).creative.creative_sourcing_spec.app_info_spec.media.icon_image_url.set(
                g,
              )(i));
            var h = p == null ? void 0 : p.screenshotUrls;
            h != null &&
              (i = r(
                "AdsAdgroupRecordAccessors",
              ).creative.creative_sourcing_spec.app_info_spec.media.screenshot_urls.set(
                r("immutable").List(h),
              )(i));
          } else
            i = r(
              "AdsAdgroupRecordAccessors",
            ).creative.creative_sourcing_spec.app_info_spec.media.delete(i);
          var y = l == null ? void 0 : l.appInformation;
          if (y != null) {
            var C = y == null ? void 0 : y.enrollStatus;
            C != null &&
              (i = r(
                "AdsAdgroupRecordAccessors",
              ).creative.creative_sourcing_spec.app_info_spec.app_information.enroll_status.set(
                C,
              )(i));
            var b = y == null ? void 0 : y.enrollActionType;
            b != null &&
              (i = r(
                "AdsAdgroupRecordAccessors",
              ).creative.creative_sourcing_spec.app_info_spec.app_information.action_metadata.type.set(
                b,
              )(i));
            var v = y == null ? void 0 : y.appAuthor;
            v != null &&
              (i = r(
                "AdsAdgroupRecordAccessors",
              ).creative.creative_sourcing_spec.app_info_spec.app_information.app_author.set(
                v,
              )(i));
            var S = y == null ? void 0 : y.appCategory;
            S != null &&
              (i = r(
                "AdsAdgroupRecordAccessors",
              ).creative.creative_sourcing_spec.app_info_spec.app_information.app_category.set(
                S,
              )(i));
            var R = y == null ? void 0 : y.appDescription;
            R != null &&
              (i = r(
                "AdsAdgroupRecordAccessors",
              ).creative.creative_sourcing_spec.app_info_spec.app_information.app_description.set(
                R,
              )(i));
            var L = y == null ? void 0 : y.appName;
            L != null &&
              (i = r(
                "AdsAdgroupRecordAccessors",
              ).creative.creative_sourcing_spec.app_info_spec.app_information.app_name.set(
                L,
              )(i));
            var E = y == null ? void 0 : y.appPrice;
            E != null &&
              (i = r(
                "AdsAdgroupRecordAccessors",
              ).creative.creative_sourcing_spec.app_info_spec.app_information.app_price.set(
                E,
              )(i));
            var k = y == null ? void 0 : y.appSubtitle;
            k != null &&
              (i = r(
                "AdsAdgroupRecordAccessors",
              ).creative.creative_sourcing_spec.app_info_spec.app_information.app_subtitle.set(
                k,
              )(i));
          } else
            i = r(
              "AdsAdgroupRecordAccessors",
            ).creative.creative_sourcing_spec.app_info_spec.app_information.delete(
              i,
            );
          var I = l == null ? void 0 : l.ratingsAndReviews;
          if (I != null) {
            var T = I == null ? void 0 : I.enrollStatus;
            T != null &&
              (i = r(
                "AdsAdgroupRecordAccessors",
              ).creative.creative_sourcing_spec.app_info_spec.ratings_and_reviews.enroll_status.set(
                T,
              )(i));
            var D = I == null ? void 0 : I.enrollActionType;
            D != null &&
              (i = r(
                "AdsAdgroupRecordAccessors",
              ).creative.creative_sourcing_spec.app_info_spec.ratings_and_reviews.action_metadata.type.set(
                D,
              )(i));
            var x = I == null ? void 0 : I.ratings;
            x != null &&
              (i = r(
                "AdsAdgroupRecordAccessors",
              ).creative.creative_sourcing_spec.app_info_spec.ratings_and_reviews.ratings.set(
                x,
              )(i));
            var $ = I == null ? void 0 : I.starReviews;
            $ != null &&
              (i = r(
                "AdsAdgroupRecordAccessors",
              ).creative.creative_sourcing_spec.app_info_spec.ratings_and_reviews.star_reviews.set(
                $,
              )(i));
            var P = I == null ? void 0 : I.summaryRating;
            P != null &&
              (i = r(
                "AdsAdgroupRecordAccessors",
              ).creative.creative_sourcing_spec.app_info_spec.ratings_and_reviews.summary_rating.set(
                r("immutable").List(P),
              )(i));
            var N = I == null ? void 0 : I.topReviews;
            N != null &&
              (i = r(
                "AdsAdgroupRecordAccessors",
              ).creative.creative_sourcing_spec.app_info_spec.ratings_and_reviews.top_reviews.set(
                r("immutable").List(
                  N.map(function (e) {
                    return r("immutable").Map({
                      is_checked: e.isChecked,
                      is_featured: e.isFeatured,
                      review_text: e.reviewText,
                    });
                  }),
                ),
              )(i));
          } else
            i = r(
              "AdsAdgroupRecordAccessors",
            ).creative.creative_sourcing_spec.app_info_spec.ratings_and_reviews.delete(
              i,
            );
          return i;
        },
        MainComponent: function () {
          return s.jsx(u, {});
        },
        OptInComponent: function () {
          return s.jsx(c, {});
        },
        SelectedItemsComponent: function () {
          return s.jsx(d, {});
        },
        nestedViewType: "dynamic-handlers",
        NestedViewComponent: function () {
          return s.jsx(m, {});
        },
        getNestedViewTitle: function () {
          return o("AdsConnectedSourcesFbt").APP_INFO_MANAGE_REVIEWS_TITLE;
        },
        getNestedViewDescription: function () {
          return o("AdsConnectedSourcesFbt")
            .APP_INFO_MANAGE_REVIEWS_DESCRIPTION;
        },
        getNestedViewPrimaryButtonLabel: function (t) {
          var e,
            n,
            r = t.pluginState,
            a = t.visibleNestedViewComponentPluginKey;
          if (a !== "app_info") return null;
          var i =
              (e =
                r == null ||
                (n = r.appInfoSpec) == null ||
                (n = n.ratingsAndReviews) == null
                  ? void 0
                  : n.topReviews) != null
                ? e
                : [],
            l = i.filter(function (e) {
              return e.isChecked === !0;
            }).length;
          return o(
            "AdsConnectedSourcesFbt",
          ).getAppInfoManageReviewsApplyButtonLabel(l);
        },
        getNestedViewPrimaryClickHandler: function (t) {
          return function () {
            r("AdsConnectedSourcesCloseNestedViewAction").dispatch(
              {},
              {
                line: "504",
                module: "AdsMetadataSourceAppInfoPlugin.js",
                moduleID: i.id,
              },
            );
          };
        },
        getNestedViewSecondaryButtonLabel: function (t) {
          var e = t.visibleNestedViewComponentPluginKey;
          return e === "app_info"
            ? o("AdsConnectedSourcesFbt")
                .APP_INFO_MANAGE_REVIEWS_BACK_BUTTON_LABEL
            : null;
        },
        getNestedViewSecondaryClickHandler: function (t) {
          var e = t.visibleNestedViewComponentPluginKey;
          return e === "app_info"
            ? function () {
                r(
                  "AdsConnectedSourcesCloseNestedWithoutSaveViewAction",
                ).dispatch(
                  {},
                  {
                    line: "521",
                    module: "AdsMetadataSourceAppInfoPlugin.js",
                    moduleID: i.id,
                  },
                );
              }
            : null;
        },
      },
      _ = p;
    l.default = _;
  },
  98,
);
