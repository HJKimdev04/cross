import React, { useState } from 'react';
import Square from './Square';
import '../styles/CrosswordGrids.css'; // 그리드 스타일을 위한 CSS 파일 임포트

const CrosswordGrids = () => {
    const grid = Array.from({ length: 10 }, () => Array(10).fill(false));

    const words = [
        { letter: '야', row: 0, col: 0, number: 13 },
        { letter: '간', row: 0, col: 1 },
        { letter: '자', row: 0, col: 2 },
        { letter: '율', row: 0, col: 3 },
        { letter: '수', row: 1, col: 2, number: 12 },
        { letter: '나', row: 0, col: 5, number: 11 },
        { letter: '비', row: 1, col: 5 },
        { letter: '선', row: 0, col: 6 },
        { letter: '욱', row: 0, col: 7 },
        { letter: '도', row: 2, col: 0, number: 10 },
        { letter: '로', row: 2, col: 1, number: 9 },
        { letter: '만', row: 0, col: 9, number: 6 },
        { letter: '두', row: 1, col: 9 },
        { letter: '스', row: 3, col: 1 },
        { letter: '트', row: 4, col: 1 },
        { letter: '대', row: 2, col: 3, number: 8 },
        { letter: '량', row: 2, col: 4 },
        { letter: '접', row: 3, col: 3 },
        { letter: '제', row: 2, col: 6, number: 7 },
        { letter: '사', row: 2, col: 7 },
        { letter: '습', row: 3, col: 6 },
        { letter: '기', row: 4, col: 6 },
        { letter: '리', row: 3, col: 8, number: 6 },
        { letter: '본', row: 3, col: 9 },
        { letter: '트', row: 4, col: 8 },
        { letter: '리', row: 5, col: 8 },
        { letter: '버', row: 6, col: 8 },
        { letter: '우', row: 5, col: 0, number: 5 },
        { letter: '유', row: 6, col: 0 },
        { letter: '아', row: 5, col: 2, number: 4 },
        { letter: '이', row: 5, col: 3 },
        { letter: '스', row: 5, col: 4 },
        { letter: '기', row: 6, col: 2 },
        { letter: '백', row: 9, col: 1, number: 3 },
        { letter: '두', row: 9, col: 2 },
        { letter: '산', row: 9, col: 3 },
        { letter: '정', row: 9, col: 4 },
        { letter: '상', row: 9, col: 5 },
        { letter: '고', row: 7, col: 4, number: 1 },
        { letter: '연', row: 8, col: 4 },
        { letter: '연', row: 8, col: 7, number: 2 },
        { letter: '세', row: 8, col: 8 },
        { letter: '대', row: 8, col: 9 },
        { letter: '습', row: 9, col: 7 },
    ];

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

    blackSquares.forEach(([row, col]) => {
        grid[row][col] = true;
    });

    const [inputValues, setInputValues] = useState({});
    const [message, setMessage] = useState('');

    const handleChange = (row, col) => (e) => {
        const value = e.target.value;
        setInputValues((prev) => ({ ...prev, [`${row}-${col}`]: value }));

        // 메시지 초기화
        setMessage('');
        
        // 각 입력값이 변경될 때마다 정답 체크
        setTimeout(checkAnswers, 0); // 비동기적으로 체크
    };

    const checkAnswers = () => {
        // 모든 하얀색 칸이 입력되었는지 확인
        const allFilled = words.every(({ row: wRow, col: wCol }) => {
            return inputValues[`${wRow}-${wCol}`] !== undefined && inputValues[`${wRow}-${wCol}`] !== '';
        });

        if (allFilled) {
            setMessage('천재군요, 화면은 그대로 두고 앞의 개발자에게 말을 거세요');
        } else {
            setMessage('');
        }
    };

    return (
        <div className="grid">
            {grid.map((row, rowIndex) => (
                <div key={rowIndex} className="grid-row">
                    {row.map((isBlack, colIndex) => {
                        const wordData = words.find(({ row, col }) => row === rowIndex && col === colIndex);
                        return (
                            <div className="square-container" key={`${rowIndex}-${colIndex}`}>
                                <Square
                                    isBlack={isBlack}
                                    onChange={handleChange(rowIndex, colIndex)}
                                    value={inputValues[`${rowIndex}-${colIndex}`] || ''}
                                />
                                {wordData && (
                                    <div className="square-number">{wordData.number}</div>
                                )}
                            </div>
                        );
                    })}
                </div>
            ))}
            {message && <div className="error-message">{message}</div>}
        </div>
    );
};

export default CrosswordGrids;
