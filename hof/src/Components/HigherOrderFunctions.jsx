import { Component } from "react";

class HigherOrderFunction extends Component {
    constructor() {
        super();
        this.state = {
            userData: [
                { id: '1', name: 'Joe', user_type: 'Developer', age: 31, years: 11 },
                { id: '2', name: 'Hill', user_type: 'Designer', age: 26, years: 4 },
                { id: '3', name: 'John', user_type: 'Teacher', age: 24, years: 2 },
                { id: '4', name: 'Sam', user_type: 'Entreprenuer', age: 58, years: 25 },
                { id: '5', name: 'Jack', user_type: 'Designer', age: 43, years: 18 }
            ]
        }
    }


    renderItems = () => {
        return(
            <ul>
                {this.state.userData.map( user => {
                    return (
                        <li key={user.id}>
                            <span>Id: {user.id}  &emsp;  </span>
                            <span>Name: {user.name} &emsp; </span>
                            <span>User Type: {user.user_type}</span>
                        </li>
                    )
                })}
            </ul>
        )
    }

    renderUserType = () => {
        const data = this.state.userData.filter((type) => {
            return type.user_type == "Designer";
        })

        return (
            <ul>
                {data.map(user => {
                    return (
                        <li key={user.id}>
                            <span>Id: {user.id}  &emsp;  </span>
                            <span>Name: {user.name} &emsp; </span>
                            <span>User Type: {user.user_type}</span>
                        </li>
                    )
                })}
            </ul>
        )
    }

    renderCharacterJ = () => {
        const character = this.state.userData.filter(char => {
            return char.name[0] == 'J'
        })

        return (
            <ul>
                {character.map(user => {
                    return (
                        <li key={user.id}>
                            <span>Id: {user.id}  &emsp;  </span>
                            <span>Name: {user.name} &emsp; </span>
                            <span>User Type: {user.user_type}</span>
                        </li>
                    )
                })}
            </ul>
        )
    }

    renderBasedOnAge() {
        const Data = this.state.userData.filter(user => {
            return user.age > 28 && user.age < 50;
        })

        return (
            <ul>
                {Data.map(user => {
                    return (
                        <li key={user.id}>
                            <span>Id: {user.id}  &emsp;  </span>
                            <span>Name: {user.name} &emsp; </span>
                            <span>User Type: {user.user_type}</span>
                        </li>
                    )
                })}
            </ul>
        )
    }

    renderExperience() {
        const Type = this.state.userData.filter(user => {
            return user.user_type === "Designer"
        })

        const userExp = Type.reduce((acc, type) => {
            return acc + type.years
        }, 0)

        return <li>{userExp}</li>

    }


    render() {
        return (
            <div>
                <h2>Display all items</h2>
                {this.renderItems()}
                
                <h2>Display based on user type</h2>
                {this.renderUserType()}

                <h2>Filter all data starting with J</h2>
                {this.renderCharacterJ()}
                
                <h2>Filter all data based on age greater than 28 and age less than or equal to 50</h2>
                {this.renderBasedOnAge()}
                
                <h2>Find the total years of the designers</h2>
                {this.renderExperience()}
            </div>)
    }

}

export default HigherOrderFunction;