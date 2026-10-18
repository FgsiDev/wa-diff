__d(
  "WAWebSendDirectMsgToDeviceList",
  [
    "WAWebCommsAckParser",
    "WAWebDeprecatedSendIqWorkerCompatible",
    "WAWebSendMsgCommonApi",
    "WAWebSendMsgCreateFanoutStanza",
    "WAWebSignalProtocolStore",
    "WAWebWamEnumMessageDistributionEnumType",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      var t,
        n,
        a,
        i,
        l,
        s = e.additionalBotBody,
        u = e.additionalBotShouldHaveIdentity,
        c = e.deviceList,
        d = e.groupData,
        m = e.metricReporter,
        p = e.msgProtobuf,
        _ = e.msgRecord,
        f = e.option,
        g = e.scheduledMsgMetadata,
        h = _.data,
        y = h.id,
        C = h.to,
        b = _.data.to,
        v = await o("WAWebSendMsgCreateFanoutStanza").createFanoutMsgStanza({
          additionalBotBody: s,
          additionalBotShouldHaveIdentity: u,
          chatId: b,
          deviceList: c,
          groupData: d,
          metricReporter: m,
          msgProtobuf: p,
          msgRecord: _,
          option: f,
          scheduledMsgMetadata: g,
        }),
        S = v.stanza;
      (await o("WAWebSignalProtocolStore")
        .getSignalProtocolStore()
        .flushBufferToDiskIfNotMemOnlyMode(),
        (t = m.sendPerfReporter) == null || t.postReadyToSendStage(),
        (n = m.sendPerfReporter) == null || n.startWrittenWireStage());
      var R = await o(
          "WAWebDeprecatedSendIqWorkerCompatible",
        ).deprecatedSendStanzaAndReturnAck(
          S,
          o("WAWebCommsAckParser").toCoreAckTemplate({
            id: y.id,
            class: "message",
            from: C,
            participant: null,
          }),
        ),
        L = o("WAWebSendMsgCommonApi").sendMsgAckSyncParser.parse(R);
      return L.error
        ? Promise.reject(
            r("err")(
              "[messaging] encryptAndSendGroupDirectMsg: Invalid ack from server",
            ),
          )
        : ((a = m.sendReporter) == null ||
            a.setMessageDistributionType(
              o("WAWebWamEnumMessageDistributionEnumType")
                .MESSAGE_DISTRIBUTION_ENUM_TYPE.DIRECT_MESSAGE,
            ),
          (i = m.sendPerfReporter) == null || i.postWrittenWireStage(),
          (m.sendPerfReporter = null),
          (l = m.sendReporter) == null || l.postSuccess(),
          (m.sendReporter = null),
          L.success);
    }
    l.sendDirectMsgToDeviceList = e;
  },
  98,
);
