.. _設定config:

Settings (Config)
##################


Settings(Config)画面を開き( ``File> Preferences> Settings`` )、 ``Extensions> reStructuredText`` を選択します

  .. figure:: ./../../_images/reST_doc_033.png
     :scale: 75%
     :alt: reST_doc_033.png


-----

Preview HTML > End Task: Kill Terminal
**************************************

+-------------------------------------------------+--------------+
| 内容                                            | デフォルト値 |
+=================================================+==============+
|| HTMLのプレビュー機能を使っているときに、       || ``true``    |
|| 自動的にTerminalを閉じるかどうかを設定します。 ||             |
+-------------------------------------------------+--------------+

| 値を ``false`` にすると、Terminalは閉じなくなります。
| エラーなどの内容を確認したいときは ``false`` に変更してください。


-----

.. _SphinxクイックスタートOptions:

Sphinx Quick Start: Options
***************************

Taskの :ref:`クイックスタート` 機能を使用する時のオプションです。

+---------------------------------------+-------------------------------------------+------------------+
| オプション名                          | 意味                                      | デフォルト値     |
+=======================================+===========================================+==================+
| Project name                          | プロジェクト名 ( `project`_ )             | ``My Document``  |
+---------------------------------------+-------------------------------------------+------------------+
| Author name(s)                        | 著者名 ( `copyright`_ )                   | ``Your name``    |
+---------------------------------------+-------------------------------------------+------------------+
| Project version                       | プロジェクトのバージョン ( `version`_ )   | ``1.0``          |
+---------------------------------------+-------------------------------------------+------------------+
| Project release                       | プロジェクトのリリース ( `release`_ )     | ``1.0.0``        |
+---------------------------------------+-------------------------------------------+------------------+
| Project language                      | ドキュメント言語 ( `language`_ )          | ``en (English)`` |
+---------------------------------------+-------------------------------------------+------------------+
| Separate source and build directories | ソースとビルドのディレクトリを分割します  | ``true``         |
+---------------------------------------+-------------------------------------------+------------------+
| Use epub                              | epub を使用するとき、有効にします         | ``true``         |
+---------------------------------------+-------------------------------------------+------------------+
| Enable autodoc extension              | sphinx.ext.autodoc 拡張を有効にします     | ``true``         |
+---------------------------------------+-------------------------------------------+------------------+
| Enable doctest extension              | sphinx.ext.doctest 拡張を有効にします     | ``true``         |
+---------------------------------------+-------------------------------------------+------------------+
| Enable intersphinx extension          | sphinx.ext.intersphinx 拡張を有効にします | ``true``         |
+---------------------------------------+-------------------------------------------+------------------+
| Enable todo extension                 | sphinx.ext.todo 拡張を有効にします        | ``true``         |
+---------------------------------------+-------------------------------------------+------------------+
| Enable coverage extension             | sphinx.ext.coverage 拡張を有効にします    | ``true``         |
+---------------------------------------+-------------------------------------------+------------------+
| Enable imgmath extension              | sphinx.ext.imgmath 拡張を有効にします     | ``true``         |
+---------------------------------------+-------------------------------------------+------------------+
| Enable mathjax extension              | sphinx.ext.mathjax 拡張を有効にします     | ``true``         |
+---------------------------------------+-------------------------------------------+------------------+
| Enable ifconfig extension             | sphinx.ext.ifconfig 拡張を有効にします    | ``true``         |
+---------------------------------------+-------------------------------------------+------------------+
| Enable viewcode extension             | sphinx.ext.viewcode 拡張を有効にします    | ``true``         |
+---------------------------------------+-------------------------------------------+------------------+
| Enable githubpages extension          | sphinx.ext.githubpages 拡張を有効にします | ``true``         |
+---------------------------------------+-------------------------------------------+------------------+

.. _project: https://www.sphinx-doc.org/ja/master/usage/configuration.html#confval-project
.. _copyright: https://www.sphinx-doc.org/ja/master/usage/configuration.html#confval-copyright
.. _version: https://www.sphinx-doc.org/ja/master/usage/configuration.html#confval-version
.. _release: https://www.sphinx-doc.org/ja/master/usage/configuration.html#confval-release
.. _language: https://www.sphinx-doc.org/ja/master/usage/configuration.html#confval-language


.. seealso::
   * `sphinx-quickstart <https://www.sphinx-doc.org/ja/master/man/sphinx-quickstart.html>`_
   * `設定(conf.py) <https://www.sphinx-doc.org/ja/master/usage/configuration.html>`_




-----

.. note::
   もし、何かトラブルがあった場合は、 `Issues <https://github.com/TatsuyaNakamori/vscode-reStructuredText/issues>`_ に報告してください。バグなどの報告はこのページからのみ受け付けています。

