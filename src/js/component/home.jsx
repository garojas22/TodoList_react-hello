
import React from "react";

const Home = () => {
	return (
	<div className="p-5 bg-primary">
	<div id="container" className="p-2 p-0">
	        <div className="container">
	        	<div className="todoapp stack-large">
				<h1 class="todo-header">To do List</h1>
				    <div id="add" className="search">
                            <input
                            id="addToDo"
                            type="text"
                            name="text"
							style={{width:"260px"}}
                            />
                            <button id="boton" type="submit" className="btn-add btn">
                            Add
                            </button>
                    </div>
	        		<div className="py-1"> 
                        <ul id="myList"
                            role="list"
                            className="todo-list stack-large stack-exception"
                            aria-labelledby="list-heading">
                        </ul>
                        <div class="empty">
                            <p>No tienes tareas pendientes.</p>
                        </div>
		            </div>
	        	</div>
	        </div>
    </div>
	</div>
	);
};

export default Home;


// 

