const addition = require("../calc");

describe("Calculator", () => {
    describe("Addition function:", () => {
        test("should return 40 for 20 + 22", () => {
            expect(addition(20,22)).toBe(42);
        })
        test("should return 73 for 42 + 31", () => {
            expect(addition(42,31)).toBe(73);
        })
        test("should return ERROR! for string bum", () => {
            expect(addition('bum')).toBe("ERROR!");
        })
        test("should return ERROR! for 2 strings bum, bum2", () => {
            expect(addition('bum', 'bum')).toBe("ERROR!");
        })
        test("should return ERROR! for single parameter 1", () => {
            expect(addition(1)).toBe(1);
        })
        test("should return ERROR! for no parameters", () => {
            expect(addition()).toBe("ERROR!");
        })
        test("should return -42 for -20 + -22", () => {
            expect(addition(-20, -22)).toBe(-42);
        })
        test("should return ERROR! Integers Only! for 5.01 + 0.31", () => {
            expect(addition(5.01, 0.31)).toBe("ERROR! Integers Only!");
        })
        
    })
    describe("Subtract function:", () => {
        
    })
    describe("Multiply function:", () => {
        
    })
    describe("Division function:", () => {
        
    })
});
