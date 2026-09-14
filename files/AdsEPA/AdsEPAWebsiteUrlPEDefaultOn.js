__d(
  "AdsEPAWebsiteUrlPEDefaultOn",
  [
    "AdsAPIAdgroupRecordUtils",
    "AdsL1SimplificationExistingPostGate",
    "AdsMetadataConnectedSourcesUtils",
    "gkx",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return (
        e === void 0 && (e = !1),
        o(
          "AdsL1SimplificationExistingPostGate",
        ).isL1SimplificationExistingPostTestWithoutExposure()
          ? !0
          : e
            ? r("gkx")("10861")
            : r("gkx")("11979")
      );
    }
    function s(e) {
      var t;
      if (!o("AdsAPIAdgroupRecordUtils").isExistingPostAd(e)) return null;
      var n =
        (t = e.creative) == null ||
        (t = t.call_to_action) == null ||
        (t = t.value) == null
          ? void 0
          : t.link;
      return r("isStringNullOrEmpty")(n) ? null : n;
    }
    function u(e, t) {
      var n;
      if (t == null) return null;
      var o =
        (n = e.get(t)) == null || (n = n.getValue()) == null
          ? void 0
          : n.postCTALink;
      return r("isStringNullOrEmpty")(o) ? null : o;
    }
    function c(t) {
      var n = s(t);
      return n == null ? null : e(!0) ? n : null;
    }
    function d(e, t, n) {
      if (!o("AdsAPIAdgroupRecordUtils").isExistingPostAd(e)) return null;
      var r = c(e);
      return r != null
        ? { isEnabled: !0, rung: "website", urlForPE: r }
        : {
            isEnabled:
              t !== "" &&
              o(
                "AdsMetadataConnectedSourcesUtils",
              ).isPECatalogUrlWaterfallEnabled(n),
            rung: "source",
            urlForPE: t,
          };
    }
    ((l.isEPAWebsiteUrlPEDefaultOnEnabled = e),
      (l.getEPAWebsiteUrlCandidate = s),
      (l.getPostCtaWebsiteUrl = u),
      (l.getEPAWebsiteUrlForPEDefaultOn = c),
      (l.resolveEPAPECatalogMatchRung = d));
  },
  98,
);
