def missing_char(s, n):
    return (s[:n]+s[n+1:])
string = input()
n = int(input())

print(missing_char(string, n))