__d(
  "AdsUEditorAdgroupSetCallToActionPhoneNumberReducerPlugin",
  [
    "AdsAPIAdgroupPaths",
    "AdsAPIAdgroupRecordUtils",
    "AdsAPIObjectives",
    "AdsAdgroupChildAttachmentsFields",
    "AdsAdgroupCreativeAssetGroupsSpecMutators",
    "AdsAdgroupPhoneNumberValidatorUtil",
    "AdsAdgroupUnifiedCreativeAPIMigrationUtils",
    "AdsAssetFeedUtils",
    "AdsCallAddonUtils",
    "AdsMutators",
    "AdsODAXUtils",
    "AdsPromotedObjectTypes",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupCTAPhoneNumberViewUpdateDataActionFlux",
    "AdsUEditorAdgroupChildAttachmentsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorCallToActionMutators",
    "AdsUEditorCampaignAdObjectsUtils",
    "adsAssetFeedGetCallToActionValue",
    "adsConvertAdObjectRecordToPlainJS",
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
            var a = n.parentData,
              i = t.adgroupIDs || [],
              l = t.childIndex;
            return o("AdsMutators").mutateEach(e, i, function (e, n) {
              var i,
                c = t.view.buildURI(),
                d = t.phoneNumberKey.uri,
                m = r("nullthrows")(a.get(n)),
                p = m.campaign,
                _ = m.campaignGroup,
                f = m.specPlugin,
                g = o("AdsUEditorCampaignAdObjectsUtils").getPromotedObjectType(
                  { campaign: p, campaignGroup: _ },
                );
              if (
                g === r("AdsPromotedObjectTypes").WEBSITE_AND_PHONE_CALL ||
                (g === r("AdsPromotedObjectTypes").WEBSITE &&
                  ((i = e.creative) == null ||
                  (i = i.asset_feed_spec) == null ||
                  (i = i.call_ads_configuration) == null
                    ? void 0
                    : i.call_destination_type) === "WEBSITE_AND_CALL")
              )
                return s(e, c, d);
              var h = o("AdsODAXUtils").maybeTranslateObjective(
                  _.objective,
                  g,
                  null,
                ),
                y = o("AdsAPIAdgroupRecordUtils").getCallToActionLink(e, f),
                C = r("adsConvertAdObjectRecordToPlainJS")(e);
              if (
                (y == null &&
                  o(
                    "AdsAdgroupUnifiedCreativeAPIMigrationUtils",
                  ).isUnifiedCreativePhotoData(C) &&
                  (y = r("adsAssetFeedGetCallToActionValue")(e, 0, "link")),
                l != null &&
                  o(
                    "AdsAdgroupPhoneNumberValidatorUtil",
                  ).isSupportedObjectiveForPhoneCall(h))
              ) {
                var b = r(
                  "AdsAdgroupChildAttachmentsFields",
                ).callToActionLink.get(e, f, l);
                if (b.supported && u(b.value, c, d)) {
                  var v = [
                      o(
                        "AdsUEditorAdgroupChildAttachmentsMutators",
                      ).childIterationConditions.isCardIndex(l),
                    ],
                    S = e.setIn(
                      r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC
                        .LINK_DATA.CALL_TO_ACTION.VALUE.LINK,
                      c,
                    );
                  t.childIndex === 0 &&
                    t.view.phoneNumber != null &&
                    v.push(
                      o("AdsUEditorAdgroupChildAttachmentsMutators")
                        .childIterationConditions.isEmptyValue,
                    );
                  var R = function () {
                    for (
                      var e = arguments.length, t = new Array(e), n = 0;
                      n < e;
                      n++
                    )
                      t[n] = arguments[n];
                    return v.some(function (e) {
                      return e.apply(void 0, t);
                    });
                  };
                  return o(
                    "AdsUEditorAdgroupChildAttachmentsMutators",
                  ).setEachChildField(
                    S,
                    f,
                    r("AdsAdgroupChildAttachmentsFields").callToActionLink,
                    c,
                    R,
                  );
                }
              }
              if (u(y, c, d)) {
                if (o("AdsAssetFeedUtils").isPACAdgroupFromRecord(e))
                  return o(
                    "AdsUEditorCallToActionMutators",
                  ).setCallToActionValueField(e, f, "link", c);
                if (
                  o("AdsAPIAdgroupRecordUtils").isCreativeAssetGroupingsAd(e) &&
                  _.objective === r("AdsAPIObjectives").OUTCOME_SALES
                ) {
                  var L = {};
                  L.type = "CALL_NOW";
                  var E = {};
                  ((E.link = c), (L.value = E));
                  var k = o(
                    "AdsAdgroupCreativeAssetGroupsSpecMutators",
                  ).setSpecsInCagGroup(e, 0, L, "call_to_action");
                  return o(
                    "AdsUEditorCallToActionMutators",
                  ).setCallToActionLink({
                    adgroup: k,
                    callToActionLink: y,
                    link: c,
                    specPlugin: f,
                  });
                }
                return o("AdsUEditorCallToActionMutators").setCallToActionLink({
                  adgroup: e,
                  callToActionLink: y,
                  link: c,
                  specPlugin: f,
                });
              }
              return e;
            });
          },
          o("AdsUEditorAdgroupCTAPhoneNumberViewUpdateDataActionFlux")
            .actionType,
        ),
      },
      s = function (t, n, r) {
        var e,
          a =
            (e = t.creative) == null ||
            (e = e.asset_feed_spec) == null ||
            (e = e.call_ads_configuration) == null
              ? void 0
              : e.phone_number;
        return u(a, n, r)
          ? o("AdsCallAddonUtils").setPhoneNumberAndCallDestinationType(t, n)
          : t;
      },
      u = function (t, n, r) {
        return n === t || r === t;
      },
      c = e;
    l.default = c;
  },
  98,
);
