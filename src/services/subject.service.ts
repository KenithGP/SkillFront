
export class SubjectService{
    private baseURL: string = "http://localhost:3000/api/user-subject";

    async getAllSubjects(){
        try {
            const response = await fetch(`${this.baseURL}/get-all`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include'
            });
            const subjects = await response.json();
            return subjects;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
}