__d(
  "A2UIAddInstagramProfileState",
  ["fbt"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = "business_profiles_connect_ig",
      u = "business_profiles_add_cancel",
      c = "https://help.instagram.com/581066165581870",
      d = "https://help.instagram.com/1896641480634370",
      m = "https://facebook.com/privacy/policy";
    function p() {
      return s._(/*BTDS*/ "Add an Instagram profile").toString();
    }
    function _() {
      return s._(/*BTDS*/ "Add Instagram profile").toString();
    }
    function f() {
      return s._(/*BTDS*/ "Use an existing profile").toString();
    }
    function g() {
      var e = "[" + s._(/*BTDS*/ "Instagram Terms").toString() + "](" + c + ")",
        t = "[" + s._(/*BTDS*/ "Privacy policy").toString() + "](" + m + ")",
        n = "[" + s._(/*BTDS*/ "Cookies policy").toString() + "](" + d + ")";
      return [
        s
          ._(
            /*BTDS*/ "Only Instagram professional profiles can be added to a business portfolio. If you add a personal profile, it will be switched to professional.",
          )
          .toString(),
        s
          ._(
            /*BTDS*/ "You\u2019ll be asked to log into the Instagram profile you want to add.",
          )
          .toString(),
        s
          ._(
            /*BTDS*/ "By adding the Instagram profile, you agree to the {instagram_terms_link}, and acknowledge the {privacy_policy_link} and {cookies_policy_link} on behalf of the business portfolio.",
            [
              s._param("instagram_terms_link", e),
              s._param("privacy_policy_link", t),
              s._param("cookies_policy_link", n),
            ],
          )
          .toString(),
      ];
    }
    function h(e, t) {
      return e + "\n\n```json\n" + JSON.stringify({ action: t }) + "\n```";
    }
    function y() {
      return h(_(), e);
    }
    function C() {
      return h(f(), u);
    }
    ((l.CONNECT_IG_ACTION = e),
      (l.USE_EXISTING_PROFILE_ACTION = u),
      (l.getTitle = p),
      (l.getSubmitLabel = _),
      (l.getSecondaryLabel = f),
      (l.getBodyParagraphs = g),
      (l.buildConnectMessage = y),
      (l.buildUseExistingMessage = C));
  },
  226,
);
