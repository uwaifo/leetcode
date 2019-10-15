import json
import urllib2
import urllib
import os
import sys


#!/bin/python


# Complete the function below.
def getNumberOfMovies(substr):
    # Endpoint: "https://jsonmock.hackerrank.com/api/movies/search/?Title=substr"

    #f = open(os.environ['OUTPUT_PATH'], 'w')
    baseUrl = "https://jsonmock.hackerrank.com/api/movies/search/?Title="+substr
    # https: // jsonmock.hackerrank.com/api/movies/search /?Title = maze
    r = urllib.urlopen(baseUrl).read()
    #r = urlopen(item).read()
    response = json.loads(r.decode('utf-8'))

    # return len(response)
    return response['total']


print(getNumberOfMovies('maze'))
