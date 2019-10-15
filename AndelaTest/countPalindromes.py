
def countPalindromes(s):
    # Write your code here
    middle = len(s)
    count = 0
    for index in range(2*middle - 1):
        left = index / 2
        right = left + index % 2
        while left >= 0 and right < middle and s[left] == s[right]:
            count = count + 1
            left -= 1
            right += 1
    return count


print(countPalindromes('aaa'))
