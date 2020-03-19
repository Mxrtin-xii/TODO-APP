console.clear();

const Title = ({count}) => {
	//make a count variable showing the number of entries display alongside the title
  return ( 
		<div>
			<div>
			<h1> M's Todo ({count}) </h1>
			</div>
		</div>
	);
   }
	
const Todoform = {addtodo} => {
	let Inputrack;
	//The form adds the inputed value to the todolist on submit; a ref created for the input value 
	return (
		<form onsubmit = {(e) => {
		 e.preventdefault();
		 addtodo(input.value);
		 input.value = '';
		 }};>
		<input classname = ( Form-control col-md-12 ) ref = {node => {
			Inputrack =  node;
		}} />
		<br/>
		</form>
	);
  };
  
 const Todo = {todo, remove} => {
	 //This for each todo item and can be removed with a click
	return (<a href="#" classname = "each-todo-item" onclick = {() => {remove(todo.id)}}>{todo.text}</a>;
 }
 const Todolist = {source, remove} => {
	 //Maps from a source and renders each child component as a Todo component
	const Todosfromsource = source.map ((mappedsource) => {
	return (
	  <Todo todo={mappedsource} key={mappedsource.id} remove={remove} />
 });
   return (
       <div classname = "todo-total-list" style = {{margintop = '30px'}}>{Todosfromsource}</div>
	   );
	 }
	 
	 windows.id = 0;
	class TodoApp extends react component {
		constructor (props){
			super (props);
			this.state = {
			data: []
			}
		this.apiurl = '//57b1924b46b57d1100a3c3f8.mockapi.io/api/todos'
	}
	
	ComponentDidMount{
		//use the mock api on mounting
	    axios.get(this.apiUrl)
       .then((res) => {
			this.setstate({data: res.data});
			})
		}
		
	addtodo(val){
		const todo = {text: val} 
	   axios.post(this.apiUrl, todo)
       .then((res) => {
			this.state.data.push(res.data);
			this.setstate({data: this.state.data});
			})
		}
		
	remove(id){
		const remainder = this.state.data.filter((mapppedsource)
		if (mappedsource.id !== id) return mappedsource;
		   axios.post(this.apiUrl, remainder)
       .then((res) => {
			this,setstate({data: remainder});
		})
	}
	
	render {
		return (
	         <div>
			 <Title count = {this.state.data.length} />
			 <Todoform addtodo = {this.addtodo.bind(this)} / >
			 <Todolist remove = {this.remove.bind(this)} source =(this.state.data) />
			 </div>
			 );
			}
	
	ReactDom.render(<TodoApp />, document.getElementById('Container'))
			
