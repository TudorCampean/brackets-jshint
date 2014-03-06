/*jshint nomen: true, indent: 2 */
/*global define, brackets, JSHINT*/
define(function (require, exports, module) {
  "use strict";

  var CodeInspection        = brackets.getModule("language/CodeInspection"),
    _                       = brackets.getModule("thirdparty/lodash"),
    PreferencesManager      = brackets.getModule("preferences/PreferencesManager");

  require("bower_components/jshint/dist/jshint");
  var prefs = PreferencesManager.getExtensionPrefs('jshint');

  prefs.definePreference("options", "object").on("change", function (e, data) {
    CodeInspection.requestRun("JsHint");
  });
  
  prefs.definePreference("globals", "object").on("change", function (e, data) {
    CodeInspection.requestRun("JsHint");
  });

  var hintFile = function(text, fullPath) {
    var config = {};
    config.options = prefs.get('options') ? prefs.get('options') : {};
    config.globals = _.reduce(prefs.get('globals'), function (result, val){
        result[val] = true;
        return result;
      }, {});
    JSHINT(text, config.options, config.globals);
    return {
      errors: _.map(_.filter(JSHINT.errors, function (error) {
        return error !== null;
      }), function (error) {
        var errorMessage = {};
        errorMessage.type = error.type === "warning" ? CodeInspection.Type.WARNING : CodeInspection.Type.ERROR;
        errorMessage.message = error.reason + " (" + error.code + ")";
        errorMessage.pos = {
          line: (error.line - 1),
          ch: error.character
        };
        return errorMessage;
      })
    };
  };

  CodeInspection.register("javascript", {
    name: "JsHint",
    scanFile: hintFile
  });

});
