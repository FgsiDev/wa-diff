__d(
  "adsReportBuilderCustomMetricScopeInfoSelector",
  [
    "AdsAccountStore",
    "AdsReportBuilderScopeType",
    "BizSiteIdentifier.brands",
    "LoadObject",
    "adsCreateSelector",
    "adsReportBuilderScopeSelector",
    "err",
    "isEmpty",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = r("adsCreateSelector")(
        [
          r("adsReportBuilderScopeSelector"),
          r("AdsAccountStore").getSelectedBusinessID,
          r("AdsAccountStore").getSelectedAccountID,
        ],
        function (n, a, l) {
          switch (n) {
            case r("AdsReportBuilderScopeType").BUSINESS: {
              var t =
                a != null ? a : o("BizSiteIdentifier.brands").getBusinessID();
              if ((e || (e = r("isEmpty")))(t))
                return r("LoadObject").withError(
                  r("err")("Business ID does not exist"),
                  { creatorModuleID: i.id },
                );
              var s = r("nullthrows")(t);
              return r("LoadObject").withValue(
                { scopeType: n, id: s },
                { creatorModuleID: i.id },
              );
            }
            case r("AdsReportBuilderScopeType").ACCOUNT:
            default: {
              var u = l;
              return u != null
                ? r("LoadObject").withValue(
                    { scopeType: n, id: u },
                    { creatorModuleID: i.id },
                  )
                : r("LoadObject").loading({ creatorModuleID: i.id });
            }
          }
        },
        { name: i.id + ".adsReportBuilderScopeInfoSelector" },
      ),
      u = s;
    l.default = u;
  },
  98,
);
