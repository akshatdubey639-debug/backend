class ApiError extends Error{ // ye code hamne ApiErrorhandle krne ke liye likhe hai
    constructer(
        statuscode,
        messege="something went wrong",
        errors=[],
        stack=""
    ){
        super(messege)
        this.statuscode=statuscode,
        this.data=null,
        this.messege=messege,
        this.success=false,
        this.errors=errors

        if(stack){
            this.stack=stack;
        }
            else{
                Errors.captureStackTrace(this,this.constructor)
            }
        }

    }
 export {ApiError}