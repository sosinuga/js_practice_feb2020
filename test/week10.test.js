const {
    sumDigits,
    createRange,
    getScreentimeAlertList,
    hexToRGB,
    findWinner
} = require("../challenges/week10");

describe("sumDigits", () => {
    test("returns the sum of digits in a given number", () => {
        expect(sumDigits(305)).toBe(8);
        expect(sumDigits(369)).toBe(18);
    })

    test("check that it works with decimals", () => {
        expect(sumDigits(20.5)).toBe(2.5);

    })
});

describe("createRange", () => {
    test("creates an array of numbers incremental in given steps", () => {
        expect(createRange(3, 11, 2)).toEqual([3, 5, 7, 9, 11]);
        expect(createRange(0, 25, 5)).toEqual([0, 5, 10, 15, 20, 25]);
    });
    test("array elements increase by 1 when step value isn't provided", () => {
        expect(createRange(3, 15)).toEqual([3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
        expect(createRange(1, 9)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);

    });
});

describe("getScreentimeAlertList", () => {
    test("returns an array of usernames of users who have used more than 100 minutes of screentime for a given date", () => {
        expect(getScreentimeAlertList([
            {
                username: "beth_1234",
                name: "Beth Smith",
                screenTime: [
                    { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40 } },
                    { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31 } },
                    { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19 } },
                    { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61 } },
                ]
            },
            {
                username: "sam_j_1989",
                name: "Sam Jones",
                screenTime: [
                    { date: "2019-05-01", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10 } },
                    { date: "2019-05-02", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16 } },
                    { date: "2019-05-03", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31 } },
                    { date: "2019-05-04", usage: { mapMyRun: 30, whatsApp: 20, facebook: 22, safari: 31 } }
                ]
            }],
            "2019-05-04")).toEqual(["beth_1234", "sam_j_1989"]);

        expect(getScreentimeAlertList([
            {
                username: "Dave_O",
                name: "David Oswald",
                screenTime: [
                    { date: "2018-04-07", usage: { FaceBook: 54, instagram: 29, YahooMail: 10, telegram: 12 } },
                    { date: "2018-04-08", usage: { FaceBook: 80, instagram: 20, YahooMail: 25, telegram: 0 } },
                    { date: "2018-04-09", usage: { FaceBo0k: 35, instagram: 15, YahooMail: 20, telegram: 30 } },
                    { date: "2018-04-10", usage: { FaceBook: 10, instagram: 60, YahooMail: 6, telegram: 25 } },
                ]
            },
            {
                username: "WillB",
                name: "Will Brown",
                screenTime: [
                    { date: "2018-06-11", usage: { instagram: 10, whatsApp: 40, facebook: 55, safari: 10 } },
                    { date: "2018-06-12", usage: { instagram: 20, whatsApp: 33, facebook: 0, safari: 25 } },
                    { date: "2018-06-13", usage: { instagram: 30, whatsApp: 20, facebook: 0, safari: 0 } },
                ]
            }],
            "2018-06-11")).toEqual(["WillB"]);
    });
    test("if no user spends over 100 minutes", () => {
        expect(getScreentimeAlertList([
            {
                username: "Sally",
                name: "Sally Wood",
                screenTime: [
                    { date: "2019-05-01", usage: { twitter: 0, instagram: 22, facebook: 40 } },
                    { date: "2019-05-02", usage: { twitter: 56, instagram: 0, facebook: 31 } },
                    { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19 } },
                    { date: "2019-05-04", usage: { twitter: 10, instagram: 20, facebook: 61 } },
                ]
            },
            {
                username: "PetPan",
                name: "Peter Pan",
                screenTime: [
                    { date: "2019-05-01", usage: { mapMyRun: 0, whatsApp: 0, facebook: 80, safari: 10 } },
                    { date: "2019-05-02", usage: { mapMyRun: 35, whatsApp: 0, facebook: 0, safari: 16 } },
                    { date: "2019-05-03", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31 } },
                    { date: "2019-05-04", usage: { mapMyRun: 10, whatsApp: 20, facebook: 22, safari: 31 } }
                ]
            }],
            "2019-05-04")).toEqual([]);
    });


});

describe("hexToRGB", () => {

    test("converts a given HEX number to RGB", () => {
        expect(hexToRGB("#FF1133")).toBe("rgb(255,17,51)");
        expect(hexToRGB("#ffffff")).toBe("rgb(255,255,255)");
        expect(hexToRGB("#0033FF")).toBe("rgb(0,51,255)");
    });
});

describe("findWinner", () => {
    test("return the winner of noughts and crosses game", () => {
        expect(findWinner([["X", "0", null], ["X", null, "0"], ["X", null, "0"]])).toBe("X");
        expect(findWinner([["X", "X", "X"], ["X", "O", null], ["O", null, "O"]])).toBe("X");
        expect(findWinner([[null, "O", "X"], ["O", "O", "O"], ["O", null, "O"]])).toBe("O");
        expect(findWinner([[null, "O", "X"], ["X", null, "O"], ["O", null, "X"]])).toBe(null);
    });
});