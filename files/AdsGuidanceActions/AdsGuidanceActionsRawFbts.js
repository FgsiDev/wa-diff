__d(
  "AdsGuidanceActionsRawFbts",
  ["fbt"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = s._(/*BTDS*/ "Actions"),
      u = s._(/*BTDS*/ "Recommendations"),
      c = s._(/*BTDS*/ "Points"),
      d = s._(/*BTDS*/ "Ad errors"),
      m = s._(/*BTDS*/ "Ad warnings"),
      p = s._(/*BTDS*/ "Ad set errors"),
      _ = s._(/*BTDS*/ "Ad set warnings"),
      f = function (t, n) {
        return s._(
          /*BTDS*/ '_j{"*":{"*":{"*":{"*":"{ads} ads in this ad set have {errors} errors. Review the ads and make changes if needed."},"_1":{"*":"{ads} ads in this ad set have 1 error. Review the ads and make changes if needed."}}},"_1":{"_1":{"*":{"_1":"1 ad in this ad set has {errors} errors. Review the ad and make changes if needed."},"_1":{"_1":"1 ad in this ad set has 1 error. Review the ad and make changes if needed."}}}}',
          [
            s._plural(t, "ads"),
            s._plural(t),
            s._plural(n, "errors"),
            s._plural(t),
          ],
        );
      },
      g = function (t, n) {
        return s._(
          /*BTDS*/ '_j{"*":{"*":{"*":{"*":"{ads} ads in this ad set have {errors} errors. To restore your ads, request review with Meta AI."},"_1":{"*":"{ads} ads in this ad set have 1 error. To restore your ads, request review with Meta AI."}}},"_1":{"_1":{"*":{"_1":"1 ad in this ad set has {errors} errors. To restore your ad, request review with Meta AI."},"_1":{"_1":"1 ad in this ad set has 1 error. To restore your ad, request review with Meta AI."}}}}',
          [
            s._plural(t, "ads"),
            s._plural(t),
            s._plural(n, "errors"),
            s._plural(t),
          ],
        );
      },
      h = function (t, n) {
        return s._(
          /*BTDS*/ '_j{"*":{"*":{"*":{"*":"{ads} ads in this campaign have {errors} errors. Review the ads and make changes if needed."},"_1":{"*":"{ads} ads in this campaign have 1 error. Review the ads and make changes if needed."}}},"_1":{"_1":{"*":{"_1":"1 ad in this campaign has {errors} errors. Review the ad and make changes if needed."},"_1":{"_1":"1 ad in this campaign has 1 error. Review the ad and make changes if needed."}}}}',
          [
            s._plural(t, "ads"),
            s._plural(t),
            s._plural(n, "errors"),
            s._plural(t),
          ],
        );
      },
      y = function (t, n) {
        return t === 1
          ? s._(
              /*BTDS*/ "We rejected your ad because it looks like it goes against our Advertising Standards.",
            )
          : s._(
              /*BTDS*/ "{adCount} ads in this campaign have errors and are rejected because they appear to go against our Advertising Standards.",
              [s._param("adCount", t)],
            );
      },
      C = function (t, n) {
        return s._(
          /*BTDS*/ '_j{"*":{"*":{"*":{"*":"{ads} ads in this campaign have {errors} errors. To restore your ads, request review with Meta AI."},"_1":{"*":"{ads} ads in this campaign have 1 error. To restore your ads, request review with Meta AI."}}},"_1":{"_1":{"*":{"_1":"1 ad in this campaign has {errors} errors. To restore your ad, request review with Meta AI."},"_1":{"_1":"1 ad in this campaign has 1 error. To restore your ad, request review with Meta AI."}}}}',
          [
            s._plural(t, "ads"),
            s._plural(t),
            s._plural(n, "errors"),
            s._plural(t),
          ],
        );
      },
      b = function (t, n) {
        return s._(
          /*BTDS*/ '_j{"*":{"*":{"*":{"*":"{ad sets} ad sets in this campaign have {errors} errors. Review the ad sets and make changes if needed."},"_1":{"*":"{ad sets} ad sets in this campaign have 1 error. Review the ad sets and make changes if needed."}}},"_1":{"_1":{"*":{"_1":"1 ad set in this campaign has {errors} errors. Review the ad set and make changes if needed."},"_1":{"_1":"1 ad set in this campaign has 1 error. Review the ad set and make changes if needed."}}}}',
          [
            s._plural(t, "ad sets"),
            s._plural(t),
            s._plural(n, "errors"),
            s._plural(t),
          ],
        );
      },
      v = function (t, n) {
        return s._(
          /*BTDS*/ '_j{"*":{"*":{"*":{"*":"{ad sets} ad sets in this campaign have {warnings} warnings. Review the ad sets and make changes if needed."},"_1":{"*":"{ad sets} ad sets in this campaign have 1 warning. Review the ad sets and make changes if needed."}}},"_1":{"_1":{"*":{"_1":"1 ad set in this campaign has {warnings} warnings. Review the ad set and make changes if needed."},"_1":{"_1":"1 ad set in this campaign has 1 warning. Review the ad set and make changes if needed."}}}}',
          [
            s._plural(t, "ad sets"),
            s._plural(t),
            s._plural(n, "warnings"),
            s._plural(t),
          ],
        );
      },
      S = function (t) {
        return s._(
          /*BTDS*/ '_j{"*":"{number} recommendations","_1":"1 recommendation"}',
          [s._plural(t, "number")],
        );
      },
      R = function (t) {
        return s._(/*BTDS*/ '_j{"*":"Warnings","_1":"Warning"}', [
          s._plural(t),
        ]);
      },
      L = function (t) {
        return s._(/*BTDS*/ '_j{"*":"Errors","_1":"Error"}', [s._plural(t)]);
      },
      E = function (t) {
        return s._(/*BTDS*/ '_j{"*":"{number} errors","_1":"1 error"}', [
          s._plural(t, "number"),
        ]);
      },
      k = function (t) {
        return s._(/*BTDS*/ '_j{"*":"{number} warnings","_1":"1 warning"}', [
          s._plural(t, "number"),
        ]);
      },
      I = function (t, n) {
        switch (n) {
          case "warnings":
            return s._(
              /*BTDS*/ '_j{"*":"{number} More warnings","_1":"1 More warning"}',
              [s._plural(t, "number")],
            );
          case "errors":
            return s._(
              /*BTDS*/ '_j{"*":"{number} More errors","_1":"1 More error"}',
              [s._plural(t, "number")],
            );
          case "extended_alpha":
            return s._(/*BTDS*/ "View all");
          default:
            return s._(
              /*BTDS*/ '_j{"*":"{number} More recommendations","_1":"1 More recommendation"}',
              [s._plural(t, "number")],
            );
        }
      },
      T = s._(/*BTDS*/ "Top recommendation"),
      D = s._(/*BTDS*/ "Recommendation"),
      x = s._(/*BTDS*/ "New campaign recommendation");
    ((l.ACTIONS_COLUMN_HEADER = e),
      (l.ACTIONS_COLUMN_HEADER_RENAMED = u),
      (l.SCORE_COLUMN_HEADER = c),
      (l.ACTIONS_AD_ERRORS = d),
      (l.ACTIONS_AD_WARNINGS = m),
      (l.ACTIONS_CAMPAIGN_ERRORS = p),
      (l.ACTIONS_CAMPAIGN_WARNINGS = _),
      (l.getSomeAdErrorsInCampaignText = f),
      (l.getSomeAdErrorsInCampaignTextForMAIBA = g),
      (l.getSomeAdErrorsInCampaignGroupText = h),
      (l.getSomeAdErrorsInCampaignGroupTextV2 = y),
      (l.getSomeAdErrorsInCampaignGroupTextForMAIBA = C),
      (l.getSomeCampaignErrorsInCampaignGroupText = b),
      (l.getSomeCampaignWarningsInCampaignGroupText = v),
      (l.getRecommendationCountText = S),
      (l.getWarningCountText = R),
      (l.getErrorCountText = L),
      (l.getErrorCountWithLabelText = E),
      (l.getWarningCountWithLabelText = k),
      (l.getSeeMoreButton = I),
      (l.TOP_RECOMMENDATION = T),
      (l.RECOMMENDATION = D),
      (l.PRECREATE_RECOMMENDATION = x));
  },
  226,
);
