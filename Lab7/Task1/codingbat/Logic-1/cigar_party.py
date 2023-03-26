def cigar_party(number: int, is_weekend: bool):
    if is_weekend == True and number > 40:
        return True
    if number > 40 and number < 60:
        return True
    else: 
        return False
    
print(cigar_party(30, False))
print(cigar_party(50, False))
print(cigar_party(70, True))