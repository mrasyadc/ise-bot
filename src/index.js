const { router, line } = require('bottender/router');
const axios = require('axios');

module.exports = async function App() {
  return router([
    line.message(HandleMessage),
  ]);
}

const headers = {
  'access-key': process.env.ACCESS_KEY
}

const postData = {
  password: process.env.PASSWORD
}

const makeRequest = async () => { 
    try {
    const response = await axios.post(process.env.API_URL, postData ,{headers: headers});
    if (response.status === 200) { // response - object, eg { status: 200, message: 'OK' }
     return response.data;
    }
    return false;
   } catch (err) {
     console.error(err)
     return false;
   }
}


async function HandleMessage(context) {
  if (context.event.isText) {
    if (context.event.text.toLowerCase() === '/info') {
      const data = await makeRequest();
      if (data) {
        const sendData = await data.bionix;
        const bionixJunior = await sendData.junior;
        const bionixSenior = await sendData.senior;
        await context.sendText(`Statistik Peserta ISE 2021:\nBIONIX\na.\tjunior: ${bionixJunior}\nb.\tsenior: ${bionixSenior}\ntotal: ${bionixJunior+bionixSenior}`)
    } else {
      await context.sendText(`Mohon maaf server sedang maintenance`)
    }
    }
  }
}
