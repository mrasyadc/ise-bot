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

const foto = [
  'https://ik.imagekit.io/mrasyadc/cfa0d6ace25e886b938e2229846a6ffe4_21429761_210824_swacWZfFr.jpg?updatedAt=1629788527868', 
  'https://ik.imagekit.io/mrasyadc/cfa0d6ace25e886b938e2229846a6ffe4_21429761_210824_0_ilBvWmEUF.jpg?updatedAt=1629789133629'
]

const semangat = [
  'semangat ya', 
  'keren deh kamu', 
  'semangat terus beb',
  'jangan menyerah', 
  'semangat kamu',
  'miss u so much semangat ya'
]

async function HandleMessage(context) {
  if (context.event.isText) {
    if (context.event.text.toLowerCase() === '/info') {
      const data = await makeRequest();
      if (data) {
        const sendData = await data;

        const timestamp = await sendData.timestamp;
        const date = await new Date(timestamp);
        // const day = await date.getDay();
        const tim = await sendData.tim;
        const peserta = await sendData.peserta;

        await context.sendFlex("Statistik ISE 2021", {
          "type": "bubble",
          "body": {
            "type": "box",
            "layout": "vertical",
            "contents": [
              {
                "type": "text",
                "text": "ISE ITS 2021",
                "weight": "bold",
                "size": "xl"
              },
              {
                "type": "box",
                "layout": "baseline",
                "spacing": "sm",
                "contents": [
                  {
                    "type": "text",
                    "text": "Datetime",
                    "color": "#aaaaaa",
                    "size": "sm",
                    "flex": 2,
                    "wrap": true
                  },
                  {
                    "type": "text",
                    "text": date.toLocaleString('en-US', {hour12:false, timeZone:'Asia/Jakarta'}),
                    "wrap": true,
                    "color": "#666666",
                    "size": "sm",
                    "flex": 4
                  }
                ],
                "margin": "md"
              },
              {
                "type": "box",
                "layout": "baseline",
                "contents": [
                  {
                    "type": "text",
                    "text": "Data Tim",
                    "size": "sm",
                    "flex": 0
                  }
                ],
                "margin": "lg",
              },
              {
                "type": "box",
                "layout": "baseline",
                "spacing": "sm",
                "margin": "lg",
                "contents": [
                  {
                    "type": "text",
                    "text": "Total Tim",
                    "color": "#aaaaaa",
                    "size": "sm",
                    "flex": 5,
                    "wrap": true
                  },
                  {
                    "type": "text",
                    "text": String(tim.icon.academy.startup + tim.icon.academy['data-science'] + tim.bionix.junior.total + tim.bionix.senior),
                    "wrap": true,
                    "color": "#666666",
                    "size": "sm",
                    "flex": 5
                  }
                ],
              },
              {
                "type": "box",
                "layout": "baseline",
                "contents": [
                  {
                    "type": "text",
                    "text": "Data Peserta",
                    "size": "sm",
                    "flex": 0
                  }
                ],
                "margin": "lg",
                "offsetTop": "none",
                "paddingAll": "none",
                "paddingTop": "lg"
              },
              {
                "type": "box",
                "layout": "vertical",
                "margin": "lg",
                "spacing": "sm",
                "contents": [
                  {
                    "type": "box",
                    "layout": "baseline",
                    "spacing": "sm",
                    "contents": [
                      {
                        "type": "text",
                        "text": "Icon Talkshow",
                        "color": "#aaaaaa",
                        "size": "sm",
                        "flex": 5,
                        "wrap": true
                      },
                      {
                        "type": "text",
                        "text": String(peserta.icon.talkshow), //done api
                        "wrap": true,
                        "color": "#666666",
                        "size": "sm",
                        "flex": 5
                      }
                    ]
                  },
                  {
                    "type": "box",
                    "layout": "baseline",
                    "spacing": "sm",
                    "contents": [
                      {
                        "type": "text",
                        "text": "Icon Member Jobfair",
                        "color": "#aaaaaa",
                        "size": "sm",
                        "flex": 5,
                        "wrap": true
                      },
                      {
                        "type": "text",
                        "text": String(peserta.icon.jobfair.member), //done api
                        "wrap": true,
                        "color": "#666666",
                        "size": "sm",
                        "flex": 5
                      }
                    ]
                  },
                  {
                    "type": "box",
                    "layout": "baseline",
                    "spacing": "sm",
                    "contents": [
                      {
                        "type": "text",
                        "text": "Icon Job Apply",
                        "color": "#aaaaaa",
                        "size": "sm",
                        "flex": 5,
                        "wrap": true
                      },
                      {
                        "type": "text",
                        "text": String(peserta.icon.jobfair.apply), //done api
                        "wrap": true,
                        "color": "#666666",
                        "size": "sm",
                        "flex": 5
                      }
                    ]
                  },
                  {
                    "type": "box",
                    "layout": "baseline",
                    "spacing": "sm",
                    "contents": [
                      {
                        "type": "text",
                        "text": "Icon Job Apply Distinct",
                        "color": "#aaaaaa",
                        "size": "sm",
                        "flex": 5,
                        "wrap": true
                      },
                      {
                        "type": "text",
                        "text": String(peserta.icon.jobfair['apply-distinct']??'0'), //done api
                        "wrap": true,
                        "color": "#666666",
                        "size": "sm",
                        "flex": 5
                      }
                    ]
                  },
                  {
                    "type": "box",
                    "layout": "baseline",
                    "spacing": "sm",
                    "contents": [
                      {
                        "type": "text",
                        "text": "Icon Job Bookmark",
                        "color": "#aaaaaa",
                        "size": "sm",
                        "flex": 5,
                        "wrap": true
                      },
                      {
                        "type": "text",
                        "text": String(peserta.icon.jobfair.bookmark), //done api
                        "wrap": true,
                        "color": "#666666",
                        "size": "sm",
                        "flex": 5
                      }
                    ]
                  },
                  {
                    "type": "box",
                    "layout": "baseline",
                    "spacing": "sm",
                    "contents": [
                      {
                        "type": "text",
                        "text": "Total Peserta",
                        "color": "#aaaaaa",
                        "size": "sm",
                        "flex": 5,
                        "wrap": true
                      },
                      {
                        "type": "text",
                        "text": String(peserta.icon.academy.startup + peserta.icon.academy['data-science'] + peserta.bionix.junior + peserta.bionix.senior + peserta.icon.talkshow + peserta.icon.jobfair.member ?? 0),
                        "wrap": true,
                        "color": "#666666",
                        "size": "sm",
                        "flex": 5
                      }
                    ]
                  }
                ]
              }
            ]
          }})
    } else {
      await context.sendText(`Mohon maaf server sedang maintenance`)
    }
    } else if (context.event.text.toLowerCase() === '/foto') {

      const send_foto = foto[Math.floor(Math.random() * foto.length)];
      await context.sendImage({
        originalContentUrl: send_foto,
        previewImageUrl: send_foto,
      });
    } else if (context.event.text.toLowerCase() === '/capek') {

      const send_semangat = semangat[Math.floor(Math.random() * semangat.length)];
      await context.sendText(send_semangat)
    } else if (context.event.text.toLowerCase() === '/devita') {
      await context.sendText("semangat ya kk canteeqq!")
    }
  }
}
