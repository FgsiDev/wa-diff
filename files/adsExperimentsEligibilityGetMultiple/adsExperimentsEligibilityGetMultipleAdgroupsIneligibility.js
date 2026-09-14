__d(
  "adsExperimentsEligibilityGetMultipleAdgroupsIneligibility",
  ["adsExperimentsIsCampaignMultiAdgroup"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = e.adgroup,
        o = e.campaign;
      return (o == null ? void 0 : o.id) == null ||
        (t == null ? void 0 : t.adAccount) == null ||
        (n == null ? void 0 : n.id) == null
        ? null
        : r("adsExperimentsIsCampaignMultiAdgroup")(o.id, t.adAccount)
            .mapValue(function (e) {
              if (e && (n == null ? void 0 : n.id) != null)
                return { adgroupIDs: new Set([n == null ? void 0 : n.id]) };
            })
            .getValue();
    }
    l.default = e;
  },
  98,
);
