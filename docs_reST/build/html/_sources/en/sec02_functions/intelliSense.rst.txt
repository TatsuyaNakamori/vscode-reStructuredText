Other input assistance
#######################

.. contents:: Table of contents for this page
   :depth: 2
   :local:


Introduce input aids other than :doc:`./snippet`.

Input assistance for tables and lists is also described.


--------

header
********

+-------------------------------------------------------------------------------------+
| Trigger Character                                                                   |
+=====================================================================================+
| ``h`` ``h1`` ``h2`` ``h3`` ``h4`` ``h5`` ``h6`` ``#`` ``*`` ``=`` ``-`` ``^`` ``"`` |
+-------------------------------------------------------------------------------------+

When you enter the trigger character, you will get a list of possible lines to use in the header.

.. figure:: ./../../_images/reST_doc_039.png
   :scale: 100%
   :alt: reST_doc_039.png

.. note::
   In the case of reStructuredText, there is no restriction on the order of symbols used in the header lines, but in this extension, the order in which the `Python Developer's Guide <https://devguide.python.org/documenting/#sections>`_ recommends.


When you select an auto-completion candidate, a line will be created to match the width of the string one line above it.
(At least 5 characters will be inserted, even if the header is short.)

.. figure:: ./../../_images/reST_doc_040.png
   :scale: 100%
   :alt: reST_doc_040.png


--------

Table
********

+-------------------------------------------------------------+
| Trigger Character                                           |
+=============================================================+
| ``1`` ``2`` ``3`` ``4`` ``5`` ``6`` ``7`` ``8`` ``9`` ``0`` |
+-------------------------------------------------------------+

Create an empty table.

* When the trigger character is entered, the form of the string immediately before it must be ``[Rows]x[Columns]`` .

  * Examples: ``4x9`` , ``10x20`` , etc.

* Header lines are not included in ``[number of rows]`` .

  * Selecting the ``(Table with header)`` item in the input help will insert an additional row for the header.


.. figure:: ./../../_images/reST_doc_035.png
   :scale: 75%
   :alt: reST_doc_035.png

.. figure:: ./../../_images/reST_doc_037.png
   :scale: 75%
   :alt: reST_doc_037.png


.. seealso::
   For more information, see :ref:`SpecifyRowsColumns`.


--------

List
******

+-------------------+
| Trigger Character |
+===================+
| ``1`` ``#`` ``*`` |
+-------------------+

When you enter a trigger character in the editor, suggestions for input assistance will appear.
When you select an item, a symbol will be inserted at the beginning.

.. figure:: ./../../_images/reST_doc_038.png
   :scale: 100%
   :alt: reST_doc_038.png


.. seealso::
   See :ref:`CreatingList` for a detailed description


--------

.. note::
   Please report bugs and other issues via `Issues <https://github.com/TatsuyaNakamori/vscode-reStructuredText/issues>`_.

