number = int(input())
counter = 1
while counter < number:
    if  (counter ** (1/2)) == (int(counter ** (1/2))):
        print(counter)
    counter = counter + 1