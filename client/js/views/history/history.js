/**
 * History page view.
 *
 * @author Derek Kent <dak@dak.org>
 */
define([
    'jquery',
    'underscore',
    'backbone',
    'handlebars',
    'text!templates/history/history.html'
],

function ($, _, Backbone, Handlebars, template) {
    'use strict';

    return new (Backbone.View.extend({
        initialize: function () {
            this.template = Handlebars.compile(template);
        },

        render: function () {
            this.$el.html(this.template()).show();
        }
    }))();
});
