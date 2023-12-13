let imgBox = document.querySelector('.imgBox');
let qrImg = document.getElementById('img');
let qrText = document.getElementById('inputText');

const GenerateQR = () => {
    if(qrText.value.length >0  && qrImg.src !== "" ){
    qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+qrText.value;
        imgBox.classList.add('show-qr')
    }else{
        imgBox.classList.remove('show-qr')
        qrText.classList.add('error')

    }
    setTimeout(()=>{
        qrText.classList.remove('error')
    },2000)
}