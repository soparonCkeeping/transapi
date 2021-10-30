const axios = require('axios')
const API_KEY = `AIzaSyDpuhPAXBFKTzK1P7n9vSW87mZtZBSG408`

axios.post('https://tran-huy-transapi.herokuapp.com/cors-everywhere', 
    {
        requestURL: `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=Museum%20of%20Contemporary%20Art%20Australia&inputtype=textquery&fields=formatted_address%2Cname%2Crating%2Copening_hours%2Cgeometry&key=${API_KEY}`
    }
).then((res) => {
    console.log(res)
}).catch((err) => {
    console.log(err)
})