def lone_sum(a,b,c):
    return sum([i for i in [a,b,c] if [a,b,c].count(i) == 1])

print(lone_sum(1,2,3))
print(lone_sum(3,2,3))
print(lone_sum(3,3,3))