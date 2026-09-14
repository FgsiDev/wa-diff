__d(
  "AdsUEditorCreativeToolAssetPickerMediaAudienceUtils",
  [
    "fbt",
    "AdsTargetingConstants",
    "AdsValidationConsts",
    "CapaUtils",
    "immutable",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = {
      ageMax: r("AdsValidationConsts").maxAge,
      ageMin: r("AdsValidationConsts").minAgeDefault,
      genders: o("AdsTargetingConstants").GENDERS.All,
    };
    function u(e) {
      return e === o("AdsTargetingConstants").GENDERS.Men
        ? s._(/*BTDS*/ "Men")
        : e === o("AdsTargetingConstants").GENDERS.Women
          ? s._(/*BTDS*/ "Women")
          : s._(/*BTDS*/ "All genders");
    }
    function c(e, t) {
      var n = r("CapaUtils").isCapaL0OpenBetaNewDesignEnabled();
      return n
        ? t >= r("AdsValidationConsts").maxAge
          ? e + " - " + r("AdsValidationConsts").maxAge + "+"
          : e + " - " + t
        : t >= r("AdsValidationConsts").maxAge
          ? e + "-" + r("AdsValidationConsts").maxAge + "+"
          : e + "-" + t;
    }
    function d(e) {
      return { ageSummary: c(e.ageMin, e.ageMax), genderSummary: u(e.genders) };
    }
    function m(e) {
      return { age_min: e.ageMin, age_max: e.ageMax, genders: [e.genders] };
    }
    function p(t) {
      var n, r, o, a;
      return t == null
        ? e
        : {
            ageMax: (n = t.age_max) != null ? n : e.ageMax,
            ageMin: (r = t.age_min) != null ? r : e.ageMin,
            genders:
              (o = (a = t.genders) == null ? void 0 : a[0]) != null
                ? o
                : e.genders,
          };
    }
    function _(e) {
      var t,
        n,
        o = r("immutable").Map();
      return (
        e == null ||
          ((t = e.images) == null ||
            t.forEach(function (e) {
              var t = e.creative_audience_pairing_persona,
                n = e.hash != null && e.hash !== "" ? e.hash : e.url;
              t != null && n != null && (o = o.set(n, p(t)));
            }),
          (n = e.videos) == null ||
            n.forEach(function (e) {
              var t,
                n = e.creative_audience_pairing_persona,
                r = (t = e.original_video_id) != null ? t : e.video_id;
              n != null && r != null && (o = o.set(r, p(n)));
            })),
        o
      );
    }
    ((l.DEFAULT_MEDIA_AUDIENCE_SPEC = e),
      (l.formatGenderSummary = u),
      (l.formatAgeSummary = c),
      (l.formatAudienceSummary = d),
      (l.convertMediaAudienceSpecToPersona = m),
      (l.convertPersonaToMediaAudienceSpec = p),
      (l.getMediaAudiencePersonaChangeSetsFromMSS = _));
  },
  226,
);
