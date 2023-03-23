amount = int(input())

chisla = input().split()

for index, value in enumerate(chisla):
    if int(value) % 2 == 0:
        print(value)
