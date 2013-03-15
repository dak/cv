/**
 * Skill.
 *
 * @author Derek Kent <dak@dak.org>
 */
define([
    'underscore',
    'backbone'
],

function (_, Backbone) {
    return Backbone.Model.extend({
        idAttribute: '_id',

        defaults: {
            name: 'Unknown',
            tag: 'unknown',
            percent: 0,
            description: ''
            subskills: []
        }
    });
});
