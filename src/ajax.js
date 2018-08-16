export default {
//fuction responsible for fetching data
const apiRemote = 'https://bakesaleforgood.com'

 async fetchDealsInit () {
  try {
     let response = await fetch(apiRemote + '/api/Deals');
     let responseJson = await response.json();
     return responseJson;
   } catch (error) {
     console.error(error);
   }

}

};
