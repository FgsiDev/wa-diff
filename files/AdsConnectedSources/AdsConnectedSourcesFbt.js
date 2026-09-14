__d(
  "AdsConnectedSourcesFbt",
  [
    "fbt",
    "AdsCreativeContentSimplificationUtils",
    "AdsCreativeGenAIStringConstants",
    "GeoTooltip.react",
    "intlList",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = s._(/*BTDS*/ "Branding"),
      d = function () {
        return s._(/*BTDS*/ "Branding {tooltip}", [
          s._param(
            "tooltip",
            u.jsx(r("GeoTooltip.react"), {
              content: o("AdsCreativeGenAIStringConstants")
                .GENERATIVE_AI_BRANDING_TOOLTIP_CONTENT,
            }),
          ),
        ]);
      },
      m = function () {
        return o(
          "AdsCreativeContentSimplificationUtils",
        ).passL1ContentSimplificationExperiment()
          ? s._(/*BTDS*/ "Set brand defaults for this ad and future ads.")
          : s._(
              /*BTDS*/ "Represent your brand in AI text and image generation by setting branding defaults for this ad and future ads.",
            );
      },
      p = function () {
        return s._(/*BTDS*/ "Sourced testimonials");
      },
      _ = function () {
        return s._(
          /*BTDS*/ "Select a brief to add sourced testimonials to this ad. Meta compensates creators based on their performance",
        );
      },
      f = s._(/*BTDS*/ "Apply this branding"),
      g = s._(/*BTDS*/ "Add branding"),
      h = function () {
        return s._(/*BTDS*/ "Edit");
      },
      y = function (t, n) {
        return (
          t === void 0 && (t = 0),
          n === void 0 && (n = 0),
          s._(
            /*BTDS*/ "Active: {elements configured}\/{total elements} turned on",
            [s._param("elements configured", t), s._param("total elements", n)],
          )
        );
      },
      C = function (t, n, o) {
        return (
          t === void 0 && (t = 0),
          n === void 0 && (n = 0),
          o === void 0 && (o = []),
          s._(
            /*BTDS*/ "Active: {elements configured}\/{total elements} turned on ({list of configured })",
            [
              s._param("elements configured", t),
              s._param("total elements", n),
              s._param("list of configured ", r("intlList")(o)),
            ],
          )
        );
      },
      b = s._(/*BTDS*/ "Inactive"),
      v = s._(/*BTDS*/ "Ad sources"),
      S = s._(/*BTDS*/ "Creative setup"),
      R = s._(
        /*BTDS*/ "We\u2019ll use these sources to add information to your ad when we think it will inspire action from the person viewing it. Add as many sources as you can.",
      ),
      L = s._(/*BTDS*/ "Edit sources"),
      E = s._(/*BTDS*/ "Extensions"),
      k = s._(/*BTDS*/ "Source URL"),
      I = s._(/*BTDS*/ "Change Source URL"),
      T = s._(/*BTDS*/ "Not connected"),
      D = s._(/*BTDS*/ "Select a catalog to automatically add products."),
      x = s._(
        /*BTDS*/ "Select a catalog to automatically add products or services.",
      ),
      $ = s._(
        /*BTDS*/ "Meta will use the information we find in this website URL to automatically enhance your ad.",
      ),
      P = s._(
        /*BTDS*/ "Site links can highlight product categories, service providers, features or event types based on the actions you want to encourage.",
      ),
      N = s._(/*BTDS*/ "Manually add at least 4 site links."),
      M = s._(
        /*BTDS*/ "We couldn\u2019t automatically add site links. Manually add at least 4 site links.",
      ),
      w = s._(
        /*BTDS*/ "Up to 4.5\u0025 lower cost per result on Facebook Feed",
      ),
      A = s._(/*BTDS*/ "How this helps"),
      F = s._(
        /*BTDS*/ "When you add site links to your ad, you can give people who see it more opportunities to learn about your products and make a purchase.",
      ),
      O = s._(/*BTDS*/ "How it\u2019s calculated"),
      B = s._(
        /*BTDS*/ "This result is based on a global experiment that included 900 campaigns with 90\u0025+ of spend using Site Links across verticals, measuring ads with Traffic objective that ran between August 20, 2024 and August 26, 2024 on 60\u0025 of FB users. Results may vary.",
      ),
      W = s._(/*BTDS*/ "Potential outcome based on our experiment"),
      q = s._(/*BTDS*/ "Add at least 4 site links to display them on your ad."),
      U = s._(
        /*BTDS*/ "Add at least 3 retailer links to display them on your ad.",
      ),
      V = s._(/*BTDS*/ "Manually add at least 3 retailer links."),
      H = s._(
        /*BTDS*/ "We couldn't automatically add retailer links. Manually add at least 3 retailer links.",
      ),
      G = s._(/*BTDS*/ "Apply site links"),
      z = s._(/*BTDS*/ "Site link 1"),
      j = s._(/*BTDS*/ "Site link 2"),
      K = s._(/*BTDS*/ "Site link 3"),
      Q = s._(/*BTDS*/ "Site link 4"),
      X = s._(/*BTDS*/ "Retailer link 1"),
      Y = s._(/*BTDS*/ "Retailer link 2"),
      J = s._(/*BTDS*/ "Retailer link 3"),
      Z = s._(/*BTDS*/ "Retailer link 4"),
      ee = s._(
        /*BTDS*/ "Add images to your site links to show them as site link tiles, which may improve performance.",
      ),
      te = function () {
        return s._(
          /*BTDS*/ "Identify and add relevant site links while your ad is running {tooltip}",
          [
            s._param(
              "tooltip",
              u.jsx(r("GeoTooltip.react"), {
                content: s._(
                  /*BTDS*/ "After you publish your ad, we may identify and add site links that could help this ad perform better. We may also add thumbnails to existing site links. You can edit or remove these site links here after your ad has been published.",
                ),
                heading: s._(
                  /*BTDS*/ "Identify and add relevant site links while your ad is running",
                ),
              }),
            ),
          ],
        );
      },
      ne = s._(
        /*BTDS*/ "You can now use retailer links to show multiple retailers in an ad",
      ),
      re = s._(
        /*BTDS*/ "Add links to specific products sold across different websites using retailer links.",
      ),
      oe = s._(/*BTDS*/ "Update your selection to retailer links"),
      ae = s._(
        /*BTDS*/ "We recommend using retailer links to add links that go to specific products sold by different retailers.",
      ),
      ie = s._(/*BTDS*/ "Update your selection to site links"),
      le = s._(
        /*BTDS*/ "We recommend using site links to add links that go to the same website.",
      ),
      se = s._(/*BTDS*/ "Active site links"),
      ue = s._(/*BTDS*/ "Manage site links"),
      ce = s._(
        /*BTDS*/ "Add, edit or delete site links for this ad account and select which ones you want to show in your ad. This list does not include site links we\u2019ve automatically added for you.",
      ),
      de = s._(/*BTDS*/ "Changes applied to this campaign"),
      me = s._(/*BTDS*/ "Changes applied to this ad"),
      pe = function (t, n) {
        return n != null
          ? s._(
              /*BTDS*/ "{number_of_sitelinks_applied} site links will appear in {number_of_adgroups} ads.",
              [
                s._param("number_of_sitelinks_applied", t),
                s._param("number_of_adgroups", n),
              ],
            )
          : s._(
              /*BTDS*/ "{number_of_sitelinks_applied} site links will appear in this ad.",
              [s._param("number_of_sitelinks_applied", t)],
            );
      },
      _e = s._(/*BTDS*/ "Apply to this campaign"),
      fe = s._(/*BTDS*/ "Back to creative setup"),
      ge = s._(/*BTDS*/ "Apply to this ad"),
      he = s._(/*BTDS*/ "Thumbnails"),
      ye = s._(/*BTDS*/ "Display label"),
      Ce = s._(/*BTDS*/ "URL"),
      be = s._(/*BTDS*/ "Selectable site links table"),
      ve = s._(/*BTDS*/ "Add site link"),
      Se = s._(
        /*BTDS*/ "Site links do not support emojis. Please input text without emojis to add this site link.",
      ),
      Re = s._(
        /*BTDS*/ "There was a problem uploading your chosen thumbnail image.",
      ),
      Le = s._(
        /*BTDS*/ "Your chosen thumbnail image does not meet the minimum of 300 x 300 pixels. Please choose a bigger image.",
      ),
      Ee = s._(
        /*BTDS*/ "We couldn't find a logo for this retailer. Add a thumbnail image so this retailer link can display.",
      ),
      ke = function () {
        return s._(
          /*BTDS*/ "The site link you entered already exists. {=m1} to add it to this ad.",
          [
            s._implicitParam(
              "=m1",
              u.jsx("strong", { children: s._(/*BTDS*/ "Manage site links") }),
            ),
          ],
        );
      },
      Ie = s._(/*BTDS*/ "Add your first site link"),
      Te = s._(
        /*BTDS*/ "Any site link you add here can be reused across ads in this ad account.",
      ),
      De = s._(/*BTDS*/ "Not selected"),
      xe = s._(/*BTDS*/ "Website summaries"),
      $e = s._(
        /*BTDS*/ "Include compelling text information from your website and Instagram profile to help people understand your business and products.",
      ),
      Pe = s._(/*BTDS*/ "Product Descriptions"),
      Ne = s._(/*BTDS*/ "Selling Points"),
      Me = s._(/*BTDS*/ "Description"),
      we = s._(/*BTDS*/ "Selling points"),
      Ae = s._(/*BTDS*/ "Summaries"),
      Fe = s._(/*BTDS*/ "App store details"),
      Oe = s._(/*BTDS*/ "app store details"),
      Be = s._(
        /*BTDS*/ "Use information from your app store product page to promote your app.",
      ),
      We = s._(/*BTDS*/ "Media"),
      qe = s._(/*BTDS*/ "Overview"),
      Ue = s._(/*BTDS*/ "Ratings"),
      Ve = s._(/*BTDS*/ "Icon"),
      He = s._(/*BTDS*/ "Screenshot"),
      Ge = s._(/*BTDS*/ "Ratings and reviews"),
      ze = s._(
        /*BTDS*/ "We'll show ratings based on the country or region people see your ad in.",
      ),
      je = s._(/*BTDS*/ "Apply app store details"),
      Ke = s._(
        /*BTDS*/ "This information may appear in certain creative enhancements, but won't replace your original ad creative.",
      ),
      Qe = s._(/*BTDS*/ "No media and text available."),
      Xe = s._(/*BTDS*/ "See more"),
      Ye = s._(/*BTDS*/ "Manage all reviews"),
      Je = s._(/*BTDS*/ "Manage all reviews"),
      Ze = s._(
        /*BTDS*/ "Select up to 10 reviews from your app's product page to include in your ad. Reviews have at least a 4-star rating and are refreshed every 90 days. Using all 10 reviews can help build more trust and credibility with people viewing your ad.",
      ),
      et = s._(/*BTDS*/ "Back to creative setup"),
      tt = s._(/*BTDS*/ "App reviews"),
      nt = s._(/*BTDS*/ "Add details to ad layout");
    function rt(e) {
      return s._(/*BTDS*/ "Apply {count} reviews", [s._param("count", e)]);
    }
    rt.displayName = rt.name + " [from " + i.id + "]";
    var ot = s._(/*BTDS*/ "No reviews available for this app."),
      at = s._(/*BTDS*/ "No review text"),
      it = s._(
        /*BTDS*/ "Use compelling images and text from your website to help people understand your business and products better.",
      ),
      lt = s._(
        /*BTDS*/ "We\u2019ll pair images with headlines and descriptions from your website when available. This information may appear when using certain interactive experiences, but won\u2019t replace your original ad creative.",
      ),
      st = s._(/*BTDS*/ "Website highlights"),
      ut = s._(/*BTDS*/ "Apply website highlights"),
      ct = s._(/*BTDS*/ "No media and text available."),
      dt = s._(/*BTDS*/ "No media and text available"),
      mt = s._(/*BTDS*/ "Website highlights"),
      pt = s._(/*BTDS*/ "Website highlights"),
      _t = s._(/*BTDS*/ "Website highlights"),
      ft = s._(
        /*BTDS*/ "Use compelling images and links from your website on your ad to help people understand your business.",
      ),
      gt = s._(/*BTDS*/ "From the website URL you provided"),
      ht = s._(/*BTDS*/ "From anywhere on your website"),
      yt = s._(/*BTDS*/ "Images"),
      Ct = s._(
        /*BTDS*/ "Show images related to your ad so people see and understand your products.",
      ),
      bt = s._(/*BTDS*/ "Contextual links"),
      vt = s._(
        /*BTDS*/ "Show products related to your ad so people can explore more of what they're interested in.",
      ),
      St = s._(/*BTDS*/ "Discovery links"),
      Rt = s._(
        /*BTDS*/ "Show a broader range of products in your ad so people can explore more of your business.",
      ),
      Lt = s._(/*BTDS*/ "No discovery links were found automatically"),
      Et = s._(
        /*BTDS*/ "Add at least 4 more discovery links to display them on your ad.",
      ),
      kt = s._(/*BTDS*/ "Manage discovery links"),
      It = s._(/*BTDS*/ "Add discovery link"),
      Tt = s._(
        /*BTDS*/ "Add, edit or delete discovery links for this ad account and select which ones you want to show in your ad. This list does not include discovery links we've automatically added for you.",
      ),
      Dt = function (t, n) {
        return n != null
          ? s._(
              /*BTDS*/ "{number_of_discovery_links_applied} discovery links will appear in {number_of_adgroups} ads.",
              [
                s._param("number_of_discovery_links_applied", t),
                s._param("number_of_adgroups", n),
              ],
            )
          : s._(
              /*BTDS*/ "{number_of_discovery_links_applied} discovery links will appear in this ad.",
              [s._param("number_of_discovery_links_applied", t)],
            );
      },
      xt = s._(/*BTDS*/ "Selectable discovery links table"),
      $t = s._(
        /*BTDS*/ "Discovery links do not support emojis. Please input text without emojis to add this discovery link.",
      ),
      Pt = s._(/*BTDS*/ "Add your first discovery link"),
      Nt = s._(
        /*BTDS*/ "Any discovery link you add here can be reused across ads in this ad account.",
      ),
      Mt = s._(/*BTDS*/ "How automatic updates work"),
      wt = s._(
        /*BTDS*/ "All media will stay selected and get updated as your website changes. Unselect any item to turn this off and use only the media you choose.",
      ),
      At = function () {
        return s._(
          /*BTDS*/ "Select all website media and update it automatically {tooltip}",
          [
            s._param(
              "tooltip",
              u.jsx(r("GeoTooltip.react"), { content: wt, heading: Mt }),
            ),
          ],
        );
      },
      Ft = s._(/*BTDS*/ "How automatic updates work"),
      Ot = s._(
        /*BTDS*/ "All summaries will stay selected and get updated as your website changes. Unselect any item to turn this off and use only the summaries you choose.",
      ),
      Bt = function () {
        return s._(
          /*BTDS*/ "Select all website summaries and update them automatically {tooltip}",
          [
            s._param(
              "tooltip",
              u.jsx(r("GeoTooltip.react"), { content: Ot, heading: Ft }),
            ),
          ],
        );
      },
      Wt = s._(
        /*BTDS*/ "Your website highlights are synced with your website.",
      ),
      qt = s._(/*BTDS*/ "Automatic updates are off"),
      Ut = s._(
        /*BTDS*/ "When you deselect an image, automatic updates turn off for this ad. Future changes to your website won't appear in your ad.",
      ),
      Vt = s._(/*BTDS*/ "Undo"),
      Ht = s._(/*BTDS*/ "Automatic updates are off"),
      Gt = s._(
        /*BTDS*/ "When you deselect a selling point, automatic updates turn off for this ad. Future changes to your website won't appear in your ad.",
      ),
      zt = s._(/*BTDS*/ "Undo"),
      jt = s._(/*BTDS*/ "Your website summaries are synced with your website."),
      Kt = s._(/*BTDS*/ "Updates automatically"),
      Qt = function () {
        return s._(
          /*BTDS*/ "Identify and add relevant discovery links while your ad is running {tooltip}",
          [
            s._param(
              "tooltip",
              u.jsx(r("GeoTooltip.react"), {
                content: s._(
                  /*BTDS*/ "After you publish your ad, we may identify and add discovery links that could help this ad perform better. We may also add thumbnails to existing discovery links. You can edit or remove these discovery links here after your ad has been published.",
                ),
                heading: s._(
                  /*BTDS*/ "Identify and add relevant discovery links while your ad is running",
                ),
              }),
            ),
          ],
        );
      };
    ((l.BRANDING_HEADER = c),
      (l.getBrandingHeading = d),
      (l.BRANDING_DESCRIPTION = m),
      (l.getSourcedTestimonialsHeading = p),
      (l.SOURCED_TESTIMONIALS_DESCRIPTION = _),
      (l.BRANDING_TOGGLE_LABEL = f),
      (l.BRANDING_SHOW_MODAL_BUTTON_LABEL = g),
      (l.BRANDING_SHOW_MODAL_BUTTON_LABEL_EDIT = h),
      (l.BRANDING_OPTED_IN = y),
      (l.BRANDING_OPTED_IN_WITH_ASSETS = C),
      (l.BRANDING_OPTED_OUT = b),
      (l.CONNECTED_SOURCES_MODAL_HEADER = v),
      (l.CONNECTED_SOURCES_MODAL_HEADER_V2 = S),
      (l.CONNECTED_SOURCES_MODAL_DESCRIPTION = R),
      (l.METADATA_EDIT_SOURCES_LINK = L),
      (l.METADATA_EXTENSIONS_HEADER = E),
      (l.URL_LABEL = k),
      (l.URL_EDIT_BUTTON = I),
      (l.PLACEHOLDER_NOT_SET = T),
      (l.CATALOG_NOT_SET_DESCRIPTION = D),
      (l.CATALOG_NOT_SET_DESCRIPTION_WITH_SERVICES = x),
      (l.SOURCE_URL_TOOLTIP = $),
      (l.SITE_LINKS_EXTENSION_TOOLTIP = P),
      (l.SITE_LINKS_ADD_MANUAL = N),
      (l.SITE_LINKS_NOT_FOUND_ADD_MANUAL = M),
      (l.SITE_LINKS_STAT_CSBQRT_HEADING = w),
      (l.SITE_LINKS_STAT_HOW_THIS_WORKS_TITLE = A),
      (l.SITE_LINKS_STAT_HOW_THIS_WORKS_CONTENT = F),
      (l.SITE_LINKS_STAT_CALCULATION_METHOD_TITLE = O),
      (l.SITE_LINKS_STAT_CALCULATION_METHOD_CONTENT = B),
      (l.SITE_LINKS_STAT_DISCLAIMER = W),
      (l.SITE_LINKS_ADD_MORE_NOTICE = q),
      (l.RETAILER_LINKS_ADD_MORE_NOTICE = U),
      (l.RETAILER_LINKS_ADD_MANUAL = V),
      (l.RETAILER_LINKS_NOT_FOUND_ADD_MANUAL = H),
      (l.SITE_LINKS_TOGGLE_LABEL = G),
      (l.SITE_LINK_PLACEHOLDER_1 = z),
      (l.SITE_LINK_PLACEHOLDER_2 = j),
      (l.SITE_LINK_PLACEHOLDER_3 = K),
      (l.SITE_LINK_PLACEHOLDER_4 = Q),
      (l.RETAILER_LINK_PLACEHOLDER_1 = X),
      (l.RETAILER_LINK_PLACEHOLDER_2 = Y),
      (l.RETAILER_LINK_PLACEHOLDER_3 = J),
      (l.RETAILER_LINK_PLACEHOLDER_4 = Z),
      (l.SITE_LINKS_ADD_IMAGES_BANNER_LABEL = ee),
      (l.SITE_LINKS_POST_PUBLISH_CONSENT = te),
      (l.RETAILER_LINKS_FEATURE_BANNER = ne),
      (l.RETAILER_LINKS_FEATURE_BANNER_DESCRIPTION = re),
      (l.RETAILER_LINKS_WARNING_BANNER = oe),
      (l.RETAILER_LINKS_WARNING_BANNER_DESCRIPTION = ae),
      (l.SITE_LINKS_WARNING_BANNER = ie),
      (l.SITE_LINKS_WARNING_BANNER_DESCRIPTION = le),
      (l.SITE_LINKS_ACTIVE_HEADER = se),
      (l.SITE_LINKS_MANAGE_BUTTON = ue),
      (l.SITE_LINKS_MANAGE_VIEW_DESCRIPTION = ce),
      (l.SITE_LINKS_MANAGE_BULK_APPLY_SUCCESS_TOAST_HEADER = de),
      (l.SITE_LINKS_MANAGE_APPLY_SUCCESS_TOAST_HEADER = me),
      (l.SITE_LINKS_MANAGE_APPLY_SUCCESS_TOAST_BODY = pe),
      (l.SITE_LINKS_MANAGE_VIEW_BULK_APPLY_BUTTON = _e),
      (l.SITE_LINKS_MANAGE_DISMISS_BUTTON = fe),
      (l.SITE_LINKS_MANAGE_VIEW_BACK_BUTTON = ge),
      (l.SITE_LINKS_MANAGE_TABLE_HEADER_THUMBNAIL = he),
      (l.SITE_LINKS_MANAGE_TABLE_HEADER_LABEL = ye),
      (l.SITE_LINKS_MANAGED_TABLE_HEADER_URL = Ce),
      (l.SITE_LINKS_MANAGED_TABLE_ACCESSIBILITY_LABEL = be),
      (l.SITE_LINKS_MANAGE_ADD_BUTTON_LABEL = ve),
      (l.SITE_LINKS_EDIT_EMOJI_MESSAGE = Se),
      (l.SITE_LINKS_EDIT_THUMBNAIL_UPLOAD_FAIL = Re),
      (l.SITE_LINKS_EDIT_THUMBNAIL_UPLOAD_RESOLUTION = Le),
      (l.SITE_LINKS_RETAILER_THUMBNAIL_REQUIRED = Ee),
      (l.SITE_LINKS_DUPLICATE_NOTICE = ke),
      (l.SITE_LINKS_EMPTY_STATE_HEADER = Ie),
      (l.SITE_LINKS_EMPTY_STATE_DESCRIPTION = Te),
      (l.EXTENSION_DATA_NOT_SELECTED = De),
      (l.WEBSITE_SUMMARY_HEADER = xe),
      (l.WEBSITE_SUMMARY_SUBHEADER = $e),
      (l.WEBSITE_SUMMARY_DESCRIPTIONS_LABEL = Pe),
      (l.WEBSITE_SUMMARY_SELLING_POINTS_LABEL = Ne),
      (l.WEBSITE_SUMMARY_REVIEWS_COLLAPSED_LABEL = Me),
      (l.WEBSITE_SUMMARY_SELLING_POINTS_COLLAPSED_LABEL = we),
      (l.WEBSITE_SUMMARY_SHORT_TITLE = Ae),
      (l.APP_INFO_TITLE = Fe),
      (l.APP_INFO_CHECKBOX_TITLE = Oe),
      (l.APP_INFO_DESCRIPTION = Be),
      (l.APP_INFO_MEDIA_LABEL = We),
      (l.APP_INFO_OVERVIEW_LABEL = qe),
      (l.APP_INFO_RATINGS_AND_REVIEWS_LABEL = Ue),
      (l.APP_INFO_ICON_LABEL = Ve),
      (l.APP_INFO_SCREENSHOT_LABEL = He),
      (l.APP_INFO_RATINGS_AND_REVIEWS_HOVER_CARD_LABEL = Ge),
      (l.APP_INFO_RATINGS_AND_REVIEWS_DESCRIPTION = ze),
      (l.APP_INFO_GLOBAL_TOGGLE_LABEL = je),
      (l.APP_INFO_TOOLTIP_CONTENT = Ke),
      (l.APP_INFO_EMPTY_STATE_MESSAGE = Qe),
      (l.APP_INFO_SEE_MORE = Xe),
      (l.APP_INFO_MANAGE_REVIEWS_LABEL = Ye),
      (l.APP_INFO_MANAGE_REVIEWS_TITLE = Je),
      (l.APP_INFO_MANAGE_REVIEWS_DESCRIPTION = Ze),
      (l.APP_INFO_MANAGE_REVIEWS_BACK_BUTTON_LABEL = et),
      (l.APP_REVIEW_TITLE = tt),
      (l.DETAILS_TO_AD_LAYOUT_TITLE = nt),
      (l.getAppInfoManageReviewsApplyButtonLabel = rt),
      (l.APP_INFO_MANAGE_REVIEWS_EMPTY_MESSAGE = ot),
      (l.APP_INFO_NO_REVIEW_TEXT_LABEL = at),
      (l.WEBSITE_MEDIA_SUBTITLE = it),
      (l.WEBSITE_MEDIA_TOOLTIP_ADDITIONAL_SOURCES = lt),
      (l.WEBSITE_MEDIA_HEADING = st),
      (l.WEBSITE_MEDIA_TOGGLE = ut),
      (l.WEBSITE_MEDIA_MAIN_VIEW_EMPTY_STATE = ct),
      (l.WEBSITE_MEDIA_COLLAPSED_VIEW_EMPTY_STATE = dt),
      (l.WEBSITE_MEDIA_SHORT_TITLE = mt),
      (l.WEBSITE_MEDIA_LABEL = pt),
      (l.WEBSITE_HIGHLIGHTS_COMBINED_HEADING = _t),
      (l.WEBSITE_HIGHLIGHTS_COMBINED_SUBTITLE = ft),
      (l.FROM_WEBSITE_URL_SECTION_HEADER = gt),
      (l.FROM_ANYWHERE_SECTION_HEADER = ht),
      (l.IMAGES_CHECKBOX_LABEL = yt),
      (l.IMAGES_CHECKBOX_DESCRIPTION = Ct),
      (l.CONTEXTUAL_LINKS_CHECKBOX_LABEL = bt),
      (l.CONTEXTUAL_LINKS_CHECKBOX_DESCRIPTION = vt),
      (l.DISCOVERY_LINKS_CHECKBOX_LABEL = St),
      (l.DISCOVERY_LINKS_CHECKBOX_DESCRIPTION = Rt),
      (l.DISCOVERY_LINKS_EMPTY_STATE_TITLE = Lt),
      (l.DISCOVERY_LINKS_EMPTY_STATE_DESCRIPTION = Et),
      (l.DISCOVERY_LINKS_MANAGE_BUTTON = kt),
      (l.ADD_DISCOVERY_LINK_BUTTON = It),
      (l.DISCOVERY_LINKS_MANAGE_VIEW_DESCRIPTION = Tt),
      (l.DISCOVERY_LINKS_MANAGE_APPLY_SUCCESS_TOAST_BODY = Dt),
      (l.DISCOVERY_LINKS_MANAGED_TABLE_ACCESSIBILITY_LABEL = xt),
      (l.DISCOVERY_LINKS_EDIT_EMOJI_MESSAGE = $t),
      (l.DISCOVERY_LINKS_EMPTY_STATE_HEADER_MANAGE = Pt),
      (l.DISCOVERY_LINKS_EMPTY_STATE_DESCRIPTION_MANAGE = Nt),
      (l.WEBSITE_MEDIA_DYNAMIC_REFRESH_INFO_TITLE = Mt),
      (l.WEBSITE_MEDIA_DYNAMIC_REFRESH_INFO_BODY = wt),
      (l.WEBSITE_MEDIA_DYNAMIC_REFRESH_CONSENT = At),
      (l.WEBSITE_SUMMARY_DYNAMIC_REFRESH_INFO_TITLE = Ft),
      (l.WEBSITE_SUMMARY_DYNAMIC_REFRESH_INFO_BODY = Ot),
      (l.WEBSITE_SUMMARY_DYNAMIC_REFRESH_CONSENT = Bt),
      (l.WEBSITE_HIGHLIGHTS_DYNAMIC_REFRESH_SYNCED_TOOLTIP = Wt),
      (l.WEBSITE_MEDIA_AUTOMATIC_UPDATES_OFF_TITLE = qt),
      (l.WEBSITE_MEDIA_AUTOMATIC_UPDATES_OFF_BODY = Ut),
      (l.WEBSITE_MEDIA_AUTOMATIC_UPDATES_OFF_UNDO = Vt),
      (l.WEBSITE_SUMMARY_AUTOMATIC_UPDATES_OFF_TITLE = Ht),
      (l.WEBSITE_SUMMARY_AUTOMATIC_UPDATES_OFF_BODY = Gt),
      (l.WEBSITE_SUMMARY_AUTOMATIC_UPDATES_OFF_UNDO = zt),
      (l.WEBSITE_SUMMARY_DYNAMIC_REFRESH_SYNCED_TOOLTIP = jt),
      (l.WEBSITE_HIGHLIGHTS_UPDATES_AUTOMATICALLY_PILL = Kt),
      (l.DISCOVERY_LINKS_POST_PUBLISH_CONSENT = Qt));
  },
  226,
);
