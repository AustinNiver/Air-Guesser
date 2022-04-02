import bottle
import json
import classes
from apify_client import ApifyClient

# Initialize the ApifyClient with your API token
client = ApifyClient("apify_api_XbiDecc14h8GJq9bjN8qTZZY0uG7Bj0qmP09")

# Prepare the actor input
run_input = {
    "locationQuery": "Buffalo",
    "maxListings": 4,
    "maxReviews": 0,
    "currency": "USD",
    "proxyConfiguration": { "useApifyProxy": True },
    "maxConcurrency": 50,
    "limitPoints": 100,
    "timeoutMs": 60000,
}

# Run the actor and wait for it to finish
run = client.actor("dtrungtin/airbnb-scraper").call(run_input=run_input)

# Fetch and print actor results from the run's dataset (if there are any)
with open("Air_Guesser/backend/data.txt","w") as fp:
    temp=[]
    for item in client.dataset(run["defaultDatasetId"]).iterate_items():
        for key in item.keys():
            se = str(item.get(key,"")).encode("ascii", "ignore")
            sd = se.decode()
            fp.writelines(sd)
            fp.write(",")

        fp.write("\n")
