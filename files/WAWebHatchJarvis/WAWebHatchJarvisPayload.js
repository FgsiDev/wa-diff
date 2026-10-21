__d(
  "WAWebHatchJarvisPayload",
  ["WAWebHatchJsonReaders", "WAWebHatchSecureMediaDecoder"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "XMSGGenAIJarvisPayload",
      s = "1",
      u = "delta.presentation",
      c = "citation";
    function d(e) {
      return (function (e) {
        return (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.__typename === "XMSGGenAIJarvisPayload"
        );
      })(e == null ? void 0 : e.passthrough_payload);
    }
    function m(t) {
      var n = t.passthrough_payload;
      return n == null || n.__typename !== e || n.envelope_schema_version !== s
        ? null
        : f(n.jarvis_envelope);
    }
    var p = new WeakMap();
    function _(e) {
      if (p.has(e)) return p.get(e);
      var t = m(e);
      return (p.set(e, t), t);
    }
    function f(e) {
      var t, n, r;
      try {
        r = JSON.parse(e);
      } catch (e) {
        return null;
      }
      var a = o("WAWebHatchJsonReaders").readObject(r, "stream_event_row");
      if (a == null) return null;
      var i =
          o("WAWebHatchJsonReaders").readString(a, "event_name") === u
            ? o("WAWebHatchJsonReaders").readObject(a, "payload")
            : null,
        l = g(i),
        s =
          (t = [
            o("WAWebHatchJsonReaders").readString(i, "fallback_text"),
            o("WAWebHatchJsonReaders").readString(a, "display_text"),
            o("WAWebHatchJsonReaders").readString(i, "display_text"),
          ].find(function (e) {
            return e != null && e !== "";
          })) != null
            ? t
            : "";
      if (s === "" && l == null) return null;
      var c =
        (n = o("WAWebHatchJsonReaders").readBool(a, "display_text_ready")) !=
        null
          ? n
          : !0;
      return {
        citations: y(o("WAWebHatchJsonReaders").readArray(a, "resources")),
        displayText: s,
        displayTextReady: c,
        fileMetadata: C(
          o("WAWebHatchJsonReaders").readObject(r, "file_metadata"),
        ),
        inlineWidgets:
          l == null && c
            ? h(o("WAWebHatchJsonReaders").readArray(r, "inline_widgets"))
            : [],
        messageId: o("WAWebHatchJsonReaders").readString(a, "message_id"),
        presentation: l,
      };
    }
    function g(e) {
      var t,
        n = o("WAWebHatchJsonReaders").readNonEmptyString(e, "kind");
      return n == null
        ? null
        : {
            data:
              (t = o("WAWebHatchJsonReaders").readObject(e, "data")) != null
                ? t
                : {},
            id: o("WAWebHatchJsonReaders").readNonEmptyString(e, "id"),
            kind: n,
          };
    }
    function h(e) {
      if (e == null) return [];
      var t = [];
      for (var n of e) {
        var r = o("WAWebHatchJsonReaders").isObject(n) ? g(n) : null;
        r != null && t.push(r);
      }
      return t;
    }
    function y(e) {
      if (e == null) return [];
      var t = [];
      for (var n of e) {
        var r = o("WAWebHatchJsonReaders").readString(n, "label"),
          a = o("WAWebHatchJsonReaders").readString(n, "uri");
        if (
          !(
            o("WAWebHatchJsonReaders").readString(n, "kind") !== c ||
            r == null ||
            a == null
          )
        ) {
          var i = v(o("WAWebHatchJsonReaders").readString(n, "metadata"));
          t.push({
            domain: o("WAWebHatchJsonReaders").readString(i, "domain"),
            faviconUrl: o("WAWebHatchJsonReaders").readString(i, "favicon_url"),
            label: r,
            uri: a,
          });
        }
      }
      return t;
    }
    function C(e) {
      var t = new Map();
      if (e == null || typeof e != "object") return t;
      for (var n of Object.keys(e)) {
        var r = o("WAWebHatchJsonReaders").readObject(e, n),
          a = o("WAWebHatchJsonReaders").readNonEmptyString(r, "url");
        a != null &&
          t.set(n, {
            encryptedMedia: b(
              o("WAWebHatchJsonReaders").readObject(r, "encrypted_media"),
            ),
            filename: o("WAWebHatchJsonReaders").readNonEmptyString(
              r,
              "filename",
            ),
            mimeType: o("WAWebHatchJsonReaders").readNonEmptyString(
              r,
              "mime_type",
            ),
            sizeBytes: o("WAWebHatchJsonReaders").readInteger(r, "size_bytes"),
            thumbnailJpegB64: o("WAWebHatchJsonReaders").readNonEmptyString(
              r,
              "thumbnail_jpeg_b64",
            ),
            url: a,
          });
      }
      return t;
    }
    function b(e) {
      var t = o("WAWebHatchSecureMediaDecoder").hasMmgTransport(e)
          ? o("WAWebHatchSecureMediaDecoder").decodeMmgMediaKeys(e)
          : null,
        n = o("WAWebHatchJsonReaders").readNonEmptyString(e, "mime_type"),
        r = o("WAWebHatchJsonReaders").readNonEmptyString(e, "media_type"),
        a = o("WAWebHatchJsonReaders").readInteger(e, "file_length"),
        i = o("WAWebHatchJsonReaders").readInteger(e, "media_key_timestamp_ms");
      return t == null || n == null || r == null || a == null || i == null
        ? null
        : babelHelpers.extends({}, t, {
            fileLength: a,
            height: o("WAWebHatchJsonReaders").readInteger(e, "height"),
            mediaKeyTimestampMs: i,
            mediaType: r,
            mimeType: n,
            seconds: o("WAWebHatchJsonReaders").readInteger(e, "seconds"),
            width: o("WAWebHatchJsonReaders").readInteger(e, "width"),
          });
    }
    function v(e) {
      if (e == null) return null;
      try {
        var t = JSON.parse(e);
        return o("WAWebHatchJsonReaders").isObject(t) ? t : null;
      } catch (e) {
        return null;
      }
    }
    ((l.hasHatchJarvisPayload = d),
      (l.parseHatchJarvisPayload = m),
      (l.getHatchJarvisPayload = _));
  },
  98,
);
