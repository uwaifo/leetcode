'''
Before starting it is important to note what a prime number is.

    A prime number has to be a positive integer
    Divisible by exactly 2 integers (1 and itself)
    1 is not a prime number
'''


def manipulate_generator(generator, n):
    print('entered')

    nonPrimes = [1]
    primeCounter = 2
    while len(nonPrimes) < n:
        # print(primeCounter)
        # nonPrimes.append(primeCounter)
        primeCounter = primeCounter + 1

        primmer = True
        for num in range(2, primeCounter):
            if primeCounter % num == 0:
                primmer = False
        if primmer == False:
            nonPrimes.append(primeCounter)

    for item in nonPrimes:
        generator
        # print(item)
        return item

    # return nonPrimes


def positive_integers_generator():
    n = 1
    while True:
        x = yield n
        if x is not None:
            n = x
        else:
            n += 1


# print(positive_integers_generator())
#manipulate_generator(positive_integers_generator, 9)


#k = int(input())
k = 12
g = positive_integers_generator()
for _ in range(k):
    n = next(g)
    print(n)
    manipulate_generator(g, n)
