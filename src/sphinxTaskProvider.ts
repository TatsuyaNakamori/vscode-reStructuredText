// ============================================================
// Copyright (c) 2021 Tatsuya Nakamori. All rights reserved.
// See LICENSE in the project root for license information.
// ============================================================
import * as vscode from 'vscode';
import * as fs from 'fs';
import * as os from 'os';
import * as path from 'path';
import * as util from './util';
import * as i18n from './i18n';


interface QuickstartOptions {
    "Project name": string,
    "Author name(s)": string,
    "Project version": string,
    "Project release": string,
    "Project language": string,
    "Separate source and build directories": boolean,
    "Use epub": boolean,
    "Enable autodoc extension": boolean,
    "Enable doctest extension": boolean,
    "Enable intersphinx extension": boolean,
    "Enable todo extension": boolean,
    "Enable coverage extension": boolean,
    "Enable imgmath extension": boolean,
    "Enable mathjax extension": boolean,
    "Enable ifconfig extension": boolean,
    "Enable viewcode extension": boolean
}

interface MakefileInfo {
    "SOURCEDIR": string,
    "BUILDDIR": string,
    "SPHINXOPTS"?: string,
    "SPHINXBUILD"?: string
}


export class SphinxTaskProvider implements vscode.TaskProvider {
    static TASK_TYPE = 'sphinx';
    static COMMAND_LIST = [
        ['Sphinx_QuickStart',   'Quick Start',                'all'],
        ['TeX_LaunchInstaller', 'Launch TeX Installer',       'all'],
        ['Build_html',          'html [User env build]',      'all'],
        ['Build_html',          'html [Built-in build]',      'win'],
        ['Build_epub',          'epub [User env build]',      'all'],
        ['Build_epub',          'epub [Built-in build]',      'win'],
        ['Build_latex',         'latex [User env build]',     'all'],
        ['Build_latex',         'latex [Built-in build]',     'win'],
        ['Build_latexpdf',      'latex pdf [User env build]', 'all'],
        ['Build_latexpdf',      'latex pdf [Built-in build]', 'win'],
        ['Build_clean',         'Make Clean',                 'all']
    ]

    public provideTasks(): Thenable<vscode.Task[]> | undefined {
        return _generateTasks();
    }

    public resolveTask(_task: vscode.Task): vscode.Task | undefined {
        return _createTask(_task.definition);
    }
}

export function _getMakefileInfo(): MakefileInfo | undefined {
    const workspaceFolder = util.getOpenedWorkfolderUri();
    if (!workspaceFolder) { return }

    const makeFile = path.join(workspaceFolder.fsPath, "Makefile");
    if (!fs.existsSync(makeFile)) { return }

    const contents = fs.readFileSync(makeFile,'utf8');
    if (!contents) { return }

    let makefileInfo: MakefileInfo = {
        "SOURCEDIR": "",
        "BUILDDIR": ""
    };
    const regSource = /^SOURCEDIR\s+=\s+([\w./]+)$/;
    const regBuild  = /^BUILDDIR\s+=\s+([\w./]+)$/;
    const contentsLine = contents.split("\n")
    for (let i = 0; i < contentsLine.length; i++) {
        const line = contentsLine[i];

        const sourceMatch = regSource.exec(line);
        if (sourceMatch) {
            makefileInfo["SOURCEDIR"] = sourceMatch[1];
        }

        const buildMatch = regBuild.exec(line);
        if (buildMatch) {
            makefileInfo["BUILDDIR"] = buildMatch[1];
        }
    }
    return makefileInfo
}

function _getSphinxhelper(): string | undefined {
    const extension = vscode.extensions.getExtension("tatsuyanakamori.resttext");
    if (!extension) { return }

    const sphinxHelperExe = path.join(
        extension.extensionPath, "sphinx", os.platform(), "sphinxhelper", "sphinxhelper.exe"
    );
    if (!fs.existsSync(sphinxHelperExe)) { return }

    return sphinxHelperExe
}

function _getTeXinstaller(): string | undefined {
    const extension = vscode.extensions.getExtension("tatsuyanakamori.resttext");
    if (!extension) { return }

    const texInstaller = path.join(
        extension.extensionPath, "sphinx", os.platform(), "install-tl-windows.exe"
    );
    if (!fs.existsSync(texInstaller)) { return }

    return texInstaller
}

function _existsTexliveEnvPath(): boolean {
    const envPATH = process.env.Path;
    if (!envPATH) {
        return false
    }

    const pathList = envPATH.split(";");
    for (let i = 0; i < pathList.length; i++) {
        const path = pathList[i];
        if (path.indexOf("texlive") != -1) {
            return true
        }
    }
    return false
}

