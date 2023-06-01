# How to USe enumerate() in Python
chars = ['a', 'b', 'c', 'd', 'e']
# enumerate() returns a sequence of (index, value) tuples
list (enumerate(chars))

# Use enumerate() in a for loop to get index/value pairs
for index, chars in enumerate(chars):
    print(index, chars)

# why might you want to use enumerate()?
# Example: store index positions of duplicate elements of a list

chars_list = ['a', 'b', 'c', 'd', 'e', 'a', 'b', 'c', 'd', 'e']
char_map = {char: [] for char in set (chars_list)}
print(char_map)
# {'b': [], 'c': [], 'e': [], 'd': [], 'a': []}

# use enumerate() to map values to keys
for index, char in enumerate(chars_list):
    char_map[char].append(index)

print(char_map)
# {'b': [1, 6], 'c': [2, 7], 'e': [4, 9], 'd': [3, 8], 'a': [0, 5]}