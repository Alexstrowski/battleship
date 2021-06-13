import {
    generateShip,
    collisionExists,
    generateShipsByQuantity,
    getAllShips,
    updateSunkStatus,
} from 'utils/gameboard.js';

describe('Tests in gameboard.js', () => {
    const shipLength = 3;
    const arrayOfShips = [
        { x: 1, y: 2 },
        { x: 1, y: 3 },
        { x: 1, y: 4 },
        { x: 1, y: 5 },
    ];

    test('Spawn ships horizontally', () => {
        const initialPosition = { x: 3, y: 4, direction: 0 };
        let expectedShip = [
            { x: 3, y: 4, isHit: false, isSunken: false, type: 3 },
            { x: 3, y: 5, isHit: false, isSunken: false, type: 3 },
            { x: 3, y: 6, isHit: false, isSunken: false, type: 3 },
        ];
        const ships = generateShip(shipLength, initialPosition);
        const id = ships[0].id;
        expectedShip = expectedShip.map((ship) => ({ ...ship, id }));
        expect(ships).toEqual(expectedShip);
    });

    test('Spawn ships vertically', () => {
        const initialPosition = { x: 3, y: 4, direction: 1 };
        let expectedShip = [
            { x: 3, y: 4, isHit: false, isSunken: false, type: 3 },
            { x: 4, y: 4, isHit: false, isSunken: false, type: 3 },
            { x: 5, y: 4, isHit: false, isSunken: false, type: 3 },
        ];
        const ships = generateShip(shipLength, initialPosition);
        const id = ships[0].id;
        expectedShip = expectedShip.map((ship) => ({ ...ship, id }));
        expect(ships).toEqual(expectedShip);
    });

    test('Correct ship dimension', () => {
        const initialPosition = { x: 3, y: 4, direction: 0 };
        const ships = generateShip(shipLength, initialPosition);
        expect(ships.length).toEqual(3);
    });

    test('There is no collision between ships', () => {
        const generatedShip = [
            { x: 3, y: 4 },
            { x: 3, y: 5 },
            { x: 3, y: 6 },
        ];

        const isCollision = collisionExists(arrayOfShips, generatedShip);
        expect(isCollision).toEqual(false);
    });

    test('There is collision between ships', () => {
        const generatedShip = [
            { x: 1, y: 5 },
            { x: 2, y: 5 },
            { x: 3, y: 5 },
        ];

        const isCollision = collisionExists(arrayOfShips, generatedShip);
        expect(isCollision).toEqual(true);
    });

    test('Correct number of ships generated', () => {
        const ships = generateShipsByQuantity(arrayOfShips, 2, 3);
        expect(ships.length).toBe(6);
    });

    test('Correct number of all ships', () => {
        const ships = getAllShips();
        expect(ships.length).toBe(20);
    });

    test('Check if all parts of the ship were hit', () => {
        const allShips = [
            {
                x: 1,
                y: 3,
                isHit: true,
                isSunken: false,
                id: 'f0ffc56d-077a-4c26-9e27-6f0909288370',
            },
            {
                x: 1,
                y: 4,
                isHit: true,
                isSunken: false,
                id: 'f0ffc56d-077a-4c26-9e27-6f0909288370',
            },
            {
                x: 1,
                y: 5,
                isHit: true,
                isSunken: false,
                id: 'f0ffc56d-077a-4c26-9e27-6f0909288370',
            },
            {
                x: 1,
                y: 6,
                isHit: true,
                isSunken: false,
                id: 'f0ffc56d-077a-4c26-9e27-6f0909288370',
            },
            {
                x: 6,
                y: 1,
                isHit: false,
                isSunken: false,
                id: 'fcda2649-59a2-410f-ba16-092c671ee9fb',
            },
        ];

        const expectedShips = [
            {
                x: 1,
                y: 3,
                isHit: true,
                isSunken: true,
                id: 'f0ffc56d-077a-4c26-9e27-6f0909288370',
            },
            {
                x: 1,
                y: 4,
                isHit: true,
                isSunken: true,
                id: 'f0ffc56d-077a-4c26-9e27-6f0909288370',
            },
            {
                x: 1,
                y: 5,
                isHit: true,
                isSunken: true,
                id: 'f0ffc56d-077a-4c26-9e27-6f0909288370',
            },
            {
                x: 1,
                y: 6,
                isHit: true,
                isSunken: true,
                id: 'f0ffc56d-077a-4c26-9e27-6f0909288370',
            },
            {
                x: 6,
                y: 1,
                isHit: false,
                isSunken: false,
                id: 'fcda2649-59a2-410f-ba16-092c671ee9fb',
            },
        ];

        const ships = updateSunkStatus(allShips, 'f0ffc56d-077a-4c26-9e27-6f0909288370');
        expect(ships).toEqual(expectedShips);
    });

    test('Check if all parts of the ship were not hit', () => {
        const allShips = [
            {
                x: 1,
                y: 3,
                isHit: false,
                isSunken: false,
                id: 'f0ffc56d-077a-4c26-9e27-6f0909288370',
            },
            {
                x: 1,
                y: 4,
                isHit: true,
                isSunken: false,
                id: 'f0ffc56d-077a-4c26-9e27-6f0909288370',
            },
            {
                x: 1,
                y: 5,
                isHit: true,
                isSunken: false,
                id: 'f0ffc56d-077a-4c26-9e27-6f0909288370',
            },
            {
                x: 1,
                y: 6,
                isHit: true,
                isSunken: false,
                id: 'f0ffc56d-077a-4c26-9e27-6f0909288370',
            },
            {
                x: 6,
                y: 1,
                isHit: false,
                isSunken: false,
                id: 'fcda2649-59a2-410f-ba16-092c671ee9fb',
            },
        ];

        const expectedShips = [
            {
                x: 1,
                y: 3,
                isHit: false,
                isSunken: false,
                id: 'f0ffc56d-077a-4c26-9e27-6f0909288370',
            },
            {
                x: 1,
                y: 4,
                isHit: true,
                isSunken: false,
                id: 'f0ffc56d-077a-4c26-9e27-6f0909288370',
            },
            {
                x: 1,
                y: 5,
                isHit: true,
                isSunken: false,
                id: 'f0ffc56d-077a-4c26-9e27-6f0909288370',
            },
            {
                x: 1,
                y: 6,
                isHit: true,
                isSunken: false,
                id: 'f0ffc56d-077a-4c26-9e27-6f0909288370',
            },
            {
                x: 6,
                y: 1,
                isHit: false,
                isSunken: false,
                id: 'fcda2649-59a2-410f-ba16-092c671ee9fb',
            },
        ];

        const ships = updateSunkStatus(allShips, 'f0ffc56d-077a-4c26-9e27-6f0909288370');
        expect(ships).toEqual(expectedShips);
    });
});
