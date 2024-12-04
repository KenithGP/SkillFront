
export class AuthService{
    private baseURL: string = "http://localhost:3000/api/auth";

    async login(email:string, password:string){
        try {
            const response = await fetch(`${this.baseURL}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include',
                body: JSON.stringify({email, password})
            });
            const user = await response.json();
            return user;
        } catch (error) {
            console.error(error);
            throw error;
        }

    }

    async register(first_name:string, last_names: string, email:string, bithdate:string, password:string){
        try {
            const response = await fetch(`${this.baseURL}/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include',
                body: JSON.stringify({first_name, last_names, email, bithdate, password})
            });
            const newUser = await response.json();
            return newUser;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
    
}