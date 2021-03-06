
import React, { PureComponent } from 'react';

import Person from './Person/Person';

class Persons extends PureComponent {

    constructor(props) {
        super(props);
        console.log('[Persons.js] Inside constructor', props)
       
    }

    componentWillMount() {
        console.log('[Persons.js] Inside componentWillMount')
    }
    
    componentDidMount() {
        console.log('[Persons.js] Inside componentDidMount')
    }

    componentWillReceiveProps(nextProps){
        console.log('[Persons.js] Inside componentWillReceiveProps',nextProps)
    }

    // shouldComponentUpdate(nextProps, nextState){
    //     console.log('[Persons.js] Inside shouldComponentUpdate',nextProps,nextState)
    //     return true;
    // }

    componentWillUpdate(nextProps,nextState){
        console.log('[Persons.js] Inside componentWillUpdate',nextProps,nextState)        
    }

    componentDidUpdate(){
        console.log('[Persons.js] Inside componentDidUpdate')   
    }
    render() {
        console.log('[Persons.js] Inside render')
        return this.props.person.map((person, index) => {
            return <Person
                click={() => this.props.clicked(index)}
                position={index}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.props.changed(event, person.id)} />

        });
    }
}

export default Persons;