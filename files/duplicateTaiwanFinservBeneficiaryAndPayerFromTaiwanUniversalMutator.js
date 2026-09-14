__d(
  "duplicateTaiwanFinservBeneficiaryAndPayerFromTaiwanUniversalMutator",
  ["AdsCampaignRecordAccessors", "immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t,
        n,
        o,
        a,
        i,
        l =
          (t =
            e == null || (n = e.regional_regulation_identities) == null
              ? void 0
              : n.toObject()) != null
            ? t
            : null;
      if (
        l == null ||
        !Object.prototype.hasOwnProperty.call(
          l,
          "taiwan_universal_beneficiary",
        ) ||
        !Object.prototype.hasOwnProperty.call(l, "taiwan_universal_payer")
      )
        return e;
      var s = (o = l.taiwan_universal_beneficiary) != null ? o : null,
        u = (a = l.taiwan_universal_payer) != null ? a : null,
        c = babelHelpers.extends(
          {},
          l,
          ((i = {}),
          (i.taiwan_finserv_beneficiary = s),
          (i.taiwan_finserv_payer = u),
          i),
        );
      return r("AdsCampaignRecordAccessors").regional_regulation_identities.set(
        r("immutable").fromJS(c),
        e,
      );
    }
    l.duplicateTaiwanFinservBeneficiaryAndPayerFromTaiwanUniversalMutator = e;
  },
  98,
);
