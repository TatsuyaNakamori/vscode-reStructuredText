Known problems and future prospects
###################################

.. contents:: Table of contents for this page
   :depth: 2
   :local:


.. note::
   If you have any trouble not described here, please report it from `Issues <https://github.com/TatsuyaNakamori/vscode-reStructuredText/issues>`_.
   Bug and trouble reports are only accepted from this page.


----------

Table
*****

+-------------------------------------+----------------------------------------------------------------+--------------------------------+
| Problem                             | Current response methods                                       | Response Status                |
+=====================================+================================================================+================================+
|| 2-byte special characters are      || Use single-byte characters (e.g. ``*``) or                    || Scrutinizing letters that are |
|| misaligned in width (``※``, etc.)  || manually adjust the width (add one space).                    || misaligned in width.          |
+-------------------------------------+----------------------------------------------------------------+--------------------------------+
|| Cell merging is not supported.     || Merge the cells manually after you are done editing           || under review                  |
||                                    || (Note that if you press a button such as ``Enter`` in a cell, ||                               |
||                                    || all the cells will be split.)                                 ||                               |
+-------------------------------------+----------------------------------------------------------------+--------------------------------+


----------

List
*****

+-------------------------------------------------+--------------------------------------------------------+--------------------+
| Problem                                         | Current response methods                               | Response Status    |
+=================================================+========================================================+====================+
|| When outdenting with ``Shift+Tab``,            || If all items use the same symbol (e.g. ``1.``), there || Plans for support |
|| the symbol before the outdent is inherited.    || is no problem. If not, rewrite it manually.           ||                   |
+-------------------------------------------------+--------------------------------------------------------+--------------------+
|| Automatic numbering of numbers is not executed || Rewrite it manually.                                  || Plans for support |
|| at some point in the editing process.          ||                                                       ||                   |
+-------------------------------------------------+--------------------------------------------------------+--------------------+


----------

.. _KnownIssuesHtmlPreview:

HTML Preview
************

+----------------------------------------------------+----------------------------+--------------------+
| Problem                                            | Current response methods   | Response Status    |
+====================================================+============================+====================+
|| The preview screen is not linked to the currently || Adjust each view manually || Plans for support |
|| displayed (selected) part of the rst file         ||                           ||                   |
|| (it does not scroll automatically).               ||                           ||                   |
+----------------------------------------------------+----------------------------+--------------------+


----------

Other
************

".. figure::"/ ".. image::"
===================================

+-----------------------------------+--------------------------+--------------------------------------------------------+
| Problem                           | Current response methods | Response Status                                        |
+===================================+==========================+========================================================+
|| It's a pain to write image paths || Write it manually       || Looking into the possibility of using the file dialog |
|| as relative paths.               ||                         || to select an image and have it automatically set.     |
+-----------------------------------+--------------------------+--------------------------------------------------------+

