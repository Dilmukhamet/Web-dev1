def swap(ch: str ):
    if ch.islower():
        return ch.upper()
    else:
        return ch.lower()

num = input()

print(''.join(list(map(swap, num))))



