__d(
  "AdsPageOfferDataManager",
  [
    "AdsBaseDataManager",
    "AdsGraphAPI",
    "AdsPageOfferBatchLoadErrorDataAction",
    "AdsPageOfferBatchLoadedDataAction",
    "GraphAPIFieldUtils",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "U",
      s = [
        "barcode_photo",
        "barcode_photo_uri",
        "barcode_type",
        "barcode_value",
        "block_reshares",
        o("GraphAPIFieldUtils").getFieldWithSubfields("discounts", [
          "currency",
          "override",
          "type",
          "value1",
          "value2",
        ]),
        "details",
        "disable_location",
        "expiration_time",
        "id",
        "instore_code",
        "location_type",
        o("GraphAPIFieldUtils").getFieldWithSubfields("page", ["id"]),
        "max_save_count",
        "online_code",
        "redemption_code",
        "redemption_link",
        "terms",
        "title",
        "unique_codes",
        "unique_codes_file_code_type",
        "unique_codes_file_name",
        "unique_codes_file_upload_status",
        "total_unique_codes",
        "page_set_id",
      ],
      u = (function (t) {
        function n() {
          return t.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.loadAll = function (t) {
            var e = this;
            t.forEach(function (t) {
              return e.load(t);
            });
          }),
          (a.load = function (n) {
            var t = this;
            r("promiseDone")(
              o("AdsGraphAPI")
                .get(i.id)
                .object("nativeoffer", n)
                .get({ date_format: e, fields: s }),
              function (e) {
                return t.__handleSuccess(["load"], n, null, e);
              },
              function (e) {
                return t.__handleError(["load"], n, null, e);
              },
            );
          }),
          (a.__onBatchLoaded = function (t) {
            r("AdsPageOfferBatchLoadedDataAction").dispatch(
              { offers: t },
              {
                line: "85",
                module: "AdsPageOfferDataManager.js",
                moduleID: i.id,
              },
            );
          }),
          (a.__onBatchLoadError = function (t) {
            r("AdsPageOfferBatchLoadErrorDataAction").dispatch(
              { errors: t },
              {
                line: "91",
                module: "AdsPageOfferDataManager.js",
                moduleID: i.id,
              },
            );
          }),
          n
        );
      })(r("AdsBaseDataManager")),
      c = new u();
    l.default = c;
  },
  98,
);
