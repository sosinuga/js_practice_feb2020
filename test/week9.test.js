const {
    sumMultiples,
    isValidDNA,
    getComplementaryDNA,
    isItPrime,
    createMatrix,
    areWeCovered
} = require("../challenges/week9");

describe("sumMultiples", () => {
    test("it returns the sum of any numbers that are a multiple of 3 or 5", () => {
        const result = sumMultiples([1, 3, 5]);
        const expected = 8;
        expect(result).toBe(expected);
    });

    test("it works okay with decimal numbers", () => {
        const result = sumMultiples([1, 3, 5.0, 3.5, 12, 10]);
        const expected = 30;
        expect(result).toBe(expected);
    });

    test("return 0 if there are no multiples of 3 or 5", () => {
        expect(sumMultiples([1, 2, 4, 7, 11])).toBe(0);
    });
});

describe("isValidDNA", () => {
    test("should return true if it contains the characters C,G,T and A only", () => {
        expect(isValidDNA("DTFFAAB")).toBe(false);
        expect(isValidDNA("CCGGTTAACT")).toBe(true);
    })

    test("it works with lower case letters", () => {
        expect(isValidDNA("aattccgg")).toBe(true);
        expect(isValidDNA("AccTTTggta")).toBe(true);
        expect(isValidDNA("abbkkoottccgg")).toBe(false);
    });
});
describe("getComplementaryDNA", () => { 
    test("this function receives a valid DNA string and returns a complementary base pair", () => {
        expect(getComplementaryDNA("CCGGTTAACT")).toBe("GGCCAATTGA");
        expect(getComplementaryDNA("CAGTCG")).tobe("GTCAGC");
    })
});
describe("isItPrime", () => { });
describe("createMatrix", () => { });


describe("areWeCovered", () => {
    test("it returns false if there's no staff on the day", () => {

        expect(areWeCovered([], "Sunday")).toBe(false);
        expect(areWeCovered([], "Monday")).toBe(false);
        expect(areWeCovered([], "Tuesday")).toBe(false);
        expect(areWeCovered([], "Wednesday")).toBe(false);
        expect(areWeCovered([], "Thursday")).toBe(false);
        expect(areWeCovered([], "Friday")).toBe(false);
        expect(areWeCovered([], "Saturday")).toBe(false);
    });

});




/*module.exports = {
    sumMultiples,
    isValidDNA,
    getComplementaryDNA,
    isItPrime,
    createMatrix,
    areWeCovered
  };*/