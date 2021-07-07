Installation
############


This extension is designed to be used with as little installation effort as possible, but users can use all reStructuredText and Sphinx features by setting up their own environment.
(Some of these features are only available for Windows.)


+-----------------------------+-----------------------------------------------------+----------------------------------+
|                             | Windows                                             | Mac/ Linux                       |
+=============================+=====================================================+==================================+
|| reStructuredText extention || Required.                                          || Required.                       |
|| for VSCode                 || Install from VSCode                                || Install from VSCode             |
|| (This extension)           ||                                                    ||                                 |
+-----------------------------+-----------------------------------------------------+----------------------------------+
|| Python/ Sphinx             || Already built into the extension.                  || Necessary                       |
||                            || No installation is required                        ||                                 |
||                            || for minimal functionality.                         ||                                 |
||                            || * If you want to customize Sphinx,                 ||                                 |
||                            || we recommend that you set up your own environment. ||                                 |
+-----------------------------+-----------------------------------------------------+----------------------------------+
|| TeX                        || Required for exporting to pdf.                     || Required for exporting to pdf.  |
||                            || [You can start the installer from Task]            || [Please install it by yourself] |
+-----------------------------+-----------------------------------------------------+----------------------------------+



-----

Extension
*********

[Common to all OS]
  * From Extensions in Visual Studio Code, search for "\ **reStructuredText**\" and install it.


-----


Python/ Sphinx
**************

| If you already have Python or Sphinx installed, please use your own environment.
| For Windows, there are extensions that are built in. So, if you are using the minimum required functions, you do not need to install them.
| If you want to customize the environment for Sphinx or other applications, we recommend that you set up your own environment.

[Windows (When using the built-in extensions)]
  1) Select ``Terminal> Run Task`` from the VSCode menu.
  2) Select ``sphinx`` from the dialog box that appears at the top of the screen.
  3) Select the task you want to execute from the list of items such as ``Quick Start`` and ``Build: html [Built-in build]`` .


[Mac/ Linux/ Windows(自身で環境を整える方)]
  * Install `Python <https://www.python.org/downloads/>`_.
  * Pip install Sphinx.
  * Install themes, such as `sphinx-rtd-theme <https://sphinx-rtd-theme.readthedocs.io/en/stable/>`_, if needed.

.. note::
   When you use an extension task to build or do other tasks, commands such as ``make html`` will be executed using the folder open in VSCode as the work directory.
   At this time, there is no function to specify the virtual environment, so the global environment will be used.
   (If you pass the PATH to the virtual environment directory, you may be able to use it.)


-----

.. _InstallTeX:

TeX
*****

| This is required for exporting pdf files.
| If you have already installed TeX, you may use your own environment.

| For Windows users, you can launch the TeX installer from the Task menu.
| The version of the installer to be launched is **TeX Live 2021** .

.. warning::
   The installation of TeX Live will take about 1-2 hours, so please do it when you have time to spare.

[Windows]
  1) Select ``Terminal> Run Task`` from the VSCode menu.
  2) From the dialog box that appears at the top of the screen, select ``sphinx> Launch TeX Installer`` .
  3) When the installer starts, follow the instructions of the installer to install.

  * If you want to install a different version of TeX, please download and install the installer yourself.

    * You can download the installer for TeX Live from `here <http://www.tug.org/texlive/acquire-netinstall.html>`_.

[Mac/ Linux]
  * Please install it by yourself.
  * You can find more information on the Internet by searching for [TeX install].
  * You can download the installer for TeX Live from `here <http://www.tug.org/texlive/acquire-netinstall.html>`_.

