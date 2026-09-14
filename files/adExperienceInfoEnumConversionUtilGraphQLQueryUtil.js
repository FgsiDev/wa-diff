__d(
  "adExperienceInfoEnumConversionUtilGraphQLQueryUtil",
  [
    "AdsManagerRelayEnvironment",
    "SAIPAdAccountExperience",
    "adExperienceInfoEnumConversionUtilGraphQLQueryUtilAndromedaQuery.graphql",
    "asyncToGeneratorRuntime",
    "react-relay",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (function () {
        var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var a =
              e !== void 0
                ? e
                : (e = n(
                    "adExperienceInfoEnumConversionUtilGraphQLQueryUtilAndromedaQuery.graphql",
                  )),
            i = yield o("react-relay")
              .fetchQuery(r("AdsManagerRelayEnvironment"), a, {
                ad_account_id: t,
              })
              .toPromise(),
            l =
              i == null
                ? void 0
                : i.xfb_andromeda_XShopsAdsSAIPAdAccountExperienceInfoController;
          return i == null || l == null
            ? { saip_experience: null, saip_experiences: [] }
            : babelHelpers.extends({}, l, {
                saip_experience: u(
                  l.saip_experience,
                  r("SAIPAdAccountExperience"),
                ),
                saip_experiences: (l.saip_experiences || [])
                  .map(function (e) {
                    return u(e, r("SAIPAdAccountExperience"));
                  })
                  .filter(Boolean),
              });
        });
        return function (n) {
          return t.apply(this, arguments);
        };
      })(),
      u = function (t, n) {
        return t != null && Object.prototype.hasOwnProperty.call(n, t)
          ? n[t]
          : null;
      };
    l.adExperienceInfoEnumConversionUtilGraphQLQuery = s;
  },
  98,
);
