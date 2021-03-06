if (!window.CORE) {

    window.CORE = {

        datasource : "faostat",

        timestamps : [],


        /**
         * The base URL is used to load FAOSTAT modules.
         */
        baseURL : 'localhost:8080',

        groupCode : null,

        domainCode : null,

        word : null,

        lang : null,

        CONFIG_MES: {
            prefix                  : 'http://localhost:8080/mes/',
            datasource              : 'faostatdb',
            html_structure          : 'http://faostat3.fao.org/mes/structure.html',
            rest_mes                : 'http://faostat3.fao.org/wds/rest/mes',
            rest_groupanddomains    : 'http://faostat3.fao.org/wds/rest/groupsanddomains',
            rest_domains            : 'http://faostat3.fao.org/wds/rest/domains',
            I18N_URL                : 'http://localhost:8080/faostat-gateway/static/faostat/I18N/'

        },

        /**
         * This map is used to avoid modules libraries to be loaded more than once.
         */
        loadMapJS : {
            'home' : false,
            'browse' : false,
            'download' : false,
            'compare' : false,
            'search' : false,
            'analysis' : false,
            'mes' : false
        },

        /**
         * This map is used to avoid modules CSS to be loaded more than once.
         */
        loadMapCSS : {
            'home' : false,
            'browse' : false,
            'download' : false,
            'compare' : false,
            'search' : false,
            'analysis' : false,
            'mes' : false
        },

        /**
         * @param module        home, browse, download, compare, search, analysis, mes
         * @param groupCode     FAOSTAT group code, e.g. 'Q'
         * @param groupName     FAOSTAT domain code, e.g. 'QC'
         * @param lang          UI language, e.g. 'E'
         */
        initModule : function(module, groupCode, domainCode, lang) {
            // method to calculate DIV min height
            CORE.contentDIVMinHeight();

            $("#searchFS").show();

            // Store parameters
            CORE.groupCode = groupCode;
            CORE.domainCode = domainCode;
            CORE.lang = lang;

            // Call the init method of the module
            switch (module) {
                case 'home': break;
                case 'browse':      CORE.loadModuleLibs(module, function() { FAOSTATBrowse.init(CORE.groupCode, CORE.domainCode, CORE.lang) }); break;
                case 'download':    CORE.loadModuleLibs(module, function() { FAOSTATDownload.init(CORE.groupCode, CORE.domainCode, CORE.lang) }); break;
                case 'compare':     CORE.loadModuleLibs(module, function() { FAOSTATCompare.init(CORE.groupCode, CORE.domainCode, CORE.lang) }); break;
                case 'analysis':    CORE.loadModuleLibs(module, function() {
                    ANALYSIS.init(CORE.groupCode, CORE.domainCode, CORE.lang) });
                    break;
//                case 'analysis':    CORE.loadModuleLibs(module, function() {
//                    F3_ANALYSIS.init(
//                        {
//                            default_view: groupCode,
//                            lang : lang
//                        }
//                    )
//                });
//                    break;
                case 'mes':
                    CORE.CONFIG_MES.sectionCode = groupCode;
                    CORE.CONFIG_MES.subSectionCode = domainCode;
                    CORE.CONFIG_MES.lang = lang;
                    CORE.loadModuleLibs(module, function() {
                        MES.init( CORE.CONFIG_MES )
                    });
                    break;
            }

        },

        /**
         * @param module        home, browse, download, compare, search, analysis, mes
         * @param word          it's the word search in faostat (i.e. Rice)
         * @param lang          UI language, e.g. 'E'
         */
        initModuleSearch : function(module, word, lang) {
            // method to calculate DIV min height
            CORE.contentDIVMinHeight();

            // Store parameters
            CORE.word = word;
            CORE.lang = lang;

            // Call the init method of the module
            switch (module) {
                case 'search':  CORE.loadModuleLibs(module, function() { FAOSTATSearch.init(CORE.word, CORE.lang)});
            }
        },

        /**
         * @param module 	home, browse, download, compare, search, analysis, mes
         * @param group		FAOSTAT group code, e.g. 'Q'
         * @param domain	FAOSTAT domain code, e.g. 'QC'
         * @param lang 		UI language, e.g. 'E'
         *
         * Function linked to the Gateway's menu that load the requested module in the main content.
         */
        loadModule : function(module, group, domain, lang) {
            window.location.href = 'http://' + CORE.baseURL + '/faostat-gateway/go/to/' + module + '/' + group + '/' + domain + '/' + lang;
        },

        loadSearchModule : function(module, word, lang) {
            window.location.href = 'http://' + CORE.baseURL + '/faostat-gateway/go/to/' + module + '/' + word + '/' + lang;
        },

        /**
         * @returns {boolean} <code>true</code> if HTML5 is supported, <code>false</code> otherwise
         *
         * Check whether HTML5 is supported or not.
         */
        testHTML5 : function() {
            return history.pushState ? true : false;
        },

        /**
         * @param module 	home, browse, download, compare, search, analysis, mes
         * @param group		FAOSTAT group code, e.g. 'Q'
         * @param domain	FAOSTAT domain code, e.g. 'QC'
         * @param lang 		UI language, e.g. 'E'
         *
         * This function update the URL to allow the bookmark of the user's selection.
         */
        upgradeURL : function(module, group, domain, lang) {
            /** TODO: make is as load module **/
            if (CORE.testHTML5()) {
                var state = '/faostat-gateway/go/to/' + module + '/' + group + '/' + domain + '/' + lang;
                if ( History.getState().data.state != state ) {
                    var t = new Date().getTime();
                    CORE.timestamps[t] = t;
                    History.pushState({timestamp: t, state : state}, state, state);
                }
            }
        },

        stickSelectorsHeader : function() {
            $("#selectorsHead").sticky({topSpacing:0});
        },


        /**
         * @param module    The name of the module
         *
         * Each module has its own libraries, the full list is in the <code>libs.json</code> file.
         */
        loadModuleLibs : function(module, initFunction) {
            $.getJSON('http://' + CORE.baseURL + '/faostat-gateway/static/faostat/faostat-gateway-js/libs_fallback.json', function (data) {
                data = (typeof data == 'string')? $.parseJSON(data) : data;
                var toload = [];

                yepnope({
                    load: data[module],
//                    callback: function(e) {
//                        console.log(e);
//                    },
                    complete: function() {
                        initFunction()
                    }
                });
            })

//            if (!CORE.loadMapJS[module]) {
//
//                // Register the module
//                CORE.loadMapJS[module] = true;
//
//                // Load module's libraries.
//                $.getJSON('http://' + CORE.baseURL + '/faostat-gateway/static/faostat/faostat-gateway-js/libs.json', function (data) {
//
//                    if(typeof data == 'string')
//                        data = $.parseJSON(data);
//
//                    if ( data[module] )  {
//                        var moduleLibs = data[module];
//
//                        var requests = []
//                        if ( moduleLibs.css ) {
//                            for (var i = 0 ; i < moduleLibs.css.length ; i++) {
//                                requests.push(moduleLibs.css[i]);
//                            }
//                        }
//
//                        if ( moduleLibs.js ) {
//                            for (var i = 0 ; i < moduleLibs.js.length ; i++) {
//                                requests.push(moduleLibs.js[i]);
//                            }
//                        }
//                        //ImportDependencies.importAsync(requests, initFunction);
//                        ImportDependencies.importSequentially(requests, initFunction );
//
//                    }
//                    else{
//                        initFunction();
//                    }
//
//                })
//
//            } else {
//                //console.log('JS libraries for module ' + module + ' won\'t be loaded again');
//            }
        },

        breakLabel: function (lbl) {
            if (lbl && lbl.length > 0 && lbl == 'Indicators from Household Surveys (gender, area, socioeconomics)') {
                return 'Indicators from<br> Household Surveys<br> (gender, area,<br> socioeconomics)';
            } else {
                var chars = 23;
                var c = 0;
                var index = 0;
                for (var i = 0 ; i < lbl.length ; i++) {
                    if (lbl.charAt(i) == ' ') {
                        c++;
                        index = i;
                    }
                    if (i >= chars) {
                        // return lbl.substring(0, i) + '<br>' + lbl.substring(i);
                        return lbl.substring(0, index) + '<br>' + lbl.substring(index);
                    }
                }
                return lbl;
            }
        },

        breakLabelList: function (lbl, charsLength) {
            var chars = 23;
            if ( charsLength != null ) {
                chars = charsLength;
            }
            var c = 0;
            var index = 0;
            for (var i = 0 ; i < lbl.length ; i++) {
                if (lbl.charAt(i) == ' ') {
                    c++;
                    index = i;
                }
                if (i >= chars) {
                    // return lbl.substring(0, i) + '<br>' + lbl.substring(i);
                    return lbl.substring(0, index) + '<br>' + lbl.substring(index);
                }
            }
            return lbl;
        },

        replaceAll: function(text, stringToFind, stringToReplace) {
            var temp = text;
            var index = temp.indexOf(stringToFind);
            while(index != -1){
                temp = temp.replace(stringToFind,stringToReplace);
                index = temp.indexOf(stringToFind);
            }
            return temp;
        },

        getLangProperties: function(callback) {
            var I18NLang = '';
            switch (CORE.lang) {
                case 'F' : I18NLang = 'fr'; break;
                case 'S' : I18NLang = 'es'; break;
                default: I18NLang = 'en'; break;
            }
            var path =  'http://'+ CORE.baseURL +'/faostat-gateway/static/faostat/I18N/';

            $.i18n.properties({
                name: 'I18N',
                path: path,
                mode: 'both',
                language: I18NLang,
                callback: function() {
                    // FAOSTATGateway._loadLabels();
                    callback();
                }
            });
        },

        reloadModule: function(lang) {
            CORE.lang = lang;
            var url = window.location.href;
            url = url.substring(0, url.length -2);
            url = url + '/' + CORE.lang;
            window.location.href = url;
        },

        /** TODO: to be completed **/
        loadModule: function(module, options) {

            // TODO: move in in CORE.js
            var defaultURL =  'http://' + CORE.baseURL +'/faostat-gateway/go/to/' + module+'/'+ options + '/'+  CORE.lang;
            var homeURL    =  'http://' + CORE.baseURL +'/faostat-gateway/go/to/' + module + '/'+ CORE.lang;
            var searchURL  =  'http://' + CORE.baseURL +'/faostat-gateway/go/to/' + module +'/'+ options + '/'+ CORE.lang

            switch (module) {
                case 'search':
                    window.location.href = searchURL;   break;
                case 'home':
                    window.location.href = homeURL;   break;
                default:
                    window.location.href = defaultURL;  break;
            }
        },

        contentDIVMinHeight: function() {
            var additional_height = 180
            var height = $(window).height() -  ($("#fs-head").outerHeight() + $("#fs-menu-header-sticky-wrapper").outerHeight() + additional_height); // this is the footer height that is not calculated dynamically
            $("#container").css("min-height",height+"px");
        },

        show_country_alert: function() {
            alert($.i18n.prop('_country_alert'));
        }

    };

}
