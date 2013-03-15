/**
 * Skills collection.
 *
 * @author Derek Kent <dak@dak.org>
 */
define([
    'jquery',
    'underscore',
    'backbone',
    'models/skill'
],

function ($, _, Backbone, Skill) {
    'use strict';

    return new (Backbone.Collection.extend({
        url: '/data/skills.json',
        model: Skill,
        
        initialize: function() {
            this.fetch();
        }
    }))();
});
