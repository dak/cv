/**
 * Application loader.  Called by main.js.
 *
 * @author Derek Kent <dak@dak.org>
 */
define([
    'underscore',
    'backbone'
],
function( _, Backbone ) {
    'use strict';

    var initialize = function() {
         function setup(router) {
            Backbone.history.start({ pushState: true });

            // Catch internal application links and let Backbone handle the routing
            $(document).on('click', 'a:not([data-bypass])', function (e) {
                var href = $(this).attr('href'),
                    protocol = this.protocol + '//';

                if ( href && href !== '#' && href.slice(protocol.length) !== protocol ) {
                    e.preventDefault();
                    
                    router.navigate( href, {trigger: true} );
                }
            });
        }

        require(['router'], function(router) {
            setup(router);
        });
    };

    return { initialize: initialize };
});
