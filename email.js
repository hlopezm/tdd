
function filter(lista){
    return ['test@test.com'];
}

    // caso:
    //['test@test.com'] --> ['test@test.com']
    //caso:
    //['test@test.com', 'test@test.com'] --> ['test@test.com']
    //caso:
    //['tes(AT)test.com', 'test@test.com'] --> ['test@test.com']
    //caso:
    //['TEST@TEST.COM', 'test@test.com'] --> ['test@test.com']
    //
    // Examples:

describe("the emails list filter", function(){
    it("no filtra si no hay duplicado", function(){
        expect(filter(['test@test.com'])).toEqual(['test@test.com']);
    });



});

