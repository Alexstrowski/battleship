import { generateShip, collisionExists, generateShipsByQuantity, getAllShips } from 'utils/gameboard.js';

describe('Tests in gameboard.js', () => {
    const shipLength = 3;

    test('Spawn ships horizontally', () => {
        const initialPosition = { x: 3, y: 4, direction: 0 };
        const expectedShip = [
            { x: 3, y: 4 },
            { x: 3, y: 5 },
            { x: 3, y: 6 },
        ];
        const ships = generateShip(shipLength, initialPosition);
        expect(ships).toEqual(expectedShip);
    });

    test('Spawn ships vertically', () => {
        const initialPosition = { x: 3, y: 4, direction: 1 };
        const expectedShip = [
            { x: 3, y: 4 },
            { x: 4, y: 4 },
            { x: 5, y: 4 },
        ];
        const ships = generateShip(shipLength, initialPosition);
        expect(ships).toEqual(expectedShip);
    });

    test('Correct ship dimension', () => {
        const initialPosition = { x: 3, y: 4, direction: 0 };
        const ships = generateShip(shipLength, initialPosition);
        expect(ships.length).toEqual(3);
    });

    test('There is no collision between ships', () => {
        const arrayOfShips = [
            { x: 1, y: 2 },
            { x: 1, y: 3 },
            { x: 1, y: 4 },
            { x: 1, y: 5 },
        ];

        const generatedShip = [
            { x: 3, y: 4 },
            { x: 3, y: 5 },
            { x: 3, y: 6 },
        ];

        const isCollision = collisionExists(arrayOfShips, generatedShip);
        expect(isCollision).toEqual(false);
    });

    test('There is collision between ships', () => {
        const arrayOfShips = [
            { x: 1, y: 2 },
            { x: 1, y: 3 },
            { x: 1, y: 4 },
            { x: 1, y: 5 },
        ];

        const generatedShip = [
            { x: 1, y: 5 },
            { x: 2, y: 5 },
            { x: 3, y: 5 },
        ];

        const isCollision = collisionExists(arrayOfShips, generatedShip);
        expect(isCollision).toEqual(true);
    });

    test('Correct number of ships generated', () => {
        const arrayOfShips = [
            { x: 1, y: 2 },
            { x: 1, y: 3 },
            { x: 1, y: 4 },
            { x: 1, y: 5 },
        ];

        const ships = generateShipsByQuantity(arrayOfShips, 2, 3);
        expect(ships.length).toBe(6);
    });

    test('Correct number of all ships', () => {
        const ships = getAllShips();
        console.log(ships);
        expect(ships.length).toBe(20);
    });
});
