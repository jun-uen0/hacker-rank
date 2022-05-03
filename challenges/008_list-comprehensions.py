# can't solve it

# if __name__ == '__main__':
#   x = int(input())
#   y = int(input())
#   z = int(input())
#   n = int(input())

# i = 0
# j = 0
# k = 0
# lst = [0] * 3
# parent_lst = [lst] * (x + y + z) * 3

# while i <= x:
#   lst = [0] * 3
#   lst[0] = i
#   parent_lst[i] = lst
#   while j <= y:
#     lst = [0] * 3
#     lst[0] = i
#     lst[1] = j
#     parent_lst[2] = lst
#     while k <= z:
#       lst = [0] * 3
#       lst[0] = i
#       lst[1] = j
#       lst[2] = k
#       parent_lst[4] = lst
#       k+=1

#     j+=1

#   i+=1

# #   # while j <= y:
# #   #   lst[1] = i
# #   #   parent_lst.append(lst)
# #   #   j+=1
# #   #   while k <= z:
# #   #     lst[2] = i
# #   #     parent_lst.append(lst)
# #   #     k+=1

# print(parent_lst)