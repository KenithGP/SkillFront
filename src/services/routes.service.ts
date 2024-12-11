
export class RouteService{
    private baseURL: string = "http://localhost:3000/api/user-route";

    async getAllRoutes(){
        try {
            const response = await fetch(`${this.baseURL}/get-all`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include'
            });
            const routes = await response.json();
            return routes;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async getRouteById(id: string){
        try {
            const response = await fetch(`${this.baseURL}/get/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include'
            });
            const route = await response.json();
            return route;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

}