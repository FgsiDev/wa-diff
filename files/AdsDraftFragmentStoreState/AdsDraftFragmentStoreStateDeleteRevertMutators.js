__d(
  "AdsDraftFragmentStoreStateDeleteRevertMutators",
  [
    "AdsDraftFragmentStoreStateApplyChangesMutators",
    "AdsDraftFragmentStoreStateUpdateFragmentsMutators",
    "AdsDraftFragmentStoreStateUtils",
    "immutable",
    "partitionArray",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, a) {
      var i = e;
      if (a) {
        var l = r("partitionArray")(t, function (e) {
            return o("AdsDraftFragmentStoreStateUtils").isNewFragment(i, e);
          }),
          s = l[0],
          c = l[1];
        return (
          (i = u(i, s)),
          (i = o(
            "AdsDraftFragmentStoreStateApplyChangesMutators",
          ).mutateFragments(i, c, function (e, t) {
            return o("AdsDraftFragmentStoreStateUtils").isNew(i, t)
              ? e.set("deleteOverride", !0)
              : e.set("values", r("immutable").Map());
          })),
          o(
            "AdsDraftFragmentStoreStateUpdateFragmentsMutators",
          ).updateComputedValues(i)
        );
      }
      return (
        (i = o(
          "AdsDraftFragmentStoreStateApplyChangesMutators",
        ).mutateFragments(i, t, function (e, t) {
          return o("AdsDraftFragmentStoreStateUtils").isNew(i, t)
            ? e
            : e.set("values", r("immutable").Map());
        })),
        (i = o("AdsDraftFragmentStoreStateApplyChangesMutators").setPath(
          i,
          n,
          t,
          "ARCHIVED",
        )),
        o(
          "AdsDraftFragmentStoreStateUpdateFragmentsMutators",
        ).updateComputedValues(i)
      );
    }
    function s(t, n, a) {
      var i = t,
        l = r("partitionArray")(n, function (e) {
          return o("AdsDraftFragmentStoreStateUtils").isNew(i, e);
        }),
        s = l[0],
        u = l[1];
      return (
        (i = e(i, s, a, !1)),
        (i = o(
          "AdsDraftFragmentStoreStateApplyChangesMutators",
        ).mutateFragments(i, u, function (e) {
          return e.set("values", r("immutable").Map());
        })),
        i
      );
    }
    function u(e, t) {
      var n = e,
        r = n.dirtyIDs,
        a = o("AdsDraftFragmentStoreStateUtils").fragmentsMapWithMutations(
          n.fragments,
          function (e) {
            e.forEach(function (n, o) {
              !n ||
                !n.value ||
                t.indexOf(n.value.fragmentID) < 0 ||
                (e.delete(o), (r = r.remove(o)));
            });
          },
        );
      return (
        (n.fragments !== a || n.dirtyIDs !== r) &&
          ((n = n.merge({ dirtyIDs: r, fragments: a })),
          (n = o(
            "AdsDraftFragmentStoreStateUpdateFragmentsMutators",
          ).updateComputedValues(n))),
        n
      );
    }
    ((l.delete_ = e), (l.revert = s), (l.deleteFragments = u));
  },
  98,
);
