amount = int(input())

def is_negative(n) -> bool:
    return (n < 0)

l =  list(map(int, input().split()))

same_signs = "NO"
for index, value in enumerate(l[:-1]):
    if is_negative(value) == is_negative( l[index+1] ):
        same_signs = "YES"
        break 

print(same_signs)