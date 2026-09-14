__d(
  "AdsAutoNamingTemplate",
  ["invariant"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = "_",
      u = ",",
      c = (function () {
        function t(t) {
          ((this.$1 = []),
            (this.$2 = e),
            (this.$3 = u),
            t && this.fromAPIObject(t));
        }
        var n = t.prototype;
        return (
          (n.fromAPIObject = function (t) {
            (Array.isArray(t.fields) || s(0, 3656),
              Object.prototype.hasOwnProperty.call(t, "fieldSeparator") ||
                s(0, 3657),
              Object.prototype.hasOwnProperty.call(t, "listSeparator") ||
                s(0, 3657),
              this.setFields(t.fields.slice(0)),
              this.setFieldSeparator(t.fieldSeparator),
              this.setListSeparator(t.listSeparator));
          }),
          (n.toAPIObject = function () {
            return {
              fields: this.getFields(),
              fieldSeparator: this.getFieldSeparator(),
              listSeparator: this.getListSeparator(),
            };
          }),
          (n.clone = function () {
            return new t(this.toAPIObject());
          }),
          (n.getFields = function () {
            return this.$1;
          }),
          (n.setFields = function (t) {
            this.$1 = t;
          }),
          (n.getFieldSeparator = function () {
            return this.$2;
          }),
          (n.setFieldSeparator = function (t) {
            this.$2 = t;
          }),
          (n.getListSeparator = function () {
            return this.$3;
          }),
          (n.setListSeparator = function (t) {
            this.$3 = t;
          }),
          t
        );
      })();
    l.default = c;
  },
  98,
);
