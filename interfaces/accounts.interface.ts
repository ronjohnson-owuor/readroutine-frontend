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

export interface normalLogin {
    email:string,
    password:string,
}

export interface userData {
        "proceed": boolean,
        "user": user,
        user_data:user_data
}

export interface user {
    "id": number,
    "username": string,
    "email": string,
    "email_verified": boolean,
    "profile_url": string,
    "createdAt": string,
    "updatedAt":string|null
}

export interface user_data{
    "nickname":string,
    "tier": number,
    "expiry_date": string
}