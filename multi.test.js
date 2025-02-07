const multi = require('./multi')

test('A função multi deve retorna 4 ao multiplicar 2 e 2', ()=>{
    expect(multi(2, 2)).toBe(4)
})
