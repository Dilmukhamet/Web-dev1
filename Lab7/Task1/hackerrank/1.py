string = "1222311"

for  i in string:
    original_len = len(string)
    string = list(filter(lambda a: a!=i, string))
    count = original_len -len(string)
    if count != 0:
        print((count, i))
