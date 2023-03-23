number = int(input())

counter = 2 
while counter < number:
    if number % counter == 0: 
        print(counter)
        break
    counter +=1