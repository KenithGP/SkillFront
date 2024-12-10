export class UserInfoService{
    private baseURL = "http://localhost:3000/api/user";

    async getHeaders(){
        try {
            const response = await fetch(`${this.baseURL}/get-headers`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include'
            });
            const user = await response.json();
            return user;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async getUserInfo(){
        try {
            const response = await fetch(`${this.baseURL}/get-info`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include'
            });
            const user = await response.json();
            return user;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

}