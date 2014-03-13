brackets-jshint
=================

A Brackets extension to enable JSHint support. 

To see the extension in action, open a JavaScript file. In the bottom right corner of your editor you will either see a green checkmark (which means no problems were found) or a yellow exclamation mark. Click on the exclamation mark and a bottom panel will open listing all the problems found.
You can add "jshint.options" and "jshint.global" in your general config file (Debug -> Open Preference File). Those apply to all files in your project. You can add a .brackets.json file in any of your folders and you have extra configuration for that folder (global settings still apply). And you still can use per file configuration

###Example configuration 
        {
          "jshint.options": {
            "plusplus": true,
            "undef": true,
            "esnext": true,
            "maxerr": 50
          },
          "jshint.globals": [
            "require"
          ],
          "spaceUnits": 2,
          "linting.enabled": true
        }

See [jshint documentation](http://www.jshint.com/docs/) for configuration options details.

Credit
=====
Built with [JSHint](http://www.jshint.com/) and based on the work of [BracketsTeam](http://brackets.io) JSLint module and [Raymond Camden](https://github.com/cfjedimaster). 
