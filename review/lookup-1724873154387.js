(function(window, undefined) {
  var dictionary = {
    "8cdcfb72-edd0-413e-84f5-a1043e241885": "Book Now",
    "45c139f8-5ae6-4793-9c27-f5c45b9057dc": "Homepage",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "f7f91b8b-24bb-40f8-b657-ec70aded513a": "Logo",
    "415ee9d8-342e-4f32-93e7-960ff9203a09": "Footer",
    "68cf0b81-f3e1-46c0-a494-5399d378f46b": "Sponsors",
    "45165caa-d179-4d49-8dff-40607b541e0e": "Menu",
    "6544ae26-f43b-4b59-b5c8-16ec9c7361da": "Workshop card",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);