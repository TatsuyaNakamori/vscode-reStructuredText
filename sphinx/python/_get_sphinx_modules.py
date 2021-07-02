# import pkg_resources

# def main():
#     for _lib in pkg_resources.working_set:
#         print(_lib.project_name, _lib.version)

# =====================================

import re
import glob
import os
from pprint import pprint


def main():
    init_packages_dir   = "C:/Users/tnaka/Documents/_tmp/pyenv/_default_python_packages/Lib/site-packages"
    sphinx_packages_dir = "C:/Users/tnaka/Documents/_tmp/pyenv/sphinx/Lib/site-packages"

    os.chdir(init_packages_dir)
    init_files = glob.glob("./**/*.py", recursive=True)
    # pprint(init_files)

    hiddenimports_list = []
    all_sphinx_packages = []

    os.chdir(sphinx_packages_dir)
    sphinx_files = glob.glob("./**/*.py", recursive=True)
    for sphinx_file in sphinx_files:
        all_sphinx_packages.append(sphinx_file)

        if sphinx_file not in init_files:
            sphinx_file = sphinx_file.replace("\\", "/")
            _module_hierarchy = sphinx_file.split("/")[1:]

            if _module_hierarchy[-1] == "__init__.py":
                hiddenimports_list.append(".".join(_module_hierarchy[:-1]))
            else:
                _module_hierarchy[-1] = _module_hierarchy[-1].split(".")[0]
                hiddenimports_list.append(".".join(_module_hierarchy))

    # pprint(all_sphinx_packages)
    pprint(hiddenimports_list)


if __name__ == '__main__':
    main()
