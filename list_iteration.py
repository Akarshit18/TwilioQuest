import sys
sys.argv[0]
sys.argv[1]
sys.argv[2]
sys.argv[3]
order_of_succession = sys.argv
order_of_succession.pop(0)
print("These are the names on my people list:")
for index, item in enumerate(order_of_succession, start=1):
    string_to_print = f"{index}. {item}"
    print(string_to_print)