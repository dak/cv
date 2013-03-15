/**
 * Contact page view.
 *
 * @author Derek Kent <dak@dak.org>
 */
define([
    'jquery',
    'underscore',
    'backbone',
    'handlebars',
    'text!templates/contact/contact.html'
],
function( $, _, Backbone, Handlebars, template ) {
    'use strict';

    return new (Backbone.View.extend({
        initialize: function() {
            this.template = Handlebars.compile(template);

            skills.on( 'reset', this.render, this );
        },

        render: function() {
            this.$el.html( this.template() );
        }
    }))();
});
