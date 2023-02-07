const base_url="http://localhost:3050/posts";
const base_url1="http://localhost:3050/post";


export const getDataApi = async () => {

    try {

        let token=localStorage.getItem("token");

        let res = await fetch(base_url, {

            method: "GET",
            
            headers: {
                token:token
            }
        });

        let data = await res.json();
         
        return data;

    } catch (err) {

        console.log(err);
    }

}

export const getCricketDataApi = async () => {

    try {

        let token=localStorage.getItem("token");

        let res = await fetch(base_url+"/cricket", {

            method: "GET",
            
            headers: {
                token:token
            }
        });

        let data = await res.json();
         
        return data;

    } catch (err) {

        console.log(err);
    }

}

export const getSearchDataApi = async (input) => {

    try {

        let token=localStorage.getItem("token");

        let res = await fetch(base_url+`/?q=${input}`, {

            method: "GET",
            
            headers: {
                token:token
            }
        });

        let data = await res.json();
         
        return data;

    } catch (err) {

        console.log(err);
    }

}

export const getbyId = async (id) => {

    try {

        let token=localStorage.getItem("token");

        let res = await fetch(base_url1+`/${id}`, {

            method: "GET",
            
            headers: {
                token:token
            }
        });

        let data = await res.json();
         
        return data;

    } catch (err) {

        console.log(err);
    }

}

export const getPopularDataApi = async () => {

    try {

        let token=localStorage.getItem("token");

        let res = await fetch(base_url+"/popular", {

            method: "GET",
            
            headers: {
                token:token
            }
        });

        let data = await res.json();
         
        return data;

    } catch (err) {

        console.log(err);
    }

}

export const createPostApi = async (input) => {

    try {

        let token=localStorage.getItem("token");

        let res = await fetch(base_url+"/data", {

            method: "POST",
            body:JSON.stringify(input),
            
            headers: {
                "Content-Type":"application/json",
                token:token
            }
        });

        let data = await res.json();
        return data;

    } catch (err) {

        console.log(err);
    }

}