

const token = JSON.parse(localStorage.getItem("token"));



export const likepost = (_id) => {
  fetch(`https://tough-knickers-colt.cyclic.app/likes`, {
    method: "put",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
    body:JSON.stringify({
      postId:_id
    })
  })
    .then((res) => res.json())
    .then((dat) => {
  
    })
    .catch((err) => {
      console.log(err);
    });
  
};

// ----------------  Unlikepost ------------ //

export const Unlikepost = (_id) => {
    fetch(`https://tough-knickers-colt.cyclic.app/unlikes/${_id}`, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((dat) => {
        console.log(dat);
        window.location.reload()
      }) 
      .catch((err) => {
        console.log(err);
      });
     
    
  };

