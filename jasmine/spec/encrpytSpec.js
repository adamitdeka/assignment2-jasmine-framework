describe("md5 encryption", function(){
    //test to pass
    //input right password i.e. deka
    describe("Test to pass", function(){
        it("should return length of string 32",function(){
            var encryptPassLen = 32;
            expect(md5Encrypt("deka").length).toEqual(encryptPassLen);
        })
    })
})
