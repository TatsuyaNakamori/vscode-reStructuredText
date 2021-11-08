Build to PDF
##############

Conversion to PDF or epub can be done from ``Terminal> Run Task...`` (You can also convert to HTML from this menu).


In this section, we will see how to convert it to a PDF file.


Preparation
***********

To convert to PDF, you will need ``TeX`` . See :ref:`Installation>TeX <InstallTeX>` to install **TeX Live 2021** .


Procedure
*********

1. Open the directory where the ``make.bat`` file is stored as a workspace folder( ``File> Open Folder...`` )

   .. figure:: ./../../../_images/reST_doc_017.png
      :scale: 100%
      :alt: reST_doc_017.png

2. Select ``Terminal> Run Task...`` and then select ``sphinx> Build: latex pdf [User env build]`` or ``sphinx> Build: latex pdf [Built-in build]`` .

   * The ``[User env build]`` builds using the user's machine environment, and the ``[Built-in build]`` builds using the executable built into the extension.

   .. figure:: ./../../../_images/reST_doc_003.png
      :scale: 100%
      :alt: reST_doc_003.png

   .. figure:: ./../../../_images/reST_doc_004.png
      :scale: 100%
      :alt: reST_doc_004.png

   .. figure:: ./../../../_images/reST_doc_024.png
      :scale: 100%
      :alt: reST_doc_024.png

3. Terminal will be launched and the conversion to pdf file will be started

   .. figure:: ./../../../_images/reST_doc_025.png
      :scale: 60%
      :alt: reST_doc_025.png

4. If everything is OK, press ``Enter`` or similar button to close the Terminal.

----

.. note::
   The ``[Built-in build]`` will execute the file ``sphinxhelper.exe``, which is included with the extension. Please allow the execution of this file, as it may be restricted by some security software.

   The original file/program of this exe file is available on `GitHub <https://github.com/TatsuyaNakamori/vscode-reStructuredText/tree/master/sphinx>`_.
