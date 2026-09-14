__d(
  "AdsEventsManagerOnsiteConversionConstants",
  ["fbt", "ix", "immutable", "meta-brand-speech-bubble-stacked-outline-16"],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e,
      c,
      d = r("immutable").Map(
        ((e = {}),
        (e.MESSAGING_CONVERSATION_STARTED_7D = {
          raster: u("542885"),
          vector: o("meta-brand-speech-bubble-stacked-outline-16")
            .metaBrandSpeechBubbleStackedOutline16,
        }),
        (e.MESSAGING_FIRST_REPLY = {
          raster: u("542885"),
          vector: o("meta-brand-speech-bubble-stacked-outline-16")
            .metaBrandSpeechBubbleStackedOutline16,
        }),
        (e.MESSAGING_REPLY = {
          raster: u("542885"),
          vector: o("meta-brand-speech-bubble-stacked-outline-16")
            .metaBrandSpeechBubbleStackedOutline16,
        }),
        e),
      ),
      m = r("immutable").Map(
        ((c = {}),
        (c.MESSAGING_CONVERSATION_STARTED_7D = s._(
          /*BTDS*/ "Messaging Conversations Started",
        )),
        (c.MESSAGING_FIRST_REPLY = s._(/*BTDS*/ "New Messaging Connections")),
        (c.MESSAGING_REPLY = s._(/*BTDS*/ "Conversations")),
        c),
      );
    ((l.ONSITE_CONVERSION_EVENTS_ICON_MAP = d),
      (l.ONSITE_CONVERSION_EVENTS_DISPLAY_NAME = m));
  },
  226,
);
