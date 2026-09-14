__d(
  "AdsReportBuilderManageCustomMetricsDataManager",
  [
    "fbt",
    "AdsAddToastCardAction",
    "AdsGraphAPI",
    "AdsInterfacesLogger",
    "AdsRBCustomMetricsAPIParser",
    "AdsReportBuilderCreateCustomMetricFailAction",
    "AdsReportBuilderCreateCustomMetricSuccessAction",
    "AdsReportBuilderDeleteCustomMetricFailAction",
    "AdsReportBuilderDeleteCustomMetricSuccessAction",
    "AdsReportBuilderScopeType",
    "AdsReportBuilderUpdateCustomMetricFailAction",
    "AdsReportBuilderUpdateCustomMetricSuccessAction",
    "BizSiteIdentifier.brands",
    "GraphAPIPaging",
    "QuickPerformanceLogger",
    "immutable",
    "promiseDone",
    "qpl",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = (function () {
        function t() {}
        var n = t.prototype;
        return (
          (n.getBusinessID = function (t, n) {
            return t === r("AdsReportBuilderScopeType").BUSINESS
              ? n
              : o("BizSiteIdentifier.brands").getBusinessID();
          }),
          (n.$1 = function () {
            (e || (e = r("QuickPerformanceLogger"))).markerEnd(
              r("qpl")._(956828587, "2537"),
              2,
            );
          }),
          (n.$2 = function (n) {
            var t = r("qpl")._(956828587, "2537");
            (n != null &&
              (e || (e = r("QuickPerformanceLogger"))).markerAnnotate(t, {
                string: { error_message: n },
              }),
              (e || (e = r("QuickPerformanceLogger"))).markerEnd(t, 3));
          }),
          (n.getListEdge = function (t, n) {
            var e = this.getBusinessID(t, n);
            return e != null
              ? o("AdsGraphAPI")
                  .get(i.id)
                  .object("business", e)
                  .edge("ad_custom_derived_metrics")
              : o("AdsGraphAPI")
                  .get(i.id)
                  .adaccount(n)
                  .edge("ad_custom_derived_metrics");
          }),
          (n.fetch = function (n, a) {
            var e = t.getCustomMetricFields(),
              i = { fields: e, limit: 200 },
              l = this.getBusinessID(n, a);
            return (
              l != null && (i = babelHelpers.extends({}, i, { scope: n })),
              this.getListEdge(n, a)
                .setPriority("HIGH")
                .get(i)
                .then(o("GraphAPIPaging").allPages())
                .then(
                  function (e) {
                    var t = e.data;
                    return r("immutable").Set(
                      t.map(function (e) {
                        return o("AdsRBCustomMetricsAPIParser").parse(n, a, e);
                      }),
                    );
                  },
                  function (e) {
                    return e;
                  },
                )
            );
          }),
          (n.fetchByIDs = function (n, r, a) {
            var e = t.getCustomMetricFields();
            return o("AdsGraphAPI")
              .get(i.id)
              .objects("custom_metrics", n)
              .setPriority("HIGH")
              .get({ fields: e })
              .then(
                function (e) {
                  return new Set(
                    Object.keys(e).map(function (t) {
                      var n = e[t];
                      return o("AdsRBCustomMetricsAPIParser").parse(r, a, n);
                    }),
                  );
                },
                function (e) {
                  return e;
                },
              );
          }),
          (n.getToastCard = function (t, n) {
            return {
              "data-testid": "CustomMetricCreationorUpdateSuccessToast",
              id: "CustomMetricCreationorUpdateSuccessToast",
              cardType: "success",
              dismissTimer: 2e3,
              canDismiss: !0,
              header:
                n === "create"
                  ? s._(
                      /*BTDS*/ "{name for the custom metric} has been created",
                      [s._param("name for the custom metric", t)],
                    )
                  : s._(
                      /*BTDS*/ "{name for the custom metric} has been updated",
                      [s._param("name for the custom metric", t)],
                    ),
            };
          }),
          (n.create = function (n, a, l, s) {
            var e = this,
              u = t.getCustomMetricFields(),
              c = babelHelpers.extends({}, l, {
                business_id: o("BizSiteIdentifier.brands").getBusinessID(),
                fields: u,
              });
            r("promiseDone")(
              this.getListEdge(n, a).post(c),
              function (t) {
                var u = o("AdsRBCustomMetricsAPIParser").parse(n, a, t);
                if (s) {
                  var c;
                  r("AdsInterfacesLogger").log({
                    eventName: "ads_cm_click_save_and_create_new_success",
                    data:
                      ((c = {}),
                      (c.custom_metric_formula =
                        u == null ? void 0 : u.formula),
                      (c.custom_metric_format =
                        u == null ? void 0 : u.format_type),
                      c),
                  });
                } else {
                  var d;
                  r("AdsInterfacesLogger").log({
                    eventName: "ads_cm_click_create_metric_success",
                    data:
                      ((d = {}),
                      (d.custom_metric_formula =
                        u == null ? void 0 : u.formula),
                      (d.custom_metric_format =
                        u == null ? void 0 : u.format_type),
                      d),
                  });
                }
                (r("AdsReportBuilderCreateCustomMetricSuccessAction").dispatch(
                  { customMetricRecord: u, isSaveAndAddNew: s },
                  {
                    line: "235",
                    module: "AdsReportBuilderManageCustomMetricsDataManager.js",
                    moduleID: i.id,
                  },
                ),
                  r("AdsAddToastCardAction").dispatch(
                    { toastCard: e.getToastCard(l.name, "create") },
                    {
                      line: "240",
                      module:
                        "AdsReportBuilderManageCustomMetricsDataManager.js",
                      moduleID: i.id,
                    },
                  ),
                  e.$1());
              },
              function (t) {
                if (s) {
                  var o;
                  r("AdsInterfacesLogger").log({
                    eventName: "ads_cm_click_save_and_create_new_failed",
                    data:
                      ((o = {}),
                      (o.custom_metric_formula = l.formula),
                      (o.custom_metric_format = l.format_type),
                      (o.error_data = t),
                      o),
                  });
                } else {
                  var u;
                  r("AdsInterfacesLogger").log({
                    eventName: "ads_cm_click_create_metric_failed",
                    data:
                      ((u = {}),
                      (u.custom_metric_formula = l.formula),
                      (u.custom_metric_format = l.format_type),
                      (u.error_data = t),
                      u),
                  });
                }
                (r("AdsReportBuilderCreateCustomMetricFailAction").dispatch(
                  {
                    scopeType: n,
                    scopeID: a,
                    error: t,
                    paramString: JSON.stringify(l),
                  },
                  {
                    line: "271",
                    module: "AdsReportBuilderManageCustomMetricsDataManager.js",
                    moduleID: i.id,
                  },
                ),
                  e.$2(t == null ? void 0 : t.message));
              },
            );
          }),
          (n.createFromRecord = function (t, n) {
            var e = t.description,
              r = t.format_type,
              o = t.formula,
              a = t.name,
              i = t.permissionType,
              l = t.scopeID,
              s = t.scopeType,
              u = {
                description: e,
                format_type: r,
                formula: o,
                name: a,
                permission: i,
              };
            this.create(s, l, u, n);
          }),
          (n.delete = function (t, n, a) {
            r("promiseDone")(
              o("AdsGraphAPI")
                .get(i.id)
                .object("ad_custom_derived_metrics", t)
                .remove(),
              function () {
                r("AdsReportBuilderDeleteCustomMetricSuccessAction").dispatch(
                  { scopeType: n, scopeID: a, id: t },
                  {
                    line: "320",
                    module: "AdsReportBuilderManageCustomMetricsDataManager.js",
                    moduleID: i.id,
                  },
                );
              },
              function (e) {
                r("AdsReportBuilderDeleteCustomMetricFailAction").dispatch(
                  { scopeType: n, scopeID: a, id: t, error: e },
                  {
                    line: "327",
                    module: "AdsReportBuilderManageCustomMetricsDataManager.js",
                    moduleID: i.id,
                  },
                );
              },
            );
          }),
          (n.deleteFromRecord = function (t) {
            var e = t.id,
              n = t.scopeID,
              r = t.scopeType;
            this.delete(e, r, n);
          }),
          (n.deleteFromRecords = function (t) {
            var e = this;
            t.map(function (t) {
              t.permissionType === "private" && e.deleteFromRecord(t);
            });
          }),
          (n.archiveFromRecords = function (t) {
            var e = this;
            t.map(function (t) {
              var n = t.id,
                r = t.permissionType,
                o = t.scopeID,
                a = t.scopeType;
              r === "shared" && e.archive(n, a, o);
            });
          }),
          (n.archive = function (n, a, l) {
            var e,
              s = t.getCustomMetricFields();
            r("promiseDone")(
              o("AdsGraphAPI")
                .get(i.id)
                .object("ad_custom_derived_metrics", n)
                .post(((e = {}), (e.is_archived = !0), (e.fields = s), e)),
              function (e) {
                r("AdsReportBuilderUpdateCustomMetricSuccessAction").dispatch(
                  o("AdsRBCustomMetricsAPIParser").parse(a, l, e),
                  {
                    line: "373",
                    module: "AdsReportBuilderManageCustomMetricsDataManager.js",
                    moduleID: i.id,
                  },
                );
              },
              function (e) {
                var t;
                r("AdsReportBuilderUpdateCustomMetricFailAction").dispatch(
                  {
                    id: n,
                    scopeType: a,
                    scopeID: l,
                    error: e,
                    paramString: JSON.stringify(
                      ((t = {}), (t.is_archived = !0), t),
                    ),
                  },
                  {
                    line: "378",
                    module: "AdsReportBuilderManageCustomMetricsDataManager.js",
                    moduleID: i.id,
                  },
                );
              },
            );
          }),
          (n.update = function (n, a, l, s) {
            var e = this,
              u = t.getCustomMetricFields(),
              c = babelHelpers.extends({}, s, { fields: u });
            r("promiseDone")(
              o("AdsGraphAPI")
                .get(i.id)
                .object("ad_custom_derived_metrics", n)
                .post(c),
              function (t) {
                var n = o("AdsRBCustomMetricsAPIParser").parse(a, l, t);
                (r("AdsReportBuilderUpdateCustomMetricSuccessAction").dispatch(
                  n,
                  {
                    line: "418",
                    module: "AdsReportBuilderManageCustomMetricsDataManager.js",
                    moduleID: i.id,
                  },
                ),
                  r("AdsAddToastCardAction").dispatch(
                    { toastCard: e.getToastCard(n.name, "update") },
                    {
                      line: "421",
                      module:
                        "AdsReportBuilderManageCustomMetricsDataManager.js",
                      moduleID: i.id,
                    },
                  ),
                  e.$1());
              },
              function (t) {
                (r("AdsReportBuilderUpdateCustomMetricFailAction").dispatch(
                  {
                    id: n,
                    scopeType: a,
                    scopeID: l,
                    error: t,
                    paramString: JSON.stringify(s),
                  },
                  {
                    line: "428",
                    module: "AdsReportBuilderManageCustomMetricsDataManager.js",
                    moduleID: i.id,
                  },
                ),
                  e.$2(t == null ? void 0 : t.message));
              },
            );
          }),
          (n.updateFromRecord = function (t) {
            var e = t.description,
              n = t.format_type,
              r = t.formula,
              o = t.id,
              a = t.name,
              i = t.permissionType,
              l = t.scopeID,
              s = t.scopeType,
              u = {
                description: e,
                format_type: n,
                formula: r,
                name: a,
                permission: i,
              };
            this.update(o, s, l, u);
          }),
          (t.getCustomMetricFields = function () {
            return [
              "creation_time",
              "creator",
              "deletion_time",
              "deletor",
              "description",
              "format_type",
              "formula",
              "has_attribution_windows",
              "has_inline_attribution_window",
              "name",
              "saved_report_id",
              "permission",
            ];
          }),
          t
        );
      })(),
      c = new u();
    l.default = c;
  },
  226,
);
