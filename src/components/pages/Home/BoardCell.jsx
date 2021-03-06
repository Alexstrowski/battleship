import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { SVG } from 'assets/svg';
import { updateSunkStatus } from 'utils/gameboard';

const BoardCell = ({
    row,
    column,
    isShip,
    isGameStarted,
    setTurnCounter,
    ship,
    ships,
    setShips,
    isRecord,
    shotsMissed,
    setShotsMissed,
}) => {
    const [selected, isSelected] = useState(
        isRecord && shotsMissed.some((ship) => ship.x === row && ship.y === column) ? true : false,
    );
    const [isSunken, setIsSunken] = useState(false);

    useEffect(() => {
        setIsSunken(ship ? ship.isSunken : false);
    }, [ship]);

    const onClickCell = () => {
        if (!isGameStarted) return;

        if (!selected) {
            setTurnCounter((prevTurn) => prevTurn - 1);

            if (isShip) {
                const id = ships.find((ship) => ship.x === row && ship.y === column).id;
                const updateShips = ships.map((ship) => {
                    return ship.x === row && ship.y === column ? { ...ship, isHit: true } : ship;
                });
                setShips(updateSunkStatus(updateShips, id));
            } else {
                setShotsMissed([...shotsMissed, { x: row, y: column }]);
            }
        }
        isSelected(true);
    };

    const renderCell = () => {
        if (isSunken) {
            return (
                <div className="w-full h-full">
                    <img src={SVG[`sunken_ship_${ship.type}`]}></img>
                </div>
            );
        }

        if (selected && isShip) {
            return (
                <div className="w-full h-full">
                    <img src={SVG.explosion}></img>
                </div>
            );
        }

        if (selected && !isShip) {
            return <div className="bg-gray-300 w-full h-full"></div>;
        }

        return '';
    };

    const renderCellIsRecord = () => {
        if (ship && ship.isSunken) {
            return (
                <div className="w-full h-full">
                    <img src={SVG[`sunken_ship_${ship.type}`]}></img>
                </div>
            );
        }

        if (ship && ship.isHit) {
            return (
                <div className="w-full h-full">
                    <img src={SVG.explosion}></img>
                </div>
            );
        }

        if (selected && !isShip) {
            return <div className="bg-gray-300 w-full h-full"></div>;
        }

        return '';
    };

    return (
        <div
            className="md:h-20 md:w-20 h-10 w-10 md:p-4 bg-white border-white border-2 mr-1 mb-1 rounded-md cursor-pointer"
            onClick={onClickCell}
            id="board-cell"
        >
            {!isRecord ? renderCell() : renderCellIsRecord()}
        </div>
    );
};

export default BoardCell;

BoardCell.propTypes = {
    row: PropTypes.number.isRequired,
    column: PropTypes.number.isRequired,
    isShip: PropTypes.bool.isRequired,
    isGameStarted: PropTypes.bool.isRequired,
    setTurnCounter: PropTypes.func,
    ship: PropTypes.object,
    ships: PropTypes.array,
    setShips: PropTypes.func,
    isRecord: PropTypes.bool.isRequired,
    shotsMissed: PropTypes.array,
    setShotsMissed: PropTypes.func,
};
