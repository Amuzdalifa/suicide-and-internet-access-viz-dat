import os
import json
import itertools

with open("Followers/data.json", 'r') as f:
    datastore = json.load(f)

followers = datastore['followers_ids']
following = datastore['following_ids']

friends = []
friends.extend(followers)
for f in following:
	if (not f in followers):
		friends.append(f)

# for f in friends:

# 	query = 'python2 GetOldTweets-python-master/Exporter.py ' + '--username "' + f + '" ' + '--since 2019-01-22 --until 2019-01-24 ' + '--output "results/' + f + '.csv"'
# 	print(query)
# 	os.system(query)
# os.system('echo "Mantap"')

with open("friends.json", 'w') as f:
    json.dump(friends, f)