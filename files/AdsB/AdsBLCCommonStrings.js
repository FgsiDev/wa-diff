__d(
  "AdsBLCCommonStrings",
  ["fbt", "GeoLink.react", "geoMargin", "react", "stylex"],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = s._(/*BTDS*/ "Budget splits"),
      m = s._(/*BTDS*/ "Pending"),
      p = s._(/*BTDS*/ "Your budget splits updates will take effect tomorrow."),
      _ = s._(
        /*BTDS*/ "Set custom budget splits to have more control over how the budget is allocated across product attributes like Brand or Vendor ID.",
      ),
      f = function (t) {
        return s._(
          /*BTDS*/ "Campaign budget must be turned off to customize budget splits. {Turn off Advantage campaign budget link}",
          [
            s._param(
              "Turn off Advantage campaign budget link",
              c.jsx(r("GeoLink.react"), {
                onClick: t,
                children: s._(/*BTDS*/ "Turn off campaign budget"),
              }),
            ),
          ],
        );
      },
      g = function (t) {
        return s._(
          /*BTDS*/ "Ad set budget sharing must be turned off to customize budget splits. {Turn off ad set budget sharing link}",
          [
            s._param(
              "Turn off ad set budget sharing link",
              c.jsx(r("GeoLink.react"), {
                onClick: t,
                children: s._(/*BTDS*/ "Turn off ad set budget sharing"),
              }),
            ),
          ],
        );
      },
      h = s._(
        /*BTDS*/ "Budget scheduling must be turned off to utilize budget splits.",
      ),
      y = s._(
        /*BTDS*/ "Budget splits are only available with daily budgets, and not lifetime budgets.",
      ),
      C = s._(
        /*BTDS*/ "Use budget splits to set budgets for specific products",
      ),
      b = s._(/*BTDS*/ "Edit budget strategy"),
      v = s._(/*BTDS*/ "Continue with campaign budget"),
      S = s._(/*BTDS*/ "Continue with ad set budget sharing"),
      R = function () {
        return s._(/*BTDS*/ "{budgetSplitsOverview}", [
          s._param(
            "budgetSplitsOverview",
            c.jsxs(
              "div",
              babelHelpers.extends(
                {},
                (e || (e = r("stylex"))).props(r("geoMargin").bottom12),
                {
                  children: [
                    "Campaign budget must be turned off to customize budget splits. You can edit the budget strategy for this ad on the",
                    c.jsx("strong", { children: " Budget" }),
                    " card before you publish the campaign.",
                  ],
                },
              ),
            ),
          ),
        ]);
      },
      L = function () {
        return s._(/*BTDS*/ "{advantageCampaignBudgetOverview}", [
          s._param(
            "advantageCampaignBudgetOverview",
            c.jsxs(
              "div",
              babelHelpers.extends(
                {},
                (e || (e = r("stylex"))).props(r("geoMargin").bottom12),
                {
                  children: [
                    "Ad set budget sharing must be turned off to customize budget splits. You can turn off budget sharing for this ad on the",
                    c.jsx("strong", { children: " Budget" }),
                    " card before you publish the campaign.",
                  ],
                },
              ),
            ),
          ),
        ]);
      },
      E = s._(/*BTDS*/ "Add splits"),
      k = s._(/*BTDS*/ "Edit splits");
    function I(e, t, n) {
      return s._(
        /*BTDS*/ '_j{"*":{"*":"{currencySymbol}{totalBudget} was split across {numberOfVendors} unique IDs for this ad"}}',
        [
          s._param("totalBudget", t, [0, t]),
          s._param("numberOfVendors", n, [0, n]),
          s._param("currencySymbol", e),
        ],
      );
    }
    I.displayName = I.name + " [from " + i.id + "]";
    var T = s._(/*BTDS*/ "None set"),
      D = s._(
        /*BTDS*/ "Split your budget by attributes such as brand, vendor, etc.",
      ),
      x = s._(
        /*BTDS*/ "You can only use budget splits on an ad set with one ad. Remove the extra ads to turn on budget splits.",
      ),
      $ = s._(
        /*BTDS*/ "This product set is not available with your budget splits. To use this set, turn off budget splits.",
      ),
      P = s._(/*BTDS*/ "Budget update set"),
      N = s._(/*BTDS*/ "Set custom budget splits"),
      M = s._(/*BTDS*/ "Set budget splits"),
      w = s._(
        /*BTDS*/ "Customize budget splits to allocate your daily budget across product attributes like Brand or Vendor ID. By setting budget splits, we'll automatically update your daily budget with the total of all budget splits for this ad.",
      ),
      A = s._(/*BTDS*/ "Upload an existing file"),
      F = s._(
        /*BTDS*/ "Upload a spreadsheet or compatible file to set specific budgets for any supported attribute filters in your product set",
      ),
      O = s._(
        /*BTDS*/ "Recommended for product sets with less than 1,000 unique attributes. For product sets with more than 1,000 attributes, you will need to use an API.",
      ),
      B = s._(/*BTDS*/ "Manually set budget splits"),
      W = s._(
        /*BTDS*/ "Customize the budget for specific products with supported attributes",
      ),
      q = s._(
        /*BTDS*/ "Recommended for product sets with less than 100 unique attributes",
      ),
      U = s._(/*BTDS*/ "Set custom budget splits"),
      V = s._(/*BTDS*/ "Download template"),
      H = s._(/*BTDS*/ "vendor_budget_splits"),
      G = s._(/*BTDS*/ "Vendor ID"),
      z = s._(/*BTDS*/ "Brand");
    function j(e) {
      return s._(/*BTDS*/ "Custom Label {labelNumber}", [
        s._param("labelNumber", e),
      ]);
    }
    var K = s._(/*BTDS*/ "Budget"),
      Q = s._(
        /*BTDS*/ "#Required | A unique identifier for each brand in the catalog(Can be from a custom label 0-4) Column header name must match the vendor identifier column name in the catalog",
      ),
      X = s._(
        /*BTDS*/ "#Required | The budget split for each vendor ID in your product set. Vendors with a budget split of $0 will not be displayed in the ad.",
      ),
      Y = s._(/*BTDS*/ ".xlsx"),
      J = s._(/*BTDS*/ ".csv"),
      Z = s._(/*BTDS*/ "Upload a spreadsheet or text file"),
      ee = s._(
        /*BTDS*/ "Each product attribute must be on its own line with their allocated budget. If using a text file, separate each value with a comma and then upload it as a CSV file.",
      ),
      te = s._(
        /*BTDS*/ "File upload failed due to incorrect or missing columns. Make sure that your file includes all required columns.",
      ),
      ne = s._(
        /*BTDS*/ "Invalid vendor ID format. Make sure that your vendor IDs have fewer than 100 characters.",
      ),
      re = s._(
        /*BTDS*/ "Invalid budget format. Make sure to include a budget based on your ad account currency, such as $125.50 for US dollars.",
      ),
      oe = s._(
        /*BTDS*/ "Duplicate vendor IDs found. Remove any duplicates from the file and try uploading the file again.",
      ),
      ae = s._(
        /*BTDS*/ "Invalid budget value. Please use a non-negative number.",
      ),
      ie = function (t) {
        return s._(
          /*BTDS*/ '_j{"*":"File upload failed due to too many vendor IDs. A maximum of {count} vendor IDs are supported."}',
          [s._param("count", t, [0])],
        );
      },
      le = s._(/*BTDS*/ "Promoted products optimization"),
      se = s._(
        /*BTDS*/ "Prioritize conversions of products in this set instead of your entire catalog",
      ),
      ue = s._(
        /*BTDS*/ "Select a product set that is smaller than your catalog to enable this feature.",
      ),
      ce = s._(
        /*BTDS*/ "To use this feature, you can't include other products from your catalog",
      ),
      de = s._(
        /*BTDS*/ "This feature is only available with purchase, add to cart, or add to wishlist events. Change your conversion event to enable it.",
      ),
      me = s._(
        /*BTDS*/ "Select Maximize number of conversions as your performance goal to enable this feature.",
      ),
      pe = s._(
        /*BTDS*/ "Prioritize conversions of products in this set or a specific brand or vendor",
      ),
      _e = s._(/*BTDS*/ "Prioritize conversions toward"),
      fe = s._(/*BTDS*/ "Product set"),
      ge = s._(/*BTDS*/ "Prioritize conversions of products in a product set"),
      he = s._(/*BTDS*/ "Brand"),
      ye = s._(/*BTDS*/ "Prioritize conversions of a brand in your catalog"),
      Ce = s._(/*BTDS*/ "Vendor ID"),
      be = s._(
        /*BTDS*/ "Prioritize conversions of a vendor ID in your catalog",
      ),
      ve = s._(/*BTDS*/ "Select brand to prioritize"),
      Se = s._(/*BTDS*/ "Select vendor ID to prioritize"),
      Re = s._(/*BTDS*/ "{=m0}", [
        s._implicitParam(
          "=m0",
          c.jsx("b", { children: s._(/*BTDS*/ "Vendor ID") }),
        ),
      ]),
      Le = s._(/*BTDS*/ "Custom budget"),
      Ee = s._(/*BTDS*/ "Budget entry"),
      ke = s._(/*BTDS*/ "Search");
    function Ie(e) {
      return (
        e === void 0 && (e = "Vendor ID"),
        s._(/*BTDS*/ "Search by {labelType}", [s._param("labelType", e)])
      );
    }
    Ie.displayName = Ie.name + " [from " + i.id + "]";
    var Te = s._(/*BTDS*/ "Vendors"),
      De = s._(/*BTDS*/ "We had trouble loading this page"),
      xe = s._(/*BTDS*/ "Error"),
      $e = s._(/*BTDS*/ "Adding budget splits"),
      Pe = s._(/*BTDS*/ "Your changes weren't saved."),
      Ne = s._(
        /*BTDS*/ "Changes to budget splits weren't saved. Try again later.",
      ),
      Me = s._(/*BTDS*/ "Retry"),
      we = s._(/*BTDS*/ "Budget splits have been applied"),
      Ae = s._(/*BTDS*/ "Budget split updates set"),
      Fe = s._(/*BTDS*/ "Must be more than $0"),
      Oe = s._(/*BTDS*/ "Budget splits exceed $1,000,000.");
    function Be(e, t) {
      switch (t) {
        case "vendor_id":
          return s._(
            /*BTDS*/ '_j{"*":"{number} Vendor IDs have a budget of $1,000,000 or more","_1":"1 Vendor ID has a budget of $1,000,000 or more"}',
            [s._plural(e, "number")],
          );
        case "brand":
          return s._(
            /*BTDS*/ '_j{"*":"{number} brands have a budget of $1,000,000 or more","_1":"1 brand has a budget of $1,000,000 or more"}',
            [s._plural(e, "number")],
          );
        default:
          return s._(
            /*BTDS*/ '_j{"*":"{number} budget splits have a budget of $1,000,000 or more","_1":"1 budget split has a budget of $1,000,000 or more"}',
            [s._plural(e, "number")],
          );
      }
    }
    var We = s._(
        /*BTDS*/ "Your budget splits value is too high. The maximum allowed budget is US$ 1,000,000.00.",
      ),
      qe = s._(/*BTDS*/ "Show budgets over limit"),
      Ue = s._(/*BTDS*/ "Please decrease your budget."),
      Ve = s._(
        /*BTDS*/ "Missing budget splits for some vendor IDs. Products with a budget split of $0 will not be displayed in the ad.",
      ),
      He = s._(
        /*BTDS*/ "Some budget splits have no products and won't be delivered. Remove them or assign budget only to splits with products.",
      );
    function Ge(e) {
      return s._(
        /*BTDS*/ '_j{"*":"Your budget split set has {number} ineligible splits.","_1":"Your budget split set has 1 ineligible split."}',
        [s._plural(e, "number")],
      );
    }
    Ge.displayName = Ge.name + " [from " + i.id + "]";
    var ze = s._(
        /*BTDS*/ "Ineligible for delivery \u2014 no items or insufficient stock",
      ),
      je = s._(/*BTDS*/ "Total:");
    function Ke(e, t, n) {
      return s._(
        /*BTDS*/ '_j{"*":{"*":{"*":"{rangeStart}-{rangeEnd} of {totalCount}"}}}',
        [
          s._param("rangeStart", e, [0, e]),
          s._param("rangeEnd", t, [0, t]),
          s._param("totalCount", n, [0, n]),
        ],
      );
    }
    Ke.displayName = Ke.name + " [from " + i.id + "]";
    var Qe = s._(/*BTDS*/ "Previous page"),
      Xe = s._(/*BTDS*/ "Next page"),
      Ye = s._(/*BTDS*/ "Upload"),
      Je = s._(/*BTDS*/ "Download budget splits"),
      Ze = s._(/*BTDS*/ "budget_splits"),
      et = s._(/*BTDS*/ "Your budget split updates will take effect tomorrow."),
      tt = s._(
        /*BTDS*/ "Budget splits changes may take up to an hour to take effect",
      );
    function nt(e, t, n) {
      return s._(
        /*BTDS*/ '_j{"*":{"*":"We\'ll update your daily spend target from {oldCurrencySymbol}{oldDailyTarget} to {newCurrencySymbol}{newDailyTarget}. The system will aim to maintain a consistent daily spend, rather than spreading it throughout the week."}}',
        [
          s._param("oldDailyTarget", t, [0, t]),
          s._param("newDailyTarget", n, [0, n]),
          s._param("oldCurrencySymbol", e),
          s._param("newCurrencySymbol", e),
        ],
      );
    }
    nt.displayName = nt.name + " [from " + i.id + "]";
    var rt = s._(
        /*BTDS*/ "Products must have budget splits with more than $0 to be displayed in your ad.",
      ),
      ot = s._(/*BTDS*/ "Select identifier"),
      at = s._(/*BTDS*/ "{=m0}", [
        s._implicitParam(
          "=m0",
          c.jsx("b", { children: s._(/*BTDS*/ "Brand") }),
        ),
      ]);
    function it(e) {
      var t;
      return (
        (t = s._param("labelNumber", e, [0, e])),
        s._(/*BTDS*/ '_j{"*":"{=m0}"}', [
          t,
          s._implicitParam(
            "=m0",
            c.jsx("b", {
              children: s._(/*BTDS*/ '_j{"*":"Custom label {labelNumber}"}', [
                t,
              ]),
            }),
          ),
        ])
      );
    }
    it.displayName = it.name + " [from " + i.id + "]";
    var lt = s._(/*BTDS*/ "Enter budget"),
      st = s._(
        /*BTDS*/ "No unique IDs found in this product set; use another identifier.",
      ),
      ut = s._(
        /*BTDS*/ "Products with a budget split of $0 or none will not be displayed in the ad.",
      ),
      ct = s._(/*BTDS*/ "Go back"),
      dt = s._(/*BTDS*/ "Missing budget splits for some vendor IDs."),
      mt = s._(
        /*BTDS*/ "Enable this feature to prioritize ad delivery for specific products.",
      ),
      pt = s._(
        /*BTDS*/ "To enable this feature, use a product set that is smaller than your catalog",
      ),
      _t = s._(/*BTDS*/ "Choose a product set that covers your budget splits"),
      ft = s._(
        /*BTDS*/ "This ad set splits its budget across product attributes such as brand, vendor, etc. Pick a product set that includes those attributes so every split can deliver.",
      ),
      gt = s._(/*BTDS*/ "Daily budget spend settings"),
      ht = s._(/*BTDS*/ "Flexible daily budget"),
      yt = s._(
        /*BTDS*/ "Any edits to budget splits will take effect at midnight. The system may spend up to 1.75x your daily budget to capture the best opportunities while staying within your weekly limit. Best for campaigns with consistent budgets.",
      ),
      Ct = s._(/*BTDS*/ "Daily budget target"),
      bt = s._(
        /*BTDS*/ "Any edits to budget splits may take up to an hour to take effect. The system aims to maintain a consistent daily spend, rather than spreading it throughout the week. Best for campaigns that need frequent budget adjustments.",
      ),
      vt = s._(
        /*BTDS*/ "The setting cannot be modified for an ongoing campaign to prevent delivery and pacing issues.",
      );
    ((l.BUDGET_CONTROL_FIELD_LABEL = d),
      (l.BUDGET_SPLITS_CONTAINER_PENDING_BUDGET_UPDATES_LABEL = m),
      (l.BUDGET_SPLITS_CONTAINER_PENDING_BUDGET_UPDATES_MESSAGE = p),
      (l.BUDGET_CONTROL_FIELD_TOOLTIP_CONTENT = _),
      (l.getDisableAdvantageCampaignContent = f),
      (l.getDisableBudgetFlexContent = g),
      (l.DISABLE_BUDGET_SCHEDULING_CONTENT = h),
      (l.DISABLE_LIFETIME_BUDGET_CONTENT = y),
      (l.BUDGET_SPLITS_SWITCH_STRATEGY_MODAL = C),
      (l.BUDGET_SPLITS_EDIT_BUDGET_STRATEGY_BUTTON = b),
      (l.BUDGET_SPLITS_CONTINUE_WITH_CAMPAIGN_BUTTON = v),
      (l.BUDGET_SPLITS_CONTINUE_WITH_AD_SET_BUTTON = S),
      (l.getSwitchStrategyAdvantageCampaignBudgetOverview = R),
      (l.getSwitchStrategyBudgetFlexOverview = L),
      (l.BUDGET_CONTROL_CREATE_BUTTON_LABEL = E),
      (l.BUDGET_CONTROL_EDIT_BUTTON_LABEL = k),
      (l.BUDGET_SPLITS_BUTTON_SUBHEADING = I),
      (l.BUDGET_SPLITS_BUTTON_SUBHEADING_CLOSED_NO_SPLITS = T),
      (l.BUDGET_CONTROL_CHECKBOX_LABEL = D),
      (l.BUDGET_CONTROL_CHECKBOX_DISABLED_MULTIPLE_ADS_TOOLTIP = x),
      (l.BUDGET_CONTROL_PRODUCT_SET_PINNED_TOOLTIP = $),
      (l.BUDGET_SPLITS_SCHEDULED_MESSAGE_IN_MANUAL_ENTRY_PAGE = P),
      (l.BUDGET_SPLITS_MODAL_HEADING = N),
      (l.BUDGET_SPLITS_SET_HEADING = M),
      (l.BUDGET_SPLITS_MODAL_DESCRIPTION = w),
      (l.BUDGET_SPLITS_UPLOAD_FILE_HEADING = A),
      (l.BUDGET_SPLITS_UPLOAD_FILE_DESCRIPTION = F),
      (l.BUDGET_SPLITS_UPLOAD_FILE_RECOMMENDATION_TEXT = O),
      (l.BUDGET_SPLITS_MANUAL_HEADING = B),
      (l.BUDGET_SPLITS_MANUAL_DESCRIPTION = W),
      (l.BUDGET_SPLITS_MANUAL_RECOMMENDATION_TEXT = q),
      (l.BUDGET_SPLITS_MANUAL_INPUT_HEADING = U),
      (l.BUDGET_SPLITS_DOWNLOAD_TEMPLATE = V),
      (l.BUDGET_SPLITS_TEMPLATE_NAME = H),
      (l.BUDGET_SPLITS_TEMPLATE_VENDOR_HEADING = G),
      (l.BUDGET_SPLITS_TEMPLATE_BRAND_HEADING = z),
      (l.BUDGET_SPLITS_TEMPLATE_CUSTOM_LABEL_HEADING = j),
      (l.BUDGET_SPLITS_TEMPLATE_BUDGET_HEADING = K),
      (l.BUDGET_SPLITS_XLSX_TEMPLATE_VENDOR_DESCRIPTION = Q),
      (l.BUDGET_SPLITS_XLSX_TEMPLATE_BUDGET_DESCRIPTION = X),
      (l.BUDGET_SPLITS_XLSX_FILE_EXTENSION_LABEL = Y),
      (l.BUDGET_SPLITS_CSV_FILE_EXTENSION_LABEL = J),
      (l.BUDGET_SPLITS_FILE_UPLOAD_LABEL = Z),
      (l.BUDGET_SPLITS_FILE_UPLOAD_DESCRIPTION = ee),
      (l.BUDGET_SPLITS_FILE_PARSER_MISSING_COLUMN_ERROR = te),
      (l.BUDGET_SPLITS_FILE_PARSER_INVALID_VENDOR_ID_LENGTH_ERROR = ne),
      (l.BUDGET_SPLITS_FILE_PARSER_INVALID_BUDGET_ERROR = re),
      (l.BUDGET_SPLITS_FILE_PARSER_DUPLICATE_VENDORS_ERROR = oe),
      (l.BUDGET_SPLITS_FILE_PARSER_NEGATIVE_BUDGET_ERROR = ae),
      (l.BUDGET_SPLITS_FILE_PARSER_EXCESSIVE_VENDORS_ERROR = ie),
      (l.PPO_OPTIMIZATION_HEADER = le),
      (l.PPO_OPTIMIZATION_CHECKBOX_LABEL = se),
      (l.PPO_DISABLED_ALL_PRODUCT_SET_CONTENT = ue),
      (l.PPO_DISABLED_BOOSTED_PRODUCT_SET_CONTENT = ce),
      (l.PPO_DISABLED_NON_PURCHASE_EVENT_CONTENT = de),
      (l.PPO_DISABLED_INCOMPATIBLE_OPTIMIZATION_GOAL_CONTENT = me),
      (l.PPO_SELLER_OPT_CHECKBOX_LABEL = pe),
      (l.PPO_SELLER_OPT_MODE_SELECTOR_LABEL = _e),
      (l.PPO_SELLER_OPT_MODE_PRODUCT_SET_LABEL = fe),
      (l.PPO_SELLER_OPT_MODE_PRODUCT_SET_DESCRIPTION = ge),
      (l.PPO_SELLER_OPT_MODE_BRAND_LABEL = he),
      (l.PPO_SELLER_OPT_MODE_BRAND_DESCRIPTION = ye),
      (l.PPO_SELLER_OPT_MODE_VENDOR_ID_LABEL = Ce),
      (l.PPO_SELLER_OPT_MODE_VENDOR_ID_DESCRIPTION = be),
      (l.PPO_SELLER_OPT_BRAND_VALUE_PLACEHOLDER = ve),
      (l.PPO_SELLER_OPT_VENDOR_ID_VALUE_PLACEHOLDER = Se),
      (l.VENDOR_ID_COLUMN_LABEL = Re),
      (l.BUDGET_COLUMN_LABEL = Le),
      (l.BUDGET_ENTRY_LABEL = Ee),
      (l.SEARCH_LABEL = ke),
      (l.SEARCH_PLACEHOLDER_MANUAL_INPUT = Ie),
      (l.NO_VENDORS_MANUAL_INPUT = Te),
      (l.BUDGET_SPLITS_MANUAL_ERROR = De),
      (l.BUDGET_SPLITS_MANUAL_ERROR_HEADER = xe),
      (l.BUDGET_SPLITS_SAVING_PROGRESS = $e),
      (l.BUDGET_SPLITS_SAVING_ERROR_LABEL = Pe),
      (l.BUDGET_SPLITS_SAVING_ERROR_DESCRIPTION = Ne),
      (l.BUDGET_SPLITS_SAVING_ERROR_BUTTON_LABEL = Me),
      (l.BUDGET_SPLITS_SAVING_SUCCESS = we),
      (l.BUDGET_SPLITS_UPSERT_SUCCESS = Ae),
      (l.WARNING_MESSAGE_VENDORS_WITH_BUDGET_ZERO = Fe),
      (l.BUDGET_SPLITS_EXCEED_LIMIT_HEADING = Oe),
      (l.getBudgetSplitsOverLimitHeading = Be),
      (l.BUDGET_SPLITS_EXCEED_LIMIT_DESCRIPTION = We),
      (l.SHOW_BUDGETS_OVER_LIMIT_LABEL = qe),
      (l.BUDGET_FIELD_EXCEEDS_LIMIT_ERROR = Ue),
      (l.WARNING_MESSAGE_BUDGETS_CONTAIN_ZERO = Ve),
      (l.WARNING_MESSAGE_BUDGET_SPLITS_NO_PRODUCTS = He),
      (l.getBudgetSplitsIneligibleCountMessage = Ge),
      (l.WARNING_MESSAGE_BUDGET_SPLIT_INELIGIBLE_INLINE = ze),
      (l.BUDGET_SPLITS_TOTAL_LABEL = je),
      (l.getBudgetSplitsPageRangeLabel = Ke),
      (l.BUDGET_SPLITS_PREVIOUS_PAGE_LABEL = Qe),
      (l.BUDGET_SPLITS_NEXT_PAGE_LABEL = Xe),
      (l.BUDGET_SPLITS_UPLOAD_BUTTON_LABEL = Ye),
      (l.BUDGET_SPLITS_DOWNLOAD_CURRENT_LABEL = Je),
      (l.BUDGET_SPLITS_EXPORT_NAME = Ze),
      (l.MIDFLIGHT_BUDGET_SPLIT_UPDATES_MESSAGE = et),
      (l.REAL_TIME_BUDGET_SPLIT_INFO_HEADING = tt),
      (l.getRealTimeBudgetSplitInfoMessage = nt),
      (l.ERROR_MESSAGE_BUDGETS_CONTAIN_NEGATIVE = rt),
      (l.SELECTOR_LABEL = ot),
      (l.BRAND_SELECTOR_LABEL = at),
      (l.CUSTOM_LABEL_SELECTOR_LABEL = it),
      (l.BUDGET_FIELD_PLACEHOLDER = lt),
      (l.BUDGET_SPLITS_MANUAL_INPUT_DISABLED_MESSAGE_NO_IDS = st),
      (l.BUDGET_SPLITS_ZERO_BUDGETS_CONFIRMATION_MESSAGE = ut),
      (l.BUDGET_SPLITS_ZERO_BUDGETS_GO_BACK_BUTTON = ct),
      (l.BUDGET_SPLITS_ZERO_BUDGETS_MODAL_HEADER = dt),
      (l.ADGROUP_PPO_FIELD_TOOLTIP = mt),
      (l.ADGROUP_PPO_CHECKBOX_DISABLED_MESSAGE_ALL_PRODUCTS = pt),
      (l.BUDGET_SPLITS_L1_PRODUCT_SET_GUIDANCE_HEADING = _t),
      (l.BUDGET_SPLITS_L1_PRODUCT_SET_GUIDANCE_BODY = ft),
      (l.BUDGET_SPEND_MODE_LABEL = gt),
      (l.VARIABLE_DAILY_SPEND_LABEL = ht),
      (l.VARIABLE_DAILY_SPEND_DESCRIPTION = yt),
      (l.STRICT_DAILY_CAP_LABEL = Ct),
      (l.STRICT_DAILY_CAP_DESCRIPTION = bt),
      (l.BUDGET_SPEND_MODE_DISABLED_MESSAGE = vt));
  },
  226,
);
