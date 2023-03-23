def minimum(a, b, c, d) -> int:
    return min([a, b, c, d])

l =  list(map(int, input().split()))


print(minimum(l[0], l[1], l[2], l[3]))

