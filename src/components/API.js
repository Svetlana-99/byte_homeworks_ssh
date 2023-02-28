export const urlLogin ="https://byte-tasks.herokuapp.com/api/auth/login";
export const urlRegister ="https://byte-tasks.herokuapp.com/api/auth/register"
export const urlSelf ="https://byte-tasks.herokuapp.com/api/auth/user/self"
export const urlTask ="https://byte-tasks.herokuapp.com/api/task"


export class API{
    constructor(options){
        console.log('options', options)
        const {url, data} = options;
        this.url = url;
        this.data = data;
    }
    async handleErrors(response) {
        const {url,  ok, status, statusText} = response;
        // console.log('response_handleErrors', response)
        if (!ok) {
          throw new Error(`\n Response  on ${url} \n failed  with status ${status};\n statusText: ${statusText}`);
        }
      }
      async sendData (url, data) {
        const response = await fetch(url, {
            method: 'POST',
            body: data,
            headers: {
                'Content-Type': "application/json",
                'Authorization': localStorage.getItem("token"),
              },
        });
        await this.handleErrors(response);
        console.log('response_handleErrors', response)
        return await response.json();
    };

    async getData(url, token) {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': "application/json",
                'Authorization': `Bearer ${token}`,
            }
        }
            );
            await this.handleErrors(response);
            return await response.json();
    };

    async createTask(data) {
        const response = await fetch(urlTask, {
          method: "POST",
          body: data,
          headers: {
            'Content-Type': "application/json",
            'Authorization':  `Bearer ${localStorage.getItem("token")}`,
        }
        });
    
        await this.handleErrors(response);
        console.log('response', response)
        return response.json();
      }

    async editTask(id, data) {
        const response = await fetch(`${urlTask}/${id}`, {
          method: "PATCH",
          body: JSON.stringify(data),
          headers: {
            'Content-Type': "application/json",
            'Authorization':  `Bearer ${localStorage.getItem("token")}`,
        }
        });
    
        await this.handleErrors(response);
    
        return response.json();
      }
      
      async deleteTask(id) {
        const response = await fetch(`${urlTask}/${id}`, {
          method: "DELETE",
          headers: {
            'Content-Type': "application/json",
            'Authorization':  `Bearer ${localStorage.getItem("token")}`,
        }
        });
    
        await this.handleErrors(response);
        return response;
      }

    async getAllTasks() {
        const response = await fetch(urlTask, {
          method: "GET",
          headers: {
            'Content-Type': "application/json",
            'Authorization':  `Bearer ${localStorage.getItem("token")}`,
        }
        });

        await this.handleErrors(response);
        
        return await response.json();
      }

}
// export const api = new API();
