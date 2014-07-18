Ext.define("CrotusValet.view.ProductDetail", {
    extend:"Ext.Container",
    requires: ['Ext.field.Text', 'Ext.field.Search'],
    alias: "widget.productdetailview",
    id:"availabilityy",
    config: {
        layout: {
            align: 'stretch',
            type: 'vbox'
        },
        cls: 'backgroundcolor',
        items: [
            {
                xtype: "toolbar",
                height: '55px',
                title: "Products",
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
                        iconCls: 'cart3',
                        cls: 'titleBar_btns',
                        text: "My Cart",
                 //       badgeText: "1",
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
                items:[
                    {
                        xtype:"spacer"
                    },
                 /*   {
                        xtype:'searchfield',
                        placeHolder: 'Search...',
                        itemId: "searchBtn"
                       *//* listeners: {
                                 scope: this,
                                 clearicontap: this.onSearchClearIconTap,
                                  keyup: this.onSearchKeyUp
                        }
*//*
                    },*/
                    {
                        xtype:"spacer"
                    }
                ]
               /* items: [
                    {
                        xtype: "button",
                        itemId: "mainButton",
                        cls: 'secondarybuttoncolor',
                        iconCls:'home'

                    }
                ]*/
            },
            {
                xtype: 'container',
                height: "100%",
                //       flex: 4,
                items: [{
                    xtype: 'list',
                    name: 'dataviewpack',
                    //     scrollable: 'horizontal',
                    itemId: "dvProduct",
                    store: "ProductMasters",
                    masked: {
                        xtype: 'loadmask',
                        message: 'Loading',
                        indicator: true
                    },
                    //loadingText: "Loading...",
                    emptyText: "<div class=\"notes-list-empty-text\">Check Internet!!!</div>",
                   /* itemTpl: ['<div class="imgcss {DataClass}"> <img class="img" src=\"{productMasterImageUrl}\" width=100% height=100%/></div>',
                        '<div id="aligntext" class="imgText" style="width: 100%; float:left; margin-top:-40px;"><div style="width: 85%; float:left;"> <p>{menu_item_name}</p></div><div style="width: 15%; padding: 0px 5px;  float:left; background-color:#E6168A; opacity: 0.8;"><b class="priceText">&euro;{price_net}</b></div></div>'*//*, '<div id="aligntext" class="imgText">&euro;{productMasterPrice}</div>'*//*
                    ].join(''),*/
                    /*itemTpl: [*//*'<div class="imgcss {DataClass}"> <img src=\"{categoryDetailImageUrl}\" width=100% height=100%/></div>',*//*
                        '<div id="aligntext" class="imgText">{menu_item_name}</div>'
                    ].join(''),*/
                    itemTpl:" <div class=\"common\"><div class=\"imageTitle\"><div class=\"\">" +
                        "<img src=\"resources/images/food_def.jpg\" height=50>" +
                        "</div></div><div class=\"priceQuant\">" +
                        "<p>Name:<b><span class=\'tproquan\'> {menu_item_name}</span></b><br/>Price:<b><span class=\"pricecolor\"> &euro;{price_net}</span></b></p></div></div>",

                    height: "100%",
                    styleHtmlContent: true,
                    layout: {
                        type: "fit"
                    },
                    inline: {
                        wrap: true
                    },
                    itemCls: 'dataPview-item',
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
                delegate: "#searchBtn",
                event: "keyup",
                fn: "onSearchButton"
            },
            {
                delegate: "#mainButton",
                event: "tap",
                fn: "onMainButton"
            },
            {
                delegate: "#dvProduct",
                event: "itemtap",
                fn: "onProductViewTap"
            },
            {
                delegate: "#btnMyCart",
                event: "tap",
                fn: "onMyCartTap"
            }
        ]
    },
    onProductViewTap: function (list, target, index, record, evt, options) {
        this.fireEvent("productCommand", list, target, index, record, evt, options);

    },
    onBackButton: function()
    {
        this.fireEvent("backToMasterViewCommand");

    },
    onMainButton:function(){
        this.fireEvent("backToMainViewCommand");
    },
    onMyCartTap:function(){
        console.log("mycart");
        this.fireEvent("myCartCommand");
    },
    onSearchButton:function(field){
        console.log('search');
        this.fireEvent("SearchKeyUp");
    }



});



