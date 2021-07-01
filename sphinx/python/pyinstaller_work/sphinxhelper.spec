# -*- mode: python ; coding: utf-8 -*-

# exeに変換して、'sphinx_rtd_theme'が収集されていなかったら、手動で入れる

block_cipher = None


a = Analysis(['..\\src\\main.py'],
             pathex=['E:\\Dropbox\\projects\\VisualStudioCode\\extensions\\reStructuredText\\resttext\\sphinx\\python\\pyinstaller_work\\'],
             binaries=[],
             datas=[],
             hiddenimports=[
                'sphinx_rtd_theme',
                'imagesize',
                'pyparsing',
                'alabaster.support',
                'alabaster._version',
                'alabaster',
                'babel.core',
                'babel.dates',
                'babel.languages',
                'babel.lists',
                'babel.localedata',
                'babel.numbers',
                'babel.plural',
                'babel.support',
                'babel.units',
                'babel.util',
                'babel._compat',
                'babel',
                'babel.localtime._unix',
                'babel.localtime._win32',
                'babel.localtime',
                'babel.messages.catalog',
                'babel.messages.checkers',
                'babel.messages.extract',
                'babel.messages.frontend',
                'babel.messages.jslexer',
                'babel.messages.mofile',
                'babel.messages.plurals',
                'babel.messages.pofile',
                'babel.messages',
                'certifi.core',
                'certifi',
                'certifi.__main__',
                'chardet.big5freq',
                'chardet.big5prober',
                'chardet.chardistribution',
                'chardet.charsetgroupprober',
                'chardet.charsetprober',
                'chardet.codingstatemachine',
                'chardet.compat',
                'chardet.cp949prober',
                'chardet.enums',
                'chardet.escprober',
                'chardet.escsm',
                'chardet.eucjpprober',
                'chardet.euckrfreq',
                'chardet.euckrprober',
                'chardet.euctwfreq',
                'chardet.euctwprober',
                'chardet.gb2312freq',
                'chardet.gb2312prober',
                'chardet.hebrewprober',
                'chardet.jisfreq',
                'chardet.jpcntx',
                'chardet.langbulgarianmodel',
                'chardet.langgreekmodel',
                'chardet.langhebrewmodel',
                'chardet.langhungarianmodel',
                'chardet.langrussianmodel',
                'chardet.langthaimodel',
                'chardet.langturkishmodel',
                'chardet.latin1prober',
                'chardet.mbcharsetprober',
                'chardet.mbcsgroupprober',
                'chardet.mbcssm',
                'chardet.sbcharsetprober',
                'chardet.sbcsgroupprober',
                'chardet.sjisprober',
                'chardet.universaldetector',
                'chardet.utf8prober',
                'chardet.version',
                'chardet',
                'chardet.cli.chardetect',
                'chardet.cli',
                'chardet.metadata.languages',
                'chardet.metadata',
                'colorama.ansi',
                'colorama.ansitowin32',
                'colorama.initialise',
                'colorama.win32',
                'colorama.winterm',
                'colorama',
                'docutils.core',
                'docutils.examples',
                'docutils.frontend',
                'docutils.io',
                'docutils.nodes',
                'docutils.statemachine',
                'docutils',
                'docutils.languages.af',
                'docutils.languages.ca',
                'docutils.languages.cs',
                'docutils.languages.da',
                'docutils.languages.de',
                'docutils.languages.en',
                'docutils.languages.eo',
                'docutils.languages.es',
                'docutils.languages.fa',
                'docutils.languages.fi',
                'docutils.languages.fr',
                'docutils.languages.gl',
                'docutils.languages.he',
                'docutils.languages.it',
                'docutils.languages.ja',
                'docutils.languages.ko',
                'docutils.languages.lt',
                'docutils.languages.lv',
                'docutils.languages.nl',
                'docutils.languages.pl',
                'docutils.languages.pt_br',
                'docutils.languages.ru',
                'docutils.languages.sk',
                'docutils.languages.sv',
                'docutils.languages.zh_cn',
                'docutils.languages.zh_tw',
                'docutils.languages',
                'docutils.parsers.null',
                'docutils.parsers',
                'docutils.parsers.rst.roles',
                'docutils.parsers.rst.states',
                'docutils.parsers.rst.tableparser',
                'docutils.parsers.rst',
                'docutils.parsers.rst.directives.admonitions',
                'docutils.parsers.rst.directives.body',
                'docutils.parsers.rst.directives.html',
                'docutils.parsers.rst.directives.images',
                'docutils.parsers.rst.directives.misc',
                'docutils.parsers.rst.directives.parts',
                'docutils.parsers.rst.directives.references',
                'docutils.parsers.rst.directives.tables',
                'docutils.parsers.rst.directives',
                'docutils.parsers.rst.languages.af',
                'docutils.parsers.rst.languages.ca',
                'docutils.parsers.rst.languages.cs',
                'docutils.parsers.rst.languages.da',
                'docutils.parsers.rst.languages.de',
                'docutils.parsers.rst.languages.en',
                'docutils.parsers.rst.languages.eo',
                'docutils.parsers.rst.languages.es',
                'docutils.parsers.rst.languages.fa',
                'docutils.parsers.rst.languages.fi',
                'docutils.parsers.rst.languages.fr',
                'docutils.parsers.rst.languages.gl',
                'docutils.parsers.rst.languages.he',
                'docutils.parsers.rst.languages.it',
                'docutils.parsers.rst.languages.ja',
                'docutils.parsers.rst.languages.ko',
                'docutils.parsers.rst.languages.lt',
                'docutils.parsers.rst.languages.lv',
                'docutils.parsers.rst.languages.nl',
                'docutils.parsers.rst.languages.pl',
                'docutils.parsers.rst.languages.pt_br',
                'docutils.parsers.rst.languages.ru',
                'docutils.parsers.rst.languages.sk',
                'docutils.parsers.rst.languages.sv',
                'docutils.parsers.rst.languages.zh_cn',
                'docutils.parsers.rst.languages.zh_tw',
                'docutils.parsers.rst.languages',
                'docutils.readers.doctree',
                'docutils.readers.pep',
                'docutils.readers.standalone',
                'docutils.readers',
                'docutils.transforms.components',
                'docutils.transforms.frontmatter',
                'docutils.transforms.misc',
                'docutils.transforms.parts',
                'docutils.transforms.peps',
                'docutils.transforms.references',
                'docutils.transforms.universal',
                'docutils.transforms.writer_aux',
                'docutils.transforms',
                'docutils.utils.code_analyzer',
                'docutils.utils.error_reporting',
                'docutils.utils.punctuation_chars',
                'docutils.utils.roman',
                'docutils.utils.smartquotes',
                'docutils.utils.urischemes',
                'docutils.utils',
                'docutils.utils.math.latex2mathml',
                'docutils.utils.math.math2html',
                'docutils.utils.math.tex2mathml_extern',
                'docutils.utils.math.tex2unichar',
                'docutils.utils.math.unichar2tex',
                'docutils.utils.math',
                'docutils.writers.docutils_xml',
                'docutils.writers.manpage',
                'docutils.writers.null',
                'docutils.writers.pseudoxml',
                'docutils.writers._html_base',
                'docutils.writers',
                'docutils.writers.html4css1',
                'docutils.writers.html5_polyglot',
                'docutils.writers.latex2e',
                'docutils.writers.odf_odt.pygmentsformatter',
                'docutils.writers.odf_odt',
                'docutils.writers.pep_html',
                'docutils.writers.s5_html',
                'docutils.writers.xetex',
                'idna.codec',
                'idna.compat',
                'idna.core',
                'idna.idnadata',
                'idna.intranges',
                'idna.package_data',
                'idna.uts46data',
                'idna',
                'jinja2.asyncfilters',
                'jinja2.asyncsupport',
                'jinja2.bccache',
                'jinja2.compiler',
                'jinja2.constants',
                'jinja2.debug',
                'jinja2.defaults',
                'jinja2.environment',
                'jinja2.exceptions',
                'jinja2.ext',
                'jinja2.filters',
                'jinja2.idtracking',
                'jinja2.lexer',
                'jinja2.loaders',
                'jinja2.meta',
                'jinja2.nativetypes',
                'jinja2.nodes',
                'jinja2.optimizer',
                'jinja2.parser',
                'jinja2.runtime',
                'jinja2.sandbox',
                'jinja2.tests',
                'jinja2.utils',
                'jinja2.visitor',
                'jinja2._compat',
                'jinja2._identifier',
                'jinja2',
                'markupsafe._compat',
                'markupsafe._constants',
                'markupsafe._native',
                'markupsafe',
                'packaging.markers',
                'packaging.requirements',
                'packaging.specifiers',
                'packaging.tags',
                'packaging.utils',
                'packaging.version',
                'packaging._compat',
                'packaging._structures',
                'packaging._typing',
                'packaging.__about__',
                'packaging',
                'pygments.cmdline',
                'pygments.console',
                'pygments.filter',
                'pygments.formatter',
                'pygments.lexer',
                'pygments.modeline',
                'pygments.plugin',
                'pygments.regexopt',
                'pygments.scanner',
                'pygments.sphinxext',
                'pygments.style',
                'pygments.token',
                'pygments.unistring',
                'pygments.util',
                'pygments',
                'pygments.__main__',
                'pygments.filters',
                'pygments.formatters.bbcode',
                'pygments.formatters.html',
                'pygments.formatters.img',
                'pygments.formatters.irc',
                'pygments.formatters.latex',
                'pygments.formatters.other',
                'pygments.formatters.rtf',
                'pygments.formatters.svg',
                'pygments.formatters.terminal',
                'pygments.formatters.terminal256',
                'pygments.formatters._mapping',
                'pygments.formatters',
                'pygments.lexers.actionscript',
                'pygments.lexers.agile',
                'pygments.lexers.algebra',
                'pygments.lexers.ambient',
                'pygments.lexers.amdgpu',
                'pygments.lexers.ampl',
                'pygments.lexers.apl',
                'pygments.lexers.archetype',
                'pygments.lexers.arrow',
                'pygments.lexers.asm',
                'pygments.lexers.automation',
                'pygments.lexers.bare',
                'pygments.lexers.basic',
                'pygments.lexers.bibtex',
                'pygments.lexers.boa',
                'pygments.lexers.business',
                'pygments.lexers.capnproto',
                'pygments.lexers.cddl',
                'pygments.lexers.chapel',
                'pygments.lexers.clean',
                'pygments.lexers.compiled',
                'pygments.lexers.configs',
                'pygments.lexers.console',
                'pygments.lexers.crystal',
                'pygments.lexers.csound',
                'pygments.lexers.css',
                'pygments.lexers.c_cpp',
                'pygments.lexers.c_like',
                'pygments.lexers.d',
                'pygments.lexers.dalvik',
                'pygments.lexers.data',
                'pygments.lexers.devicetree',
                'pygments.lexers.diff',
                'pygments.lexers.dotnet',
                'pygments.lexers.dsls',
                'pygments.lexers.dylan',
                'pygments.lexers.ecl',
                'pygments.lexers.eiffel',
                'pygments.lexers.elm',
                'pygments.lexers.email',
                'pygments.lexers.erlang',
                'pygments.lexers.esoteric',
                'pygments.lexers.ezhil',
                'pygments.lexers.factor',
                'pygments.lexers.fantom',
                'pygments.lexers.felix',
                'pygments.lexers.floscript',
                'pygments.lexers.forth',
                'pygments.lexers.fortran',
                'pygments.lexers.foxpro',
                'pygments.lexers.freefem',
                'pygments.lexers.functional',
                'pygments.lexers.futhark',
                'pygments.lexers.gdscript',
                'pygments.lexers.go',
                'pygments.lexers.grammar_notation',
                'pygments.lexers.graph',
                'pygments.lexers.graphics',
                'pygments.lexers.graphviz',
                'pygments.lexers.haskell',
                'pygments.lexers.haxe',
                'pygments.lexers.hdl',
                'pygments.lexers.hexdump',
                'pygments.lexers.html',
                'pygments.lexers.idl',
                'pygments.lexers.igor',
                'pygments.lexers.inferno',
                'pygments.lexers.installers',
                'pygments.lexers.int_fiction',
                'pygments.lexers.iolang',
                'pygments.lexers.j',
                'pygments.lexers.javascript',
                'pygments.lexers.julia',
                'pygments.lexers.jvm',
                'pygments.lexers.lisp',
                'pygments.lexers.make',
                'pygments.lexers.markup',
                'pygments.lexers.math',
                'pygments.lexers.matlab',
                'pygments.lexers.mime',
                'pygments.lexers.ml',
                'pygments.lexers.modeling',
                'pygments.lexers.modula2',
                'pygments.lexers.monte',
                'pygments.lexers.mosel',
                'pygments.lexers.ncl',
                'pygments.lexers.nimrod',
                'pygments.lexers.nit',
                'pygments.lexers.nix',
                'pygments.lexers.oberon',
                'pygments.lexers.objective',
                'pygments.lexers.ooc',
                'pygments.lexers.other',
                'pygments.lexers.parasail',
                'pygments.lexers.parsers',
                'pygments.lexers.pascal',
                'pygments.lexers.pawn',
                'pygments.lexers.perl',
                'pygments.lexers.php',
                'pygments.lexers.pointless',
                'pygments.lexers.pony',
                'pygments.lexers.praat',
                'pygments.lexers.prolog',
                'pygments.lexers.promql',
                'pygments.lexers.python',
                'pygments.lexers.qvt',
                'pygments.lexers.r',
                'pygments.lexers.rdf',
                'pygments.lexers.rebol',
                'pygments.lexers.resource',
                'pygments.lexers.ride',
                'pygments.lexers.rnc',
                'pygments.lexers.roboconf',
                'pygments.lexers.robotframework',
                'pygments.lexers.ruby',
                'pygments.lexers.rust',
                'pygments.lexers.sas',
                'pygments.lexers.scdoc',
                'pygments.lexers.scripting',
                'pygments.lexers.sgf',
                'pygments.lexers.shell',
                'pygments.lexers.sieve',
                'pygments.lexers.slash',
                'pygments.lexers.smalltalk',
                'pygments.lexers.smv',
                'pygments.lexers.snobol',
                'pygments.lexers.solidity',
                'pygments.lexers.special',
                'pygments.lexers.sql',
                'pygments.lexers.stata',
                'pygments.lexers.supercollider',
                'pygments.lexers.tcl',
                'pygments.lexers.templates',
                'pygments.lexers.teraterm',
                'pygments.lexers.testing',
                'pygments.lexers.text',
                'pygments.lexers.textedit',
                'pygments.lexers.textfmts',
                'pygments.lexers.theorem',
                'pygments.lexers.tnt',
                'pygments.lexers.trafficscript',
                'pygments.lexers.typoscript',
                'pygments.lexers.unicon',
                'pygments.lexers.urbi',
                'pygments.lexers.usd',
                'pygments.lexers.varnish',
                'pygments.lexers.verification',
                'pygments.lexers.web',
                'pygments.lexers.webidl',
                'pygments.lexers.webmisc',
                'pygments.lexers.whiley',
                'pygments.lexers.x10',
                'pygments.lexers.xorg',
                'pygments.lexers.yang',
                'pygments.lexers.zig',
                'pygments.lexers._asy_builtins',
                'pygments.lexers._cl_builtins',
                'pygments.lexers._cocoa_builtins',
                'pygments.lexers._csound_builtins',
                'pygments.lexers._lasso_builtins',
                'pygments.lexers._lua_builtins',
                'pygments.lexers._mapping',
                'pygments.lexers._mql_builtins',
                'pygments.lexers._mysql_builtins',
                'pygments.lexers._openedge_builtins',
                'pygments.lexers._php_builtins',
                'pygments.lexers._postgres_builtins',
                'pygments.lexers._scilab_builtins',
                'pygments.lexers._sourcemod_builtins',
                'pygments.lexers._stan_builtins',
                'pygments.lexers._stata_builtins',
                'pygments.lexers._tsql_builtins',
                'pygments.lexers._usd_builtins',
                'pygments.lexers._vbscript_builtins',
                'pygments.lexers._vim_builtins',
                'pygments.lexers',
                'pygments.styles.abap',
                'pygments.styles.algol',
                'pygments.styles.algol_nu',
                'pygments.styles.arduino',
                'pygments.styles.autumn',
                'pygments.styles.borland',
                'pygments.styles.bw',
                'pygments.styles.colorful',
                'pygments.styles.default',
                'pygments.styles.emacs',
                'pygments.styles.friendly',
                'pygments.styles.fruity',
                'pygments.styles.igor',
                'pygments.styles.inkpot',
                'pygments.styles.lovelace',
                'pygments.styles.manni',
                'pygments.styles.material',
                'pygments.styles.monokai',
                'pygments.styles.murphy',
                'pygments.styles.native',
                'pygments.styles.paraiso_dark',
                'pygments.styles.paraiso_light',
                'pygments.styles.pastie',
                'pygments.styles.perldoc',
                'pygments.styles.rainbow_dash',
                'pygments.styles.rrt',
                'pygments.styles.sas',
                'pygments.styles.solarized',
                'pygments.styles.stata_dark',
                'pygments.styles.stata_light',
                'pygments.styles.tango',
                'pygments.styles.trac',
                'pygments.styles.vim',
                'pygments.styles.vs',
                'pygments.styles.xcode',
                'pygments.styles.zenburn',
                'pygments.styles',
                'pytz.exceptions',
                'pytz.lazy',
                'pytz.reference',
                'pytz.tzfile',
                'pytz.tzinfo',
                'pytz',
                'requests.adapters',
                'requests.api',
                'requests.auth',
                'requests.certs',
                'requests.compat',
                'requests.cookies',
                'requests.exceptions',
                'requests.help',
                'requests.hooks',
                'requests.models',
                'requests.packages',
                'requests.sessions',
                'requests.status_codes',
                'requests.structures',
                'requests.utils',
                'requests._internal_utils',
                'requests',
                'requests.__version__',
                'snowballstemmer.among',
                'snowballstemmer.arabic_stemmer',
                'snowballstemmer.armenian_stemmer',
                'snowballstemmer.basestemmer',
                'snowballstemmer.basque_stemmer',
                'snowballstemmer.catalan_stemmer',
                'snowballstemmer.danish_stemmer',
                'snowballstemmer.dutch_stemmer',
                'snowballstemmer.english_stemmer',
                'snowballstemmer.finnish_stemmer',
                'snowballstemmer.french_stemmer',
                'snowballstemmer.german_stemmer',
                'snowballstemmer.greek_stemmer',
                'snowballstemmer.hindi_stemmer',
                'snowballstemmer.hungarian_stemmer',
                'snowballstemmer.indonesian_stemmer',
                'snowballstemmer.irish_stemmer',
                'snowballstemmer.italian_stemmer',
                'snowballstemmer.lithuanian_stemmer',
                'snowballstemmer.nepali_stemmer',
                'snowballstemmer.norwegian_stemmer',
                'snowballstemmer.porter_stemmer',
                'snowballstemmer.portuguese_stemmer',
                'snowballstemmer.romanian_stemmer',
                'snowballstemmer.russian_stemmer',
                'snowballstemmer.serbian_stemmer',
                'snowballstemmer.spanish_stemmer',
                'snowballstemmer.swedish_stemmer',
                'snowballstemmer.tamil_stemmer',
                'snowballstemmer.turkish_stemmer',
                'snowballstemmer.yiddish_stemmer',
                'snowballstemmer',
                'sphinx.addnodes',
                'sphinx.application',
                'sphinx.config',
                'sphinx.deprecation',
                'sphinx.errors',
                'sphinx.events',
                'sphinx.extension',
                'sphinx.highlighting',
                'sphinx.io',
                'sphinx.jinja2glue',
                'sphinx.parsers',
                'sphinx.project',
                'sphinx.pygments_styles',
                'sphinx.registry',
                'sphinx.roles',
                'sphinx.setup_command',
                'sphinx.theming',
                'sphinx.versioning',
                'sphinx',
                'sphinx.__main__',
                'sphinx.builders.applehelp',
                'sphinx.builders.changes',
                'sphinx.builders.devhelp',
                'sphinx.builders.dirhtml',
                'sphinx.builders.dummy',
                'sphinx.builders.epub3',
                'sphinx.builders.gettext',
                'sphinx.builders.htmlhelp',
                'sphinx.builders.linkcheck',
                'sphinx.builders.manpage',
                'sphinx.builders.qthelp',
                'sphinx.builders.singlehtml',
                'sphinx.builders.texinfo',
                'sphinx.builders.text',
                'sphinx.builders.xml',
                'sphinx.builders._epub_base',
                'sphinx.builders',
                'sphinx.builders.html.transforms',
                'sphinx.builders.html',
                'sphinx.builders.latex.constants',
                'sphinx.builders.latex.nodes',
                'sphinx.builders.latex.theming',
                'sphinx.builders.latex.transforms',
                'sphinx.builders.latex.util',
                'sphinx.builders.latex',
                'sphinx.cmd.build',
                'sphinx.cmd.make_mode',
                'sphinx.cmd.quickstart',
                'sphinx.cmd',
                'sphinx.directives.code',
                'sphinx.directives.other',
                'sphinx.directives.patches',
                'sphinx.directives',
                'sphinx.domains.c',
                'sphinx.domains.changeset',
                'sphinx.domains.citation',
                'sphinx.domains.cpp',
                'sphinx.domains.index',
                'sphinx.domains.javascript',
                'sphinx.domains.math',
                'sphinx.domains.python',
                'sphinx.domains.rst',
                'sphinx.domains.std',
                'sphinx.domains',
                'sphinx.environment',
                'sphinx.environment.adapters.asset',
                'sphinx.environment.adapters.indexentries',
                'sphinx.environment.adapters.toctree',
                'sphinx.environment.adapters',
                'sphinx.environment.collectors.asset',
                'sphinx.environment.collectors.dependencies',
                'sphinx.environment.collectors.indexentries',
                'sphinx.environment.collectors.metadata',
                'sphinx.environment.collectors.title',
                'sphinx.environment.collectors.toctree',
                'sphinx.environment.collectors',
                'sphinx.ext.apidoc',
                'sphinx.ext.autosectionlabel',
                'sphinx.ext.coverage',
                'sphinx.ext.doctest',
                'sphinx.ext.duration',
                'sphinx.ext.extlinks',
                'sphinx.ext.githubpages',
                'sphinx.ext.graphviz',
                'sphinx.ext.ifconfig',
                'sphinx.ext.imgconverter',
                'sphinx.ext.imgmath',
                'sphinx.ext.inheritance_diagram',
                'sphinx.ext.intersphinx',
                'sphinx.ext.jsmath',
                'sphinx.ext.linkcode',
                'sphinx.ext.mathjax',
                'sphinx.ext.todo',
                'sphinx.ext.viewcode',
                'sphinx.ext',
                'sphinx.ext.autodoc.deprecated',
                'sphinx.ext.autodoc.directive',
                'sphinx.ext.autodoc.importer',
                'sphinx.ext.autodoc.mock',
                'sphinx.ext.autodoc.typehints',
                'sphinx.ext.autodoc.type_comment',
                'sphinx.ext.autodoc',
                'sphinx.ext.autosummary.generate',
                'sphinx.ext.autosummary',
                'sphinx.ext.napoleon.docstring',
                'sphinx.ext.napoleon.iterators',
                'sphinx.ext.napoleon',
                'sphinx.locale',
                'sphinx.pycode.ast',
                'sphinx.pycode.parser',
                'sphinx.pycode',
                'sphinx.search.da',
                'sphinx.search.de',
                'sphinx.search.en',
                'sphinx.search.es',
                'sphinx.search.fi',
                'sphinx.search.fr',
                'sphinx.search.hu',
                'sphinx.search.it',
                'sphinx.search.ja',
                'sphinx.search.jssplitter',
                'sphinx.search.nl',
                'sphinx.search.no',
                'sphinx.search.pt',
                'sphinx.search.ro',
                'sphinx.search.ru',
                'sphinx.search.sv',
                'sphinx.search.tr',
                'sphinx.search.zh',
                'sphinx.search',
                'sphinx.testing.comparer',
                'sphinx.testing.fixtures',
                'sphinx.testing.path',
                'sphinx.testing.restructuredtext',
                'sphinx.testing.util',
                'sphinx.testing',
                'sphinx.transforms.compact_bullet_list',
                'sphinx.transforms.i18n',
                'sphinx.transforms.references',
                'sphinx.transforms',
                'sphinx.transforms.post_transforms.code',
                'sphinx.transforms.post_transforms.images',
                'sphinx.transforms.post_transforms',
                'sphinx.util.build_phase',
                'sphinx.util.cfamily',
                'sphinx.util.compat',
                'sphinx.util.console',
                'sphinx.util.docfields',
                'sphinx.util.docstrings',
                'sphinx.util.docutils',
                'sphinx.util.fileutil',
                'sphinx.util.i18n',
                'sphinx.util.images',
                'sphinx.util.inspect',
                'sphinx.util.inventory',
                'sphinx.util.jsdump',
                'sphinx.util.jsonimpl',
                'sphinx.util.logging',
                'sphinx.util.matching',
                'sphinx.util.math',
                'sphinx.util.nodes',
                'sphinx.util.osutil',
                'sphinx.util.parallel',
                'sphinx.util.png',
                'sphinx.util.pycompat',
                'sphinx.util.requests',
                'sphinx.util.rst',
                'sphinx.util.smartypants',
                'sphinx.util.tags',
                'sphinx.util.template',
                'sphinx.util.texescape',
                'sphinx.util.typing',
                'sphinx.util',
                'sphinx.util.stemmer.porter',
                'sphinx.util.stemmer',
                'sphinx.writers.html',
                'sphinx.writers.html5',
                'sphinx.writers.latex',
                'sphinx.writers.manpage',
                'sphinx.writers.texinfo',
                'sphinx.writers.text',
                'sphinx.writers.xml',
                'sphinx.writers',
                'sphinxcontrib.applehelp.version',
                'sphinxcontrib.applehelp',
                'sphinxcontrib.devhelp.version',
                'sphinxcontrib.devhelp',
                'sphinxcontrib.htmlhelp.version',
                'sphinxcontrib.htmlhelp',
                'sphinxcontrib.jsmath.version',
                'sphinxcontrib.jsmath',
                'sphinxcontrib.qthelp.version',
                'sphinxcontrib.qthelp',
                'sphinxcontrib.serializinghtml.jsonimpl',
                'sphinxcontrib.serializinghtml.version',
                'sphinxcontrib.serializinghtml',
                'urllib3.connection',
                'urllib3.connectionpool',
                'urllib3.exceptions',
                'urllib3.fields',
                'urllib3.filepost',
                'urllib3.poolmanager',
                'urllib3.request',
                'urllib3.response',
                'urllib3._collections',
                'urllib3._version',
                'urllib3',
                'urllib3.contrib.appengine',
                'urllib3.contrib.ntlmpool',
                'urllib3.contrib.pyopenssl',
                'urllib3.contrib.securetransport',
                'urllib3.contrib.socks',
                'urllib3.contrib._appengine_environ',
                'urllib3.contrib',
                'urllib3.contrib._securetransport.bindings',
                'urllib3.contrib._securetransport.low_level',
                'urllib3.contrib._securetransport',
                'urllib3.packages.six',
                'urllib3.packages',
                'urllib3.packages.backports.makefile',
                'urllib3.packages.backports',
                'urllib3.packages.ssl_match_hostname._implementation',
                'urllib3.packages.ssl_match_hostname',
                'urllib3.util.connection',
                'urllib3.util.proxy',
                'urllib3.util.queue',
                'urllib3.util.request',
                'urllib3.util.response',
                'urllib3.util.retry',
                'urllib3.util.ssltransport',
                'urllib3.util.ssl_',
                'urllib3.util.timeout',
                'urllib3.util.url',
                'urllib3.util.wait',
                'urllib3.util'
             ],
             hookspath=[],
             runtime_hooks=[],
             excludes=[],
             win_no_prefer_redirects=False,
             win_private_assemblies=False,
             cipher=block_cipher,
             noarchive=False)
pyz = PYZ(a.pure, a.zipped_data,
             cipher=block_cipher)
exe = EXE(pyz,
          a.scripts,
          [],
          exclude_binaries=True,
          name='sphinxhelper',
          debug=False,
          bootloader_ignore_signals=False,
          strip=False,
          upx=True,
          console=True )
coll = COLLECT(exe,
               a.binaries,
               a.zipfiles,
               a.datas,
               strip=False,
               upx=True,
               upx_exclude=[],
               name='sphinxhelper')