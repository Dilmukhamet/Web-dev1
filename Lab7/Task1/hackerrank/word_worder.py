n = int(input())
l = []
for i in range(n):
    l.append(input())

print(len(set(l)))

counts = {}
for word in l:
    if word not in counts:
        counts[word] = 0
    counts[word] += 1

print(list(counts.values()))
