import React, { Component } from 'react';
// const Component = React.Component;

// ES6
class SearchBar extends Component {
    // state를 정의, 재초기화
    // 함수형 컴포넌트는 state를 갖지 않는다.
    // 클래스 기반 컴포넌트만 state를 갖는다.
    constructor(props) {
        // Component constructor() 가짐.
        super(props);

        // 새로운 Object 생성, 초기화 -> this.state에 할당
        this.state = { term: '' };
    }

    render() {
        //this.state.term = event.target.value //BAD!!!
        return (
            <div className="search-bar">
                <input
                    // state가 변할 때마다 input이 업데이트
                    value={this.state.term}
                    // 입력할 때 마다 state를 업데이트하여 전체 컴포넌트를 리랜더링
                    onChange={event => this.onInputChange(event.target.value)} />
            </div>
        );
    }

    onInputChange(term) {
        // 1. setState
        this.setState({term});
        // 2. onSearchTermChange 콜백 함수 호출
        this.props.onSearchTermChange(term);
    }
}

 // 어플리케이션의 어느 곳에서나 SearchBar 컴포넌트를 불러올 수 있다
export default SearchBar;