__d(
  "AdsAdGroupFullFunnelEntryReducerPlugin",
  [
    "AdsFullFunnelEntryActionFlux",
    "AdsMutators",
    "AdsPixelConversionStatusUtils",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupTrackingSpecMutators",
    "PixelTrackingRowUtil.react",
    "SignalsStatusEnum",
    "adsCreateSelector",
    "adsSignalSourceContainersSelector",
    "adsUEditorAreSomeCampaignGroupsBwISelector",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [
          o("adsSignalSourceContainersSelector").createSignalContainersSelector(
            "website",
          ),
        ],
        function (t) {
          var e,
            n,
            a = (e = t.getValue()) != null ? e : r("immutable").Map();
          if (a == null || a.isEmpty()) return null;
          var i = r("immutable").List();
          a.forEach(function (e) {
            var t;
            if (
              (e == null ? void 0 : e.hasAccessToSharedEventNamesOnly) !== !0
            ) {
              var n = {
                cluster: e == null ? void 0 : e.cluster,
                displayID: e == null ? void 0 : e.id,
                id: e == null ? void 0 : e.id,
                isBWIEligible: e == null ? void 0 : e.isBWIEligible,
                isBWPEligible: e == null ? void 0 : e.isBWPEligible,
                name: (t = e == null ? void 0 : e.name) != null ? t : "",
                status: o(
                  "AdsPixelConversionStatusUtils",
                ).getStatusFromConversion(e),
              };
              i = i.push(n);
            }
          });
          var l =
            i.find(function (e) {
              return e.status === r("SignalsStatusEnum").ACTIVE;
            }) || i.first();
          if (i.isEmpty() || l == null) return null;
          var s = {
            fb_pixel:
              (n = o(
                "PixelTrackingRowUtil.react",
              ).convertToWebsiteEventIDFromAvailableTrackingSources(l.id, i)) !=
              null
                ? n
                : l.id,
            "action.type": ["offsite_conversion"],
          };
          return s;
        },
        { name: i.id + ".adsDefaultPixelSelector" },
      ),
      s = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {
            defaultTrackingSpec: e,
            isBwPCampaignGroup: r("adsUEditorAreSomeCampaignGroupsBwISelector"),
          },
          function (e, t, n) {
            var r,
              a = n.defaultTrackingSpec,
              i = n.isBwPCampaignGroup;
            return i || a == null
              ? e
              : o("AdsMutators").mutateEach(
                  e,
                  (r = t.adgroupIDs) != null ? r : [],
                  function (e) {
                    return e.tracking_specs != null
                      ? e
                      : o(
                          "AdsUEditorAdgroupTrackingSpecMutators",
                        ).setTrackingSpec(a, e, "offsite_conversion");
                  },
                );
          },
          r("AdsFullFunnelEntryActionFlux").actionType,
        ),
      },
      u = s;
    l.default = u;
  },
  98,
);
