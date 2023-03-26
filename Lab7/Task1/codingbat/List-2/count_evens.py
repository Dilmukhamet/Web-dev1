def count_evens(l: list):
    return len([a for a in l if a%2 == 0])

print(count_evens([2,1,3,5,6]))
print(count_evens([2,2,0]))
print(count_evens([1,3,5]))