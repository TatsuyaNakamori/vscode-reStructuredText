import sys
import sphinx.cmd.quickstart as quickstart
import sphinx.cmd.build as build


if sys.argv[1] == "--quickstart":
    sys.exit(quickstart.main(sys.argv[2:]))

# %SPHINXBUILD% -M %1 %SOURCEDIR% %BUILDDIR% %SPHINXOPTS% %O%
# %SPHINXBUILD% -M html source build %SPHINXOPTS% %O%
elif sys.argv[1] == "--build":
    sys.exit(build.main(sys.argv[2:]))

