__d(
  "AdsUEditorAdgroupSetFeaturedOfferingSpecMutator",
  [
    "AdsAdgroupRecordAccessors",
    "AdsManagerRelayEnvironment",
    "AdsMetadataConnectedSourcesUtils",
    "AdsMutators",
    "CurrentAdAccount",
    "isStringNullOrEmpty",
    "prefetchFanoutLinksData",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n;
      if (r("isStringNullOrEmpty")(t)) return e;
      o("prefetchFanoutLinksData").prefetchFanoutLinksData(
        r("AdsManagerRelayEnvironment"),
        t,
        r("CurrentAdAccount").getID(),
      );
      var a =
        ((n = e.creative) == null ||
        (n = n.creative_sourcing_spec) == null ||
        (n = n.featured_offering_spec) == null
          ? void 0
          : n.enroll_status) != null;
      return a
        ? e
        : o("AdsMutators").chain(
            r(
              "AdsAdgroupRecordAccessors",
            ).creative.creative_sourcing_spec.featured_offering_spec.enroll_status.set(
              "OPT_IN",
            ),
            r(
              "AdsAdgroupRecordAccessors",
            ).creative.creative_sourcing_spec.featured_offering_spec.action_metadata.type.set(
              "DEFAULT",
            ),
          )(e);
    }
    function s(e) {
      var t, n;
      if (!o("AdsMetadataConnectedSourcesUtils").isSiteLinksOptedIn(e))
        return e;
      var a =
          (t = e.creative) == null || (t = t.creative_sourcing_spec) == null
            ? void 0
            : t.featured_offering_spec,
        i = a == null ? void 0 : a.media,
        l = i == null ? 0 : Array.isArray(i) ? i.length : i.size;
      return a != null &&
        ((n = a.action_metadata) == null ? void 0 : n.type) === "DEFAULT" &&
        l === 0
        ? r(
            "AdsAdgroupRecordAccessors",
          ).creative.creative_sourcing_spec.featured_offering_spec.delete(e)
        : e;
    }
    ((l.setFeaturedOfferingDefaultAdgroupField = e),
      (l.removeDefaultFeaturedOfferingWhenSiteLinksOptedIn = s));
  },
  98,
);
