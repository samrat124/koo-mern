
 

const base_url="http://localhost:3050/users";

export const loginApi = async (input) => {


    try {

        let res = await fetch(base_url+"/login", {

            method: "POST",
            body: JSON.stringify(input),
            headers: {
                "Content-Type": "application/json"
            }


        });

        let data = await res.json();
        return data;

    } catch (err) {

        console.log(err);
    }

}

export const signupApi=async(input)=>{


    try{

        let res=await fetch(base_url+"/register",{

            method:"POST",
            body:JSON.stringify(input),
            headers:{
                "Content-Type": "application/json"
            }

        });

        let data=await res.json();
        return data;

    }catch(err){
        throw new Error(err.message);
    }




}