def first_last6(nums: list):
    return 6 in (nums[0], nums[len(nums)-1])

print(first_last6([1,2,3,4,5,6]))
print(first_last6([1,1,1,1,1,1,1,1]))