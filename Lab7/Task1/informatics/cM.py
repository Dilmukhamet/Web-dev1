amount = int(input())
count = 0 
for i in range(amount):
    a = int(input())
    if a == 0:
        count = count + 1 
print(count)