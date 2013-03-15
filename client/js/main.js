/**
 * This is the first script run by require.js when our application loads.
 *
 * @author Derek Kent <dak@dak.org>
 */
require.config({
    // Setup path aliases
    paths: {
        // Core libraries
        jquery: 'libs/jquery/jquery',
        handlebars: 'libs/handlebars/handlebars',
        underscore: 'libs/underscore/underscore',
        backbone: 'libs/backbone/backbone',
        
        // Handlebars extensions
        swag: 'libs/handlebars/swag',

        // Twitter Bootstrap Javascript files
        bootstrapAffix: 'libs/bootstrap/bootstrap-affix',
        bootstrapAlert: 'libs/bootstrap/bootstrap-alert',
        bootstrapButton: 'libs/bootstrap/bootstrap-button',
        bootstrapCarousel: 'libs/bootstrap/bootstrap-carousel',
        bootstrapCollapse: 'libs/bootstrap/bootstrap-collapse',
        bootstrapDropdown: 'libs/bootstrap/bootstrap-dropdown',
        bootstrapModal: 'libs/bootstrap/bootstrap-modal',
        bootstrapPopover: 'libs/bootstrap/bootstrap-popover',
        bootstrapScrollspy: 'libs/bootstrap/bootstrap-scrollspy',
        bootstrapTab: 'libs/bootstrap/bootstrap-tab',
        bootstrapTooltip: 'libs/bootstrap/bootstrap-tooltip',
        bootstrapTransition: 'libs/bootstrap/bootstrap-transition',
        bootstrapTypeahead: 'libs/bootstrap/bootstrap-typeahead',

        // Require.js plugins
        text: 'libs/require/plugins/text',

        // Handlebars templates directory
        templates: '../templates'
    },

    // Sets the configuration for third party scripts that are not AMD compatible
    shim: {
        'underscore': {
            exports: '_'
        },
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'handlebars': {
            exports: 'Handlebars'
        },
        
        'swag': ['handlebars'],

        // Twitter Bootstrap javascript files
        'bootstrapAffix': ['jquery'],
        'bootstrapAlert': ['jquery'],
        'bootstrapButton': ['jquery'],
        'bootstrapCarousel': ['jquery'],
        'bootstrapCollapse': ['jquery'],
        'bootstrapDropdown': ['jquery'],
        'bootstrapModal': ['jquery', 'bootstrapTransition'],
        'bootstrapPopover': ['jquery', 'bootstrapTooltip'],
        'bootstrapScrollspy': ['jquery'],
        'bootstrapTab': ['jquery'],
        'bootstrapTooltip': ['jquery'],
        'bootstrapTransition': ['jquery'],
        'bootstrapTypeahead': ['jquery']
    }
});

define(['loader'], function(Loader) {
    Loader.initialize();
});
