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

// test with set , but honestly I've never found a use for `set` before on projects
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
