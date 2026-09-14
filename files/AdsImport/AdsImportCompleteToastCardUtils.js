__d(
  "AdsImportCompleteToastCardUtils",
  ["fbt"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = 2e4,
      u = "importComplete",
      c = s._(/*BTDS*/ "All your items were imported");
    function d(e) {
      return u.concat(e);
    }
    function m(e, t, n, r) {
      var o = s._(
        /*BTDS*/ '_j{"*":{"*":{"*":"{campaignCount} campaigns , {adSetCount} ad sets and {adCount} ads were imported successfully. Now you can review and publish your drafts.","_1":"{campaignCount} campaigns , {adSetCount} ad sets and 1 ad were imported successfully. Now you can review and publish your drafts."},"_1":{"*":"{campaignCount} campaigns , 1 ad set and {adCount} ads were imported successfully. Now you can review and publish your drafts.","_1":"{campaignCount} campaigns , 1 ad set and 1 ad were imported successfully. Now you can review and publish your drafts."}},"_1":{"*":{"*":"1 campaign , {adSetCount} ad sets and {adCount} ads were imported successfully. Now you can review and publish your drafts.","_1":"1 campaign , {adSetCount} ad sets and 1 ad were imported successfully. Now you can review and publish your drafts."},"_1":{"*":"1 campaign , 1 ad set and {adCount} ads were imported successfully. Now you can review and publish your drafts.","_1":"1 campaign , 1 ad set and 1 ad were imported successfully. Now you can review and publish your drafts."}}}',
        [
          s._plural(e, "campaignCount"),
          s._plural(t, "adSetCount"),
          s._plural(n, "adCount"),
        ],
      );
      return r === !0
        ? s._(
            /*BTDS*/ "{successMessageWithSuffix} Advantage+ detailed targeting has been applied to some of your ad sets, so we may deliver ads beyond your audiences if it's likely to improve performance.",
            [s._param("successMessageWithSuffix", o)],
          )
        : o;
    }
    ((l.DISMISS_TIMER = e),
      (l.TOAST_CARD_HEADER = c),
      (l.getToastCardID = d),
      (l.getToastCardBody = m));
  },
  226,
);
