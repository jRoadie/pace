(function($) {

    'use strict';

    var defs = {
        scriptlet: {
            start: '${',
            end: '}'
        }
    };

    var warehouse = {
        taglets: {},
        scriptlets: {}
    };

    var Pace = function() {

    };

    var pace = Pace.prototype = {

        constructor: Pace,

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



    (function(pace) {

        pace.taglet({
            name: 'each',
            compile: function(node, parent) {

            }
        })

    })(pace);

})(jQuery);
