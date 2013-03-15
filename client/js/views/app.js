/**
 * Primary application view that manages loading all page views and loads the header on init.
 *
 * @author Derek Kent <dak@dak.org>
 */
define([
    'jquery',
    'underscore',
    'backbone',
    'views/header',
    'text!templates/main.html',
    'less!styles/main'
],
function( $, _, Backbone, header, template ) {
    'use strict';

    var _loaded;

    return new (Backbone.View.extend({
        el: 'body',

        render: function (page) {
            // Only render the template once
            if ( !_loaded ) {
                this.$el.html( template );

                // Render the navigation header
                header.setElement( $('header') ).render(page);

                _loaded = true;
            }

            // Lazy-load the page
            require(['views/'+page+'/'+page], function (view) {
                view.setElement( $('#'+page) ).render();
            });
        }
    }))();
});
