__d(
  "AdsMessengerLinkUtils",
  [
    "AdsAPIAdgroupRecordUtils",
    "AdsAPIObjectives",
    "AdsAdgroupSemanticFields",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    var e = new RegExp(
        "((([Hh]ttp[s]?:(\\/\\/))(www\\.)?)|www\\.|[^-\\da-z]|^)m\\.me(\\/|\\/\\/|\\/\\/\\/)[\\w\\d\\S]+",
      ),
      s = new RegExp(
        "((([Hh]ttp[s]?:(\\/\\/))(www\\.)?)|www\\.|[^-\\da-z]|^)messenger\\.com(\\/|\\/\\/|\\/\\/\\/)t\\/[\\w\\d\\S]+",
      ),
      u = new RegExp(
        "((([Hh]ttp[s]?:(\\/\\/))(www\\.)?)|www\\.|[^-\\da-z]|^)telegram\\.me(\\/|\\/\\/|\\/\\/\\/)[\\w\\d\\S]+",
      ),
      c = new RegExp(
        "((([Hh]ttp[s]?:(\\/\\/))(www\\.)?)|www\\.|[^-\\da-z]|^)line\\.me(\\/|\\/\\/|\\/\\/\\/)[\\w\\d\\S]+",
      ),
      d = new RegExp("([^-\\da-z]|^)wechat([^-\\da-z])"),
      m = new RegExp("whatsapp|wtsapp"),
      p = new RegExp("([0-9][-.]?){5}"),
      _ = new RegExp("[\\w]+@[\\w]+\\.[\\w\\.]+"),
      f = new RegExp(
        "(((send)|(drop)|(leave)|(give)|(shoot))[\\s\\S]{0,10}((message)|(call)|(email)|(text)|(line))|((message)|(call)|(email)|(text)|(inbox)|(\\Wping)|(contact))[\\s]*((me)|(us)|(our)|([\\s\\S]{1,5}page)))",
      );
    function g(t, n) {
      if (t == null || t === "") return [];
      var r = t.toLowerCase(),
        o = [];
      return (
        r.match(e) && o.push("mme_link"),
        r.match(u) && o.push("telegram_link"),
        r.match(c) && o.push("line_link"),
        r.match(d) && o.push("wechat_link"),
        r.match(m) && r.match(p) && o.push("whatsapp_link"),
        r.match(s) && o.push("messenger_link"),
        n &&
          (r.match(_) && o.push("email_link"),
          r.match(f) && o.push("messaging_keyword_text")),
        o
      );
    }
    function h(e, t) {
      return g(e, t).length > 0;
    }
    function y(t) {
      return t != null && t !== "" ? !!t.toLowerCase().match(e) : !1;
    }
    function C(e, t, n, a) {
      var i = o("AdsAPIAdgroupRecordUtils").getCallToActionType(
        e,
        r("nullthrows")(n),
      );
      if (
        i != null ||
        !h(t, !1) ||
        (a !== r("AdsAPIObjectives").VIDEO_VIEWS &&
          a !== r("AdsAPIObjectives").POST_ENGAGEMENT)
      )
        return e;
      var l = r("AdsAdgroupSemanticFields").callToActionType.set(
        r("nullthrows")(n),
        e,
        "MESSAGE_PAGE",
      );
      if (a === r("AdsAPIObjectives").VIDEO_VIEWS) {
        var s = o("AdsAPIAdgroupRecordUtils").getPageID(l, r("nullthrows")(n));
        return r("AdsAdgroupSemanticFields").linkURL.set(
          r("nullthrows")(n),
          l,
          b(s),
        );
      }
      return l;
    }
    function b(e) {
      return "https://m.me/" + (e || "");
    }
    ((l.getMessagingRelatedLinkTypes = g),
      (l.hasMessagingRelatedLinkInText = h),
      (l.hasMessengerLinkInText = y),
      (l.addMessageCTAForMessagingLinkInText = C),
      (l.getShortMessengerLinkWithPageID = b));
  },
  98,
);
