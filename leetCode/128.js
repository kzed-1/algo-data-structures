

/* global CustomError, getLikedBrands, getTopBrandsForGender */


function solution(U, N) {
    return new Promise((resolve, reject) => {
        // Resolve the promise with the result
        
        let userLikedBrandsList =  getLikedBrands(U.id); 
        let userLikedLength = userLikedBrandsList.length
        let genderTopLikedBrandList = getTopBrandsForGender(U.gender);

        if (userLikedLength > N) {
            let result = [];
            for (let i = 0; i < userLikedLength; i++) {
                result.push(Object.values(userLikedBrandsList[i]))
            }
            resolve(result)
        }

        if (userLikedLength < N) {
            let diff = N - userLikedLength;
            let newList = []
            let seen = new Set()

            for (let i = 0; i < userLikedLength; i++) {
                let brandName = Object.values(userLikedBrandsList[i])
                newList.push(brandName)
                seen.add(brandName)
            }

            let i = 0;
            while (diff > 0) {
                if (!genderTopLikedBrandList[i]) {
                    reject(CustomError)
                }

                let genderListBrandName = Object.values(genderTopLikedBrandList[i])

                if (!seen.has(genderListBrandName)) {
                    newList.push(genderListBrandName)
                    diff -= 1
                }
                i += 1
            }

            resolve(newList)
        }


        
    });
}


function solution(U, N) {
    return new Promise((resolve, reject) => {
        // Resolve the promise with the result

        let userLikedBrandsList = getLikedBrands(U.id);
        let userLikedLength = userLikedBrandsList.length
        let genderTopLikedBrandList = getTopBrandsForGender(U.gender);


        if (userLikedLength > N) {
            let result = [];
            for (let i = 0; i < userLikedLength; i++) {
                result.push(userLikedBrandsList[i].name)
            }
            resolve(userLikedBrandsList)
        }

        if (userLikedLength < N) {
            let diff = N - userLikedLength;
            let newList = []
            let seen = new Set()

            for (let i = 0; i < userLikedLength; i++) {
                let brandName = userLikedBrandsList[i].name
                newList.push(brandName)
                seen.add(brandName)
            }

            let i = 0;
            while (diff > 0) {
                if (!genderTopLikedBrandList[i]) {
                    reject(CustomError)
                }

                let genderListBrandName = genderTopLikedBrandList[i].name

                if (!seen.has(genderListBrandName)) {
                    newList.push(genderListBrandName)
                    diff -= 1
                }
                i += 1
            }

            resolve(newList)
        }
    });
}


'use strict';

/* global CustomError, getLikedBrands, getTopBrandsForGender */

function solution(U, N) {
    return new Promise((resolve, reject) => {
        // Resolve the promise with the result
        if (U === null || N <= 0) {
            reject(CustomError)
        }

        let userLikedBrandsList = getLikedBrands(U.id);
        let userLikedLength = userLikedBrandsList.length
        let genderTopLikedBrandList = getTopBrandsForGender(U.gender);

        // resolve(typeof userLikedBrandsList);
        // resolve(userLikedBrandsList);
        // console.log( Object.keys(userLikedBrandsList))

        // the data returned from getLikedBrands(U.id) is an object, and is not iterable, From the Examples, 
        // it seemed to imply that it's an array. 
        // I tried Object.keys(userLikedBrandsList) but that is returns an empty array 

        if (userLikedLength > N) {
            let result = [];
            for (let i = 0; i < N; i++) {
                result.push(userLikedBrandsList[i].name)
            }
            resolve(result)
        }

        if (userLikedLength < N) {
            let diff = N - userLikedLength;
            let newList = []
            let seen = new Set()

            for (let i = 0; i < userLikedLength; i++) {
                let brandName = userLikedBrandsList[i].name
                newList.push(brandName)
                seen.add(brandName)
            }

            let i = 0;
            while (diff > 0) {
                if (!genderTopLikedBrandList[i]) {
                    reject(CustomError)
                }

                let genderListBrandName = genderTopLikedBrandList[i].name

                if (!seen.has(genderListBrandName)) {
                    newList.push(genderListBrandName)
                    diff -= 1
                }
                i += 1
            }

            resolve(newList)
        }
    });
}

https://app.codility.com/c/feedback/J9P79U-BS6/