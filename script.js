const test1 = [1, 3, 6, 4, 1, 2]
const test2 = [1, 2, 3]
const test3 = [-1, -3]

// for me this will be the simplest, cleanest and straight forward answer
const smallestInt1 = A => {
	for (i = 1; i < 1000000; i++) {
		if (!A.includes(i)) return i
	}
}

// implemented a filter with the reduce method ( but not as clear and slower than a 'for' loop) that just in my opinion ;o)
const smallestInt2 = A => {
	const solution = A.filter(value => value > 0 && value < A.lenght)
		.reduce((a, current) => {
			a[current] = true
			return a
		}, [])
		.findIndex((value, index) => index > 0 && !value)

	if (solution > 0) {
		return result
	}
	return 1
}

// test with set , but honestly I've never used `set` before
const smallestInt3 = A => {
	const completeSet = new Set(A)
	let i = 1

	while (completeSet.has(i)) {
		i++
	}
	return i
}

const runTests = () => {
	console.clear()

  //first test
	console.log('test 1 => ', smallestInt1(test1))
	console.log('test 2 => ', smallestInt1(test2))
  console.log('test 3 => ', smallestInt1(test3))

  //second test
	console.log('test 1 => ', smallestInt2(test1))
	console.log('test 2 => ', smallestInt2(test2))
  console.log('test 3 => ', smallestInt2(test3))

  // third test 
	console.log('test 1 => ', smallestInt3(test1))
	console.log('test 2 => ', smallestInt3(test2))
	console.log('test 3 => ', smallestInt3(test3))
}

const runBenchmark = () => {
	console.clear()
	;(() => {
		const startTime = performance.now()
		smallestInt1(test1)
		const endTime = performance.now()
		console.log('time elapsed solution 1: ', endTime - startTime)
  })()
  
	;(() => {
		const startTime = performance.now()
		smallestInt2(test1)
		const endTime = performance.now()
		console.log('time elapsed solution 2: ', endTime - startTime)
  })()
  
	;(() => {
		const startTime = performance.now()
		smallestInt3(test1)
		const endTime = performance.now()
		console.log('time elapsed solution 3: ', endTime - startTime)
	})()
}

/*

Write a function: function smallestInt(A);

that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

Example: given A = [1, 3, 6, 4, 1, 2], the function should return 5.

Given A = [1, 2, 3], the function should return 4.
Given A = [-1, -3], the function should return 1.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..100,000];
each element of array A is an integer within the range [−1,000,000..1,000,000].

Write test cases to validate that your implementation conforms to the specification.

Additionally, implement the benchmark function to test the performance of your solution. 
The benchmark should be able to run in the browser and be capable of outputting a reasonably reliable score when comparing solutions in the same environment.

You will be evaluated based on:
- Correctness according to instructions
- Algorithmic efficiency
- Scope of test cases
- Code style and quality

You're advised to include any less efficient solutions or pseudo code definitions of such solutions in your final submission.

*/
