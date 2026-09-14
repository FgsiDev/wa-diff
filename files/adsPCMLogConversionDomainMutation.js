__d(
  "adsPCMLogConversionDomainMutation",
  ["adsMgmtLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.adgroupID,
        n = e.newDomain,
        o = e.oldDomain,
        a = e.source;
      n !== o &&
        r("adsMgmtLogger")("pcm_domain_set", {
          adgroup_id: t,
          new_value: n,
          old_value: o,
          source: a,
        });
    }
    l.default = e;
  },
  98,
);
