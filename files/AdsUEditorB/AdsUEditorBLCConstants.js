__d(
  "AdsUEditorBLCConstants",
  ["$InternalEnum", "AdsBLCCommonStrings"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = {
        paddingInline: {
          paddingInlineStart: "xf7dkkf",
          paddingInlineEnd: "xv54qhq",
          $$css: !0,
        },
      },
      c = u.paddingInline,
      d = "All Products",
      m = "enabled",
      p = (s = n("$InternalEnum"))({ FILE: "file", MANUAL: "manual" }),
      _ = s({
        INPUT_SELECTION: 1,
        FILE_UPLOAD: 2,
        MANUAL_INPUT: 3,
        FILE_REVIEW: 4,
      }),
      f = s({ XLSX: "xlsx", CSV: "csv" }),
      g = 99,
      h = 1e3,
      y = 100,
      C = 1e6,
      b = [
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        "text/csv",
      ],
      v = new Map([
        [
          f.XLSX,
          (e = o("AdsBLCCommonStrings"))
            .BUDGET_SPLITS_XLSX_FILE_EXTENSION_LABEL,
        ],
        [f.CSV, e.BUDGET_SPLITS_CSV_FILE_EXTENSION_LABEL],
      ]),
      S = s.Mirrored(["CREATE", "UPDATE"]),
      R = s({
        VARIABLE_DAILY_SPEND: "variable_daily_spend",
        STRICT_DAILY_CAP: "strict_daily_cap",
      }),
      L = "0",
      E = 5,
      k = "vendor_id",
      I = babelHelpers.extends(
        {},
        Array.from({ length: E }, function (e, t) {
          var n;
          return (
            (n = {}),
            (n["custom_label_" + t] = o(
              "AdsBLCCommonStrings",
            ).CUSTOM_LABEL_SELECTOR_LABEL(t)),
            n
          );
        }).reduce(function (e, t) {
          return babelHelpers.extends({}, e, t);
        }, {}),
        { vendor_id: e.VENDOR_ID_COLUMN_LABEL, brand: e.BRAND_SELECTOR_LABEL },
      );
    ((l.BUDGET_SPLITS_INLINE_PADDING = c),
      (l.ALL_PRODUCTS_PRODUCT_SET_NAME = d),
      (l.PRODUCT_SET_OPTIMIZATION_ENABLED = m),
      (l.BudgetSplitsInputType = p),
      (l.BudgetSplitsModalSteps = _),
      (l.BudgetSplitsTemplateExtensionType = f),
      (l.MAX_VENDOR_ID_LENGTH = g),
      (l.MAX_VENDORS_SUPPORTED = h),
      (l.BUDGET_SPLITS_ROWS_PER_PAGE = y),
      (l.BUDGET_SPLIT_MAX_USD = C),
      (l.BUDGET_SPLITS_SUPPORTED_MIME_TYPES = b),
      (l.TEMPLATE_EXTENSION_LABELS = v),
      (l.BudgetSplitsCreateUpdateStatus = S),
      (l.BudgetSpendMode = R),
      (l.NULL_BUDGET_SPLIT_METADATA_ID = L),
      (l.N_CUSTOM_LABELS = E),
      (l.DEFAULT_SELLER_COLUMN_FIELD = k),
      (l.CATALOG_FILTERS_LABEL_MAP = I));
  },
  98,
);
