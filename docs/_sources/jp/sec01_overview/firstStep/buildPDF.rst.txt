PDFへのビルド
##############

PDFやepubへの変換は、 ``Terminal> Run Task...`` から行います。(HTMLへの変換もできます)

ここでは、PDFファイルへの変換方法を見ていきます。

準備
*****

PDFに変換するには、 ``TeX`` が必要です。 :ref:`インストール>TeX <インストールTeX>` を参照し、 **TeX Live 2021** のインストールを行ってください。

手順
*****

1. ``make.bat`` ファイルが保存されているディレクトリを、ワークスペースフォルダとして開きます( ``File> Open Folder...`` )

   .. figure:: ./../../../_images/reST_doc_017.png
      :scale: 100%
      :alt: reST_doc_017.png

2. ``Terminal> Run Task...`` を選択し、次に ``sphinx> Build: latex pdf [User env build]`` もしくは  ``sphinx> Build: latex pdf [Built-in build]`` を選択します

   * ``[User env build]`` はユーザーのマシン環境を使用し、 ``[Built-in build]`` はエクステンションに組み込まれた実行ファイルを使用してビルドします。

   .. figure:: ./../../../_images/reST_doc_003.png
      :scale: 100%
      :alt: reST_doc_003.png

   .. figure:: ./../../../_images/reST_doc_004.png
      :scale: 100%
      :alt: reST_doc_004.png

   .. figure:: ./../../../_images/reST_doc_024.png
      :scale: 100%
      :alt: reST_doc_024.png

3. Terminalが起動し、pdfファイルへの変換が開始されます

   .. figure:: ./../../../_images/reST_doc_025.png
      :scale: 60%
      :alt: reST_doc_025.png

4. 問題なければ ``Enter`` などのボタンを押し、Terminalを閉じてください

----

.. note::
   ``Preview HTML [Built-in build]`` の実行には、 ``sphinxhelper.exe`` という、エクステンションに同梱されているファイルが実行されます。セキュリティソフトによっては制限が加えられる可能性がありますので、このファイルの実行を許可してください。

   尚、このexeファイルの元になっているファイル/プログラムは、 `GitHub <https://github.com/TatsuyaNakamori/vscode-reStructuredText/tree/master/sphinx>`_  で公開されています。
