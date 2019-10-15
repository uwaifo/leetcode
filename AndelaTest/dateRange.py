#!/bin/python3

import sys
import os
from urllib.request import Request
from urllib.request import urlopen
from urllib.error import URLError
import json


# Complete the function below.

from datetime import datetime, timedelta


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

    weekdayArray = ['Monday', 'Tuesday', 'Wednesday',
                    'Thursday', 'Friday', 'Saturday', 'Sunday']

    # check that weedDay is valid
    if weekDay in weekdayArray:
        #
        firstDate = datetime.strptime(firstDate, "%d-%B-%Y")
        lastDate = datetime.strptime(lastDate, "%d-%B-%Y")
        queryBox = []
        resultBox = []

        for dt in daterange(firstDate, lastDate):

            if weekDay in dt.strftime("%A %-d %B %Y"):
                queryBox.append(baseUrl + "?date=" + dt.strftime("%-d-%B-%Y"))

        # Query API with valid dates
        for item in queryBox:
            r = urlopen(item).read()
            response = json.loads(r.decode('utf-8'))
            if response["data"]:
                fDate = response['data'][0]['date']
                fOpen = response['data'][0]['open']
                fClose = response['data'][0]['close']
                resultBox.append([fDate, fOpen, fClose])
        return getStock(resultBox)
    else:
        return -1


try:
    _firstDate = str(input())
except:
    _firstDate = None


try:
    _lastDate = str(input())
except:
    _lastDate = None


try:
    _weekDay = str(input())
except:
    _weekDay = None

openAndClosePrices(_firstDate, _lastDate, _weekDay)
