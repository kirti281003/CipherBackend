import "./Map.css";
function Map()
{
var arr=[];
for(var i=1;i<365;i++)
{
   
    if(i%5==0)
    {
        arr[i]=1;
    }
    else
    {
        arr[i]=0;
    }
}

    return(
        <>
        <h2 className="maphead">Cipher Map</h2>
        <div class="graph">
    <ul class="months">
      <li>Jan</li>
      <li>Feb</li>
      <li>Mar</li>
      <li>Apr</li>
      <li>May</li>
      <li>Jun</li>
      <li>Jul</li>
      <li>Aug</li>
      <li>Sep</li>
      <li>Oct</li>
      <li>Nov</li>
      <li>Dec</li>
    </ul>
    <ul class="days">
      <li>Sun</li>
      <li>Mon</li>
      <li>Tue</li>
      <li>Wed</li>
      <li>Thu</li>
      <li>Fri</li>
      <li>Sat</li>
    </ul>
    <ul class="squares">
  {arr.map(item=>{
    if(item==0)
    {
        return(
            <li></li>
        )
    }
    else{console.log(true)
        return( 
            <li data-level="1"></li>
        )
    }
  })}
    </ul>
  </div>

        </>
    )
}
export default Map;