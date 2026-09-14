__d(
  "AdsExperimentsLightweightTestMutationUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = function (t, n) {
      var e,
        r,
        o,
        a =
          ((o = {}),
          (o.conversion_spec =
            ((r = {}),
            (r[n.toString()] =
              ((e = {}), (e.CAMPAIGN_ID = Array.from(t.sourceAdObjectIDs)), e)),
            r)),
          o);
      return { conversionOptions: a };
    };
    i.getLightweightCampaignMutationOptions = e;
  },
  66,
);
