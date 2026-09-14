__d(
  "AdsDraftFragmentStoreStateUpdateFragmentsMutators",
  [
    "AdsAPIDraftFragmentPaths",
    "AdsDraftFragmentRecord",
    "AdsDraftFragmentStore",
    "AdsDraftFragmentStoreStateUtils",
    "AdsDraftFragmentTranslationMutators",
    "AdsLoadStateUtils_LEGACY",
    "AdsLoadState_LEGACY",
    "FBLogger",
    "LoadObject",
    "getByPath",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      n === void 0 && (n = !1);
      var a = e,
        l = r("AdsDraftFragmentStore").getAll(t);
      if (o("AdsLoadStateUtils_LEGACY").anyLoading(l))
        return a
          .set("isLoading", !0)
          .set("loadState", r("AdsLoadState_LEGACY").LOADING);
      var u = Array.from(l.values()),
        c = u.filter(function (e) {
          var t = r("getByPath")(
              e,
              r("AdsAPIDraftFragmentPaths").AD_OBJECT_TYPE,
            ),
            n = r("getByPath")(e, r("AdsAPIDraftFragmentPaths").AD_DRAFT_ID);
          return (
            t === o("AdsDraftFragmentStoreStateUtils").getObjectType(a) &&
            n === a.draftID
          );
        }),
        d = a.dirtyIDs,
        m = o("AdsDraftFragmentStoreStateUtils").fragmentsMapWithMutations(
          a.fragments,
          function (e) {
            d = d.withMutations(function (l) {
              if (
                (c.forEach(function (t) {
                  var n = r("AdsDraftFragmentRecord").fromAPI(t);
                  n = o(
                    "AdsDraftFragmentTranslationMutators",
                  ).translateFragment(n);
                  var s = n.objectID,
                    u = o("AdsDraftFragmentStoreStateUtils").getRaw(a, s),
                    c = l.get(s);
                  (c &&
                    (c < a.lastSyncTime.value()
                      ? l.remove(s)
                      : ((n = n.set("values", u.values)),
                        (n = n.set("status", u.status)),
                        r("FBLogger")("ads").info(
                          "Draft fragment for %s %s was modified after the sync completed. This is okay if you are editing the object right now, but if you get this repeatedly, something is probably broken.",
                          a.objectType,
                          s,
                        ))),
                    e.set(
                      s,
                      r("LoadObject").withValue(n, { creatorModuleID: i.id }),
                    ));
                }),
                n)
              ) {
                var s = new Set(t),
                  u = [];
                e.forEach(function (e, t) {
                  e &&
                    e.value &&
                    !s.has(e.value.fragmentID) &&
                    (u.push(t), l.remove(t));
                });
                for (var d of u) e.delete(d);
              }
            });
          },
        );
      return (
        (a.fragments !== m || a.dirtyIDs !== d || a.isLoading !== !1) &&
          ((a = a.merge({
            dirtyIDs: d,
            isLoading: !1,
            loadState: r("AdsLoadState_LEGACY").LOADED,
            fragments: m,
          })),
          (a = s(a))),
        a
      );
    }
    function s(e) {
      var t = e.fragments
          .value()
          .filter(function (t) {
            return (
              t.value &&
              t.value.action === "add" &&
              !(
                t.value.objectID &&
                o("AdsDraftFragmentStoreStateUtils").isDeleted(
                  e,
                  t.value.objectID,
                )
              )
            );
          })
          .toSet()
          .sort(function (e, t) {
            return (
              (e = e.getValueEnforcing()),
              (t = t.getValueEnforcing()),
              e.timeCreated === t.timeCreated
                ? e.fragmentID < t.fragmentID
                  ? 1
                  : -1
                : e.timeCreated > t.timeCreated
                  ? 1
                  : -1
            );
          })
          .groupBy(function (e) {
            return e.getValueEnforcing().accountID;
          })
          .map(function (e) {
            return e.map(function (e) {
              return e.getValueEnforcing().objectID;
            });
          }),
        n = e.fragments
          .value()
          .filter(function (e) {
            return !o("AdsDraftFragmentStoreStateUtils").isFragmentEmpty(
              e.value,
            );
          })
          .groupBy(function (e) {
            return e.getValueEnforcing().accountID;
          });
      return t !== e.newIDs || n !== e.fragmentsInDraftByAccount
        ? e.merge({ newIDs: t, fragmentsInDraftByAccount: n })
        : e;
    }
    ((l.updateFragments = e), (l.updateComputedValues = s));
  },
  98,
);
