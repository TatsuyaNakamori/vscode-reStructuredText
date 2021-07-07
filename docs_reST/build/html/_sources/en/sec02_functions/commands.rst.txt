Commands
#########

.. contents:: Table of contents for this page
   :depth: 2
   :local:


Commands can be executed from the Command Palette ( ``Ctrl+Shift+P`` ) or from shortcut keys.


Character decoration
********************

The following command, when executed after a character is selected, adds a modifier character to both ends of the selected character.
If the character is not selected, only the modifier character will be created.

If the character already has a modifier character, it will be removed.


+-----------------+-----------------------------------+---------------------+-------------------+-------------+
| Command         | Decoration                        | Execution result    | Meaning           | Shortcut    |
+=================+===================================+=====================+===================+=============+
| Bold            | **\*\***\ Bold\ **\*\***          | **Bold**            | Stronger emphasis | ``alt + b`` |
+-----------------+-----------------------------------+---------------------+-------------------+-------------+
| Italic          | **\***\ Italic\ **\***            | *Italic*            | Emphasis          | ``alt + i`` |
+-----------------+-----------------------------------+---------------------+-------------------+-------------+
| InlineRow(Code) | **\``**\ InlineRow(Code)\ **\``** | ``InlineRow(Code)`` | Inline Row        | ``alt + c`` |
+-----------------+-----------------------------------+---------------------+-------------------+-------------+

-----

.. _CSV2TableConversion:

CSV to Table Conversion
***********************

+-------------------------+----------------------------------------------+-------------+
| Command                 | Meaning                                      | Shortcut    |
+=========================+==============================================+=============+
| Convert data to a table | Create a table from a comma-separated string | ``alt + t`` |
+-------------------------+----------------------------------------------+-------------+

Follow the steps below.

1. Prepare a comma-separated list of strings to be converted into a table

   * Spaces are acceptable.
   * Leading and trailing whitespace will be stripped.

   .. figure:: ./../../_images/reST_doc_027.png
      :scale: 100%
      :alt: reST_doc_027.png

2. Select the string to be converted
3. Execute the command

   * You can do this by using the shortcut ``alt + t`` or ``right-click> Convert data to a table`` .

   .. figure:: ./../../_images/reST_doc_026.png
      :scale: 100%
      :alt: reST_doc_026.png

4. Select an item in the selection dialog

   * ``With Header`` : Create a header line
   * ``Without Header`` : Do not create a header line

   .. figure:: ./../../_images/reST_doc_029.png
      :scale: 100%
      :alt: reST_doc_029.png

5. Convert to grid table

   .. figure:: ./../../_images/reST_doc_028.png
      :scale: 100%
      :alt: reST_doc_028.png

-----

Inserting a list symbol
***********************


+----------------------------+------------------------------------------------+----------------+
| コマンド名                 | 意味                                           | ショートカット |
+============================+================================================+================+
|| List Numbered/ Unnumbered || リストで使用する、 次の記号を先頭に挿入します || ``alt + l``   |
|| (箇条書き/ 段落番号)      || ``1.`` ``#.`` ``*``                           ||               |
+----------------------------+------------------------------------------------+----------------+

次の手順で実行します。

1. コマンドを実行します
2. 挿入する記号のリストがでてくるので、いずれかの項目を選択します

   .. figure:: ./../../_images/reST_doc_030.png
      :scale: 100%
      :alt: reST_doc_030.png

3. 記号が挿入されます

   .. figure:: ./../../_images/reST_doc_031.png
      :scale: 100%
      :alt: reST_doc_031.png

