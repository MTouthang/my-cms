// function findDisappearedNumbers(nums: number[]): number[] {
//     let result: number[] = []

//     for(let i = 1; i<=nums.length; i++){
//         if(!nums.includes(i)){
//             result.push(i)
//         }
//     }
//     return result
// };


//  my 2nd approach same (Time limit Exceeded)
// function findDisappearedNumbers(nums: number[]): number[] {
//     let result: number[] = []
//     let flag: boolean = false

//     const unique = new Set(nums)

//     for (let i = 1; i<=nums.length; i++) {
//         flag = false
//         for (const value of unique) {
//             if (value == i) {
//                 flag = true
//                 break
//             }
//         }
//         if (!flag) {
//             result.push(i)
//         }
//     }


//     return result
// };

// The above code is giving Time limit Exceeded

// 3 attempt the OPTIMIZE SOLUTION 
function findDisappearedNumbers(nums: number[]): number[] {
    let result: number[] = []
    const unique = new Set(nums)

    for (let i = 1; i <= nums.length; i++) {
        if (!unique.has(i)) {
            result.push(i)
        }
    }


    return result
};