const obj ={ 
  name: 'Sam',
  id: "Sanjay",
  talk() {
    console.log(this)
  }
}

console.log(obj.talk());

const samTalk = obj.talk.bind(obj);

samTalk();


// let jobs = [
//   {id: 1, isActive: true},
//   {id: 2, isActive: false},
//   {id: 3, isActive: true},
// ];

// const conJobs = jobs.map(job => job.isActive = false);
// console.log(conJobs);
// console.log(jobs)


// const arr = [1, 2, 3];

// const newArr = arr.map(ele => ele = 2);

// console.log("New", newArr);
// console.log("old", arr);