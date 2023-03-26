def caught_speeding(speed: int, is_birthday: bool):
    newspeed = speed
    if is_birthday:
        newspeed = speed - 5
    if newspeed <= 60:
        return 0
    if newspeed > 60 and newspeed <= 80:
        return 1
    else:
        return 2
print(caught_speeding(60, False))
print(caught_speeding(65, False))
print(caught_speeding(65, True))