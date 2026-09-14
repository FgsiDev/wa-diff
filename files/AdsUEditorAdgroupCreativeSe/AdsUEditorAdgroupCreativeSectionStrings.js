__d(
  "AdsUEditorAdgroupCreativeSectionStrings",
  [
    "fbt",
    "AdsBulkValueUtils",
    "AdsBwIConfig",
    "AdsLearnMore.react",
    "AdsLinkPostFormat",
    "AdsUEditorTextAssetToolStringsWithMentions",
    "AdsValidationConfig.experimental",
    "DateConsts",
    "geoMargin",
    "justknobx",
    "react",
    "stylex",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = u || (u = o("react")),
      d = s._(/*BTDS*/ "Text"),
      m = s._(
        /*BTDS*/ "We'll display these text options on ads across all types of media, unless you override them with text added elsewhere.",
      ),
      p = s._(
        /*BTDS*/ "Show a shortened link instead of your full website URL. The link should go to the same domain as your website URL. The display link won't show in all placements.",
      ),
      _ = s._(/*BTDS*/ "Enter the link you want to show on your ad."),
      f = s._(/*BTDS*/ "Call description"),
      g = s._(/*BTDS*/ "Description"),
      h = s._(
        /*BTDS*/ "The description is additional text that appears in some placements. Its position on the ad varies by placement.",
      ),
      y = s._(/*BTDS*/ "Include additional details"),
      C = s._(/*BTDS*/ "Tell people who they will be talking to"),
      b = s._(
        /*BTDS*/ "Let viewers know what they can expect from your live session",
      ),
      v = s._(/*BTDS*/ "Tell people what your ad is about"),
      S = s._(/*BTDS*/ "Your post's original text will be used"),
      R = s._(/*BTDS*/ "Event name"),
      L = s._(/*BTDS*/ "Select when to send notifications"),
      E = s._(/*BTDS*/ "We'll send notifications based off the start time."),
      k = s._(/*BTDS*/ "1 day before, 15 minutes before and at start time"),
      I = s._(/*BTDS*/ "1 day before, at start time and 1 day after"),
      T = s._(/*BTDS*/ "1 day before, at start time and 2 days after"),
      D = s._(/*BTDS*/ "1 day before, at start time and 3 days after"),
      x = s._(/*BTDS*/ "1 day before, at start time and 4 days after"),
      $ = s._(/*BTDS*/ "1 day before, at start time and 5 days after"),
      P = s._(/*BTDS*/ "1 day before, at start time and 6 days after"),
      N = s._(/*BTDS*/ "1 day before, at start time and 7 days after"),
      M = s._(/*BTDS*/ "Unable to modify event name after event has started."),
      w = s._(/*BTDS*/ "Give your event a name"),
      A = s._(
        /*BTDS*/ "Unable to modify event date or time after event has started.",
      ),
      F = s._(
        /*BTDS*/ "Choose a time at least {earliest event start time in hours} hour from now",
        [
          s._param(
            "earliest event start time in hours",
            Math.round(r("justknobx")._("1302") / o("DateConsts").SEC_PER_HOUR),
          ),
        ],
      ),
      O = s._(
        /*BTDS*/ "Choose a date within {maximum event duration in months} months of today",
        [
          s._param(
            "maximum event duration in months",
            Math.round(
              r("justknobx")._("1421") /
                (o("DateConsts").SEC_PER_DAY *
                  o("DateConsts").AVG_DAYS_PER_MONTH),
            ),
          ),
        ],
      ),
      B = s._(/*BTDS*/ "Event start time must be before event end time"),
      W = s._(/*BTDS*/ "Event end time must be after event start time"),
      q = s._(/*BTDS*/ "Select a valid start time"),
      U = s._(
        /*BTDS*/ "Events must be at least {minimum event duration in minutes} minutes long",
        [
          s._param(
            "minimum event duration in minutes",
            Math.round(r("justknobx")._("1246") / o("DateConsts").SEC_PER_MIN),
          ),
        ],
      ),
      V = s._(
        /*BTDS*/ "Events can only last up to {maximum event duration in days} days",
        [
          s._param(
            "maximum event duration in days",
            Math.round(r("justknobx")._("1300") / o("DateConsts").SEC_PER_DAY),
          ),
        ],
      ),
      H = s._(/*BTDS*/ "Select a valid end time"),
      G = s._(
        /*BTDS*/ "The headline will appear in most placements, but its position will vary by placement. Headlines over 40 characters may be cut off.",
      ),
      z = s._(/*BTDS*/ "Write a short headline"),
      j = s._(
        /*BTDS*/ "Show a short version of your website URL instead of your full URL. The domains for your Website URL and Display Link should match.",
      ),
      K = s._(
        /*BTDS*/ "Show a shortened link instead of your full website URL in some placements. The link should go to the same domain as your website URL. The position of the display link varies by placement.",
      ),
      Q = s._(/*BTDS*/ "Enter the link you want to show on your ad"),
      X = s._(
        /*BTDS*/ "Add the URL you want people to visit. We've pre-filled this using your product set, but you can edit this field.",
      ),
      Y = s._(
        /*BTDS*/ "Enter the URL for the web page you want people to visit.",
      ),
      J = s._(/*BTDS*/ "Landing page URL"),
      Z = s._(/*BTDS*/ "Enter website URL"),
      ee = s._(
        /*BTDS*/ "Your landing page should contain a link to an app store so people can install your app.",
      ),
      te = s._(/*BTDS*/ "Fallback website URL"),
      ne = s._(/*BTDS*/ "http:\/\/www.example.com\/page"),
      re = s._(/*BTDS*/ "Enter the website link"),
      oe = s._(/*BTDS*/ "Media"),
      ae = s._(
        /*BTDS*/ "Manually select media for your carousel cards or fill them dynamically from a product set in your catalog.",
      ),
      ie = s._(/*BTDS*/ "Fill carousel cards dynamically from a product set"),
      le = s._(/*BTDS*/ "Carousel cards"),
      se = s._(/*BTDS*/ "Carousel optimizations"),
      ue = s._(
        /*BTDS*/ "Choose media and enter text for up to 10 carousel cards.",
      ),
      ce = function (t) {
        return s._(/*BTDS*/ "{current card count} of 10 cards added", [
          s._param("current card count", t),
        ]);
      },
      de = s._(
        /*BTDS*/ "Promote your Facebook event. Event must be active and tickets must be sold online.",
      ),
      me = s._(/*BTDS*/ "Enter your event name or Facebook event URL"),
      pe = s._(/*BTDS*/ "Destination"),
      _e = s._(
        /*BTDS*/ "3 cards will be shown before the option to expand (or 2 for 2-card carousels). This may increase your cost per result. When not selected, the number of cards varies to optimize for performance.",
      ),
      fe = s._(
        /*BTDS*/ "If you add a website URL, people who click or tap on your ad will go to your website. If you don't, they'll go to your Facebook Page or Instagram profile.",
      ),
      ge = s._(
        /*BTDS*/ "If you add a destination, you can send people immediately after they tap or click your ad to a website or a fullscreen experience. If you don't, they'll be sent to your Facebook Page or Instagram profile.",
      ),
      he = s._(
        /*BTDS*/ "If you add a destination, you can send people immediately after they tap or click your ad to a website, a fullscreen experience, or a call. If you don't, they'll be sent to your Facebook Page or Instagram profile.",
      ),
      ye = s._(/*BTDS*/ "Include a destination you want people to visit."),
      Ce = s._(
        /*BTDS*/ "On Facebook Feed, Instagram feed and Instagram Stories, the carousel card that performs best will be shown first. For all other placements, cards will appear in the order you arrange them.",
      ),
      be = s._(
        /*BTDS*/ "The headline will appear in most placements, but its position will vary by placement. Headlines over 40 characters may be cut off.",
      ),
      ve = s._(/*BTDS*/ "Write a short headline"),
      Se = s._(/*BTDS*/ "Select a post to see headline"),
      Re = s._(/*BTDS*/ "This post has no caption to use"),
      Le = s._(
        /*BTDS*/ "The description is additional text that appears in some placements. Its position on the ad varies by placement.",
      ),
      Ee = s._(/*BTDS*/ "Include additional details"),
      ke = s._(/*BTDS*/ "Description for marketing message"),
      Ie = s._(/*BTDS*/ "Body"),
      Te = s._(/*BTDS*/ "Headline"),
      De = s._(/*BTDS*/ "Add the text or additional details of your message."),
      xe = s._(
        /*BTDS*/ "Enter the URL you want people to visit when they click or tap your last carousel card. The last card is optional and it won't appear in all placements.",
      ),
      $e = function () {
        return s._(
          /*BTDS*/ "Show a button or link on your ad that represents the action you want people to take. {Learn more}",
          [
            s._param(
              "Learn more",
              c.jsx(
                "div",
                babelHelpers.extends(
                  {},
                  (e || (e = r("stylex"))).props(r("geoMargin").top8),
                  {
                    children: c.jsx(r("AdsLearnMore.react"), {
                      cmsID: "410873986524407",
                      source: "ads_manager_context_preview_learn_more",
                    }),
                  },
                ),
              ),
            ),
          ],
        );
      },
      Pe = function () {
        return s._(
          /*BTDS*/ "Add a button or link telling people to take action. Go to {=m1} to see it in different placements. {Learn more}",
          [
            s._param(
              "Learn more",
              c.jsx(
                "div",
                babelHelpers.extends(
                  {},
                  (e || (e = r("stylex"))).props(r("geoMargin").top8),
                  {
                    children: c.jsx(r("AdsLearnMore.react"), {
                      cmsID: "410873986524407",
                      label: "About calls to action",
                      source: "ads_manager_context_preview_learn_more",
                    }),
                  },
                ),
              ),
            ),
            s._implicitParam(
              "=m1",
              c.jsx("span", {
                style: { fontWeight: "bold" },
                children: s._(/*BTDS*/ "Advanced Preview"),
              }),
            ),
          ],
        );
      },
      Ne = function () {
        return s._(
          /*BTDS*/ "Add a button or link telling people to take action. Go to {=m1} to see it in different placements. {performance notice}{Learn more}",
          [
            s._param(
              "performance notice",
              c.jsx(
                "div",
                babelHelpers.extends(
                  {},
                  (e || (e = r("stylex"))).props(r("geoMargin").top8),
                  {
                    children:
                      "We updated your ad's call to action based on general performance data.",
                  },
                ),
              ),
            ),
            s._param(
              "Learn more",
              c.jsx(
                "div",
                babelHelpers.extends({}, e.props(r("geoMargin").top8), {
                  children: c.jsx(r("AdsLearnMore.react"), {
                    cmsID: "410873986524407",
                    label: "About calls to action",
                    source: "ads_manager_context_preview_learn_more",
                  }),
                }),
              ),
            ),
            s._implicitParam(
              "=m1",
              c.jsx("span", {
                style: { fontWeight: "bold" },
                children: s._(/*BTDS*/ "Advanced Preview"),
              }),
            ),
          ],
        );
      },
      Me = function () {
        return s._(
          /*BTDS*/ "A secondary call to action that opens the destination will appear on the post after a user sets a reminder.",
        );
      },
      we = function () {
        return s._(
          /*BTDS*/ "Show a button or link on your ad that represents the action you want people to take. Forms with gated content may have {Exclusive info} next to the CTA text on Instagram. {Learn more}",
          [
            s._param(
              "Exclusive info",
              c.jsx("span", {
                style: { fontWeight: "bold" },
                children: "Exclusive Info",
              }),
            ),
            s._param(
              "Learn more",
              c.jsx(
                "div",
                babelHelpers.extends(
                  {},
                  (e || (e = r("stylex"))).props(r("geoMargin").top8),
                  {
                    children: c.jsx(r("AdsLearnMore.react"), {
                      cmsID: "410873986524407",
                      source: "ads_manager_context_preview_learn_more",
                    }),
                  },
                ),
              ),
            ),
          ],
        );
      },
      Ae = s._(/*BTDS*/ "Show a fixed number of cards"),
      Fe = s._(
        /*BTDS*/ "Show a short version of the See More URL in your last carousel card. The domains for your See More URL and See More Display Link should match.",
      ),
      Oe = s._(
        /*BTDS*/ "Show a shorter or branded link on your ad. Your website URL will still be used as your destination.",
      ),
      Be = s._(/*BTDS*/ "Enter link to show on last carousel card"),
      We = s._(
        /*BTDS*/ "Promote your Facebook group to increase awareness and membership. Not all groups can be promoted.",
      );
    function qe(e) {
      var t =
        o("AdsBulkValueUtils").getUniformValueOrDefault(
          e,
          r("AdsLinkPostFormat").SINGLE,
        ) === r("AdsLinkPostFormat").SINGLE;
      return t
        ? o(
            "AdsUEditorTextAssetToolStringsWithMentions",
          ).panelDescriptionPartOne()
        : s._(
            /*BTDS*/ "The primary text for your ad appears in all placements, though the position varies. You can use \u0040 to tag Facebook profiles or Pages. We recommend 125 characters or less.",
          );
    }
    var Ue = s._(/*BTDS*/ "Select a product set from a catalog"),
      Ve = s._(/*BTDS*/ "Choose individual images or videos"),
      He = s._(
        /*BTDS*/ "Your ad has been published and is automatically generating high-performing ad creative variations.",
      ),
      Ge = s._(
        /*BTDS*/ "Your ad has been published and is showing people products from your catalog.",
      ),
      ze = function () {
        return s._(/*BTDS*/ "Includes media created or edited with AI");
      },
      je = function () {
        return c.jsxs(c.Fragment, {
          children: [
            s._(
              /*BTDS*/ "This ad includes a photorealistic image or video or realistic-sounding audio that was created or edited with AI. Checking this box may add an AI info label to your ad.",
            ),
            " ",
            c.jsx(r("AdsLearnMore.react"), {
              cmsID: "1486382031937045",
              label: s._(/*BTDS*/ "About AI transparency"),
            }),
          ],
        });
      },
      Ke = function () {
        return c.jsxs(c.Fragment, {
          children: [
            s._(
              /*BTDS*/ "Checking this box may add an AI info label to your ad. Some local laws require AI disclosures beyond Meta's policies.",
            ),
            " ",
            c.jsx(r("AdsLearnMore.react"), {
              cmsID: "1486382031937045",
              label: s._(/*BTDS*/ "About AI transparency"),
            }),
          ],
        });
      },
      Qe = function () {
        return s._(
          /*BTDS*/ "For ads about social issues, elections or politics, advertisers must disclose when an ad includes a photorealistic image or video or realistic-sounding audio that was created or edited with AI and depicts any of the following: {=m1}{=m2} Advertisers don't need to disclose when media was edited with AI in ways that are inconsequential or immaterial to the claim, assertion or issue raised in the ad. This may include: {=m4}",
          [
            s._implicitParam(
              "=m1",
              c.jsx("ul", {
                className: (e || (e = r("stylex")))(r("geoMargin").start16),
                style: { listStyleType: "disc" },
                children: s._(/*BTDS*/ "{=m1}{=m2}{=m3}{=m4}{=m5}", [
                  s._implicitParam(
                    "=m1",
                    c.jsx("li", {
                      children: s._(
                        /*BTDS*/ "A real person as saying or doing something they didn\u2019t say or do",
                      ),
                    }),
                  ),
                  s._implicitParam(
                    "=m2",
                    c.jsx("li", {
                      children: s._(
                        /*BTDS*/ "A realistic-looking person that doesn\u2019t exist",
                      ),
                    }),
                  ),
                  s._implicitParam(
                    "=m3",
                    c.jsx("li", {
                      children: s._(
                        /*BTDS*/ "A realistic-looking event that didn\u2019t happen",
                      ),
                    }),
                  ),
                  s._implicitParam(
                    "=m4",
                    c.jsx("li", {
                      children: s._(
                        /*BTDS*/ "Altered footage of a real event that happened",
                      ),
                    }),
                  ),
                  s._implicitParam(
                    "=m5",
                    c.jsx("li", {
                      children: s._(
                        /*BTDS*/ "A realistic event that allegedly happened, but that\u2019s not a true image, video or audio recording of the event",
                      ),
                    }),
                  ),
                ]),
              }),
            ),
            s._implicitParam(
              "=m2",
              c.jsx("p", {
                children: s._(
                  /*BTDS*/ "Failure to disclose the scenarios above may result in ad removal and account penalties for repeated violations.",
                ),
              }),
            ),
            s._implicitParam(
              "=m4",
              c.jsx("ul", {
                className: e(r("geoMargin").start16),
                style: { listStyleType: "disc" },
                children: s._(/*BTDS*/ "{=m1}{=m2}{=m3}{=m4}", [
                  s._implicitParam(
                    "=m1",
                    c.jsx("li", {
                      children: s._(/*BTDS*/ "Image size adjusting"),
                    }),
                  ),
                  s._implicitParam(
                    "=m2",
                    c.jsx("li", {
                      children: s._(/*BTDS*/ "Cropping an image"),
                    }),
                  ),
                  s._implicitParam(
                    "=m3",
                    c.jsx("li", { children: s._(/*BTDS*/ "Color correction") }),
                  ),
                  s._implicitParam(
                    "=m4",
                    c.jsx("li", { children: s._(/*BTDS*/ "Image sharpening") }),
                  ),
                ]),
              }),
            ),
          ],
        );
      },
      Xe = s._(/*BTDS*/ "Manually choose images, videos and links"),
      Ye = s._(/*BTDS*/ "Add music"),
      Je = s._(
        /*BTDS*/ "Let us automatically select a song to accompany your ad based on the content of your ad. Selected music will be trimmed and synced across all eligible placements.",
      ),
      Ze = s._(
        /*BTDS*/ "Enter the URL for the web page or universal link (iOS or Android App Link) you want people to visit. To use a universal link, you\u2019ll also need to select a mobile app from the drop down below.",
      );
    function et(e) {
      var t = o("AdsBwIConfig").getConfigValues(e);
      return t == null
        ? null
        : s._(
            /*BTDS*/ "The fallback website URL is the web page you want people to visit if the {Partner Label} experience doesn\u2019t load.",
            [s._param("Partner Label", t.label)],
          );
    }
    et.displayName = et.name + " [from " + i.id + "]";
    function tt() {
      return s._(
        /*BTDS*/ "Add up to 5 short headlines to let people know what your ad is about. Each headline can have a maximum of {text config for max length} characters. Headlines won't appear in all placements.",
        [
          s._param(
            "text config for max length",
            r("AdsValidationConfig.experimental").assetFeed.titleTextMaxLength,
          ),
        ],
      );
    }
    tt.displayName = tt.name + " [from " + i.id + "]";
    var nt = s._(/*BTDS*/ "Website URL"),
      rt = s._(/*BTDS*/ "Enter the website URL"),
      ot = s._(
        /*BTDS*/ "If a person does not have the app installed, they will be directed to the website URL instead. If a website URL is not provided, they will be directed to the app store.",
      ),
      at = s._(/*BTDS*/ "Posts"),
      it = function (t) {
        return s._(/*BTDS*/ "{current post count} of 5 posts selected", [
          s._param("current post count", t),
        ]);
      };
    ((l.TEXT_HEADER = d),
      (l.TEXT_DESCRIPTION = m),
      (l.adsCarouselDisplayLinkHelpText = p),
      (l.adsCarouselDisplayLinkPlaceholderText = _),
      (l.adsCallDescriptionLabel = f),
      (l.adsLinkDescriptionLabel = g),
      (l.adsLinkDescriptionHelpText = h),
      (l.adsLinkDescriptionPlaceholderText = y),
      (l.adsCallDescriptionPlaceholderText = C),
      (l.adsLiveVideoReminderDescriptionPlaceholderText = b),
      (l.adsMessageFieldPlaceholderText = v),
      (l.adsExistingPostPrimaryTextPlaceholderText = S),
      (l.adsReminderAdsEventNameText = R),
      (l.adsReminderAdsEventNotificationTimeSelectorLabel = L),
      (l.adsReminderAdsEventNotificationTimeSelectorDescription = E),
      (l.adsReminderAdsEventNotificationTimeSelectorBeforeEvent15MinOption = k),
      (l.adsReminderAdsEventNotificationTimeSelectorAfterEvent1DayOption = I),
      (l.adsReminderAdsEventNotificationTimeSelectorAfterEvent2DaysOption = T),
      (l.adsReminderAdsEventNotificationTimeSelectorAfterEvent3DaysOption = D),
      (l.adsReminderAdsEventNotificationTimeSelectorAfterEvent4DaysOption = x),
      (l.adsReminderAdsEventNotificationTimeSelectorAfterEvent5DaysOption = $),
      (l.adsReminderAdsEventNotificationTimeSelectorAfterEvent6DaysOption = P),
      (l.adsReminderAdsEventNotificationTimeSelectorAfterEvent7DaysOption = N),
      (l.adsReminderAdsEventNameDisabledText = M),
      (l.adsReminderAdsEventNamePlaceholderText = w),
      (l.adsReminderAdsEventStartDisabledText = A),
      (l.adsReminderAdsEventStartBetweenBeginningOfTodayAndEarliestStart = F),
      (l.adsReminderAdsEventStartOutsideOfTodayAndLatestStart = O),
      (l.adsReminderAdsEventStartAfterEnd = B),
      (l.adsReminderAdsEventEndBeforeStart = W),
      (l.adsReminderAdsEventStartInvalid = q),
      (l.adsReminderAdsEventTooShort = U),
      (l.adsReminderAdsEventTooLong = V),
      (l.adsReminderAdsEventEndInvalid = H),
      (l.adsHeadlineFieldHelpText = G),
      (l.adsHeadlineFieldPlaceholderText = z),
      (l.adsDisplayURLFieldACOFlowHelpText = j),
      (l.adsDisplayURLFieldHelpText = K),
      (l.adsDisplayURLFieldPlaceholderText = Q),
      (l.adsWebsiteURLFieldHelpTextForDA = X),
      (l.adsWebsiteURLFieldHelpText = Y),
      (l.adsWebToAppUrlFieldLabel = J),
      (l.adsWebToAppUrlFieldPlaceholder = Z),
      (l.adsWebToAppUrlFieldHelpText = ee),
      (l.adsBwIFallbackWebsiteURLFieldLabel = te),
      (l.adsWebsiteURLFIeldPlaceholderText = ne),
      (l.adsWebsiteURLFIeldOmnichannelPlaceholderText = re),
      (l.carouselTemplateOptionFieldLabel = oe),
      (l.carouselTemplateOptionFieldHelpText = ae),
      (l.carouselTemplateCreativeDynamicOptionLabel = ie),
      (l.carouselListOfCardsLabel = le),
      (l.carouselOptimizationsFieldLabel = se),
      (l.carouselListOfCardsHelpText = ue),
      (l.carouselListOfCardsDescription = ce),
      (l.eventFieldHelpText = de),
      (l.eventFieldPlaceholderText = me),
      (l.linkTypeFieldLabel = pe),
      (l.portraitCustomizationCarouselDeliveryModeHelpText = _e),
      (l.websiteURLToggleHelpText = fe),
      (l.addDestinationToggleHelpText = ge),
      (l.addDestinationToggleHelpTextWithCall = he),
      (l.addDestinationToggleHelpTextReminderAds = ye),
      (l.adsCarouselOptimizationHelpText = Ce),
      (l.adsCarouselHeadlineHelpText = be),
      (l.adsCarouselHeadlinePlaceholderText = ve),
      (l.adsCarouselNoExistingPostSelectedHeadlinePlaceholderText = Se),
      (l.adsCarouselExistingPostNoCaptionHeadlinePlaceholderText = Re),
      (l.adsCarouselDescriptionHelpText = Le),
      (l.adsCarouselDescriptionPlaceholderText = Ee),
      (l.adsCarouselMarketingMessageDescriptionLabel = ke),
      (l.adsMarketingMessageCarouselBodyLabel = Ie),
      (l.adsMarketingMessageCarouselHeadlineLabel = Te),
      (l.adsMarketingMessageCarouselBodyPlaceholderText = De),
      (l.adsCarouselSeeMoreURLHelpText = xe),
      (l.adsCTAHelpText = $e),
      (l.adsCTAHelpTextNew = Pe),
      (l.adsCTASwappedToSeeDetailsHelpText = Ne),
      (l.adsDestinationCTAHelpText = Me),
      (l.adsExclusiveInfoCTAHelpText = we),
      (l.adsPortraitCustomizationCarouselDeliveryModeLabel = Ae),
      (l.adsSeeMoreDisplayLinkHelpText = Fe),
      (l.ads3CODisplayLinkHelpText = Oe),
      (l.adsSeeMoreDisplayLinkPlaceholderText = Be),
      (l.groupFieldHelpText = We),
      (l.getPrimaryTextHelpText = qe),
      (l.adsTemplateCreativeOptionsDynamicLabelForSAP = Ue),
      (l.adsTemplateCreativeOptionsStaticLabelForSAP = Ve),
      (l.adsTemplateCreativeOptionsStaticDisabledTooltipForSAP = He),
      (l.adsTemplateCreativeOptionsDynamicDisabledTooltipForSAP = Ge),
      (l.getSIEPAIDisclosureCheckboxLabel = ze),
      (l.getSIEPAIDisclosureCheckboxHelpText = je),
      (l.getSIEPAILegalDisclosureCheckboxHelpText = Ke),
      (l.getSIEPAIDisclosureTooltipContent = Qe),
      (l.MANUAL_BUILD_A_CREATIVE = Xe),
      (l.MUSIC_ADD_LABEL = Ye),
      (l.MUSIC_DESCRIPTION = Je),
      (l.AWARENESS_CAMPAIGN_WEBSITE_URL_FIELD_HELP_TEXT = Ze),
      (l.adsBwIFallbackWebsiteURLFieldHelpText = et),
      (l.getGenericHeadlineTooltip = tt),
      (l.adsAppStoreAlternativeWebUrlFieldLabel = nt),
      (l.adsAppStoreAlternativeWebUrlFieldPlaceholder = rt),
      (l.adsAppStoreAlternativeWebUrlFieldHelpText = ot),
      (l.multiPostListOfPostsLabel = at),
      (l.multiPostListOfPostsDescription = it));
  },
  226,
);
