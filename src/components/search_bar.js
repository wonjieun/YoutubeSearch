import React, { Component } from 'react';
// const Component = React.Component;

// ES6
class SearchBar extends Component {
    render() {
        return <input onChange={event => console.log(event.target.value)} />;
    }

    onInputChange(event) {
        console.log(event.target.value);
    }
}

 // 어플리케이션의 어느 곳에서나 SearchBar 컴포넌트를 불러올 수 있다
export default SearchBar;