Build to HTML / Preview
***********************

This extension allows you to display a preview of the HTML next to the text editor.
Also, when you save a file with the preview mode enabled, it will automatically start building and update the view.

.. figure:: ./../../../_images/reST_doc_012.png
   :scale: 50%
   :alt: reST_doc_012.png

Procedure
*********

1. Select and open a file in rst format

   .. figure:: ./../../../_images/reST_doc_007.png
      :scale: 100%
      :alt: reST_doc_007.png

2. Click on the triangle symbol that appears in the upper right corner of the panel

   .. figure:: ./../../../_images/reST_doc_019.png
      :scale: 100%
      :alt: reST_doc_019.png

3. Select one of the following items: ``Preview HTML [Built-in build]`` (currently only available on Windows) or ``Preview HTML [User env build]`` .

   .. figure:: ./../../../_images/reST_doc_008.png
      :scale: 100%
      :alt: reST_doc_008.png

   * ``[Built-in build]`` :  Build using the executable file included with the extension
   * ``[User env build]`` :  Build using the Sphinx environment installed on the user's machine.

     .. seealso::
        See :ref:`Build` for details.

3. When the build is executed, the execution status will be displayed in the Terminal, which will automatically close when it is finished.
4. On the right side of the editor, you will see a preview of the built HTML


Automatic Updates
*****************

1. Change the contents of the rst file and save it

   * The build will start automatically and the preview screen will be updated

2. Close the preview screen panel when exiting the build or preview


----

.. note::
   Running ``Preview HTML [Built-in build]`` will execute the file ``sphinxhelper.exe`` , which is included with the extension. Please allow the execution of this file, as it may be restricted by your security software.

   The original file/program of this exe file is available on `GitHub <https://github.com/TatsuyaNakamori/vscode-reStructuredText/tree/master/sphinx>`_ .


.. seealso::
   * :ref:`Known Issues> HTML Preview <KnownIssuesHtmlPreview>`
       Known problems and items that could be improved in the future are summarized.

   * :ref:`Details of each function> Settings (Config) <SettingConfig>`
       There is an option to not close the Terminal after the build is finished running.

