__d(
  "AdsUEditorAdgroupCreativeAssetGroupsAddGroupReducerPlugin",
  [
    "AdsAPIObjectives",
    "AdsAdgroupCreativeAssetGroupsSpecMutators",
    "AdsAdgroupFormatTransformationMutators",
    "AdsAdgroupSemanticFields",
    "AdsMutators",
    "AdsPCAUnifiedFormatAdSetupUtils",
    "AdsPCAUnifiedFormatEligibilityUtils",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupCreativeAssetGroupsAddGroupActionFlux",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorCTXDestinationUtils",
    "AdsUEditorMessagingDestinationUtils",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {
            parentData: o(
              "AdsUEditorAdgroupSelectors",
            ).adObjectsList.mapTransform(
              o("AdsUEditorAdgroupAdObjectsUtils").getParentAdObjectsExtraData,
            ),
          },
          function (e, t, n) {
            var a = n.parentData;
            return o("AdsMutators").mutateEach(
              e,
              t.adgroupIDs,
              function (e, n) {
                var i,
                  l,
                  s,
                  u = r("nullthrows")(a.get(n)),
                  c = u.campaign,
                  d = u.campaignGroup,
                  m = u.specPlugin,
                  p = e,
                  _ = t.index,
                  f =
                    (i =
                      (l = p.creative_asset_groups_spec) == null ||
                      (l = l.groups) == null
                        ? void 0
                        : l.size) != null
                      ? i
                      : 0;
                if (_ === f) {
                  var g, h;
                  p = o(
                    "AdsAdgroupCreativeAssetGroupsSpecMutators",
                  ).setNewGroupSpec(
                    p,
                    (g = t.origin) != null ? g : "creative_asset_groups",
                  );
                  var y = r("AdsAdgroupSemanticFields").callToActionType.get(
                    m,
                    e,
                  );
                  p = o(
                    "AdsAdgroupCreativeAssetGroupsSpecMutators",
                  ).setDefaultCagCallToActionTypeAtIndex(p, _, y);
                  var C = d.objective === r("AdsAPIObjectives").APP_INSTALLS;
                  if (C) {
                    var b = r("AdsAdgroupSemanticFields").linkURL.get(m, e);
                    p = o(
                      "AdsAdgroupCreativeAssetGroupsSpecMutators",
                    ).setCagCallToActionValueByValueType(
                      p,
                      _,
                      b != null ? b : void 0,
                      "link",
                      m,
                    );
                  }
                  var v = o(
                    "AdsUEditorMessagingDestinationUtils",
                  ).isClickToMessageAdDestination(c.destination_type);
                  if (v) {
                    var S = r("AdsAdgroupSemanticFields").callToActionValue.get(
                        m,
                        p,
                      ),
                      R = S == null ? void 0 : S.get("app_destination");
                    typeof R == "string" &&
                      (p = o(
                        "AdsAdgroupCreativeAssetGroupsSpecMutators",
                      ).setCagCallToActionValueByValueType(
                        p,
                        _,
                        R,
                        "app_destination",
                        m,
                      ));
                    var L = S == null ? void 0 : S.get("app_link");
                    typeof L == "string" &&
                      (p = o(
                        "AdsAdgroupCreativeAssetGroupsSpecMutators",
                      ).setCagCallToActionValueByValueType(
                        p,
                        _,
                        L,
                        "app_link",
                        m,
                      ));
                    var E = S == null ? void 0 : S.get("link");
                    typeof E == "string" &&
                      (p = o(
                        "AdsAdgroupCreativeAssetGroupsSpecMutators",
                      ).setCagCallToActionValueByValueType(p, _, E, "link", m));
                  }
                  if (v) {
                    var k = o(
                      "AdsUEditorCTXDestinationUtils",
                    ).getDefaultHeadlineForMessagingDestinations(
                      c.destination_type,
                    );
                    if (k != null) {
                      var I = { text: k, text_type: "headline" };
                      p = o(
                        "AdsAdgroupCreativeAssetGroupsSpecMutators",
                      ).setTextSpecWithTypeAtIndex(p, _, I, 0, "headline", m);
                    }
                  }
                  var T =
                    e == null ||
                    (h = e.creative_asset_groups_spec) == null ||
                    (h = h.toJS()) == null
                      ? void 0
                      : h.groups;
                  if (T != null && T.length !== 0) {
                    var D,
                      x =
                        (D = T[0]) == null ||
                        (D = D.message_extensions) == null ||
                        (D = D[0]) == null
                          ? void 0
                          : D.type;
                    x != null &&
                      (p = o(
                        "AdsAdgroupCreativeAssetGroupsSpecMutators",
                      ).setCagMessageExtension(p, x));
                  }
                }
                if (
                  o(
                    "AdsPCAUnifiedFormatEligibilityUtils",
                  ).isMediaSourcePCAUnifiedFormat(
                    (s = e.metadata) == null ? void 0 : s.adgroup_media_source,
                  ) &&
                  o(
                    "AdsPCAUnifiedFormatEligibilityUtils",
                  ).isGKEnableForUnifiedMediaSetupFlow()
                ) {
                  var $;
                  ((p = o(
                    "AdsAdgroupCreativeAssetGroupsSpecMutators",
                  ).setGroupTypeforCagGroup(p, _, "static")),
                    (p = o(
                      "AdsPCAUnifiedFormatAdSetupUtils",
                    ).addDestinationUrlToCagGroup(p, m, _)));
                  var P =
                    f === 1 &&
                    (e == null || ($ = e.creative) == null
                      ? void 0
                      : $.product_set_id) != null
                      ? ["carousel", "da_collection", "single_media"]
                      : ["single_media"];
                  P.forEach(function (e) {
                    p = o(
                      "AdsAdgroupFormatTransformationMutators",
                    ).adsAdgroupFormatTransformationDataSourceOptInMutator(
                      p,
                      e,
                      "manual_uploads",
                    );
                  });
                }
                return p;
              },
            );
          },
          r("AdsUEditorAdgroupCreativeAssetGroupsAddGroupActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
