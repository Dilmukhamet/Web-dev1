number = int(input())

k = 1
counter = 0

while k < number:
    k = k * 2
    counter += 1
    if (k >= number):
        print(counter)
        break
#else:
#    print(k)