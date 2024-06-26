describe("Using matchers for numbers",()=>{
    const value = 2;
    test("to be Greater than",()=>{
        expect(value).toBeGreaterThan(1); //<--the value first is greater than other value
        expect(value).toBeGreaterThanOrEqual(2); //<--the value first is greater than other value or equal

    })
})