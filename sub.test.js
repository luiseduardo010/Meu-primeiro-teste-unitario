const sub =require('./sub')

test('A função sub deve retorna -2 ao subtrair -1 e 1', ()=>{
    expect(sub(-1, 1)).toBe(-2)
})

