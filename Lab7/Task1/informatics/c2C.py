number = int(input())

counter = 0

while (2**counter) < number:
    print( 2 ** counter )
    counter+=1
