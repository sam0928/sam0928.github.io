var btn_ch_check = false;
var btn_en_check = false;
var btn_left_check = false;
var btn_right_check = false;
localStorage.clear()  // undefined   
localStorage      //Storage {length: 0} 儲存資料

function storage(value){
    var fs = require('fs');
    fs.writeFile("C:\\SamKo\\test_py\\from_LIFF.txt", "Hello!\noutput file\nby Node.js", function(err) {
        if(err) {
            console.log(err);
        } else {
            console.log("The file was saved!");
        }
    });
    // var fso=new ActiveXObject(Scripting.FileSystemObject);
    // var f=fso.createtextfile("C:\\SamKo\\test_py\\from_LIFF.txt",2,true); 
    // f.writeLine(value);
    // f.close(); 
}

// function check(id){
//     if(id === "left"){
//         btn_left_check = true;
//     }else if(id === "right"){
//         btn_right_check = true;
//     }else if(id === "btn_ch"){
//         btn_ch_check = true;
//         btn_en_check = false;
//     }else{
//         btn_en_check = true;
//         btn_ch_check = false;
//     }

//     if(btn_en_check == true){
//         if(btn_left_check == true){
//             location.href = "./test.html";
//             // location.href = "../meal.en/monthly.html";
//             localStorage.setItem("state","內用") //儲存名字為name值為caibin的變數
//             localStorage // Storage{state: "in", length: 1} 讀取資料
//         }
//         if(btn_right_check == true){
//             location.href = "./test.html";
//             localStorage.setItem("state","外帶")
//             localStorage
//             // location.href = "../meal.en/monthly.html";
//         }
//     }else{
//         if(btn_left_check == true){
//             location.href = "../meal_ch/monthly.html";
//             localStorage.setItem("state","內用")
//             localStorage
//         }
//         if(btn_right_check == true){
//             location.href = "../meal_ch/monthly.html";
//             localStorage.setItem("state","外帶")
//             localStorage
//         }
//     }
// }