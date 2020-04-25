const {
    sumMultiples,
    isValidDNA,
    getComplementaryDNA,
    isItPrime,
    createMatrix,
    areWeCovered
} = require("../challenges/week9");

describe("sumMultiples", () => {
    test("It throws an error if not passed an array", () => {
        expect(() => {
            sumMultiples();
        }).toThrow("arr is required");

        expect(() => {
            sumMultiples(44);
        }).toThrow("an array is required");
    });
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

    test("It throws an error if not passed a string", () => {
        expect(() => {
            isValidDNA();
        }).toThrow("str is required");

        expect(() => {
            isValidDNA(44);
        }).toThrow("a String is required");
    });

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

    test("It throws an error if not passed a string", () => {
        expect(() => {
            getComplementaryDNA();
        }).toThrow("str is required");

        expect(() => {
            getComplementaryDNA(44);
        }).toThrow("a String is required");
    });

    test("receives a valid DNA string and returns a complementary base pair", () => {
        expect(getComplementaryDNA("CCGGTTAACT")).toEqual("GGCCAATTGA");
        expect(getComplementaryDNA("CAGTCG")).toEqual("GTCAGC");
    })

    test("does it work with lower case letters", () => {
        expect(getComplementaryDNA("acctg")).toEqual("tggac");
    })


});

describe("isItPrime", () => {
    test("It throws an error if not passed a number", () => {
        expect(() => {
            isItPrime();
        }).toThrow("n is required");

        expect(() => {
            isItPrime("banana");
        }).toThrow("a number is required");
    });
    test("returns true if n is a prime number, and false if it's not", () => {
        expect(isItPrime(4)).toBe(false);
        expect(isItPrime(9)).toBe(false);
        expect(isItPrime(7)).toBe(true);
    })
});

describe("createMatrix", () => {
    test("returns an array of n*n when passed n with string fill", () => {
        expect(createMatrix(4, "tables")).toEqual([["tables", "tables", "tables", "tables"], ["tables", "tables", "tables", "tables"], ["tables", "tables", "tables", "tables"], ["tables", "tables", "tables", "tables"]]);
        expect(createMatrix(2, "cars")).toEqual([["cars", "cars"], ["cars", "cars"]]);
        expect(createMatrix(5, "cars")).toEqual([["cars", "cars", "cars", "cars", "cars"], ["cars", "cars", "cars", "cars", "cars"], ["cars", "cars", "cars", "cars", "cars"], ["cars", "cars", "cars", "cars", "cars"], ["cars", "cars", "cars", "cars", "cars"]]);
        expect(createMatrix(3, "tables")).toEqual([["tables", "tables", "tables"], ["tables", "tables", "tables"], ["tables", "tables", "tables"]]);
    })
});


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

    test("returns false if <3 staff are available to work on the given day", () => {
        const staff = [
            { name: "Glen", rota: ["Sunday, Monday, Tuesday"] },
            { name: "Bobby", rota: ["Tuesday, Wednesday, Thursday"] },
            { name: "Lydia", rota: ["Monday, Tuesday, Thursday"] },
        ];
        expect(areWeCovered(staff, "Sunday")).toBe(false);
        expect(areWeCovered(staff, "Monday")).toBe(false);
        expect(areWeCovered(staff, "Thursday")).toBe(false);
    });
    test("it returns true if >3 staff are available on the specified day", () => {
        const staff = [
            { name: "Glen", rota: ["Sunday", "Monday", "Tuesday"] },
            { name: "Bobby", rota: ["Tuesday", "Wednesday", "Thursday"] },
            { name: "Lydia", rota: ["Monday", "Tuesday", "Thursday"] },
            { name: "Beatrice", rota: ["Sunday", "Monday", "Tuesday", "Wednesday"] },
            { name: "Kyle", rota: ["Sunday", "Monday", "Wednesday"] }
        ];
        expect(areWeCovered(staff, "Sunday")).toBe(true);
        expect(areWeCovered(staff, "Monday")).toBe(true);
        expect(areWeCovered(staff, "Wednesday")).toBe(true);
    })
});




/*module.exports = {
    sumMultiples,
    isValidDNA,
    getComplementaryDNA,
    isItPrime,
    createMatrix,
    areWeCovered
  };*/