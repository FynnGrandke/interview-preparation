// Find the best apartment to live in

const blocks = [
    { "gym": false, "school": true, "store": false },
    { "gym": true, "school": false, "store": false },
    { "gym": true, "school": true, "store": false },
    { "gym": false, "school": true, "store": false },
    { "gym": false, "school": true, "store": true }
]

const requirement = ['gym', 'school', 'store']

const difference = (a, b) => Math.abs(b - a)

// requirements
// index of the current block
// index of the comparing block

const results = blocks.map((_, index) => {
    const distanceResult = blocks.reduce((acc, curr, blockIndex) => {
        if (curr.gym) {
            const gymDifference = difference(index, blockIndex)
            if (acc.gymDistance === -1 || gymDifference < acc.gymDistance) {
                acc.gymDistance = gymDifference
            }
        }
        if (curr.school) {
            const schoolDifference = difference(index, blockIndex)
            if (acc.schoolDistance === -1 || schoolDifference < acc.schoolDistance) {
                acc.schoolDistance = schoolDifference
            }
        }
        if (curr.store) {
            const storeDifference = difference(index, blockIndex)
            if (acc.storeDistance === -1 || storeDifference < acc.storeDistance) {
                acc.storeDistance = storeDifference
            }
        }
        return acc
    }, {
        gymDistance: -1,
        schoolDistance: -1,
        storeDistance: -1
    })

    return { ...distanceResult, distance: distanceResult.gymDistance + distanceResult.schoolDistance + distanceResult.storeDistance }
})

const sortedResults = results.sort((a, b) => a.distance - b.distance)
const closestDistances = results.filter(result => result.distance === sortedResults[0].distance) 

if (closestDistances.length === 1) {
    console.log('The closest apartment is: ', closestDistances[0]);
} else {
    const weightedAverage = (nums, weights) => {
        const [sum, weightSum] = weights.reduce(
          (acc, w, i) => {
            acc[0] = acc[0] + nums[i] * w;
            acc[1] = acc[1] + w;
            return acc;
          },
          [0, 0]
        );
        return sum / weightSum;
      };
      console.log(weightedAverage([10, 10, 55], [0.33, 0.33, 0.33]));
      console.log(weightedAverage([1, 14, 60], [0.33, 0.33, 0.33]));
}


