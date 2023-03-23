#amount = int(input())

l =  list(map(int, input().split()))

#print(l[-(len(l)-1):-1])
l1 = l[-(len(l)-1):]
l2 = l[:-1]

print(l)
print(l1)
print(l2)

counter = 0

for index, value in enumerate(l[-(len(l)-1):-1]):
    if (value > l[index -1]) and (value > l[index+1]):
        counter += 1

print(counter)