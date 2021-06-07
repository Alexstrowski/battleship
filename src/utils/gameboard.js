export const generateShip = (shipLength, initialPosition) => {
    const { x, y, direction } = initialPosition;
    const ships = [];
    for (let index = 0; index <= shipLength - 1; index++) {
        if (direction === 0) {
            ships.push({ x, y: y + index });
        } else {
            ships.push({ x: x + index, y });
        }
    }
    return ships;
};

const generatePosition = (shipLength) => {
    const DIMENSION = 10;
    const direction = randomNumber(0, 1);
    const x = randomNumber(0, DIMENSION - shipLength);
    const y = randomNumber(0, DIMENSION - shipLength);
    return { x, y, direction };
};

export const collisionExists = (arrayOfShips, generatedShip) => {
    const arrayBoolean = arrayOfShips.map((ship) =>
        generatedShip.some((newShip) => ship.x === newShip.x && ship.y === newShip.y),
    );

    const result = arrayBoolean.reduce(function (a, b) {
        return a | b;
    });
    return result === 1 ? true : false;
};

export const generateShipsByQuantity = (arrayOfShips, numberOfShips, shipLength) => {
    let ships = [];
    for (let index = 0; index < numberOfShips; index++) {
        let isCollision = true;
        while (isCollision) {
            let threeCellsShips = generateShip(shipLength, generatePosition(shipLength));
            if (!collisionExists(arrayOfShips, threeCellsShips)) {
                ships = [...ships, ...threeCellsShips];
                arrayOfShips = [...arrayOfShips, ...threeCellsShips];
                isCollision = false;
            }
        }
    }
    return ships;
};

export const getAllShips = () => {
    const fourCellsShips = generateShip(4, generatePosition(4));
    let ships = [...fourCellsShips];
    const threeCellsShips = generateShipsByQuantity(ships, 2, 3);
    ships = [...ships, ...threeCellsShips];
    const twoCellsShips = generateShipsByQuantity(ships, 3, 2);
    ships = [...ships, ...twoCellsShips];
    const oneCellsShips = generateShipsByQuantity(ships, 4, 1);
    ships = [...ships, ...oneCellsShips];
    return ships;
};

const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};
