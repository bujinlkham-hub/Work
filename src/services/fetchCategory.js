const URI = 'http://localhost:8000';

export default {
    async fetchCategory() {
        try {
                let response = await fetch(URI + '/api/getCategoryList');
                let responseJsonData = await response.json();
                return responseJsonData;
            }
        catch(e) {
            console.log(e)
        }
    }
}
