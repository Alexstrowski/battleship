import BoardRow from './BoardRow';

const boardDimension = [...Array(10).keys()];
const Board = (props) => {
    return (
        <div className="p-5 bg-blue-400 w-max mt-10 pt-12 pr-12">
            {boardDimension.map((row) => (
                <div key={row} className="flex">
                    <div className="h-20 w-10 flex items-center text-yellow-300 text-2xl font-bold">
                        {String.fromCharCode(65 + row)}
                    </div>
                    <BoardRow row={row} {...props} />
                </div>
            ))}
            <div className="flex ml-10">
                {boardDimension.map((row) => (
                    <div key={row} className="h-10 w-20 mr-1 flex justify-center text-yellow-300 text-2xl font-bold">
                        {row + 1}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Board;
