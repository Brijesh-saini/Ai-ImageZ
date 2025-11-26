// import express from 'express'
// import { loginUser, paymentRazorpay, registerUser, userCredits, verifyRazorpay } from '../controllers/userController.js';
// import authUser from '../middlewares/auth.js';


// const userRouter = express.Router();

// userRouter.post('/register', registerUser)
// userRouter.post('/login', loginUser)
// userRouter.get('/credits',authUser, userCredits)
// userRouter.post('/pay-razor',authUser, paymentRazorpay)
// userRouter.post('/verify-razor',verifyRazorpay)

// export default userRouter


import express from 'express'
import { loginUser, registerUser, userCredits, addFreeCredits } from '../controllers/userController.js';
import authUser from '../middlewares/auth.js';

const userRouter = express.Router();

userRouter.post('/register', registerUser)
userRouter.post('/login', loginUser)
userRouter.get('/credits', authUser, userCredits)
// New route for free credits
userRouter.post('/add-credits', authUser, addFreeCredits) 

// Remove these lines:
// userRouter.post('/pay-razor',authUser, paymentRazorpay)
// userRouter.post('/verify-razor',verifyRazorpay)

export default userRouter