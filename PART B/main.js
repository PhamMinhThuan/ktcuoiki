let count=0;
function numberSection(){   
    let guessNumber = document.getElementById("number").value;
    let number=2;
    // điền kiên guessNumber nằm trong khoảng 1 đến 10, 1<x<10
    if((guessNumber<=1)||(guessNumber>=10)){
        count++;
        if(count==3){
            alert("Bạn đã chọn sai, số cần đoán là: "+number);
        }else{
            alert("Mời nhập lại số nằm trong khoảng 1 đến 10");
    }
        // Nhap sai guessNumber khac ket qua
    } else if(guessNumber!=number){
        count++;
        if(count<3){
            // Nhap sai
            alert("Mời nhập lại");
        }
        if(count==3){
            alert("Bạn đã chọn sai, số cần đoán là: "+number);
        }
        // Nhap dung guessNumber nhap thuong
    }else{
        alert("Bạn đã chọn đúng số: "+number+" và bạn sẽ được quà");
    }
}



























