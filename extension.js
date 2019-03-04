// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
const pkg = require('./package.json');
const {commands} = pkg.contributes;

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

const endline = (cmd) => {
  // vscode.window.showInformationMessage(cmd.title);
  const activeEditor = vscode.window.activeTextEditor;

  if (!activeEditor) {
    return;
  }
  const rStopChars = /[{(,;]/;

  vscode.commands.executeCommand('acceptSelectedSuggestion')
  .then(() => {
    const name = cmd.command.replace(/^endline\./, '');
    const command = name === 'end' ? 'cursorEnd' : 'editor.action.insertLineAfter';
    const {line: index} = activeEditor.selection.active;
    const line = activeEditor.document.lineAt(index);
    const len = line.text.replace(/\s+$/, '').length;
    const punctuation = ';';

    if (rStopChars.test(line.text.charAt(len - 1)) || line.isEmptyOrWhitespace) {
      return name === 'stay' ? false : vscode.commands.executeCommand(command);
    }

    const inserted = activeEditor.edit((editBuilder) => {
      editBuilder.insert(new vscode.Position(index, len), punctuation);
    });

    if (!inserted || name === 'stay') {
      return;
    }

    return vscode.commands.executeCommand(command);
  });
};

const activate = (context) => {
  // The commands have been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json
  commands.forEach((cmd) => {
    const disposable = vscode.commands.registerCommand(cmd.command, () => {
      endline(cmd);
    });

    context.subscriptions.push(disposable);
  });
};

exports.activate = activate;

// this method is called when your extension is deactivated
const deactivate = () => { /* no-op */};

module.exports = {
  activate,
  deactivate
};
