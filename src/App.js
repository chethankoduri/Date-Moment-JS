import logo from './logo.svg';
import './App.css';
import moment from 'moment';

function App() {
  let indipendenceDay = new Date(1947,7,15,0,30,111);
  let monthsArr = ["January","February","March","April","May","June","July","August","September","October","November","December"]
  let dayArr = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
  console.log(indipendenceDay)
  console.log(indipendenceDay.getFullYear());
  console.log(monthsArr[indipendenceDay.getMonth()]);
  console.log(dayArr[indipendenceDay.getDay()]);
  console.log(indipendenceDay.getHours());
  console.log(indipendenceDay.getMinutes());
  console.log(indipendenceDay.getSeconds());
  console.log(indipendenceDay.getMilliseconds());

  //console.log(indipendenceDay.setFullYear(2047));
  //console.log(indipendenceDay.setFullYear(1927));
  let date = Date.now(100000);
  console.log(date)

  const d = new Date("1947-08-15");
  console.log(monthsArr[d.getMonth()]);
  console.log(d.getFullYear())


  return (
    <div className="App">
    <h1>Learning Date Methods</h1>
    <form>
      <div>
        <label>date</label>
        <input type="date" onChange={(eo)=>{
          let BatchStartDate = new Date(eo.target.value);
          console.log(BatchStartDate)
        let courseDuration = 120*24*60*60*1000;
        let courseEndDate = BatchStartDate.getTime()+courseDuration
        let finalDuration = new Date(courseEndDate);
        console.log(finalDuration);
        }}></input>
      </div>
    </form>
    <button type="button" onClick={()=>{
      console.log(moment().format('MMMM Do YYYY, h:mm:ss a'))
    }}>date</button>
    </div>
  );
}

export default App;
