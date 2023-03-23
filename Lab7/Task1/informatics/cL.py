binary = input()

decimal = 0

for i, d in enumerate(reversed(binary)):
    if d == "1":
        decimal += (2**i)
print(decimal)