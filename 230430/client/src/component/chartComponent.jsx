// import React, { useEffect, useState } from 'react';
// import { GoogleSpreadsheet } from 'google-spreadsheet';
// import { Chart } from 'google-charts';

// const SHEET_ID = '1z2RakGel8mA2U-jrunlkqp91qyuU4PBBbT7Zoc2b3p8';
// const SHEET_NAME = '0';

// function ChartComponent() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     async function fetchData() {
//       const doc = new GoogleSpreadsheet(SHEET_ID);

//       // 인증 정보를 담은 credentials.json 파일을 로드합니다.
//       await doc.useServiceAccountAuth(require('./credentials.json'));

//       await doc.loadInfo();
//       const sheet = doc.sheetsByName[SHEET_NAME];

//       // 구글 스프레드시트에서 데이터 가져오기
//       const rows = await sheet.getRows();
//       const rowData = rows.map((row) => [row.date, row.value]);

//       // 구글 차트 생성
//       const chartData = [['Date', 'Value'], ...rowData];
//       const chart = new Chart('chart', {
//         type: 'line',
//         data: chartData,
//       });

//       setData(chartData);
//     }

//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h2>Google Spreadsheet Chart</h2>
//       <div id="chart" />
//     </div>
//   );
// }

// export default ChartComponent;

