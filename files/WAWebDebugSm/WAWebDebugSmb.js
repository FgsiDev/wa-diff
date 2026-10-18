__d(
  "WAWebDebugSmb",
  [
    "WAJids",
    "WALogger",
    "WATimeUtils",
    "WAWebAgentCollection",
    "WAWebApiBusinessProfile",
    "WAWebBPAccessTokenAndSessionCookiesMutation",
    "WAWebBizGetProfileShimlinksQuery",
    "WAWebBizOrderExpansionModal.react",
    "WAWebBizOrderRequestManagementDrawer.react",
    "WAWebChatCollection",
    "WAWebConnModel",
    "WAWebContactCollection",
    "WAWebContactInfoFieldsNuxModal.react",
    "WAWebContactType",
    "WAWebCustomerDataAction",
    "WAWebCustomerManagerNuxModal.react",
    "WAWebDOIntroPopup.react",
    "WAWebDebugPerCustomerDataSharing",
    "WAWebDeleteQuickReplyAction",
    "WAWebFrontendContactGetters",
    "WAWebLabelCollection",
    "WAWebLidAwareContactsDB",
    "WAWebMobilePlatforms",
    "WAWebModal.react",
    "WAWebModalManager",
    "WAWebNoop",
    "WAWebOIDCFlow.react",
    "WAWebOrderRequestDrawer.react",
    "WAWebPremiumMessageSchema",
    "WAWebQuickReplyCollection",
    "WAWebSMBListsIntroPopup.react",
    "WAWebSchemaAgent",
    "WAWebSchemaChatAssignment",
    "WAWebSchemaLabel",
    "WAWebSchemaQuickReply",
    "WAWebSchemaSubscription",
    "WAWebSmbDataSharingOptInModalDialog",
    "WAWebSmbPerCustomerDataSharingOptInModal",
    "WAWebSmbPerCustomerDataSharingOptOutModal",
    "WAWebSubscriptionSource",
    "WAWebWamEnumSmbDataSharingConsentScreenEntryPoint",
    "WAWebWamEnumSmbPerCustomerDataSharingControlEntryPoint",
    "WAWebWid",
    "WAWebWidFactory",
    "err",
    "react",
    "requireDeferred",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g,
      h,
      y,
      C,
      b,
      v,
      S,
      R = S || (S = o("react")),
      L = r("requireDeferred")("WAWebGetAdsRelayEnvironment").__setRef(
        "WAWebDebugSmb",
      ),
      E = r("requireDeferred")("WAWebShowBillingWizard").__setRef(
        "WAWebDebugSmb",
      );
    async function k(e) {
      var t = e.colorIndex,
        n = e.id,
        r = e.isActive,
        a = e.name,
        i = e.orderIndex,
        l = e.predefinedId,
        s = e.type,
        u = { id: n, name: a, colorIndex: t, predefinedId: l };
      i != null && (u.orderIndex = i);
      var c = s != null ? o("WAWebSchemaLabel").ListType.cast(s) : null;
      (c != null && (u.type = c),
        r != null && (u.isActive = r),
        await o("WAWebSchemaLabel").getLabelTable().createOrReplace(u),
        o("WAWebLabelCollection").LabelCollection.add(
          babelHelpers.extends({}, u),
          { merge: !0 },
        ));
    }
    k.doc = "create label";
    async function I(e) {
      var t = e.count,
        n = e.id,
        r = e.keywords,
        a = e.message,
        i = e.shortcut,
        l = { id: n, shortcut: i, count: t, message: a, keywords: r };
      (await o("WAWebSchemaQuickReply").getQuickReplyTable().createOrReplace(l),
        o("WAWebQuickReplyCollection").QuickReplyCollection.add(
          { id: n, shortcut: i, message: a, keywords: r, count: t },
          { merge: !0 },
        ));
    }
    I.doc = "create quick reply";
    async function T() {
      var t,
        n = new Map([
          [(t = o("WAWebMobilePlatforms")).PLATFORMS.SMBA, t.PLATFORMS.ANDROID],
          [t.PLATFORMS.SMBI, t.PLATFORMS.IPHONE],
          [t.PLATFORMS.IPHONE, t.PLATFORMS.SMBI],
          [t.PLATFORMS.ANDROID, t.PLATFORMS.SMBA],
        ]),
        a = n.get(o("WAWebConnModel").Conn.platform);
      if (!a)
        throw r("err")(
          "Unsupported platform: " + o("WAWebConnModel").Conn.platform,
        );
      ((o("WAWebConnModel").Conn.platform = a),
        await o("WAWebMobilePlatforms").setMobilePlatform(a),
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[reload] toggleSMB",
            ])),
        ),
        window.location.reload());
    }
    ((T.doc =
      "Toggle between SMB (smba/smbi) and mobile (Android/iOS) platforms"),
      (T.paramsToExecute = []));
    async function D(e) {
      var t = o("WAWebWidFactory").createWidFromWidLike(e).toString();
      return {
        row: await o("WAWebApiBusinessProfile").getBusinessProfileRow(t),
        record: await o("WAWebApiBusinessProfile").getBusinessProfileRecord(t),
      };
    }
    async function x(e) {
      var t = e.accessTokenMeta,
        n = e.paymentAccountID,
        r = e.wizardName,
        a = await Promise.all([E.load(), L.load()]),
        i = a[0],
        l = a[1],
        u = await l(t),
        c = await i({
          relayEnvironment: u,
          paymentAccountID: n,
          wizardName: r != null ? r : "ADD_PM",
          wizardPropsJSON: null,
          flowID: "debug",
          onCloseCb: function (t) {
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "Billing wizard return code: ",
                  "",
                ])),
              t,
            );
          },
        });
      c();
    }
    async function $() {
      (await o("WAWebOIDCFlow.react").launchOIDCFlow(),
        o("WAWebModalManager").ModalManager.open(
          R.jsxs(o("WAWebModal.react").Modal, {
            type: o("WAWebModal.react").ModalTheme.AutoWrap,
            children: [
              R.jsx(o("WAWebOIDCFlow.react").OIDCEventListener, {}),
              R.jsx("div", {}),
            ],
          }),
        ));
    }
    function P(e) {
      return o("WAWebBizGetProfileShimlinksQuery")
        .getProfileShimlinks(e)
        .then(function (e) {
          o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "debug:bizFetchBusinessProfileShimlinks",
              ])),
          );
        });
    }
    P.doc = "Fetch business profile shimlinks";
    var N = function () {
      o("WAWebModalManager").ModalManager.open(
        R.jsx(o("WAWebOrderRequestDrawer.react").OrderRequestEducationModal, {
          onExit: r("WAWebNoop"),
        }),
      );
    };
    ((N.doc = "Opens the order request education modal"),
      (N.paramsToExecute = []));
    function M() {
      o("WAWebBizOrderExpansionModal.react").openOrderExpansionModal(
        r("WAWebNoop"),
      );
    }
    function w() {
      o("WAWebModalManager").ModalManager.open(
        R.jsx(r("WAWebBizOrderRequestManagementDrawer.react"), {
          onBack: o("WAWebModalManager").closeModalManager,
        }),
      );
    }
    async function A(e) {
      try {
        var t = await o("WAWebSchemaAgent")
          .getAgentTable()
          .bulkCreateOrReplace(e);
        o("WALogger").LOG(
          c ||
            (c = babelHelpers.taggedTemplateLiteralLoose([
              "createOrReplaceAgent: ",
              "",
            ])),
          String(t),
        );
      } catch (e) {
        o("WALogger").WARN(
          d ||
            (d = babelHelpers.taggedTemplateLiteralLoose([
              "createOrReplaceAgent: error ",
              "",
            ])),
          e,
        );
      }
    }
    async function F() {
      await A([
        { id: "1", name: "Agent1", deviceId: 1, isDeleted: !0 },
        { id: "11", name: "Vasily", deviceId: 2, isDeleted: !1 },
        { id: "111", name: "Max", deviceId: 3, isDeleted: !1 },
        { id: "1111", name: "Jesse", deviceId: 10, isDeleted: !1 },
        { id: "11111", name: "Fabio", deviceId: 99, isDeleted: !1 },
      ]);
    }
    async function O(e) {
      var t;
      e === void 0 && (e = 10);
      var n = o("WAWebAgentCollection")
          .AgentCollection.getModelsArray()
          .filter(function (e) {
            return e.id !== "-1";
          }),
        r =
          (t = o("WAWebChatCollection").ChatCollection.getModelsArray()) == null
            ? void 0
            : t.slice(0, e).map(function (e, t) {
                var r = e.id.toString(),
                  o = n[t % (n.length - 1)].id;
                return {
                  id: "" + t,
                  chatId: r,
                  agentId: o,
                  chatOpenedByAgent: !1,
                };
              });
      try {
        var a = await o("WAWebSchemaChatAssignment")
          .getChatAssignmentTable()
          .bulkCreateOrReplace(r);
        o("WALogger").LOG(
          m ||
            (m = babelHelpers.taggedTemplateLiteralLoose([
              "createOrReplaceAgent: ",
              "",
            ])),
          String(a),
        );
      } catch (e) {
        o("WALogger").WARN(
          p ||
            (p = babelHelpers.taggedTemplateLiteralLoose([
              "createOrReplaceAgent: error ",
              "",
            ])),
          e,
        );
      }
    }
    async function B() {
      var e = [
        {
          id: "WA_PREMIUM_1",
          isAutoRenewing: !0,
          isDeactivated: !1,
          expirationDate: void 0,
          creationTime: void 0,
          newMessageCappingEnabled: !1,
          tier: 1,
          status: "ACTIVE",
          source: o("WAWebSubscriptionSource").SubscriptionSource.BLUE,
          isPlatformChanged: !1,
          startTime: 1e3,
        },
        {
          id: "WA_PREMIUM_2",
          isAutoRenewing: !1,
          isDeactivated: !1,
          expirationDate: void 0,
          creationTime: null,
          newMessageCappingEnabled: !1,
          tier: 2,
          status: "ACTIVE",
          source: o("WAWebSubscriptionSource").SubscriptionSource.META_NOVA,
          isPlatformChanged: !1,
          startTime: 2e3,
        },
        {
          id: "WA_PREMIUM_4",
          isAutoRenewing: !1,
          isDeactivated: !0,
          expirationDate: 200,
          creationTime: 50,
          newMessageCappingEnabled: !0,
          tier: 1,
          status: "EXPIRED",
          source: o("WAWebSubscriptionSource").SubscriptionSource.BLUE,
          isPlatformChanged: !1,
          startTime: 100,
        },
      ];
      await o("WAWebSchemaSubscription")
        .getSubscriptionTable()
        .bulkCreateOrReplace(e);
    }
    async function W(e) {
      try {
        var t = await o("WAWebPremiumMessageSchema")
          .getPremiumMessageTable()
          .bulkCreateOrReplace(e);
        o("WALogger").LOG(
          _ ||
            (_ = babelHelpers.taggedTemplateLiteralLoose([
              "createPremiumMessage: ",
              "",
            ])),
          String(t),
        );
      } catch (e) {
        o("WALogger").WARN(
          f ||
            (f = babelHelpers.taggedTemplateLiteralLoose([
              "createPremiumMessage: error ",
              "",
            ])),
          e,
        );
      }
    }
    var q = function () {
      o("WAWebModalManager").ModalManager.open(
        R.jsx(r("WAWebDOIntroPopup.react"), {}),
      );
    };
    ((q.doc = "Opens the DO Intro Popup"), (q.paramsToExecute = []));
    var U = function () {
      o("WAWebModalManager").ModalManager.open(
        R.jsx(o("WAWebSMBListsIntroPopup.react").SMBListsIntroPopup, {}),
      );
    };
    ((U.doc = "Opens the SMB Lists Intro NUX Popup"), (U.paramsToExecute = []));
    var V = function () {
      o("WAWebModalManager").ModalManager.open(
        R.jsx(r("WAWebCustomerManagerNuxModal.react"), {}),
      );
    };
    ((V.doc = "Opens the Customer Manager Intro NUX Modal"),
      (V.paramsToExecute = []));
    var H = function () {
      o("WAWebModalManager").ModalManager.open(
        R.jsx(r("WAWebContactInfoFieldsNuxModal.react"), {}),
      );
    };
    ((H.doc = "Opens the new contact info fields NUX Modal"),
      (H.paramsToExecute = []));
    var G = function () {
      o("WAWebModalManager").ModalManager.open(
        R.jsx(
          r("WAWebSmbDataSharingOptInModalDialog")
            .SmbDataSharingOptInModalDialog,
          {
            entrypoint: o("WAWebWamEnumSmbDataSharingConsentScreenEntryPoint")
              .SMB_DATA_SHARING_CONSENT_SCREEN_ENTRY_POINT.CART,
            callback: function () {},
          },
        ),
      );
    };
    async function z(e) {}
    z.doc = "send delete mutation";
    var j = function (t) {
        o("WAWebModalManager").ModalManager.open(
          R.jsx(r("WAWebSmbPerCustomerDataSharingOptOutModal"), {
            accountLid: t,
            entryPoint: o(
              "WAWebWamEnumSmbPerCustomerDataSharingControlEntryPoint",
            ).SMB_PER_CUSTOMER_DATA_SHARING_CONTROL_ENTRY_POINT
              .CONTACT_INFO_CARD,
          }),
        );
      },
      K = function (t) {
        o("WAWebModalManager").ModalManager.open(
          R.jsx(r("WAWebSmbPerCustomerDataSharingOptInModal"), {
            accountLids: [t],
            entryPoint: o(
              "WAWebWamEnumSmbPerCustomerDataSharingControlEntryPoint",
            ).SMB_PER_CUSTOMER_DATA_SHARING_CONTROL_ENTRY_POINT
              .CONTACT_INFO_CARD,
          }),
        );
      };
    async function Q(e, t) {
      var n = o("WAJids").unsafeCoerceToChatJid(e);
      await o("WAWebCustomerDataAction").customerDataAddAction(n, t);
    }
    Q.doc = "Add or update customer data for a contact";
    async function X(e) {
      var t = o("WAJids").unsafeCoerceToChatJid(e);
      return o("WAWebCustomerDataAction").retrieveCustomerDataForChatJid(t);
    }
    X.doc = "Get customer data for a contact";
    async function Y() {
      var e = o("WAWebChatCollection")
        .ChatCollection.filter(function (e) {
          return r("WAWebWid").isUser(e.id);
        })
        .slice(0, 10);
      if (e.length === 0) {
        o("WALogger").LOG(
          g ||
            (g = babelHelpers.taggedTemplateLiteralLoose([
              "[CustomerData] No user chats found to seed test data",
            ])),
        );
        return;
      }
      var t = e.map(function (e, t) {
        var n,
          r = o("WAWebContactCollection").ContactCollection.get(e.id),
          a =
            r != null
              ? o("WAWebFrontendContactGetters").getDisplayName(r)
              : "Test Customer " + String(t + 1);
        return {
          id: e.id.toString(),
          name: a,
          shortName: (n = a.split(" ")[0]) != null ? n : "",
          type: "in",
          isAddressBookContact: 1,
          isContactSyncCompleted: 0,
        };
      });
      await r("WAWebLidAwareContactsDB").bulkCreateOrMerge(
        t,
        "DebugSmb.gen10CustomerManagementTestDataFromChats",
      );
      for (var n of t)
        if (n.id != null) {
          var a = o("WAWebWidFactory").createWidFromWidLike(n.id);
          o("WAWebContactCollection").ContactCollection.add(
            babelHelpers.extends({}, n, { id: a }),
            { merge: !0 },
          );
        }
      o("WALogger").LOG(
        h ||
          (h = babelHelpers.taggedTemplateLiteralLoose([
            "[CustomerData] Created ",
            " contacts in DB and collection",
          ])),
        String(e.length),
      );
      var i = [1, 2, 3, 4, 5, 6],
        l = [],
        s = e.filter(function (e) {
          return e.id.toString().endsWith(o("WAJids").LID_DOMAIN);
        });
      if (s.length === 0) {
        o("WALogger").LOG(
          y ||
            (y = babelHelpers.taggedTemplateLiteralLoose([
              "[CustomerData] No LID-based chats found to seed test data",
            ])),
        );
        return;
      }
      (await Promise.all(
        s.map(function (e, t) {
          var n = o("WAJids").unsafeCoerceToChatJid(e.id.toString()),
            r = i[t % i.length];
          return (
            l.length < 3 && l.push({ chatId: e.id.toString(), leadStage: r }),
            o("WAWebCustomerDataAction").customerDataAddAction(n, {
              contactType: o("WAWebContactType").ContactType.CUSTOMER,
              email: "test@meta.com",
              altPhoneNumbers: "666-888-9999",
              address: "1 Hacker Way",
              leadStage: r,
              acquisitionSource: 0,
              lastOrder: o("WATimeUtils").castToUnixTime(1773181023),
            })
          );
        }),
      ),
        o("WALogger").LOG(
          C ||
            (C = babelHelpers.taggedTemplateLiteralLoose([
              "[CustomerData] seeded=",
              " skipped=",
              " samples=",
              "",
            ])),
          String(s.length),
          String(e.length - s.length),
          JSON.stringify(l),
        ));
    }
    ((Y.doc =
      "Seed 10 customer management test records with distributed lead stages"),
      (Y.paramsToExecute = []));
    async function J(e) {
      o("WALogger").LOG(
        b ||
          (b = babelHelpers.taggedTemplateLiteralLoose([
            "[DEBUG][SMB] fetching BP access token and session cookies",
          ])),
      );
      var t = await o(
        "WAWebBPAccessTokenAndSessionCookiesMutation",
      ).fetchBPAccessTokenAndSessionCookies(e);
      return (
        o("WALogger").LOG(
          v ||
            (v = babelHelpers.taggedTemplateLiteralLoose([
              "[DEBUG][SMB] BP access token result: ",
              "",
            ])),
          t,
        ),
        t
      );
    }
    J.doc =
      "Fetch SMB BP access token and session cookies via xwa_bp_access_token_and_session_cookies GQL endpoint";
    var Z = babelHelpers.extends(
      {
        createOrReplaceLabel: k,
        createOrReplaceQuickReply: I,
        getBusinessProfileFromDBById: D,
        toggleSMB: T,
        showBillingWizard: x,
        launchOIDCFlow: $,
      },
      r("WAWebDebugPerCustomerDataSharing"),
      {
        bizFetchBusinessProfileShimlinks: P,
        openOrderRequestEducationModal: N,
        openBizOrderExpansionModal: M,
        openBizOrderRequestManagementModal: w,
        createTestAgents: F,
        assignChatsToAgents: O,
        createSubscriptions: B,
        createPremiumMessage: W,
        openDOIntroPopup: q,
        openSMBListsIntroPopup: U,
        openCustomerManagerNuxModal: V,
        openContactInfoFieldsNuxModal: H,
        openSmbDataSharingDialog: G,
        syncQuickReplyDelete: z,
        showPerCustomerDataSharingOptOutModal: j,
        showPerCustomerDataSharingOptInModal: K,
        addCustomerData: Q,
        getCustomerData: X,
        gen10CustomerManagementTestDataFromChats: Y,
        fetchBPAccessTokenGQL: J,
      },
    );
    l.default = Z;
  },
  98,
);
