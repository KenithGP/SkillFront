
export class SubjectService{
    private baseURL: string = "http://localhost:3000/api/user-subject";
    private baseURLSession: string = "http://localhost:3000/api/user-session";

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

    async getSubjectById(id: string){
        try {
            const response = await fetch(`${this.baseURL}/get/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include'
            });
            const subject = await response.json();
            return subject;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
    
    async getSessionsBySubjectId(id: string){
        try {
            const response = await fetch(`${this.baseURLSession}/get-all-sections-and-sessions/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include'
            });
            const sessions = await response.json();
            return sessions;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }


}