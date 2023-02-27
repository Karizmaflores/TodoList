    // We'll pre-populate this array with a couple objects just so it's not undefined if your internet connection isn't working properly.

    let arrayOfTodos = [
      {
      "userId": 14,
      "id": 1,
      "title": "delectus aut autem",
      "completed": false
  },
  {
      "userId": 20,
      "id": 2,
      "title": "delectus aut autem",
      "completed": false
  }]
  
//   const fetchTodos = () => {
//     fetch('')
//     .then((respsonse) => {
//         return stuff
//     })
//     .then((data) => {

//     }
    // )
    const fetchTodos = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')

      .then( (response) => {
      console.log('response:', response)
      return response.json()
      })

      .then( (json) => {
        console.log('json:', json)
      arrayOfTodos = json
     })
    //  }
  
  const logTodos = () => {
      console.log(arrayOfTodos)
  }
}
  
//   const populateTodos = () => {
//     let firstUser = arrayOfTodos[0]
//     console.log('firstUser', firstUser.userId)

//     for (let index = 0; index < arrayOfTodos.length; index ++){
//         const todo =  arrayOfTodos[index];
//         console.log('todo:', todo)
//     }
//   }

  const populateTodos = () => {
    let list = document.getElementById("todo-list");

    for (let index = 0; index < arrayOfTodos.length; index ++){
        let li = document.createElement("li");
        const text = document.createTextNode(arrayOfTodos[1]);
        list.appendChild(text);
        document.getElementById('todo-list').appendChild(li);
    }


    let firstUser = arrayOfTodos[0]
    console.log('firstUser', firstUser.userId)

    for (let index = 0; index < arrayOfTodos.length; index ++){
        const todo =  arrayOfTodos[index];
        console.log('todo:', todo)
    }
  }