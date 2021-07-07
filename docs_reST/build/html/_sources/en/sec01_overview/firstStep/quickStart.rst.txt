.. _QuickStart:

Quick Start
################

You can run `Quick Start <https://www.sphinx-doc.org/ja/master/man/sphinx-quickstart.html>`_ , a feature of Sphinx, from Task.

(This is currently only available for Windows)

Procedure
*********

1. Open **an empty directory** as a workspace folder( ``File> Open Folder...`` )

   .. figure:: ./../../../_images/reST_doc_001.png
      :scale: 100%
      :alt: reST_doc_001.png

2. Open the Config(Settings) screen ( ``File> Preferences> Settings`` ) and select ``Extensions> reStructuredText`` from the Settings screen

   * Rewrite the ``Sphinx Quick Start: Options`` section accordingly.

     .. figure:: ./../../../_images/reST_doc_023.png
        :scale: 100%
        :alt: reST_doc_023.png

     .. seealso::
        For more information about the options, see `sphinx-quickstart <https://www.sphinx-doc.org/ja/master/man/sphinx-quickstart.html>`_ and :ref:`Details of each feature> Settings(Config)> Sphinx Quick Start: Options <SphinxQuickStartOptions>`.

3. Select ``Terminal> Run Task... and then select ``sphinx> Sphinx: Quick Start`` .

   * If you do not see ``sphinx> Sphinx: Quick Start`` , your workspace folder may not be empty. Also, your OS may not support it.

   .. figure:: ./../../../_images/reST_doc_003.png
      :scale: 100%
      :alt: reST_doc_003.png

   .. figure:: ./../../../_images/reST_doc_004.png
      :scale: 100%
      :alt: reST_doc_004.png

   .. figure:: ./../../../_images/reST_doc_006.png
      :scale: 100%
      :alt: reST_doc_006.png


4. QuickStart will be executed and various files will be generated.

   .. figure:: ./../../../_images/reST_doc_017.png
      :scale: 100%
      :alt: reST_doc_017.png

   * The above figure shows how to create separate source and build directories by setting the ``Separate source and build directories`` item to ``true`` in Config(Settings).

5. When the file is created successfully, hit ``Enter`` or similar key to close the Terminal.

   .. figure:: ./../../../_images/reST_doc_005.png
      :scale: 100%
      :alt: reST_doc_005.png

   * If an error occurs, please check the Terminal message


.. note::
   The execution of the sphinx Task will execute ``sphinxhelper.exe`` , a file included with the extension. Please allow this file to run, as it may be restricted by some security software.

   The file/program from which this exe file is derived is available on `GitHub <https://github.com/TatsuyaNakamori/vscode-reStructuredText/tree/master/sphinx>`_ .
