__d(
  "AdsUEditorAdgroupMutationUtils",
  ["AdsAdgroupRecordAccessors", "AdsMutators"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      return o("AdsMutators").mutateEach(e, t, function (e) {
        return r("AdsAdgroupRecordAccessors").name.set(n, e);
      });
    }
    l.setNameForEach = e;
  },
  98,
);
