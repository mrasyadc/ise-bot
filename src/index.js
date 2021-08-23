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
<<<<<<< HEAD
        const sendData = await data;

        const timestamp = await sendData.timestamp;
        const date = await new Date(timestamp);
        // const day = await date.getDay();
        const tim = await sendData.tim;
        const peserta = await sendData.peserta;

        // await console.table(tim);
        // await console.table(peserta);

        await context.sendFlex("Statistik ISE 2021", {
          "type": "bubble",
          // "hero": {
          //   "type": "image",
          //   "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_1_cafe.png",
          //   "size": "full",
          //   "aspectRatio": "20:13",
          //   "aspectMode": "cover",
          //   "action": {
          //     "type": "uri",
          //     "uri": "http://linecorp.com/"
          //   },
          //   "align": "center"
          // },
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
                "margin": "md"
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
                        "text": "Bionix Student",
                        "color": "#aaaaaa",
                        "size": "sm",
                        "flex": 5,
                        "wrap": true
                      },
                      {
                        "type": "text",
                        "text": String(tim.bionix.junior),
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
                        "text": "Bionix College",
                        "color": "#aaaaaa",
                        "size": "sm",
                        "flex": 5,
                        "wrap": true
                      },
                      {
                        "type": "text",
                        "text": String(tim.bionix.senior),
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
                        "text": "Icon Data Science",
                        "color": "#aaaaaa",
                        "size": "sm",
                        "flex": 5,
                        "wrap": true
                      },
                      {
                        "type": "text",
                        "text": String(tim.icon.academy['data-science']),
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
                        "text": "Icon Startup",
                        "color": "#aaaaaa",
                        "size": "sm",
                        "flex": 5,
                        "wrap": true
                      },
                      {
                        "type": "text",
                        "text": String(tim.icon.academy.startup),
                        "wrap": true,
                        "color": "#666666",
                        "size": "sm",
                        "flex": 5
                      }
                    ]
                  }
                ]
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
                        "text": "Bionix Student",
                        "color": "#aaaaaa",
                        "size": "sm",
                        "flex": 5,
                        "wrap": true
                      },
                      {
                        "type": "text",
                        "text": String(peserta.bionix.junior),
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
                        "text": "Bionix College",
                        "color": "#aaaaaa",
                        "size": "sm",
                        "flex": 5,
                        "wrap": true
                      },
                      {
                        "type": "text",
                        "text": String(peserta.bionix.senior),
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
                        "text": "Icon Data Science",
                        "color": "#aaaaaa",
                        "size": "sm",
                        "flex": 5,
                        "wrap": true
                      },
                      {
                        "type": "text",
                        "text": String(peserta.icon.academy['data-science']),
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
                        "text": "Icon Startup",
                        "color": "#aaaaaa",
                        "size": "sm",
                        "flex": 5,
                        "wrap": true
                      },
                      {
                        "type": "text",
                        "text": String(peserta.icon.academy.startup),
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
          }
        }
          
          )
=======
        const sendData = await data.bionix;
        const bionixJunior = await sendData.junior;
        const bionixSenior = await sendData.senior;
        await context.sendText(`Statistik Peserta ISE 2021:\nBIONIX\na.\tStudent: ${bionixJunior}\nb.\tCollege: ${bionixSenior}\ntotal: ${bionixJunior+bionixSenior}`)
>>>>>>> becc899de68120b75830968c71668e0a5d9437fc
    } else {
      await context.sendText(`Mohon maaf server sedang maintenance`)
    }
    }
  }
}
