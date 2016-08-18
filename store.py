import json
import os
from PIL import Image

# with open('img.json') as f:
# 	d = json.load(f)

ddir = [os.path.join(i[0],j) for i in os.walk('./img') for j in i[2]]

# for i in os.walk('./img'):
# 	ddir = i[2]
d = {}
num = 0
for i in ddir:
	num += 1
	d[str(num)] = {}
	d[str(num)]['url'] = i
	img = Image.open(i)
	size = img.size
	d[str(num)]['w'] = size[0]
	d[str(num)]['h'] = size[1]

with open('img.json','w') as f:
	json.dump(d, f)