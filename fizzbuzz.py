import sys

inputs = sys.argv
inputs.pop(0)

for inputs in inputs:
    inputs=int(inputs)
    if inputs % 3 == 0 and inputs % 5 == 0 :
        print(f"fizzbuzz")

    elif inputs % 5 == 0 :
        print(f"buzz")

    elif inputs % 3 == 0 :
        print(f"fizz")

    else :
        print(inputs)
