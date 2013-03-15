/**
 * Router to manage all navigation in the application.
 *
 * @author Derek Kent <dak@dak.org>
 */
define([
    'jquery',
    'underscore',
    'backbone',
    'views/app'
],
function( $, _, Backbone, appView ) {
    'use strict';

    return new (Backbone.Router.extend({
        routes: {
            '': 'home',
            'home': 'home',
            'history': 'history',
            'experience': 'experience',
            'contact': 'contact',

            // Default Route
            '*actions': 'home'
        },

        home: function() {
            appView.render('home');
        },

        history: function() {
            appView.render('history');
        },

        experience: function() {
            appView.render('experience');
        },
        
        contact: function() {
            appView.render('contact');
        }
    }))();
});

