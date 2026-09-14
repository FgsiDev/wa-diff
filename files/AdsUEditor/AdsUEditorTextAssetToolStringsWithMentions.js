__d(
  "AdsUEditorTextAssetToolStringsWithMentions",
  ["fbt", "AHGHelpTrayLink2.react", "geoMargin", "react", "stylex"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = u || (u = o("react")),
      d = "223409425500940",
      m = function () {
        return s._(
          /*BTDS*/ "The primary text for your ad appears in most placements, though the position varies. You can use \u0040 to tag Facebook profiles or Pages. We recommend 125 characters or less. {Link to help center article}",
          [
            s._param(
              "Link to help center article",
              c.jsx(
                "div",
                babelHelpers.extends(
                  {},
                  (e || (e = r("stylex"))).props(r("geoMargin").top8),
                  {
                    children: c.jsx(r("AHGHelpTrayLink2.react"), {
                      helpCenterID: d,
                      label: s._(/*BTDS*/ "About text in ads"),
                      source: "ads_manager_context_preview_learn_more",
                    }),
                  },
                ),
              ),
            ),
          ],
        );
      },
      p = function () {
        return s._(
          /*BTDS*/ "Add a custom primary text for this media. This will replace the primary text you entered during the ad setup and not affect other campaigns. {Link to help center article}",
          [
            s._param(
              "Link to help center article",
              c.jsx(
                "div",
                babelHelpers.extends(
                  {},
                  (e || (e = r("stylex"))).props(r("geoMargin").top8),
                  {
                    children: c.jsx(r("AHGHelpTrayLink2.react"), {
                      helpCenterID: d,
                      label: s._(/*BTDS*/ "About text in ads"),
                      source: "ads_manager_context_preview_learn_more",
                    }),
                  },
                ),
              ),
            ),
          ],
        );
      },
      _ = s._(
        /*BTDS*/ "Add a custom headline for this media. This will replace the headline you entered during the ad setup and not affect other campaigns.",
      ),
      f = s._(
        /*BTDS*/ "Add a custom description for this media. This will replace the description you entered during the ad setup and not affect other campaigns.",
      ),
      g = s._(
        /*BTDS*/ "Add a custom destination URL for this media. This will replace the destination you entered during the ad setup and not affect other campaigns.",
      ),
      h = s._(
        /*BTDS*/ "Add a custom display link for this media. This will replace the display link you entered during the ad setup and not affect other campaigns.",
      );
    ((l.panelDescriptionPartOne = m),
      (l.panelDescriptionPartOneNew = p),
      (l.HEADLINE_TOOLTIP_CONTENT = _),
      (l.DESCRIPTION_TOOLTIP_CONTENT = f),
      (l.WEBSITE_URL_TOOLTIP_CONTENT = g),
      (l.DISPLAY_LINK_TOOLTIP_CONTENT = h));
  },
  226,
);
