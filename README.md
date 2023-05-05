## Task 1

The logic to solving this problem is pretty straight forward. We will first initialize variable suma to be zero. After that we will iterate through each element of the array. While iterating we can encounter two cases:

- element is an array
- element is a number
  If we encounter an array we recursively call this function on that array and when the result is calculated recursively we will add that result to the sum. And if we found a number we will add that number to the sum. Also, while performing all of this, we have to see if we are having NaN issues. So we added that check for NaN as well.

## Task 2

We first initialize new array that will have all of the other arrays. First we cover the case if the initial array is empty or subarray size is negative. Afterwards we split the logic into two parts:

- if subarray size is bigger than array size
- if subarray size is less or equal than the array size
  If the subarray size is bigger, we just push our whole initial array to list of all subarrays and that is it. On the other hand, if the subarray size is smaller we take all intervals of that length. More precisely [start, start+subarray_size]. And we used splice function for that. Also, we used for loop to iterate through all combinations. Let's imagine our array has length 8 and subarray size is 3. We would now consider [0,2], [1,3], [2,4], and so on.
  Also, all the cases and tests of these functions are written in their respective files.

## Task 3

I have created my account on RapidAPI, generated my API key and started working on it. I have made couple of test API calls just to see what is happening. I started with my first task. I was handling issues of API not fetching all the data or some of the data was missing or corrupted. When I got that one I went to see how to implement the search. They also had an endpoint for search which I used and it worked very good. The way I did this in general, I had screens called MovieList and MovieCard. And here I made my first big mistake. After I got my movies, I have passed all of that from MovieList to MovieCard instead of mapping all of those on MovieList screen and proping just one movie to MovieCard.

Second thing that bothered me (and this is where I spent most of my time) was looking for genres. I literally spent 2 hours trying to see how to filter genres because there weren't any genres in any of the API calls. I also tried to implement it on my own, but I didn't know how to do it. After that, I wanted to filter movies by year and sort them, but the problem is that the movies were sent as a chunk and I couldn't sort them or filter them on the other screen. And then I realized that they I messed this up with passing movies instead of single movie form MovieList to MovieCard.

## Things that I consider to be good

1. Showed problem-solving skills in Task 1 and 2
2. Covered edge cases and tested the functions
3. Created couple of successful API calls
4. Good adaptability when facing new documentation (like RapidAPI was for me today)
5. Finished two tasks entirely and one partially

## Things that I could have dont better if I had more time

1. Don't spend so much time on something that you are sure is missing. If you are not sure, double check it later and move on and start implementing other things that you know.
2. Changed the structure of MovieList and MovieCard - more specifically, I would create a hook for filters (for year range, genre, length, whatever, sort indicator, etc.). When I would fetch the data, I would filter that right away. After that I would create and map each movie and pass to other MovieCard.
3. Pre-plan everything more in depth in general. Read out the problem couple of times. Try to detect what are potential bottlenecks, and how to overcome them. Also, try to creat some basic "architecture" and double check if it is error prone.
