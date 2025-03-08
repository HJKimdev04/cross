// CrosswordGrids.js
import React from 'react';
import Square from './Square';
import '../styles/CrosswordGrids.css'; // 그리드 스타일을 위한 CSS 파일 임포트

const CrosswordGrids = () => {
    // 10x10 그리드 초기화 (false는 흰색, true는 검은색)
    const grid = Array.from({ length: 10 }, () => Array(10).fill(false));

    // 검은색 사각형 설정 
    const blackSquares = [
        [0, 4], [0, 8], 
        [1, 0], [1, 1], [1, 3], [1, 4], [1, 6], [1, 7], [1, 8],
        [2, 2], [2, 5], [2, 8], [2, 9],
        [3, 0], [3, 2], [3, 4], [3, 5], [3, 7],
        [4, 0], [4, 2], [4, 3], [4, 4], [4, 5], [4, 7], [4, 9],
        [5, 1], [5, 5], [5, 6], [5, 7], [5, 9],
        [6, 1], [6, 3], [6, 4], [6, 5], [6, 6], [6, 7], [6, 9],
        [7, 0], [7, 1], [7, 2], [7, 3], [7, 5], [7, 6], [7, 7], [7, 8], [7, 9],
        [8, 0], [8, 1], [8, 2], [8, 3], [8, 5], [8, 6],
        [9, 0], [9, 6], [9, 8], [9, 9], 
    ];

    // 검은색 사각형으로 설정
    blackSquares.forEach(([row, col]) => {
        grid[row][col] = true;
    });

    // 입력값을 저장할 상태 (선택 사항)
    const handleChange = (row, col) => (e) => {
        console.log(`Square (${row}, ${col}) 값: ${e.target.value}`);
    };

    return (
        <div className="grid">
            {grid.map((row, rowIndex) => (
                <div key={rowIndex} className="grid-row">
                    {row.map((isBlack, colIndex) => (
                        <Square
                            key={`${rowIndex}-${colIndex}`}
                            isBlack={isBlack}
                            onChange={handleChange(rowIndex, colIndex)}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
};

export default CrosswordGrids;
