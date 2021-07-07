.. _Build:

Build
######

.. contents:: Table of contents for this page
   :depth: 2
   :local:

Using the build function, you can perform the build process from VSCode, which used to be done by launching a command pronto.


.. figure:: ./../../_images/reST_doc_034.png
   :scale: 100%
   :alt: reST_doc_034.png


----------

Type of task
************

* Each task is available as ``[User env build]`` and ``[Built-in build]`` .
* ``[Built-in build]`` is currently only supported on Windows.

+------------+-------------------------------------------------------------+
| Task       | Description                                                 |
+============+=============================================================+
| epub       | Convert to epub                                             |
+------------+-------------------------------------------------------------+
| html       | Convert to HTML                                             |
+------------+-------------------------------------------------------------+
| latex      | Convert to latex                                            |
+------------+-------------------------------------------------------------+
| latex pdf  | Convert to PDF                                              |
+------------+-------------------------------------------------------------+
| Make Clean | Reset the build folder (delete the contents of the folder)) |
+------------+-------------------------------------------------------------+

----------

How to use
************

1. Open the directory where the ``make.bat`` file is stored as a workspace folder( ``File> Open Folder...`` )

   .. figure:: ./../../_images/reST_doc_017.png
      :scale: 100%
      :alt: reST_doc_017.png

2. Select ``Terminal> Run Task...`` .

   .. figure:: ./../../_images/reST_doc_003.png
      :scale: 100%
      :alt: reST_doc_003.png

3. Selecting the ``sphinx`` item will show you the items you can build

   * Some items may not be displayed depending on the environment

   .. figure:: ./../../_images/reST_doc_004.png
      :scale: 100%
      :alt: reST_doc_004.png

   .. figure:: ./../../_images/reST_doc_034.png
      :scale: 100%
      :alt: reST_doc_034.png

3. The Terminal will start and the build will begin

   .. figure:: ./../../_images/reST_doc_025.png
      :scale: 60%
      :alt: reST_doc_025.png

4. Finally, press ``Enter`` or similar button to close the Terminal


----------

[User env build]
****************

Build using the environment of the user's machine.
If you have your own environment, we recommend you to use this option.

If you want to customize it beyond what is provided in the ``[Built-in build]`` environment, you will need to set up your own environment and run it with this option.

Selecting this optional item will cause PowerShell to execute the command ``. /make XXX`` command will be executed in PowerShell.

  * The ``XXX`` part of ``. /make XXX`` where ``XXX`` is one of ``html`` ``epub`` ``latex`` ``latexpdf`` ``clean`` .
  * The current directory (work directory) will be the workspace folder of VSCode

.. note::
   The various environment paths must be properly passed.
   If an error occurs, please check the Terminal message.

----------

[Built-in build]
****************

(Currently available for Windows only)

The option to build by running ``sphinxhelper.exe`` , which is included in the extension.
It is designed to do the minimum required build even if the user is not able to set up the environment.

The environment for the build tool is as follows.

+------------------+---------+
| Tool Name        | Version |
+==================+=========+
| Python           | 3.9.6   |
+------------------+---------+
| Sphinx           | 4.0.2   |
+------------------+---------+
| sphinx-rtd-theme | 0.5.2   |
+------------------+---------+

If you want to convert to pdf files, you need to install :ref:`InstallTeX` separately.

(If you have a tool you would like to see implemented in ``[Built-in build]`` , please post it in the `Issues`_ section.)


.. note::
   Some security software may place restrictions on the execution of ``sphinxhelper.exe`` , so please allow this file to run.

   The original file/program of this exe file is available on `GitHub <https://github.com/TatsuyaNakamori/vscode-reStructuredText/tree/master/sphinx>`_ .

----------

.. note::
   If you cannot solve a problem, please report it to `Issues`_.
   Bugs and other reports are only accepted from this page.


.. _Issues: https://github.com/TatsuyaNakamori/vscode-reStructuredText/issues

