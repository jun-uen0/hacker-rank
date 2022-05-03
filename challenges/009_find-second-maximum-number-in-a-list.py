if __name__ == '__main__':
  n = int(input())
  obj = map(int, input().split())

# print(obj)
# 2 3 6 6 5

lst = list(obj)
# print(lst)
# [2, 3, 6, 6, 5]

sorted_lst = sorted(lst)
# print(sorted_lst)

unique_lst = list(dict.fromkeys(sorted_lst))
# print(unique_lst)

print(unique_lst[-2])