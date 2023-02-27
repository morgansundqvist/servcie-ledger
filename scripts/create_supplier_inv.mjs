import axios from 'axios';

let bookingDate = '2023-01-10';
let journalDescription = 'Telia Faktura F100002';

let options = {
  method: 'POST',
  url: 'http://127.0.0.1:8080/ledger-journal',
  headers: { 'Content-Type': 'application/json' },
  data: { name: journalDescription, bookingDate: bookingDate },
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
    let journalId = response.data.id;
    options = {
      method: 'POST',
      url: 'http://127.0.0.1:8080/ledger-journal-line',
      headers: { 'Content-Type': 'application/json' },
      data: {
        journalId: journalId,
        accountId: 'a1fd95e8-f7af-4060-9a6b-48cd70d2ca4d',
        transactionDate: bookingDate,
        amount: '2000',
      },
    };
    axios.request(options).then((data) => {
      options = {
        method: 'POST',
        url: 'http://127.0.0.1:8080/ledger-journal-line',
        headers: { 'Content-Type': 'application/json' },
        data: {
          journalId: journalId,
          accountId: '43fb343e-65cd-4b08-bd41-4973a95c3d2e',
          transactionDate: bookingDate,
          amount: '-1600',
        },
      };
      axios.request(options).then((data) => {
        options = {
          method: 'POST',
          url: 'http://127.0.0.1:8080/ledger-journal-line',
          headers: { 'Content-Type': 'application/json' },
          data: {
            journalId: journalId,
            accountId: '73abdd28-45ce-4338-8e6e-cd318b4eca9d',
            transactionDate: bookingDate,
            amount: '-400',
          },
        };
        axios.request(options).then((data) => {
          console.log(data);
        });
      });
    });
  })
  .catch(function (error) {
    console.error(error);
  });
