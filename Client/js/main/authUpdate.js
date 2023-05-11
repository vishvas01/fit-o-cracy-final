const update = () => {
  const loginTest = document.getElementById("loginTextJS");
  if (localStorage.getItem("cookie") === null) {
    return;
  }
  loginTest.innerHTML = "Logout";
};

const deleteStorage = () => {
  const loginTest = document.getElementById("loginTextJS");
  if (loginTest.textContent === "Logout") {
  document.getElementById("loginTextJS").addEventListener('click',()=>{
      localStorage.removeItem('cookie');
    }) 
  }
};
update();
deleteStorage();
