import bottle
import classes
import json
import random

data=[{"url":"https://www.airbnb.com/rooms/16101052","loc":{'lat': 42.91942, 'lng': -78.8656},"city":"Buffalo","Country":"United States"},{"url":"https://www.airbnb.com/rooms/1633607","loc":{'lat': 42.9011, 'lng': -78.87445},"city":"Buffalo","Country":"United States"},{"url":"https://www.airbnb.com/rooms/19821724","loc":{'lat': 42.89871, 'lng': -78.87178},"city":"Buffalo","Country":"United States"},{"url":"https://www.airbnb.com/rooms/53146203","loc":{'lat': 42.90607, 'lng': -78.88533},"city":"Buffalo","Country":"United States"},{"url":"https://www.airbnb.com/rooms/27771774","loc":{'lat': 25.81884, 'lng': -80.18198},"city":"Miami","Country":"United States"},{"url":"https://www.airbnb.com/rooms/27227049","loc":{'lat': 25.84816, 'lng': -80.15216},"city":"Miami","Country":"United States"}]

datatemp=classes.getImages("https://www.airbnb.com/rooms/13124733?source_impression_id=p3_1648927787_Gbo%2BLlM18pvDx8bh")

def randiGen():
  num=random.randint(0,len(data)-1)
  return num

@bottle.route("/")
def index():
    return bottle.static_file("index.html",root=".")
  
@bottle.route("/styleSheet.css")
def styleSheet():
    return bottle.static_file("styleSheet.css", root='.')
  
@bottle.route("/processing.js")
def process():
    return bottle.static_file("processing.js", root='.')
  
@bottle.route("/image")
def img():
    num=randiGen()
    images=classes.getImages(data[num].get("url"))
    out=[{"data":data[num]},images]
    out1=json.dumps(out)
    return out1
  

bottle.run(host='0.0.0.0',port=8080)
