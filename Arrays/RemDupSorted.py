# class Solution:
def removeDuplicates(nums):
    # undertanding that the first number is always going to have to be unique
    unique = 1
    #
    for item in range(len(nums) - 1):  # ensure not to go out of bounds
        if nums[item] != nums[item + 1]:  # if present item is same as next
            # update next item (presentlt unique) to the next item
            nums[unique] = nums[item + 1]
            unique = unique + 1  # update to point at the next item to be itterated
            print(unique)

    return unique


#myNums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
myNums = [1, 1, 2, 3, 4, 4]
print(removeDuplicates(myNums))

'''
Note that the first number is always going to be unique

'''
