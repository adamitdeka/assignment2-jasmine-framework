describe("login", function(){
    //test to pass
    //input right username right password
    describe("Test to pass", function(){
        describe("Test to pass| input username: amit| input password: deka", function(){
            it("should return true",function(){
                var msg = true;
                expect(validate("amit","deka")).toEqual(msg);
            })
        })
    })

    //test to fail
    //input empty username but right password 
    //input right username but empty password
    //input empty username and empty password 
    //input wrong username wrong password
    //input right username wrong password
    //input wrong username right password
    
    describe("Test to fail", function(){
        describe("Test to fail| input username: null| input password: deka", function(){
            it("should return No username entered",function(){
                var msg = "No username entered";
                expect(validate("","deka")).toEqual(msg);
            })
        })
        describe("Test to fail| input username: amit| input password: null", function(){
            it("should return No password entered",function(){
                var msg = "No password entered";
                expect(validate("amit","")).toEqual(msg);
            })
        })
        describe("Test to fail| input username: null| input password: null", function(){
            it("should return No username entered",function(){
                var msg = "No username entered";
                expect(validate("","")).toEqual(msg);
            })
        })
        describe("Test to fail| input username: the hulk| input password: i am strong", function(){
            it("should return Invalid username or password",function(){
                var msg = "Invalid username or password";
                expect(validate("the hulk","i am strong")).toEqual(msg);
            })
        })
        describe("Test to fail| input username: amit| input password: i am strong", function(){
            it("should return Invalid username or password",function(){
                var msg = "Invalid username or password";
                expect(validate("amit","i am strong")).toEqual(msg);
            })
        })
        describe("Test to fail| input username: the hulk| input password: deka", function(){
            it("should return Invalid username or password",function(){
                var msg = "Invalid username or password";
                expect(validate("the hulk","deka")).toEqual(msg);
            })
        })
    })
})