import axios from "axios"

const token = JSON.parse(localStorage.getItem("token"));



export const likepost = (_id) => {
  axios.patch(`https://tough-knickers-colt.cyclic.app/post/${_id}/like`, {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
  
  })
    .then((dat) => {
    // console.log(dat)
    window.location.reload();
    })
    .catch((err) => {
      console.log(err);
    });
  
};



// ----------------  Unlikepost ------------ //

export const Unlikepost = (_id) => {
  axios.patch(`https://tough-knickers-colt.cyclic.app/post/${_id}/dislike`, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
    })

      .then((dat) => {
        // console.log(dat);
        window.location.reload()
      }) 
      .catch((err) => {
        console.log(err);
      });
     
    
  };

