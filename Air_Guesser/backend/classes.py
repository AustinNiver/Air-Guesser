import re
import requests
from bs4 import BeautifulSoup


def getImages(site):
    response = requests.get(site)
    soup = BeautifulSoup(response.text, 'html.parser')
    img_tags = soup.find_all(class_='_6tbg2q')
    urls = [img['src'] for img in img_tags]
    print(urls)
    return urls

getImages("https://www.airbnb.com/rooms/13124733?source_impression_id=p3_1648927787_Gbo%2BLlM18pvDx8bh")