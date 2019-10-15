#!/bin/python
'''
import math
import os
import random
import re
import sys
'''


# Complete the findNumber function below. e5470af9
def findNumber(arr, k):
    for i in arr:
        if i == k:
            return "YES"
        elif i != k:
            return "NO"


myArr = [1, 2, 3, 4, 5, ]
myArr2 = [3, 1, 2]


print(findNumber(myArr, 1))
print(findNumber(myArr, 5))


# if __name__ == '__main__':
