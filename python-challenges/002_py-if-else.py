#!/bin/python3

import math
import os
import random
import re
import sys



if __name__ == '__main__':
    n = int(input().strip())
def output(n):
  if n % 2 != 0 or 6 <= n <= 20:
    return "Weird"
  else:
    return "Not Weird"

print(output(n))