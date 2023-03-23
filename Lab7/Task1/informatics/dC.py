amount = int(input())

chisla = input().split()
counter = 0 
for value in chisla:
    if int(value) > 0:
        counter += 1
print(counter)
