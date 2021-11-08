.. _SettingConfig:

Settings (Config)
##################

.. contents:: Table of contents for this page
   :depth: 2
   :local:


Open the Settings (Config) screen ( ``File> Preferences> Settings`` ) and select ``Extensions> reStructuredText`` .

  .. figure:: ./../../_images/reST_doc_033.png
     :scale: 75%
     :alt: reST_doc_033.png


-----

Preview HTML > End Task: Kill Terminal
**************************************

+----------------------------------------------------------+---------------+
| Description                                              | Default value |
+==========================================================+===============+
|| Sets whether or not to automatically close the Terminal || ``true``     |
|| when building with the HTML preview function.           ||              |
+----------------------------------------------------------+---------------+

| If you set the value to ``false`` , Terminal will not close.
| If you want to check for errors, etc., change the value to ``false`` .


-----

.. _SphinxQuickStartOptions:

Sphinx Quick Start: Options
***************************

This is an option when using the :ref:`QuickStart` feature of Task.

+---------------------------------------+------------------------------------------------+------------------+
| Options                               | Description                                    | Default value    |
+=======================================+================================================+==================+
| Project name                          | Set the project name ( `project`_ )            | ``My Document``  |
+---------------------------------------+------------------------------------------------+------------------+
| Author name(s)                        | Set author name ( `copyright`_ )               | ``Your name``    |
+---------------------------------------+------------------------------------------------+------------------+
| Project version                       | Set the version of the project ( `version`_ )  | ``1.0``          |
+---------------------------------------+------------------------------------------------+------------------+
| Project release                       | Set the release for the project ( `release`_ ) | ``1.0.0``        |
+---------------------------------------+------------------------------------------------+------------------+
| Project language                      | Set the document language ( `language`_ )      | ``en (English)`` |
+---------------------------------------+------------------------------------------------+------------------+
| Separate source and build directories | Split the source and build directories         | ``false``        |
+---------------------------------------+------------------------------------------------+------------------+
| Use epub                              | Enable when using epub                         | ``false``        |
+---------------------------------------+------------------------------------------------+------------------+
| Enable autodoc extension              | Enable the sphinx.ext.autodoc extension        | ``false``        |
+---------------------------------------+------------------------------------------------+------------------+
| Enable doctest extension              | Enable the sphinx.ext.doctest extension        | ``false``        |
+---------------------------------------+------------------------------------------------+------------------+
| Enable intersphinx extension          | Enable the sphinx.ext.intersphinx extension    | ``false``        |
+---------------------------------------+------------------------------------------------+------------------+
| Enable todo extension                 | Enable the sphinx.ext.todo extension           | ``false``        |
+---------------------------------------+------------------------------------------------+------------------+
| Enable coverage extension             | Enable the sphinx.ext.coverage extension       | ``false``        |
+---------------------------------------+------------------------------------------------+------------------+
| Enable imgmath extension              | Enable the sphinx.ext.imgmath extension        | ``false``        |
+---------------------------------------+------------------------------------------------+------------------+
| Enable mathjax extension              | Enable the sphinx.ext.mathjax extension        | ``false``        |
+---------------------------------------+------------------------------------------------+------------------+
| Enable ifconfig extension             | Enable the sphinx.ext.ifconfig extension       | ``false``        |
+---------------------------------------+------------------------------------------------+------------------+
| Enable viewcode extension             | Enable the sphinx.ext.viewcode extension       | ``false``        |
+---------------------------------------+------------------------------------------------+------------------+
| Enable githubpages extension          | Enable the sphinx.ext.githubpages extension    | ``false``        |
+---------------------------------------+------------------------------------------------+------------------+

.. _project: https://www.sphinx-doc.org/ja/master/usage/configuration.html#confval-project
.. _copyright: https://www.sphinx-doc.org/ja/master/usage/configuration.html#confval-copyright
.. _version: https://www.sphinx-doc.org/ja/master/usage/configuration.html#confval-version
.. _release: https://www.sphinx-doc.org/ja/master/usage/configuration.html#confval-release
.. _language: https://www.sphinx-doc.org/ja/master/usage/configuration.html#confval-language


.. seealso::
   * `sphinx-quickstart <https://www.sphinx-doc.org/ja/master/man/sphinx-quickstart.html>`_
   * `Configuration(conf.py) <https://www.sphinx-doc.org/ja/master/usage/configuration.html>`_

-----

.. note::
   If you have any trouble, please report it to `Issues <https://github.com/TatsuyaNakamori/vscode-reStructuredText/issues>`_. Bugs and other reports are only accepted from this page.

