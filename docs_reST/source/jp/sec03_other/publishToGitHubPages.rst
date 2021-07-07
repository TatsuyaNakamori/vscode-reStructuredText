GitHub Pages用に制作する
##########################

概要
******

GitHub Pages用にページを制作することを考えていますか?

Sphinxで作成したHTMLをGitHub Pagesとしてアップロードすると直面する問題が、CSSのレイアウトが崩れるという問題です。
この問題を解決するためのツールが、 `Convert to GitHub Pages`_ として公開されています。

是非、ダウンロードしてご活用ください。


レイアウトが崩れる原因
**********************

Sphinxでビルドして、ローカルで問題なく表示できても、そのままGitHub Pagesにアップロードするとレイアウトが崩れます。

レイアウトが崩れる原因は2つあります。

1. GitHub Pagesはデフォルトで `jekyll <http://jekyllrb-ja.github.io/>`_  を使用してホスティングを行うため、jekyllでサポートしていないパスを正確に読み取ってくれない
2. CSSなどのパス指定がサーバとローカルで異なり、GitHub Pagesのサーバー上のURLを指定する必要がある

.. figure:: ./../../_images/reST_doc_021.png
    :scale: 100%
    :alt: reST_doc_021.png


解決策
******

次のように設定することで、解決することができます。

1. GithHub Pagesを公開するフォルダ直下に ``.nojekyll`` という空ファイルを置くことで、jekyllをホスティングしないようにする
2. HTMLに記述されているCSSファイルなどへの相対パスを、 ``<base>`` タグを使用してGitHub PagesのURLに変換する


機能
******

``.nojekyll`` ファイルを作成する機能と、HTMLの ``<head>`` 内に ``<base>`` タグを挿入する機能があり、それぞれTaskから実行することができます。


.. figure:: ./../../_images/reST_doc_022.png
    :scale: 100%
    :alt: reST_doc_022.png

.. seealso::
   詳細は、"Convert to GitHub Pages"の `ドキュメント`_ を参照してください。


SphinxでHTMLを作成する時の注意点
********************************

注意事項は特にありません。通常通り作成してください。

Sphinxには ``githubpages 拡張`` がありますが、それを使う必要はありません。

"Convert to GitHub Pages" は、 ``build/html`` に書き出されたHTMLのファイルを、 ``docs`` フォルダ(もしくは ``Root直下`` )にコピーし、 ``<base>`` タグを挿入するという処理まで行います。


リンク
*******

* `Convert to GitHub Pages`_ (Marketplace)
* `ドキュメント`_


.. _Convert to GitHub Pages: https://marketplace.visualstudio.com/items?itemName=TatsuyaNakamori.htmlgithubpages
.. _ドキュメント: https://tatsuyanakamori.github.io/vscode-ConvertHtmlForGithubPages/

