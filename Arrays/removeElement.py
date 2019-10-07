def removeElement(nums, val):
  
    tracker = 0
    for i in range(len(nums)):
        if nums[i] != val:  # if current iteration is not same as exclusion value
            nums[tracker] = nums[i]
            tracker += 1
        return tracker



myArr = [0, 1, 2, 2, 3, 0, 4, 2]
print(removeElement(myArr, 2))


'''
Given an array nums and a value val, remove all instances of that value in-place and return the new length.

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

The order of elements can be changed. It doesn't matter what you leave beyond the new length.
'''
