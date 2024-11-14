"use client";
"use client"
import Cookies from 'js-cookie'
import CryptoJS from 'crypto-js';


type booleanOrstring = boolean | string;

function useToken() {

	const token:string|undefined = Cookies.get(process.env.NEXT_PUBLIC_ID!);
	const encryption_key:string = process.env.NEXT_PUBLIC_TOKEN_ENCRYPTION_CODE!;

	/* this returns the raw token if not found */
    const decryptedToken = (): booleanOrstring =>{
        if(!token){
            return false;
        }
        
        const decrypted_token = CryptoJS.AES.decrypt(token, encryption_key).toString(CryptoJS.enc.Utf8);	
        return decrypted_token;
    }


const encrypt_token = (data:string) =>{
		const encryptedData_token = CryptoJS.AES.encrypt(data,encryption_key).toString();
		Cookies.set(process.env.NEXT_PUBLIC_ID!,encryptedData_token,{ expires: 100});
		return encryptedData_token ? true : false;
}




const delete_token = () =>{
	Cookies.remove(process.env.NEXT_PUBLIC_ID!);
	window.location.reload();
}


return{
	encrypted:token,
	isToken: token ? true : false,
	decrypted: decryptedToken(),
	encryptToken:encrypt_token,
	deleteToken:delete_token,
};
}

export default useToken;