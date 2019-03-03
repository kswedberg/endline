// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
const {contributes} = require('./package.json');
const {commands} = contributes;
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

const endline = (cmd) => {
  vscode.window.showInformationMessage(cmd.title);
  console.log(cmd.title);
};
const activate = (context) => {

  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log('Congratulations, your extension "endline" is now active!');

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with  registerCommand
  // The commandId parameter must match the command field in package.json
  commands.forEach((cmd) => {
    const disposable = vscode.commands.registerCommand(cmd.command, () => {
      endline(cmd);
    });

    context.subscriptions.push(disposable);
  });
  // vscode.commands.registerCommand('extension.helloWorld', () => {
  //   // The code you place here will be executed every time your command is executed

  //   // Display a message box to the user
  //   vscode.window.showInformationMessage('Hello World!');
  // });

};

exports.activate = activate;

// this method is called when your extension is deactivated
const deactivate = () => { /* no-op */};

module.exports = {
  activate,
  deactivate
};
