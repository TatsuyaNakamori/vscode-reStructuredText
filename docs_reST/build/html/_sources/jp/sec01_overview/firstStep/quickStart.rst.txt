.. _クイックスタート:

クイックスタート
################

Sphinxの機能である `QuickStart <https://www.sphinx-doc.org/ja/master/man/sphinx-quickstart.html>`_  を、Taskから実行させることができます。

(※現在、Windowsのみの提供です)

手順
*****

1. **中身が空のディレクトリ** を、ワークスペースフォルダとして開きます( ``File> Open Folder...`` )

   .. figure:: ./../../../_images/reST_doc_001.png
      :scale: 100%
      :alt: reST_doc_001.png

2. Config(Settings)画面を開き( ``File> Preferences> Settings`` )、Settings画面から ``Extensions> reStructuredText`` を選択します

   * ``Sphinx Quick Start: Options`` の項目を適宜書き換えます

     .. figure:: ./../../../_images/reST_doc_023.png
        :scale: 100%
        :alt: reST_doc_023.png

     .. seealso::
        オプションの詳細は、 `sphinx-quickstart <https://www.sphinx-doc.org/ja/master/man/sphinx-quickstart.html>`_ と、 :ref:`各機能の詳細> Settings(Config)> Sphinx Quick Start: Options <SphinxクイックスタートOptions>` をご確認ください。

3. ``Terminal> Run Task...`` を選択し、次に ``sphinx> Sphinx: Quick Start`` を選択します

   * ``sphinx> Sphinx: Quick Start`` が出てこない場合は、ワークスペースフォルダが空でない可能性があります。また、OSが対応していない可能性があります。

   .. figure:: ./../../../_images/reST_doc_003.png
      :scale: 100%
      :alt: reST_doc_003.png

   .. figure:: ./../../../_images/reST_doc_004.png
      :scale: 100%
      :alt: reST_doc_004.png

   .. figure:: ./../../../_images/reST_doc_006.png
      :scale: 100%
      :alt: reST_doc_006.png


4. QuickStartが実行され、各種ファイルが生成されます

   .. figure:: ./../../../_images/reST_doc_017.png
      :scale: 100%
      :alt: reST_doc_017.png

   * 上図は、Config(Settings)の設定の ``Separate source and build directories`` の項目を ``true`` にし、sourceとbuildのディレクトリを分けて作成しています。

5. 問題なく作成されたら、 ``Enter`` などのキーを打ち、Terminalを閉じてください

   .. figure:: ./../../../_images/reST_doc_005.png
      :scale: 100%
      :alt: reST_doc_005.png

   * エラーが起こった場合は、Terminalのメッセージを確認してください


.. note::
   sphinxのTaskの実行には、 ``sphinxhelper.exe`` という、エクステンションに同梱されているファイルが実行されます。セキュリティソフトによっては制限が加えられる可能性がありますので、このファイルの実行を許可してください。

   尚、このexeファイルの元になっているファイル/プログラムは、 `GitHub <https://github.com/TatsuyaNakamori/vscode-reStructuredText/tree/master/sphinx>`_  で公開されています。
