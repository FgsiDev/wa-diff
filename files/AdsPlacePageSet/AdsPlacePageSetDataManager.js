__d(
  "AdsPlacePageSetDataManager",
  [
    "AdsAsyncLocationsCheckerDataLoader",
    "AdsFlatPageSetLoadErrorAction",
    "AdsFlatPageSetLoadedAction",
    "AdsFlatPageSetStoreKey",
    "AdsGraphAPI",
    "AdsLocationMetaConstant",
    "AdsLocationPageIDsAndRoot",
    "AdsPlacePageSet",
    "AdsPlacePageSetActions",
    "AdsPlacePageSetInfoActions",
    "AdsPredefinedPlacePageSetLoadErrorDataAction",
    "AdsPredefinedPlacePageSetLoadSuccessDataAction",
    "AdsPredefinedPlacePageSetLoadingDataAction",
    "DateTime",
    "GraphAPIFieldUtils",
    "ODS",
    "Promise",
    "Timezone",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
    "immutable",
    "nullthrows",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = "flat pageset",
      d = [
        (u = o("AdsLocationMetaConstant")).SUBFIELD_AUDIENCE,
        u.SUBFIELD_FIXED_RADIUS,
        u.SUBFIELD_EXTRA_DATA,
        u.SUBFIELD_CUSTOM,
      ],
      m = [
        "creation_time",
        "id",
        o("GraphAPIFieldUtils").getFieldWithSubfields("parent_page", ["id"]),
        "location_types",
        o("GraphAPIFieldUtils").getFieldWithSubfields("metadata", d),
        "name",
        "pages_count",
        "pages_selection",
        "state",
        "targeted_area_type",
      ];
    function p(e, t) {
      return (
        t != null
          ? o("AdsGraphAPI")
              .get(i.id)
              .object("ad_place_page_set", t)
              .get({ fields: m })
              .catch(function () {
                return null;
              })
          : (s || (s = n("Promise"))).resolve()
      ).then(function (t) {
        return [e, t];
      });
    }
    var _ = (function () {
        function t() {
          var e = this;
          ((this.fetchMostRecentPageSet = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                var n = "custom";
                r("AdsPredefinedPlacePageSetLoadingDataAction").dispatch(
                  { accountID: e, pageID: t, pagesSelection: n },
                  {
                    line: "248",
                    module: "AdsPlacePageSetDataManager.js",
                    moduleID: i.id,
                  },
                );
                try {
                  var a = yield o("AdsGraphAPI")
                      .get(i.id)
                      .adaccount(e)
                      .edge("ad_place_page_sets")
                      .get({
                        fields: ["id"],
                        limit: 100,
                        min_pages_count: 1,
                        page_id: t,
                        since: r("DateTime")
                          .now(o("Timezone").UTC)
                          .subtractDays(7)
                          .valueOf(),
                        pages_selection: n,
                      }),
                    l = [].concat(a.data, [{ id: null }]),
                    s = l[0].id,
                    u = null;
                  if (s) {
                    var c = yield o("AdsAsyncLocationsCheckerDataLoader").load(
                        new (r("AdsLocationPageIDsAndRoot"))({
                          page_set_id: s,
                        }),
                      ),
                      d = c.get("permanently_closed") || [];
                    d.length === 0 && (u = s);
                  }
                  r("AdsPredefinedPlacePageSetLoadSuccessDataAction").dispatch(
                    {
                      accountID: e,
                      pageID: t,
                      pageSetID: u,
                      pagesSelection: n,
                    },
                    {
                      line: "284",
                      module: "AdsPlacePageSetDataManager.js",
                      moduleID: i.id,
                    },
                  );
                } catch (o) {
                  r("AdsPredefinedPlacePageSetLoadErrorDataAction").dispatch(
                    {
                      accountID: e,
                      error: r("getErrorSafe")(o),
                      pageID: t,
                      pagesSelection: n,
                    },
                    {
                      line: "291",
                      module: "AdsPlacePageSetDataManager.js",
                      moduleID: i.id,
                    },
                  );
                }
              },
            );
            return function (t, n) {
              return e.apply(this, arguments);
            };
          })()),
            (this.getOrCreateFlatPageSetID = (function () {
              var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (t, n) {
                  var o = null,
                    a = null;
                  try {
                    o = yield e.fetchMostRecentFlatPageSet(t, n);
                  } catch (e) {
                    a = e;
                  }
                  if (o == null)
                    try {
                      var l = yield e.createNewFlatPageset(t, n);
                      o = l.id;
                    } catch (e) {
                      a = e;
                    }
                  if (a != null && o == null) {
                    r("AdsFlatPageSetLoadErrorAction").dispatch(
                      {
                        key: new (r("AdsFlatPageSetStoreKey"))({
                          accountID: t,
                          dlaParentPageID: n,
                        }),
                        error: r("getErrorSafe")(a),
                      },
                      {
                        line: "331",
                        module: "AdsPlacePageSetDataManager.js",
                        moduleID: i.id,
                      },
                    );
                    return;
                  }
                  r("AdsFlatPageSetLoadedAction").dispatch(
                    {
                      key: new (r("AdsFlatPageSetStoreKey"))({
                        accountID: t,
                        dlaParentPageID: n,
                      }),
                      pageSetID: r("nullthrows")(o),
                      pageSetName: c,
                    },
                    {
                      line: "342",
                      module: "AdsPlacePageSetDataManager.js",
                      moduleID: i.id,
                    },
                  );
                },
              );
              return function (e, n) {
                return t.apply(this, arguments);
              };
            })()),
            (this.fetchMostRecentFlatPageSet = (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (e, t) {
                  var r = "custom";
                  try {
                    var a = yield o("AdsGraphAPI")
                        .get(i.id)
                        .adaccount(e)
                        .edge("ad_place_page_sets")
                        .get({
                          fields: [
                            "id",
                            o("GraphAPIFieldUtils").getFieldWithSubfields(
                              "parent_page",
                              ["id"],
                            ),
                            "pages_count",
                            "targeted_area_type",
                          ],
                          limit: 100,
                          page_id: t,
                          pages_selection: r,
                        }),
                      l = a.data;
                    return (
                      (l = l.filter(function (e) {
                        return (
                          e.pages_count === 0 && e.targeted_area_type === "none"
                        );
                      })),
                      (s || (s = n("Promise"))).resolve(
                        l.length > 0 ? l[0].id : null,
                      )
                    );
                  } catch (e) {
                    return (s || (s = n("Promise"))).reject(e);
                  }
                },
              );
              return function (t, n) {
                return e.apply(this, arguments);
              };
            })()),
            (this.createNewFlatPageset = function (e, t) {
              return o("AdsGraphAPI")
                .get(i.id)
                .adaccount(e)
                .edge("ad_place_page_sets")
                .post({ parent_page: t, name: c });
            }));
        }
        var a = t.prototype;
        return (
          (a.fetchPlacePageSetInfo = function (t) {
            r("promiseDone")(
              o("AdsGraphAPI")
                .get(i.id)
                .object("ad_place_page_set", t)
                .get({
                  fields: [
                    "total_pages_count",
                    "visible_only_in_ads_pages_count",
                    "parent_page",
                  ],
                }),
              function (e) {
                o("AdsPlacePageSetInfoActions").pageSetsInfoLoadSuccess(t, {
                  count: e.total_pages_count,
                  parent_page_id: e.parent_page.id,
                  visible_only_in_ads_count: e.visible_only_in_ads_pages_count,
                });
              },
              function (e) {
                o("AdsPlacePageSetInfoActions").pageSetsInfoLoadError(
                  t,
                  r("err")(e.message),
                );
              },
            );
          }),
          (a.fetchPageSetListWithRetry = function (n) {
            var t = function () {
              return o("AdsGraphAPI")
                .get(i.id)
                .adaccount(n.accountID)
                .edge("ad_place_page_sets")
                .get({
                  fields: m,
                  limit: n.limit,
                  min_pages_count: n.minPagesCount,
                  page_id: n.pageID,
                  pages_selection: n.pagesSelection,
                  since: n.since,
                });
            };
            return t()
              .catch(function () {
                return (
                  (e || (e = o("ODS"))).bumpEntityKey(
                    8101,
                    "location_manager_store_sets",
                    "ad_place_page_sets_list_fetch_retry",
                  ),
                  t()
                );
              })
              .catch(function () {
                return (
                  (e || (e = o("ODS"))).bumpEntityKey(
                    8101,
                    "location_manager_store_sets",
                    "ad_place_page_sets_list_fetch_error",
                  ),
                  { data: [] }
                );
              });
          }),
          (a.fetchPageSetList = function (t) {
            var e = t.pageSetID;
            r("promiseDone")(
              this.fetchPageSetListWithRetry(t).then(function (t) {
                return p(t, e);
              }),
              function (e) {
                var n = e[0],
                  a = e[1],
                  i = r("immutable")
                    .OrderedMap(
                      [].concat(a != null ? [a] : [], n.data).map(function (e) {
                        return [e.id, new (r("AdsPlacePageSet"))(e)];
                      }),
                    )
                    .toList();
                o("AdsPlacePageSetActions").pageSetsLoadSuccess(t, i);
              },
              function () {},
            );
          }),
          (a.fetchDefaultPageSet = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                var n = "country_default";
                r("AdsPredefinedPlacePageSetLoadingDataAction").dispatch(
                  { accountID: e, pageID: t, pagesSelection: n },
                  {
                    line: "199",
                    module: "AdsPlacePageSetDataManager.js",
                    moduleID: i.id,
                  },
                );
                try {
                  var a = yield o("AdsGraphAPI")
                      .get(i.id)
                      .adaccount(e)
                      .edge("ad_place_page_sets")
                      .get({ fields: ["id"], page_id: t, pages_selection: n }),
                    l = [].concat(a.data, [{ id: null }]),
                    s = l[0].id;
                  r("AdsPredefinedPlacePageSetLoadSuccessDataAction").dispatch(
                    {
                      accountID: e,
                      pageID: t,
                      pageSetID: s,
                      pagesSelection: n,
                    },
                    {
                      line: "217",
                      module: "AdsPlacePageSetDataManager.js",
                      moduleID: i.id,
                    },
                  );
                } catch (o) {
                  r("AdsPredefinedPlacePageSetLoadErrorDataAction").dispatch(
                    {
                      accountID: e,
                      error: r("getErrorSafe")(o),
                      pageID: t,
                      pagesSelection: n,
                    },
                    {
                      line: "224",
                      module: "AdsPlacePageSetDataManager.js",
                      moduleID: i.id,
                    },
                  );
                }
              },
            );
            function t(t, n) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.deletePageSet = function (t) {
            return o("AdsGraphAPI")
              .get(i.id)
              .object("ad_place_page_set", t)
              .remove();
          }),
          t
        );
      })(),
      f = new _();
    l.default = f;
  },
  98,
);
