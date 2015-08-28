(function($) {

    'use strict';

    var defs = {
        scriptlet: {
            start: '${',
            end: '}'
        }
    };

    var warehouse = {
        scope: {
            app: {},
            req: {}
        },
        taglets: {},
        scriptlets: {}
    };

    var Pace = function() {

    };

    Pace.parseJSON = function(target) {
        target = target.replace(/'/g, );
        return
    };

    var pace = Pace.prototype = {

        constructor: Pace,

        init: function(params) {

        },

        /**
         * param def could be two types
         * string to get existing taglet
         * object to create new taglet. throw exception if already exist
         * @param def
         */
        taglet: function(def) {
            if(typeof def === 'string') {
                return warehouse.taglets[def];
            }
        },

        /**
         * param def could be two types
         * string to get existing scriptlet
         * object to create new scriptlet. throw exception if already exist
         * @param def
         */
        scriptlet: function(def) {
            if(typeof def === 'string') {
                return warehouse.scriptlets[def];
            }
        }

    };

    var Taglet = function(def) {
        this.prototype = {
            name: def.name,
            template: def.template,
            templateUrl: def.templateUrl
        }
    };
    Taglet.prototype = {

        constructor: Taglet

    };

    var Scriptlet = function(def) {

    };
    Scriptlet.prototype = {

        constructor: Scriptlet

    };

    /**
     * initial taglets and scriptlets
     */
    (function(pace) {

        pace.taglet({
            name: 'each',
            compile: function(node, parent) {

            }
        });

        window.pace = pace;

    })(pace);

    /**
     * let ready to pace
     */
    $(function() {
        var $pace = $('[let-pace]');
        $pace.hide(function() {
            $.each($pace.children(), function(i, k) {
                console.log($(k).children())
            })
        });
    });

})(jQuery);
