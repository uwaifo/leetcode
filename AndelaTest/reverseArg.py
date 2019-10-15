def reversed_args(f):
    if f == 'pow':
        return pow
    elif f == 'cmp':
        return cmp


def pow(x, y):
    return pow(x, y)


def cmp(x, y):
    return pow(y, x)


print()
