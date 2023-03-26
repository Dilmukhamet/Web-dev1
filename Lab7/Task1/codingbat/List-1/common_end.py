def common_end(l1: list, l2: list):
    return l1.pop()  == l2.pop()

print(common_end([1,2,3], [2,3]))
print(common_end([3,4,1], [12.4]))