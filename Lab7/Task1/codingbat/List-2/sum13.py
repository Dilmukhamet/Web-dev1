def sum13(l: list):
    summ = 0
    for i in l: 
        if i != 13:
            summ = summ + i
        else:
            return summ 
    return summ

print(sum13([1, 2, 2, 1]))
print(sum13([1, 2, 2, 1, 13]))

print(sum13([1, 2, 2, 1, 13,5]))