function register(cb) {
 setTimeout(()=>{ console.log("register Here ");},2000);
 cb();
}
function sendEmail(cb) {
  setTimeout(() => {
    console.log("Send Email");
  }, 2000);
  cb();
}
function login(cb) {
    setTimeout(()=>{ console.log("Login here");},2000);
 cb();
}

function getData(cb) {
  setTimeout(() => {
    console.log("getData here");
  }, 2000);
  cb();
}
// function fetchData(cb) {
//   setTimeout(() => {
//     console.log("fetchData here");
//   }, 3000);
//   cb();
// }
function displayData() {
  console.log("displayData here");
}

register(() => {
  sendEmail(() => {
    login(() =>
      getData(() => {
        displayData();
      }),
    );
  });
});
