# twitter-ssscraper
Twitter follower scraper in Python

This repo contains three scripts:

- Scraper to collect user account information from Twitter. Designed to scrape data starting with an ego user and the ego's alters (followers), and each alters' alters (followers' followers).
- Script to merge individual user records into JSON
- Script to construct followee-follower pairs (i.e. network edges) from individual user records and save as a CSV.

The resulting JSON and CSV files are ready to be imported into a network graphing software (e.g. R) for analysis.
