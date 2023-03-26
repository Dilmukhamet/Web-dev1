string = input()
l = []
for i in string:
    l.append(i)
counts = {}
for word in l:
    if word not in counts:
        counts[word] = 0
    counts[word] += 1
print(counts)


sorted_dict = dict(sorted(counts.items(), key=lambda x: x[1], reverse=True))
print(sorted_dict)

for x in list(sorted_dict)[:3]:
    print(x, sorted_dict[x])

