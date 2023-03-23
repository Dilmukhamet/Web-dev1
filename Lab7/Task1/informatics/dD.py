amount = int(input())

l =  list(map(int, input().split()))
l1 = l[-(len(l) -1):]
l2 = l[:-1]

#print(l1)
#print(l2)

counter = 0

for i in range(len(l)-1):
    if l1[i] > l2[i]:
        counter +=1
print(counter)

