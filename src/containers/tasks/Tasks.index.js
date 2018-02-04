import React, { Component } from 'react';
import AddTask from '../../components/tasks/AddTask';
import PopUpTask from '../../components/tasks/PopUpTask';
import ButtonTask from '../../components/tasks/Button';
import '../../css/App.css';
//import Filter from '../../components/categories/Filter'; check!!!!

export class Task extends Component {
  render() {
  const currentCategory = this.props.props.currentCategory;
  const showComplete = this.props.showComplete;
    return (
      <div >
        <AddTask addTask={this.props.addTask} currentCategory={currentCategory}/>
        {
          this.props.popupTaskVisibility.visibility ?
          <PopUpTask
            currentTask={this.props.popupTaskVisibility}
            editTask={this.props.editTask}
            showPopupTask={this.props.showPopupTask}
            checkTask={this.props.checkTask}
          /> :
          null
        }
        <div className="list list-group">
          {this.props.tasks
              .filter((item) => item.name.match(new RegExp(this.props.searchValue, 'gi')))
              .map((data) => {
                if(currentCategory === data.category && (showComplete ? true : !data.complete)) {
                  return <div key={data.id} className="list-group-item task">
                     <input type="checkbox"
                       checked={data.complete}
                       onChange={(e) => {
                         this.props.checkTask(data.id, data.complete)
                         }
                       }
                     />
                     <p>{data.name}</p>
                     <ButtonTask
                       id={data.id}
                       name = {data.name}
                       description = {data.description}
                       complete = {data.complete}
                       editTask={this.props.editTask}
                       showPopupTask={this.props.showPopupTask}
                       checkTask={this.props.checkTask}
                     />
                   </div>
                }
              })
          }
        </div>
      </div>
    );
  }
}
