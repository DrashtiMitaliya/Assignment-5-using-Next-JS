import {toast} from 'react-hot-toast';
import { Messages } from '@/constants/Messages';

export const  logout = () => {
    localStorage.setItem('isLogin', false)
    toast.success(Messages.LogOut_Account)
    let signUpData = JSON.parse(localStorage.getItem("signUpData"))
    let temp = signUpData.map((item) => {
      item.isActive = false
      return item
    })
    localStorage.setItem("signUpData", JSON.stringify(temp))

  }
