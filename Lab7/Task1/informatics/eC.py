def xor(a, b):
    return 0 if a==b else 1


l =  [int(i) for i in input().split()]

print(xor(l[0], l[1]))