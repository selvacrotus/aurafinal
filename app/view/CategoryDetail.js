Ext.define('CrotusValet.view.CategoryDetail', {
    extend: "Ext.Container",
    alias: "widget.categorydetailview",
    id:"availabilitxx",
    config: {
        layout: {
            align: 'stretch',
            type: 'vbox'
        },
        cls: 'backgroundcolor',
        items:[
            {
                xtype: "toolbar",
                title: "Categories",
                docked: "top",
                cls: 'toolcolor',
                items: [
                    {
                        xtype: "button",
                        itemId: "backButton",
                        cls: 'backButton'
},
                    {
                        xtype: "spacer"
                    },
                    {
                        xtype: "button",
                        hidden:true,
                        cls: 'titleBar_btns',
                        iconCls: 'cart3',
                        text: "My Cart",
                   //     badgeText: "1",
                        itemId: "btnMyCart"
                    }
                ]
            },
            {
                xtype: "toolbar",
                cls: 'secondarytoolcolor',
                //  title: "My Cart",
                docked: "bottom",
                layout:{
                    type:'vbox',
                    align:'center'
                },
                items: [
                    {
                        xtype: "button",
                        cls: 'secondarybuttoncolor',
                        itemId: "backButton",
                        iconCls:'home'

                    }
                ]
            },

            {
                xtype: 'container',
                height: "100%",
         //       flex: 4,
                items: [{
                    xtype: 'dataview',
                    name: 'dataviewpack',
                    //     scrollable: 'horizontal',
                    itemId: "dvCategory",
                    store: "CategoryDetails",
                    loadingText: "Loading...",
                    emptyText: "<div class=\"notes-list-empty-text\">Check Internet!!!</div>",
                    itemTpl: ['<div class="imgcss {DataClass}"> <img src=\"{path}\" width=100% height=100%/></div>',
                        '<div id="aligntext" class="imgText">{rev_cat_name}</div>'
                    ].join(''),
                    height: "100%",
                    styleHtmlContent: true,
                    layout: {
                        type: "fit"
                    },
                    inline: {
                        wrap: true
                    },
                    itemCls: 'dataRview-item',
                    itemLength: 200
                }]
            }
        ],
        listeners: [
            {
                delegate: "#backButton",
                event: "tap",
                fn: "onBackButton"
            },
            {
                delegate: "#dvCategory",
                event: "itemtap",
                fn: "onCategoryViewTap"
            },
            {
                delegate: "#btnMyCart",
                event: "tap",
                fn: "onMyCartTap"
            }
        ]
    },
    onCategoryViewTap: function (list, target, index, record, evt, options) {
        this.fireEvent("categoryCommand",list, target, index, record, evt, options);
    },
    onBackButton: function()
    {
        this.fireEvent("backToMasterCommand");
    },
    onMyCartTap:function(){
        console.log("mycart");
        this.fireEvent("myCartCategoryCommand");
    }
});


