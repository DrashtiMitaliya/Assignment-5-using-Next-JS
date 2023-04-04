import {toast} from 'react-hot-toast';
import { Messages } from '@/constants/Messages';
import { decryptedText, encryptedText } from './cipher';

export const ChangePassword = (values) => {
    let valid =false

    const userProfileData = JSON.parse(localStorage.getItem('signUpData'));
    const currentUserData = userProfileData.find((item) => item.isActive)


    if (decryptedText(currentUserData.password) !== (values.password)) {
        toast.error(Messages.InValid_Password, {
            duration: 1000
        })
    } else if (decryptedText(currentUserData.password) === (values.nPassword)) {
        toast.error(Messages.Same_Password, {
            duration: 1000
        })
    } else {
        const temp = userProfileData.map(item => {
            console.log(item)
            if (item.isActive === true) {
                item.password = encryptedText(values.nPassword)
                item.confirmPassword = encryptedText(values.confirmPassword)
                valid=true  
            }
            return item
        })
        localStorage.setItem('signUpData', JSON.stringify(temp))
        toast.success(Messages.Successful_Change_Password, {
            duration: 1000
        })
        return valid

    }
}