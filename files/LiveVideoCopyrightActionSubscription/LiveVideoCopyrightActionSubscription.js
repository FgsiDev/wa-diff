__d(
  "LiveVideoCopyrightActionSubscription",
  ["BaseGraphQLSubscription", "LiveVideoCopyrightActionSubscription.graphql"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (function (t) {
        function r() {
          return t.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(r, t);
        var o = r.prototype;
        return (
          (o.getTopic = function (t) {
            return "gqls/" + this.getSubscriptionName() + "/video_id_" + t;
          }),
          (o.getQuery = function () {
            return e !== void 0
              ? e
              : (e = n("LiveVideoCopyrightActionSubscription.graphql"));
          }),
          (o.getQueryParameters = function (t) {
            return { input: { video_id: t } };
          }),
          r
        );
      })(r("BaseGraphQLSubscription"));
    l.default = s;
  },
  98,
);
