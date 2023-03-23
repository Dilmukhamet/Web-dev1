answer = input()
answer_student = int(input())
def yes(s):
    return (len(s) == 4) and (s == s[::-1])
#print(yes("300"))
#print(yes("2002"))


if (yes(answer) and (answer_student == 1)) or (not(yes(answer)) and not(answer_student == 1)) :
    print("YES")
else: 
    print("NO")
