import './App.css'
import Card from './components/card'

function App() {

  const jobOpenings = [
  {
    name: "Tech",
    logo: "https://logo.clearbit.com/techflow.com",
    duration: "Full-time",
    role: "Senior Frontend ",
    level: "Senior",
    timePosted: "2 hours ago",
    money: "$140,000 - $180,000",
    location: "Remote (US)"
  },
  {
    name: "Green",
    logo: "https://logo.clearbit.com/greengrid.io",
    duration: "Contract",
    role: "Sustainability ",
    timePosted: "1 day ago",
    level: "Senior",
    money: "$65 - $80 / hour",
    location: "Austin, TX"
  },
  {
    name: "Stellar ",
    logo: "https://logo.clearbit.com/stellarcreative.com",
    duration: "Full-time",
    role: "UI/UX Designer",
    level: "Senior",
    timePosted: "3 days ago",
    money: "$110,000 - $135,000",
    location: "New York, NY"
  },
  {
    name: "Health",
    logo: "https://logo.clearbit.com/healthbridge.org",
    duration: "Part-time",
    role: "Data Analyst",
    timePosted: "5 hours ago",
    money: "$45,000 - $55,000",
    level: "Senior",
    location: "Chicago, IL"
  },
  {
    name: "BlueSky ",
    logo: "https://logo.clearbit.com/bluesky.com",
    duration: "Full-time",
    role: "Manager",
    timePosted: "1 week ago",
    money: "$90,000 - $115,000",
    level: "Senior",
    location: "Atlanta, GA"
  },
  {
    name: "BlueSky ",
    logo: "https://logo.clearbit.com/bluesky.com",
    duration: "Full-time",
    role: "Manager",
    timePosted: "1 week ago",
    money: "$90,000 - $115,000",
    location: "Atlanta, GA",
    level: "Senior"
  },
  {
    name: "BlueSky ",
    logo: "https://logo.clearbit.com/bluesky.com",
    duration: "Full-time",
    role: "Manager",
    timePosted: "1 week ago",
    level: "Senior",
    money: "$90,000 - $115,000",
    location: "Atlanta, GA"
  }
];

  return (
    
    <div className='fullbody'>
      {jobOpenings.map(function(elem){
          return <Card name ={elem.name}  duration = {elem.duration} role ={elem.role} time ={elem.timePosted} money = {elem.money} location = {elem.location} level = {elem.level}/>
      })}
    </div>
  )
}

export default App
