'''
Array boot camp
The following problem gives good insight into working with arrays: Your input is an array of integers, and you have to reorder its entries 
so that the even entries appear first. This is easy if you use O(n) space, where n is the length of the array. Howeveq, you are required to 
solve it without allocating additional storage.
When working with arrays you should take advantage of the fact that you can operate efficiently on both ends. 
For this problem, we can partition the array into three subarrays: Even, Unclassified, and Odd, appearing in that order. 
Initially Even and Odd are empty, and Unclassified is the entire array. We iterate through Unclassified, 
moving its elements to the boundaries of the Even and Odd subarrays via swaps, thereby expanding Even and Odd, 
and shrinking Unclassified.
'''

myArray = [1, 2, 4, 5]


def getEven(argArray):
    nextEven = 0
    nextOdd = len(argArray) - 1
    #
    while nextEven < nextOdd:
        # iterate through the unclasified argArray
        if argArray[nextEven] % 2 == 0:  # if we find an even number
            nextEven += 1
            print('Even:', nextEven, argArray)

        else:  # if it an odd integer
            argArray[nextEven], argArray[nextOdd] = argArray[nextOdd], argArray[nextEven]
            nextOdd -= 1
            print('Odd:', nextOdd, argArray)

    return argArray


def getEvenNovice(argArray):
    even = []
    odd = []

    for item in range(len(argArray)):
        if argArray[item] % 2 == 0:
            even.append(argArray[item])
        else:
            odd.append(argArray[item])

    argArray = even + odd

    return argArray


print(getEven(myArray))

print(getEvenNovice(myArray))
