Ext.define('CrotusValet.view.Hotelservice', {
    // extend: 'Ext.tab.Panel',
    //  extend: 'Ext.tab.Panel',

    extend: "Ext.Container",
    alias: "widget.hotelserviceview",
    config:{

        layout : 'vbox',
        modal:false,
        cls: 'backgroundcolor',
        styleHtmlContent:true,
        padding:'5 5 0 5',
        items:[
            {
                docked: 'top',
                xtype: 'titlebar',
                height: '100px',
                width: '100%',
                cls: 'logoContainer',
                layout: {
                    type: 'vbox',
                    pack:'center',
                    align: 'center'
                },
                items: [
                    {
                        xtype: "image",
                        cls: 'logo',
                        html: "<img src='resources/images/logo.png'>"
                    }
                ]
            },
            {
                docked: 'bottom',
                xtype: 'titlebar',
                height: '65px',
                width: '100%',
                cls: 'footerLinks',
                /*layout: {
                 type: 'vbox',
                 align: 'left'
                 },*/
                //fullscreen:true,
                items: [
                    {
                        xtype: 'container',
                        cls: 'innerSubMenus',
                        layout: {
                            type: 'hbox',
                            align: 'start',
                            pack: 'start'
                        },
                        items: [
                            {
                                xtype: "button",
                                cls: 'footIcons homeIcon',
                                //iconCls: 'home',
                                //html: "<img src='resources/icons/icon11.png'>",
                                itemId: 'Hmaster'
                            }
                        ]
                    },
                    { xtype: "spacer" },
                    {
                        xtype: 'container',
                        cls: 'innerSubMenus',
                        layout: {
                            type: 'vbox',
                            align: 'center',
                            pack: 'center'
                        },
                        items: [
                            {
                                xtype: "image",
                                cls: 'footIcons',
                                html: "<img src='resources/icons/icon10.png'>",
                                itemId: 'congirence'
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        cls: 'innerSubMenus',
                        layout: {
                            type: 'vbox',
                            align: 'center',
                            pack: 'center'
                        },
                        items: [
                            {
                                xtype: "image",
                                cls: 'footIcons',
                                html: "<img src='resources/icons/icon11.png'>",
                                itemId: 'airlines'
                            }
                        ]
                    },
                    { xtype: "spacer" },
                    {
                        xtype: 'container',
                        cls: 'innerSubMenus',
                        layout: {
                            type: 'vbox',
                            align: 'end',
                            pack: 'end'
                        },
                        items: [
                            {
                                xtype: "button",
                                cls: 'footIcons subMenuIcon',
                                //iconCls: 'menuLines',
                                //html: "<img src='resources/icons/icon11.png'>",
                                itemId: 'airlines',
                                handler: function () {
                                    console.log('show');
                                    Ext.getCmp('secondarytitlebarHotel').show();
                                }
                            }
                        ]
                    }
                ]
            },
        /*    {
                docked: 'bottom',
                xtype: 'titlebar',
                height: '65px',
                width: '100%',
                cls: 'footerLinks',
                layout: {
                    type: 'vbox',
                    align: 'center'
                },
                items: [
                    {
                        xtype: "button",
                        cls: 'footIcons',
                        iconCls:'home',
                        //    html: "<img src='resources/icons/icon11.png'>",
                        itemId: 'Hmaster'

                    },
                    {
                        xtype: "image",
                        cls: 'footIcons',
                        html: "<img src='resources/icons/icon10.png'>",
                        itemId: 'congirence'
                    },
                    {
                        xtype: "image",
                        cls: 'footIcons',
                        html: "<img src='resources/icons/icon11.png'>",
                        itemId: 'airlines'
                    },
                    {
                        xtype: "button",
                        cls: 'footIcons',
                        iconCls:'menuLines',
                        //    html: "<img src='resources/icons/icon11.png'>",
                        itemId: 'airlines',
                        handler: function() {
                            console.log('show');
                            Ext.getCmp('secondarytitlebarHotel').show();
                        }
                    }
                ]
            },*/
            {
                docked: 'bottom',
                xtype: 'titlebar',
                hidden: true,
                id:"secondarytitlebarHotel",
                height: '65px',
                width: '100%',
                cls: 'introText',
                //   cls: 'footerLinks',
                layout: {
                    type: 'vbox',
                    align: 'center'
                },
                showAnimation: {
                    type: 'slideIn',
                    reveal: true,
                    direction:'up',
                    duration: 400
                },
                hideAnimation: {
                    type: 'slideOut',
                    reveal: true,
                    direction:'up',
                    duration: 400
                },
                items: [

                    {
                        xtype: 'button',
                        //       cls: 'tabbartop',
                        //      text: 'Concierge',
                        iconAlign:'left',
                        iconCls:'conciege',
                        cls: 'subMenu_btns',
                        itemId: 'btnConciergenew'

                    },
                    {
                        xtype: 'button',
                        //         cls: 'tabbartop',
                        //       text: 'Taxi',
                        iconAlign:'left',
                        iconCls:'taxi',
                        cls: 'subMenu_btns',
                        itemId: 'btnTaxi'

                    },
                    {
                        xtype: 'button',
                        iconAlign:'left',
                        iconCls:'housekeeping',
                        //            cls: 'tabbartop',
                        //          text: 'Housekeeping',
                        cls: 'subMenu_btns',
                        itemId: 'btnHouseKeeping'

                    },
                    {
                        xtype: 'button',
                        iconAlign:'left',
                        iconCls:'laundry',
                        //       cls: 'tabbartop',
                        //           text: 'Laundry',
                        cls: 'subMenu_btns',
                        itemId: 'btnLaundry'

                    }
                ]
            },



            {
                xtype: 'container',
                flex: 4,
                items: [{

                    xtype: 'dataview',
                    name: 'dataviewpack',
                    itemId: "dvHotelInfo",
                    // store: "Guests",
                    loadingText: "Loading...",
                    emptyText: "<div class=\"notes-list-empty-text\">Check Internet...</div>",
                    itemTpl: ['<div class="imgcss"> <img class="img" src=\"{ImgLogoUrl}\" width=100% height=100% /></div>',
                        '<div id="aligntext" class="imgText">{ImgName}</div>'
                    ].join(''),
                    height: "100%",
                    //          width:"100%",
                    styleHtmlContent: true,

                    layout: {
                        type: "fit"
                    },
                    inline: {
                        wrap: true
                    },
                    itemCls: 'dataCview-item'
                    //   itemCls: 'dataview-item'

                }]
            }
        ],
        listeners: [
            {
                delegate: "#dvHotelInfo",
                event: "itemtap",
                fn: "onDataViewTap"
            },
            {
                delegate: "#Hmaster",
                event: "tap",
                fn: "hMasterTap"
            },
            {
                delegate: "#btnTaxi",
                event: "tap",
                fn: "onbtnTaxiTap"
            },
            {
                delegate: "#btnConciergenew",
                event: "tap",
                fn: "onbtnConciergenewTap"
            },
            {
                delegate: "#btnHouseKeeping",
                event: "tap",
                fn: "onbtnHouseKeepingsTap"
            },
            {
                delegate: "#btnLaundry",
                event: "tap",
                fn: "onbtnLaundryTap"
            }
        ]
    },
    onDataViewTap: function (list, target, index, record, evt, options) {

        this.fireEvent("hotelViewCommand",list, target, index, record, evt, options);
    },
    hMasterTap:function(){
        this.fireEvent("hMasterCommand");
    },
    onbtnTaxiTap:function(){
        console.log('btntaxi');
        this.fireEvent("taxiCommand");
    },
    onbtnConciergenewTap:function(){
        this.fireEvent("conciergenewCommand");
    },
    onbtnHouseKeepingsTap:function(){
        this.fireEvent("housekeepingCommand");
    },
    onbtnLaundryTap:function(){
        this.fireEvent("laundryCommand");
    }
});









///////////////////////////////////////////////////////
//
//  Ext.define('CrotusValet.view.Hotelservice', {
//    // extend: 'Ext.tab.Panel',
//    //  extend: 'Ext.tab.Panel',
//
//    extend: "Ext.Container",
//    alias: "widget.hotelserviceview",
//    config:{
//
//        layout : 'vbox',
//        modal:false,
//        cls: 'backgroundcolor',
//        styleHtmlContent:true,
//        padding:'5 5 0 5',
//        items:[
//
//
//            {
//                xtype: 'container',
//          //      cls: 'tabbartop',
//                //      cls: 'subMenu',
//                // flex: 2,
//                layout: {
//                    type: 'vbox'
//                    // align: 'end'
//                },
//            //    width:120,
//
//                items: [
//                    {
//                        xtype: 'segmentedbutton',
//                        allowDepress: false,
//                        items: [{
//                    //      text: 'Show',
//                            iconCls: 'list',
//                            cls: 'menuLines',
//                            id:'show',
//                            handler: function() {
//                                console.log('show');
//                                Ext.getCmp('containertab').show();
//                                Ext.getCmp('show').hide();
//                                Ext.getCmp('hide').show();
//                               /* Ext.Viewport.add(Ext.ComponentQuery.query('#popupMenu')[0]);
//                                Ext.ComponentQuery.query('#popupMenu')[0].show();*/
//                            }
//                        },{
//                    //        text: 'Hide',
//                            iconCls: 'list',
//                            cls: 'menuLines',
//                            id:'hide',
//                            hidden: true,
//                            handler: function() {
//                                Ext.getCmp('hide').hide();
//                                Ext.getCmp('show').show();
//                                Ext.getCmp('containertab').hide();
//
//                            //    Ext.ComponentQuery.query('#popupMenu')[0].hide();
//                            }
//                        }]
//
//                    }
//                ]
//            },
//
//
//
//         /*   {
//                xtype: 'container',
//                //    html:'<div class="slides"> <ul> <!-- slides --> <li><img src="resources/images/pic1.jpg" alt="image01" />   <div>Promo text #1</div> </li>  <li><img src="resources/images/pic2.jpg" alt="image02" />  <div>Promo text #2</div></li>    <li><img src="resources/images/pic3.jpg" alt="image03" />  <div>Promo text #3</div>  </li> <li><img src="resources/images/pic4.jpg" alt="image04" /> <div>Promo text #4</div> </li></ul></div>',
//                height: '30%',
//                //     cls:'banner',
//                // html:'sadfsadsadsadsadsadsasadsadsadsad'
//                //html:'<div class="slides" > <ul> <!-- slides --> <li><img  src="resources/images/pic1.jpg" alt="image01" />   <div>Guest Information</div></br><div style="color:#333; font-size:12px; margin-left:280px">This app provides you a scope to know and utilise the facilities in our resort.</div> </li>  <li><img  src="resources/images/pic2.jpg" alt="image02" />  <div>Room Service</div></br><div style="color:#333; font-size:12px; margin-left:280px">Our resort is located in a fantastic environment nearer to sea.</div></li>    <li><img  src="resources/images/pic3.jpg" alt="image03" />  <div>Book Now</div></br> <div style="color:#333; font-size:12px; margin-left:280px">Very attractive and competitive rate structure have been followed to suit your budget for each apartment type.</div> </li> <li><img  src="resources/images/pic4.jpg" alt="image04" /> <div>About Us</div></br><div style="color:#333; font-size:12px; margin-left:280px">Resort will have security service always round the clock.</div></li></ul></div>',
//                //     html:'<div class="slides" > <ul> <!-- slides --> <li><img  src="resources/images/pic1.jpg" alt="image01" />   <div>Guest Information</div></br><div style="color:#333; font-size:12px; margin-left:280px">This app provides you a scope to know and utilise the facilities in our resort.</div> </li>  <li><img  src="resources/images/pic2.jpg" alt="image02" />  <div>Room Service</div></br><div style="color:#333; font-size:12px; margin-left:280px">Our resort is located in a fantastic environment nearer to sea.</div></li>    <li><img  src="resources/images/pic3.jpg" alt="image03" />  <div>Book Now</div></br> <div style="color:#333; font-size:12px; margin-left:280px">Very attractive and competitive rate structure have been followed to suit your budget for each apartment type.</div> </li> <li><img  src="resources/images/pic4.jpg" alt="image04" /> <div>About Us</div></br><div style="color:#333; font-size:12px; margin-left:280px">Resort will have security service always round the clock.</div></li></ul></div>',
//
//                layout: {
//                    type: 'hbox',
//                    align: 'end',
//                    pack: 'end'
//                },
//                //   flex: 1,
//                items:[
//                    {
//                        xtype:'label',
//                        //     docked:'left',
//                        //    cls:'imgSlide',
//                        //   html:'gkuj'
//                        html:'<div class="slides" > <ul> <!-- slides --> <li><img  src="resources/images/pic1.jpg" alt="image01" />   <div><b>Guest Information</b></div></br><div style="color:#333; font-size:12px; margin-left:280px">This app provides you a scope to know and utilise the facilities in our resort.</div> </li>  <li><img  src="resources/images/pic2.jpg" alt="image02" />  <div><b>Room Service</b></div></br><div style="color:#333; font-size:12px; margin-left:280px">Our resort is located in a fantastic environment nearer to sea.</div></li>    <li><img  src="resources/images/pic3.jpg" alt="image03" />  <div><b>Book Now</b></div></br> <div style="color:#333; font-size:12px; margin-left:280px">Very attractive to  your budget for each apartment type.</div> </li> <li><img  src="resources/images/pic4.jpg" alt="image04" /> <div><b>About Us</b></div></br><div style="color:#333; font-size:12px; margin-left:280px">Resort will have security service always round the clock.</div></li></ul></div>'
//                    },
//                    {
//                        xtype: 'button',
//                        cls: 'conceirgeBtn',
//                        text: 'CONCIERGE',
//                        iconCls: 'mobile',
//                        itemId: 'btnConcierge'
//
//                    }
//                ]
//            },*/
//            {
//                xtype: 'container',
//          //      cls: 'tabbartop',
//                hidden: true,
//
//                showAnimation: {
//                    type: 'slideIn',
//                    reveal: true,
//                    direction:'right',
//                    duration: 400
//                },
//                hideAnimation: {
//                    type: 'slideOut',
//                    reveal: true,
//                    direction:'left',
//                    duration: 400
//                },
//                id:'containertab',
//                cls: 'subMenu',
//                // flex: 2,
//                layout: {
//                    type: 'vbox'
//                     // align: 'end'
//                },
//               width:"40%",
//               height:'100%',
//
//                items: [
///*
//
//                    {
//                        xtype: 'button',
//                        iconCls: 'list',
//                        iconMask: true,
//                        modal: true,
//                        hideOnMaskTap: true,
//                        handler: function() {
//                            var menu = Ext.create('Ext.Menu', {
//                                items: [
//
//                                    {
//                                        xtype: 'button',
//                                        text: 'Concierge',
//                                        cls: 'subMenu_btns',
//                                        itemId: 'btnConciergenew',
//                                        handler: function() {
//                                            Ext.Viewport.hideMenu('left');
//
//                                        }
//                                    },
//                                    {
//                                        xtype: 'button',
//                                        text: 'Taxi',
//                                        cls: 'subMenu_btns',
//                                        itemId: 'btnTaxi',
//                                        handler: function() {
//                                            Ext.Viewport.hideMenu('left');
//
//                                        }
//                                    },
//                                    {
//                                        xtype: 'button',
//                                        text: 'Housekeeping',
//                                        cls: 'subMenu_btns',
//                                        itemId: 'btnHouseKeeping',
//                                        handler: function() {
//                                            Ext.Viewport.hideMenu('left');
//
//                                        }
//                                    },
//                                    {
//                                        xtype: 'button',
//                                        text: 'Laundry',
//                                        cls: 'subMenu_btns',
//                                        itemId: 'btnLaundry',
//                                        handler: function() {
//                                            Ext.Viewport.hideMenu('left');
//
//                                        }
//                                    }
//                                ]
//                            });
//
//                            Ext.Viewport.setMenu(menu, {
//                                side: 'left',
//                                reveal: true
//                            });
//
//                            Ext.Viewport.showMenu('left');
//
//                            //       Ext.Viewport.toggleMenu('left');
//                        }
//                    }
//
//
//*/
//
//
//                            {
//                               xtype: 'button',
//                         //       cls: 'tabbartop',
//                               text: 'Concierge',
//                                iconAlign:'left',
//                                iconCls:'conciege',
//                               cls: 'subMenu_btns',
//                                itemId: 'btnConciergenew',
//                                handler:function(){
//                                    Ext.getCmp('containertab').hide();
//                                    Ext.getCmp('hide').hide();
//                                    Ext.getCmp('show').show();
//                                }
//                            },
//                            {
//                                xtype: 'button',
//                       //         cls: 'tabbartop',
//                                text: 'Taxi',
//                                iconAlign:'left',
//                                iconCls:'taxi',
//                                cls: 'subMenu_btns',
//                                itemId: 'btnTaxi',
//                                handler:function(){
//                                    Ext.getCmp('containertab').hide();
//                                    Ext.getCmp('hide').hide();
//                                    Ext.getCmp('show').show();
//                                }
//                            },
//                            {
//                                xtype: 'button',
//                                iconAlign:'left',
//                                iconCls:'housekeeping',
//                    //            cls: 'tabbartop',
//                                text: 'Housekeeping',
//                                cls: 'subMenu_btns',
//                                itemId: 'btnHouseKeeping',
//                                handler:function(){
//                                    Ext.getCmp('containertab').hide();
//                                    Ext.getCmp('hide').hide();
//                                    Ext.getCmp('show').show();
//                                }
//                            },
//                          {
//                               xtype: 'button',
//                              iconAlign:'left',
//                              iconCls:'laundry',
//                        //       cls: 'tabbartop',
//                               text: 'Laundry',
//                               cls: 'subMenu_btns',
//                                itemId: 'btnLaundry',
//                              handler:function(){
//                                  Ext.getCmp('containertab').hide();
//                                  Ext.getCmp('hide').hide();
//                                  Ext.getCmp('show').show();
//                              }
//                            }
//                ]
//            },
//
//            {
//                xtype: 'container',
//                flex: 4,
//                items: [{
//
//                    xtype: 'dataview',
//                    name: 'dataviewpack',
//                    itemId: "dvHotelInfo",
//                    // store: "Guests",
//                    loadingText: "Loading...",
//                    emptyText: "<div class=\"notes-list-empty-text\">Check Internet...</div>",
//                    itemTpl: ['<div class="imgcss"> <img class="img" src=\"{ImgLogoUrl}\" width=100% height=100% /></div>',
//                        '<div id="aligntext" class="imgText">{ImgName}</div>'
//                    ].join(''),
//                    height: "100%",
//                    //          width:"100%",
//                    styleHtmlContent: true,
//
//                    layout: {
//                        type: "fit"
//                    },
//                    inline: {
//                        wrap: true
//                    },
//                    itemCls: 'dataCview-item'
//                 //   itemCls: 'dataview-item'
//
//                }]
//            }
//        ],
//        listeners: [
//            {
//                delegate: "#dvHotelInfo",
//                event: "itemtap",
//                fn: "onDataViewTap"
//            },
//            {
//                delegate: "#btnTaxi",
//                event: "tap",
//                fn: "onbtnTaxiTap"
//            },
//            {
//                delegate: "#btnConciergenew",
//                event: "tap",
//                fn: "onbtnConciergenewTap"
//            },
//            {
//                delegate: "#btnHouseKeeping",
//                event: "tap",
//                fn: "onbtnHouseKeepingsTap"
//            },
//            {
//                delegate: "#btnLaundry",
//                event: "tap",
//                fn: "onbtnLaundryTap"
//            }
//        ]
//    },
//    onDataViewTap: function (list, target, index, record, evt, options) {
//        console.log('dtaview');
//        Ext.getCmp('hide').hide();
//        Ext.getCmp('show').show();
//        Ext.getCmp('containertab').hide();
//        this.fireEvent("hotelViewCommand",list, target, index, record, evt, options);
//    },
//    onbtnTaxiTap:function(){
//        console.log('btntaxi');
//        this.fireEvent("taxiCommand");
//    },
//    onbtnConciergenewTap:function(){
//        this.fireEvent("conciergenewCommand");
//    },
//    onbtnHouseKeepingsTap:function(){
//        this.fireEvent("housekeepingCommand");
//    },
//    onbtnLaundryTap:function(){
//        this.fireEvent("laundryCommand");
//    }
//});
//
//
  //////////////////////////////////////////////////////////////