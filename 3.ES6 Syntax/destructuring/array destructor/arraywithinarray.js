function getProfile()
{
    return['Karthik','karthik@gmail.com',['c','c++','JS']]
}

let [uname, email,[skill1,skill2,skill3]] = getProfile();
console.log(uname,email,skill1,skill2,skill3);