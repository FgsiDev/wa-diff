__d(
  "adsUEditorMetadataBrandKitOptOutTimestampEligibilitySelectorUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      var t,
        n = Date.now() - 2592e6;
      return (t =
        e == null
          ? void 0
          : e.mapValue(function (e) {
              return e.metadata_brand_kit_last_opt_out_timestamp == null ||
                (e.metadata_brand_kit_last_opt_out_timestamp != null &&
                  e.metadata_brand_kit_last_opt_out_timestamp < n)
                ? !0
                : e.metadata_brand_kit_last_opt_out_timestamp != null &&
                    e.metadata_brand_kit_last_opt_out_timestamp >= n
                  ? !1
                  : null;
            })) != null
        ? t
        : null;
    }
    i.adsUEditorMetadataBrandKitOptOutTimestampEligibility = e;
  },
  66,
);
