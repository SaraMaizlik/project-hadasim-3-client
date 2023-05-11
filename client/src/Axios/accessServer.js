import Axios from 'axios';

export const sendMemberToServer = async(data)=>{
    
    let response = await Axios.post("http://localhost:3042/member/newMember", 
      {
        member: data.member,
        address: data.address,
        vaccine: data.vaccine,
        manufacturer: data.manufacturer
    });
    return response;
  }
