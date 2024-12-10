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

    async updateUserInfo(first_name:string, last_name: string, email:string, birthdate:string, username:string){
        try {
            const response = await fetch(`${this.baseURL}/update`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include',
                body: JSON.stringify({first_name, last_name, email, birthdate, username})
            });
            const user = await response.json();
            return user;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

}