import React from 'react';
import CrosswordGrids from './components/CrosswordGrids';
import './App.css';

function App() {
  return (
    <div className="App">
      <CrosswordGrids />
      <div className="content-container">
        <div className="left">
          <p>가로</p> 
          <div>
            <p>2. 서울대, 고려대, 그리고?</p> 
            <p>3. 북한에 있는 제일 높은산의 정상은?</p> 
            <p>4. 얼음이 들어간 *** 아메리카노</p> 
            <p>6. 악세사리 중 하나, 묶을 때 쓰기도 하는 이건?</p> 
            <p>7. 명절에 무엇을 지낼까?</p> 
            <p>8. **접수, **주문등 대규모 또는 많은걸 나타내는 이건?</p> 
            <p>10. 고속**</p> 
            <p>12. 99대장, 뚱시경 등 부캐로 유명 인플루언서이기도 한 인물은?</p> 
            <p>14. 고등학교에서 주로 하는 강제로 학교에 밤까지 남아서 공부하는 이건 ****학습</p> 
          </div>
        </div>
        <div className="right">
          <p>세로</p>
          <div>
            <p>1. 이 문제를 푸는 그대의 이름은?</p>
            <p>2. 뭔가 잘하기 위해서 하는 것</p>
            <p>4. 그대의 피부는 ** 피부</p> 
            <p>5. 그대가 못먹는 하얀 액체</p> 
            <p>6. 커다란 댕댕이 골든 ****</p> 
            <p>7. 습기 제거해주는 기계</p> 
            <p>8. 손닙 **, 큰 접시라는 뜻이기도 한 이 말은?</p> 
            <p>9. *** 아크, 김윤진 주연의 미드로도 유명한 이건?</p> 
            <p>11. 군**, 찐**, 물**</p> 
            <p>12. 호랑**, 배추흰**</p> 
            <p>13. 범죄자가 스스로가 저지른 범행을 신고하는 행위는?</p> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
