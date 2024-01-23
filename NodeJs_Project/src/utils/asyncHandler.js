const asyncHandler = (requestHandler) =>{
    (req,res,next)=>{
        Promise.resolve(requestHandler(req,res,next)).catch( (err)=>next(err))
    }
}

export {asyncHandler}

// here we are doing a practice of creating a wrapper around any function which is going to take time by using async and await

// here next is denoting the next middleware  

// this is the way of doing async and await

/*
const asyncHandler = (fn) = async(req,res, next)=> {
    try {
        await fn(req, res, next)
    } catch (err) {
        res.status(err.code || 500).json({
            success: false,
            message: err.message
        })
        
    }
}
*/

// mainly this syntax is used so for this understanding we have to do like this

// const asyncHandler = () =>{}
// const asyncHandler = (fn) = {() => {}}
// const asyncHandler = (fn) = async() =>{}