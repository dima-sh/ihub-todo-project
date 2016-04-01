import React from 'react';

class TopBar extends React.Component {
    render() {

        return (

            <div className='todo-bar'>
                <div className='todo-bar-new'>
                    <form>
                        <input id='new-todo'
                               name=''
                               placeholder='Start typing here to create a task...'
                               type='text' />
                        <button id='create-todo' type='button'>Add Task</button>
                    </form>
                </div>

            </div>
        )
    }
}

export default TopBar;
