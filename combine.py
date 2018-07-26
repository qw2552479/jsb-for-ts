#!/usr/bin/python

import sys
import os


def search_definition_files(file_path):
    if not os.path.exists(file_path):
        return []
    if not os.path.isdir(file_path):
        return [file_path]

    file_list = []
    files = os.listdir(file_path)
    for f in files:
        temp_path = os.path.join(file_path, f)
        if os.path.isdir(temp_path):
            if f[0] == '.':
                continue
            sub_file_list = search_definition_files(temp_path)
            file_list = file_list + sub_file_list
            continue

        if temp_path.endswith('.d.ts'):
            file_list.append(temp_path)

    return file_list


def main():
    from optparse import OptionParser

    parser = OptionParser("usage: %prog [options] {configfile}")
    parser.add_option("-f", action="store", type="string", dest="file_path",
                      help="sets a specific section to be converted")
    parser.add_option("-o", action="store", type="string", dest="outfile", default='out.d.ts',
                      help="specifies the output directory for generated C++ code")

    (opts, args) = parser.parse_args()

    if opts.file_path is None:
        parser.error('file_path is empty')

    try:

        out_file = open(opts.outfile, 'w')
        def_files = search_definition_files(os.path.join('', opts.file_path))
        print(def_files)
        for index, file_name in enumerate(def_files):
            print 'append file: ', file_name
            f = open(file_name)
            lines = f.readlines()
            out_file.writelines(lines)
            f.close()

        out_file.close()

        print 'combine success !!!'

    except Exception as e:
        if e.__class__.__name__ == 'CmdError':
            print 'combine failed: ' + e
            sys.exit(1)
        else:
            raise


# -------------- main --------------
if __name__ == '__main__':
    main()
