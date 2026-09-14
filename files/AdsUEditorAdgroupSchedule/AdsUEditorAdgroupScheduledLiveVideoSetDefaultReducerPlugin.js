__d(
  "AdsUEditorAdgroupScheduledLiveVideoSetDefaultReducerPlugin",
  [
    "AdsAPIObjectives",
    "AdsAdgroupRecordAccessors",
    "AdsAdgroupScheduledLiveVideoFixSpecMutators",
    "AdsAdgroupScheduledLiveVideoSetDefaultMutators",
    "AdsLiveVideoAdUtils",
    "AdsMutators",
    "AdsPromotedObjectTypes",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupScheduledLiveVideoSetDefaultActionFlux",
    "AdsUEditorAdgroupSelectors",
    "AdsUnifiedProfileVisitUtils",
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
                var i = a.get(n),
                  l = e;
                if (
                  t.updateAction ===
                  o("AdsLiveVideoAdUtils").ScheduledLiveVideoDefaultUpdateAction
                    .SET
                ) {
                  var s,
                    u,
                    c,
                    d,
                    m,
                    p,
                    _,
                    f,
                    g,
                    h,
                    y,
                    C,
                    b,
                    v,
                    S,
                    R,
                    L,
                    E,
                    k,
                    I,
                    T,
                    D =
                      (s =
                        (u =
                          (c = e.creative) == null ||
                          (c = c.object_story_spec) == null ||
                          (c = c.link_data) == null
                            ? void 0
                            : c.page_welcome_message) != null
                          ? u
                          : (d = e.creative) == null ||
                              (d = d.object_story_spec) == null ||
                              (d = d.video_data) == null
                            ? void 0
                            : d.page_welcome_message) != null
                        ? s
                        : (m = e.creative) == null
                          ? void 0
                          : m.page_welcome_message,
                    x =
                      (p =
                        (_ =
                          (f = e.creative) == null ||
                          (f = f.object_story_spec) == null
                            ? void 0
                            : f.page_id) != null
                          ? _
                          : (g = e.creative) == null
                            ? void 0
                            : g.object_id) != null
                        ? p
                        : i == null ||
                            (h = i.campaign) == null ||
                            (h = h.promoted_object) == null
                          ? void 0
                          : h.page_id,
                    $ =
                      (y =
                        (C = e.creative) == null ||
                        (C = C.object_story_spec) == null
                          ? void 0
                          : C.instagram_actor_id) != null
                        ? y
                        : (b = e.creative) == null
                          ? void 0
                          : b.instagram_actor_id,
                    P =
                      (v =
                        (S = e.creative) == null ||
                        (S = S.object_story_spec) == null
                          ? void 0
                          : S.instagram_user_id) != null
                        ? v
                        : (R = e.creative) == null
                          ? void 0
                          : R.instagram_user_id;
                  ((l = o(
                    "AdsAdgroupScheduledLiveVideoFixSpecMutators",
                  ).clearUnrelatedCreativeForScheduledLiveVideoAd(
                    l,
                    i == null ? void 0 : i.campaign,
                    i == null ? void 0 : i.campaignGroup,
                  )),
                    (l = o(
                      "AdsAdgroupScheduledLiveVideoFixSpecMutators",
                    ).setCTXMultiSpecForScheduledLiveVideoAd(
                      l,
                      i == null ? void 0 : i.campaign,
                    )),
                    (l = o(
                      "AdsAdgroupScheduledLiveVideoSetDefaultMutators",
                    ).setDefaultFieldForScheduledLiveVideoAdToSpec(
                      l,
                      x,
                      $,
                      P,
                      D,
                    )));
                  var N =
                      i == null || (L = i.campaignGroup) == null
                        ? void 0
                        : L.objective,
                    M =
                      i == null ||
                      (E = i.campaign) == null ||
                      (E = E.promoted_object) == null
                        ? void 0
                        : E.application_id,
                    w =
                      i == null ||
                      (k = i.campaign) == null ||
                      (k = k.promoted_object) == null
                        ? void 0
                        : k.object_store_url,
                    A =
                      i == null ||
                      (I = i.campaign) == null ||
                      (I = I.promoted_object) == null
                        ? void 0
                        : I.object_store_urls,
                    F = w != null ? w : A != null ? Array.from(A)[0] : null;
                  if (M != null && F != null) {
                    var O,
                      B = null;
                    if (
                      (N === r("AdsAPIObjectives").APP_INSTALLS
                        ? (B = "INSTALL_MOBILE_APP")
                        : N === r("AdsAPIObjectives").LINK_CLICKS &&
                          (i == null || (O = i.campaign) == null
                            ? void 0
                            : O.conversion_locations) ===
                            r("AdsPromotedObjectTypes").MOBILE_APP &&
                          (B = "USE_MOBILE_APP"),
                      B != null)
                    ) {
                      var W;
                      l = o("AdsMutators").chain(
                        (W = r(
                          "AdsAdgroupRecordAccessors",
                        )).creative.object_story_spec.video_data.call_to_action.type.set(
                          B,
                        ),
                        W.creative.object_story_spec.video_data.call_to_action.value.link.set(
                          F,
                        ),
                        W.creative.call_to_action.type.set(B),
                        W.creative.call_to_action_type.set(B),
                        W.creative.call_to_action.value.link.set(F),
                      )(l);
                    }
                  } else if (
                    (i == null || (T = i.campaign) == null
                      ? void 0
                      : T.conversion_locations) ===
                      r("AdsPromotedObjectTypes").IG_PROFILE_AND_FB_PAGE &&
                    x != null
                  ) {
                    var W,
                      q = o(
                        "AdsUnifiedProfileVisitUtils",
                      ).getExternalLinkForFacebookPageVisit(x);
                    l = o("AdsMutators").chain(
                      (W = r(
                        "AdsAdgroupRecordAccessors",
                      )).creative.object_story_spec.video_data.call_to_action.type.set(
                        "VISIT_PROFILE",
                      ),
                      W.creative.object_story_spec.video_data.call_to_action.value.link.set(
                        q,
                      ),
                      W.creative.call_to_action.type.set("VISIT_PROFILE"),
                      W.creative.call_to_action_type.set("VISIT_PROFILE"),
                      W.creative.call_to_action.value.link.set(q),
                    )(l);
                  }
                  return l;
                } else
                  t.updateAction ===
                    o("AdsLiveVideoAdUtils")
                      .ScheduledLiveVideoDefaultUpdateAction.UNSET &&
                    (l = o("AdsMutators").chain(
                      r("AdsAdgroupRecordAccessors").creative.media_type.delete,
                      r("AdsAdgroupRecordAccessors").creative.object_story_spec
                        .video_data.delete,
                    )(e));
                return l;
              },
            );
          },
          r("AdsUEditorAdgroupScheduledLiveVideoSetDefaultActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
