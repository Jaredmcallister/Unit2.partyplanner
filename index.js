//console.log(`hello`);
// 50917 - 50921 are proper ID


//ol that we can append the APi events
//Grab that Ol using Documentselector
//Grab the API events
//
//const form = document.querySelector(`form`);
//form.addEventListener( `submit`, async (event) => {
  //event.preventDefault();
  const getEvents = async() => { 

  


  //const input = document.querySelector(`input`);
  //const eventID = input.value;
 try {
    const response = await fetch(`https://fsa-crud-2aa9294fe819.herokuapp.com/api/2409-ftb-et-web-ft/events`)
    const eventData = await response.json();
    console.log (eventData);
    eventData.data.map((event) => {
      const eventLi = document.createElement(`li`)
      eventLi.innerHTML = `
      <h3>${event.name}</h3>
      <p>${event.description}</p>
      <p>${event.date}</p>
      <p>${event.location}</p>`
      
      const eventList = document.querySelector(`ol`)
      eventList.appendChild(eventLi);
    });
    
    
  }catch(err){
    alert(`Improper ID`);


}

  }
  getEvents();
//const trueEvents = async() => {
  //trueEvents.preventDefault();
//const response = await fetch(`https://fsa-crud-2aa9294fe819.herokuapp.com/api/2409-ftb-et-web-ft/events/${events}`);
//const events = await response.json();
//console.log (events.data[0]);
//}
  