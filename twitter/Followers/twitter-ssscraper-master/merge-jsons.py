#! /usr/bin/env python3

# Leslie Huang
# Network Analysis 2017
# Utility to merge individual JSON files for Twitter users into a single file
# For instructions how to use and the latest version, go to:
# https://github.com/leslie-huang/twitter-ssscraper

import argparse
import csv
import json
import os
import sys
from functools import reduce

def read_json(path):
    '''
    Helper function for opening the JSONs
    '''
    with open(path, "r") as f:
        return json.load(f)

# Setup argparse to take directory name (where JSONs are located)
parser = argparse.ArgumentParser()
parser.add_argument("--directory", type = str, help = "Directory in which JSONs are located")
args = parser.parse_args()

# Get list of JSON files in the directory
dir_of_jsons = args.directory
json_filenames = [name for name in os.listdir(dir_of_jsons) if ".json" in name]
json_paths = [os.path.join(dir_of_jsons, json_name) for json_name in json_filenames]

merged_json_lists = [read_json(path) for path in json_paths]

with open("merged_user_records.json", "w") as outfile:
    json.dump(merged_json_lists, outfile)
    
outfile.close()