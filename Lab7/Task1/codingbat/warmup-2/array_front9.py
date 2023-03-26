

def array_front9(a: list):
    end = len(a)
    if end > 4:
        end = 4
    return 9 in a[:end]
print(array_front9([1,2,3,9,5]))
print(array_front9([1,1,1,1,1]))
    
