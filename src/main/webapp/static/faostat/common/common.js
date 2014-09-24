
var repository = '//fenixapps.fao.org/repository/js/';

require.config({

    baseUrl: '//168.202.28.214:8080',
    paths: {
        'jquery'               : repository + 'jquery/1.10.2/jquery-1.10.2.min',
        'jquery.i18n'          : repository + 'jquery/1.0.9/jquery.i18n.properties-min',
        'jquery.powertip.min'  : repository + 'jquery.power.tip/1.1.0/jquery.powertip.min',
        'jquery.sticky'        : repository + 'stickyjs/1.0/jquery.sticky',
        'jquery.history'       : repository + 'history.js/1.8b2/html4+html5/jquery.history',
        'jquery.scrollUp.min'  : repository + 'scrollup/2.3.3/js/jquery.scrollUp.min',
        'jquery-ui'            : repository + 'jquery-ui/1.10.3/jquery-ui-1.10.3.custom.min',

         // TODO: move it from faostat-download
        'jquery.chromatable'    : 'faostat-download-js/js/chromatable/jquery.chromatable',
        'jquery.mousewheel'     : 'faostat-download-js/js/chromatable/jquery.mousewheel-3.0.6.pack',
        'jquery.fancybox'       : 'faostat-download-js/js/chromatable/jquery.fancybox',

        // jQRangeSlider
        'jquery.rangeslider' : repository + 'jquery.rangeslider/5.1.1/jQRangeSlider-min',

        'bootstrap': repository + 'bootstrap/3.2/js/bootstrap.min',
        'chosen': repository + 'chosen/1.0.0/chosen.jquery.min',
        'highcharts': repository + 'highcharts/4.0.4/js/highcharts',
        'highcharts_exporting' : repository + 'highcharts/4.0.4/js/modules/exporting',

        'mustache': '//cdnjs.cloudflare.com/ajax/libs/mustache.js/0.8.1/mustache',

        // commmons requirejs libraries
        'text': 'faostat-gateway/static/faostat/common/libs/text',
        'i18n': 'faostat-gateway/static/faostat/common/libs/i18n',

        // jqwidgets
        'jqxcore'           : repository + 'jqwidgets/2.8.3/jqxcore',
        'jqxtabs'           : repository + 'jqwidgets/2.8.3/jqxtabs',
        'jqxscrollbar'      : repository + 'jqwidgets/2.8.3/jqxscrollbar',
        'jqxpanel'          : repository + 'jqwidgets/2.8.3/jqxpanel',
        'jqxtree'           : repository + 'jqwidgets/2.8.3/jqxtree',
        'jqxexpander'       : repository + 'jqwidgets/2.8.3/jqxexpander',
        'jqxbuttons'        : repository + 'jqwidgets/2.8.3/jqxbuttons',
        'jqxlistbox'        : repository + 'jqwidgets/2.8.3/jqxlistbox',
        'jqxdropdownlist'   : repository + 'jqwidgets/2.8.3/jqxdropdownlist',
        'jqxcombobox'       : repository + 'jqwidgets/2.8.3/jqxcombobox',
        'jqxcheckbox'       : repository + 'jqwidgets/2.8.3/jqxcheckbox',
        'jqxdata'           : repository + 'jqwidgets/2.8.3/jqxdata',
        'jqxradiobutton'    : repository + 'jqwidgets/2.8.3/jqxradiobutton',
        'jqxnumberinput'    : repository + 'jqwidgets/2.8.3/jqxnumberinput',
        'jqxgrid'           : repository + 'jqwidgets/2.8.3/jqxgrid',
        'jqxmenu'           : repository + 'jqwidgets/2.8.3/jqxmenu',
        'jqxgrid.filter'    : repository + 'jqwidgets/2.8.3/jqxgrid.filter',
        'jqxgrid.grouping'  : repository + 'jqwidgets/2.8.3/jqxgrid.grouping',
        'jqxgrid.columnsresize' : repository + 'jqwidgets/2.8.3/jqxgrid.columnsresize',
        'jqxgrid.sort'      : repository + 'jqwidgets/2.8.3/jqxgrid.sort',
        'jqxgrid.selection' : repository + 'jqwidgets/2.8.3/jqxgrid.selection',
        'jqxgrid.export'    : repository + 'jqwidgets/2.8.3/jqxgrid.export',
        'jqxdata.export'    : repository + 'jqwidgets/2.8.3/jqxdata.export',

        // jshashtable
        'jshashtable'       : 'faostat-gateway/static/faostat/common/libs/jshashtable',


        // Gateway
        'FAOSTAT3': 'faostat-gateway/static/faostat/faostat-gateway-js/core',
        'FAOSTAT3_gateway_ga': 'faostat-gateway/static/faostat/faostat-gateway-js/faostat-ga',
        'FAOSTAT3_gateway_js': 'faostat-gateway/static/faostat/faostat-gateway-js/faostat-gateway-js',
        'FENIXChartsLibrary' : repository + 'FENIXChartsLibrary/0.4/FENIXChartsLibrary',

        // Home
        'HOME'                          : 'faostat-gateway/static/faostat/faostat-home-js/faostat-home',
        'HOME_faostat-home-charts'           : 'faostat-gateway/static/faostat/faostat-home-js/faostat-home-charts',
        'HOME_faostat-home-database-updates' : 'faostat-gateway/static/faostat/faostat-home-js/database-updates',


        // Browse
        'BROWSE'                          : 'faostat-browse-js/js/faostat-browse',
        // TODO: that's a shared library
        'BROWSE_jshashtable'                : "faostat-browse-js/js/jshashtable",
        'BROWSE_google-analytics-manager'   :"faostat-browse-js/js/google-analytics-manager",
        'BROWSE_faostat-browse-tree'        :"faostat-browse-js/js/faostat-browse-tree",
        'BROWSE_UIBuilder'                  :"faostat-browse-js/js/UIBuilder",
        'BROWSE_UIBuilderGrowthRate'        :"faostat-browse-js/js/UIBuilderGrowthRate",
        'BROWSE_UIBuilderTable'             :"faostat-browse-js/js/UIBuilderTable",
        'BROWSE_UIBuilderMap'               :"faostat-browse-js/js/UIBuilderMap",
        'BROWSE_UIBuilderChart'             :"faostat-browse-js/js/UIBuilderChart",
        'BROWSE_UIBuilderObjectsStructure'  :"faostat-browse-js/js/UIBuilderObjectsStructure",
        'BROWSE_UIBuilderSelectors'         :"faostat-browse-js/js/UIBuilderSelectors",
        'BROWSE_I18NInjector'               :"faostat-browse-js/js/I18NInjector",
        'BROWSE_UIBuilderByCountry'         :"faostat-browse-js/js/UIBuilderByCountry",
        'BROWSE_UIBuilderRankings'          :"faostat-browse-js/js/UIBuilderRankings",
        'BROWSE_UIBuilderTabSelector'       :"faostat-browse-js/js/UIBuilderTabSelector",
        'BROWSE_Export'                     :"faostat-browse-js/js/Export",
        'BROWSE_FAOSTATBrowseUtils'         :"faostat-browse-js/js/FAOSTATBrowseUtils",


        // Compare
        'COMPARE'                          : 'faostat-compare-js/js/faostat-compare',
        // TODO: that's a shared library
        'COMPARE_jshashtable'              : "faostat-compare-js/js/jshashtable",
        'COMPARE_CompareI18N'              : "faostat-compare-js/js/CompareI18N",
        'COMPARE_CompareI18NInjector'              : "faostat-compare-js/js/CompareI18NInjector",
        'COMPARE_CompareUIBuilderSelectors'              : "faostat-compare-js/js/CompareUIBuilderSelectors",
        'COMPARE_CompareUIBuilderChart'              : "faostat-compare-js/js/CompareUIBuilderChart",
        'COMPARE_CompareUIBuilderTable'              : "faostat-compare-js/js/CompareUIBuilderTable",
        'COMPARE_CompareUIBuilderMap'              : "faostat-compare-js/js/CompareUIBuilderMap",
        'COMPARE_CompareUIUtils'              : "faostat-compare-js/js/CompareUIUtils",
        'COMPARE_CompareUtils'              : "faostat-compare-js/js/CompareUtils",
        'COMPARE_compare-google-analytics-manager'              : "faostat-compare-js/js/compare-google-analytics-manager",

        // Search
        'SEARCH'                                            : 'faostat-search-js/js/faostat-search',
        'SEARCH_faostat-search-export'                      : "faostat-search-js/js/faostat-search-export",
        'SEARCH_faostat-search-google-analytics-manager'    : "faostat-search-js/js/faostat-search-google-analytics-manager",
        'SEARCH_faostat-search-single-result'               : "faostat-search-js/js/faostat-search-single-result",

        // Methods and Standards
        'MES' : 'mes/js/mes',
        'MES_google-analytics-manager' : 'mes/js/google-analytics-manager',


        // Analysis
        'ANALYSIS_TILE_MANAGER' : 'analysis/js/tiles-manager/tiles-manager',
        'ANALYSIS_F3_CHART'     : 'analysis/js/libs/commons/f3-chart',
        'ANALYSIS_GHG_QA_QC'    : 'analysis/js/ghg-qa-qc/ghg-qa-qc',
        'ANALYSIS_GHG_OVERVIEW' : 'analysis/js/ghg-overview/ghg-overview',
        'F3_CHART'              : 'analysis/js/commons/f3-chart',
        'F3_GHG_TABLE'          : 'analysis/js/commons/f3-ghg-table'
    },

    shim: {
        'bootstrap': { deps :['jquery'] },
        'chosen': { deps :['jquery'] },

        'underscore': {
            deps :['jquery'],
            exports: '_'
        },

        'jquery.powertip.min': { deps :['jquery'] },
        'jquery.sticky': { deps :['jquery'] },
        'jquery.i18n': { deps :['jquery'] },
        'jquery.scrollUp.min': { deps :['jquery'] },
        'jquery.history': { deps :['jquery'] },
        'jquery.rangeslider': { deps :['jquery', 'jquery-ui']},
        'jquery-ui': { deps :['jquery'] },

        'highcharts': { deps :['jquery'] },
        'highcharts_exporting': { deps :['highcharts'] },
        'FENIXChartsLibrary': { deps :['highcharts'] },

        // jqwidget
        'jqxtabs': { deps :['jqxcore'] },
        'jqxscrollbar': { deps :['jqxcore'] },
        'jqxpanel': { deps :['jqxcore'] },
        'jqxtree': { deps :['jqxcore'] },
        'jqxexpander': { deps :['jqxcore'] },
        'jqxbuttons': { deps :['jqxcore'] },
        'jqxlistbox': { deps :['jqxcore'] },
        'jqxdropdownlist': { deps :['jqxcore'] },
        'jqxcombobox': { deps :['jqxcore'] },
        "jqxcheckbox": { deps :['jqxcore'] },
        'jqxdata': { deps :['jqxcore'] },
        'jqxradiobutton': { deps :['jqxcore'] },
        'jqxnumberinput': { deps :['jqxcore'] },
        'jqxgrid': { deps :['jqxcore'] },
        'jqxmenu': { deps :['jqxcore'] },
        'jqxgrid.filter': { deps : ['jqxcore', 'jqxgrid'] },
        'jqxgrid.grouping': { deps : ['jqxcore', 'jqxgrid'] },
        'jqxgrid.columnsresize': { deps : ['jqxcore', 'jqxgrid'] },
        'jqxgrid.sort': { deps : ['jqxcore', 'jqxgrid'] },
        'jqxgrid.selection': { deps :['jqxcore', 'jqxgrid' ] },
        'jqxgrid.export': { deps : ['jqxcore', 'jqxgrid'] },
        'jqxdata.export': { deps :['jqxcore', 'jqxdata'] },

        'FAOSTAT3': { deps :[
            'jquery',
            'jquery.i18n',
            'jquery.powertip.min',
            'jquery.history',
            'jquery.scrollUp.min',
            'jquery.sticky'
        ]},

        'HOME': { deps :[
            'FAOSTAT3',
            // highcharts
            'highcharts',
            'highcharts_exporting',
            'HOME_faostat-home-charts',
            'HOME_faostat-home-database-updates'
        ]},

        'BROWSE': { deps :[
            'FAOSTAT3',

            // jqwidgets
            'jqxcore',
            'jqxtabs',
            'jqxscrollbar',
            'jqxpanel',
            'jqxtree',
            'jqxexpander',
            'jqxbuttons',
            'jqxlistbox',
            'jqxdropdownlist',
            'jqxcombobox',

            // highcharts
            'highcharts',
            'highcharts_exporting',
            'FENIXChartsLibrary',

            // browse
            'BROWSE_jshashtable',
            'BROWSE_google-analytics-manager',
            'BROWSE_faostat-browse-tree',
            'BROWSE_UIBuilder',
            'BROWSE_UIBuilderGrowthRate',
            'BROWSE_UIBuilderTable',
            'BROWSE_UIBuilderMap',
            'BROWSE_UIBuilderChart',
            'BROWSE_UIBuilderObjectsStructure',
            'BROWSE_UIBuilderSelectors',
            'BROWSE_I18NInjector',
            'BROWSE_UIBuilderByCountry',
            'BROWSE_UIBuilderRankings',
            'BROWSE_UIBuilderTabSelector',
            'BROWSE_Export',
            'BROWSE_FAOSTATBrowseUtils'
        ]},

        'SEARCH': { deps :[
            'FAOSTAT3',
            'jquery-ui',
            'jquery.rangeslider',

            // jqwidgets
            'jqxcore',
            'jqxtabs',
            'jqxscrollbar',
            'jqxpanel',
            'jqxtree',
            'jqxexpander',
            'jqxbuttons',
            'jqxlistbox',
            'jqxdropdownlist',
            'jqxcombobox',

            'SEARCH_faostat-search-export',
            'SEARCH_faostat-search-google-analytics-manager',
            'SEARCH_faostat-search-single-result'
        ]},

        'download': { deps :[

        ]},

        'COMPARE': { deps :[
            'FAOSTAT3',
            'jquery-ui',
            'jquery.rangeslider',

            // highcharts
            'highcharts',
            'highcharts_exporting',
            'FENIXChartsLibrary',

             // jqwidgets
            'jqxcore',
            'jqxtabs',
            'jqxscrollbar',
            'jqxpanel',
            'jqxtree',
            'jqxexpander',
            'jqxbuttons',
            'jqxlistbox',
            'jqxdropdownlist',
            'jqxcombobox',
            "jqxcheckbox",
            'jqxdata',
            'jqxradiobutton',
            'jqxnumberinput',
            'jqxgrid',
            'jqxmenu',
            'jqxgrid.filter',
            'jqxgrid.grouping',
            'jqxgrid.columnsresize',
            'jqxgrid.sort',
            'jqxgrid.selection',
            'jqxgrid.export',
            'jqxdata.export',

            'COMPARE_jshashtable',
            'COMPARE_CompareI18N',
            'COMPARE_CompareI18NInjector',
            'COMPARE_CompareUIBuilderSelectors',
            'COMPARE_CompareUIBuilderChart',
            'COMPARE_CompareUIBuilderTable',
            'COMPARE_CompareUIBuilderMap',
            'COMPARE_CompareUtils',
            'COMPARE_compare-google-analytics-manager',
            'COMPARE_CompareUIUtils'
        ]},


        'MES': { deps :[
            // jqwidgets
            'jqxcore',
            'jqxtabs',
            'jqxscrollbar',
            'jqxpanel',
            'jqxtree',
            'jqxexpander',
            'jqxbuttons',
            'jqxlistbox',
            'jqxdropdownlist',
            'jqxcombobox',
            'jqxdata',

            'MES_google-analytics-manager'

        ]}


    }

});