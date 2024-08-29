jQuery("#simulation")
  .on("click", ".s-8cdcfb72-edd0-413e-84f5-a1043e241885 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    event.data = data;
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Button_2")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimNot",
                "parameter": [ {
                  "action": "jimRegExp",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-Input_8",
                    "property": "jimGetValue"
                  },"[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-8cdcfb72-edd0-413e-84f5-a1043e241885 #s-Input_8 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#FF22CD",
                      "border-right-color": "#FF22CD",
                      "border-bottom-color": "#FF22CD",
                      "border-left-color": "#FF22CD"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Rectangle_12" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Paragraph_11" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimRegExp",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_8",
                  "property": "jimGetValue"
                },"[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-8cdcfb72-edd0-413e-84f5-a1043e241885 #s-Input_8 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#0F032F",
                      "border-right-color": "#0F032F",
                      "border-bottom-color": "#0F032F",
                      "border-left-color": "#0F032F"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Rectangle_12" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Paragraph_11" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "Email" ],
                    "value": "ok"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_7",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-8cdcfb72-edd0-413e-84f5-a1043e241885 #s-Input_7 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#FF22CD",
                      "border-right-color": "#FF22CD",
                      "border-bottom-color": "#FF22CD",
                      "border-left-color": "#FF22CD"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Rectangle_11" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Paragraph_10" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-8cdcfb72-edd0-413e-84f5-a1043e241885 #s-Input_7 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#0F032F",
                      "border-right-color": "#0F032F",
                      "border-bottom-color": "#0F032F",
                      "border-left-color": "#0F032F"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Rectangle_11" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Paragraph_10" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "Name" ],
                    "value": "ok"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "parallel",
          "delay": 0
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_6",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-8cdcfb72-edd0-413e-84f5-a1043e241885 #s-Input_6 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#FF22CD",
                      "border-right-color": "#FF22CD",
                      "border-bottom-color": "#FF22CD",
                      "border-left-color": "#FF22CD"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Rectangle_10" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Paragraph_9" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-8cdcfb72-edd0-413e-84f5-a1043e241885 #s-Input_6 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#0F032F",
                      "border-right-color": "#0F032F",
                      "border-bottom-color": "#0F032F",
                      "border-left-color": "#0F032F"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Rectangle_10" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Paragraph_9" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "Last name" ],
                    "value": "ok"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "parallel",
          "delay": 0
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_5",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-8cdcfb72-edd0-413e-84f5-a1043e241885 #s-Input_5 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#FF22CD",
                      "border-right-color": "#FF22CD",
                      "border-bottom-color": "#FF22CD",
                      "border-left-color": "#FF22CD"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Rectangle_9" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Paragraph_8" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-8cdcfb72-edd0-413e-84f5-a1043e241885 #s-Input_5 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#0F032F",
                      "border-right-color": "#0F032F",
                      "border-bottom-color": "#0F032F",
                      "border-left-color": "#0F032F"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Rectangle_9" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Paragraph_8" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "Address" ],
                    "value": "ok"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "parallel",
          "delay": 0
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimAnd",
                "parameter": [ {
                  "action": "jimEquals",
                  "parameter": [ {
                    "datatype": "variable",
                    "element": "Email"
                  },"ok" ]
                },{
                  "action": "jimAnd",
                  "parameter": [ {
                    "action": "jimEquals",
                    "parameter": [ {
                      "datatype": "variable",
                      "element": "Name"
                    },"ok" ]
                  },{
                    "action": "jimAnd",
                    "parameter": [ {
                      "action": "jimEquals",
                      "parameter": [ {
                        "datatype": "variable",
                        "element": "Last name"
                      },"ok" ]
                    },{
                      "action": "jimEquals",
                      "parameter": [ {
                        "datatype": "variable",
                        "element": "Address"
                      },"ok" ]
                    } ]
                  } ]
                } ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Group_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_7","#s-Input_5","#s-Input_6","#s-Input_8","#s-Input_1" ],
                    "value": ""
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-8cdcfb72-edd0-413e-84f5-a1043e241885 #s-Input_7 > .borderLayer",
                  "#s-8cdcfb72-edd0-413e-84f5-a1043e241885 #s-Input_5 > .borderLayer",
                  "#s-8cdcfb72-edd0-413e-84f5-a1043e241885 #s-Input_6 > .borderLayer",
                  "#s-8cdcfb72-edd0-413e-84f5-a1043e241885 #s-Input_8 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#0F032F",
                      "border-right-color": "#0F032F",
                      "border-bottom-color": "#0F032F",
                      "border-left-color": "#0F032F"
                    }
                  },{
                    "target": [ "#s-8cdcfb72-edd0-413e-84f5-a1043e241885 #s-Input_1 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#0F032F",
                      "border-right-color": "#0F032F",
                      "border-bottom-color": "#0F032F",
                      "border-left-color": "#0F032F"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Rectangle_11","#s-Rectangle_9","#s-Rectangle_10","#s-Rectangle_12","#s-Rectangle_3" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Group_1" ]
                  },
                  "exectype": "timed",
                  "delay": 5000
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#mi-ffb0eb85-Hotspot_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/45c139f8-5ae6-4793-9c27-f5c45b9057dc"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#mi-f2657558-Text_cell_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/45c139f8-5ae6-4793-9c27-f5c45b9057dc"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#mi-f2657558-Text_cell_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "Scroll schedule" ],
                    "value": "ok"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/45c139f8-5ae6-4793-9c27-f5c45b9057dc"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#mi-f2657558-Text_cell_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "Scroll speakers" ],
                    "value": "ok"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/45c139f8-5ae6-4793-9c27-f5c45b9057dc"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#mi-f2657558-Text_cell_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "Scroll workshops" ],
                    "value": "ok"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/45c139f8-5ae6-4793-9c27-f5c45b9057dc"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#mi-f2657558-Button_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/8cdcfb72-edd0-413e-84f5-a1043e241885"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    }
  })
  .on("click", ".s-8cdcfb72-edd0-413e-84f5-a1043e241885 .toggle", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    event.data = data;
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Button_2")) {
      if(jFirer.data("jimHasToggle")) {
        jFirer.removeData("jimHasToggle");
        jEvent.undoCases(jFirer);
      } else {
        jFirer.data("jimHasToggle", true);
        event.backupState = true;
        event.target = jFirer;
        cases = [
          {
            "blocks": [
              {
                "actions": [
                  {
                    "action": "jimChangeStyle",
                    "parameter": [ {
                      "target": [ "#s-8cdcfb72-edd0-413e-84f5-a1043e241885 #s-Button_2 > .backgroundLayer > .colorLayer" ],
                      "attributes": {
                        "background-color": "#424141"
                      }
                    },{
                      "effect": {
                        "type": "none",
                        "easing": "swing",
                        "duration": 100
                      }
                    } ],
                    "exectype": "serial",
                    "delay": 0
                  },
                  {
                    "action": "jimChangeStyle",
                    "parameter": [ {
                      "target": [ "#s-8cdcfb72-edd0-413e-84f5-a1043e241885 #s-Button_2 > .backgroundLayer > .colorLayer" ],
                      "attributes": {
                        "background-color": "#222222"
                      }
                    } ],
                    "exectype": "timed",
                    "delay": 200
                  }
                ]
              }
            ],
            "exectype": "serial",
            "delay": 0
          },
          {
            "blocks": [
              {
                "actions": [
                  {
                    "action": "jimShow",
                    "parameter": {
                      "target": [ "#s-Rectangle_1" ],
                      "effect": {
                        "type": "fade",
                        "easing": "swing",
                        "duration": 200
                      }
                    },
                    "exectype": "serial",
                    "delay": 0
                  }
                ]
              }
            ],
            "exectype": "parallel",
            "delay": 0
          }
        ];
        jEvent.launchCases(cases);
      }
    }
  })
  .on("pageload", ".s-8cdcfb72-edd0-413e-84f5-a1043e241885 .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    event.data = data;
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Path_37")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimRotate",
                  "parameter": {
                    "target": [ "#s-Path_37" ],
                    "angle": {
                      "type": "rotateto",
                      "value": "9000.0"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 18000
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimRotate",
                  "parameter": {
                    "target": [ "#s-Path_37" ],
                    "angle": {
                      "type": "rotateto",
                      "value": "9000.0"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 18000
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimRotate",
                  "parameter": {
                    "target": [ "#s-Path_37" ],
                    "angle": {
                      "type": "rotateto",
                      "value": "9000.0"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 18000
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimRotate",
                  "parameter": {
                    "target": [ "#s-Path_37" ],
                    "angle": {
                      "type": "rotateto",
                      "value": "9000.0"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 18000
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimRotate",
                  "parameter": {
                    "target": [ "#s-Path_37" ],
                    "angle": {
                      "type": "rotateto",
                      "value": "9000.0"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 18000
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimRotate",
                  "parameter": {
                    "target": [ "#s-Path_37" ],
                    "angle": {
                      "type": "rotateto",
                      "value": "9000.0"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 18000
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimRotate",
                  "parameter": {
                    "target": [ "#s-Path_37" ],
                    "angle": {
                      "type": "rotateto",
                      "value": "9000.0"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 18000
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimRotate",
                  "parameter": {
                    "target": [ "#s-Path_37" ],
                    "angle": {
                      "type": "rotateto",
                      "value": "9000.0"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 18000
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    }
  })
  .on("focusin", ".s-8cdcfb72-edd0-413e-84f5-a1043e241885 .focusin", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    event.data = data;
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_1")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_1",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-8cdcfb72-edd0-413e-84f5-a1043e241885 #s-Input_1 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#3B82F6",
                      "border-right-color": "#3B82F6",
                      "border-bottom-color": "#3B82F6",
                      "border-left-color": "#3B82F6"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Rectangle_3" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_5")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_5",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-8cdcfb72-edd0-413e-84f5-a1043e241885 #s-Input_5 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#3B82F6",
                      "border-right-color": "#3B82F6",
                      "border-bottom-color": "#3B82F6",
                      "border-left-color": "#3B82F6"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Rectangle_9" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_6")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_6",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-8cdcfb72-edd0-413e-84f5-a1043e241885 #s-Input_6 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#3B82F6",
                      "border-right-color": "#3B82F6",
                      "border-bottom-color": "#3B82F6",
                      "border-left-color": "#3B82F6"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Rectangle_10" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_7")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_7",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-8cdcfb72-edd0-413e-84f5-a1043e241885 #s-Input_7 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#3B82F6",
                      "border-right-color": "#3B82F6",
                      "border-bottom-color": "#3B82F6",
                      "border-left-color": "#3B82F6"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Rectangle_11" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_8")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_8",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-8cdcfb72-edd0-413e-84f5-a1043e241885 #s-Input_8 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#3B82F6",
                      "border-right-color": "#3B82F6",
                      "border-bottom-color": "#3B82F6",
                      "border-left-color": "#3B82F6"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Rectangle_12" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    }
  })
  .on("focusout", ".s-8cdcfb72-edd0-413e-84f5-a1043e241885 .focusout", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    event.data = data;
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_1")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_1",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-8cdcfb72-edd0-413e-84f5-a1043e241885 #s-Input_1 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#0F032F",
                      "border-right-color": "#0F032F",
                      "border-bottom-color": "#0F032F",
                      "border-left-color": "#0F032F"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Rectangle_3" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_5")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_5",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-8cdcfb72-edd0-413e-84f5-a1043e241885 #s-Input_5 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#0F032F",
                      "border-right-color": "#0F032F",
                      "border-bottom-color": "#0F032F",
                      "border-left-color": "#0F032F"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Rectangle_9" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_6")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_6",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-8cdcfb72-edd0-413e-84f5-a1043e241885 #s-Input_6 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#0F032F",
                      "border-right-color": "#0F032F",
                      "border-bottom-color": "#0F032F",
                      "border-left-color": "#0F032F"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Rectangle_10" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_7")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_7",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-8cdcfb72-edd0-413e-84f5-a1043e241885 #s-Input_7 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#0F032F",
                      "border-right-color": "#0F032F",
                      "border-bottom-color": "#0F032F",
                      "border-left-color": "#0F032F"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Rectangle_11" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_8")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_8",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-8cdcfb72-edd0-413e-84f5-a1043e241885 #s-Input_8 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#0F032F",
                      "border-right-color": "#0F032F",
                      "border-bottom-color": "#0F032F",
                      "border-left-color": "#0F032F"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Rectangle_12" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    }
  })
  .on("mouseenter dragenter", ".s-8cdcfb72-edd0-413e-84f5-a1043e241885 .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    event.data = data;
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#mi-8ff32f72-Paragraph_2") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeCursor",
                  "parameter": {
                    "type": "pointer"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-8cdcfb72-edd0-413e-84f5-a1043e241885 #mi-8ff32f72-Paragraph_2" ],
                    "attributes": {
                      "opacity": "0.3"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#mi-8ff32f72-Paragraph_3") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeCursor",
                  "parameter": {
                    "type": "pointer"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-8cdcfb72-edd0-413e-84f5-a1043e241885 #mi-8ff32f72-Paragraph_3" ],
                    "attributes": {
                      "opacity": "0.3"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_2") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeCursor",
                  "parameter": {
                    "type": "pointer"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-8cdcfb72-edd0-413e-84f5-a1043e241885 #s-Button_2 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#434343"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_1") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-8cdcfb72-edd0-413e-84f5-a1043e241885 #s-Input_1 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#3B82F6",
                      "border-right-color": "#3B82F6",
                      "border-bottom-color": "#3B82F6",
                      "border-left-color": "#3B82F6"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_5") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-8cdcfb72-edd0-413e-84f5-a1043e241885 #s-Input_5 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#3B82F6",
                      "border-right-color": "#3B82F6",
                      "border-bottom-color": "#3B82F6",
                      "border-left-color": "#3B82F6"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_6") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-8cdcfb72-edd0-413e-84f5-a1043e241885 #s-Input_6 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#3B82F6",
                      "border-right-color": "#3B82F6",
                      "border-bottom-color": "#3B82F6",
                      "border-left-color": "#3B82F6"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_7") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-8cdcfb72-edd0-413e-84f5-a1043e241885 #s-Input_7 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#3B82F6",
                      "border-right-color": "#3B82F6",
                      "border-bottom-color": "#3B82F6",
                      "border-left-color": "#3B82F6"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_8") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-8cdcfb72-edd0-413e-84f5-a1043e241885 #s-Input_8 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#3B82F6",
                      "border-right-color": "#3B82F6",
                      "border-bottom-color": "#3B82F6",
                      "border-left-color": "#3B82F6"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#mi-f2657558-Text_cell_6") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-8cdcfb72-edd0-413e-84f5-a1043e241885 #mi-f2657558-Text_cell_6 span" ],
                    "attributes": {
                      "color": "#FAD01D"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeCursor",
                  "parameter": {
                    "type": "pointer"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#mi-f2657558-Text_cell_7") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-8cdcfb72-edd0-413e-84f5-a1043e241885 #mi-f2657558-Text_cell_7 span" ],
                    "attributes": {
                      "color": "#FAD01D"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeCursor",
                  "parameter": {
                    "type": "pointer"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#mi-f2657558-Text_cell_8") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-8cdcfb72-edd0-413e-84f5-a1043e241885 #mi-f2657558-Text_cell_8 span" ],
                    "attributes": {
                      "color": "#FAD01D"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeCursor",
                  "parameter": {
                    "type": "pointer"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#mi-f2657558-Text_cell_10") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-8cdcfb72-edd0-413e-84f5-a1043e241885 #mi-f2657558-Text_cell_10 span" ],
                    "attributes": {
                      "color": "#FAD01D"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeCursor",
                  "parameter": {
                    "type": "pointer"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#mi-f2657558-Button_1") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-8cdcfb72-edd0-413e-84f5-a1043e241885 #mi-f2657558-Button_1 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FAD01D"
                    }
                  },{
                    "target": [ "#s-8cdcfb72-edd0-413e-84f5-a1043e241885 #mi-f2657558-Button_1 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#FAD01D",
                      "border-right-color": "#FAD01D",
                      "border-bottom-color": "#FAD01D",
                      "border-left-color": "#FAD01D"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeCursor",
                  "parameter": {
                    "type": "pointer"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    }
  })
  .on("mouseleave dragleave", ".s-8cdcfb72-edd0-413e-84f5-a1043e241885 .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    event.data = data;
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#mi-8ff32f72-Paragraph_2")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-8ff32f72-Paragraph_3")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Button_2")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Input_1")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Input_5")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Input_6")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Input_7")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Input_8")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-f2657558-Text_cell_6")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-f2657558-Text_cell_7")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-f2657558-Text_cell_8")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-f2657558-Text_cell_10")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-f2657558-Button_1")) {
      jEvent.undoCases(jFirer);
    }
  })
  .on("scroll.jim", ".s-8cdcfb72-edd0-413e-84f5-a1043e241885 .scroll", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    event.data = data;
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-8cdcfb72-edd0-413e-84f5-a1043e241885")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "action": "jimWindowScrollY"
                },"0" ]
              },
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Rectangle_2" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Rectangle_2" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    }
  });