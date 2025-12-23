const mainTransferForm = document.querySelectorAll("#mainTransferForm");
const transferMain = document.querySelectorAll("#transferMain");
//  const transferMain = document.getElementById("transferMain");


 let acc = transferMain.forEach(function(trans){
   return trans.value;
 })
mainTransferForm.forEach(function(main){
    main.addEventListener("click", function(e){
        e.preventDefault();
        console.log("clicked")


        console.log(acc)

        // transferMain.forEach(function(act){
        //     console.log(act.closest(".send").value)
        // })
    // const ac =  Number(transferMain.value);
    // console.log(acc)

})
})

// mainTransferForm.addEventListener("click", function(){
//     mainTransferForm.forEach(function())
// })