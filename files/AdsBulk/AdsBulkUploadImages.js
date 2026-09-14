__d(
  "AdsBulkUploadImages",
  ["AdsGraphAPI", "Promise", "mixInEventEmitter", "promiseDone"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (function () {
        function a(e) {
          var n = this;
          ((this.$6 = function (e) {
            a.isZipFile(e)
              ? n.emit("zipDetected", { file: e })
              : n.emit("imageDetected", { file: e });
            var r = new t.FormData();
            return (
              r.append(e.name, e),
              o("AdsGraphAPI")
                .get(i.id)
                .adaccount(n.$1)
                .edge("adimages")
                .post(r)
                .then(
                  function (t) {
                    return n.$8(e, t);
                  },
                  function (t) {
                    return n.$9(e, t);
                  },
                )
            );
          }),
            (this.$7 = function (e) {
              var t = e.hash,
                r = e.otherAccountID;
              return o("AdsGraphAPI")
                .get(i.id)
                .adaccount(n.$1)
                .edge("adimages")
                .batched()
                .post({ copy_from: { source_account_id: r, hash: t } })
                .then(
                  function (e) {
                    return n.$10(r, t, e);
                  },
                  function (e) {
                    return n.$11(r, t, e);
                  },
                );
            }),
            (this.$1 = e),
            (this.$3 = []),
            (this.$4 = []));
        }
        var l = a.prototype;
        return (
          (l.addFile = function (t) {
            return (this.$3.push(t), this);
          }),
          (l.addFiles = function (t) {
            for (var e = 0, n = t.length; e < n; e++) this.addFile(t[e]);
            return this;
          }),
          (l.addCopyFromAnotherAccount = function (t, n) {
            return (this.$4.push({ otherAccountID: t, hash: n }), this);
          }),
          (l.run = function () {
            var t = this;
            ((this.$5 = this.$3.length + this.$4.length), (this.$2 = 0));
            var o = this.$3.map(this.$6, this),
              a = this.$4.map(this.$7, this),
              i = o.concat(a);
            r("promiseDone")((e || (e = n("Promise"))).all(i), function () {
              return t.emit("complete");
            });
          }),
          (l.$9 = function (t, n) {
            this.emit("fileError", {
              error: n,
              errorMessage: n.error_user_msg || n.message || "",
              filename: t.name,
            });
          }),
          (l.$8 = function (t, n) {
            for (var e in n.images)
              if (Object.prototype.hasOwnProperty.call(n.images, e)) {
                var r = n.images[e],
                  o = e.lastIndexOf("/");
                (o > -1 && (e = e.substr(o + 1)),
                  this.emit("imageUploaded", {
                    originalFilename: t.name,
                    filename: e,
                    hash: r.hash,
                    url: r.url,
                  }));
              }
            this.$12();
          }),
          (l.$11 = function (t, n, r) {
            this.emit("copyError", {
              error: r,
              otherAccountID: t,
              hash: n,
              errorMessage: r.error_user_msg || r.message || "",
            });
          }),
          (l.$10 = function (t, n, r) {
            var e = r.images[n];
            (this.emit("copySuccess", {
              otherAccountID: t,
              originalHash: n,
              hash: e.hash,
              url: e.url,
            }),
              this.$12());
          }),
          (l.$12 = function () {
            (this.$2++,
              this.emit("progress", { completed: this.$2, total: this.$5 }));
          }),
          (a.isZipFile = function (t) {
            return t.name.toLowerCase().endsWith(".zip");
          }),
          a
        );
      })();
    r("mixInEventEmitter")(s, {
      complete: !0,
      copyError: !0,
      copySuccess: !0,
      fileError: !0,
      imageDetected: !0,
      imageUploaded: !0,
      progress: !0,
      zipDetected: !0,
    });
    var u = s;
    l.default = u;
  },
  98,
);
