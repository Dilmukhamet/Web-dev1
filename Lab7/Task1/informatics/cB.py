start = int(input())
end = int(input())
ostatok = int(input())
delimoe = int(input())

for i in range(start, end):
    if (i % delimoe) == ostatok:
        print(i) 