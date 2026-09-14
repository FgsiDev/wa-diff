__d(
  "removeTaiwanFinservBeneficiaryAndPayerMutator",
  ["AdsCampaignRecordAccessors", "immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t,
        n,
        o,
        a =
          (t =
            e == null || (n = e.regional_regulation_identities) == null
              ? void 0
              : n.toObject()) != null
            ? t
            : null;
      if (a == null) return e;
      var i = babelHelpers.extends(
        {},
        a,
        ((o = {}),
        (o.taiwan_finserv_beneficiary = null),
        (o.taiwan_finserv_payer = null),
        o),
      );
      return r("AdsCampaignRecordAccessors").regional_regulation_identities.set(
        r("immutable").fromJS(i),
        e,
      );
    }
    l.removeTaiwanFinservBeneficiaryAndPayerMutator = e;
  },
  98,
);
