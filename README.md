brackets-jshint
=================

A Brackets extension to enable JSHint support. 

To see the extension in action, open a JavaScript file. In the bottom right corner of your editor you will either see a green checkmark (which means no problems were found) or a yellow exclamation mark. Click on the exclamation mark and a bottom panel will open listing all the problems found.

JSHint can be configured from `.brackets.json` file located in the project root. 

###Example configuration file
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
