/**
 * 
 * 리액트는 자바스크립트 라이브러리이다.
 * 
 * 웹 브라우저에서 보여지는 HTML을 만드는 라이브러리이다.
 * 
 * 컴포넌트 (Component) 혹은 뷰 (View)를 각각 만들게 된다.
 * 컴포넌트는 소스코드의 일부이며 이 코드는 HTML을 생성한다.
 *
 * 리액트 코드를 작성하면서 여러 개의 다른 컴포넌트를 작성하게 되는데
 * 이 컴포넌트들을 다른 방식으로 배치하면서 복잡한 어플리케이션을 간단하게 만든다.
 * 
 * 컴포넌트는 HTML을 만드는 자바스크립트 함수의 모음집이다.
 * 그래서 자바스크립트로 컴포넌트를 만들 때 궁극적으로HTML으로 만들어진다.
 * 
 */

  // node_modules에서 react 라이브러리를 불러오기
  // npm으로 설치된 라이브러리는 패키지의 이름만 작성하고,
  // 내가 직접 만든 파일을 가져오려면 상대 주소를 작성
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import search from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyDkNmNdT5v1ppeAsfa3YVndECokBx09QnE';


 // Create a new component. This component should produce
 // some HTML
 // 변화 되어야 할 값 (videos)가 존재하기 때문에 클래스 기반 컴포넌트로 변경
class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

        search({key: API_KEY, term: 'surfboards'}, (videos) => {
            // console.log(data);
            // this.setState({ videos: videos });
            // key와 value가 같을 때
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }

    render() {
        return (
            <div>
                <SearchBar />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos} />
            </div>
        );
    }
}

 // Take this component's generated HTML and put it
 // on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));

