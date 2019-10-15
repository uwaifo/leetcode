#!/bin/python

import sys
import os
from urllib.request import urlopen
from urllib.request import Request
from urllib.error import URLError
from datetime import datetime
from datetime import date, timedelta

import json


def daterange(date1, date2):
    for n in range(int((date2 - date1).days)+1):
        yield date1 + timedelta(n)
# Complete the function below.


def getStock(arr):
    for item in arr:
        [date, open, close] = item
        print(date, open, close)
    return


def openAndClosePrices(firstDate, lastDate, weekDay):
    baseUrl = 'https://jsonmock.hackerrank.com/api/stocks'
    #baseResponse = urlopen(baseUrl)
    #data = json.loads(baseResponse.read())
    weekdayArray = ['Monday', 'Tuesday', 'Wednesday',
                    'Thursday', 'Friday', 'Saturday', 'Sunday']
    #firstDate = datetime.strptime(firstDate, "%d-%B-%Y").strftime("%A %-d %B %Y")
    #lastDate = datetime.strptime(lastDate, "%d-%B-%Y").strftime("%A %-d %B %Y")

    # check that weedDay is valid
    if weekDay in weekdayArray:
        #
        firstDate = datetime.strptime(firstDate, "%d-%B-%Y")
        lastDate = datetime.strptime(lastDate, "%d-%B-%Y")
        queryBox = []
        resultBox = []

        for dt in daterange(firstDate, lastDate):
            # print(dt.strftime("%Y-%m-%d"))
            if weekDay in dt.strftime("%A %-d %B %Y"):
                queryBox.append(baseUrl + "?date=" + dt.strftime("%-d-%B-%Y"))

        # Query API with valid dates
        for item in queryBox:
            #qString = baseUrl + "?date=" + item
            # print(item)
            r = urlopen(item).read()
            response = json.loads(r.decode('utf-8'))
            if response["data"]:
                # resultBox.append(response["data"])
                fDate = response['data'][0]['date']
                fOpen = response['data'][0]['open']
                fClose = response['data'][0]['close']
                resultBox.append([fDate, fOpen, fClose])
        #tester = getStock(resultBox)
        return getStock(resultBox)
        # return tester

    else:
        return -1

    # return weekdayArray


openAndClosePrices('1-January-2000', '22-February-2000', 'Monday')
# urllib.request.urlopen

'''
Sample Input For Custom Testing

1-January-2000 22-February-2000 Monday

 

Sample Output

17-January-2000 5617.7 5404.07
31-January-2000 5338.67 5205.29
7-February-2000 5431.55 5474
14-February-2000 6130.23 5924.31
21-February-2000 5874.25 5876.89
'''
