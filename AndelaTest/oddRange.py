def oddNumbers(l, r):

    #result = list(range(l, r))
    result = []
    for item in range(l, r + 1):
        if item % 2 != 0:
            result.append(item)

    return result

    # return result


print(oddNumbers(3, 9))
