__d(
  "AdsAudienceBehaviorWarnings",
  ["errorDesc", "fbt"],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    function e() {
      return u._(
        /*BTDS*/ "The custom product audience is not supported for editing",
      );
    }
    function c() {
      return u._(
        /*BTDS*/ "For identical events, the number of days for the inclusion behavior must be greater than the number of days for the corresponding exclusion behavior. Edit the durations for your events.",
      );
    }
    function d() {
      return s._(function (e, t) {
        return e._(
          /*BTDS*/ "Please enter numbers between 1 and 180 in the audience inclusion and exclusion fields.",
        );
      }, {});
    }
    ((l.getUnsupportedAudienceSpecWarning = e),
      (l.getInvalidBehaviorOverlapWarning = c),
      (l.getInvalidRetentionWarning = d));
  },
  226,
);
