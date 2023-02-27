import { readFileSync } from 'fs';
import axios from 'axios';

const importAccounts = async () => {
  let content = readFileSync('./accounts.csv', 'utf-8');
  let allAccountsResponse = await axios.get(
    'http://127.0.0.1:8080/fiscal-year-account',
  );
  console.log(allAccountsResponse.data);
  let codes = allAccountsResponse.data.map((item) => {
    return item.accountCode;
  });
  console.log(codes);
  for (let row of content.split('\n')) {
    let rowContent = row.split('\t');
    if (rowContent.length < 2) return;
    if (codes.includes(rowContent[0])) return;
    console.log(rowContent);
    await axios.post('http://127.0.0.1:8080/fiscal-year-account', {
      fiscalYearId: '7e85c642-c74a-412c-a60d-9266cf040e80',
      accountCode: rowContent[0],
      accountName: rowContent[1],
      startingBalance: '0.0',
    });
  }
};

importAccounts();
