import React, { Component } from 'react';

import Buttons from '../../components/categories/Buttons';
import AddCategory from '../../components/categories/AddCategory';
import PopUp from '../../components/categories/PopUp';
import Confirm from '../../components/categories/Confirm';
import Task from '../../containers/tasks/Tasks.selector';
import { Button } from 'react-bootstrap';

import styled from "styled-components";
import '../../css/App.css';

const SubCategory = styled.div`
  margin-left: ${props => `${props.level * 20}px`};
`;

export class Category extends Component {
  constructor(props) {
    super(props);
    this.renderCategories = this.renderCategories.bind(this);
  }

  renderCategories(id=null){
    return (
      <div className="list list-group" >
        {this.props.categories
        .filter((data) => data.parent === id)
        .map((data) => {
        return (
        <div key={data.id}
        >
          <SubCategory  level={data.level} className={
            (this.props.currentCategory === data.id ?
            "list-group-item list-group-item-action active category" :
            "list-group-item list-group-item-action category")
          }
            onClick={(e) => this.props.activeCategory(data.id, true)}
          >
            <div className={data.subCategories.length === 0 ? "indent" : ""}>
              {data.subCategories.length > 0 ? (
                <Button
                  id={data.id}
                  onClick={(e)=>{
                    this.props.openSubCategory(data.id, data.parent)
                  }}
                >
                  <span
                    className={data.visibleSubCategory ? "glyphicon glyphicon-menu-up" : "glyphicon glyphicon-menu-down"}
                  >
                  </span>
                </Button>
              ) : null
              }
              <p>
                {data.name}
              </p>
              <Buttons
                id={data.id}
                name = {data.name}
                level = {data.level}
                parent = {data.parent}
                editCategory={this.props.editCategory}
                deleteCategory={this.props.deleteCategory}
                addCategory={this.props.addCategory}
                showPopup={this.props.showPopup}
                currentCategory={this.props.currentCategory}
                showPopupSubCategory={this.props.showPopupSubCategory}
                activeCategory={this.props.activeCategory}
                showConfirm={this.props.showConfirm}
              />
            </div>

          </SubCategory>
          {(data.subCategories.length > 0 && data.visibleSubCategory) ? this.renderCategories(data.id) : null}
        </div>
        )
        })
        }
      </div>
    )
  }

  render() {
    return (
      <div className="row">
        <div className="col-lg-6">
          <AddCategory addCategory={this.props.addCategory} />
            {this.props.popupVisibility.visibility ?
                <PopUp
                  popup={this.props.popupVisibility}
                  editCategory={this.props.editCategory}
                  showPopup={this.props.showPopup}
                  addCategory={this.props.addCategory}
                  currentCategory={this.props.currentCategory}
                  showPopupSubCategory={this.props.showPopupSubCategory}
                /> :
            null}
            {this.props.confirmVisibility.visibility ?
                <Confirm
                  confirmVisibility={this.props.confirmVisibility}
                  deleteCategory={this.props.deleteCategory}
                  activeCategory={this.props.activeCategory}
                  showConfirm={this.props.showConfirm}
                /> :
            null}
          {this.renderCategories()}
        </div>

        <div className="col-lg-6 tasks">
          <Task
            props={this.props}
            state={this.state}
            currentCategory={this.props.currentCategory}
          />
        </div>

      </div>
    );
  }
}
