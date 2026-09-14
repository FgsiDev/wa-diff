__d(
  "dangerouslyOverrideMediaElementEndedProperty",
  [],
  function (t, n, r, o, a, i) {
    function e(e) {
      return (
        e === void 0 && (e = {}),
        (e.dangerouslyOverrideMediaElementEndedProperty = !0),
        e
      );
    }
    ((e.isEnded = function (e) {
      return !!(
        e &&
        e.detail &&
        e.detail.dangerouslyOverrideMediaElementEndedProperty
      );
    }),
      (i.default = e));
  },
  66,
);
