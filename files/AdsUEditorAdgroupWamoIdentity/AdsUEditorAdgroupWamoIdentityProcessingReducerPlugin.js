__d(
  "AdsUEditorAdgroupWamoIdentityProcessingReducerPlugin",
  [
    "AdsAPIAdgroupRecordUtils",
    "AdsAccountStore",
    "AdsAdgroupRecordAccessors",
    "AdsDataAtom",
    "AdsMutators",
    "AdsPageUtils",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupWamoIdentityProcessingActionFlux",
    "WAMOIdentityUtils",
    "WamoAvailableIdentitiesStore",
    "adsConvertAdObjectRecordToPlainJS",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {
            parentData: o(
              "AdsUEditorAdgroupSelectors",
            ).adObjectsList.mapTransform(
              o("AdsUEditorAdgroupAdObjectsUtils").getParentAdObjectsExtraData,
            ),
          },
          function (t, n, a) {
            var i = a.parentData;
            (e || (e = r("AdsDataAtom"))).waitFor([
              r("AdsAccountStore").getDispatchToken(),
            ]);
            var l = r("AdsAccountStore").getSelectedAccount().getValue();
            if (l == null) return t;
            var s = l.account_id;
            return o("AdsMutators").mutateEach(t, i.keys(), function (e) {
              var t,
                n = i.get(e.id);
              if (n == null || (n == null ? void 0 : n.campaign) == null)
                return e;
              var a = r("adsConvertAdObjectRecordToPlainJS")(e),
                l = r("adsConvertAdObjectRecordToPlainJS")(n.campaign),
                u =
                  (t = a.creative) == null ||
                  (t = t.wamo_whatsapp_identity_spec) == null
                    ? void 0
                    : t.wamo_whatsapp_identity_id,
                c = o("AdsAPIAdgroupRecordUtils").getPageID_Inner(
                  e,
                  function () {
                    return o("AdsPageUtils").getPageID(a);
                  },
                );
              if (c == null) return e;
              var d = r("WamoAvailableIdentitiesStore").fluxGetSelector(),
                m = d()({ adAccountID: s, pageID: c });
              if (m.hasValue()) {
                var p = m.getValue(),
                  _ = o("WAMOIdentityUtils").getNeededWAMOIdentityAction(
                    l,
                    a,
                    u,
                    p,
                  );
                switch (_.action_type) {
                  case o("WAMOIdentityUtils").WamoIdentityActionTypeEnum
                    .NO_CHANGE:
                    return e;
                  case o("WAMOIdentityUtils").WamoIdentityActionTypeEnum.SET:
                    return u === _.new_identity_id
                      ? e
                      : r(
                          "AdsAdgroupRecordAccessors",
                        ).creative.wamo_whatsapp_identity_spec.wamo_whatsapp_identity_id.set(
                          _.new_identity_id,
                          e,
                        );
                  case o("WAMOIdentityUtils").WamoIdentityActionTypeEnum.UNSET:
                    return u == null
                      ? e
                      : r(
                          "AdsAdgroupRecordAccessors",
                        ).creative.wamo_whatsapp_identity_spec.wamo_whatsapp_identity_id.delete(
                          e,
                        );
                }
              } else {
                var f = o("WAMOIdentityUtils").getCampaignInformation(l, a),
                  g = f.hasMMPlacement,
                  h = f.hasWhatsAppStatus,
                  y = f.isCTWA;
                return h && !y && !g && u == null
                  ? r(
                      "AdsAdgroupRecordAccessors",
                    ).creative.wamo_whatsapp_identity_spec.wamo_whatsapp_identity_id.set(
                      c,
                      e,
                    )
                  : e;
              }
            });
          },
          o("AdsUEditorAdgroupWamoIdentityProcessingActionFlux").actionType,
        ),
      },
      u = s;
    l.default = u;
  },
  98,
);
