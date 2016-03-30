import React from 'react';

class Header extends React.Component {
  constructor() {
    super()
    this.state = {
      value: undefined,
      isHidden: true
    }
  }

  _handleChange(event) {
    const value = event.target.value;
    this.setState({ value });
  }

  _handleVisibility() {
    this.setState(
      { isHidden: !this.state.isHidden },
      () => {
        if (this.state.isHidden === false) {
          this.refs.input.focus()
        }
      })
  }

  _updateProject(event) {
    if (event.keyCode === 13) {
      updateProjectById(this.props.projectId, { name: this.state.value })
        .then(({ name }) => this.setState({ value: name, isHidden: true }))
    }
  }

  _deleteProject() {

    removeProjectById(this.props.projectId)
  }

  render() {

    let name;

    if (this.state.value !== undefined) {
      name = this.state.value
    } else {
      name = this.props.name
    }

    const { isHidden } = this.state;

    return (

      <div className='todo-header'>
        <h3 style={{ display: isHidden ? 'block' : 'none'}}>{name}</h3>
        <ul className='header-list'>
          <li>
            <a className='todo-action-edit' onClick={this._handleVisibility.bind(this)}>Edit</a>
          </li>
          <li>
            <a className='todo-action-remove' onClick={this._deleteProject.bind(this)}>Delete</a>
          </li>
        </ul>

        <input style={{ display: isHidden ? 'none' : 'block'}}
               id='project-name'
               value={name}
               onChange={this._handleChange.bind(this)}
               onKeyDown={this._updateProject.bind(this)}
               ref='input' />
      </div>
    )
  }
}

export default Header;
