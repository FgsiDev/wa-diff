__d(
  "AdsManagerTableDataFetchingQPLUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = [
      "custom_metric_update",
      "dispatch",
      "interaction_start_idle",
      "refresh_table_view",
      "scroll_debounced",
    ];
    function l(e) {
      return e === "custom_metric_update"
        ? "TABLE_DATA_FETCHING_STORE_FETCH_CUSTOM_METRIC_UPDATE"
        : e === "dispatch"
          ? "TABLE_DATA_FETCHING_STORE_FETCH_DISPATCH"
          : e === "interaction_start_idle"
            ? "TABLE_DATA_FETCHING_STORE_FETCH_INTERACTION_START_IDLE"
            : e === "refresh_table_view"
              ? "TABLE_DATA_FETCHING_STORE_FETCH_REFRESH_TABLE_VIEW"
              : e === "scroll_debounced"
                ? "TABLE_DATA_FETCHING_STORE_FETCH_SCROLL_DEBOUNCED"
                : (function () {
                    throw Error(
                      "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                        e,
                    );
                  })();
    }
    function s(e) {
      return e === "custom_metric_update"
        ? "TABLE_DATA_FETCHING_STORE_FETCH_SKIPPED_CUSTOM_METRIC_UPDATE"
        : e === "dispatch"
          ? "TABLE_DATA_FETCHING_STORE_FETCH_SKIPPED_DISPATCH"
          : e === "interaction_start_idle"
            ? "TABLE_DATA_FETCHING_STORE_FETCH_SKIPPED_INTERACTION_START_IDLE"
            : e === "refresh_table_view"
              ? "TABLE_DATA_FETCHING_STORE_FETCH_SKIPPED_REFRESH_TABLE_VIEW"
              : e === "scroll_debounced"
                ? "TABLE_DATA_FETCHING_STORE_FETCH_SKIPPED_SCROLL_DEBOUNCED"
                : (function () {
                    throw Error(
                      "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                        e,
                    );
                  })();
    }
    ((i.FETCH_TRIGGERS = e),
      (i.getFetchPointName = l),
      (i.getFetchSkippedPointName = s));
  },
  66,
);
