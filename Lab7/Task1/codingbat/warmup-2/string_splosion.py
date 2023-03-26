n= input()
def string_splosion(s):
    result = ""
    for i in range(len(s)):
        result = result + s[:i+1]
    return result
print(string_splosion(n))