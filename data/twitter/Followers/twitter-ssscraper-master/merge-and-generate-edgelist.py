#! /usr/bin/env python3

# Leslie Huang
# Network Analysis 2017
# Utility to generate a CSV of followee-follower links (i.e. network edges) from a directory of JSON files where each file is one user's record
# For instructions how to use and the latest version, go to:
# https://github.com/leslie-huang/twitter-ssscraper

import argparse
import csv
import json
import os
import sys

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

edgelist = []

# generate a list of (followee, follower) tuples
for path in json_paths:
    user_record = read_json(path)
    
    edgelist = edgelist + [(user_record["user_id"], follower) for follower in user_record["followers_ids"]]
    
# Write to CSV
with open("edgelist.csv", "w") as out:
    csv_out = csv.writer(out)
    csv_out.writerow(["followee", "follower"])
    
    for pair in edgelist:
        csv_out.writerow(pair)
        
