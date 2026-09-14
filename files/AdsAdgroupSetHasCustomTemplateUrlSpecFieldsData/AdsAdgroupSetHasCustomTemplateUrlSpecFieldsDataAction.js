__d(
  "AdsAdgroupSetHasCustomTemplateUrlSpecFieldsDataAction",
  [
    "AdsAdgroupSetHasCustomTemplateUrlSpecFieldsDataReducerPlugin",
    "AdsTemplateUrlSpecProvider",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsAdgroupSetHasCustomTemplateUrlSpecFieldsDataReducerPlugin"),
            n("AdsTemplateUrlSpecProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "ADGROUP.SET_HAS_CUSTOM_TEMPLATE_URL_SPEC_FIELDS",
    );
    a.exports = e;
  },
  null,
);