function _getQuickStartFlags(): string | undefined {
    const options: QuickstartOptions | undefined = vscode.workspace.getConfiguration().get("resttext.sphinxQuickStart.options");
    if (!options) {
        console.log(i18n.localize("resttext.sphinx.getconfig.error"));
        return
    }
    const optProject    : string  = options["Project name"];
    const optAuthor     : string  = options["Author name(s)"];
    const optVersion    : string  = options["Project version"];
    const optRelease    : string  = options["Project release"];
    let   optLanguage   : string  = options["Project language"];
    const optSeparate   : boolean = options["Separate source and build directories"];
    const optEpub       : boolean = options["Use epub"];
    const optAutodoc    : boolean = options["Enable autodoc extension"];
    const optDoctest    : boolean = options["Enable doctest extension"];
    const optIntersphinx: boolean = options["Enable intersphinx extension"];
    const optTodo       : boolean = options["Enable todo extension"];
    const optCoverage   : boolean = options["Enable coverage extension"];
    const optImgmath    : boolean = options["Enable imgmath extension"];
    const optMathjax    : boolean = options["Enable mathjax extension"];
    const optIfconfig   : boolean = options["Enable ifconfig extension"];
    const optViewcode   : boolean = options["Enable viewcode extension"];

    // Get locale
    const langReg = /^([\w@]+)(?= \()/;
    const langMatch = langReg.exec(optLanguage);
    if (!(langMatch && langMatch[1])) {
        console.log(i18n.localize("resttext.sphinx.getconfig.error"));
        return
    }
    optLanguage = langMatch[1];

    // Create Flags String
    let flags: string[] = [
        "--project",  `'${optProject}'`,
        "--author",   `'${optAuthor}'`,
        "-v",         `'${optVersion}'`,
        "--release",  `'${optRelease}'`,
        "--language", `'${optLanguage}'`
    ]
    optSeparate? flags.push("--sep"): flags.push("--no-sep");
    if (optEpub)        {flags.push("--epub")};
    if (optAutodoc)     {flags.push("--ext-autodoc")};
    if (optDoctest)     {flags.push("--ext-doctest")};
    if (optIntersphinx) {flags.push("--ext-intersphinx")};
    if (optTodo)        {flags.push("--ext-todo")};
    if (optCoverage)    {flags.push("--ext-coverage")};
    if (optImgmath)     {flags.push("--ext-imgmath")};
    if (optMathjax)     {flags.push("--ext-mathjax")};
    if (optIfconfig)    {flags.push("--ext-ifconfig")};
    if (optViewcode)    {flags.push("--ext-viewcode")};

    return flags.join(" ")
}

function _createTask(definition: vscode.TaskDefinition): vscode.Task | undefined {
    if (definition.command == "Sphinx_QuickStart") {
        // In order to run QuickStart, an empty working folder must be open.
        const workFolder = util.getOpenedWorkfolderUri();
        if ((!workFolder) || fs.readdirSync(workFolder.fsPath).length) {
            return
        }

        const sphinxHelperExe = _getSphinxhelper();
        if (!sphinxHelperExe) {
            console.log("Sphinx Task::");
            console.log("Not find sphinxhelper.exe");
            return
        }
        const flags = _getQuickStartFlags();
        if (!flags) { return }

        return new vscode.Task(
            definition,
            vscode.TaskScope.Workspace,
            i18n.localize("resttext.sphinxtask.quickstart.name"),
            i18n.localize("resttext.sphinxtask.quickstart.source"),
            new vscode.ShellExecution(`"${sphinxHelperExe} --quickstart ${flags}"`),
            []
        );

    } else if (definition.command.split("_")[0] == "Build") {
        // The work folder must be open in order to build
        if (!util.getOpenedWorkfolderUri()) {
            console.log("Sphinx Task::");
            console.log("Could not get workspaceFolder.");
            return
        }

        if (definition.command.split("_")[1] == "latexpdf") {
            if (!_existsTexliveEnvPath()) {
                console.log("Sphinx Task::");
                console.log('PATH to texlive could not be obtained.');
                return
            }
        }

        const regRunAsBuiltin = /(\[Built-in build\])/;
        const regRunAsUserEnv = /(\[User env build\])/;
        const exportType = definition.command.split("_")[1];

        if (regRunAsBuiltin.exec(definition.label) || exportType == "clean") {
            const sphinxHelperExe = _getSphinxhelper();
            if (!sphinxHelperExe) {
                console.log("Sphinx Task::");
                console.log("Not find sphinxhelper.exe");
                return
            }

            const makefileInfo = _getMakefileInfo();
            if (!makefileInfo) { return }
            const sourceDir = makefileInfo["SOURCEDIR"];
            const buildDir = makefileInfo["BUILDDIR"];

            return new vscode.Task(
                definition,
                vscode.TaskScope.Workspace,
                definition.label,
                i18n.localize("resttext.sphinxtask.build.source"),
                new vscode.ShellExecution(`"${sphinxHelperExe} --build -M ${exportType} ${sourceDir} ${buildDir}"`),
                []
            );

        } else if (regRunAsUserEnv.exec(definition.label)) {
            const makefileInfo = _getMakefileInfo();
            if (!makefileInfo) { return }

            return new vscode.Task(
                definition,
                vscode.TaskScope.Workspace,
                definition.label,
                i18n.localize("resttext.sphinxtask.build.source"),
                new vscode.ShellExecution(`"./make ${exportType}"`),
                []
            );
        }

    } else if (definition.command == "TeX_LaunchInstaller") {
        // If TeXlive is installed, there is no need to display the task.
        if (_existsTexliveEnvPath()) {
            console.log("Sphinx Task::");
            console.log('The PATH to texlive already exists.');
            return
        }

        const texInstaller = _getTeXinstaller();
        if (!texInstaller) { return }

        return new vscode.Task(
            definition,
            vscode.TaskScope.Workspace,
            i18n.localize("resttext.sphinxtask.texInstall.name"),
            i18n.localize("resttext.sphinxtask.texInstall.source"),
            new vscode.ShellExecution(`"${texInstaller}"`),
            []
        );
    }
}

async function _generateTasks(): Promise<vscode.Task[]> {
    // 'aix', 'darwin', 'freebsd', 'linux', 'openbsd', 'sunos', and 'win32'
    const isWindows = (os.platform() == "win32");

    const taskList: vscode.Task[] = [];
    for (const commandInfo of SphinxTaskProvider.COMMAND_LIST) {
        if (commandInfo[2] == 'all' || (commandInfo[2]=='win' && isWindows)) {
            const _task = _createTask(
                {
                    type: SphinxTaskProvider.TASK_TYPE,
                    command: commandInfo[0],
                    label: commandInfo[1]
                }
            );
            if (_task) {
                taskList.push(_task);
            }
        }
    }
    return taskList
}
