'use strict';

app.viewPost = kendo.observable({
    onShow: function() {},
    afterShow: function() {}
});
app.localization.registerView('viewPost');

// START_CUSTOM_CODE_viewPost
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_viewPost
(function(parent) {
    var
    /// start global model properties
    /// end global model properties
        viewPostModel = kendo.observable({
        submit: function() {},
        /// start add model functions
        /// end add model functions

        cancel: function() {}
    });

    /// start form functions
    /// end form functions

    parent.set('onShow', function _onShow() {
        var that = parent;
        that.set('addFormData', {
            /// start add form data init
            /// end add form data init
        });
        /// start add form show
        /// end add form show
    });
    parent.set('viewPostModel', viewPostModel);
})(app.viewPost);

// START_CUSTOM_CODE_viewPostModel
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_viewPostModel