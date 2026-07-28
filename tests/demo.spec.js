import { test, expect } from '@playwright/test';

test("My first test", async () => {
    expect(12).toBe(12);
})

test("My second test", async () => {
    expect(100).toBe(101);
})

test("My third test", async () => {
    expect(2.7).toBe(2.7);
})

test("My fourth test", async () => {
    expect("Debojyoti Das").toContain("Debojyoti")
})

/*
If we want to skip a particualar test, we can use test.skip() method. For example, if we want to skip the second test, we can write it as follows:
that particualr test will get skipped and will not be executed. The rest of the tests will be executed as usual.

test.skip("My second test", async() => {
    expect(100).toBe(101);
}) 
    

If we want to run a particular test only, we can use test.only() method. For example, if we want to run the second test only, we can write it as follows:
test.only("My third test", async(page) => {
    expect(209).toBe(209);
    })

*/

test("My fifth test", async ({ page }) => {
    expect(true).toBeTruthy();
})


test("My sixth test", async ({ page }) => {
    expect(false).toBeFalsy();
})

test("My seventh test", async ({ page }) => {
    expect("There is a brown crow").toContain("brown").toBeFalsy();
})

