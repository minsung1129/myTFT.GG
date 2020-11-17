import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

  const [id, setId] = useState('');
  const [dataArr, setDataArr] = useState([]);

  useEffect(() => {
    axios.post('http://localhost:4000/result', {
      id,
    }).then((data) => {
      console.log(data);
      setDataArr(data.data.entries);
    })
  }, [])

  return (
    <div>
      <input placeholder="소환사 이름"></input>

      <table className="table">
        <thead>
          <tr>
            <th>번호</th>
            <th>닉네임</th>
            <th>mmr</th>
            <th>승리</th>
            <th>패배</th>
          </tr>
        </thead>
        <tbody>
          {dataArr.length !== 0 ? dataArr.map((e, i) => (
            <tr>
              <td>{i + 1}</td>
              <td>{e.summonerName}</td>
              <td>{e.leaguePoints}</td>
              <td>{e.wins}</td>
              <td>{e.losses}</td>
            </tr>
          )) : '?'}
        </tbody>
      </table>
    </div>


  );
}

export default App;
