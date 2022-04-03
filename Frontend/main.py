import bottle
import classes
import json

data=classes.getImages("https://www.airbnb.com/rooms/13124733?source_impression_id=p3_1648927787_Gbo%2BLlM18pvDx8bh")

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
    out=json.dumps(data)
    return out

bottle.run(host='0.0.0.0',port=8080)
