import tweepy
import os
import json
import argparse

# Authentication tokens from your Twitter API
# (Censored here because they are private)
CONSUMER_KEY = "Q3BuOCb6YpCcjxRLX80si7iaY"
CONSUMER_SECRET = "8LmPPMK1j40QKn3jKzNP7MSGQXL90ZXfbHLtRbRR6d1mZKVQwe"
ACCESS_TOKEN = "462603440-1WpphlO6HmRcVDZJjglIosJekSOmLLSQ2rkAC3b9"
ACCESS_TOKEN_SECRET = "4A2vZ2ioqwHJANDAHZTPFoKp9scbN9zTAnhlXbkLboZdZ"

# Oauth
auth = tweepy.OAuthHandler(CONSUMER_KEY, CONSUMER_SECRET)
auth.set_access_token(ACCESS_TOKEN, ACCESS_TOKEN_SECRET)

api = tweepy.API(auth, wait_on_rate_limit = True, wait_on_rate_limit_notify = True, retry_count = 3, retry_delay = 60)

# Function to get follower ids. Uses Cursor to handle rate limiting
def get_followers_usernames(screen_name):
    followers_ids = []
    page_count = 0
    
    # Iterate through each page of 5000 followers 
    for page in tweepy.Cursor(api.followers_ids, id = screen_name, count = 5000).pages():
        for uid in page:
        	print(uid)
        	followers_ids.append(api.get_user(uid).screen_name)
        page_count += 1

    return followers_ids

# Function to get user records starting from an ego user (@param screen_name) 
# and all followers to the specific depth (@param depth) 
# and save as JSON in the specified directory (@param folder)
# This is VERY slow. Depth > 1 is not recommended
# To get a single user's record, use depth = 0
def get_user_record(screen_name, depth, folder):
    user_profile = api.get_user(screen_name)
    
    # Create user record
    user_record = {
        "screen_name": user_profile.screen_name,
        "user_id": user_profile.id,
        "num_followers": user_profile.followers_count,
        "followers_ids": get_followers_usernames(screen_name),
        "following_ids": api.friends_ids(screen_name)
        }
    
    # Write user record to JSON
    with open(os.path.join(str(folder), "{}.json".format(user_record["user_id"])), "w") as file:
        json.dump(user_record, file)
    
    # Recurse over followers to specified depth   
    if depth > 0:
        for follower in user_record["followers_ids"]:
            try:
                get_user_record(follower, depth - 1, folder)
            except tweepy.TweepError:
                print("Skipping protected user.")


if __name__ == "__main__":
    ap = argparse.ArgumentParser()
    ap.add_argument("-s", "--screen_name", required = True, help = "Screen name to scrape")
    ap.add_argument("-d", "--depth", required = True, help = "Depth to search for followers of followers")
    ap.add_argument("-f", "--folder", required = True, help = "Folder to save individual JSONs into")
    
    args = vars(ap.parse_args())

    # Start with the ego user supplied by user
    screen_name = args["screen_name"]
    depth = int(args["depth"])
    folder = args["folder"]
    print("Scraping followers of {}...".format(screen_name))
    
    # make directory to contain JSON records
    os.makedirs(folder, exist_ok = True)
    
    get_user_record(screen_name, depth, folder)
    
    