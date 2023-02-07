/* eslint-disable prettier/prettier */
const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    myHeaders.append(
      'authentication-token',
      '0mWeYtGs9FZIG1aWK7/oU2E6ixO57tB40fldoHyu41YfXZJCEMLuKFgxM9RtZPcl',
    );
// export const signUp = body => {
//   return fetch({
//     method: 'POST',
//     url: `${API}/sign-up`,
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(body),
//   });
// };

export async function fetchChatData1() {
    const allchats = await fetch(
      'https://aim.twixor.com/e/enterprise/chat/summary',
      {crossDomain: true, headers: myHeaders},
    );
    const allchatsdata = await allchats.json();
    return allchatsdata;
    // setchatmessages(allchatsdata.response.chats);
  }
