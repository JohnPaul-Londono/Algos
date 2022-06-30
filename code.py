a = [1,2,3,4]
b = {3: 4,6: 0,1: 5}
c = zip(a,b)
d = list(c)
print(d)

a = [1,2,3,4]
b = 0
for x in a:
    b += b if b  % 2 else x
    b = not b
    print(b)