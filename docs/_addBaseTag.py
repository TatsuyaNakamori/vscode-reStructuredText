import sys
import os
import re
from pprint import pprint

BASE_TEMPLATE = "<base href=\"{}\" charset=\"utf-8\"/>"
BASE_URL = "https://tatsuyanakamori.github.io/vscode-reStructuredText"
# BASE_URL = "https://tatsuyanakamori.github.io/reSTForVSCodeDocs"


def main():
    # First, make a pair of full path and url of the html file
    pairs_of_html_url_list = []

    this_py_file = sys.argv[0]
    base_dir = os.path.dirname(this_py_file)
    for cur_dir, dirs, files in os.walk(base_dir):
        for _file in files:
            if not _file.endswith(".html"):
                continue

            html_fullpath = "{}/{}".format(cur_dir, _file)

            if  cur_dir == base_dir:
                base_tag_href = "{}/{}".format(BASE_URL, _file)
            else:
                rel_path = os.path.relpath(html_fullpath, base_dir)
                base_tag_href = "{}/{}".format(BASE_URL, rel_path)

            pairs_of_html_url_list.append(
                [
                    html_fullpath.replace("\\", "/"),
                    base_tag_href.replace("\\", "/")
                ]
            )

    REG_HEAD_TAG = re.compile("(<head>)")
    for html_fullpath, base_tag_href in pairs_of_html_url_list:
        with open(html_fullpath, "r", encoding="utf-8") as f:
            contents = f.read()

        match = REG_HEAD_TAG.search(contents)
        if not match:
            continue

        last_index = match.span()[1]
        new_contents = "{head}\n{base_tag}{remaining_str}".format(
            head=contents[:last_index],
            base_tag=BASE_TEMPLATE.format(base_tag_href),
            remaining_str=contents[last_index:]
        )

        with open(html_fullpath, "w", encoding="utf-8") as f:
            f.write(new_contents)

        print(html_fullpath)






if __name__ == '__main__':
    main()

