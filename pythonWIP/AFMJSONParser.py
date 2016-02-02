import json
from collections import defaultdict
#data is the F5 JSON response to the query to https://localhost/mgmt/tm/security/dos/device-config/stats

def parser(data):
	AFMDict = defaultdict(lambda: defaultdict(dict))
	for entry in data["entries"]:
		newdict = {}
		for stat in data["entries"][entry]['nestedStats']["entries"]:
			newdict[stat] = data["entries"][entry]['nestedStats']["entries"][stat]
		AFMDict[entry]['vectorName'] = newdict['vectorName']['description']
		newdict.pop('vectorName')['description']
		for key in newdict:
			AFMDict[entry][key.strip('common.')] = newdict[key]['value']
	return AFMDict
  
