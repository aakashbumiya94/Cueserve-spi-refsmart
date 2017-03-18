(function (global) {
    var DemoViewModel,
        app = global.app = global.app || {};

    DemoViewModel = kendo.data.ObservableObject.extend({

        initPayPal: function () {
            if (!this.checkSimulator()) {

                // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                // !!!!!!!!!!!!!! replace these by your own IDs !!!!!!!!!!!!!!!!!!
                // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                
                var clientIDs = {
                    "PayPalEnvironmentProduction": "",
                    "PayPalEnvironmentSandbox": "AQbuL6su4--fF3Gc2eo-BcUOMgwZlpowI2oJqEVbG2PdhVIoRV4UaRWTyQSew0uePPsK6T2yeZn3OqFy"
                };
                
                window.PayPalMobile.init(
                    clientIDs,
                    this.onPayPalMobileInit
                );
            }
        },

        payNow: function () {
            if (!this.checkSimulator()) {
                window.PayPalMobile.renderSinglePaymentUI(
                    this.getPayment(),
                    function(payment) {alert("payment success: " + JSON.stringify(payment, null, 2))},
                    function(result) {alert(result)}
                );
            }
        },

        futurePayment: function () {
            if (!this.checkSimulator()) {
                window.PayPalMobile.renderFuturePaymentUI(
                    function(authorization) {alert("authorization: " + JSON.stringify(authorization, null, 2))},
                    function(result) {alert(result)}
                );
            }
        },

        onPayPalMobileInit: function () {
            window.PayPalMobile.prepareToRender(
                "PayPalEnvironmentSandbox",
                new PayPalConfiguration({
                    // for more options see js/paypal-mobile-js-helper.js
                    merchantName: "Telerik Test Shop",
                    acceptCreditCards: true,
                    merchantPrivacyPolicyURL: "https://mytestshop.com/policy",
                    merchantUserAgreementURL: "https://mytestshop.com/agreement"
                }),
                function() {alert("OK, ready to accept payments!")}
            );
        },

        getPayment: function () {
            // These PayPal JS objects are defined in js/paypal-mobile-js-helper.js
            var paymentDetails = new PayPalPaymentDetails("15.00", "3.00", "2.00");
            return new PayPalPayment("20.00", "USD", "Telerik T-Shirt", "Sale", paymentDetails);
        },

        checkSimulator: function() {
            if (window.navigator.simulator === true) {
                alert('This plugin is not available in the simulator.');
                return true;
            } else if (window.PayPalMobile  === undefined) {
                alert('Plugin not found. Maybe you are running in AppBuilder Companion app which currently does not support this plugin.');
                return true;
            } else {
                return false;
            }
        }
    });

    app.demoService = {
        viewModel: new DemoViewModel()
    };
})(window);