'''
arr=[{"name": "A", "owerid": 1}, 
    {"name": "b", "owerid": 2}, 
    {"name": "C", "owerid": 2}]
In list of dictionary, wrote one line python code to filter out the dictionary with owerid = 2
Expected output: [{"name": "b", "owerid": 2}, {"name": "C", "owerid": 2}]
'''

arr = [{"name": "A", "owerid": 1},
        {"name": "b", "owerid": 2},
        {"name": "C", "owerid": 2}]
filtered_arr = [item for item in arr if item["owerid"] == 2]