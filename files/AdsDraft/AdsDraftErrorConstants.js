__d(
  "AdsDraftErrorConstants",
  ["fbt"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = s._(/*BTDS*/ "Complete"),
      u = s._(/*BTDS*/ "This item couldn't be uploaded."),
      c = s._(
        /*BTDS*/ "This ad can't be uploaded because there's an error with the ad set it's associated with. Click the ad sets tab above to see the error.",
      ),
      d = s._(
        /*BTDS*/ "This ad set can't be uploaded because there's an error with the campaign it's associated with. Click the campaigns tab above to see the error.",
      ),
      m = s._(/*BTDS*/ "Failed to publish this item's parent"),
      p = s._(/*BTDS*/ "Publishing was canceled"),
      _ = s._(/*BTDS*/ "An unknown error occurred while publishing this item"),
      f = s._(/*BTDS*/ "Deleted");
    ((l.COMPLETE = e),
      (l.CANNOT_UPLOAD = u),
      (l.ADGROUP_PARENT_CAMPAIGN = c),
      (l.CAMPAIGN_PARENT_CAMPAIGN_GROUP = d),
      (l.OBJECT_GENERIC_PARENT = m),
      (l.CANCELLED = p),
      (l.UNKNOWN = _),
      (l.DELETED = f));
  },
  226,
);
