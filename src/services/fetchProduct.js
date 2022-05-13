const URI = 'http://localhost:8000';

export default {
    async fetchProduct() {
        try {
                let response = await fetch(URI + '/api/getProdList');
                let responseJsonData = await response.json();
                return responseJsonData;
            }
        catch(e) {
            console.log(e)
        }
    }
}
