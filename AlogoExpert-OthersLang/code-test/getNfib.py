def getNthFib(n):
  fibonacci_sequence = [0, 1]
  counter = 0
  for i in range(n):
    new_element = fibonacci_sequence[counter+1] + fibonacci_sequence[counter]
    fibonacci_sequence.append(new_element)
    counter+1
  return fibonacci_sequence[n-1]