let dataset = {
    pollution : "Pollution is one of the most dangerous environmental problems the world is facing today. To stop the impending perils that pollution could cause, it is necessary that we start taking some actions to keep our environment safe and healthy. This article will give you a gist of all that you need to know if you want to write an article on pollution.",
    globalWarming : "Since the Industrial Revolution, the global annual temperature has increased in total by a little more than 1 degree Celsius, or about 2 degrees Fahrenheit. Between 1850—the year that accurate recordkeeping began—and 1980, it rose on average by 0.07 degrees Celsius (0.13 degrees Fahrenheit) every 10 years. Since 1981, however, the rate of increase has more than doubled: For the last 40 years, we’ve seen the global annual temperature rise by 0.2 degrees Celsius, or 0.36 degrees Fahrenheit, per decade.",
    ai : "Most people are not very familiar with the concept of artificial intelligence (AI). As an illustration, when 1,500 senior business leaders in the United States in 2017 were asked about AI, only 17 percent said they were familiar with it.1 A number of them were not sure what it was or how it would affect their particular companies. They understood there was considerable potential for altering business processes, but were not clear how AI could be deployed within their own organizations.",
    agriculture : "Agriculture encompasses crop and livestock production, aquaculture, and forestry for food and non-food products.[1] Agriculture was a key factor in the rise of sedentary human civilization, whereby farming of domesticated species created food surpluses that enabled people to live in the cities. While humans started gathering grains at least 105,000 years ago, nascent farmers only began planting them around 11,500 years ago. Sheep, goats, pigs, and cattle were domesticated around 10,000 years ago. Plants were independently cultivated in at least 11 regions of the world. In the 20th century, industrial agriculture based on large-scale monoculture came to dominate agricultural output.",
};

let heading = document.querySelector(".heading");
let details = document.querySelector(".details");

// console.log(heading.innerText)

// heading.innerText = "test"; 

function pollution(){
    heading.innerText = "Pollution";
    details.innerText = dataset.pollution;
}

function global_warming(){
    heading.innerText = "Global Warming";
    details.innerText = dataset.globalWarming;
}

function ai(){
    heading.innerText = "Artificial Intelligence";
    details.innerText = dataset.ai;
}

function agriculture(){
    heading.innerText = "Agriculture";
    details.innerText = dataset.agriculture;
}