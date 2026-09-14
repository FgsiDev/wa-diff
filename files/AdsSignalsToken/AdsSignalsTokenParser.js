__d(
  "AdsSignalsTokenParser",
  ["AdsSignalsCSVParserConstants", "AdsSignalsTokenReaderConstants"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 1048576,
      s = /\x00/g,
      u = (function () {
        function t(e) {
          e === void 0 && (e = {});
          var t = e,
            n = t.delimiter,
            r = t.newline;
          ((this.$1 =
            typeof n == "string"
              ? n
              : o("AdsSignalsCSVParserConstants").DELIMITERS[0]),
            (this.$2 =
              r != null
                ? r
                : o("AdsSignalsTokenReaderConstants").TOKEN_CONSTANTS.NL),
            this.$2 != o("AdsSignalsTokenReaderConstants").TOKEN_CONSTANTS.RN &&
              this.$2 !=
                o("AdsSignalsTokenReaderConstants").TOKEN_CONSTANTS.NL &&
              this.$2 !=
                o("AdsSignalsTokenReaderConstants").TOKEN_CONSTANTS.CR &&
              (this.$2 = o(
                "AdsSignalsTokenReaderConstants",
              ).TOKEN_CONSTANTS.NL),
            (this.$3 = 0));
        }
        var n = t.prototype;
        return (
          (n.parse = function (t, n, r) {
            ((this.$8 = t.replace(s, "")),
              (this.$9 = n || 0),
              (this.$10 = r || !1));
            var e = this.$8.length,
              a = this.$1.length,
              i = this.$2.length;
            if (
              ((this.$3 = 0),
              (this.$5 = []),
              (this.$6 = []),
              (this.$7 = []),
              (this.$4 = 0),
              !this.$8)
            )
              return this.$13();
            if (
              this.$8.indexOf(
                o("AdsSignalsTokenReaderConstants").TOKEN_CONSTANTS.QUOTE,
              ) === -1
            ) {
              for (var l = this.$8.split(this.$2), u = 0; u < l.length; u++) {
                var c = l[u];
                if (((this.$3 += c.length), u !== l.length - 1))
                  this.$3 += this.$2.length;
                else if (this.$10) return this.$13();
                this.$14(c.split(this.$1));
              }
              return this.$13();
            }
            for (
              this.$11 = this.$8.indexOf(this.$1, this.$3),
                this.$12 = this.$8.indexOf(this.$2, this.$3);
              ;
            ) {
              if (
                this.$8[this.$3] ===
                o("AdsSignalsTokenReaderConstants").TOKEN_CONSTANTS.QUOTE
              ) {
                var d = this.$3;
                for (this.$3++; ; ) {
                  if (
                    ((d = this.$8.indexOf(
                      o("AdsSignalsTokenReaderConstants").TOKEN_CONSTANTS.QUOTE,
                      d + 1,
                    )),
                    d === -1)
                  )
                    return (
                      this.$10 ||
                        this.$6.push({
                          code: "MissingQuotes",
                          index: this.$3,
                          message: "Quoted field unterminated",
                          row: this.$5.length,
                          type: "Quotes",
                        }),
                      this.$15()
                    );
                  if (d === e - 1) {
                    var m = this.$8
                      .substring(this.$3, d)
                      .replace(
                        /\"\"/g,
                        o("AdsSignalsTokenReaderConstants").TOKEN_CONSTANTS
                          .QUOTE,
                      );
                    return this.$15(m);
                  }
                  if (
                    this.$8[d + 1] ===
                    o("AdsSignalsTokenReaderConstants").TOKEN_CONSTANTS.QUOTE
                  ) {
                    d++;
                    continue;
                  }
                  if (this.$8[d + 1] === this.$1) {
                    (this.$7.push(
                      this.$8
                        .substring(this.$3, d)
                        .replace(
                          /\"\"/g,
                          o("AdsSignalsTokenReaderConstants").TOKEN_CONSTANTS
                            .QUOTE,
                        ),
                    ),
                      (this.$3 = d + 1 + a),
                      (this.$11 = this.$8.indexOf(this.$1, this.$3)),
                      (this.$12 = this.$8.indexOf(this.$2, this.$3)));
                    break;
                  }
                  if (this.$8.substr(d + 1, i) === this.$2) {
                    (this.$7.push(
                      this.$8
                        .substring(this.$3, d)
                        .replace(
                          /\"\"/g,
                          o("AdsSignalsTokenReaderConstants").TOKEN_CONSTANTS
                            .QUOTE,
                        ),
                    ),
                      this.$16(d + 1 + i),
                      (this.$11 = t.indexOf(this.$1, this.$3)));
                    break;
                  }
                }
                continue;
              }
              if (this.$11 !== -1 && (this.$11 < this.$12 || this.$12 === -1)) {
                (this.$7.push(this.$8.substring(this.$3, this.$11)),
                  (this.$3 = this.$11 + a),
                  (this.$11 = this.$8.indexOf(this.$1, this.$3)));
                continue;
              }
              if (this.$12 !== -1) {
                (this.$7.push(this.$8.substring(this.$3, this.$12)),
                  this.$16(this.$12 + i));
                continue;
              }
              break;
            }
            return this.$15();
          }),
          (n.$14 = function (t) {
            (this.$5.push(t), (this.$4 = this.$3));
          }),
          (n.$15 = function (t) {
            return (
              t === void 0 && (t = this.$8.substr(this.$3)),
              this.$10
                ? this.$13()
                : (this.$7.push(t),
                  (this.$3 = this.$8.length),
                  this.$14(this.$7),
                  this.$13())
            );
          }),
          (n.$16 = function (t) {
            ((this.$3 = t),
              this.$14(this.$7),
              (this.$7 = []),
              (this.$12 = this.$8.indexOf(this.$2, this.$3)));
          }),
          (n.$13 = function () {
            return {
              data: this.$5,
              errors: this.$6,
              meta: {
                cursor: this.$4 + (this.$9 || 0),
                delimiter: this.$1,
                linebreak: this.$2,
              },
            };
          }),
          (n.getCharIndex = function () {
            return this.$3;
          }),
          (t.guessLineBreak = function (n) {
            var t,
              r = (t = o("AdsSignalsTokenReaderConstants")).TOKEN_CONSTANTS.NL,
              a = n.replace(s, "").substring(0, e),
              i = a.split(t.TOKEN_CONSTANTS.CR).length - 1,
              l = a.split(t.TOKEN_CONSTANTS.NL).length - 1,
              u = a.split(t.TOKEN_CONSTANTS.RN).length - 1;
            return (
              u > 0 && u - l >= -1 && u - i >= -1
                ? (r = o("AdsSignalsTokenReaderConstants").TOKEN_CONSTANTS.RN)
                : l < i &&
                  (r = o("AdsSignalsTokenReaderConstants").TOKEN_CONSTANTS.CR),
              r
            );
          }),
          t
        );
      })();
    l.default = u;
  },
  98,
);
