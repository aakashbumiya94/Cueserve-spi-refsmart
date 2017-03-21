'use strict';

app.viewAbout = kendo.observable({
    onShow: function() {},
    afterShow: function() {}
});
app.localization.registerView('viewAbout');

// START_CUSTOM_CODE_viewAbout
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_viewAbout
(function(parent) {
    var viewAboutModel = kendo.observable({});

    parent.set('viewAboutModel', viewAboutModel);
})(app.viewAbout);

// START_CUSTOM_CODE_viewAboutModel
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_viewAboutModel