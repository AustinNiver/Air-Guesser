import bottle
import classes
import json

data= classes.getImages("https://www.airbnb.com/rooms/13124733?source_impression_id=p3_1648927787_Gbo%2BLlM18pvDx8bh")

@bottle.route("/")
def index():
    return bottle.static_file("index.html",root="Frontend/")
@bottle.route("/styleSheet.css")
def styleSheet():
    return bottle.static_file("styleSheet.css", root='Frontend/')
@bottle.route("/AJAX.js")
def ajax():
    return bottle.static_file("AJAX.js", root='Frontend/')
@bottle.route("/processing.js")
def process():
    return bottle.static_file("processing.js", root='Frontend/')
@bottle.route("/image")
def image():
    out=json.dumps(data)
    return out



bottle.run(host='0.0.0.0',port=8080)
