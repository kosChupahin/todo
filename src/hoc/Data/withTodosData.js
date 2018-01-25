import React, {Component} from 'react'

const withTodosData = (WrapComponent) => {
  class withData extends Component {
    state = {
      data:[]
    }

    componentDidMount(){
      this.prepareData()
    }

    prepareData(){
      // localStorage.removeItem('cachedTasks')

      const data = localStorage.getItem('cachedTasks')
      if (data) {
        this.setState({data:JSON.parse(data)})
      }
    }

    saveData(){
      const {data} = this.state

      localStorage.setItem('cachedTasks', JSON.stringify(data));
    }

    create = data => {
      this.setState({
        data: [...this.state.data, data]
      }, () => this.saveData())
    }

    remove = id => {
      const data = this.state.data.filter(item => item.id !== id)

      this.setState({ data }, () => this.saveData())
    }

    update = newItem => {
      const data = this.state.data.map(item => {
        if (item.id !== newItem.id) return item

        return {...item, ...newItem}
      })

      this.setState({ data }, () => this.saveData())
    }

    render(){
      return (
        <WrapComponent
          data={this.state.data}
          create={this.create}
          remove={this.remove}
          update={this.update}
          {...this.props}
        />
      )
    }
  }

  return withData
}

export default withTodosData