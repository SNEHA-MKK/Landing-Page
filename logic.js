class Landing {

    //property
    dataBase ={
        "Milan"  : {username:'Milan',password:'Milan123'},
        "Manu"   : {username:'Manu',password:'Manu123'},
        "Anu"    : {username:'Anu',password:'Anu123'},
        "Manuel" : {username:'Manuel',password:'Manuel123'}
    }
    //method

    save(){
        if(this.dataBase){
            localStorage.setItem("dataBase",JSON.stringify(this.dataBase))
        }
    }

    //get data

    getData(){
        this.dataBase = JSON.parse(localStorage.getItem("dataBase"))
    }

    //register

    register(){
        this.getData()
        console.log('inside register function');
        let user =regUser.value
        let pswd = regPswd.value
        console.log(user,pswd);

        if(user=="" || pswd==""){
            alert('Please fill the form completely')
        }else{
            if(user in this.dataBase){
                alert('User Already exist')
            }else{
                this.dataBase[user]={username:user,password:pswd}
                this.save()
                alert('User Added Successfully')

                //for navigation
                window.location="index.html"
            }
        }
    }

    //login

    login(){
        let luser = loginUser.value
        let lpswd = loginPswd.value
        console.log(luser,lpswd);
        this.getData()
        if(luser=="" || lpswd==""){
            alert('Please fill the form completely')
        }else{
            if(luser in this.dataBase){
                if(this.dataBase[luser].password==lpswd){
                    alert('Login successfull')
                    localStorage.setItem("user",luser)
                    window.location='home.html'
                }else{
                    alert('Wrong Username or password')
                }
            }else{
                alert('Wrong Username or password')
            }
        }

    }

}

const obj=new Landing()
obj.getData()