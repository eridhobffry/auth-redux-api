//every xhr response goes through here, except file upload responses
export const handleApiResponse = (response, payload = {}) => {
    return response.text().then(text => {
        let data
       
        try{
            data = JSON.parse(text)
        }catch (e){
            data = text
        } 
        
        if(!response.ok){
            return Promise.reject(data === '' ? response : data)
        }

        return data
    })
}