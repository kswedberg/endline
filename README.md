# endline README

Insert punctuation (semicolon) at the end of the current line and optionally go to the end or start a new line.

To activate, open the package panel thing and start typing "end line"

## Features

* If the current line already has a semicolon, it doesn't add another one, but still moves the cursor to the end of the line or the newly created next line, depending on the action triggered.
* Trims the end of the current line of white space before inserting the semicolon.

## Keyboard shortcuts

The endline extension includes three keyboard shortcuts:

* <kbd>cmd</kbd> + <kbd>;</kbd>: insert semicolon at end of line, but keep the cursor where it is.
* <kbd>ctrl</kbd> + <kbd>;</kbd>: insert semicolon at end of line and move cursor to the end of the line.
* <kbd>cmd</kbd> + <kbd>shift</kbd> + <kbd>enter</kbd>: insert semicolon at end of line, create a new line after the current one, and move cursor to the start of the new line.


## Known Issues

None so far.

## To Do

* At some point, I'd like determine if the current line is inside a JavaScript array or object, and, if so, insert a comma instead of a semicolon. (Will probably need to use https://github.com/Microsoft/vscode-textmate)
