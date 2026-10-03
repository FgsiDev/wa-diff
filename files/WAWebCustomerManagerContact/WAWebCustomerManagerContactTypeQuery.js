__d(
  "WAWebCustomerManagerContactTypeQuery",
  ["WAWebLidAwareContactsDB", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e === "all"
        ? r("WAWebLidAwareContactsDB").all()
        : e === "saved_contacts"
          ? s(c)
          : e === "not_in_contacts"
            ? s(function (e) {
                return !c(e);
              })
            : e === "hidden"
              ? r("WAWebLidAwareContactsDB").all()
              : (function () {
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      e,
                  );
                })();
    }
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return (yield r("WAWebLidAwareContactsDB").all()).filter(e);
        })),
        u.apply(this, arguments)
      );
    }
    function c(e) {
      return e.isAddressBookContact === 1 || e.isUsernameContact === !0;
    }
    ((l.fetchContactRowsForType = e), (l.isSavedContact = c));
  },
  98,
);
