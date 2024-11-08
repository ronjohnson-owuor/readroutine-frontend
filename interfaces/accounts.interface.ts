export interface signupmessage{
    message:string,
    proceed:boolean,
    token?:string
}
export interface normalSignupObject{
    username:string,
    email:string,
    password:string,
}
export interface googleSignupObject{
    username:string,
    email:string,
    key:string,
}