Ext.define("CrotusValet.view.Setting", {
        extend: "Ext.Panel",
        id: 'reservationForm',
    //    requires: ["Ext.Img"],
        alias: "widget.settingview",

        config: {
            layout : 'vbox',
            styleHtmlContent:true,
            padding:'5 5 0 5',
            cls: 'backgroundcolor',
            items: [
                {
                    xtype: 'toolbar',
                    docked: "top",
                    cls: 'toolcolor',
               //     height: 40,
               //     cls:'x-titlebar-dark',
                    title: 'Settings',
                    items: [
                        {
                            xtype: "button",
                            itemId: "backButton",
                            cls: 'backButton'
                        }
                       /* {
                            xtype: 'image',
                            dock: 'left',
                            cls:'mgmlogo',
                            src: 'resources/images/newmgmlogo.jpg',
                            margin: '5 0 0 5'
                        }*/
                    ]
                },
                {
                    xtype: "container",
                    height: "15%",
                    docked: "top"
                },
                {
                    xtype: "fieldset",
                    layout: {
                        type: 'vbox',
                        align: 'center'
                    },
                    cls:'setfieldset',
                  /* width: "95%",
                     height:"40%",*/
                    items: [

                        {
                            xtype: 'textfield',
                            placeHolder: 'Enter Reservation Id...',
                            itemId: "txtReservationId",
                            required: true,
                            name: 'title',
                            clearIcon: false,
                            width: '70%',
                            labelWidth: '170px',
                            //label: 'Reservation Id:',
                            cls:'settingform'
                            //    labelWidth: 120

                        },
                        {
                            xtype: 'textfield',
                            placeHolder: 'Enter Room No...',
                            itemId: "txtAdminId",
                            clearIcon: false,
                            required: true,
                            name: 'title',
                            width: '70%',
                           // label: 'Room No:',
                            labelWidth: '170px',
                            cls:'settingform'
                            //    labelWidth: 120
                        },
                        {
                            xtype: 'textfield',
                            placeHolder: 'Enter Reservation Name...',
                            itemId: 'psdAdminpsd',
                            clearIcon: false,
                            required: true,
                            name: 'password',
                            labelWidth: '170px',
                            width: '70%',
                           // label: 'Reservation Name:',
                            cls:'settingform'
                            //     labelWidth: 120

                        },
                        {
                            xtype: "button",
                            itemId: "btnCheckIn",
                            cls: 'titleBar_btns',
                            text:"Check-In",
                            width: "100px",
                            height: "40px",
                            margin: 15
                        }
                    ]
                }

               /* {
                  xtype:'fieldset',
                  layout: {
                        type: 'hbox',
                        align: 'center'
                    },
                    items: [
                        {
                            xtype: "button",
                            itemId: "btnCheckIn",
                            width:"140px",
                            cls: "checkin",
                            text:"CheckIn",
                            margin: 15
                        }*//*,
                        {
                            xtype: "button",
                            itemId: "btnCheckOut",
                            width:"140px",
                            cls: "checkout",
                            text:"CheckOut",
                            margin: 15
                        }*//*
                        ]
                }*/


            ],
            listeners: [
                {
                    delegate: "#btnCheckIn",
                    event: "tap",
                    fn: "onCheckInClick"
                },
                {
                    delegate: "#backButton",
                    event: "tap",
                    fn: "onBackButton"
                },
                {
                    delegate: "#btnCheckOut",
                    event: "tap",
                    fn: "onCheckOutClick"
                }
            ]
        },
    onCheckInClick: function () {
        this.fireEvent("checkInCommand");
    },
    onCheckOutClick: function () {
        this.fireEvent("checkOutCommand");
    },
    onBackButton: function()
    {
        this.fireEvent("backToMasterCommand");
    }

    });









