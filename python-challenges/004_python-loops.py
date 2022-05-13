if __name__ == '__main__':
  n = int(input())

def pow(n):
  return n * n

def make_arr(n):
  l = list(range(n))
  return list(map(pow,l))

[print(i) for i in make_arr(n)]