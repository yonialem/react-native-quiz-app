import axios from "axios";


// ToDo Replace Base URI
const baseUrl="https://.com/dev/";

// ToDo Get Token from store or pass for each request
const AuthHeader = "";

    const  Transport = {
    HTTP : {
        samplePOST: (data:any) => axios({
            'url': baseUrl+"some/path" ,
            'method': 'POST',
            'headers': {"Authorization" :"Bearer "+AuthHeader},
            data:data
        }),
        sampleGET: () => axios({
            'url': baseUrl+"path?param=value",
            'headers': {"Authorization" :"Bearer "+AuthHeader},
            'method': 'GET'
        }),
        login: (data:any) => axios({
            'url': baseUrl+"auth/login" ,
            'method': 'POST',
            data:data
        }),
        signup: (data:any) => axios({
            'url': baseUrl+"auth/signup" ,
            'method': 'POST',
            data:data
        }),
        setGoal: (data:any) => axios({
            'url': baseUrl+"practice/userGoal" ,
            'headers': {"Authorization" :"Bearer "+AuthHeader},
            'method': 'POST',
            data:data
        }),
        getCategories: () => axios({
            'url': baseUrl+"category/categories" ,
            'headers': {"Authorization" :"Bearer "+AuthHeader},
            'method': 'GET'
        }),
        getQuestions: (category) => axios({
            'url': baseUrl+"practice/question/getQuestions/"+category ,
            'headers': {"Authorization" :"Bearer "+AuthHeader},
            'method': 'GET'
        }),
        getGoal: () => axios({
            'url': baseUrl+"practice/userGoal" ,
            'headers': {"Authorization" :"Bearer "+AuthHeader},
            'method': 'GET'
        }),
        getBooks: (category) => axios({
            'url': baseUrl+"library/getBooks/"+category ,
            'headers': {"Authorization" :"Bearer "+AuthHeader},
            'method': 'GET'
        }),

    }
}
export default Transport;
