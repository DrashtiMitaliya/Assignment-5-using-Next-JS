// import from packages
import { toast } from 'react-hot-toast';
import { Messages } from "../constants/Messages";
import { encryptedText } from '../utils/cipher';

const setDataToLocalStorage = (values) => { 
    values.password = encryptedText(values.password)
    values.confirmPassword = encryptedText(values.confirmPassword)
    let signUpData = [];
    if (localStorage.getItem("signUpData") === null) {
        signUpData = []
    } else {
        signUpData = JSON.parse(localStorage.getItem("signUpData"))
    }
    if (signUpData.some(item => item.email === values.email)) {
        toast.error(Messages.Already_Exists_User)
    }
    else {
        values.isActive = true
        signUpData.push(values)
        localStorage.setItem('signUpData', JSON.stringify(signUpData))
        localStorage.setItem('isLogin', true)
        toast.success(Messages.Successful_SignIn)
        router.push('/products')
    }
}
export default setDataToLocalStorage