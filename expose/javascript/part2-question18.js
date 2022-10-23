function Dates(){
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}
setInterval(Dates, 1000);