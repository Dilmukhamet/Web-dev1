def love6(a: int, b:int):
    return 6 in [a, b, (a+b), abs(a-b)]
        

print(love6(4,6))
print(love6(1,3))
print(love6(1,5))
print(love6(8,2))