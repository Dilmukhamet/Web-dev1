number = int(input())

start = 1

while start <= number:
    if start == number:
        print("YES")
        break
    start = start * 2
else:
    print("NO")
     