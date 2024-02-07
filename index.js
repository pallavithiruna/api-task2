// v=fetch('https://data.covid19india.org/v4/min/timeseries.min.json')
// .then(
//     res=>res.json()
// )
// .then(
//     data=>console.log(data)
//     )

    g=fetch("https://data.covid19india.org/v4/min/data.min.json")
    .then(
        response=>response.json()
    )
    .then(
        info=>{
            console.log(info);
            console.log(info.TN)
            console.log(info.TN.districts)
            console.log(info.TN.districts.Ariyalur)
            console.log(info.TN.districts.Ariyalur.total)
            console.log(info.TN.districts.Ariyalur.total.confirmed)
            console.log(info.TN.districts.Ariyalur.total.deceased)
            console.log(info.TN.districts.Ariyalur.total.recovered)
            console.log(info.TN.districts.Ariyalur.total.tested)
            console.log(info.TN.districts.Ariyalur.total.vaccinated1)
            console.log(info.TN.districts.Ariyalur.total.vaccinated2)
            document.getElementById("ari1").innerHTML=info.TN.districts.Ariyalur.total.confirmed;
            document.getElementById("ari2").innerHTML=info.TN.districts.Ariyalur.total.deceased;
            document.getElementById("ari3").innerHTML=info.TN.districts.Ariyalur.total.recovered;
            document.getElementById("ari4").innerHTML=info.TN.districts.Ariyalur.total.tested;
            document.getElementById("ari5").innerHTML=info.TN.districts.Ariyalur.total.vaccinated1;
            document.getElementById("ari6").innerHTML=info.TN.districts.Ariyalur.total.vaccinated2;


            document.getElementById("chen1").innerHTML=info.TN.districts.Chengalpattu.total.confirmed;
            document.getElementById("chen2").innerHTML=info.TN.districts.Chengalpattu.total.deceased;
            document.getElementById("chen3").innerHTML=info.TN.districts.Chengalpattu.total.recovered;
            document.getElementById("chen4").innerHTML=info.TN.districts.Chengalpattu.total.tested;
            document.getElementById("chen5").innerHTML=info.TN.districts.Chengalpattu.total.vaccinated1;
            document.getElementById("chen6").innerHTML=info.TN.districts.Chengalpattu.total.vaccinated2;

            document.getElementById("che1").innerHTML=info.TN.districts.Chennai.total.confirmed;
            document.getElementById("che2").innerHTML=info.TN.districts.Chennai.total.deceased;
            document.getElementById("che3").innerHTML=info.TN.districts.Chennai.total.recovered;
            document.getElementById("che4").innerHTML=info.TN.districts.Chennai.total.tested;
            document.getElementById("che5").innerHTML=info.TN.districts.Chennai.total.vaccinated1;
            document.getElementById("che6").innerHTML=info.TN.districts.Chennai.total.vaccinated2;

            document.getElementById("co1").innerHTML=info.TN.districts.Coimbatore.total.confirmed;
            document.getElementById("co2").innerHTML=info.TN.districts.Coimbatore.total.deceased;
            document.getElementById("co3").innerHTML=info.TN.districts.Coimbatore.total.recovered;
            document.getElementById("co4").innerHTML=info.TN.districts.Coimbatore.total.tested;
            document.getElementById("co5").innerHTML=info.TN.districts.Coimbatore.total.vaccinated1;
            document.getElementById("co6").innerHTML=info.TN.districts.Coimbatore.total.vaccinated2;

            document.getElementById("cu1").innerHTML=info.TN.districts.Cuddalore.total.confirmed;
            document.getElementById("cu2").innerHTML=info.TN.districts.Cuddalore.total.deceased;
            document.getElementById("cu3").innerHTML=info.TN.districts.Cuddalore.total.recovered;
            document.getElementById("cu4").innerHTML=info.TN.districts.Cuddalore.total.tested;
            document.getElementById("cu5").innerHTML=info.TN.districts.Cuddalore.total.vaccinated1;
            document.getElementById("cu6").innerHTML=info.TN.districts.Cuddalore.total.vaccinated2;

            
        }
        // console.log(info.TN)
        
    )
    document.getElementById("ari2").innerHTML=info.TN.districts.Ariyalur.total.confirmed;