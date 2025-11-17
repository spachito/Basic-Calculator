function print(button,x){
   const z=document.getElementById('fname');
   let po=z.value;  
   if(x==='+'||x==='-'||x==='*'||x==='/'){
        if(po.length>0){
            document.getElementById('+').disabled=true;
            document.getElementById('-').disabled=true;
            document.getElementById('*').disabled=true;
            document.getElementById('/').disabled=true;

            let loi=po.charAt(po.length-1);
            if(loi==="+"||loi==="-"||loi==="*"||loi==="/"){
                console.log(loi);
            }
            else{
                po+=x;
                z.value=po;
                z.text=po;
            }
        }
        else{
            console.log(x);
        }
   }
   else if(x==='C'){
        po="";
        z.value=po;
        z.text=po;

   }
   else if(x==="="){
        calculate(po);
   }
   else if(x==="."){
        if(po.length===0){
            po='0.';
            z.value=po;
            z.text=po;

        }
        else if(po.includes('+')||po.includes('-')||po.includes('*')||po.includes('/')){
            let mui= po.split(/[\+\-\*\/]/).pop();
            if(mui.includes('.')){
                console.log('katran');
            }
            else{
                po+=x;
                z.value=po;
                z.text=po;
                document.getElementById('.').disabled=true;
            }


        }
        else if(po.includes(".")&&(!po.includes('+'))&&(!po.includes('-'))&&(!po.includes('*'))&&(!po.includes('/'))){
            console.log('katran');

        }
        else{
            po+=x;
            z.value=po;
            z.text=po;
        }

   }
   else{
        po+=x;
        z.value=po;
        z.text=po;
   }
   
   
}

function call(){
    connect();
    const k= document.querySelectorAll('.cal');
   k.forEach(button=>button.addEventListener('click',()=>print(button,button.id)));
}


function calculate(jk){
    let tre="";
    let tra="";
    for(let i=0;i<jk.length;i++){
        let tr=jk.charAt(i);
        if(!isNaN(tr)||tr==="."){
            tre+=tr;
        }
        else if(tr==="+"){
            for(let r=i+1;r<jk.length;r++){
                let re=jk.charAt(r);
                tra+=re;
            }
            let s=Number(tre);
            let w=Number(tra);
            console.log(tre);
            let q=s+w;
            document.getElementById('fname').value=q;
            document.getElementById('fname').text=q;
        }
        else if(tr==="-"){
            for(let r=i+1;r<jk.length;r++){
                let re=jk.charAt(r);
                tra+=re;
            }
            let s=Number(tre);
            let w=Number(tra);
            console.log(tre);
            let q=s-w;
            document.getElementById('fname').value=q;
            document.getElementById('fname').text=q;
        }
        else if(tr==="*"){
            for(let r=i+1;r<jk.length;r++){
                let re=jk.charAt(r);
                tra+=re;
            }
            let s=Number(tre);
            let w=Number(tra);
            console.log(tre);
            let q=s*w;
            document.getElementById('fname').value=q;
            document.getElementById('fname').text=q;
        }
        else if(tr==="/"){
            for(let r=i+1;r<jk.length;r++){
                let re=jk.charAt(r);
                tra+=re;
            }
            let s=Number(tre);
            let w=Number(tra);
            console.log(tre);
            if(w===0){
                document.getElementById('fname').value="Cannot divide by zero(0)";
                document.getElementById('fname').text="Cannot divide by zero(0)";
            }
            else{
                let q=s/w;
                document.getElementById('fname').value=q;
                document.getElementById('fname').text=q;
            }
        }
        
    }

     document.getElementById('+').disabled=false;
    document.getElementById('-').disabled=false;
    document.getElementById('*').disabled=false;
    document.getElementById('/').disabled=false;
    document.getElementById('.').disabled=false;

}

function connect(){
    const btn1=document.getElementById('1');
    const btn2=document.getElementById('2');
    const btn3=document.getElementById('3');
    const btn4=document.getElementById('4');
    const btn5=document.getElementById('5');
    const btn6=document.getElementById('6');
    const btn7=document.getElementById('7');
    const btn8=document.getElementById('8');
    const btn9=document.getElementById('9');
    const btn10=document.getElementById('+');
    const btn11=document.getElementById('-');
    const btn12=document.getElementById('*');
    const btn13=document.getElementById('/');
    const btn14=document.getElementById('.');
    const btn15=document.getElementById('=');
    const btn16=document.getElementById('C');


    document.addEventListener("keydown", function(e) {
    if (e.key === "1") {
        btn1.click();  // ενεργοποιεί το κουμπί
    }
    }
)

document.addEventListener("keydown", function(e) {
    if (e.key === "2") {
        btn2.click();  // ενεργοποιεί το κουμπί
    }
    }
)

document.addEventListener("keydown", function(e) {
    if (e.key === "3") {
        btn3.click();  // ενεργοποιεί το κουμπί
    }
    }
)

document.addEventListener("keydown", function(e) {
    if (e.key === "4") {
        btn4.click();  // ενεργοποιεί το κουμπί
    }
    }
)

document.addEventListener("keydown", function(e) {
    if (e.key === "5") {
        btn5.click();  // ενεργοποιεί το κουμπί
    }
    }
)

document.addEventListener("keydown", function(e) {
    if (e.key === "6") {
        btn6.click();  // ενεργοποιεί το κουμπί
    }
    }
)

document.addEventListener("keydown", function(e) {
    if (e.key === "7") {
        btn7.click();  // ενεργοποιεί το κουμπί
    }
    }
)

document.addEventListener("keydown", function(e) {
    if (e.key === "8") {
        btn8.click();  // ενεργοποιεί το κουμπί
    }
    }
)

document.addEventListener("keydown", function(e) {
    if (e.key === "9") {
        btn9.click();  // ενεργοποιεί το κουμπί
    }
    }
)

document.addEventListener("keydown", function(e) {
    if (e.key === "+") {
        btn10.click();  // ενεργοποιεί το κουμπί
    }
    }
)

document.addEventListener("keydown", function(e) {
    if (e.key === "-") {
        btn11.click();  // ενεργοποιεί το κουμπί
    }
    }
)

document.addEventListener("keydown", function(e) {
    if (e.key === "*") {
        btn12.click();  // ενεργοποιεί το κουμπί
    }
    }
)

document.addEventListener("keydown", function(e) {
    if (e.key === "/") {
        btn13.click();  // ενεργοποιεί το κουμπί
    }
    }
)

document.addEventListener("keydown", function(e) {
    if (e.key === ".") {
        btn14.click();  // ενεργοποιεί το κουμπί
    }
    }
)

document.addEventListener("keydown", function(e) {
    if (e.key === "=") {
        btn15.click();  // ενεργοποιεί το κουμπί
    }
    }
)

document.addEventListener("keydown", function(e) {
    if (e.key === "c") {
        btn16.click();  // ενεργοποιεί το κουμπί
    }
    }
)


}



