/**
 * Header view.
 *
 * @author Derek Kent <dak@dak.org>
 */
define([
    'jquery',
    'underscore',
    'backbone',
    'handlebars',
    'text!templates/header.html',
    'swag'
],

function ($, _, Backbone, Handlebars, template) {
    'use strict';

    return new (Backbone.View.extend({
        initialize: function () {
            this.template = Handlebars.compile(template);
        },

        render: function (page) {
            var view = this;

            this.activePage = page || this.activePage;

            if (typeof this.activePage === 'object') {
                this.activePage = $(this.activePage.currentTarget).attr('href');
            }

            // Remove leading and trailing slashes
            this.activePage = this.activePage.replace(/^\/|\/$/g, '');

            this.$el.html(this.template({
                page: this.activePage
            }));

            return this;
        },

        events: {
            'click .nav-item': 'render'
        }
    }))();
});
