const shipFactory = require('./ship');

beforeEach(() => {
    ship = shipFactory(5)
});

test('create new ship', () => {
    expect(ship.length).toEqual(5)
})

test.todo('hit function', () => {
    ship.hit(1)
    expect(ship.hits).toEqual(1)
})


test.todo('sunk function')

test.todo('prevent same spot hits')