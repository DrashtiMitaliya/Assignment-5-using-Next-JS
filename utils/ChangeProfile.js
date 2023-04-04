import { Messages } from '../constants/Messages';
import { toast } from 'react-hot-toast';

export const ChangeProfile = () => {
    const userProfileData = JSON.parse(localStorage.getItem('signUpData'));
    const currentUserData = userProfileData.filter((item) => item.isActive)
    return currentUserData
}


export const ProfileUpdate = (values) => {
    let valid =false
    const userProfileData = JSON.parse(localStorage.getItem('signUpData'));
    let index = userProfileData.findIndex(item => item.isActive === true)

    if (userProfileData[index].email === values.email) {
        userProfileData[index].firstName = values.firstName
        userProfileData[index].lastName = values.lastName
        userProfileData[index].phoneNumber = values.phoneNumber
        localStorage.setItem('signUpData', JSON.stringify(userProfileData))
        valid =true
        toast.success(Messages.ProfilePage_Update)
    } else if (userProfileData[index].email !== values.email) {
        if (userProfileData.some(item => item.email === values.email)) {
            toast.error(Messages.AlreadyExists_Mail)
        } else {
            userProfileData[index].email = values.email
            localStorage.setItem('signUpData', JSON.stringify(userProfileData))
            valid=true
            toast.success(Messages.ProfilePage_Update)
           
        }
    }
    return valid
}

