import connectDB from '../DB/connection.js'
import authRouter from './modules/auth/auth.router.js'
import organizationRouter from './modules/organization/oranization.router.js'
import parentRouter from './modules/parent/parent.router.js'
import teamRouter from './modules/team/team.router.js'
import userRouter from './modules/user/user.router.js'
import { globalErrorHandler } from './utils/errorHandling.js'



const initApp = (app, express) => {
    //convert Buffer Data
    app.use(express.json({}))
    // appear image path
    app.use('/uploads', express.static('uploads'))
    // app.use(express.static('uploads'))

    //Setup API Routing 
    app.use(`/auth`, authRouter)
    app.use(`/user`, userRouter)
    app.use(`/organization`, organizationRouter)
    app.use(`/parent`, parentRouter)
    app.use(`/team`, teamRouter)


    app.get('/', (req, res, next) => {
        return res.json({ message: "welcome to Codeavour" })
    })

    app.all('*', (req, res, next) => {
        return next(new Error(`invalid url can't access this endPoint Plz check url  or  method ${req.originalUrl}`, { cause: 404 }))

    })

    app.use(globalErrorHandler)
    connectDB()

}



export default initApp