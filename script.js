function myfunction(){
fetch('http://localhost:12345/get_token')

    .then(response => response.json())  
    .then(data => {
      console.log(data.token)
      
      document.querySelector("#displaytoken").innerText= "Hola, Amigo! Token : " + data.token
    
    })   

}

const form = document.getElementById('form');
form.addEventListener('submit', async (e) => {
    
    e.preventDefault();
     const name = document.getElementById('nameh').value;
     const info = document.getElementById('datah').value;
     const token = document.getElementById('tokenh').value;

     let details = {username: name,data: info,token: token}



    let resp = await fetch('http://localhost:12345/register',{
      method: 'POST',

      headers : {
        'Content-Type': 'application/json'
            },

       body: JSON.stringify(details),      

       


    }
)

    .then(resp => { 
      console.log(resp)
       if(resp.ok)
      {
        document.querySelector("#errordisplay").innerText="user added successfully" 
      }
       
      return resp.json()
    })
    .then(datadis => {console.log(datadis)
      document.querySelector("#errordisplay").innerText= datadis.error
    })





});


const getdata = document.getElementById('togetdata');
getdata.addEventListener('submit', async (fs) => {
    
     fs.preventDefault();

     const enttoken = document.getElementById('entertoken').value;

     let toget = { token: enttoken}    

    let respo = await fetch('http://localhost:12345/get_data',{
      method: 'POST',

      headers : {
        'Content-Type': 'application/json'
            },

       body: JSON.stringify(toget),      

       


    }
)

    .then(respo => respo.json())
    .then(datadisp => {console.log(datadisp)
    if((datadisp.username!=undefined)&&(datadisp.data!=undefined))
    {document.querySelector("#displayusername").innerText="Username : " + datadisp.username
     document.querySelector("#displaydata").innerText="Data : " + datadisp.data
    }
    else
    { document.querySelector("#displayusername").innerText=datadisp.error
       document.querySelector("#displaydata").innerText=" "
    }
  })

});
