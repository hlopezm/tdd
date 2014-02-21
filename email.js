
function filter(lista){
    if (lista[0] === lista[1]){
        return [lista[0]];
    }
    return lista;
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
    it("devuelve el que le mandas", function(){
        expect(filter(['test2@test.com'])).toEqual(['test2@test.com']);
    });
    it("si esta duplicado devuelve solo uno", function(){
        expect(filter(['test2@test.com', 'test2@test.com'])).toEqual(['test2@test.com']);
    });


});

