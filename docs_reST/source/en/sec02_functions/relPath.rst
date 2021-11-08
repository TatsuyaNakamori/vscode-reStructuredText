Inserting a relative path
#########################

.. contents:: Table of contents for this page
   :depth: 2
   :local:


Directives such as ``.. figure::``,  ``.. image::`` and ``.. toctree::`` specify the file as a relative path.
There are tools available to save you the trouble of writing those paths.

.. figure:: ../../_gifs/reST_relPath.gif
   :scale: 80%
   :alt: reST_relPath.gif

--------

Insert relative paths into the editor
*************************************

* Inserts a relative path to a file, such as an image.
* This is a relative path from ``the same level (folder) as the file`` to ``the specified file`` in the editor. (This is the way relative paths are specified in reStructuredText and HTML).
* The path separator will be a slash.

The result will look like this.

+---------------------------------+----------------------------+
| The file you are opening (From) | C:/path/to/html/index.html |
+---------------------------------+----------------------------+
| To                              | C:/path/to/css/default.css |
+---------------------------------+----------------------------+
| Result                          | ../css/default.css         |
+---------------------------------+----------------------------+


How to use

1. Open the file where you want to insert the path in an editor and move the cursor to the position where you want to insert the path.
2. Open Explorer, right-click on the name of a file, such as an image, and select ``Insert relative paths into the editor``.

   * Note that if you left-click, the image data will be opened in the editor.

   .. figure:: ../../_images/reST_doc_041.png
      :scale: 85%
      :alt: reST_doc_041.png

3. A relative path will be inserted


-----

Insert relative paths into the editor (without extension)
*********************************************************

* Inserts a relative path without the extension. (Use this when you don't need the extension, as in ``.. toctree::``.)
* This is a relative path from ``the same level (folder) as the file`` to ``the specified file`` in the editor. (This is the way relative paths are specified in reStructuredText and HTML).
* The path separator will be a slash.

The result will look like this.

+---------------------------------+-------------------------------------+
| The file you are opening (From) | C:/path/to/reST/index.rst           |
+---------------------------------+-------------------------------------+
| To                              | C:/path/to/reST/section01/index.rst |
+---------------------------------+-------------------------------------+
| Result                          | section01/index                     |
+---------------------------------+-------------------------------------+


How to use

1. Open the file where you want to insert the path in an editor and move the cursor to the position where you want to insert the path.
2. Open Explorer, right-click on the name of a file, such as an image, and select ``Insert relative paths into the editor (without extension)``.

   * Note that if you left-click, the image data will be opened in the editor.

   .. figure:: ../../_images/reST_doc_042.png
      :scale: 85%
      :alt: reST_doc_042.png

3. A relative path will be inserted


-----

.. note::
   If you encounter any problems, please report them to `Issues <https://github.com/TatsuyaNakamori/vscode-reStructuredText/issues>`_. Bugs and other reports are only accepted from this page.

