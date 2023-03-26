def make_bricks(smal, big, goal):
    big_needed = min(big, goal // 5)
    return goal - (big_needed * 5) <= smal