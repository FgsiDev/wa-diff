__d(
  "getCometUFIRepliesPagerLabel",
  ["fbt", "CometUFIPagerLabelType", "intlNumUtils"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e) {
      var t = e.labelType,
        n = e.numCommentsToShow,
        a = e.numCommentsTotal;
      switch (t) {
        case r("CometUFIPagerLabelType").VIEW_ONE:
          return s._(/*BTDS*/ "View 1 reply");
        case r("CometUFIPagerLabelType").VIEW_HIDDEN:
          return s._(/*BTDS*/ "View hidden replies");
        case r("CometUFIPagerLabelType").VIEW_HIDDEN_DIVIDER:
          return s._(/*BTDS*/ "Hidden by Facebook");
        case r("CometUFIPagerLabelType").VIEW_HIDDEN_SUBTITLE:
          return s._(
            /*BTDS*/ "These replies were hidden because they may be offensive or spam.",
          );
        case r("CometUFIPagerLabelType").VIEW_MORE:
          return s._(/*BTDS*/ "View more replies");
        case r("CometUFIPagerLabelType").VIEW_ONE_MORE:
          return s._(/*BTDS*/ "View 1 more reply");
        case r("CometUFIPagerLabelType").VIEW_MORE_EXPLICIT:
          return s._(
            /*BTDS*/ '_j{"*":{"*":"View {count} more replies","_1":"View {count} more reply"}}',
            [
              s._param(
                "count",
                o("intlNumUtils").formatNumberWithThousandDelimiters(n),
                [0, n],
              ),
              s._plural(n),
            ],
          );
        case r("CometUFIPagerLabelType").VIEW_PREVIOUS:
          return s._(/*BTDS*/ "View previous replies");
        case r("CometUFIPagerLabelType").VIEW_PREVIOUS_EXPLICIT:
          return s._(
            /*BTDS*/ '_j{"*":{"*":"View {count} previous replies","_1":"View {count} previous reply"}}',
            [
              s._param(
                "count",
                o("intlNumUtils").formatNumberWithThousandDelimiters(n),
                [0, n],
              ),
              s._plural(n),
            ],
          );
        case r("CometUFIPagerLabelType").VIEW_COMMENTS_INDETERMINATE:
          return s._(/*BTDS*/ "View replies");
        case r("CometUFIPagerLabelType").VIEW_ALL:
          return s._(/*BTDS*/ '_j{"*":"View all {count} replies"}', [
            s._param(
              "count",
              o("intlNumUtils").formatNumberWithThousandDelimiters(a),
              [0, a],
            ),
          ]);
        case r("CometUFIPagerLabelType").VIEW_REPLIES:
          return s._(
            /*BTDS*/ '_j{"*":{"*":"View {count} replies","_1":"View {count} reply"}}',
            [
              s._param(
                "count",
                o("intlNumUtils").formatNumberWithThousandDelimiters(n),
                [0, n],
              ),
              s._plural(n),
            ],
          );
      }
    }
    l.default = e;
  },
  226,
);
