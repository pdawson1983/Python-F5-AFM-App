import json
from collection import defaultdict
#data is the F5 JSON response to the query to https://localhost/mgmt/tm/security/dos/device-config/stats

def parser(data):
	AFMDict = defaultdict(lambda: defaultdict(dict))
	for entry in data["entries"]:
		newdict = {}
		#Debug prints
		#print json.dumps(entry, indent=4, sort_keys=True)
		#print "=" * 70
		for stat in data["entries"][entry]['nestedStats']["entries"]:
			newdict[stat] = data["entries"][entry]['nestedStats']["entries"][stat]
		AFMDict[entry]['vectorName'] = newdict['vectorName']['description']
		#Debug Print
		#print newdict.pop('vectorName')['description']
		for key in newdict:
			#Debug Print
			#print "%s \t %s " %(key.strip('common.'), newdict[key]['value'])
			AFMDict[entry][key.strip('common.')] = newdict[key]['value']
	#debug print
	#print "=" * 70
	return AFMDict
  
