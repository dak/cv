/**
 * Experience page view.
 *
 * @author Derek Kent <dak@dak.org>
 */
define([
    'jquery',
    'underscore',
    'backbone',
    'handlebars',
    'collections/skills'
    'text!templates/experience/experience.html'
],

function ($, _, Backbone, Handlebars, skills, template) {
    'use strict';

    return new (Backbone.View.extend({
        initialize: function () {
            this.template = Handlebars.compile(template);

            skills.on('reset', this.render, this);
        },

        render: function () {
            this.$el.html(this.template()).show();
        }
    }))();
});
