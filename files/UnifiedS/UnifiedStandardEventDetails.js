__d(
  "UnifiedStandardEventDetails",
  [
    "fbt",
    "ix",
    "SignalsDataSourcesEnum",
    "meta-brand-arrow-clockwise-outline-16",
    "meta-brand-basket-outline-16",
    "meta-brand-box-lid-open-hand-outline-16",
    "meta-brand-brush-paint-outline-16",
    "meta-brand-cart-outline-16",
    "meta-brand-circle-handle-outline-16",
    "meta-brand-circle-star-outline-16",
    "meta-brand-clock-outline-16",
    "meta-brand-credit-card-outline-16",
    "meta-brand-cursor-arrow-outline-16",
    "meta-brand-discs-stacked-outline-16",
    "meta-brand-eye-outline-16",
    "meta-brand-grid-calendar-outline-16",
    "meta-brand-map-dropper-outline-16",
    "meta-brand-notebook-stack-outline-16",
    "meta-brand-pencil-checkmark-outline-16",
    "meta-brand-person-lines-rectangle-outline-16",
    "meta-brand-rectangle-notched-bottom-vertical-outline-16",
    "meta-brand-ribbon-outline-16",
    "meta-brand-shopping-bag-tag-outline-16",
    "meta-brand-speech-bubble-outline-16",
    "meta-brand-square-over-dash-dot-square-outline-16",
    "meta-brand-three-arcs-dot-outline-16",
    "meta-brand-trophy-outline-16",
    "meta-brand-two-dashes-left-envelope-outline-16",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    var e,
      c = {
        Contact: {
          name: s._(/*BTDS*/ "Contact"),
          description: s._(
            /*BTDS*/ "A telephone\/SMS, email, chat or other type of contact between a customer and your business.",
          ),
          icon: {
            raster: u("508557"),
            vector: o("meta-brand-speech-bubble-outline-16")
              .metaBrandSpeechBubbleOutline16,
          },
          supportedDataSources: [
            (e = r("SignalsDataSourcesEnum")).PIXEL,
            e.APP_EVENT,
            e.DATA_SET,
          ],
          offsiteCustomEvent: "CONTACT",
        },
        CustomizeProduct: {
          name: s._(/*BTDS*/ "Customize product"),
          description: s._(
            /*BTDS*/ "The customization of products through a configuration tool or other application your business owns.",
          ),
          icon: {
            raster: u("688895"),
            vector: o("meta-brand-brush-paint-outline-16")
              .metaBrandBrushPaintOutline16,
          },
          supportedDataSources: [e.PIXEL, e.APP_EVENT, e.DATA_SET],
          offsiteCustomEvent: "CUSTOMIZE_PRODUCT",
        },
        Donate: {
          name: s._(/*BTDS*/ "Donate"),
          description: s._(
            /*BTDS*/ "The donation of funds to your organization or cause.",
          ),
          icon: {
            raster: u("688933"),
            vector: o("meta-brand-box-lid-open-hand-outline-16")
              .metaBrandBoxLidOpenHandOffersOutline16,
          },
          supportedDataSources: [e.PIXEL, e.APP_EVENT, e.DATA_SET],
          offsiteCustomEvent: "DONATE",
        },
        FindLocation: {
          name: s._(/*BTDS*/ "Find location"),
          description: s._(
            /*BTDS*/ "When a person finds one of your locations via web or app, with an intention to visit (example: searching for a product and finding it at one of your local stores).",
          ),
          icon: {
            raster: u("646948"),
            vector: o("meta-brand-map-dropper-outline-16")
              .metaBrandMapDropperOutline16,
          },
          supportedDataSources: [e.PIXEL, e.APP_EVENT, e.DATA_SET],
          offsiteCustomEvent: "FIND_LOCATION",
        },
        Schedule: {
          name: s._(/*BTDS*/ "Schedule"),
          description: s._(
            /*BTDS*/ "The booking of an appointment to visit one of your locations.",
          ),
          icon: {
            raster: u("481124"),
            vector: o("meta-brand-grid-calendar-outline-16")
              .metaBrandGridCalendarOutline16,
          },
          supportedDataSources: [e.PIXEL, e.APP_EVENT, e.DATA_SET],
          offsiteCustomEvent: "SCHEDULE",
        },
        Subscribe: {
          name: s._(/*BTDS*/ "Subscribe"),
          description: s._(
            /*BTDS*/ "The start of a paid subscription for a product or service you offer.",
          ),
          icon: {
            raster: u("641070"),
            vector: o("meta-brand-three-arcs-dot-outline-16")
              .metaBrandThreeArcsDotOutline16,
          },
          supportedDataSources: [e.PIXEL, e.APP_EVENT, e.DATA_SET],
          offsiteCustomEvent: "SUBSCRIBE",
        },
        StartTrial: {
          name: s._(/*BTDS*/ "Start trial"),
          description: s._(
            /*BTDS*/ "The start of a free trial of a product or service you offer (example: trial subscription).",
          ),
          icon: {
            raster: u("577853"),
            vector: o("meta-brand-clock-outline-16").metaBrandClockOutline16,
          },
          supportedDataSources: [e.PIXEL, e.APP_EVENT, e.DATA_SET],
          offsiteCustomEvent: "START_TRIAL",
        },
        SubmitApplication: {
          name: s._(/*BTDS*/ "Submit application"),
          description: s._(
            /*BTDS*/ "The submission of an application for a product, service or program you offer (example: credit card, educational program or job).",
          ),
          icon: {
            raster: u("488896"),
            vector: o("meta-brand-two-dashes-left-envelope-outline-16")
              .metaBrandTwoDashesLeftEnvelopeOutline16,
          },
          supportedDataSources: [e.PIXEL, e.APP_EVENT, e.DATA_SET],
          offsiteCustomEvent: "SUBMIT_APPLICATION",
        },
        Purchase: {
          name: s._(/*BTDS*/ "Purchase"),
          description: s._(
            /*BTDS*/ "The completion of a purchase, usually signified by receiving order\/purchase confirmation or a transaction receipt.",
          ),
          icon: {
            raster: u("697804"),
            vector: o("meta-brand-shopping-bag-tag-outline-16")
              .metaBrandShoppingBagTagShoppingBagTagOutline16,
          },
          supportedDataSources: [e.PIXEL, e.APP_EVENT, e.DATA_SET],
          offsiteCustomEvent: "PURCHASE",
        },
        AddPaymentInfo: {
          name: s._(/*BTDS*/ "Add payment info"),
          description: s._(
            /*BTDS*/ "The addition of customer payment information during a checkout process.",
          ),
          icon: {
            raster: u("709935"),
            vector: o("meta-brand-credit-card-outline-16")
              .metaBrandCreditCardCardHorizontalOutline16,
          },
          supportedDataSources: [e.PIXEL, e.APP_EVENT, e.DATA_SET],
          offsiteCustomEvent: "ADD_PAYMENT_INFO",
        },
        AddToCart: {
          name: s._(/*BTDS*/ "Add to cart"),
          description: s._(
            /*BTDS*/ "The addition of an item to a shopping cart or basket (example: clicking an Add to Cart button on a website).",
          ),
          icon: {
            raster: u("549497"),
            vector: o("meta-brand-cart-outline-16").metaBrandCartOutline16,
          },
          supportedDataSources: [e.PIXEL, e.APP_EVENT, e.DATA_SET],
          offsiteCustomEvent: "ADD_TO_CART",
        },
        Search: {
          name: s._(/*BTDS*/ "Search"),
          description: s._(
            /*BTDS*/ "A search performed on your website, app or other property (example: product searches, travel searches).",
          ),
          icon: {
            raster: u("491285"),
            vector: o("meta-brand-circle-handle-outline-16")
              .metaBrandCircleHandleOutline16,
          },
          supportedDataSources: [e.PIXEL, e.APP_EVENT, e.DATA_SET],
          offsiteCustomEvent: "SEARCH",
        },
        Lead: {
          name: s._(/*BTDS*/ "Lead"),
          description: s._(
            /*BTDS*/ "A submission of information by a customer with the understanding that they may be contacted at a later date by your business.",
          ),
          icon: {
            raster: u("514161"),
            vector: o("meta-brand-person-lines-rectangle-outline-16")
              .metaBrandPersonLinesRectangleOutline16,
          },
          supportedDataSources: [e.PIXEL, e.DATA_SET],
          offsiteCustomEvent: "LEAD",
        },
        LeadSubmitted: {
          name: s._(/*BTDS*/ "LeadSubmitted"),
          description: s._(
            /*BTDS*/ "A submission of information by a customer with the understanding that they may be contacted at a later date by your business.",
          ),
          icon: {
            raster: u("514161"),
            vector: o("meta-brand-person-lines-rectangle-outline-16")
              .metaBrandPersonLinesRectangleOutline16,
          },
          supportedDataSources: [e.PIXEL, e.DATA_SET],
          offsiteCustomEvent: "LEAD_SUBMITTED",
        },
        InitiateCheckout: {
          name: s._(/*BTDS*/ "Initiate checkout"),
          description: s._(/*BTDS*/ "The start of a checkout process."),
          icon: {
            raster: u("688938"),
            vector: o("meta-brand-basket-outline-16").metaBrandBasketOutline16,
          },
          supportedDataSources: [e.PIXEL, e.APP_EVENT, e.DATA_SET],
          offsiteCustomEvent: "INITIATED_CHECKOUT",
        },
        CompleteRegistration: {
          name: s._(/*BTDS*/ "Complete registration"),
          description: s._(
            /*BTDS*/ "A submission of information by a customer in exchange for a service provided by your business (example: sign up for email subscription).",
          ),
          icon: {
            raster: u("688922"),
            vector: o("meta-brand-notebook-stack-outline-16")
              .metaBrandNotebookStackOutline16,
          },
          supportedDataSources: [e.PIXEL, e.APP_EVENT, e.DATA_SET],
          offsiteCustomEvent: "COMPLETE_REGISTRATION",
        },
        ViewContent: {
          name: s._(/*BTDS*/ "View content"),
          description: s._(
            /*BTDS*/ "A visit to a content page you care about, such as a product page, landing page or article. Information about the page viewed can be passed to Facebook for use in dynamic ads.",
          ),
          icon: {
            raster: u("491230"),
            vector: o("meta-brand-eye-outline-16").metaBrandEyeOutline16,
          },
          supportedDataSources: [e.PIXEL, e.APP_EVENT, e.DATA_SET],
          offsiteCustomEvent: "CONTENT_VIEW",
        },
        AddToWishlist: {
          name: s._(/*BTDS*/ "Add to wishlist"),
          description: s._(
            /*BTDS*/ "The addition of products to a wishlist (example: clicking an Add to Wishlist button on a website).",
          ),
          icon: {
            raster: u("495616"),
            vector: o("meta-brand-rectangle-notched-bottom-vertical-outline-16")
              .metaBrandRectangleNotchedBottomVerticalOutline16,
          },
          supportedDataSources: [e.PIXEL, e.APP_EVENT, e.DATA_SET],
          offsiteCustomEvent: "ADD_TO_WISHLIST",
        },
        AchievementUnlocked: {
          name: s._(/*BTDS*/ "Unlock achievement"),
          description: s._(
            /*BTDS*/ "The completion of specific activities or actions you want to reward within your application, business or organization (refer a friend, complete your profile, etc.).",
          ),
          icon: {
            raster: u("688912"),
            vector: o("meta-brand-ribbon-outline-16")
              .metaBrandRibbonMedalOutline16,
          },
          supportedDataSources: [e.APP_EVENT],
          offsiteCustomEvent: "ACHIEVEMENT_UNLOCKED",
        },
        Rate: {
          name: s._(/*BTDS*/ "Rate"),
          description: s._(
            /*BTDS*/ "A rating of something within your app, business or organization (example: rates a restaurant within a restaurant review app).",
          ),
          icon: {
            raster: u("680879"),
            vector: o("meta-brand-circle-star-outline-16")
              .metaBrandCircleStarStarCircleOutline16,
          },
          supportedDataSources: [e.APP_EVENT],
          offsiteCustomEvent: "RATE",
        },
        TutorialCompletion: {
          name: s._(/*BTDS*/ "Complete tutorial"),
          description: s._(/*BTDS*/ "A completion of a tutorial on your app."),
          icon: {
            raster: u("623833"),
            vector: o("meta-brand-pencil-checkmark-outline-16")
              .metaBrandPencilCheckmarkOutline16,
          },
          supportedDataSources: [e.APP_EVENT],
          offsiteCustomEvent: "TUTORIAL_COMPLETION",
        },
        LevelAchieved: {
          name: s._(/*BTDS*/ "Achieve level"),
          description: s._(
            /*BTDS*/ "The achievement of specific levels you define within your application, business or organization.",
          ),
          icon: {
            raster: u("688945"),
            vector: o("meta-brand-trophy-outline-16").metaBrandTrophyOutline16,
          },
          supportedDataSources: [e.APP_EVENT],
          offsiteCustomEvent: "LEVEL_ACHIEVED",
        },
        SpentCredits: {
          name: s._(/*BTDS*/ "Spend credits"),
          description: s._(
            /*BTDS*/ "The completion of a transaction where people spend credits (example: in-app currency) specific to your business or application.",
          ),
          icon: {
            raster: u("688900"),
            vector: o("meta-brand-discs-stacked-outline-16")
              .metaBrandDiscsStackedOutline16,
          },
          supportedDataSources: [e.APP_EVENT],
          offsiteCustomEvent: "SPENT_CREDITS",
        },
        AdClick: {
          name: s._(/*BTDS*/ "In-app ad click"),
          description: s._(
            /*BTDS*/ "An ad from a third-party platform is clicked within your app.",
          ),
          icon: {
            raster: u("538337"),
            vector: o("meta-brand-cursor-arrow-outline-16")
              .metaBrandCursorArrowOutline16,
          },
          supportedDataSources: [e.APP_EVENT],
          offsiteCustomEvent: "AD_CLICK",
        },
        AdImpression: {
          name: s._(/*BTDS*/ "In-app ad impression"),
          description: s._(
            /*BTDS*/ "An ad from a third-party platform appears on-screen within your app.",
          ),
          icon: {
            raster: u("508086"),
            vector: o("meta-brand-square-over-dash-dot-square-outline-16")
              .metaBrandSquareOverDashDotSquareOutline16,
          },
          supportedDataSources: [e.APP_EVENT],
          offsiteCustomEvent: "AD_IMPRESSION",
        },
        AppendAttribution: {
          name: s._(/*BTDS*/ "Custom attribution"),
          description: s._(
            /*BTDS*/ "Event with attribution credit information to Meta after an original conversion event has occurred.",
          ),
          icon: {
            raster: u("580899"),
            vector: o("meta-brand-arrow-clockwise-outline-16")
              .metaBrandArrowClockwiseOutline16,
          },
          supportedDataSources: [e.PIXEL, e.APP_EVENT],
          offsiteCustomEvent: "OTHER",
        },
        UpdateCustomer: {
          name: s._(/*BTDS*/ "Update customer"),
          description: s._(
            /*BTDS*/ "An update to customer information or customer profile data.",
          ),
          icon: {
            raster: u("514161"),
            vector: o("meta-brand-person-lines-rectangle-outline-16")
              .metaBrandPersonLinesRectangleOutline16,
          },
          supportedDataSources: [e.PIXEL, e.DATA_SET],
          offsiteCustomEvent: "OTHER",
        },
      },
      d = c;
    l.default = d;
  },
  226,
);
