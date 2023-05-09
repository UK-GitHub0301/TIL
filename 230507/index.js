// Google sheet npm package
const { GoogleSpreadsheet } = require("google-spreadsheet");

// File handling package
const fs = require("fs");

//스프레드 시트의 url을 가져 옵니다.(##위치에 복사해서 붙여 넣기)
const RESPONSES_SHEET_ID = "##";

// Create a new document
const doc = new GoogleSpreadsheet(RESPONSES_SHEET_ID);

// ##은 google could console에서 api service 데이터 키를 받습니다.
const CREDENTIALS = JSON.parse(fs.readFileSync("##"));

const getRow = async (email) => {
  //use service account creds
  await doc.useServiceAccountAuth({
    client_email: CREDENTIALS.client_email,
    private_key: CREDENTIALS.private_key,
  });

  //load the documents info
  await doc.loadInfo();

  //Index of the sheet
  let sheet = doc.sheetsByIndex[0];

  //Get all the rows
  let rows = await sheet.getRows();

  for (let index = 0; index < rows.length; index++) {
    const row = rows[index];
    if (row.email == email) {
      console.log(row.user_name);
      console.log(row.password);
    }
  }
};

getRow("email@gmail.com");

const addRow = async (rows) => {
  //use service account creds
  await doc.useServiceAccountAuth({
    client_email: CREDENTIALS.client_email,
    private_key: CREDENTIALS.private_key,
  });

  await doc.loadInfo();

  //Index of the sheet
  let sheet = doc.sheetsByIndex[0];

  for (let index = 0; index < rows.length; index++) {
    const row = rows[index];
    await sheet.addRow(row);
  }
};

let rows = [
  {
    email: "user01@email.com",
    user_name: "user01",
    password: "password",
  },
  {
    email: "user02@mail.com",
    user_name: "user02",
    password: "password",
  },
];

addRow(rows);
