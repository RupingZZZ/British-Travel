import ajax from "./ajax";
const BASE='http://localhost:80';


export const reqNewList = ()=>ajax(BASE+'/NewList.php',{})

export const reqNewContent =(Id)=>ajax(BASE+'/NewContent.php',{Id})

export const reqViewList = ()=>ajax(BASE+'/ViewList.php',{})

export const reqViewIntroduction=(Id)=>ajax(BASE+'/ViewIntroduction.php',{Id})

export const  reqSights= (eSearch)=>ajax(BASE+"/Search.php",{eSearch})

export const  reqLogin= (email,password)=>ajax(BASE+"/Login.php",{email,password})

export const  reqRegister = (email,password,username,phone)=>ajax(BASE+"/Register.php",{email,password,username,phone})

export const  reqProduct = ()=>ajax(BASE+"/Product.php",{})

export const  postBook = (userId,productId)=>ajax(BASE+"/Book.php",{userId,productId})

export const  reqBook = (userId)=>ajax(BASE+"/shopCar.php",{userId})

export const  reqDelete = (userId,productId)=>ajax(BASE+"/DeList.php",{userId,productId})

export const  reqAdd = (userId,productId)=>ajax(BASE+"/AddList.php",{userId,productId})

export const  reqRMessage = ()=>ajax(BASE+"/RMessage.php",{})

export const  reqWMessage = (userId,Content)=>ajax(BASE+"/WMessage.php",{userId,Content})